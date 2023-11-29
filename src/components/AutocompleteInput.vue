<script setup>
import {reactive} from "vue";
import {store} from "@/store";
import {event} from "vue-gtag";
import {changeUrlPath} from "@/helpers";

const props = defineProps(['q', 'title', 'options', 'placeholder'])

const localState = reactive({
    filteredOptions: [],
});

const filterOptions = (input) => {
    localState.filteredOptions = props.options.filter(option => {
        const lowerCaseOption = option.toLowerCase();
        const lowerCaseInput = input.toLowerCase();

        return lowerCaseOption.includes(lowerCaseInput);
    });
}

const confirm = (input) => {
  event('quiz_question_answered', {
    question_number: store.step,
    question_name: props.title,
    question_answer: input
  })

  store.step += 1;

  if (!store.showFirstBenefit && !store.showSecondBenefit) {
    changeUrlPath('/' + store.respondent + '/' + store.step)
  }

  store.quizAnswers[props.q.id] = input
}
</script>

<template>
  <h1>
    {{ props.title }}
  </h1>
  <VueAutocomplete :results="localState.filteredOptions" @input="filterOptions" @onSelect="confirm" :placeholder="$t(props.placeholder)" />
</template>

<style>
  .vue3-autocomplete-container {
      width: 100%;
      position: relative;
  }
  .vue3-input {
      width: 100%;
      outline: none;
      padding: 16px 20px 20px 20px;
      font-family: obviously, sans-serif;
      font-size: 20px;
      border: 1px solid #B8B8B8;
      border-radius: 16px;
      color: #B8B8B8;
  }
  .vue3-results-container {
      max-width: 100%;
      width: 100px;
      background-color: white;
      border-radius: 16px;
      border: 1px solid #B8B8B8;
      font-size: 20px;
      font-style: normal;
      font-weight: 550;
      font-family: obviously, sans-serif;
      position: absolute;
      top: 70px;
      overflow: hidden;
  }
  .vue3-results-container > div {
      padding: 16px 20px 20px 20px;
      cursor: pointer;
  }
  .vue3-results-container > div:hover {
      background-color: #F4F5F7;
  }
</style>

