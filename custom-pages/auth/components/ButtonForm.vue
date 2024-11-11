<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'Button'
  },
  type: {
    type: String,
    default: 'submit'
  }
})

</script>

<template>
  <button
      class="w-full bg-[#80f0ff]/20 hover:bg-transparent p-4 text-xl hover:tracking-widest border border-[#80f0ff] font-medium rounded-md text-[#e84393] relative group overflow-hidden hover:border-[#e84393] hover:text-[#80f0ff] duration-500"
  >
    <span class="absolute group-hover:size-[400px] ease-in-out size-0 duration-300 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#e84393]/20"></span>
    <span>{{ props.title }}</span>
  </button>
</template>

<style scoped>

</style>