<script setup>
import { store } from '../store'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

const fakeArr = [0, 1, 2, 3, 4, 5, 6, 7]
const settings = {
    itemsToShow: 4,
    snapAlign: 'start',
    breakpoints: {
        0: {
            itemsToShow: 1
        },
        // 700px and up
        700: {
            itemsToShow: 2
        },
        // 1024 and up
        1024: {
            itemsToShow: 4
        }
    }
}
</script>

<template>
    <h1>Remiantis apklausa, rekomenduojame mokytis pagal šias programas:</h1>
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

    <carousel v-bind="settings">
        <slide v-for="slide in fakeArr" :key="slide"
            ><div class="slide-header">
                <img src="../assets/images/slider-header.jpg" alt="" />
                <div class="slide-content">
                    <h3>Metinis VBE uždavinių pasiruošimas</h3>
                    <h4>Teacher <span>Vardas Pavardė</span></h4>
                </div>
                <div class="slide-separator"></div>
                <div class="slide-summary">
                    <div class="slide-summary-line">
                        <div class="icon">
                            <img src="../assets/images/icon-lessons.svg" alt="" />
                        </div>
                        <div class="title">82 lessons in total</div>
                    </div>
                    <div class="slide-summary-line">
                        <div class="icon">
                            <img src="../assets/images/icon-live-lessons.svg" alt="" />
                        </div>
                        <div class="title">With LIVE lessons</div>
                    </div>
                    <div class="slide-summary-line">
                        <div class="icon">
                            <img src="../assets/images/icon-tests.svg" alt="" />
                        </div>
                        <div class="title">Tests inside</div>
                    </div>
                </div>
            </div>
        </slide>

        <template #addons>
            <navigation />
        </template>
    </carousel>
</template>

<style scoped>
.slide-header {
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
    overflow: hidden;
}
.slide-header img {
    width: 100%;
    display: block;
}
.slide-content {
    background-color: #ffffff;
    padding: 15px;
}
.slide-summary {
    background-color: #ffffff;
    padding: 15px;
    border-bottom-left-radius: 11px;
    border-bottom-right-radius: 11px;
}
.slide-separator {
    height: 1px;
    max-width: 90%;
    display: block;
    margin: 0 auto;
    background-color: #f0f0f0;
}
.slide-summary-line {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
.slide-summary-line .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    padding: 6px;
    background-color: #f0f0f0;
    border-radius: 50%;
    margin-right: 10px;
}
h3 {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 137.5% */
}
h4 {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    margin: 16px 0;
}
h4 span {
    font-weight: 700;
}
h5 {
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 133.333% */
}
@media (min-width: 992px) {
    h1 {
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 70%;
    }
}
</style>
