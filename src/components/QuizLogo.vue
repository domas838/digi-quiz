<script setup>
defineProps({
  tw: String
})

</script>

<template>
  <div class="brand-logo">
    <img class="w-[120px] sm:w-[180px]" :class="tw" src="../assets/images/memby.svg" alt="Memby logo" />
  </div>
</template>

<style scoped>

</style>
