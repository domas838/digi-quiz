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
    changeUrlPath('/' + store.respondent + '/' + store.step)
  } else {
    changeUrlPath('/')
  }
}

const completeness = (step) => {
    return (100 / store.quiz[store.lang][store.respondent].length) * step
}
</script>

<template>
  <div class="progress__wrapper">
    <button
        class="back-button"
        @click="prevStep()"
        v-if="store.step <= store.quiz[store.lang][store.respondent].length && store.step > 1"
    >
      <img src="../assets/images/arrow.svg" alt="" />
    </button>
    <div
        class="progress__count"
        v-if="store.step <= store.quiz[store.lang][store.respondent].length"
    >
      <span>{{ store.step }} / {{ store.quiz[store.lang][store.respondent].length }}</span>
    </div>
    <div class="progress" v-if="store.step <= store.quiz[store.lang][store.respondent].length">
      <span
          class="completeness"
          :style="{ width: completeness(store.step) + '%' }"
      ></span>
    </div>
  </div>
</template>

<style scoped>

</style>
