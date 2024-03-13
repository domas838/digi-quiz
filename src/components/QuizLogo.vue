<script setup>
defineProps({
  tw: String
})

import {store} from "@/store";
</script>

<template>
  <div class="brand-logo">
    <img class="w-[120px] sm:w-[180px]" :class="tw" v-if="store.lang === 'LT'" src="../assets/images/digiklase.svg" alt="Digiklase logo"/>
    <img class="w-[120px] sm:w-[180px]" :class="tw" v-if="store.lang === 'LV' || store.flow === 'memby-maths'" src="../assets/images/memby.svg" alt="Memby logo" />
    <img class="w-[120px] sm:w-[180px]" :class="tw" v-if="store.lang === 'EN_IE'" src="../assets/images/MathUps.svg" alt="MathsUp logo" />
    <img class="w-[120px] sm:w-[180px]" :class="tw" v-if="store.lang === 'EN_ZA' && store.flow !== 'memby-maths'" src="../assets/images/MathsUp.svg" alt="MathsUp logo" />
  </div>
</template>

<style scoped>

</style>
