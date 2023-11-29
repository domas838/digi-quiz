<script setup>

defineProps(['q', 'next'])

</script>
<template>
  <h1>
    {{ q.Q }}
  </h1>

  <div class="answer__container">
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
