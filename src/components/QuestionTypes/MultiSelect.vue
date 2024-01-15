<script setup>
import {store} from "@/store";
import {event} from "vue-gtag";
import {changeUrlPath} from "@/helpers";

const props = defineProps(['q', 'questions'])

const selectMultipleAnswers = (event) => {
  store.isSubjectNotSelected = false
  const input = event.target.querySelector('input')

  const answerCardWrapper = input.parentNode.parentNode
  if (input.checked) {
    input.checked = false
    answerCardWrapper.classList.remove('selected')
  } else {
    input.checked = true
    answerCardWrapper.classList.add('selected')
  }
}

const proceedWithMultipleSelection = (name) => {
  store.selectedSubjects = []
  const selectedInputs = document.querySelectorAll(`input[name=${name}]:checked`)

  if (selectedInputs.length) {
    selectedInputs.forEach((input) => {
      store.selectedSubjects.push(input.value)
    })

    const question = props.questions;

    event('quiz_question_answered', {
      question_number: store.step,
      question_name: question.find(q => q.qNo === store.step).Q,
      question_answer: store.selectedSubjects.toString().toLowerCase()
    })

    store.quizAnswers[props.q.id] = store.selectedSubjects.toString().toLowerCase()

    store.step += 1
  }

  changeUrlPath('/' + store.respondent + '/' + store.flow + '/' + store.step)

  store.klaviyoNeededLessons = store.selectedSubjects.toString().toLowerCase()
}
</script>

<template>
  <h1>
    {{ q.Q }}
  </h1>
  <div class="answer__container">
    <div v-for="(answer, index) in props.q.Ans" :key="index">
    <button
        class="answer__btn"
        @click="selectMultipleAnswers($event)"
    >
      <span><input type="checkbox" :name="q.name" :value="answer.value" />
        <img src="../../assets/images/checkbox.svg" alt="" class="custom-checkbox"/>
        <img src="../../assets/images/checkbox-checked.svg" alt="" class="custom-checkbox-checked"/>
<!--                            ../assets/images/emoji/Q4_matematika.svg-->
        <img v-if="answer.img" :src="answer.img" alt="" class="emoji"/>
      </span>
      {{ answer.title }}
     </button>
    </div>
    <button
        @click="proceedWithMultipleSelection(q.name)"
        class="benefit-btn"
        style="margin-top: 2rem"
        :disabled="store.isSubjectNotSelected"
    >
      {{ $t('Continue') }}
      <img
          src="../../assets/images/arrow-right.svg"
          alt="continue"
      />
    </button>
  </div>
</template>

<style scoped>

</style>
