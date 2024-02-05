<script setup>
import Heading from "./Typography/Heading.vue";
import {ref, onMounted, onUnmounted, reactive} from 'vue';
import { store } from '../store'
import {differenceInSeconds, startOfMonth} from "date-fns";

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
      return '42,45';
  }
}

const time = reactive({
  secondsUntilMidnight: 0,
})

const resolveTimeUntilDecemberFirst = () => {
  const date = new Date();

  const decemberFirst = new Date('2024-02-15');
  time.secondsUntilMidnight = differenceInSeconds(decemberFirst, date);
}

onMounted(() => {
  resolveTimeUntilDecemberFirst()
})

</script>

<template>
  <Transition>
    <div v-if="showComponent" class="rounded z-[100]">
      <div class="border border-orange bg-black max-w-[1200px] w-full rounded-xl drop-shadow-md bg-white fixed z-[100] left-1/2 transform -translate-x-1/2 bottom-0 lg:bottom-10">
        <div class="bg-orange rounded-t-xl py-2 flex gap-5 justify-center text-center text-xs md:text-[14px]">
          <span class="font-bold block" v-html="$t('NovemberDealTimerFull')"></span>
          <span class="hidden md:block">
            <vue-countdown :time="time.secondsUntilMidnight * 1000" v-slot="{ days, hours, minutes, seconds }">
              {{ $t('ThisOfferValidFor') }} <span class="font-bold">{{ days }} {{ $t('days') }} {{ hours }} {{ $t('hours') }} {{ minutes }} {{ $t('minutes') }} {{ seconds }} {{ $t('seconds') }}.</span>
            </vue-countdown>
            </span>
        </div>

        <div class="rounded-b-xl px-8 py-2 z-[100] bg-black text-white flex flex-col text-center w-full md:py-5 md:flex-row md:gap-5 md:text-left md:inline-flex md:justify-between">
          <div class="basis-1/2">
            <div class="text-[12px] md:text-[16px] hidden md:block">{{ isPaidTrial ? $t('SevenDaysTrial') : $t('RecommendedPlan') }}</div>
            <Heading level="3">{{ $t(resolvePlan(selectedSubjectsLength, isPaidTrial)) }}</Heading>
          </div>

          <div class="basis-1/4 md:mb-4 md:mb-0" :class="{'md:self-end': isPaidTrial}">
            <div v-if="! isPaidTrial && resolvePlan(selectedSubjectsLength, isPaidTrial) !== 'AllSubjectsPlan'" class="inline mr-2 md:block md:mr-0">{{ $t('From') }}</div>
            <div v-if="! isPaidTrial && resolvePlan(selectedSubjectsLength, isPaidTrial) === 'AllSubjectsPlan'" class="inline mr-2 md:block md:mr-0 line-through">84,90 €/mėn.</div>
            <div class="font-bold self-end inline-flex">
              <Heading level="1">{{ resolvePrice(selectedSubjectsLength, isPaidTrial) }}</Heading>
              <span v-if="! isPaidTrial" class="font-normal self-end mb-1 ml-1">{{ $t('CurrencyMonth') }}</span>
            </div>
          </div>

          <div class="basis-1/4 self-center">
            <div class="action">
              <a :href="btn.btnLink" target="_blank" class="cta-btn !bg-orange !text-black"
              >{{ btn.buyNow }}
                <span class="ml-3">
                <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1222_2121)">
                  <path d="M29.2198 10.6421C23.6611 10.6421 19.1264 6.21584 19.1264 0.763558C19.1264 0.345987 18.7729 0 18.3462 0C17.9195 0 17.566 0.345987 17.566 0.763558C17.566 4.97505 19.9065 8.6616 23.3929 10.6421H0.780171C0.353515 10.6421 0 10.9881 0 11.4056C0 11.8232 0.353515 12.1692 0.780171 12.1692H23.1857C19.8212 14.0304 17.566 17.3948 17.566 21.2245C17.566 21.6421 17.9195 21.9881 18.3462 21.9881C18.7729 21.9881 19.1264 21.6421 19.1264 21.2245C19.1264 16.2256 23.6489 12.1692 29.2198 12.1692C29.6465 12.1692 30 11.8232 30 11.4056C30 10.9881 29.6465 10.6421 29.2198 10.6421Z" fill="black"/>
                </g>
                <defs>
                  <clipPath id="clip0_1222_2121">
                    <rect width="30" height="22" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
                  </span>
              </a>
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
