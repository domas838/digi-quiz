<script setup>
import { reactive } from 'vue'
import { Collapse } from 'vue-collapsed'

import { store } from '../store'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import SectionCTA from '../components/SectionCTA.vue'

import { ref } from 'vue'
import { vElementVisibility } from '@vueuse/components'

const target = ref(null)
const isVisible = ref(false)

function onElementVisibility(state) {
    isVisible.value = state
}

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
const singleSlideSettings = {
    itemsToShow: 1,
    snapAlign: 'start'
}
const historiesCarousel = {
    itemsToShow: 1,
    snapAlign: 'start'
}
const testimSettings = {
    itemsToShow: 3.8,
    snapAlign: 'center'
}
const playVideoHandler = (event) => {
    event.target.style.display = 'none'
    document.getElementById('videoHow').play()
}
const isHidden = reactive({
    isHidden: true
})
const questions = reactive([
    {
        title: 'Kiek kainuoja „Digiklasės“ pamokos?',
        answer: 'Kiek kainuoja „Digiklasės“ pamokos?',
        isExpanded: false // Initial value
    },
    {
        title: 'Kas tie pasikartojantys mokėjimai?',
        answer: 'Kas tie pasikartojantys mokėjimai?',
        isExpanded: false
    },
    {
        title: 'Kaip prisijungti į „Digiklasę“?',
        answer: 'Kaip prisijungti į „Digiklasę“?',
        isExpanded: false
    },
    {
        title: 'Kaip prisijungti į „Digiklasę“?',
        answer: 'Kaip prisijungti į „Digiklasę“?',
        isExpanded: false
    },
    {
        title: 'Kaip prisijungti į „Digiklasę“?',
        answer: 'Kaip prisijungti į „Digiklasę“?',
        isExpanded: false
    },
    {
        title: 'Kaip prisijungti į „Digiklasę“?',
        answer: 'Kaip prisijungti į „Digiklasę“?',
        isExpanded: false
    }
])
const handleAccordion = (selectedIndex) => {
    questions.forEach((_, index) => {
        questions[index].isExpanded = index === selectedIndex ? !questions[index].isExpanded : false
    })
}
const showAllFaqs = (event) => {
    event.target.style.display = 'none'
    isHidden.isHidden = false
}
const getCurrentYear = () => {
    const dateobj = new Date()

    return dateobj.getFullYear()
}
</script>

