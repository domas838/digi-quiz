<script setup>
import axios from 'axios'
import { onMounted } from 'vue'
import { store } from '../store'

const token = 'a29826cb-670e-4b25-9669-35f67b2e3e3b'

onMounted(() => {
    programRecomendationHandler()
})
const programRecomendationHandler = () => {
    store.isLoading = true
    setTimeout(() => {
        const instance = axios.create({
            baseURL: 'https://coda.io/apis/v1/docs/otYeYWMX9e/tables/grid-8XN2uCh13U/',
            headers: { Authorization: 'Bearer ' + token }
        })

        instance.get('/rows?useColumnNames=true').then((response) => {
            // console.log(response.data.items)
            response.data.items.forEach((item) => {
                // console.log(item)
                switch (item.values.Tier) {
                    case 'TIER0':
                        store.recomendationsArrTIER0.push(item)
                        break
                    case 'TIER1':
                        store.recomendationsArrTIER1.push(item)
                        break
                    case 'TIER2':
                        store.recomendationsArrTIER2.push(item)
                        break
                    case 'TIER3':
                        store.recomendationsArrTIER3.push(item)
                        break

                    default:
                        break
                }
            })
            console.log('TIER0', store.recomendationsArrTIER0)
            console.log(store.recomendationsArrTIER1)
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

    <div v-if="store.recomendationsArrTIER0.length">
        <h2>TIER0 Programs</h2>

        <div v-for="item in store.recomendationsArrTIER0" v-bind:key="item.id">
            {{ item.values.ProgramName }}
        </div>
    </div>
    <div v-if="store.recomendationsArrTIER1.length">
        <h2>TIER1 Programs</h2>

        <div v-for="item in store.recomendationsArrTIER1" v-bind:key="item.id">
            {{ item.values.ProgramName }}
        </div>
    </div>
    <div v-if="store.recomendationsArrTIER2.length">
        <h2>TIER2 Programs</h2>

        <div v-for="item in store.recomendationsArrTIER2" v-bind:key="item.id">
            {{ item.values.ProgramName }}
        </div>
    </div>
    <div v-if="store.recomendationsArrTIER3.length">
        <h2>TIER3 Programs</h2>

        <div v-for="item in store.recomendationsArrTIER3" v-bind:key="item.id">
            {{ item.values.ProgramName }}
        </div>
    </div>
</template>
