<script setup>

import Heading from "@/components/Typography/Heading.vue";
import {store} from "@/store";
import {event} from "vue-gtag";

const props = defineProps(['q', 'next'])

const selectClass = (classNumber) => {
  store.selectedClass = classNumber.replace(' kl.', '')

  event('quiz_question_answered', {
    question_number: store.step,
    question_name: props.q.Q,
    question_answer: classNumber
  })

  store.quizAnswers[props.q.id] = classNumber;

  props.next()
}

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
          class="answer__btn justify-center"
          @click="selectClass(answer.title)"
      >
        <span v-if="answer.img"><img :src="answer.img" class="emoji" alt="" /></span>
        {{ answer.title }}
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
