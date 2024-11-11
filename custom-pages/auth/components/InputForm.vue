<script setup lang="ts">

const model = defineModel()
const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: 'Enter...'
  }
})

</script>

<template>
  <div class="pb-4">
    <input
        v-model="model"
        :type="type"
        :placeholder="placeholder"
        class="w-full p-4 text-xl bg-white/15 focus:border-[#e84393] outline-[#e84393] border border-[#80f0ff] rounded-md placeholder-gray-600/80 text-gray-900"
    >
  </div>
</template>

<style scoped>

</style>