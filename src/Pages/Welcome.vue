<script setup>
import {store} from "@/store";
import {changeUrlPath} from "@/helpers";
import {onMounted} from "vue";
import Logo from "@/components/Logo.vue";
const respondentChildHandler = () => {

  store.step = 1
  store.respondent = 'child'
  changeUrlPath('/' + store.respondent + '/' + store.step + '/' + store.flow)
}
const respondentParentHandler = () => {
  store.step = 1
  store.respondent = 'parent'
  changeUrlPath('/' + store.respondent + '/' + store.step + '/' + store.flow)
}

onMounted(() => {
  if (['quiz.mathups.com', 'quiz.mathsup.co.za', 'localhost'].includes(window.location.hostname)) {
    store.respondent = 'parent'

    const explodedPath = new URL(window.location.href).pathname.split('/');
    if (['trial', 'price', 'paid-trial', 'pricing-2', 'paid-trial-2', 'checkout', 'memby-maths', 'cashback', 'first-month', 'pricing-old', 'checkout-old'].includes(explodedPath[3])) {
        store.flow = explodedPath[3];
    }
  }

  if (store.respondent) {
    store.step += 1;
    changeUrlPath('/' + store.respondent + '/' + store.step + '/' + store.flow);
  }
})
</script>

<template>
  <div class="container--intro yellow" v-if="store.step === 0">
    <div>
      <img v-if="store.lang === 'LT'" src="/src/assets/images/digiklase.svg" alt="Digiklase logo"/>
      <img v-if="store.lang === 'LV' || store.flow === 'memby-maths'" src="/src/assets/images/memby.svg" alt="Memby logo" />
      <img v-if="store.lang === 'EN_IE'" src="/src/assets/images/MathUps.svg" alt="MathUps logo" />
      <img v-if="store.lang === 'EN_ZA' && store.flow !== 'memby-maths'" src="/src/assets/images/MathsUp.svg" alt="MathsUp logo" />
      <img src="../assets/images/skateboard.svg" alt="" class="intro-visual" />
      <h1 class="intro-heading mt-5" v-html="$t('WelcomeH1')">
      </h1>
    </div>
    <div class="intro-selection">
      <h2>{{ $t('ChooseRole') }}</h2>
      <div class="intro-selection__buttons">
        <button class="button--child" @click="respondentChildHandler()">
          <img src="../assets/images/emoji/INTRO_backback.svg" alt="" />
          {{ $t('StudentRole') }}
        </button>
        <button class="button--parent" @click="respondentParentHandler()">
          <img src="../assets/images/emoji/INTRO_parent.svg" alt="" />
          {{ $t('ParentRole') }}
        </button>
      </div>
    </div>
<!--    <Logo />-->
  </div>
</template>

<style scoped>

</style>
