<script setup lang="ts">
import { ArrowUpIcon } from '@heroicons/vue/20/solid'

const isShow = ref(false)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  isShow.value = window.scrollY > 1000;
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
  <div v-if="isShow" @click="scrollToTop" class="fixed size-14 p-3 bg-primary/80 rounded-md cursor-pointer z-[99] right-4 bottom-4">
    <ArrowUpIcon class="w-full text-white" />
  </div>
</template>

<style scoped>

</style>