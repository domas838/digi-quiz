<script setup>

import {store} from "@/store";
import {changeUrlPath} from "@/helpers";
import RespondentQuestions from "@/components/RespondentQuestions.vue";

const nextStep = () => {
  //IF NO MORE QUESTION SHOW EMAIL FORM
  if (store.step === store.quiz[store.lang][store.respondent].length) {
    return store.showEmailForm = true;
  }

  store.step += 1

  if (!store.showFirstBenefit && !store.showSecondBenefit) {
    changeUrlPath('/' + store.respondent + '/' + store.flow + '/' + store.step)
  }
}

</script>

<template>
  <RespondentQuestions
      :questions="store.quiz[store.lang][store.respondent]"
      :next="nextStep"
  />
</template>