<template>
    <header>
        <div class="content">
            <img class="logo" src="../assets/images/digiklase.svg" alt="" />
            <div>
                <a href="/" class="cta-btn"
                    >Įsigyti narystę<img src="../assets/images/arrow-right.svg" alt=""
                /></a>
            </div>
        </div>
    </header>
    <div class="wrapper yellow">
        <div class="container">
            <h1>Remiantis tavo atsakymais, rekomenduojame mokytis pagal šias programas:</h1>
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

            <carousel v-bind="settings" class="carousel">
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
            <div class="content--flex last-section-block">
                <div class="content--left">
                    <h2><span>Iki 2 balų geresni pažymiai,</span> vos per 2 mėnesius!</h2>
                    <p>
                        Tavo galimą rezultatą apskaičiavome remdamiesi
                        <strong>5 897</strong> panašių žmonių rezultatais
                    </p>
                    <a href="" class="cta-btn"
                        >Įsigyti narystę<img src="../assets/images/arrow-right.svg" alt=""
                    /></a>
                </div>
                <div class="content--right">
                    <img src="../assets/images/your-level.svg" class="level-image" alt="" />
                </div>
            </div>
        </div>
        <img src="../assets/images/bottomVector.svg" class="bottom-vector" alt="Vector" />
    </div>
    <div class="wrapper light">
        <div class="flex-container cards-wrapper">
            <div class="card card--left">
                <p>At least <span>2 hours</span>of group lessons</p>
            </div>
            <div class="card card--middle">
                <p>At least <span>1 hour</span>of watching other Mathsup learning material</p>
            </div>
            <div class="card card--right">
                <p><span>2 hours</span>of quizzes</p>
            </div>
        </div>
        <div class="container">
            <h2 class="section-title">
                Pagal tavo atsakymus <br />
                rekomenduojamas Digiklasės planas
            </h2>
        </div>
    </div>
    <div
        class="wrapper light before-sticky"
        :class="{ sticky: isVisible }"
        ref="target"
        v-element-visibility="onElementVisibility"
    >
        <div class="container">
            <div class="cta-card">
                <div class="header">
                    <p>Rekomenduojamas planas:</p>
                </div>
                <div class="content">
                    <div class="title">
                        <h3>„Visi mokykliniai dalykai ir visi būreliai“</h3>
                    </div>
                    <div class="price">
                        <p>Nuo</p>
                        <p><span>49,00 </span>€/mėn.</p>
                    </div>
                    <div class="action">
                        <a href="" class="cta-btn"
                            >Įsigyti narystę<img src="../assets/images/arrow-right.svg" alt=""
                        /></a>
                        <a href="/" class="cta-link">Žiūrėti visus planus</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="wrapper light">
        <div class="container pb0">
            <h2 class="section-title">Kaip tai veikia?</h2>
            <p>Šis vaizdo įrašas trumpai ir aiškiai papasakos, kaip veikia Digiklasė</p>
            <div class="video-wrapper">
                <div class="play-btn" @click="playVideoHandler">
                    <img src="../assets/images/play-btn.svg" alt="" />
                </div>
                <video id="videoHow" width="100%" height="100%" preload="none">
                    <source src="../assets/video/demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>

        <img class="blue-line-vector" src="../assets/images/blue-line-vector.svg" alt="" />
    </div>
    <div class="wrapper light">
        <div class="flex-container list-section">
            <div class="content--left">
                <img src="../assets/images/pupil.svg" alt="" />
            </div>
            <div class="content--right list-content">
                <h3>Group tutoring for different skill levels:</h3>
                <ul>
                    <li>Mathematics and Maths Literacy</li>
                    <li>2-3 classes/week, max 15 students/group</li>
                    <li>CAPS or IEB programmes</li>
                    <li>Ask questions, get immediate help</li>
                    <li>Weekly progress reports for both learners and parents</li>
                    <li>Works on all devices</li>
                </ul>
                <div class="d-flex y-center">
                    <a href="" class="cta-btn"
                        >Įsigyti narystę<img src="../assets/images/arrow-right.svg" alt=""
                    /></a>
                    <a href="/" class="cta-link">Žiūrėti visus planus</a>
                </div>
                <div class="testimonial">
                    <div class="author">
                        <img src="../assets/images/testimonial-author.svg" alt="" />
                    </div>
                    <div class="text">
                        <p>
                            “I never thought online maths lessons could be so interesting and fun!”
                        </p>
                        <p><strong>Lethabo, Grade 10</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="wrapper yellow">
        <img class="blue-vector-left-top" src="../assets/images/blue-line-left.svg" alt="" />
        <div class="container container--narrow teachers">
            <h2 class="section-title">Susipažink, tavo būsimi mokytojai:</h2>
            <carousel v-bind="singleSlideSettings" class="teacher-carousel">
                <slide v-for="teacher in fakeArr" :key="teacher">
                    <img src="../assets/images/teacher-slide.svg" alt="" />
                </slide>
                <template #addons>
                    <navigation />
                    <pagination />
                </template>
            </carousel>
            <SectionCTA />
        </div>
    </div>
    <div class="wrapper light-grey">
        <div class="container container--narrow">
            <div class="review">
                <div class="image">
                    <img src="../assets/images/reviewer.svg" alt="" />
                </div>
                <div class="content">
                    <p>
                        “I can't believe I didn't find out about MathsUp sooner. Ever since I
                        started learning with MathsUp, my grades have been steadily improving. The
                        lessons are top-notch, with outstanding teachers guiding us through each
                        session. Plus, I've managed to save a considerable amount of money. I
                        wholeheartedly recommend MathsUp to all students out there!”
                    </p>
                    <p><strong>Adisa, student (+23% improvement in maths)</strong></p>
                </div>
            </div>
        </div>
    </div>
    <div class="wrapper dark">
        <img src="../assets/images/oval-vector.svg" class="oval-vector" alt="" />
        <img src="../assets/images/vector-arrow.svg" class="vector-arrow" alt="" />
        <div class="container pb">
            <h2 class="section-title">Į narystę telpa tiek daug!</h2>
        </div>
        <div class="flex-container container--narrow">
            <div class="membership-card">
                <div class="membership-icon">
                    <img src="../assets/images/emoji/icon-play.svg" alt="" />
                </div>
                <div class="membership-content">
                    <h3>Individualus mokymosi planas</h3>
                </div>
            </div>
            <div class="membership-card">
                <div class="membership-icon">
                    <img src="../assets/images/emoji/icon-book.svg" alt="" />
                </div>
                <div class="membership-content">
                    <h3>Namų darbų pagalba</h3>
                </div>
            </div>
            <div class="membership-card">
                <div class="membership-icon">
                    <img src="../assets/images/emoji/icon-video.svg" alt="" />
                </div>
                <div class="membership-content">
                    <h3>Pamokų įrašai</h3>
                </div>
            </div>
            <div class="membership-card">
                <div class="membership-icon">
                    <img src="../assets/images/emoji/icon-stats.svg" alt="" />
                </div>
                <div class="membership-content">
                    <h3>Lankomumo peržiūra</h3>
                </div>
            </div>
            <div class="membership-card">
                <div class="membership-icon">
                    <img src="../assets/images/emoji/icon-prize.svg" alt="" />
                </div>
                <div class="membership-content">
                    <h3>Taškai ir apdovanojimai</h3>
                </div>
            </div>
            <div class="membership-card">
                <div class="membership-icon">
                    <img src="../assets/images/emoji/icon-hands.svg" alt="" />
                </div>
                <div class="membership-content">
                    <h3>Motyvuojanti bendruomenė</h3>
                </div>
            </div>
        </div>
        <div class="container container--narrow histories-carousel">
            <carousel v-bind="historiesCarousel">
                <slide v-for="item in fakeArr" :key="item">
                    <img src="../assets/images/karina.png" alt="" />
                </slide>
                <template #addons>
                    <navigation>
                        <template #next>
                            <img src="../assets/images/next-carousel.svg" alt="" />
                        </template>
                        <template #prev>
                            <img src="../assets/images/prev-carousel.svg" alt="" />
                        </template>
                    </navigation>
                </template>
            </carousel>
        </div>
        <div class="container container--narrow">
            <h2 class="section-title">
                <span>Net 98% mokinių sako,</span> kad „Digiklasė“ – veiksmingas būdas efektyviai
                pagerinti akademinius rezultatus.
            </h2>
        </div>
    </div>
    <div class="wrapper dark inner">
        <carousel
            v-bind="testimSettings"
            :wrapAround="true"
            :transition="500"
            class="testimonials-carousel"
        >
            <slide v-for="review in fakeArr" :key="review">
                <img src="../assets/images/review-card.png" alt="" />
            </slide>
            <template #addons>
                <pagination />
            </template>
        </carousel>
    </div>
    <div class="wrapper dark inner">
        <div class="container container--narrow pb">
            <SectionCTA />
        </div>
    </div>
    <div class="wrapper light pt page-bottom">
        <div class="container container--narrow">
            <h2 class="section-title">
                Atsakymai į <span>Dažniausiai <br />Užduodamus Klausimus (D.U.K.)</span>
            </h2>
            <div
                v-for="(question, index) in questions"
                :key="question.title"
                class="faq-accordion"
                :class="{ hidden: index >= 3 && isHidden.isHidden }"
            >
                <button @click="() => handleAccordion(index)" class="faq-header">
                    <div>
                        <p>{{ question.title }}</p>
                    </div>
                    <div>
                        <img src="../assets/images/arrow-bottom.svg" alt="V" />
                    </div>
                </button>
                <Collapse :when="questions[index].isExpanded" class="collapse">
                    <div class="faq-body">
                        <p>
                            {{ question.answer }}
                        </p>
                    </div>
                </Collapse>
            </div>
            <button class="btn--secondary" @click="showAllFaqs">Žiūrėti visus</button>
            <h2 class="section-title last-section">
                Prisijunk prie daugiau nei <span>10 000 bendraminčių</span> bendruomenės!
            </h2>
            <div class="pb">
                <SectionCTA />
            </div>
        </div>
        <img src="../assets/images/elipses.svg" class="footer-elipses" alt="" />
    </div>
    <footer>
        <div class="container d-flex">
            <div>
                <p>© {{ getCurrentYear() }} Digiklasė. Visos teisės saugomos</p>
            </div>
            <div>
                <a
                    href="https://digiklase.lt/privatumo-politika"
                    target="_blank"
                    class="footer-link"
                    >Privatumo politika</a
                >
                <a href="https://digiklase.lt/slapukai" target="_blank" class="footer-link"
                    >Slapukų politika</a
                >
            </div>
        </div>
    </footer>
