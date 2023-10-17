<script setup>
import { store } from './store.js'
import { onMounted, reactive } from 'vue'
import RespondentQuestions from './components/RespondentQuestions.vue'
import FirstBenefit from './components/FirstBenefit.vue'
import SecondBenefit from './components/SecondBenefit.vue'
import EmailForm from './components/EmailForm.vue'
import ProgramRecomendation from './components/ProgramRecomendation.vue'
import ProgramsLoader from './components/ProgramsLoader.vue'
import { pageview, event } from 'vue-gtag'
import { useFavicon } from '@vueuse/core'
import { useSeoMeta } from '@unhead/vue'
import {useI18n} from "vue-i18n";
import WhatsappForm from "./components/WhatsappForm.vue";

const i18n = useI18n();

useSeoMeta({
  title: i18n.t('Title'),
  description: i18n.t('Description'),
})

const url = new URL(window.location.href)

const localization = reactive({
    childBtnLabel: 'Esu mokinys',
    parentBtnLabel: 'Esu tėvelis/globėjas'
})

onMounted(() => {
    pageview(window.location.pathname);
    event('quiz_started');

    if (window.location.hostname === 'quiz.memby.lv') {
      store.lang = 'LV'
      const favicon = useFavicon();
      favicon.value = 'memby-fav.webp';
    }

    if (store.lang === 'LV') {
        localization.childBtnLabel = 'Esmu skolēns'
        localization.parentBtnLabel = 'Esmu vecāks/ aizbildnis'
        window.document.title = 'Memby'
        window.document.querySelector("meta[name='description']").content =
            'Šī ir visefektīvākā mācību programma, lai uzlabotu savas atzīmes par 2 atzīmēm augstāk, 2 mēnešu laikā'
    }

    if (url.searchParams.has('role')) {
        if (url.searchParams.get('role') === 'parent') {
            store.respondent = 'parent'
            store.step = 1
        }
        if (url.searchParams.get('role') === 'child') {
            store.respondent = 'child'

            store.step = 1
        }
    }

    if (url.searchParams.has('class') || url.searchParams.has('subject')) {
        // praleidžiame INTRO, Q1 langą, Q4, BENEFIT, CTA langus.
        store.step = 2
        store.showCTA = false
    }
    if (url.searchParams.has('class')) {
        store.respondent = 'child'
        store.selectedClass = url.searchParams.get('class');
    }

    // Redirect straight to results
    if (
        (url.searchParams.has('persona') &&
            url.searchParams.has('class') &&
            url.searchParams.has('level') &&
            url.searchParams.has('subjects') &&
            url.searchParams.has('tier'))
    ) {
        // Set Data Values
        store.selectedPersona = url.searchParams.get('persona')
        store.selectedClass = url.searchParams.get('class')
        store.childLevel = url.searchParams.get('level')
        store.selectedSubjects = JSON.parse(url.searchParams.get('subjects'))
        store.TIER = url.searchParams.get('tier')

        // Display results
        store.step = 10
        store.showRecomendations = true;
    }
})

const respondentChildHandler = () => {
    store.step = 1
    store.respondent = 'child'
}
const respondentParentHandler = () => {
    store.step = 1
    store.respondent = 'parent'
}
const prevStep = () => {
    if (store.step === 3 && store.showFirstBenefit) {
        store.step = 3
        store.showFirstBenefit = false
    } else if (store.step === 5 && store.showSecondBenefit) {
        store.step = 5
        store.showSecondBenefit = false
    } else {
        store.step -= 1
    }
}
const nextStep = () => {
    if (store.step === 3 && store.showFirstBenefit === false) {
        if (!url.searchParams.has('class')) {
            store.step = 3
            store.showFirstBenefit = true
        } else {
            store.step = 4
            store.showFirstBenefit = false
        }
    } else if (store.step === 5 && store.showSecondBenefit === false) {
        if (!url.searchParams.has('class')) {
            store.step = 5
            store.showSecondBenefit = true
        } else {
            store.step = 6
            store.showSecondBenefit = false
        }
    } else {
        store.step += 1
    }
    if (url.searchParams.has('class') || url.searchParams.has('subject')) {
        store.showFirstBenefit = false
        if (store.step === 4) {
            store.step = 5
        }
        if (store.step > 7) {
            store.showRecomendations = false
        }
    }
}

const completeness = (step) => {
    if (store.lang === 'LT') {
        return (100 / store.quiz.LT.child.length) * step
    }
    if (store.lang === 'LV') {
      return (100 / store.quiz.LT.child.length) * step
    }
}
</script>

