<script setup>
import { store } from '../store'
import axios from "axios";
import {onMounted, reactive} from "vue";
import {BASE_APP_DOMAIN, pluck, SUBJECTS} from "../helpers"
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import ProgramSlide from './ProgramSlide.vue'

const settings = {
  itemsToShow: 3,
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
      itemsToShow: 3
    }
  }
}

const url = new URL(window.location.href)

// const token = 'a29826cb-670e-4b25-9669-35f67b2e3e3b'

// const table = reactive({
//   ID: 'grid-8XN2uCh13U' // LT
// })
//
// if (store.lang === 'LV') {
//   table.ID = 'grid-I_8YD1oJ_N' // LV
// }

// const instance = axios.create({
//   baseURL: `https://coda.io/apis/v1/docs/otYeYWMX9e/tables/${table.ID}/`,
//   headers: { Authorization: 'Bearer ' + token }
// });

const mutateProgramsFromResponse = (response) => {
  //let programs = pluck(response.data.items, 'values');
  let programs = response.data;
  const subjectsString = url.searchParams.get('subjects');
  const subjectsArray = JSON.parse(subjectsString);

  //FILTERING
  programs = programs.filter(program => {
    // console.log('class', program.course_subject[0].pivot.class === url.searchParams.get('class'));
    //const gradeCondition = program.Grade === parseInt(url.searchParams.get('class'));
    const gradeCondition = program.course_subject[0].pivot.class === url.searchParams.get('class');
    // const personaCondition = program.Persona === url.searchParams.get('persona') || program.Persona === 'Everyone';
    const personaCondition = program.persona === url.searchParams.get('persona') || program.persona === 'Everyone';

    // const subjectsCondition = subjectsArray.includes(program.Subject) || subjectsArray.length < 1;
    const subjectsCondition = subjectsArray.includes(program.course_subject[0].name) || subjectsArray.length < 1;

    return gradeCondition && personaCondition && subjectsCondition;
  });

  //FILTER BY TIERS
  const myTier = parseInt(url.searchParams.get('tier'));
  const filteredByTier = [];

  if (subjectsArray.length > 0) {
    subjectsArray.forEach((subject) => {
      let filtered = programs.filter(program => {
        // return program.Tier <= myTier && program.Subject === subject;
        return program.tier <= myTier; //&& program.course_subject[0].name === subject;
      });

      filteredByTier.push(...filtered)

      if (filtered.length < 1) {
        filtered = programs.filter(program => {
          // return parseInt(program.Tier) >= myTier;
          return parseInt(program.tier) >= myTier;
        });

        filteredByTier.push(...filtered)
      }
    });
  } else {
    let filtered = programs.filter(program => {
      // return program.Tier <= myTier;
      return parseInt(program.tier) >= myTier;
    });

    filteredByTier.push(...filtered)

    if (filtered.length < 1) {
      filtered = programs.filter(program => {
        // return parseInt(program.Tier) >= myTier;
        return parseInt(program.tier) >= myTier;
      });

      filteredByTier.push(...filtered)
    }
  }

  programs = filteredByTier;

  return programs;

  //SORTING
  // return programs.sort((a, b) => {
  //   const tierComparison = a.tier.localeCompare(b.tier);
  //
  //   if (tierComparison !== 0) {
  //     return tierComparison;
  //   }
  //
  //   const subjectIndexA = SUBJECTS[store.lang].indexOf(a.course_subject[0].name);
  //   const subjectIndexB = SUBJECTS[store.lang].indexOf(b.course_subject[0].name);
  //
  //   // Compare based on predefined hierarchy
  //   if (subjectIndexA !== -1 && subjectIndexB !== -1) {
  //     return subjectIndexA - subjectIndexB;
  //   }
  //
  //   // If one of the subjects is not in the hierarchy, use default comparison
  //   return a.course_subject[0].name.localeCompare(b.course_subject[0].name);
  // });
}

const setCookies = () => {
  const d = new Date()
  d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000)
  let expires = 'expires=' + d.toUTCString()

  const programsIds = JSON.stringify(pluck(store.filteredPrograms, 'id'))

  const domains = {
    'LT': '.digiklase.lt',
    'LV': 'memby.lv'
  };

  document.cookie = `memby_quiz_persona=${store.selectedPersona} ; Domain=${domains[store.lang]} ;  ${expires} ; path=/;`
  document.cookie = `memby_quiz_programs=${programsIds} ; Domain=${domains[store.lang]} ;  ${expires} ; path=/;`
}

const resolveNextStep = () => {
  if (url.searchParams.has('app') && url.searchParams.get('app') === 'true') {
    if (store.lang === 'LT') {
      window.location = 'https://app.digiklase.lt/v2/quiz-recommendations'
    }
    if (store.lang === 'LV') {
      window.location = 'https://app.memby.lv/v2/quiz-recommendations'
    }
  } else {
    store.isLoading = false

    if (store.showCTA) {
      store.step += 1
    } else {
      store.step += 2
      store.showRecomendations = url.searchParams.get('app') !== 'true';
    }
  }
}

const callApi = () => {
  axios.get(`${BASE_APP_DOMAIN[store.lang]}/api/quiz-results/programs?userClass=${store.selectedClass}`).then((response) => {
    console.log('data', response.data);
    store.filteredPrograms = mutateProgramsFromResponse(response);
    store.showRecomendations = true;

    setCookies();
    resolveNextStep();
  });
}

onMounted(() => {
  callApi();
})

</script>

<template>
  <div id="programs" class="wrapper light-grey py-10">
    <div class="container">
      <div class="mb-5">
        <h1 class="text-left mb-2">{{ $t('ProgramsWhichYouGet') }}</h1>
        <p class="text-[18px]">{{ $t('AllProgramsAreIncludedInPlan') }}</p>
      </div>

      <div class="max-w-[80%] mx-auto mb-16 sm:max-w-none">
        <carousel v-bind="settings" class="carousel">
          <slide v-for="(item, index) in store.filteredPrograms" :key="index">
            <ProgramSlide
                :index="index"
                :isTopRecomendation="item.tier === 1"
                :picture="item.course_subject[0].subject_picture_url"
                :subject="item.course_subject[0].name"
                :subjectColor="item.course_subject[0].color"
                :icon="item.course_subject[0].icon_path"
                :programTitle="item.name"
                :teacherName="item.teachers[0].name + ' ' + item.teachers[0].last_name"
                :teacherImage="item.teachers[0].profile_picture_url"
                :lessonsCount="item.classrooms_count"
                :liveClassroomsCount="item.live_classrooms_count"
                :nextLesson="item.next_lesson"
                :programId="item.id"
            />
          </slide>
          <template #addons>
            <navigation />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>
