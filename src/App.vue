<script setup>
import { store } from './store.js'
import ProgramRecomendation from './components/ProgramRecomendation.vue'
import { useSeoMeta } from '@unhead/vue'
import {useI18n} from "vue-i18n";
import Welcome from "@/Pages/Welcome.vue";
import Quiz from "@/Pages/Quiz.vue";
import {onMounted, reactive} from "vue";
import {event, pageview} from "vue-gtag";
import {useFavicon} from "@vueuse/core/index";
import EmailForm from "@/components/EmailForm.vue";
import Layout from "@/layouts/Layout.vue";
import SecondBenefitNew from "@/components/SecondBenefitNew.vue";

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

  if (window.location.hostname === 'quiz.mathups.com') {
    store.lang = 'EN_IE'
    const favicon = useFavicon();
    favicon.value = 'memby-fav.webp';
  }

  if (window.location.hostname === 'quiz.mathsup.co.za' || window.location.hostname === 'localhost') {
      store.lang = 'EN_ZA'
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
          url.searchParams.has('tier')) &&
          store.lang !== 'EN_IE' &&
          store.lang !== 'EN_ZA'
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

  window.addEventListener('popstate', function(event) {
    window.location.href = '/';
  })
})

</script>

<template>
    <Welcome />

    <Quiz v-if="! store.showEmailForm && ! store.showRecomendations" />

    <Layout v-if="store.showEmailForm && ! store.showRecomendations">
      <EmailForm />
    </Layout>

    <ProgramRecomendation v-if="store.showRecomendations && ! store.showEmailForm" />
</template>
