<script setup>
import { store } from '../store'

const acceptSecondBenefit = () => {
    store.showSecondBenefit = false
    store.step += 1
}

const benefits = [
    '<strong>Tiesioginės pamokų transliacijos</strong>',
    '<strong>Skiringi sudėtingumo lygiai,</strong> jog galėtum mokytis tau labiausiai tinkančiu tempu',
    '<strong>Išmaniossios mokymo technologijos</strong> ir gyvi pokalbiai',
    '<strong>Individualūs testai</strong> pamokų metu žinioms patikrinti',
    'Visų transliacijų <strong>įrašų archyvas</strong>'
]
</script>

<template>
    <div v-if="store.showSecondBenefit && store.step === 5">
        <div class="benefit-container">
            <h1 class="benefit-heading">Pamokos, kurių nesinorės pramiegoti</h1>
            <div class="benefit-row" v-for="(b, index) in benefits" v-bind:key="index">
                <div class="icon"><img src="../assets/images/Description.svg" alt="" /></div>
                <div class="content">
                    <p v-html="b"></p>
                </div>
            </div>
            <button @click="acceptSecondBenefit()" class="benefit-btn">
                Tęsti <img src="../assets/images/arrow-right.svg" alt="Next" />
            </button>
            <img src="../assets/images/Line.svg" alt="" class="line-behind-classroom" />

            <img src="../assets/images/classroom.svg" alt="" class="classroom-visual" />
        </div>
    </div>
</template>
