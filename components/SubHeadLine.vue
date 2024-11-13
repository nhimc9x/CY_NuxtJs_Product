<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
  }
})

</script>

<template>
  <div class="flex items-center justify-center gap-8 mt-12 mb-20">
    <div class="h-[1px] bg-gray-200 w-20"></div>
    <div class="text-sm uppercase font-medium text-gray-400">{{ props.title }}</div>
    <div class="h-[1px] bg-gray-200 w-20"></div>
  </div>
</template>

<style scoped>

</style>