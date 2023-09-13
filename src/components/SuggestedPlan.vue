<script setup>
import Heading from "./Typography/Heading.vue";
import { ref, onMounted, onUnmounted } from 'vue';
import { store } from '../store'

defineProps({
  plan: Object,
  selectedSubjectsLength: Number,
  isVisible: Boolean,
  btn: Object,
  isPaidTrial: Boolean
})

const showComponent = ref(false);

const handleScroll = () => {
  showComponent.value = window.scrollY >= 800;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const resolvePlan = (selectedSubjectsLength, isPaidTrial) => {
  if (isPaidTrial) {
    return 'AllSubjectsPlan';
  }

  switch (selectedSubjectsLength) {
    case 1:
      return 'OneSubjectPlan' ;
    case 2:
      return 'TwoSubjectsPlan';
    default:
      return 'AllSubjectsPlan';
  }
}

const resolvePrice = (selectedSubjectsLength, isPaidTrial) => {
  if (isPaidTrial) {
    return '1,00 €';
  }

  switch (selectedSubjectsLength) {
    case 1:
      return '24,45' ;
    case 2:
      return '48,90';
    default:
      return '54,90';
  }
}

</script>

<template>
  <Transition>
    <div v-if="showComponent" class="bg-white rounded z-[100]">
      <div v-if="store.lang === 'LT' || isPaidTrial" class="max-w-[1200px] w-full rounded-xl drop-shadow-md bg-white fixed z-[100] left-1/2 px-8 py-2 md:py-5 transform -translate-x-1/2 bottom-0 lg:bottom-10">

        <div class="z-[100] bg-white flex flex-col text-center w-full md:flex-row md:gap-5 md:text-left md:inline-flex md:justify-between">
          <div class="basis-1/2">
            <div class="text-[12px] md:text-[16px]">{{ isPaidTrial ? $t('SevenDaysTrial') : $t('RecommendedPlan') }}</div>
            <Heading level="3">{{ $t(resolvePlan(selectedSubjectsLength, isPaidTrial)) }}</Heading>
          </div>

          <div class="basis-1/4 md:mb-4 md:mb-0" :class="{'md:self-end': isPaidTrial}">
            <div v-if="! isPaidTrial" class="inline mr-2 md:block md:mr-0">{{ $t('From') }}</div>
            <div class="font-bold self-end inline-flex">
              <Heading level="1">{{ resolvePrice(selectedSubjectsLength, isPaidTrial) }}</Heading>
              <span v-if="! isPaidTrial" class="font-normal self-end mb-1 ml-1">{{ $t('CurrencyMonth') }}</span>
            </div>
          </div>

          <div class="basis-1/4 self-center">
            <div class="action">
              <a :href="btn.btnLink" target="_blank" class="cta-btn"
              >{{ btn.buyNow }}<img src="../assets/images/arrow-right.svg" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>

      <div v-if="store.lang === 'LV' && !isPaidTrial" class="max-w-[1200px] w-full rounded-xl drop-shadow-lg bg-white fixed z-[100] left-1/2 px-8 py-2 md:py-5 transform -translate-x-1/2 bottom-0 lg:bottom-10">

        <div class="z-[100] bg-white flex flex-col text-center w-full md:flex-row md:gap-5 md:text-left md:inline-flex md:justify-between">
          <div class="basis-1/2">
<!--            <div class="text-[12px] md:text-[16px]">Izmēģini Memby 7 dienas par 5 EUR un iegūsti piekļuvi visām mūsu iespējām. Sāc jau šodien!</div>-->
            <Heading level="3">💥 Izmēģini 7 dienas par 5 EUR</Heading>
          </div>

<!--          <div class="basis-1/4 md:mb-4 md:mb-0" :class="{'md:self-end': isPaidTrial}">-->
<!--            <div v-if="! isPaidTrial" class="inline mr-2 md:block md:mr-0">{{ $t('From') }}</div>-->
<!--            <div class="font-bold self-end inline-flex">-->
<!--              <Heading level="1">{{ resolvePrice(selectedSubjectsLength, isPaidTrial) }}</Heading>-->
<!--              <span v-if="! isPaidTrial" class="font-normal self-end mb-1 ml-1">{{ $t('CurrencyMonth') }}</span>-->
<!--            </div>-->
<!--          </div>-->

          <div class="basis-1/2 self-center mt-2">
            <div class="action float-right">
              <a :href="btn.btnLink" target="_blank" class="cta-btn"
              >Izmēģini 7 dienas<img src="../assets/images/arrow-right.svg" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
