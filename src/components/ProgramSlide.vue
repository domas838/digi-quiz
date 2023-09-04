<script setup>
import { reactive } from 'vue'
import { store } from '../store'
const props = defineProps([
    'picture',
    'isTopRecomendation',
    'subject',
    'programTitle',
    'teacherImage',
    'teacherName',
    'description',
    'lessonsCount',
    'index'
])

const activeMap = reactive({})

const toggleReadMore = (index) => {
    activeMap[index] = !activeMap[index]
}

</script>

<template>
    <div class="read-more-modal" :class="{ open: !!activeMap[index] }">
        <button @click="() => toggleReadMore(props.index)">
            <img src="../assets/images/close-x.svg" alt="X" />
        </button>
        <h3>{{ props.programTitle }}</h3>
        <p>{{ props.description }}</p>
    </div>
    <div class="slide-wrapper">
        <div class="slide-header">
            <div class="slide-badge top-result" v-if="isTopRecomendation">
                <p v-if="store.lang === 'LT'">⭐️ Labiausiai tinkanti programa</p>
                <p v-if="store.lang === 'LV'">⭐️ Visatbilstošākā programma</p>
            </div>
            <div class="slide-badge recommend-result" v-if="!isTopRecomendation">
                <p v-if="store.lang === 'LT'">📌 Tau taip pat gali patikti</p>
                <p v-if="store.lang === 'LV'">📌 Šis Tev arī varētu noderēt</p>
            </div>
            <img
                v-if="props.picture"
                class="background"
                :src="'/programImages/' + props.picture"
                alt=""
            />

            <div class="slide-subject" :class="props.subject">
                <img
                    src="../assets/images/emoji/Q4_matematika.svg"
                    alt=""
                    class="emoji"
                    v-if="props.subject === 'Matematika'"
                />
                <img
                    src="../assets/images/emoji/Q4_lietuviu.svg"
                    alt=""
                    class="emoji"
                    v-if="props.subject === 'Lietuvių kalba'"
                />
                <img
                    src="../assets/images/emoji/Q4_biologija.svg"
                    alt=""
                    class="emoji"
                    v-if="props.subject === 'Biologija'"
                />
                <img
                    src="../assets/images/emoji/Q4_fizika.svg"
                    alt=""
                    class="emoji"
                    v-if="props.subject === 'Fizika'"
                />
                <img
                    src="../assets/images/emoji/Q4_chemija.svg"
                    alt=""
                    class="emoji"
                    v-if="props.subject === 'Chemija'"
                />
                <img
                    src="../assets/images/emoji/Q4_istorija.svg"
                    alt=""
                    class="emoji"
                    v-if="props.subject === 'Istorija'"
                />
                <img
                    src="../assets/images/emoji/Q4_anglu.svg"
                    alt=""
                    class="emoji"
                    v-if="props.subject === 'Anglų kalba'"
                />
                <img
                    src="../assets/images/emoji/Q4_geografija.svg"
                    class="emoji"
                    alt=""
                    v-if="props.subject === 'Geografija'"
                />
                <img
                    src="../assets/images/emoji/Q4_pazinimas.svg"
                    class="emoji"
                    alt=""
                    v-if="props.subject === 'Pasaulio pažinimas'"
                />
                <img
                    src="../assets/images/emoji/Q4_gamta.svg"
                    class="emoji"
                    alt=""
                    v-if="props.subject === 'Gamta ir žmogus'"
                />
                <img
                    src="../assets/images/emoji/Q4_idomusis.svg"
                    class="emoji"
                    alt=""
                    v-if="props.subject === 'Įdomusis mokslas'"
                />
                <span>{{ props.subject }}</span>
            </div>
        </div>
        <div class="slide-content">
            <h3>{{ props.programTitle }}</h3>
            <h4>
                <span
                    ><img class="teacher-image" :src="'/teacherPortraits/' + props.teacherImage" />
                </span>

                <span> {{ props.teacherName }}</span>
            </h4>
            <p>
                {{ props.description.substr(0, 60) }}...
                <a href="javascript:void(0)" @click="() => toggleReadMore(props.index)">
                    {{ $t('ReadMore') }}
                </a>
            </p>
        </div>
        <div class="slide-separator"></div>
        <div class="slide-summary">
            <!-- <div class="slide-summary-line">
                <div class="icon">
                    <img src="../assets/images/icon-lessons.svg" alt="" />
                </div>
                <div class="title">{{ props.lessonsCount }} lessons in total</div>
            </div> -->
            <div class="slide-summary-line">
                <div class="icon">
                    <img src="../assets/images/icon-live-lessons.svg" alt="" />
                </div>
                <div class="title" v-if="Number(props.lessonsCount) === 1">{{ props.lessonsCount }} {{ $t('LiveLessonsPerWeek') }}</div>
                <div class="title" v-if="Number(props.lessonsCount) > 1">{{ props.lessonsCount }} {{ $t('LiveLessonsPerWeekPlural') }}</div>
            </div>
            <!-- <div class="slide-summary-line">
                <div class="icon">
                    <img src="../assets/images/icon-tests.svg" alt="" />
                </div>
                <div class="title">Tests inside</div>
            </div> -->
        </div>
    </div>
