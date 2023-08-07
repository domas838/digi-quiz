<script setup>
import axios from 'axios'
import { onMounted } from 'vue'

import { store } from '../store'
const url = new URL(window.location.href)

const token = 'a29826cb-670e-4b25-9669-35f67b2e3e3b'

const toFindDuplicates = (arry) => arry.filter((item, index) => arry.indexOf(item) !== index)

const programRecomendationHandler = () => {
    store.isLoading = true

    let resultArray = []
    resultArray = resultArray.concat(store.PROFILE1, store.PROFILE2, store.PROFILE3)

    const duplicated = toFindDuplicates(resultArray)

    let result = duplicated.filter((element, index) => {
        return duplicated.indexOf(element) === index
    })

    // if (store.PROFILE3[0] === 'Socializer') {
    //     store.selectedPersona = store.PROFILE3[0]
    // } else

    if (result.length == 1) {
        store.selectedPersona = duplicated[0]
    } else if (result.length == 2) {
        if (result.includes('Busy Multitasker') && result.includes('Struggling')) {
            store.selectedPersona = 'Struggling'
        }
        if (result.includes('Exam Oriented') && result.includes('Ambitious')) {
            store.selectedPersona = 'Ambitious'
        }
        if (result.includes('Exam Oriented') && result.includes('Busy Multitasker')) {
            if (store.TIER === 'TIER1') {
                store.selectedPersona = 'Struggling'
            } else {
                store.selectedPersona = 'Ambitious'
            }
        }
        //
    } else if (result.length >= 2) {
        if (
            (result.includes('Busy Multitasker') || result.includes('Struggling')) &&
            (result.includes('Exam Oriented') || result.includes('Ambitious'))
        ) {
            if (store.TIER === 'TIER1') {
                store.selectedPersona = 'Struggling'
            } else {
                store.selectedPersona = 'Ambitious'
            }
        }
    }

    console.log('Persona ' + store.selectedPersona)
    switch (store.selectedPersona) {
        case 'Ambitious':
            if (store.TIER === 'TIER0') {
                store.TIER0 = 'Textbook, flexible'
            }
            store.TIER1 = 'Advanced'
            store.TIER2 = 'Exam prep'
            store.TIER3 = 'School prep'
            break
        case 'Exam Oriented':
            if (store.TIER === 'TIER0') {
                store.TIER0 = 'Textbook, flexible'
            }
            store.TIER1 = 'Exam prep'
            if (store.PROFILE1 === ['Ambitious', 'Exam Oriented']) {
                store.TIER2 = 'Exam advanced prep'
                store.TIER3 = 'Advanced school prep'
            } else {
                store.TIER2 = 'School prep'
                store.TIER3 = 'Textbook, flexible'
            }

            break
        case 'Busy Multitasker':
            if (store.TIER === 'TIER0') {
                store.TIER0 = 'Textbook, flexible'
            }
            if (store.PROFILE1 === ['Ambitious', 'Exam Oriented']) {
                store.TIER1 = 'Exam advanced prep'
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
            if (store.PROFILE1 === ['Ambitious', 'Exam Oriented']) {
                store.TIER2 = 'Exam prep'
            } else {
                store.TIER2 = 'School prep'
            }
            if (store.PROFILE2 === 'Exam oriented') {
                if (store.PROFILE1 === ['Ambitious', 'Exam Oriented']) {
                    store.TIER3 = 'Advanced exam prep'
                } else {
                    store.TIER3 = 'School prep'
                }
            } else {
                if (store.PROFILE1 === ['Ambitious', 'Exam Oriented']) {
                    store.TIER3 = 'Advanced school prep'
                } else {
                    store.TIER3 = 'Textbook, flexible'
                }
            }
            break

        default:
            break
    }

    const instance = axios.create({
        baseURL: 'https://coda.io/apis/v1/docs/otYeYWMX9e/tables/grid-8XN2uCh13U/',
        headers: { Authorization: 'Bearer ' + token }
    })

    instance
        .get('/rows?useColumnNames=true')
        .then((response) => {
            response.data.items.forEach((item) => {
                console.log(item)
                switch (item.values.Tier) {
                    case 'TIER0':
                        if (
                            item.values.Grade === store.selectedClass &&
                            item.values.Persona === store.selectedPersona &&
                            item.values.Tags === store.TIER0 &&
                            store.selectedSubjects.includes(item.values.Subject)
                        ) {
                            store.recomendationsArrTIER0.push(item)
                        }
                        break
                    case 'TIER1':
                        if (
                            item.values.Grade === store.selectedClass &&
                            item.values.Persona === store.selectedPersona &&
                            item.values.Tags === store.TIER1 &&
                            store.selectedSubjects.includes(item.values.Subject)
                        ) {
                            store.recomendationsArrTIER1.push(item)
                        }
                        break
                    case 'TIER2':
                        if (
                            item.values.Grade === store.selectedClass &&
                            item.values.Persona === store.selectedPersona &&
                            item.values.Tags === store.TIER2 &&
                            store.selectedSubjects.includes(item.values.Subject)
                        ) {
                            store.recomendationsArrTIER2.push(item)
                        }
                        break
                    case 'TIER3':
                        if (
                            item.values.Grade === store.selectedClass &&
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
            })
            console.log('Persona', store.selectedPersona)
            console.log('TIER0', store.recomendationsArrTIER0)
            console.log('TIER1', store.recomendationsArrTIER1)
            console.log('TIER2', store.recomendationsArrTIER2)
            console.log('TIER3', store.recomendationsArrTIER3)

            return response.data.items
        })
        .then(() => {
            document.cookie = `memby_quiz_persona=${store.selectedPersona}`
            document.cookie = `memby_quiz_programs=${'TO-DO'}`
        })
        .then(() => {
            if (url.searchParams.has('app') && url.searchParams.get('app') === 'true') {
                window.location = 'http://app.digiklase.lt/v2/quiz-recommendations'
            } else {
                store.isLoading = false
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
    <h1 v-if="store.isLoading">Skaičiuojame rezultatus...</h1>
</template>
