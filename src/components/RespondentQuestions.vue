<script setup>
import { store } from '../store'

import {reactive} from 'vue'
import {useI18n} from "vue-i18n";
import {changeUrlPath, Personas} from "../helpers";
import { event } from 'vue-gtag'

const props = defineProps(['questions', 'next'])

const { t } = useI18n();

const selectClass = (classNumber) => {
    store.selectedClass = classNumber.replace(' kl.', '')

    const question = props.questions;
    event('quiz_question_answered', {
      question_number: store.step,
      question_name: question.find(q => q.qNo === store.step).Q,
      question_answer: classNumber
    })

    props.next()
}

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

    const question = props.questions;

    event('quiz_question_answered', {
      question_number: store.step,
      question_name: question.find(q => q.qNo === store.step).Q,
      question_answer: question.find(q => q.qNo === store.step).Ans[answerIndex - 1]
    })

    if (store.step !== 4) {
        props.next()
    }
}

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

const proceedWithMultipleSelection = () => {
    store.selectedSubjects = []
    const selectedInputs = document.querySelectorAll("input[name='subjects']:checked")

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

      store.step += 1
    }

    changeUrlPath('/' + store.respondent + '/' + store.step)

    store.klaviyoNeededLessons = store.selectedSubjects.toString().toLowerCase()
}

const localization = reactive({
    continue: 'Tęsti'
})
if (store.lang === 'LV') {
    localization.continue = 'Turpināt'
}
</script>
<template>
    <div v-for="(q, index) in props.questions" :key="index">
        <div v-if="q.qNo === store.step && store.step === 1">
            <h1>
                {{ q.Q }}
            </h1>

            <div class="answer__content">
                <div class="answer__buttons-wrapper grade" v-if="store.lang === 'LT'">
                    <button
                        v-for="(classNo, index) in [
                            '2 kl.',
                            '3 kl.',
                            '4 kl.',
                            '5 kl.',
                            '6 kl.',
                            '7 kl.',
                            '8 kl.',
                            '9 kl.',
                            '10 kl.',
                            '11 kl.',
                            '12 kl.'
                        ]"
                        :key="index"
                        class="answer__btn"
                        @click="selectClass(classNo)"
                    >
                        {{ classNo }}
                    </button>
                </div>
                <div class="answer__buttons-wrapper grade" v-if="store.lang === 'LV'">
                    <button
                        v-for="(classNo, index) in ['5', '6', '7', '8', '9', '10', '11', '12']"
                        :key="index"
                        class="answer__btn"
                        @click="selectClass(classNo)"
                    >
                        {{ classNo }}
                    </button>
                </div>
            </div>
        </div>
        <div
            v-if="
                store.step !== 1 &&
                q.qNo === store.step &&
                !store.showFirstBenefit &&
                !store.showSecondBenefit
            "
        >
            <h1>
                {{ q.Q }}
