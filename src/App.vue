<script setup>
import { store } from './store.js'
import { onMounted } from 'vue'
import axios from 'axios'

import RespondentQuestions from './components/RespondentQuestions.vue'
import FirstBenefit from './components/FirstBenefit.vue'
import SecondBenefit from './components/SecondBenefit.vue'
import EmailForm from './components/EmailForm.vue'
import ProgramRecomendation from './components/ProgramRecomendation.vue'
import ProgramsLoader from './components/ProgramsLoader.vue'

const url = new URL(window.location.href)
const token = 'a29826cb-670e-4b25-9669-35f67b2e3e3b'

const instance = axios.create({
    baseURL: 'https://coda.io/apis/v1/docs/otYeYWMX9e/tables/grid-8XN2uCh13U/',
    headers: { Authorization: 'Bearer ' + token }
})
const generateProgramRecomendations = (item) => {
    switch (item.values.Tier) {
        case '0':
            if (
                item.values.Persona === 'Everyone' &&
                item.values.Grade == Number(store.selectedClass)
            ) {
                store.recomendationsArrTIER0.push(item)
            }
            if (
                item.values.Grade == Number(store.selectedClass) &&
                item.values.Persona === store.selectedPersona &&
                item.values.Tags === store.TIER0 &&
                store.selectedSubjects.includes(item.values.Subject)
            ) {
                store.recomendationsArrTIER0.push(item)
            }

            break
        case '1':
            if (
                item.values.Persona === 'Everyone' &&
                item.values.Grade == Number(store.selectedClass)
            ) {
                store.recomendationsArrTIER1.push(item)
            }
            if (
                item.values.Grade === Number(store.selectedClass) &&
                item.values.Persona === store.selectedPersona &&
                item.values.Tags === store.TIER1 &&
                store.selectedSubjects.includes(item.values.Subject)
            ) {
                store.recomendationsArrTIER1.push(item)
            }

            break
        case '2':
            if (
                item.values.Persona === 'Everyone' &&
                item.values.Grade == Number(store.selectedClass)
            ) {
                store.recomendationsArrTIER2.push(item)
            }
            if (
                item.values.Grade === Number(store.selectedClass) &&
                item.values.Persona === store.selectedPersona &&
                item.values.Tags === store.TIER2 &&
                store.selectedSubjects.includes(item.values.Subject)
            ) {
                store.recomendationsArrTIER2.push(item)
            }

            break
        case '3':
            if (
                item.values.Persona === 'Everyone' &&
                item.values.Grade == Number(store.selectedClass)
            ) {
                store.recomendationsArrTIER3.push(item)
            }
            if (
                item.values.Grade === Number(store.selectedClass) &&
                item.values.Persona === store.selectedPersona &&
                item.values.Tags === store.TIER3 &&
                store.selectedSubjects.includes(item.values.Subject)
            ) {
                store.recomendationsArrTIER3.push(item)
            }

            break

        default:
            break
    }
}
const selectMostRecommendedPrograms = () => {
    console.log('Select most recommended programs')

    if (
        store.recomendationsArrTIER0.length > 0 &&
        store.recomendationsArrTIER1.length === 0 &&
        store.recomendationsArrTIER2.length === 0 &&
        store.recomendationsArrTIER3.length === 0
    ) {
        store.TIER0isRecomended = true
    } else {
        store.TIER0isRecomended = true
    }

    if (
        store.recomendationsArrTIER0.length === 0 &&
        store.recomendationsArrTIER1.length > 0 &&
        store.recomendationsArrTIER2.length === 0 &&
        store.recomendationsArrTIER3.length === 0
    ) {
        store.TIER1isRecomended = true
    } else if (
        store.recomendationsArrTIER0.length === 0 &&
        store.recomendationsArrTIER1.length > 0
    ) {
        store.TIER1isRecomended = true
    } else {
        store.TIER1isRecomended = false
    }
    if (
        store.recomendationsArrTIER0.length === 0 &&
        store.recomendationsArrTIER1.length === 0 &&
        store.recomendationsArrTIER2.length > 0 &&
        store.recomendationsArrTIER3.length === 0
    ) {
        store.TIER2isRecomended = true
    } else if (
        store.recomendationsArrTIER1.length === 0 &&
        store.recomendationsArrTIER2.length > 0
    ) {
        store.TIER2isRecomended = true
    } else {
        store.TIER2isRecomended = false
    }
    if (
        store.recomendationsArrTIER0.length === 0 &&
        store.recomendationsArrTIER1.length === 0 &&
        store.recomendationsArrTIER2.length === 0 &&
        store.recomendationsArrTIER3.length > 0
    ) {
        store.TIER3isRecomended = true
    } else if (
        store.recomendationsArrTIER2.length === 0 &&
        store.recomendationsArrTIER3.length > 0
    ) {
        store.TIER3isRecomended = true
    } else {
        store.TIER3isRecomended = false
    }
    console.log(store.TIER0isRecomended)
    console.log(store.TIER1isRecomended)
    console.log(store.TIER2isRecomended)
    console.log(store.TIER3isRecomended)
}
onMounted(() => {
    if (url.searchParams.has('role')) {
        if (url.searchParams.get('role') === 'parent') {
            store.respondent = 'parent'
            store.step = 1
        }
        if (url.searchParams.get('role') === 'child') {
            store.respondent = 'child'

            store.step = 1
        }
    }

    if (url.searchParams.has('Class') || url.searchParams.has('subject')) {
        // praleidžiame INTRO, Q1 langą, Q4, BENEFIT, CTA langus.
        store.step = 2
        store.showCTA = false
    }
    if (url.searchParams.has('Class')) {
        store.respondent = 'child'
    }

    // Redirect straight to results
    if (
        (url.searchParams.has('Persona') &&
            url.searchParams.has('Class') &&
            url.searchParams.has('Level') &&
            url.searchParams.has('Subjects') &&
            url.searchParams.has('TIER0')) ||
        url.searchParams.has('TIER1') ||
        url.searchParams.has('TIER2') ||
        url.searchParams.has('TIER3')
    ) {
        console.log('IF')
        // Display results
        store.step = 10
        store.showRecomendations = true

        // Set Data Values
        store.selectedPersona = url.searchParams.get('Persona')
        store.selectedClass = url.searchParams.get('Class')
        store.childLevel = url.searchParams.get('Level')
        store.selectedSubjects = JSON.parse(url.searchParams.get('Subjects'))
        if (url.searchParams.has('TIER0')) {
            store.recomendationsArrTIER0 = JSON.parse(url.searchParams.get('TIER0'))
        }
        if (url.searchParams.has('TIER1')) {
            store.recomendationsArrTIER1 = JSON.parse(url.searchParams.get('TIER1'))
        }
        if (url.searchParams.has('TIER2')) {
            store.recomendationsArrTIER2 = JSON.parse(url.searchParams.get('TIER2'))
        }
        if (url.searchParams.has('TIER3')) {
            store.recomendationsArrTIER3 = JSON.parse(url.searchParams.get('TIER3'))
        }

        instance
            .get('/rows?useColumnNames=true')
            .then((response) => {
                response.data.items.forEach((item) => {
                    generateProgramRecomendations(item)
                })
                console.log('Persona', store.selectedPersona)
                console.log('TIER0', store.recomendationsArrTIER0)
                console.log('TIER1', store.recomendationsArrTIER1)
                console.log('TIER2', store.recomendationsArrTIER2)
                console.log('TIER3', store.recomendationsArrTIER3)

                return response.data.items
            })
            .then(() => {
                selectMostRecommendedPrograms()
            })
    }
})

