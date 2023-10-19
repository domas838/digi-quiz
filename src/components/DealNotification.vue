<script setup>
import {onMounted, reactive} from "vue";
import {differenceInSeconds, isToday, startOfTomorrow} from "date-fns";

const url = new URL(window.location.href)


const time = reactive({
  secondsUntilMidnight: 0,
})

const resolveTimeUntilMidnight = () => {
  const now = new Date();

  // Check if it's already past midnight
  if (!isToday(now)) {
    return "It's already past midnight!";
  }

  // Calculate the time until midnight
  const midnight = startOfTomorrow();
  time.secondsUntilMidnight = differenceInSeconds(midnight, now);
}

onMounted(() => {
  resolveTimeUntilMidnight()
  console.log(time.secondsUntilMidnight);
})


</script>

<template>
  <div class="bg-blue" v-if="url.searchParams.has('deal')">
    <div class="container text-white !flex flex-wrap justify-between gap-3 !py-2">
      <div>{{ $t('SpecialDeal') }}</div>
      <vue-countdown :time="time.secondsUntilMidnight * 1000" v-slot="{ hours, minutes, seconds }">
        {{ $t('ThisOfferValidFor') }} <span class="font-bold">{{ hours }} {{ $t('hours') }} {{ minutes }} {{ $t('minutes') }} {{ seconds }} {{ $t('seconds') }}.</span>
      </vue-countdown>
    </div>
  </div>
</template>
