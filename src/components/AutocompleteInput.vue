<script setup>
import {reactive} from "vue";

const props = defineProps(['options', 'placeholder'])

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
    // TODO do smthng on confirm
    console.log(input);
}
</script>

<template>
  <VueAutocomplete :results="localState.filteredOptions" @input="filterOptions" @onSelect="confirm" :placeholder="props.placeholder" />
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

