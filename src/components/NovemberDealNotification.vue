<script setup>
import {onMounted, reactive} from "vue";
import {differenceInSeconds, startOfMonth} from "date-fns";

const url = new URL(window.location.href)


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
  <div class="bg-black">
    <div class="container text-white bg-black !flex flex-wrap justify-center gap-3 !py-2 text-center">
      <div class="font-bold" v-html="$t('NovemberDealTimer')"></div>
<!--      <vue-countdown :time="time.secondsUntilMidnight * 1000" v-slot="{ days, hours, minutes, seconds }">-->
<!--        {{ $t('ThisOfferValidFor') }} <span class="font-bold">{{ days }} {{ $t('days') }} {{ hours }} {{ $t('hours') }} {{ minutes }} {{ $t('minutes') }} {{ seconds }} {{ $t('seconds') }}.</span>-->
<!--      </vue-countdown>-->
    </div>
  </div>
</template>