<!--                <span class="emoji-wrapper">-->
<!--                    <img-->
<!--                        v-if="store.step === 2"-->
<!--                        src="../assets/images/emoji/Q2_text1.svg"-->
<!--                        class="emoji"-->
<!--                        alt=""-->
<!--                    />-->
<!--                    <img-->
<!--                        v-if="store.step === 2"-->
<!--                        src="../assets/images/emoji/Q2_text2.svg"-->
<!--                        class="emoji"-->
<!--                        alt=""-->
<!--                    />-->
<!--                </span>-->
<!--                <img-->
<!--                    v-if="store.step === 4"-->
<!--                    src="../assets/images/emoji/Q7_text1.svg"-->
<!--                    class="emoji"-->
<!--                    alt=""-->
<!--                />-->
<!--                <span class="emoji-wrapper">-->
<!--                    <img-->
<!--                        v-if="store.step === 5"-->
<!--                        src="../assets/images/emoji/Q5_text1.svg"-->
<!--                        class="emoji"-->
<!--                        alt=""-->
<!--                    />-->
<!--                    <img-->
<!--                        v-if="store.step === 5"-->
<!--                        src="../assets/images/emoji/Q5_text2.svg"-->
<!--                        class="emoji"-->
<!--                        alt=""-->
<!--                    />-->
<!--                </span>-->
<!--                <span class="emoji-wrapper">-->
<!--                    <img-->
<!--                        v-if="store.step === 6"-->
<!--                        src="../assets/images/emoji/Q6_text1.svg"-->
<!--                        class="emoji"-->
<!--                        alt=""-->
<!--                    />-->
<!--                    <img-->
<!--                        v-if="store.step === 6"-->
<!--                        src="../assets/images/emoji/Q6_text2.svg"-->
<!--                        class="emoji"-->
<!--                        alt=""-->
<!--                    />-->
<!--                </span>-->
<!--                <span class="emoji-wrapper">-->
<!--                    <img-->
<!--                        v-if="store.step === 7"-->
<!--                        src="../assets/images/emoji/Q7_text1.svg"-->
<!--                        class="emoji"-->
<!--                        alt=""-->
<!--                    />-->
<!--                    <img-->
<!--                        v-if="store.step === 7"-->
<!--                        src="../assets/images/emoji/Q7_text2.svg"-->
<!--                        class="emoji"-->
<!--                        alt=""-->
<!--                    />-->
<!--                </span>-->
            </h1>

            <div class="answer__container" v-if="!store.showFirstBenefit">
                <div v-if="store.step < 4">
                    <button
                        v-for="(a, index) in q.Ans"
                        :key="index"
                        class="answer__btn"
                        @click="selectAnswer(index + 1)"
                    >
                        <span v-if="store.step == 2 && index + 1 === 1"
                            ><img src="../assets/images/emoji/Q2_A.svg" class="emoji" alt="" />
                        </span>
                        <span v-if="store.step == 2 && index + 1 === 2"
                            ><img src="../assets/images/emoji/Q2_B.svg" class="emoji" alt="" />
                        </span>
                        <span v-if="store.step == 2 && index + 1 === 3"
                            ><img src="../assets/images/emoji/Q2_C.svg" class="emoji" alt="" />
                        </span>
                        {{ a }}
                    </button>
                </div>
                <div v-if="store.lang === 'LT' && store.step === 4">
                    <button
                        v-if="store.selectedClass >= 1 && store.selectedClass <= 12"
                        class="answer__btn"
                        @click="selectMultipleAnswers($event)"
                    >
                        <span
                            ><input type="checkbox" name="subjects" value="Matematika" />
                            <img
                                src="../assets/images/checkbox.svg"
                                alt=""
                                class="custom-checkbox"
                            />
                            <img
                                src="../assets/images/checkbox-checked.svg"
                                alt=""
                                class="custom-checkbox-checked"
                            />
                            <img
                                src="../assets/images/emoji/Q4_matematika.svg"
                                alt=""
                                class="emoji"
                            />
                        </span>
                        Matematika
                    </button>
                    <button
                        v-if="store.selectedClass >= 1 && store.selectedClass <= 12"
                        class="answer__btn"
                        @click="selectMultipleAnswers($event)"
                    >
                        <span
                            ><input type="checkbox" name="subjects" value="Lietuvių kalba" />
                            <img
                                src="../assets/images/checkbox.svg"
                                alt=""
                                class="custom-checkbox"
                            />
                            <img
                                src="../assets/images/checkbox-checked.svg"
                                alt=""
                                class="custom-checkbox-checked"
                            />
                            <img
                                src="../assets/images/emoji/Q4_lietuviu.svg"
                                alt=""
                                class="emoji"
                            />
                        </span>
                        Lietuvių kalba
                    </button>
                    <button
                        v-if="store.selectedClass >= 7 && store.selectedClass <= 12"
                        class="answer__btn"
                        @click="selectMultipleAnswers($event)"
                    >
                        <span
                            ><input type="checkbox" name="subjects" value="Biologija" />
                            <img
                                src="../assets/images/checkbox.svg"
                                alt=""
                                class="custom-checkbox"
                            />
                            <img
                                src="../assets/images/checkbox-checked.svg"
                                alt=""
                                class="custom-checkbox-checked"
                            />
                            <img
                                src="../assets/images/emoji/Q4_biologija.svg"
                                alt=""
                                class="emoji"
                            />
                        </span>
                        Biologija
                    </button>
                    <button
                        v-if="store.selectedClass >= 7 && store.selectedClass <= 12"
                        class="answer__btn"
                        @click="selectMultipleAnswers($event)"
                    >
                        <span
                            ><input type="checkbox" name="subjects" value="Fizika" />
                            <img
                                src="../assets/images/checkbox.svg"
                                alt=""
                                class="custom-checkbox"
                            />
                            <img
                                src="../assets/images/checkbox-checked.svg"
                                alt=""
                                class="custom-checkbox-checked"
                            />
                            <img src="../assets/images/emoji/Q4_fizika.svg" alt="" class="emoji" />
                        </span>
                        Fizika
                    </button>
                    <button
                        v-if="store.selectedClass >= 8 && store.selectedClass <= 12"
                        class="answer__btn"
                        @click="selectMultipleAnswers($event)"
                    >
                        <span
                            ><input type="checkbox" name="subjects" value="Chemija" />
                            <img
                                src="../assets/images/checkbox.svg"
                                alt=""
                                class="custom-checkbox"
                            />
                            <img
                                src="../assets/images/checkbox-checked.svg"
                                alt=""
                                class="custom-checkbox-checked"
                            />
                            <img src="../assets/images/emoji/Q4_chemija.svg" alt="" class="emoji" />
                        </span>
                        Chemija
                    </button>
                    <button
                        v-if="store.selectedClass >= 5 && store.selectedClass <= 12"
                        class="answer__btn"
                        @click="selectMultipleAnswers($event)"
                    >
                        <span
                            ><input type="checkbox" name="subjects" value="Istorija" />
                            <img
                                src="../assets/images/checkbox.svg"
                                alt=""
                                class="custom-checkbox"
                            />
                            <img
                                src="../assets/images/checkbox-checked.svg"
                                alt=""
                                class="custom-checkbox-checked"
                            />
                            <img
                                src="../assets/images/emoji/Q4_istorija.svg"
                                alt=""
                                class="emoji"
                            />
                        </span>
                        Istorija
                    </button>
                    <button
                        v-if="store.selectedClass >= 1 && store.selectedClass <= 12"
                        class="answer__btn"
                        @click="selectMultipleAnswers($event)"
                    >
                        <span
                            ><input type="checkbox" name="subjects" value="Anglų kalba" />
                            <img
                                src="../assets/images/checkbox.svg"
                                alt=""
                                class="custom-checkbox"
                            />
                            <img
                                src="../assets/images/checkbox-checked.svg"
                                alt=""
                                class="custom-checkbox-checked"
                            />
                            <img src="../assets/images/emoji/Q4_anglu.svg" alt="" class="emoji" />
                        </span>
                        Anglų kalba
                    </button>
                    <button
                        v-if="store.selectedClass >= 1 && store.selectedClass <= 4"
                        class="answer__btn"
                        @click="selectMultipleAnswers($event)"
                    >
                        <span
                            ><input type="checkbox" name="subjects" value="Geografija" />
                            <img
                                src="../assets/images/checkbox.svg"
                                alt=""
                                class="custom-checkbox"
                            />
                            <img
                                src="../assets/images/checkbox-checked.svg"
                                alt=""
                                class="custom-checkbox-checked"
                            />
                            <img
                                src="../assets/images/emoji/Q4_geografija.svg"
                                class="emoji"
                                alt=""
                            />
                        </span>
                        Geografija
                    </button>
                    <button
                        v-if="store.selectedClass >= 1 && store.selectedClass <= 4"
                        class="answer__btn"
                        @click="selectMultipleAnswers($event)"
                    >
                        <span
                            ><input type="checkbox" name="subjects" value="Pasaulio pažinimas" />
                            <img
                                src="../assets/images/checkbox.svg"
                                alt=""
                                class="custom-checkbox"
                            />
                            <img
                                src="../assets/images/checkbox-checked.svg"
                                alt=""
                                class="custom-checkbox-checked"
                            />
                            <img
                                src="../assets/images/emoji/Q4_pazinimas.svg"
                                class="emoji"
                                alt=""
                            />
                        </span>

                        Pasaulio pažinimas
                    </button>
                    <button
                        v-if="store.selectedClass >= 1 && store.selectedClass <= 4"
                        class="answer__btn"
                        @click="selectMultipleAnswers($event)"
                    >
                        <span
                            ><input type="checkbox" name="subjects" value="Gamta ir žmogus" />
                            <img
                                src="../assets/images/checkbox.svg"
                                alt=""
                                class="custom-checkbox"
                            />
                            <img
                                src="../assets/images/checkbox-checked.svg"
                                alt=""
                                class="custom-checkbox-checked"
                            />
                            <img src="../assets/images/emoji/Q4_gamta.svg" class="emoji" alt="" />
                        </span>

                        Gamta ir žmogus
                    </button>

                    <button
                        v-if="store.selectedClass >= 7 && store.selectedClass <= 8"
                        class="answer__btn"
                        @click="selectMultipleAnswers($event)"
                    >
                        <span
                            ><input type="checkbox" name="subjects" value="Įdomusis mokslas" />
                            <img
                                src="../assets/images/checkbox.svg"
                                alt=""
                                class="custom-checkbox"
                            />
                            <img
                                src="../assets/images/checkbox-checked.svg"
                                alt=""
                                class="custom-checkbox-checked"
                            />
                            <img
                                src="../assets/images/emoji/Q4_idomusis.svg"
                                alt=""
                                class="emoji"
                            />
                        </span>
                        Įdomusis mokslas
                    </button>
                </div>
                <div v-if="store.lang === 'LV' && store.step === 4">
                    <button
                        v-if="store.selectedClass >= 1 && store.selectedClass <= 12"
                        class="answer__btn"
                        @click="selectMultipleAnswers($event)"
                    >
                        <span
                            ><input type="checkbox" name="subjects" value="Matemātika" />
                            <img
                                src="../assets/images/checkbox.svg"
                                alt=""
                                class="custom-checkbox"
                            />
                            <img
                                src="../assets/images/checkbox-checked.svg"
                                alt=""
                                class="custom-checkbox-checked"
                            />
                            <img
                                src="../assets/images/emoji/Q4_matematika.svg"
                                alt=""
                                class="emoji"
                            />
                        </span>
                        Matemātika
                    </button>
                    <button
                        v-if="store.selectedClass >= 1 && store.selectedClass <= 12"
                        class="answer__btn"
                        @click="selectMultipleAnswers($event)"
                    >
                        <span
                            ><input type="checkbox" name="subjects" value="Latviešu valoda" />
                            <img
                                src="../assets/images/checkbox.svg"
                                alt=""
                                class="custom-checkbox"
                            />
                            <img
                                src="../assets/images/checkbox-checked.svg"
                                alt=""
                                class="custom-checkbox-checked"
                            />
                            <img
                                src="../assets/images/emoji/Q4_lietuviu.svg"
                                alt=""
                                class="emoji"
                            />
                        </span>
                        Latviešu valoda
                    </button>
                    <button
                        v-if="store.selectedClass >= 7 && store.selectedClass <= 12"
                        class="answer__btn"
                        @click="selectMultipleAnswers($event)"
                    >
                        <span
                            ><input type="checkbox" name="subjects" value="Bioloģija" />
                            <img
                                src="../assets/images/checkbox.svg"
                                alt=""
                                class="custom-checkbox"
                            />
                            <img
                                src="../assets/images/checkbox-checked.svg"
                                alt=""
                                class="custom-checkbox-checked"
                            />
                            <img
                                src="../assets/images/emoji/Q4_biologija.svg"
                                alt=""
                                class="emoji"
                            />
                        </span>
                        Bioloģija
                    </button>
                    <button
                        v-if="store.selectedClass >= 7 && store.selectedClass <= 12"
                        class="answer__btn"
                        @click="selectMultipleAnswers($event)"
                    >
                        <span
                            ><input type="checkbox" name="subjects" value="Fizika" />
                            <img
                                src="../assets/images/checkbox.svg"
                                alt=""
                                class="custom-checkbox"
                            />
                            <img
                                src="../assets/images/checkbox-checked.svg"
                                alt=""
                                class="custom-checkbox-checked"
                            />
                            <img src="../assets/images/emoji/Q4_fizika.svg" alt="" class="emoji" />
                        </span>
                        Fizika
                    </button>
                    <button
                        v-if="store.selectedClass >= 8 && store.selectedClass <= 12"
                        class="answer__btn"
                        @click="selectMultipleAnswers($event)"
                    >
                        <span
                            ><input type="checkbox" name="subjects" value="Ķīmija" />
                            <img
                                src="../assets/images/checkbox.svg"
                                alt=""
                                class="custom-checkbox"
                            />
                            <img
                                src="../assets/images/checkbox-checked.svg"
                                alt=""
                                class="custom-checkbox-checked"
                            />
                            <img src="../assets/images/emoji/Q4_chemija.svg" alt="" class="emoji" />
                        </span>
                        Ķīmija
                    </button>
                    <button
                        v-if="store.selectedClass >= 5 && store.selectedClass <= 12"
                        class="answer__btn"
                        @click="selectMultipleAnswers($event)"
                    >
                        <span
                            ><input type="checkbox" name="subjects" value="Vēsture" />
                            <img
                                src="../assets/images/checkbox.svg"
                                alt=""
                                class="custom-checkbox"
                            />
                            <img
                                src="../assets/images/checkbox-checked.svg"
                                alt=""
                                class="custom-checkbox-checked"
                            />
                            <img
                                src="../assets/images/emoji/Q4_istorija.svg"
                                alt=""
                                class="emoji"
                            />
                        </span>
                        Vēsture
                    </button>
                </div>
                <div v-if="store.step > 4">
                    <button
                        v-for="(a, index) in q.Ans"
                        :key="index"
                        class="answer__btn"
                        @click="selectAnswer(index + 1)"
                    >
                        <span v-if="store.step == 5 && index + 1 === 1"
                            ><img src="../assets/images/emoji/Q5_A.svg" alt="Emoji" class="emoji" />
                        </span>
                        <span v-if="store.step == 5 && index + 1 === 2"
                            ><img src="../assets/images/emoji/Q5_B.svg" alt="Emoji" class="emoji" />
                        </span>
                        <span v-if="store.step == 5 && index + 1 === 3"
                            ><img src="../assets/images/emoji/Q5_C.svg" alt="Emoji" class="emoji" />
                        </span>
                        <span v-if="store.step == 5 && index + 1 === 4"
                            ><img src="../assets/images/emoji/Q5_D.svg" alt="Emoji" class="emoji" />
                        </span>
                        <span v-if="store.step == 5 && index + 1 === 5"
                            ><img src="../assets/images/emoji/Q5_E.svg" alt="Emoji" class="emoji" />
                        </span>

                        <span v-if="store.step == 6 && index + 1 === 1"
                            ><img src="../assets/images/emoji/Q6_A.svg" alt="Emoji" class="emoji" />
                        </span>
                        <span v-if="store.step == 6 && index + 1 === 2"
                            ><img src="../assets/images/emoji/Q6_B.svg" alt="Emoji" class="emoji" />
                        </span>
                        <span v-if="store.step == 6 && index + 1 === 3"
                            ><img src="../assets/images/emoji/Q6_C.svg" alt="Emoji" class="emoji" />
                        </span>
                        <span v-if="store.step == 6 && index + 1 === 4"
                            ><img src="../assets/images/emoji/Q6_D.svg" alt="Emoji" class="emoji" />
                        </span>

                        <span v-if="store.step == 7 && index + 1 === 1"
                            ><img src="../assets/images/emoji/Q7_A.svg" alt="Emoji" class="emoji" />
                        </span>
                        <span v-if="store.step == 7 && index + 1 === 2"
                            ><img src="../assets/images/emoji/Q7_B.svg" alt="Emoji" class="emoji" />
                        </span>
                        <span v-if="store.step == 7 && index + 1 === 3"
                            ><img src="../assets/images/emoji/Q7_C.svg" alt="Emoji" class="emoji" />
                        </span>
                        {{ a }}
                    </button>
                </div>

                <div v-if="store.step === 4">
                    <button
                        @click="proceedWithMultipleSelection()"
                        class="benefit-btn"
                        style="margin-top: 2rem"
                        :disabled="store.isSubjectNotSelected"
                    >
                        {{ localization.continue }}
                        <img
                            src="../assets/images/arrow-right.svg"
                            alt="{{localization.continue}}"
                        />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
