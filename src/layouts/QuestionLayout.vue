<script setup>
import {store} from "@/store";
import ProgressBar from "@/components/ProgressBar.vue";
import QuizLogo from "@/components/QuizLogo.vue";
import BackButton from "@/components/BackButton.vue";
import ProgressCounter from "@/components/ProgressCounter.vue";
</script>

<template>
  <div class="container yellow" v-if="store.step !== 0 && ! store.showRecomendations">
    <div class="flex justify-between items-center">
      <BackButton />
      <QuizLogo />
      <ProgressCounter />
    </div>

    <ProgressBar class="mt-14" />

    <div
        class="answer__container answer__container--wide mx-auto"
        v-if="! store.showRecomendations"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