const respondentChildHandler = () => {
    store.step = 1
    store.respondent = 'child'
}
const respondentParentHandler = () => {
    store.step = 1
    store.respondent = 'parent'
}
const prevStep = () => {
    if (store.step === 3 && store.showFirstBenefit) {
        store.step = 3
        store.showFirstBenefit = false
    } else if (store.step === 5 && store.showSecondBenefit) {
        store.step = 5
        store.showSecondBenefit = false
    } else {
        store.step -= 1
    }
}
const nextStep = () => {
    if (store.step <= store.quiz.child.length) {
        if (store.step === 3 && store.showFirstBenefit === false) {
            if (!url.searchParams.has('Class')) {
                store.step = 3
                store.showFirstBenefit = true
            } else {
                store.step = 4
                store.showFirstBenefit = false
            }
        } else if (store.step === 5 && store.showSecondBenefit === false) {
            if (!url.searchParams.has('Class')) {
                store.step = 5
                store.showSecondBenefit = true
            } else {
                store.step = 6
                store.showSecondBenefit = false
            }
        } else {
            store.step += 1
        }
        if (url.searchParams.has('Class') || url.searchParams.has('subject')) {
            store.showFirstBenefit = false
            if (store.step === 4) {
                store.step = 5
            }
            if (store.step > 7) {
                store.showRecomendations = true
            }
        }
    }
}

