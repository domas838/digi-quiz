<script setup>
import { store } from '../store'
import { reactive } from 'vue'
import { changeUrlPath } from "../helpers";

const acceptFirstBenefit = () => {
    store.showFirstBenefit = false
    store.step += 1
    changeUrlPath('/' + store.respondent + '/' + store.step + '/' + store.flow)
}

const benefits = [
    '<strong>Aukščiausios kvalifikacijos mokytojai,</strong> įskaitant Kembridžo ir kitų geriausių pasaulio universitetų absolventus',
    '<strong>Įkvepiančios asmenybės,</strong> gebančios ne tik išradingai pasakoti istorijas, bet ir užkurti įdomias diskusijas',
    'Jei kažkurie mokomieji dalykai vis dar sunkiau perprantami, Digiklasės komanda visada pasiruošusi tau <strong>papildomai padėti po pamokos!</strong>'
]
const benefitsLV = [
    'Augsti kvalificēti pasniedzēji, pabeiguši Kembridžas un citas ievērojamas pasaules universitātes.',
    'Iedvesmojošas personības, kuras ne tikai aizraujoši mācīs tematus, bet arī radīs interesi ikvienam piedalīties diskusijās.',
    'Ja kāds priekšmeta temats joprojām būs grūti saprotams, Memby pasniedzēju asistenti būs vienmēr gatavi palīdzēt.'
]
const localization = reactive({
    continue: 'Tęsti'
})
if (store.lang === 'LV') {
    localization.continue = 'Turpināt'
}
</script>

<template>
    <div class="benefit-container">
        <h1 class="benefit-heading" v-if="store.lang === 'LT'">
            Mokytojai, <br />
            padėsiantys siekti užsibrėžtų tikslų
        </h1>
        <h1 class="benefit-heading" v-if="store.lang === 'LV'">
            Pasniedzēji, kuri palīdz sasniegt mērķus
        </h1>
        <div v-if="store.lang === 'LT'">
            <div class="benefit-row" v-for="(b, index) in benefits" v-bind:key="index">
                <div class="icon">
                  <img class="min-w-[30px]" src="../assets/images/Description.svg" alt="" />
                </div>
                <div class="content">
                    <p v-html="b"></p>
                </div>
            </div>
        </div>
        <div v-if="store.lang === 'LV'">
            <div class="benefit-row" v-for="(b, index) in benefitsLV" v-bind:key="index">
                <div class="icon">
                  <img class="min-w-[30px]" src="../assets/images/Description.svg" alt="" />
                </div>
                <div class="content">
                    <p v-html="b"></p>
                </div>
            </div>
        </div>

        <button @click="acceptFirstBenefit()" class="benefit-btn">
            {{ localization.continue }} <img src="../assets/images/arrow-right.svg" alt="" />
        </button>
        <img src="../assets/images/teacher.svg" alt="" class="teacher-visual" />
    </div>
</template>
