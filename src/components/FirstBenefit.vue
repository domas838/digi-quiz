<script setup>
import { store } from '../store'
const acceptFirstBenefit = () => {
    document.body.classList.remove('bg-dark')
    store.showFirstBenefit = false
    store.step += 1
}

const benefits = [
    '<strong>Aukščiausios kvalifikacijos mokytojai,</strong> įskaitant Kembridžo ir kitų geriausių pasaulio universitetų absolventus',
    '<strong>Įkvepiančios asmenybės,</strong> gebančios ne tik išradingai pasakoti istorijas, bet ir užkurti įdomias diskusijas',
    'Jei kažkurie mokomieji dalykai vis dar sunkiau perprantami, Digiklasės komanda visada pasiruošusi tau <strong>papildomai padėti po pamokos!</strong>'
]
</script>

<template>
    <div class="benefit-container" v-if="store.showFirstBenefit && store.step === 3">
        <h1 class="benefit-heading">
            Mokytojai, <br />
            padėsiantys siekti užsibrėžtų tikslų
        </h1>
        <div class="benefit-row" v-for="(b, index) in benefits" v-bind:key="index">
            <div class="icon"><img src="../assets/images/Description.svg" alt="" /></div>
            <div class="content">
                <p v-html="b"></p>
            </div>
        </div>
        <button @click="acceptFirstBenefit()" class="benefit-btn">
            Tęsti <img src="../assets/images/arrow-right.svg" alt="" />
        </button>
        <img src="../assets/images/teacher.svg" alt="" class="teacher-visual" />
    </div>
</template>
