<script setup>
import {onMounted} from 'vue'
import {store} from '../store'
import {Personas} from "../helpers";

const url = new URL(window.location.href)

const getPersonaWithMostPoints = () => {
  const mergedPersonas = store.PROFILE1.concat(store.PROFILE2, store.PROFILE3);

  const scores = {};

  for (const item of mergedPersonas) {
    if (scores[item]) {
      scores[item] += 1;
    } else {
      scores[item] = 1;
    }
  }

  const predefinedOrder = [
    Personas.AMBITIOUS,
    Personas.EXAM_ORIENTED,
    Personas.BUSY_MULTI_TASKER,
    Personas.STRUGGLING
  ];

  const sortedPersonas = predefinedOrder
      .filter(persona => scores.hasOwnProperty(persona))
      .sort((personaA, personaB) => {
        const scoreDiff = scores[personaB] - scores[personaA];
        if (scoreDiff !== 0) {
          return scoreDiff;
        }
        return predefinedOrder.indexOf(personaA) - predefinedOrder.indexOf(personaB);
      });

  //RETURNING PERSONA WITH MOST POINTS
  return sortedPersonas[0];
};

const programRecommendationHandler = () => {
    store.isLoading = true
    store.selectedPersona = getPersonaWithMostPoints();

    // Set query params for returning visitors from the same URL
    url.searchParams.set('persona', store.selectedPersona)
    url.searchParams.set('class', store.selectedClass)
    url.searchParams.set('level', store.childLevel)
    url.searchParams.set('subjects', JSON.stringify(store.selectedSubjects))
    url.searchParams.set('tier', store.TIER)

    window.history.replaceState(null, null, url)
    store.resultUrl = url

    if (store.showCTA) {
      store.step += 1
    } else {
      store.step += 2
      store.showRecomendations = true
    }
}

onMounted(() => {
    programRecommendationHandler()
})

</script>
