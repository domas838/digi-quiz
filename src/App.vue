<script setup>
import { store } from './store.js'
import { onMounted } from 'vue'
import RespondentQuestions from './components/RespondentQuestions.vue'
import FirstBenefit from './components/FirstBenefit.vue'
import SecondBenefit from './components/SecondBenefit.vue'
import EmailForm from './components/EmailForm.vue'
import ProgramRecomendation from './components/ProgramRecomendation.vue'
import ProgramsLoader from './components/ProgramsLoader.vue'
const url = new URL(window.location.href)
onMounted(() => {
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
    if (store.step <= store.quiz.child.length) {
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
                store.showRecomendations = true
            }
        }
    }
}

const completeness = (step) => {
    return (100 / store.quiz.child.length) * (step - 1)
}
</script>

<template>
    <!-- Intro -->
    <div class="container--intro" v-if="store.step === 0">
        <div class="brand-logo brand-logo--mobile">
            <img src="./assets/images/digiklase.svg" alt="digiklase logo" />
        </div>
        <img src="./assets/images/skateboard.svg" alt="" class="intro-visual" />
        <div>
            <h1 class="intro-heading">
                Užpildykite trumpą klausimyną ir <br />
                gaukite specialiai JUMS pritaikytą
                <span
                    >Digiklasės <br />
                    pasiūlymą</span
                >
            </h1>
            <div class="intro-selection">
                <h2>Pasirinkite, kas esate</h2>
                <div class="intro-selection__buttons">
                    <button class="button--child" @click="respondentChildHandler()">
                        <img src="./assets/images/emoji/INTRO_backback.svg" alt="" /> Esu mokinys
                    </button>
                    <button class="button--parent" @click="respondentParentHandler()">
                        <img src="./assets/images/emoji/INTRO_parent.svg" alt="" /> Esu
                        tėvelis/globėjas
                    </button>
                </div>
            </div>
        </div>
        <div class="brand-logo">
            <img src="./assets/images/digiklase.svg" alt="digiklase logo" />
        </div>
    </div>
    <div class="container" v-if="store.step !== 0 && store.step !== 10">
        <div
            class="brand-logo"
            v-if="
                store.step > 0 &&
                store.step < 10 &&
                !store.showFirstBenefit &&
                !store.showSecondBenefit
            "
        >
            <img src="./assets/images/digiklase.svg" alt="digiklase logo" />
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
                v-if="store.step <= store.quiz.child.length"
            >
                <img src="./assets/images/arrow.svg" alt="" />
            </button>
            <div class="progress__count" v-if="store.step <= store.quiz.child.length">
                <span>{{ store.step }} / {{ store.quiz.child.length }}</span>
            </div>
            <div class="progress" v-if="store.step <= store.quiz.child.length">
                <span
                    class="completeness"
                    :style="{ width: completeness(store.step) + '%' }"
                ></span>
            </div>
        </div>
        <div
            class="answer__container answer__container--wide"
            v-if="store.respondent === 'child' && store.step !== 10"
        >
            <RespondentQuestions :questions="store.quiz.child" :next="nextStep" />
        </div>
        <div
            class="answer__container answer__container--wide"
            v-if="store.respondent === 'parent' && store.step !== 10"
        >
            <RespondentQuestions :questions="store.quiz.parent" :next="nextStep" />
        </div>

        <FirstBenefit />
        <SecondBenefit />
        <ProgramsLoader v-if="store.step === 8" />
        <EmailForm v-if="store.step === 9" />
    </div>
    <img
        src="./assets/images/bottomVector.svg"
        class="bottom-vector"
        alt="Vector"
        v-if="store.step !== 10"
    />
    <ProgramRecomendation v-if="store.step === 10 && store.showRecomendations" />
</template>