</template>

<style scoped>
header {
    padding: 0 5%;
    height: 65px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 74px;
}
header .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
}
header .logo {
    display: block;
    max-width: 185px;
}
@media (max-width: 576px) {
    header .logo {
        max-width: 125px;
        width: 50%;
    }
    header .content > div {
        width: 50%;
    }
    header .cta-btn {
        white-space: nowrap;
        font-size: 12px;
    }
    header .cta-btn img {
        width: 16px;
    }
}
.carousel {
    margin-bottom: 125px;
}

.wrapper.pt {
    padding-top: 125px;
}
.wrapper.light {
    background-color: #ffffff;
    position: relative;
    padding-bottom: 10px;
}
.wrapper.yellow {
    position: relative;
}
.wrapper.light-grey {
    position: relative;
    background-color: #eeeff4;
}
.wrapper.dark {
    position: relative;
    background-color: #18191f;
    padding-top: 125px;
}
.wrapper.dark.inner {
    padding-top: 0;
}
.wrapper.dark.inner .carousel {
    margin-bottom: 0;
}
.wrapper.dark .section-title {
    color: #ffffff;
}
.section-title span {
    color: #4a74eb;
}
.flex-container {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 90%;
    max-width: 1200px;
    padding-bottom: 50px;
    z-index: 10;
}
.container--narrow {
    width: 90%;
    padding: 0;
}
@media (min-width: 992px) {
    .container--narrow {
        width: 65%;
    }
}
.section-title {
    font-size: 42px;
    font-style: normal;
    font-weight: 570;
    line-height: 56px; /* 133.333% */
    z-index: 10;
    position: relative;
}
.section-title + p {
    text-align: center;
    margin-top: 16px;
}
.blue-line-vector {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
}
.vector-arrow {
    position: absolute;
    left: 0;
    top: 215px;
}
.oval-vector {
    position: absolute;
    top: 120px;
    right: 0;
}
.footer-elipses {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    z-index: 1;
}
.video-wrapper {
    position: relative;
    border-radius: 24px;
    box-shadow: 0px 28px 76px 0px rgba(39, 52, 80, 0.12);
    overflow: hidden;
    min-height: 550px;
    margin-top: 50px;
    background-image: url(../assets/images/poster.png);
    background-position: center;
    z-index: 5;
}
video {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    /* transform: translate(-50%, -50%); */
    z-index: 10;
    min-width: 100% !important;

    height: 550px !important;
    object-fit: cover;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
}