<template>
    <!-- Intro -->
    <div class="container--intro yellow" v-if="store.step === 0">
        <div class="brand-logo brand-logo--mobile">
            <img
                v-if="store.lang === 'LT'"
                src="./assets/images/digiklase.svg"
                alt="Digiklase logo"
            />
            <img v-if="store.lang === 'LV'" src="./assets/images/memby.svg" alt="Memby logo" />
        </div>
        <img src="./assets/images/skateboard.svg" alt="" class="intro-visual" />
        <h1 class="intro-heading" v-if="store.lang === 'LT'">
            Užpildykite trumpą klausimyną ir <br />
            gaukite specialiai JUMS pritaikytą
            <span
                >Digiklasės <br />
                pasiūlymą</span
            >
        </h1>
        <h1 class="intro-heading" v-if="store.lang === 'LV'">
          Šī ir visefektīvākā mācību
          programma, <br /> lai uzlabotu
          savas sekmes –
            <span
                >lai uzlabotu <br> savas atzīmes</span
            >
        </h1>
        <div class="intro-selection">
            <h2 v-if="store.lang === 'LT'">Pasirinkite, kas esate</h2>
            <h2 v-if="store.lang === 'LV'">Izveido mācību plānu</h2>
            <div class="intro-selection__buttons">
                <button class="button--child" @click="respondentChildHandler()">
                    <img src="./assets/images/emoji/INTRO_backback.svg" alt="" />
                    {{ localization.childBtnLabel }}
                </button>
                <button class="button--parent" @click="respondentParentHandler()">
                    <img src="./assets/images/emoji/INTRO_parent.svg" alt="" />
                    {{ localization.parentBtnLabel }}
                </button>
            </div>
        </div>
        <div class="brand-logo">
            <img
                v-if="store.lang === 'LT'"
                src="./assets/images/digiklase.svg"
                alt="Digiklase logo"
            />
            <img v-if="store.lang === 'LV'" src="./assets/images/memby.svg" alt="Memby logo" />
        </div>
    </div>
    <div class="container yellow" v-if="store.step !== 0 && ! store.showRecomendations">
        <div
            class="brand-logo"
            v-if="
                store.step > 0 &&
                store.step < 10 &&
                !store.showFirstBenefit &&
                !store.showSecondBenefit
            "
        >
            <img
                v-if="store.lang === 'LT'"
                src="./assets/images/digiklase.svg"
                alt="Digiklase logo"
            />
            <img v-if="store.lang === 'LV'" src="./assets/images/memby.svg" alt="Memby logo" />
        </div>
        <div
            class="progress__wrapper"
            v-if="
                store.step >= 1 &&
                !store.showFirstBenefit &&
                !store.showSecondBenefit &&
                store.step < 9
            "
        >
            <button
                class="back-button"
                @click="prevStep()"
                v-if="store.step <= store.quiz.LT.child.length"
            >
                <img src="./assets/images/arrow.svg" alt="" />
            </button>
            <div
                class="progress__count"
                v-if="store.lang === 'LT' && store.step <= store.quiz.LT.child.length"
            >
                <span>{{ store.step }} / {{ store.quiz.LT.child.length }}</span>
            </div>
            <div
                class="progress"
                v-if="store.lang === 'LT' && store.step <= store.quiz.LT.child.length"
            >
                <span
                    class="completeness"
                    :style="{ width: completeness(store.step) + '%' }"
                ></span>
            </div>

          <div
              class="progress__count"
              v-if="store.lang === 'LV' && store.step <= store.quiz.LV.child.length"
          >
            <span>{{ store.step }} / {{ store.quiz.LV.child.length }}</span>
          </div>
          <div
              class="progress"
              v-if="store.lang === 'LV' && store.step <= store.quiz.LV.child.length"
          >
                <span
                    class="completeness"
                    :style="{ width: completeness(store.step) + '%' }"
                ></span>
          </div>

        </div>
        <div
            class="answer__container answer__container--wide"
            v-if="store.respondent === 'child' && ! store.showRecomendations"
        >
            <RespondentQuestions
                v-if="store.lang === 'LT'"
                :questions="store.quiz.LT.child"
                :next="nextStep"
            />
            <RespondentQuestions
                v-if="store.lang === 'LV'"
                :questions="store.quiz.LV.child"
                :next="nextStep"
            />
        </div>
        <div
            class="answer__container answer__container--wide"
            v-if="store.respondent === 'parent' && ! store.showRecomendations"
        >
            <RespondentQuestions
                v-if="store.lang === 'LT'"
                :questions="store.quiz.LT.parent"
                :next="nextStep"
            />
            <RespondentQuestions
                v-if="store.lang === 'LV'"
                :questions="store.quiz.LV.parent"
                :next="nextStep"
            />
        </div>

        <FirstBenefit />
        <SecondBenefit />
        <ProgramsLoader v-if="store.step === 8"/>
        <EmailForm v-if="store.step === 9 && !url.searchParams.has('whatsapp')" />
        <WhatsappForm v-if="store.step === 9 && url.searchParams.has('whatsapp')" />
    </div>
    <img
        src="./assets/images/bottomVector.svg"
        class="bottom-vector"
        alt="Vector"
        v-if="store.step !== 10"
    />
    <img
        src="./assets/images/Line.svg"
        alt=""
        class="line-behind-classroom hidden lg:block"
        v-if="store.showSecondBenefit && store.step === 5"
    />
    <ProgramRecomendation v-if="store.showRecomendations" />
</template>
