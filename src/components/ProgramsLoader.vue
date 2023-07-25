<script setup>
import axios from 'axios'
import { onMounted } from 'vue'

import { store } from '../store'

const token = 'a29826cb-670e-4b25-9669-35f67b2e3e3b'

onMounted(() => {
    programRecomendationHandler()
    console.log(store.step)
})
const programRecomendationHandler = () => {
    store.isLoading = true
    setTimeout(() => {
        const instance = axios.create({
            baseURL: 'https://coda.io/apis/v1/docs/otYeYWMX9e/tables/grid-8XN2uCh13U/',
            headers: { Authorization: 'Bearer ' + token }
        })

        instance.get('/rows?useColumnNames=true').then((response) => {
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
            console.log('TIER0', store.recomendationsArrTIER0)
            console.log('TIER1', store.recomendationsArrTIER1)
            console.log('TIER2', store.recomendationsArrTIER2)
            console.log('TIER3', store.recomendationsArrTIER3)
            if (store.showCTA) {
                store.step += 1
            } else {
                store.step += 2
                store.showRecomendations = true
            }

            store.isLoading = false
            return response.data.items
        })
    }, 3000)
}
</script>
<template>
    <div class="spinner" v-if="store.isLoading">
        <img src="../assets/images/spinner.svg" alt="" />
    </div>
    <h1 v-if="store.isLoading">Skaičiuojame rezultatus...</h1>
</template>
