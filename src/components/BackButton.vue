<script setup>
import {store} from "@/store";
import {changeUrlPath} from "@/helpers";

const prevStep = () => {
  store.step -= 1

  const question = store.quiz[store.lang][store.respondent].find(q => q.qNo === store.step);

  if (question.component === 'loader') {
    store.step -= 1
  }

  if (store.step !== 0) {
    changeUrlPath('/' + store.respondent + '/' + store.step + '/' + store.flow)
  } else {
    changeUrlPath('/')
  }
}
</script>

<template>
  <button class="z-[9999]" @click="prevStep()" v-if="store.step <= store.quiz[store.lang][store.respondent].length && store.step > 1">
    <img width="32" src="../assets/images/arrow.svg" alt="" />
  </button>
  <div class="w-[32px]" v-else></div>
</template>

