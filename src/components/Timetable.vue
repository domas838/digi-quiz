<script setup>
import {onMounted, reactive} from "vue";
import {store} from "../store";
import {BASE_APP_DOMAIN} from "../helpers";

const selectedPlanId = () => {
  let planID = 0;

  if (store.selectedSubjects.length === 1) {
    if (store.lang === 'LT') {
      planID = 1
    }
    if (store.lang === 'LV') {
      planID = 3
    }
  } else if (store.selectedSubjects.length === 2) {
    if (store.lang === 'LT') {
      planID = 5
    }
    if (store.lang === 'LV') {
      planID = 4
    }
  } else {
    if (store.lang === 'LT') {
      planID = 4
    }
    if (store.lang === 'LV') {
      planID = 6
    }
  }

  return planID;
}

const subjectsString = store.selectedSubjects.join('&subject[]=');

const timetable = reactive({
  type: 'filtered',
  src: `${BASE_APP_DOMAIN[store.lang]}/iframe/quiz?availableClassSlug=${store.selectedClass}&planId=${selectedPlanId()}&filtered=true`
});

const changeTimetable = (type) => {
  if (type === 'all') {
    timetable.type = 'all';
    timetable.src = `${BASE_APP_DOMAIN[store.lang]}/iframe/quiz?availableClassSlug=${store.selectedClass}&planId=${selectedPlanId()}&subject[]=${subjectsString}&filtered=false`;
  }

  if (type === 'filtered') {
    timetable.type = 'filtered';
    timetable.src = `${BASE_APP_DOMAIN[store.lang]}/iframe/quiz?availableClassSlug=${store.selectedClass}&planId=${selectedPlanId()}&filtered=true`;
  }
}

onMounted(() => {
  changeTimetable('filtered');
})

</script>

<template>
  <div class="wrapper light-grey pb-10" v-if="store.showRecomendations">
    <div class="container">
      <div class="mb-5 flex justify-between items-center gap-4 flex-wrap">
        <div>
          <h1 class="text-left mb-2">{{ $t('Timetable') }}</h1>
          <p class="text-[18px]">{{ $t('TimetableNote') }}</p>
        </div>
        <div class="rounded-full bg-white inline-flex">
          <div class="px-5 py-3 rounded-full cursor-pointer text-gray hover:opacity-50" :class="{'bg-blue font-bold text-white hover:opacity-100': timetable.type === 'filtered'}" @click="changeTimetable('filtered')">{{ $t('MyTimetable') }}</div>
          <div class="px-5 py-3 rounded-full cursor-pointer text-gray hover:opacity-50" :class="{'bg-blue font-bold text-white hover:opacity-100': timetable.type === 'all'}" @click="changeTimetable('all')">{{ $t('AllTimetable') }}</div>
        </div>
      </div>
      <iframe class="w-full min-h-[450px]" frameborder="0" :src="timetable.src"></iframe>
    </div>
  </div>
</template>
