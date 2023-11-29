<script setup>
import { store } from '../store'
import { changeUrlPath } from "../helpers";

const acceptSecondBenefit = () => {
    store.showSecondBenefit = false
    store.step += 1
    changeUrlPath('/' + store.respondent + '/' + store.step)
}

const benefits = [
    '<strong>Tiesioginės pamokų transliacijos</strong>',
    '<strong>Skiringi sudėtingumo lygiai,</strong> jog galėtum mokytis tau labiausiai tinkančiu tempu',
    '<strong>Išmaniosios mokymo technologijos</strong> ir gyvi pokalbiai',
    '<strong>Individualūs testai</strong> pamokų metu žinioms patikrinti',
    'Visų transliacijų <strong>įrašų archyvas</strong>'
]
const benefitsLV = [
    '<strong>Nodarbības notiek tiešraidē</strong>',
    '<strong>Dažādu līmeņu grūtības pakāpes, lai vari mācīties savā tempā</strong>',
    '<strong>Gudras, iesaistošas tehnoloģijas un tiešsaistes čati</strong>',
    '<strong>Individuāli testi nodarbības laikā, lai pārbaudītu zināšanas</strong>',
    '<strong>Ierakstu pieeja visām iepriekšējām nodarbībām</strong>'
]

const benefitsEN = [
    '<strong>Highly qualified teachers, </strong>including graduates of top world universities',
    '<strong>Inspiring personalities</strong> who can not only tell stories inventively, but also spark interesting discussions',
    'If some educational subjects are still difficult to understand, Mathups team is always ready to <strong>give you extra help after the lesson!</strong>'
]

</script>

<template>
  <div class="container yellow">
        <div class="benefit-container">
            <h1 class="benefit-heading">
                {{ $t('BenefitPageH1') }}
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
            <div v-if="store.lang === 'EN'">
              <div class="benefit-row" v-for="(b, index) in benefitsEN" v-bind:key="index">
                <div class="icon">
                  <img class="min-w-[30px]" src="../assets/images/Description.svg" alt="" />
                </div>
                <div class="content">
                  <p v-html="b"></p>
                </div>
              </div>
            </div>
            <button @click="acceptSecondBenefit()" class="benefit-btn">
                {{ $t('Continue') }}
                <img src="../assets/images/arrow-right.svg" alt="Next" />
            </button>

            <img v-if="store.lang === 'LT'" src="../assets/images/classroom.png" alt="" class="classroom-visual" />
            <img v-if="store.lang === 'LV'" src="../assets/images/classroom-lv.png" alt="" class="classroom-visual" />
            <img v-if="store.lang === 'EN'" src="../assets/images/teacher 1.png" alt="" class="classroom-visual" />
        </div>
    </div>
</template>
