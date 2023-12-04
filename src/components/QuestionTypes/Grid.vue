<script setup>

import {store} from "@/store";
import {event} from "vue-gtag";

const props = defineProps(['questions', 'next', 'q'])
const selectClass = (classNumber) => {
  store.selectedClass = classNumber.replace(' kl.', '')

  const question = props.questions;

  event('quiz_question_answered', {
    question_number: store.step,
    question_name: question.find(q => q.qNo === store.step).Q,
    question_answer: classNumber
  })

  store.quizAnswers[props.q.id] = classNumber;

  props.next()
}

const targetMarkArray = () => {
  // Find the index of the threshold grade in the Ans array
  const thresholdIndex = props.q.Ans.findIndex(grade => grade.title === store.quizAnswers['currentMark']);

  const gradesAboveThreshold = props.q.Ans.slice(0, thresholdIndex);

  if (gradesAboveThreshold.length === 0) {
    store.quizAnswers[props.q.id] = 'A+';
    store.step += 1;
  }

  return gradesAboveThreshold;
}

</script>

<template>
  <div>
    <h1>
      {{ q.Q }}
    </h1>

    <div class="answer__content">
      <div class="answer__buttons-wrapper grade" v-if="q.id !== 'targetMark'">
        <button
            v-for="(answer, index) in q.Ans"
            :key="index"
            class="answer__btn"
            @click="selectClass(answer.title)"
        >
          {{ answer.title }}
        </button>
      </div>
      <div class="answer__buttons-wrapper grade" v-if="q.id === 'targetMark'">
        <button
            v-for="(answer, index) in targetMarkArray()"
            :key="index"
            class="answer__btn"
            @click="selectClass(answer.title)"
        >
          {{ answer.title }}
        </button>
      </div>
<!--      <div class="answer__buttons-wrapper grade" v-if="store.lang === 'LV'">-->
<!--        <button-->
<!--            v-for="(classNo, index) in ['5', '6', '7', '8', '9', '10', '11', '12']"-->
<!--            :key="index"-->
<!--            class="answer__btn"-->
<!--            @click="selectClass(classNo)"-->
<!--        >-->
<!--          {{ classNo }}-->
<!--        </button>-->
<!--      </div>-->
    </div>
  </div>
</template>
