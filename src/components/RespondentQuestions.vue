<script setup>
import { store } from '../store'

import {useI18n} from "vue-i18n";
import {Personas} from "../helpers";
import { event } from 'vue-gtag'
import Grid from "@/components/QuestionTypes/Grid.vue";
import RadioSelect from "@/components/QuestionTypes/RadioSelect.vue";
import MultiSelect from "@/components/QuestionTypes/MultiSelect.vue";
import QuestionLayout from "@/layouts/QuestionLayout.vue";
import SecondBenefit from "@/components/SecondBenefit.vue";
import AutocompleteInput from "@/components/AutocompleteInput.vue";
import PreferredTimesTable from "@/components/PreferredTimesTable.vue";
import LoadingPage from "@/components/LoadingPage.vue";
import ResultsCalculator from "@/components/ResultsCalculator.vue";
import Layout from "@/App.vue";

const props = defineProps(['questions', 'next'])

const { t } = useI18n();

const selectAnswer = (answerIndex) => {
    switch (store.step) {
        // PROFILE1 LEVEL QUESTION
        case 2:
            switch (answerIndex) {
                case 1:
                    store.PROFILE1 = [Personas.AMBITIOUS, Personas.EXAM_ORIENTED] //+1 AMBITIOUS +1 EXAM
                    store.childLevel = 'A'
                    store.klaviyoStudentLevel = t('AKlaviyoStudentLevel')
                    break
                case 2:
                    store.PROFILE1 = [Personas.EXAM_ORIENTED, Personas.BUSY_MULTI_TASKER] //+1 BUSYMULTITASKER +1 EXAM
                    store.childLevel = 'B'
                    store.klaviyoStudentLevel = t('BKlaviyoStudentLevel')
                    break
                case 3:
                    store.PROFILE1 = [Personas.STRUGGLING, Personas.BUSY_MULTI_TASKER] //+1 BUSYMULTITASKER +1 STRUGGLING
                    store.childLevel = 'C'
                    store.klaviyoStudentLevel = t('CKlaviyoStudentLevel')
                    break

                default:
                    break
            }
            break

        // PROFILE2 GOAL QUESTION
        case 3:
            switch (answerIndex) {
                case 1:
                    store.PROFILE2 = [Personas.AMBITIOUS] //+1 EXAM ORIENTED
                    store.klaviyoGoal = t('KlaviyoAmbitiousGoal')
                    break
                case 2:
                    store.PROFILE2 = [Personas.EXAM_ORIENTED] //+1 STRUGGLING
                    store.klaviyoGoal = t('KlaviyoExamOrientedGoal')
                    break
                case 3:
                    store.PROFILE2 = [Personas.STRUGGLING] //0 POINTS
                    store.klaviyoGoal = t('KlaviyoStrugglingGoal')
                    break
                case 4:
                    store.PROFILE2 = [Personas.BUSY_MULTI_TASKER] //+1 BUSY MULTI-TASKER
                    store.klaviyoGoal = t('KlaviyoBusyMultiTaskerGoal')
                    break
                default:
                    break
            }

            break

        case 4:
            break

        // PROFILE 3 MOTIVATION QUESTION
        case 5:
            switch (answerIndex) {
                case 1:
                    store.PROFILE3 = [Personas.AMBITIOUS] // +1 POINT AMBITIOUS
                    store.klaviyoMotivation = t('KlaviyoAmbitiousMotivation')

                    break
                case 2:
                    store.PROFILE3 = [Personas.EXAM_ORIENTED] // +1 EXAM ORIENTED
                    store.klaviyoMotivation = t('KlaviyoExamOrientedMotivation')

                    break
                case 3:
                    store.PROFILE3 = [Personas.EXAM_ORIENTED] // +1 EXAM ORIENTED
                    store.klaviyoMotivation = t('KlaviyoStrugglingMotivation')
                    break
                case 4:
                    store.PROFILE3 = [Personas.STRUGGLING] // +1 STRUGGLING
                    store.klaviyoMotivation = t('KlaviyoBusyMultiTaskerMotivation')
                    break

                //DELETED ANSWER
                case 5:
                    store.PROFILE3 = ['Socializer']
                    break

                default:
                    break
            }

            break

        case 6:
            switch (answerIndex) {
                case 1:
                    store.PROFILE4 = [Personas.AMBITIOUS, Personas.EXAM_ORIENTED]

                    props.next() // +1 AMBITIOUS STUDENT +1 EXAM ORIENTED
                    return
                case 2: // +1 STRUGGLING
                    store.PROFILE4 = [Personas.STRUGGLING]
                    // store.TIER = 'TIER0'
                    break
                case 3: // +1 BUSY MULTITASKER
                    store.PROFILE4 = [Personas.BUSY_MULTI_TASKER]
                    props.next()
                    return
                case 4: // +0 niekam neduoda
                    props.next()
                    return
                default:
                    return
            }
            break

      //NUSAKO TIER
        case 7:
            switch (answerIndex) {
                case 1:
                  store.TIER = '1'
                    store.klaviyoIntensity = t('KlaviyoIntensityTier1')

                    break
                case 2:
                    store.TIER = '2'
                    store.klaviyoIntensity = t('KlaviyoIntensityTier2')

                    break
                case 3:
                    store.TIER = '3'
                    store.klaviyoIntensity = t('KlaviyoIntensityTier3')

                    break

                default:
                    break
            }
            break

        default:
            break
    }

    const questions = props.questions;
    const question = questions.find(q => q.qNo === store.step);

    event('quiz_question_answered', {
      question_number: store.step,
      question_name: question.Q,
      question_answer: question.Ans[answerIndex - 1]
    })

    if (store.lang === 'EN') {
      store.quizAnswers[question.id] = question.Ans[answerIndex - 1].title
    }

    console.log(store.quizAnswers);

    props.next()
}

</script>
<template>
  <div v-if="! store.showRecomendations" class="py-16">
    <div v-for="(q, index) in props.questions" :key="index">
      <QuestionLayout v-if="q.component === 'grid' && q.qNo === store.step">
        <Grid :q="q" :questions="props.questions" :next="next"/>
      </QuestionLayout>

      <QuestionLayout v-if="q.component === 'radio' && q.qNo === store.step">
        <RadioSelect :q="q" :next="selectAnswer" />
      </QuestionLayout>

      <QuestionLayout v-if="q.component === 'multi-select' && q.qNo === store.step">
        <MultiSelect :q="q" :questions="props.questions"/>
      </QuestionLayout>

      <QuestionLayout v-if="q.component === 'select' && q.qNo === store.step">
        <AutocompleteInput :q="q" :title="q.Q" :options="q.Ans" :placeholder="q.placeholder" />
      </QuestionLayout>

      <QuestionLayout v-if="q.component === 'timetable' && q.qNo === store.step">
        <PreferredTimesTable
            :q="q"
            :days="q.days"
            :timeRanges="q.times"
            :storeVariableName="q.variableName"
            :title="q.Q"
        />
      </QuestionLayout>

      <SecondBenefit v-if="q.component === 'firstBenefit' && q.qNo === store.step" />

      <LoadingPage v-if="q.component === 'loader' && q.qNo === store.step" />

      <ResultsCalculator v-if="q.component === 'final-results' && q.qNo === store.step" />
    </div>
  </div>
</template>
