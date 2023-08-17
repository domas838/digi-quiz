<script setup>
import Heading from "./Typography/Heading.vue";
import { ref, onMounted, onUnmounted } from 'vue';

defineProps({
  heading: String,
  plan: Object,
  selectedSubjectsLength: Number,
  isVisible: Boolean,
  btn: Object
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

const resolvePlan = (selectedSubjectsLength) => {
  switch (selectedSubjectsLength) {
    case 1:
      return 'OneSubjectPlan' ;
    case 2:
      return 'TwoSubjectsPlan';
    case 3:
      return 'AllSubjectsPlan';
  }
}

const resolvePrice = (selectedSubjectsLength) => {
  switch (selectedSubjectsLength) {
    case 1:
      return '24,45' ;
    case 2:
      return '48,90';
    case 3:
      return '54,90';
  }
}

</script>

<template>
  <Transition>
    <div v-if="showComponent" class="bg-white rounded z-[100]">
      <div class="max-w-[1200px] w-full rounded-xl drop-shadow-md bg-white fixed z-[100] left-1/2 px-8 py-5 transform -translate-x-1/2 bottom-0 lg:bottom-10">
  <!--      <div class="text-center mb-8 md:mb-16">-->
  <!--        <Heading tw="max-w-[750px] m-auto" level="1">{{ heading }}</Heading>-->
  <!--      </div>-->

        <div class="z-[100] bg-white flex flex-col text-center w-full md:flex-row md:gap-5 md:text-left md:inline-flex md:justify-between">
          <div class="basis-1/2">
            <div>{{ $t('RecommendedPlan') }}</div>
            <Heading level="3">{{ $t(resolvePlan(selectedSubjectsLength)) }}</Heading>
          </div>

          <div class="basis-1/4 mb-4 md:mb-0">
            <div class="inline mr-2 md:block md:mr-0">{{ $t('From') }}</div>
            <div class="font-bold self-end inline-flex">
              <Heading level="1">{{ resolvePrice(selectedSubjectsLength) }}</Heading>
              <span class="font-normal self-end mb-1 ml-1">{{ $t('CurrencyMonth') }}</span>
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