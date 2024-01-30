<script setup>
defineProps({
  level: String,
  tw: String
})
</script>

<template>
  <h2 v-if="level === '1'" :class="tw" class="font-bold text-[24px] md:text-[42px]">
    <slot/>
  </h2>
  <h2 v-if="level === '2'" :class="tw" class="font-bold text-[20px] md:text-[26px]">
    <slot/>
  </h2>
  <h3 v-if="level === '3'" class="font-bold text-[14px] md:text-[26px]">
    <slot/>
  </h3>
</template>