.play-btn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    border-radius: 50%;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
}
.btn--secondary {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    color: #000000;
    border-radius: 56px;
    background-color: transparent;
    border: 1px solid #000;
    padding: 12px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 70px auto 0 auto;
}
.last-section {
    margin-top: 180px;
}
.card {
    width: 100%;
    margin-bottom: 32px;
    border-radius: 12px;
    border: 0.481px solid #d9dbe1;
    box-shadow: 0px 4.809886455535889px 9.619772911071777px 0px rgba(41, 41, 42, 0.07);
    padding: 45px;
    text-align: center;
    transform: translateY(-120px);
}

.card--left {
    background-color: #ffffff;
}
.card--left span {
    color: #ff714b;
}
.card--middle {
    background-color: #f4e140;
}
.card--right {
    background-color: #ff714b;
}
.card.card--right p {
    color: #f4e140;
    display: block;
    margin-top: 26px;
}
.card p {
    font-size: 16px;
    font-style: normal;
    font-weight: 550;
    line-height: 20px;
    margin: 0;
}
.card p span {
    display: block;
    font-size: 45px;
    font-style: normal;
    font-weight: 570;
    line-height: 50px;
    margin: 8px 0 16px 0;
}
.card:last-child {
    margin-right: 0;
}
@media screen and (max-width: 992px) {
    .cards-wrapper {
        margin-bottom: -100px;
    }
}
@media screen and (min-width: 992px) {
    .cards-wrapper .card {
        width: calc(33.3333% - 32px);
        margin-right: 32px;
        margin-bottom: 0;
    }
}
@media (min-width: 1440px) {
    .before-sticky .cta-card {
        transform: translateY(250px);
    }
    .before-sticky.sticky .cta-card {
        transform: translateY(0);
    }
    .sticky .cta-card {
        transition: 1s ease-in-out;
    }
    .sticky {
        position: fixed !important;
        bottom: 50px;
        z-index: 100;
        margin-bottom: 0;
        margin: 0 auto;
        width: 100%;
        background-color: transparent !important;
        padding-bottom: 0;
    }
    .sticky .container {
        padding-bottom: 0;
        width: 100%;
    }
    .page-bottom {
        padding-bottom: 150px !important;
    }
}

