<script setup>

import Heading from "@/components/Typography/Heading.vue";

defineProps(['q', 'next'])

</script>
<template>
  <Heading level="2">
    {{ q.Q }}
  </Heading>

  <div class="answer__container mt-5 mx-auto sm:mt-10">
    <div>
      <button
          v-for="(answer, index) in q.Ans"
          :key="index"
          class="answer__btn"
          @click="next(index + 1)"
      >
        <span v-if="answer.img"><img :src="answer.img" class="emoji" alt="" /></span>
        {{ answer.title }}
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
