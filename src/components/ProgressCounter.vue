<script setup>
import {store} from "@/store";
</script>

<template>
  <div
      class="progress__count min-w-[53px]"
      v-if="store.step <= store.quiz[store.lang][store.respondent].length"
  >
    <span>{{ store.step }} / {{ store.quiz[store.lang][store.respondent].length }}</span>
  </div>
</template>