.cta-card {
    border-radius: 12px;
    background: #fff;
    box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.1);
    padding: 28px 36px;
    z-index: 10;
    position: relative;
}
.cta-card .title {
    width: 40%;
}
.cta-card .price,
.cta-card .action {
    width: 30%;
}
.cta-card .action {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.cta-card .action .cta-btn {
    margin-bottom: 16px;
}
.cta-card .content {
    display: flex;
    flex-wrap: wrap;
}
.cta-card p {
    font-size: 20px;
    line-height: 30px;
}
.cta-card h3 {
    font-size: 32px;
    font-style: normal;
    font-weight: 570;
    line-height: 42px;
}
.cta-card p span {
    font-size: 50px;
    font-weight: 570;
    line-height: 38px;
}
@media screen and (max-width: 1200px) {
    .cta-card .title {
        width: 60%;
        padding-right: 48px;
    }
    .cta-card .price {
        width: 40%;
    }
    .cta-card .action {
        width: 100%;
        flex-direction: row;
        margin-top: 48px;
    }
    .cta-card .action .cta-btn {
        margin-bottom: 0;
        margin-right: 32px;
    }
}
@media screen and (max-width: 768px) {
    .cta-card .title {
        width: 100%;
        padding-right: 0;
        margin-bottom: 48px;
    }
    .cta-card .price {
        width: 100%;
    }
    .cta-card .action {
        width: 100%;
        align-items: center;
    }
    .cta-card .action .cta-btn {
        margin-right: 32px;
    }
}
@media screen and (max-width: 576px) {
    .cta-card .action {
        flex-direction: column;
        align-items: flex-start;
    }
    .cta-card .action .cta-btn {
        margin-right: 0;
        margin-bottom: 32px;
    }
}
.list-section {
    padding-top: 100px;
}
.last-section-block {
    margin-bottom: 150px;
    align-items: center;
}
@media screen and (max-width: 1024px) {
    .last-section-block {
        padding-bottom: 150px;
        margin-bottom: 0;
    }
}
.content--flex {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.content--left {
    width: 100%;
    text-align: left;
    margin-bottom: 48px;
}
.content--left img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
}
.content--left h2 {
    text-align: left;
    font-size: 42px;
    font-style: normal;
    font-weight: 570;
    line-height: 56px;
    margin-bottom: 20px;
}
.content--left h2 span {
    color: #4a74eb;
}
.content--left p {
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
}
.content--left p strong {
    font-weight: 570;
}
.content--right {
    width: 100%;
}
@media screen and (min-width: 768px) {
    .content--left {
        width: 50%;
        padding-right: 24px;
        margin-bottom: 0;
    }
    .content--right {
        width: 50%;
    }
}
@media screen and (max-width: 992px) {
    .d-flex.y-center {
        flex-direction: column;
        align-items: flex-start;
    }
    .d-flex.y-center .cta-link {
        margin-top: 16px;
    }
}
ul {
    list-style: none;
    margin-top: 30px;
}
ul li {
    padding-left: 48px;
    position: relative;
    height: 50px;
}
ul li::before {
    content: url(../assets/images/tick.svg);
    position: absolute;
    left: 0;
}
.testimonial {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    border-radius: 12px;
    background: rgba(74, 116, 235, 0.1);
    margin-top: 30px;
    margin-bottom: 100px;
}
.testimonial .author {
    margin-right: 20px;
    border-radius: 50%;
    overflow: hidden;
    width: 55px;
}
.testimonial .author img {
    display: block;
    width: 100%;
}
.testimonial .text p {
    font-size: 16px;
    font-style: normal;
    font-weight: 550;
    line-height: 22px;
}
.testimonial .text p span {
    font-size: 17px;
    font-style: normal;
    font-weight: 570;
    line-height: 28px;
}
.testimonials-carousel {
    padding-top: 100px;
}
.testimonials-carousel .carousel__viewport {
    overflow: visible;
}
.testimonials-carousel .carousel__slide {
    padding: 16px;
}

.testimonials-carousel .carousel__viewport {
    perspective: 2000px;
}
.testimonials-carousel .carousel__track {
    transform-style: preserve-3d;
}

.testimonials-carousel .carousel__slide--sliding {
    transition: 0.5s;
}

.testimonials-carousel .carousel__slide {
    opacity: 0.6;
    transform: scale(0.9);
}

.testimonials-carousel .carousel__slide--active ~ .carousel__slide {
    transform: scale(0.9);
}

.testimonials-carousel .carousel__slide--prev {
    opacity: 0.6;
    transform: scale(0.95);
}

.testimonials-carousel .carousel__slide--next {
    opacity: 0/6;
    transform: scale(0.95);
}

.testimonials-carousel .carousel__slide--active {
    opacity: 1;
    transform: scale(1.1);
}
@media screen and (max-width: 768px) {
    .testimonial {
        margin-bottom: 0;
    }
}
.review {
    display: flex;
    align-items: center;
    margin: auto;
    padding: 100px 0;
}
.review .image {
    margin-right: 20px;
}
@media screen and (max-width: 576px) {
    .review {
        flex-direction: column;
    }
    .review .image {
        margin-bottom: 32px;
    }
}
.level-image {
    display: block;
    width: 100%;
}
.teachers {
    margin-top: 125px;
    padding-bottom: 150px;
}
.teacher-carousel {
    margin: 50px auto 50px auto;
}
@media screen and (max-width: 768px) {
    .teachers {
        margin-top: 100px;
        padding-bottom: 100px;
    }
}
.membership-card {
    display: flex;
    align-items: center;
    border-radius: 12px;
    border: 2px solid #f4e140;
    background: #fff;
    /* Dark Shadow */
    box-shadow: 0px 10px 20px 0px rgba(41, 41, 42, 0.07);
    min-height: 80px;
    margin-bottom: 12px;
    width: 100%;
    padding: 10px 20px;
    position: relative;
    z-index: 10;
}

.membership-icon {
    margin-right: 16px;
    min-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.membership-content {
    min-height: 60px;
    display: flex;
    align-items: center;
}
.membership-content h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 570;
    line-height: 20px;
}
@media screen and (min-width: 768px) {
    .membership-card {
        width: calc(50% - 36px);
        margin: 0 18px 12px 18px;
    }
}
.faq-accordion:first-of-type {
    margin-top: 80px;
}
.faq-accordion {
    border-bottom: 2px solid #eeeff4;
}
.faq-accordion.hidden {
    display: none;
}
.faq-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    min-height: 70px;
}
.faq-header p {
    font-family: 'obviously', sans-serif;

    font-size: 18px;
    font-weight: 570;
    line-height: 30px;
}
.faq-body {
    padding-bottom: 32px !important;
}
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
    text-align: left;
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
.bottom-vector {
    position: absolute;
}
.blue-vector-left-top {
    position: absolute;
    left: 0;
    top: 55px;
}
.d-flex {
    display: flex;
    position: relative;
    z-index: 10;
}
.justify-center {
    justify-content: center;
    align-items: center;
}

.y-center {
    align-items: center;
}
.collapse {
    transition: height 600ms cubic-bezier(0.3, 0, 0.6, 1);
}
footer {
    height: 100px;
    background-color: #000000;
    display: flex;
    align-items: center;
}
footer .container {
    padding-bottom: 0;
    display: flex;
    justify-content: space-between;
}
footer p,
footer a {
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
    text-decoration: none;
}
footer a:hover {
    text-decoration: underline;
}
.footer-link:first-child {
    margin-right: 60px;
}
.pb {
    padding-bottom: 100px;
}
.pb0 {
    padding-bottom: 0;
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
