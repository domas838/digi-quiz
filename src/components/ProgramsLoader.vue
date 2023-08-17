<script setup>
import {onMounted, reactive} from 'vue'

import { store } from '../store'
import axios from "axios";
const url = new URL(window.location.href)

const props = defineProps([
    'generateProgramRecomendations',
    'selectMostRecommendedPrograms'
])

const token = 'a29826cb-670e-4b25-9669-35f67b2e3e3b'

const table = reactive({
  ID: 'grid-8XN2uCh13U' // LT
})

if (store.lang === 'LV') {
  table.ID = 'grid-I_8YD1oJ_N' // LV
}

const instance = axios.create({
  baseURL: `https://coda.io/apis/v1/docs/otYeYWMX9e/tables/${table.ID}/`,
  headers: { Authorization: 'Bearer ' + token }
});

const toFindDuplicates = (arry) => arry.filter((item, index) => arry.indexOf(item) !== index)

const programRecomendationHandler = () => {
    store.isLoading = true
    let resultArray = []
    resultArray = resultArray.concat(store.PROFILE1, store.PROFILE2, store.PROFILE3)

    const duplicated = toFindDuplicates(resultArray)

    let result = duplicated.filter((element, index) => {
        return duplicated.indexOf(element) === index
    })

    if (store.PROFILE3[0] === 'Socializer') {
        store.selectedPersona = store.PROFILE3[0]
    } else if (result.length == 1) {
        store.selectedPersona = duplicated[0]
    } else if (result.length == 2) {
        if (result.includes('Busy multitasker') && result.includes('Struggling')) {
            store.selectedPersona = 'Struggling'
        }
        if (result.includes('Exam-oriented') && result.includes('Ambitious student')) {
            store.selectedPersona = 'Ambitious student'
        }
        if (result.includes('Exam-oriented') && result.includes('Busy multitasker')) {
            if (store.TIER === 'TIER1') {
                store.selectedPersona = 'Struggling'
            } else {
                store.selectedPersona = 'Ambitious student'
            }
        }
    } else if (result.length >= 2) {
        if (
            (result.includes('Busy multitasker') || result.includes('Struggling')) &&
            (result.includes('Exam-oriented') || result.includes('Ambitious student'))
        ) {
            if (store.TIER === 'TIER1') {
                store.selectedPersona = 'Struggling'
            } else {
                store.selectedPersona = 'Ambitious student'
            }
        }
    }

    switch (store.selectedPersona) {
        case 'Ambitious student':
            if (store.TIER === 'TIER0') {
                store.TIER0 = 'Textbook, flexible'
            }
            store.TIER1 = 'Advanced'
            store.TIER2 = 'Exam prep'
            store.TIER3 = 'School prep'
            break
        case 'Exam-oriented':
            if (store.TIER === 'TIER0') {
                store.TIER0 = 'Textbook, flexible'
            }
            store.TIER1 = 'Exam prep'
            if (store.PROFILE1 === ['Ambitious student', 'Exam-oriented']) {
                store.TIER2 = 'Advanced'
                store.TIER3 = 'Advanced'
            } else {
                store.TIER2 = 'School prep'
                store.TIER3 = 'Textbook, flexible'
            }

            break
        case 'Busy multitasker':
            if (store.TIER === 'TIER0') {
                store.TIER0 = 'Textbook, flexible'
            }
            if (store.PROFILE1 === ['Ambitious student', 'Exam-oriented']) {
                store.TIER1 = 'Advanced'
            } else {
                store.TIER1 = 'Exam prep'
            }
            store.TIER2 = 'School prep'
            store.TIER3 = 'Textbook, flexible'

            break
        case 'Struggling':
            if (store.TIER === 'TIER0') {
                store.TIER0 = 'Textbook, flexible'
            }
            store.TIER1 = 'Textbook, flexible'
            store.TIER2 = 'School prep'
            store.TIER3 = 'Exam prep'

            break
        case 'Socializer':
            if (store.TIER === 'TIER0') {
                store.TIER0 = 'Textbook, flexible'
            }
            store.TIER1 = 'Non-formal'
            if (store.PROFILE1 === ['Ambitious student', 'Exam-oriented']) {
                store.TIER2 = 'Exam prep'
            } else {
                store.TIER2 = 'School prep'
            }
            if (store.PROFILE2 === 'Exam-oriented') {
                if (store.PROFILE1 === ['Ambitious student', 'Exam-oriented']) {
                    store.TIER3 = 'Advanced'
                } else {
                    store.TIER3 = 'School prep'
                }
            } else {
                if (store.PROFILE1 === ['Ambitious student', 'Exam-oriented']) {
                    store.TIER3 = 'Advanced'
                } else {
                    store.TIER3 = 'Textbook, flexible'
                }
            }
            break

        default:
            break
    }
    instance
        .get('/rows?useColumnNames=true')
        .then((response) => {
            response.data.items.forEach((item) => {
                props.generateProgramRecomendations(item)
            })

            return response.data.items
        })
        .then(() => {
            props.selectMostRecommendedPrograms()
        })
        .then(() => {
            const d = new Date()
            d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000)
            let expires = 'expires=' + d.toUTCString()

            const programs = JSON.stringify(store.membyIDsArray)

            document.cookie = `memby_quiz_persona=${store.selectedPersona} ; Domain=digiklase.lt ;  ${expires} ; path=/;`
            document.cookie = `memby_quiz_programs=${programs} ; Domain=digiklase.lt ;  ${expires} ; path=/;`
        })
        .then(() => {
            if (url.searchParams.has('app') && url.searchParams.get('app') === 'true') {
                if (store.lang === 'LT') {
                    window.location = 'http://app.digiklase.lt/v2/quiz-recommendations'
                }
                if (store.lang === 'LV') {
                    window.location = 'TO-DO'
                }
            } else {
                store.isLoading = false

                // Set query params for returning visitors from the same URL
                url.searchParams.set('persona', store.selectedPersona)
                url.searchParams.set('class', store.selectedClass)
                url.searchParams.set('level', store.childLevel)
                url.searchParams.set('subjects', JSON.stringify(store.selectedSubjects))
                url.searchParams.set('TIER0', JSON.stringify(store.recomendationsArrTIER0))
                url.searchParams.set('TIER1', JSON.stringify(store.recomendationsArrTIER1))
                url.searchParams.set('TIER2', JSON.stringify(store.recomendationsArrTIER2))
                url.searchParams.set('TIER3', JSON.stringify(store.recomendationsArrTIER3))
                url.searchParams.set('TIER0TAG', store.TIER0)
                url.searchParams.set('TIER1TAG', store.TIER1)
                url.searchParams.set('TIER2TAG', store.TIER2)
                url.searchParams.set('TIER3TAG', store.TIER3)
                window.history.replaceState(null, null, url)
                store.resultUrl = url
                if (store.showCTA) {
                    store.step += 1
                } else {
                    store.step += 2
                    store.showRecomendations = true
                }
            }
        })
}
onMounted(() => {
    programRecomendationHandler()
})
</script>
<template>
    <div class="spinner" v-if="store.isLoading">
        <img src="../assets/images/spinner.svg" alt="" />
    </div>
    <h1 v-if="store.lang === 'LT' && store.isLoading">Skaičiuojame rezultatus...</h1>
    <h1 v-if="store.lang === 'LV' && store.isLoading">Rezultāti tiek aprēķināti......</h1>
</template>