const completeness = (step) => {
    return (100 / store.quiz.child.length) * step
}
</script>

<template>
    <!-- Intro -->
    <div class="container--intro" v-if="store.step === 0">
        <div class="brand-logo brand-logo--mobile">
            <img src="./assets/images/digiklase.svg" alt="digiklase logo" />
        </div>
        <img src="./assets/images/skateboard.svg" alt="" class="intro-visual" />
        <h1 class="intro-heading">
            Užpildykite trumpą klausimyną ir <br />
            gaukite specialiai JUMS pritaikytą
            <span
                >Digiklasės <br />
                pasiūlymą</span
            >
        </h1>
        <div class="intro-selection">
            <h2>Pasirinkite, kas esate</h2>
            <div class="intro-selection__buttons">
                <button class="button--child" @click="respondentChildHandler()">
                    <img src="./assets/images/emoji/INTRO_backback.svg" alt="" /> Esu mokinys
                </button>
                <button class="button--parent" @click="respondentParentHandler()">
                    <img src="./assets/images/emoji/INTRO_parent.svg" alt="" /> Esu tėvelis/globėjas
                </button>
            </div>
        </div>
        <div class="brand-logo">
            <img src="./assets/images/digiklase.svg" alt="digiklase logo" />
        </div>
    </div>
    <div class="container" v-if="store.step !== 0 && store.step !== 10">
        <div
            class="brand-logo"
            v-if="
                store.step > 0 &&
                store.step < 10 &&
                !store.showFirstBenefit &&
                !store.showSecondBenefit
            "
        >
            <img src="./assets/images/digiklase.svg" alt="digiklase logo" />
        </div>
        <div
            class="progress__wrapper"
            v-if="
                store.step >= 1 &&
                !store.showFirstBenefit &&
                !store.showSecondBenefit &&
                store.step < 9
            "
        >
            <button
                class="back-button"
                @click="prevStep()"
                v-if="store.step <= store.quiz.child.length"
            >
                <img src="./assets/images/arrow.svg" alt="" />
            </button>
            <div class="progress__count" v-if="store.step <= store.quiz.child.length">
                <span>{{ store.step }} / {{ store.quiz.child.length }}</span>
            </div>
            <div class="progress" v-if="store.step <= store.quiz.child.length">
                <span
                    class="completeness"
                    :style="{ width: completeness(store.step) + '%' }"
                ></span>
            </div>
        </div>
        <div
            class="answer__container answer__container--wide"
            v-if="store.respondent === 'child' && store.step !== 10"
        >
            <RespondentQuestions :questions="store.quiz.child" :next="nextStep" />
        </div>
        <div
            class="answer__container answer__container--wide"
            v-if="store.respondent === 'parent' && store.step !== 10"
        >
            <RespondentQuestions :questions="store.quiz.parent" :next="nextStep" />
        </div>

        <FirstBenefit />
        <SecondBenefit />
        <ProgramsLoader
            v-if="store.step === 8"
            :baseUrl="url"
            :instance="instance"
            :generateProgramRecomendations="generateProgramRecomendations"
            :selectMostRecommendedPrograms="selectMostRecommendedPrograms"
        />
        <EmailForm v-if="store.step === 9" />
    </div>
    <img
        src="./assets/images/bottomVector.svg"
        class="bottom-vector"
        alt="Vector"
        v-if="store.step !== 10"
    />
    <img
        src="./assets/images/Line.svg"
        alt=""
        class="line-behind-classroom"
        v-if="store.showSecondBenefit && store.step === 5"
    />
    <ProgramRecomendation v-if="store.step === 10 && store.showRecomendations" />
</template>
