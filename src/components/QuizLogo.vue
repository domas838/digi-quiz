<script setup>

import {store} from "@/store";
</script>

<template>
  <div class="brand-logo">
    <img v-if="store.lang === 'LT'" src="../assets/images/digiklase.svg" alt="Digiklase logo"/>
    <img v-if="store.lang === 'LV'" src="../assets/images/memby.svg" alt="Memby logo" />
    <img v-if="store.lang === 'EN'" src="../assets/images/MathUps.svg" alt="MathsUp logo" />
  </div>
</template>

<style scoped>

</style>
