<script setup>

import {store} from "@/store";

const completeness = (step) => {
    return (100 / store.quiz[store.lang][store.respondent].length) * step
}
</script>

<template>
  <div class="progress__wrapper z-[99]">
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
