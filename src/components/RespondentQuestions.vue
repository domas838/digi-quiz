<script setup>
import { store } from '../store'
const props = defineProps(['questions', 'next'])

const selectFirstAnswer = (classNumber) => {
    store.result1 = classNumber
    props.next()
}
const selectAnswer = (answerIndex) => {
    switch (store.step) {
        // PROFILE1
        case 2:
            switch (answerIndex) {
                case 1:
                    store.PROFILE1 = ['Ambitious', 'Exam-oriented']
                    break
                case 2:
                    store.PROFILE1 = ['Exam-oriented', 'Busy multitasker']
                    break
                case 3:
                    store.PROFILE1 = ['Struggling', 'Busy multitasker']
                    break

                default:
                    break
            }
            break
        // PROFILE2
        case 3:
            switch (answerIndex) {
                case 1:
                    store.PROFILE2 = ['Ambitious']
                    break
                case 2:
                    store.PROFILE2 = ['Exam-oriented']
                    break
                case 3:
                    store.PROFILE2 = ['Struggling']
                    break
                case 4:
                    store.PROFILE2 = ['Busy multitasker']
                    break

                default:
                    break
            }

            break

        case 4:
            break

        // PROFILE 3
        case 5:
            switch (answerIndex) {
                case 1:
                    store.PROFILE3 = ['Ambitious']
                    break
                case 2:
                    store.PROFILE3 = ['Exam-oriented']
                    break
                case 3:
                    store.PROFILE3 = ['Struggling']
                    break
                case 4:
                    store.PROFILE3 = ['Busy multitasker']
                    break
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
                    store.answers.selected6 = 'A'
                    break
                case 2:
                    store.answers.selected6 = 'Flexible - textbook'
                    store.answers.TIER = 'TIER0'
                    break
                case 3:
                    store.answers.selected6 = 'C'
                    break
                default:
                    return
            }
            break

        case 7:
            switch (answerIndex) {
                case 1:
                    if (store.answers.TIER !== 'TIER0') {
                        store.answers.TIER = 'TIER1'
                    }
                    break
                case 2:
                    if (store.answers.TIER !== 'TIER0') {
                        store.answers.TIER = 'TIER2'
                    }
                    break
                case 3:
                    if (store.answers.TIER !== 'TIER0') {
                        store.answers.TIER = 'TIER3'
                    }
                    break

                default:
                    break
            }
            break

        default:
            break
    }
    if (store.step !== 4) {
        props.next()
    }
}

const selectMultipleAnswers = () => {
    const input = event.target.querySelector('input')
    if (input.checked) {
        input.checked = false
    } else {
        input.checked = true
    }
}
const proceedWithMultipleSelection = () => {
    store.step += 1
    const inputs = document.querySelectorAll("input[name='subjects']")

    inputs.forEach((input) => {
        if (input.checked) {
            store.answers.selected4.push(input.value)
        }
    })
}
</script>
<template>
    <div v-for="(q, index) in props.questions" :key="index">
        <div v-if="q.qNo === store.step && store.step === 1">
            <h1>{{ q.Q }}</h1>
            <div class="answer__content">
                <div class="answer__buttons-wrapper">
                    <button
                        v-for="(classNo, index) in [
                            '1 kl.',
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
                        @click="selectFirstAnswer(classNo)"
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
            <h1>{{ q.Q }}</h1>

            <div class="answer__container" v-if="!store.showFirstBenefit">
                <div v-if="store.step < 4">
                    <button
                        v-for="(a, index) in q.Ans"
                        :key="index"
                        class="answer__btn"
                        @click="selectAnswer(index + 1)"
                    >
                        <span v-if="store.step == 2 && index + 1 === 1">😍 </span>
                        <span v-if="store.step == 2 && index + 1 === 2">😊 </span>
                        <span v-if="store.step == 2 && index + 1 === 3">😫 </span>
                        {{ a }}
                    </button>
                </div>
                <div v-if="store.step === 4">
                    <button
                        v-for="(a, index) in q.Ans"
                        :key="index"
                        class="answer__btn"
                        @click="selectMultipleAnswers($event)"
                    >
                        <span v-if="store.step == 4 && index + 1 === 1"
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
                            🧮
                        </span>
                        <span v-if="store.step === 4 && index + 1 === 2"
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
                            📖
                        </span>
                        <span v-if="store.step === 4 && index + 1 === 3"
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
                            🇬🇧
                        </span>
                        <span v-if="store.step === 4 && index + 1 === 4"
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
                            ⚡
                        </span>
                        <span v-if="store.step === 4 && index + 1 === 5"
                            ><input type="checkbox" name="subjects" value="Chemija " />
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
                            🧪
                        </span>
                        {{ a }}
                    </button>
                </div>
                <div v-if="store.step > 4">
                    <button
                        v-for="(a, index) in q.Ans"
                        :key="index"
                        class="answer__btn"
                        @click="selectAnswer(index + 1)"
                    >
                        <span v-if="store.step == 5 && index + 1 === 1">🚀 </span>
                        <span v-if="store.step == 5 && index + 1 === 2">👍 </span>
                        <span v-if="store.step == 5 && index + 1 === 3">😬 </span>
                        <span v-if="store.step == 5 && index + 1 === 4">🙄 </span>

                        <span v-if="store.step == 6 && index + 1 === 1">📝 </span>
                        <span v-if="store.step == 6 && index + 1 === 2">🎓 </span>
                        <span v-if="store.step == 6 && index + 1 === 3">👍 </span>
                        <span v-if="store.step == 6 && index + 1 === 4">🤷‍♂️ </span>

                        <span v-if="store.step == 7 && index + 1 === 1">😌 </span>
                        <span v-if="store.step == 7 && index + 1 === 2">😎 </span>
                        <span v-if="store.step == 7 && index + 1 === 3">🔥 </span>
                        {{ a }}
                    </button>
                </div>

                <div v-if="store.step === 4">
                    <button
                        @click="proceedWithMultipleSelection()"
                        class="benefit-btn"
                        style="margin-top: 2rem"
                    >
                        Tęsti <img src="../assets/images/arrow-right.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
