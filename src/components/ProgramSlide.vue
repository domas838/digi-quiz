<script setup>
import { reactive } from 'vue'
import { store } from '../store'
import { format } from 'date-fns'
import { lt, lv } from 'date-fns/locale';

const props = defineProps([
    'picture',
    'icon',
    'isTopRecomendation',
    'subject',
    'subjectColor',
    'programTitle',
    'teacherImage',
    'teacherName',
    'lessonsCount',
    'index',
    'nextLesson',
    'programId',
    'liveClassroomsCount'
])

const activeMap = reactive({})

const toggleReadMore = (index) => {
    activeMap[index] = !activeMap[index]
}

const resolveNextLessonTime = () => {
  const localeMap = {
    LT: lt,
    LV: lv
  }

  const date = new Date(props.nextLesson?.published_at);
  return format(date, `PPPp`, {locale: localeMap[store.lang]});
}

const handleCardClick = () => {
  store.openProgramId = props.programId;
  history.pushState({}, "", '');
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
    <div @click="handleCardClick" class="slide-wrapper flex flex-wrap h-full cursor-pointer">
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
                :src="props.picture"
                alt=""
            />

            <div class="slide-subject" :class="props.subject" :style="{backgroundColor: props.subjectColor}">
                <h2 class="text-white font-bold text-[18px]">{{ props.subject }}</h2>
            </div>
        </div>
        <div class="slide-content">
            <div class="min-h-[60px]">
              <h2 class="line-clamp-2 text-left text-[20px] font-bold">{{ props.programTitle }}</h2>
            </div>
            <p v-if="props.nextLesson" class="mt-2">
              <span v-html="$t('NextLive')"></span>
              <span class="font-bold" :style="{color: props.subjectColor}">
                {{
                  resolveNextLessonTime()
                }}
              </span>
            </p>
            <div class="flex gap-1 items-center mt-3">
                <span
                    ><img class="teacher-image" :src="props.teacherImage" />
                </span>

                <span class="line-clamp-1 text-[14px]"> {{ props.teacherName }}</span>
            </div>
        </div>
        <div class="slide-summary">
          <div class="slide-summary-line">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.492188" y="0.189453" width="24" height="24" rx="12" fill="#F4F5F7"/>
              <path d="M17.4921 10.3535C17.4863 10.2983 17.4751 10.2441 17.4588 10.1915V10.1374C17.432 10.0757 17.3964 10.0191 17.3532 9.96942L14.0199 6.36942C13.974 6.32279 13.9215 6.28429 13.8643 6.25541C13.8478 6.2529 13.8309 6.2529 13.8143 6.25541C13.7579 6.22051 13.6956 6.19807 13.631 6.18945H11.3811C10.9391 6.18945 10.5152 6.37913 10.2026 6.71664C9.89001 7.05422 9.7144 7.51209 9.7144 7.98945V8.58945H9.15884C8.71684 8.58945 8.29296 8.77913 7.98038 9.11664C7.6678 9.45422 7.49219 9.91209 7.49219 10.3895V16.3895C7.49219 16.8669 7.66781 17.3247 7.98038 17.6622C8.29296 17.9999 8.71682 18.1895 9.15884 18.1895H13.6033C14.0453 18.1895 14.4692 17.9999 14.7818 17.6622C15.0944 17.3247 15.27 16.8669 15.27 16.3895V15.7895H15.8255C16.2675 15.7895 16.6915 15.5999 17.004 15.2622C17.3166 14.9247 17.4922 14.4668 17.4922 13.9895V10.3895V10.3535L17.4921 10.3535ZM14.1588 8.23546L15.5977 9.78946H14.7143C14.567 9.78946 14.4257 9.72626 14.3215 9.61368C14.2174 9.50118 14.1588 9.34858 14.1588 9.18946L14.1588 8.23546ZM14.1588 16.3895C14.1588 16.5487 14.1003 16.7012 13.9961 16.8138C13.8919 16.9263 13.7506 16.9895 13.6032 16.9895H9.15879C9.01146 16.9895 8.87016 16.9263 8.766 16.8138C8.66183 16.7012 8.60324 16.5487 8.60324 16.3895V10.3895C8.60324 10.2303 8.66183 10.0777 8.766 9.96524C8.87016 9.85265 9.01145 9.78946 9.15879 9.78946H9.71434V13.9895C9.71434 14.4668 9.88997 14.9247 10.2025 15.2622C10.5151 15.5999 10.939 15.7895 11.381 15.7895H14.1588L14.1588 16.3895ZM16.381 13.9895C16.381 14.1486 16.3224 14.3012 16.2182 14.4137C16.1141 14.5263 15.9728 14.5895 15.8254 14.5895H11.381C11.2337 14.5895 11.0924 14.5263 10.9882 14.4137C10.884 14.3012 10.8254 14.1486 10.8254 13.9895V7.98946C10.8254 7.83033 10.884 7.67774 10.9882 7.56524C11.0924 7.45265 11.2337 7.38946 11.381 7.38946H13.0477V9.18946C13.0477 9.66682 13.2233 10.1247 13.5359 10.4623C13.8484 10.7998 14.2723 10.9895 14.7143 10.9895H16.3811L16.381 13.9895Z" fill="black"/>
            </svg>

            <div class="title ml-2" v-if="Number(props.liveClassroomsCount) <= 1">{{ props.liveClassroomsCount }} {{ $t('LiveLessonsPerWeek') }}</div>
            <div class="title ml-2" v-if="Number(props.liveClassroomsCount) > 1">{{ props.liveClassroomsCount }} {{ $t('LiveLessonsPerWeekPlural') }}</div>
          </div>

          <div class="slide-summary-line">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.492188" y="0.189453" width="23.9991" height="23.9991" rx="11.9995" fill="#F4F5F7"/>
              <path d="M11.5746 9.89254C11.1944 9.62299 10.6875 9.91174 10.6875 10.3931V14.4171C10.6875 14.8984 11.1944 15.1872 11.5746 14.9177L14.4169 12.896C14.7609 12.6457 14.7609 12.1259 14.4169 11.8756L11.5746 9.89254Z" fill="black"/>
              <rect x="5.75623" y="6.78919" width="13.4661" height="10.7996" rx="1.79993" stroke="black" stroke-width="1.19995"/>
            </svg>
            <div class="title ml-2">{{ $t('TotalLessons') }}{{ props.lessonsCount }}</div>
          </div>

          <div class="slide-summary-line">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.492188" y="0.188477" width="23.9991" height="23.9991" rx="11.9995" fill="#F4F5F7"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3628 7.1696H16.1047V6.72715C16.1047 6.42301 15.8697 6.18799 15.5656 6.18799C15.2614 6.18799 15.0264 6.423 15.0264 6.72715V7.1696H9.96652V6.72715C9.96652 6.42301 9.73151 6.18799 9.42735 6.18799C9.12321 6.18799 8.88819 6.423 8.88819 6.72715V7.1696H7.63011C6.69007 7.1696 5.92969 7.92998 5.92969 8.87012V16.4876C5.92969 17.4276 6.69007 18.188 7.63011 18.188H17.3489C18.289 18.188 19.0493 17.4276 19.0493 16.4876L19.0494 8.87012C19.0632 7.92998 18.3029 7.1696 17.3628 7.1696H17.3628ZM7.63016 8.24793H17.349C17.6946 8.24793 17.9711 8.5244 17.9711 8.87002V9.32624H7.00802V8.87009C7.00802 8.52447 7.28449 8.2479 7.63011 8.2479L7.63016 8.24793ZM17.3628 17.1096H7.63016C7.28454 17.1096 7.00807 16.8331 7.00807 16.4875V10.4046H17.9849V16.4875C17.9849 16.8331 17.7085 17.1096 17.3628 17.1096H17.3628ZM9.84063 11.5938H8.59645C8.4029 11.5938 8.25083 11.7459 8.25083 11.9394V12.7689C8.25083 12.9625 8.4029 13.1146 8.59645 13.1146H9.84063C10.0342 13.1146 10.1862 12.9625 10.1862 12.7689V11.9394C10.1862 11.7458 10.0342 11.5938 9.84063 11.5938ZM11.8738 11.5938H13.118C13.3116 11.5938 13.4636 11.7458 13.4636 11.9394V12.7689C13.4636 12.9625 13.3116 13.1146 13.118 13.1146H11.8738C11.6803 13.1146 11.5282 12.9625 11.5282 12.7689V11.9394C11.5282 11.7459 11.6803 11.5938 11.8738 11.5938ZM16.3954 11.5938H15.1512C14.9577 11.5938 14.8056 11.7459 14.8056 11.9394V12.7689C14.8056 12.9625 14.9577 13.1146 15.1512 13.1146H16.3954C16.5889 13.1146 16.741 12.9625 16.741 12.7689V11.9394C16.741 11.7458 16.5889 11.5938 16.3954 11.5938ZM8.59645 14.4551H9.84063C10.0342 14.4551 10.1862 14.6072 10.1862 14.8007V15.6302C10.1862 15.8238 10.0342 15.9759 9.84063 15.9759H8.59645C8.4029 15.9759 8.25083 15.8238 8.25083 15.6302V14.8007C8.25083 14.6072 8.4029 14.4551 8.59645 14.4551ZM13.118 14.4551H11.8738C11.6803 14.4551 11.5282 14.6072 11.5282 14.8007V15.6302C11.5282 15.8238 11.6803 15.9759 11.8738 15.9759H13.118C13.3116 15.9759 13.4636 15.8238 13.4636 15.6302V14.8007C13.4636 14.6072 13.3116 14.4551 13.118 14.4551ZM15.1512 14.4551H16.3954C16.5889 14.4551 16.741 14.6072 16.741 14.8007V15.6302C16.741 15.8238 16.5889 15.9759 16.3954 15.9759H15.1512C14.9577 15.9759 14.8056 15.8238 14.8056 15.6302V14.8007C14.8056 14.6072 14.9577 14.4551 15.1512 14.4551Z" fill="black"/>
            </svg>

            <div class="title ml-2">{{ $t('NineMonthsProgram') }}</div>
          </div>

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
    font-size: 14px;
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
    padding: 15px 15px 0 15px;
    text-align: left;
    width: 100%;
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
.slide-summary-line .title {
    font-size: 14px;
    font-weight: 600;
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
