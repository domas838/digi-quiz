<script setup>
import { store } from './store.js'
import ProgramRecomendation from './components/ProgramRecomendation.vue'
import { useSeoMeta } from '@unhead/vue'
import {useI18n} from "vue-i18n";
import Welcome from "@/Pages/Welcome.vue";
import Quiz from "@/Pages/Quiz.vue";
import {onMounted} from "vue";
import {event, pageview} from "vue-gtag";
import {useFavicon} from "@vueuse/core/index";
import EmailForm from "@/components/EmailForm.vue";
import Layout from "@/layouts/Layout.vue";
import {getLocaleFromURL, LOCALE_URL_LANG_MAP} from "@/helpers";

const i18n = useI18n();

useSeoMeta({
  title: i18n.t('Title'),
  description: i18n.t('Description'),
})

const url = new URL(window.location.href)

onMounted(() => {
  pageview(window.location.pathname);
  event('quiz_started');

  const localeKey = getLocaleFromURL(window.location);

  store.lang = LOCALE_URL_LANG_MAP[localeKey]
  const favicon = useFavicon();
  favicon.value = '/memby-fav.webp';

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