</template>

<style scoped>
.slide-wrapper {
    flex-direction: column;
    width: 100%;
}
.slide-header {
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
    overflow: hidden;
    position: relative;
    min-height: 110px;
    width: 100%;
}
.slide-badge {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 28px;
    z-index: 10;
}
.slide-badge p {
    font-size: 11px;
    font-weight: 500;
    line-height: 20px;
}
.slide-badge.top-result {
    background-color: #4a74eb;
}
.slide-badge.top-result p {
    color: #fff;
}
.slide-badge.recommend-result {
    background-color: #f4e140;
}
.slide-badge.recommend-result p {
    color: #000;
}
.slide-header .background {
    width: 100%;
    display: block;
    position: absolute;
    min-height: 70px;
    height: 100%;
    object-position: center;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
}
.slide-subject {
    min-height: 30px;
    bottom: 10px;
    left: 10px;
    position: absolute;
    border-radius: 5px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
}
.slide-subject span {
    color: #fff;
    font-weight: 600x;
}
.slide-subject img {
    width: 12px;
    display: block;
    height: auto;
    margin-right: 5px;
}
.slide-subject.Matematika {
    background-color: #00a886;
}
.slide-subject.Fizika {
    background-color: #7817df;
}
.slide-subject.Chemija {
    background-color: #dc0078;
}
.slide-subject.Geografija {
    background-color: #ff4e4e;
}
.slide-subject.Istorija {
    background-color: #a86311;
}
.slide-subject.Biologija {
    background-color: #0896db;
}
.slide-subject.Anglų {
    background-color: #43a93b;
}
.slide-subject.Lietuvių {
    background-color: #d85252;
}
.slide-subject.Pasaulio {
    background-color: #0059a7;
}
.slide-subject.Gamta {
    background-color: #667f00;
}
.slide-subject.Įdomusis {
    background-color: #ec6b00;
}
.slide-content {
    background-color: #ffffff;
    padding: 15px;
    text-align: left;
    width: 100%;
}
.slide-content p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #6b6b6b;
}
.slide-content p a {
    text-decoration: underline;
    color: #6b6b6b;
}
.teacher-image {
    border-radius: 50%;
    height: 32px;
    width: 32px;
    margin-right: 10px;
    object-fit: cover;
    object-position: center;
}
.slide-summary {
    background-color: #ffffff;
    padding: 15px;
    border-bottom-left-radius: 11px;
    border-bottom-right-radius: 11px;
    width: 100%;
}
.slide-separator {
    height: 1px;
    width: 100%;
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
    display: flex;
    align-items: center;
    white-space: break-spaces;
}
h4 span {
    font-weight: 700;
}
.read-more-modal {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: tomato;
    width: 95%;
    height: 97%;

    z-index: 20;
    background-color: #fff;
    padding: 40px;
    text-align: left;
    border-radius: 12px;
    overflow-y: auto;
    display: none;
    box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.08);
}
.read-more-modal button {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: transparent;
    border: none;
    outline: none;
    width: 32px;
    height: 32px;
    padding: 0;
    margin: 0;
    cursor: pointer;
}
.read-more-modal h3 {
    margin-bottom: 22px;
}
.read-more-modal p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
}

.read-more-modal .close {
    text-align: right;
    cursor: pointer;
}
.read-more-modal.open {
    display: block;
}
</style>
