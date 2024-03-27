<script setup>
import { onMounted } from 'vue'
import { reactive } from "vue";
import { useI18n } from "vue-i18n";
import {store} from "@/store";
import {changeUrlPath} from "@/helpers";
import QuizLogo from "@/components/QuizLogo.vue";

const { t } = useI18n();

const localState = reactive({
  progressStepDuration: 1000,
  progressSteps: [
    {
      key: 1,
                name: t('CollectingResults'),
                progressPercentage: 0,
            },
            {
                key: 2,
                name: t('AnalysingYourResults'),
                progressPercentage: 0,
            },
            {
                key: 3,
                name: t('GeneratingPersonalisedPlan'),
                progressPercentage: 0,
            }
        ],
    })

    onMounted(() => {
        changeUrlPath('/' + store.respondent + '/' + store.step + '/' + store.flow)
       localState.progressSteps.forEach((progressStep, index) => {
           const isLastStep = index === localState.progressSteps.length - 1;
           setTimeout(() => {
               let interval;
               interval = setInterval(() => {
                   localState.progressSteps[index].progressPercentage += 1;
                   if (localState.progressSteps[index].progressPercentage === 100) {
                       clearInterval(interval);

                       if (isLastStep) {
                         store.showEmailForm = true;
                       }
                   }

                   if (isLastStep && localState.progressSteps[index].progressPercentage === 57) {
                       const currentTime = new Date().getTime();
                       while (currentTime + 500 >= new Date().getTime()) {}
                   }
               }, localState.progressStepDuration / 100)
           }, localState.progressStepDuration * index);
       })
    })
</script>

<template>
    <div class="max-w-[580px] m-auto px-8" style="font-family: 'obviously', sans-serif;">
        <QuizLogo tw="mx-auto mb-10" />
        <div class="mb-20 font-semibold text-lg">
            <div class="mb-12" v-for="progressStep in localState.progressSteps" :key="progressStep.key">
                <div class="flex flex-row justify-between mb-2.5">
                    <div>{{ progressStep.name }}</div>
                    <div>{{ progressStep.progressPercentage }}%</div>
                </div>
                <div class="w-full h-6 rounded-full bg-blue/10 overflow-hidden">
                    <div class="h-full bg-blue rounded-full" :style="`width: ${progressStep.progressPercentage}%;`"></div>
                </div>
            </div>
        </div>

        <div class="bg-white border border-gray-500 rounded-lg opacity-80 p-5 mt-12 flex flex-col gap-2.5 text-center">
            <div v-html="$t('TrustedBy')"></div>
            <div class="flex flex-row gap-1 justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" v-for="key in 5" :key="key">
                    <path d="M9.60362 3.52281C9.97045 2.77964 11.0302 2.77964 11.397 3.52281L12.8429 6.45193C12.9884 6.74678 13.2696 6.95124 13.595 6.9988L16.8299 7.47163C17.6498 7.59147 17.9766 8.59931 17.383 9.17747L15.0438 11.4559C14.8079 11.6856 14.7002 12.0167 14.7559 12.3413L15.3078 15.5588C15.4479 16.3758 14.5903 16.9987 13.8567 16.6129L10.9658 15.0926C10.6744 14.9394 10.3263 14.9394 10.0349 15.0926L7.14396 16.6129C6.41033 16.9987 5.55278 16.3758 5.6929 15.5588L6.24475 12.3413C6.30041 12.0167 6.19274 11.6856 5.95687 11.4559L3.61767 9.17747C3.02408 8.59931 3.35086 7.59147 4.17078 7.47163L7.40569 6.9988C7.73105 6.95124 8.01223 6.74678 8.15777 6.45193L9.60362 3.52281Z" fill="#F4E140"/>
                </svg>
            </div>
            <div>{{ store.flow === 'maths' ? $t('KidHatedMathMemby'): $t('KidHatedMath') }}</div>
            <div class="font-bold">Brian J</div>
        </div>
    </div>
</template>
