<script setup>

import {store} from "@/store";
import Progress from "@/components/Progress.vue";
import QuizLogo from "@/components/QuizLogo.vue";

</script>

<template>
  <div class="container yellow" v-if="store.step !== 0 && ! store.showRecomendations">
    <QuizLogo />
    <Progress />

    <div
        class="answer__container answer__container--wide"
        v-if="! store.showRecomendations"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
