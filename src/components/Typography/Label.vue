<script setup>
defineProps({
  tw: String
})
</script>

<template>
  <div :class="tw" class="text-base md:text-xl">
    <slot/>
  </div>
</template>
