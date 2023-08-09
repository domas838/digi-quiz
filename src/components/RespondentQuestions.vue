<script setup>
import { store } from '../store'
const props = defineProps(['questions', 'next'])

const selectClass = (classNumber) => {
    store.selectedClass = classNumber.replace(' kl.', '')

    props.next()
}
const selectAnswer = (answerIndex) => {
    switch (store.step) {
        // PROFILE1
        case 2:
            switch (answerIndex) {
                case 1:
                    store.PROFILE1 = ['Ambitious student', 'Exam-oriented']
                    store.childLevel = 'A'
                    break
                case 2:
                    store.PROFILE1 = ['Exam-oriented', 'Busy multitasker']
                    store.childLevel = 'B'
                    break
                case 3:
                    store.PROFILE1 = ['Struggling', 'Busy multitasker']
                    store.childLevel = 'C'
                    break

                default:
                    break
            }
            break
        // PROFILE2
        case 3:
            switch (answerIndex) {
                case 1:
                    store.PROFILE2 = ['Ambitious student']
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
                    store.PROFILE3 = ['Ambitious student']
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
                    props.next()
                    return
                case 2:
                    store.TIER = 'TIER0'
                    break
                case 3:
                    props.next()
                    return
                case 4:
                    props.next()
                    return
                default:
                    return
            }
            break

        case 7:
            switch (answerIndex) {
                case 1:
                    if (store.TIER !== 'TIER0') {
                        store.TIER = 'TIER1'
                    }
                    break
                case 2:
                    if (store.TIER !== 'TIER0') {
                        store.TIER = 'TIER2'
                    }
                    break
                case 3:
                    if (store.TIER !== 'TIER0') {
                        store.TIER = 'TIER3'
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
    const selectedInputs = document.querySelectorAll("input[name='Subjects']:checked")
    if (selectedInputs.length) {
        store.step += 1

        selectedInputs.forEach((input) => {
            store.selectedSubjects.push(input.value)
        })
    }
}
</script>
<template>
    <div v-for="(q, index) in props.questions" :key="index">
        <div v-if="q.qNo === store.step && store.step === 1">
            <h1>
                {{ q.Q }}
            </h1>

            <div class="answer__content">
                <div class="answer__buttons-wrapper grade">
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
                <span class="emoji-wrapper">
                    <img
                        v-if="store.step === 2"
                        src="../assets/images/emoji/Q2_text1.svg"
                        class="emoji"
                        alt=""
                    />
                    <img
                        v-if="store.step === 2"
                        src="../assets/images/emoji/Q2_text2.svg"
                        class="emoji"
                        alt=""
                    />
                </span>
                <img
                    v-if="store.step === 4"
                    src="../assets/images/emoji/Q7_text1.svg"
                    class="emoji"
                    alt=""
                />
                <span class="emoji-wrapper">
                    <img
                        v-if="store.step === 5"
                        src="../assets/images/emoji/Q5_text1.svg"
                        class="emoji"
                        alt=""
                    />
                    <img
                        v-if="store.step === 5"
                        src="../assets/images/emoji/Q5_text2.svg"
                        class="emoji"
                        alt=""
                    />
                </span>
                <span class="emoji-wrapper">
                    <img
                        v-if="store.step === 6"
                        src="../assets/images/emoji/Q6_text1.svg"
                        class="emoji"
                        alt=""
                    />
                    <img
                        v-if="store.step === 6"
                        src="../assets/images/emoji/Q6_text2.svg"
                        class="emoji"
                        alt=""
                    />
                </span>
                <span class="emoji-wrapper">
                    <img
                        v-if="store.step === 7"
                        src="../assets/images/emoji/Q7_text1.svg"
                        class="emoji"
                        alt=""
                    />
                    <img
                        v-if="store.step === 7"
                        src="../assets/images/emoji/Q7_text2.svg"
                        class="emoji"
                        alt=""
                    />
                </span>
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
                <div v-if="store.step === 4">
                    <button
                        v-if="store.selectedClass >= 1 && store.selectedClass <= 12"
                        class="answer__btn"
                        @click="selectMultipleAnswers($event)"
                    >
                        <span
                            ><input type="checkbox" name="Subjects" value="Matematika" />
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
                            ><input type="checkbox" name="Subjects" value="Lietuvių kalba" />
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
                            ><input type="checkbox" name="Subjects" value="Biologija" />
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
                            ><input type="checkbox" name="Subjects" value="Fizika" />
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
                            ><input type="checkbox" name="Subjects" value="Chemija" />
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
                            ><input type="checkbox" name="Subjects" value="Istorija" />
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
                            ><input type="checkbox" name="Subjects" value="Anglų kalba" />
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
                            ><input type="checkbox" name="Subjects" value="Geografija" />
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
                            ><input type="checkbox" name="Subjects" value="Pasaulio pažinimas" />
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
                            ><input type="checkbox" name="Subjects" value="Gamta ir žmogus" />
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
                            ><input type="checkbox" name="Subjects" value="Įdomusis mokslas" />
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
                        Tęsti <img src="../assets/images/arrow-right.svg" alt="Tęsti" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
