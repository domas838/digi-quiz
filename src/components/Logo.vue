<script setup>
import { store } from "@/store";
</script>

<template>
  <div class="brand-logo brand-logo--mobile">
    <img v-show="store.lang === 'LT'" src="/src/assets/images/digiklase.svg" alt="Digiklase logo"/>
    <img v-show="store.lang === 'LV' || store.flow === 'memby-maths'" src="/src/assets/images/memby.svg" alt="Memby logo" />
    <img v-show="store.lang === 'EN_IE'" src="/src/assets/images/MathUps.svg" alt="MathsUp logo" />
    <img v-show="store.lang === 'EN_ZA' && store.flow !== 'memby-maths'" src="/src/assets/images/MathsUp.svg" alt="MathsUp logo" />
  </div>
</template>

<style scoped>

</style>
