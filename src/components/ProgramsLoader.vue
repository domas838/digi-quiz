<script setup>
import { onMounted } from 'vue'

import { store } from '../store'
const url = new URL(window.location.href)

const props = defineProps(['instance'])

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
        // if (result.includes('Busy multitasker') && result.includes('Struggling')) {
        //     store.selectedPersona = 'Struggling'
        // }
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
        //
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
                store.TIER2 = 'Exam advanced prep'
                store.TIER3 = 'Advanced school prep'
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
            if (store.PROFILE1 === ['Ambitious student', 'Exam-oriented']) {
                store.TIER2 = 'Exam prep'
            } else {
                store.TIER2 = 'School prep'
            }
            if (store.PROFILE2 === 'Exam-oriented') {
                if (store.PROFILE1 === ['Ambitious student', 'Exam-oriented']) {
                    store.TIER3 = 'Advanced exam prep'
                } else {
                    store.TIER3 = 'School prep'
                }
            } else {
                if (store.PROFILE1 === ['Ambitious student', 'Exam-oriented']) {
                    store.TIER3 = 'Advanced school prep'
                } else {
                    store.TIER3 = 'Textbook, flexible'
                }
            }
            break

        default:
            break
    }

    props.instance
        .get('/rows?useColumnNames=true')
        .then((response) => {
            response.data.items.forEach((item) => {
                console.log(item)
                // console.log('store.selectedClass', typeof Number(store.selectedClass))
                // console.log('store.selectedPersona', store.selectedPersona)
                console.log(item.values.Tag, store.TIER0)
                console.log(item.values.Tag, store.TIER1)
                console.log(item.values.Tag, store.TIER2)
                console.log(item.values.Tag, store.TIER3)

                switch (item.values.Tier) {
                    case 0:
                        if (
                            item.values.Grade == Number(store.selectedClass) &&
                            item.values.Persona === store.selectedPersona &&
                            item.values.Tag === store.TIER0 &&
                            store.selectedSubjects.includes(item.values.Subject)
                        ) {
                            store.recomendationsArrTIER0.push(item)
                        }
                        break
                    case 1:
                        if (
                            item.values.Grade === Number(store.selectedClass) &&
                            item.values.Persona === store.selectedPersona &&
                            item.values.Tag === store.TIER1 &&
                            store.selectedSubjects.includes(item.values.Subject)
                        ) {
                            store.recomendationsArrTIER1.push(item)
                        }
                        break
                    case 2:
                        if (
                            item.values.Grade === Number(store.selectedClass) &&
                            item.values.Persona === store.selectedPersona &&
                            item.values.Tag === store.TIER2 &&
                            store.selectedSubjects.includes(item.values.Subject)
                        ) {
                            store.recomendationsArrTIER2.push(item)
                        }
                        break
                    case 3:
                        if (
                            item.values.Grade === Number(store.selectedClass) &&
                            item.values.Persona === store.selectedPersona &&
                            item.values.Tag === store.TIER3 &&
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
            const d = new Date()
            d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000)
            let expires = 'expires=' + d.toUTCString()

            document.cookie = `memby_quiz_persona=${store.selectedPersona} ; Domain=digiklase.lt ;  ${expires} ; path=/;`
            document.cookie = `memby_quiz_programs=${'TO-DO'} ; Domain=digiklase.lt ;  ${expires} ; path=/;`
        })
        .then(() => {
            if (url.searchParams.has('app') && url.searchParams.get('app') === 'true') {
                window.location = 'http://app.digiklase.lt/v2/quiz-recommendations'
            } else {
                store.isLoading = false

                // Set query params for returning visitors from the same URL
                url.searchParams.set('Persona', store.selectedPersona)
                url.searchParams.set('class', store.selectedClass)
                url.searchParams.set('level', store.childLevel)
                url.searchParams.set('subjects', JSON.stringify(store.selectedSubjects))
                url.searchParams.set('TIER0', JSON.stringify(store.recomendationsArrTIER0))
                url.searchParams.set('TIER1', JSON.stringify(store.recomendationsArrTIER1))
                url.searchParams.set('TIER2', JSON.stringify(store.recomendationsArrTIER2))
                url.searchParams.set('TIER3', JSON.stringify(store.recomendationsArrTIER3))
                window.history.replaceState(null, null, url)

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
