<script setup lang="ts">
import {ShoppingBagIcon} from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-10 h-20">
    <div class="wrapper h-full flex items-center gap-8">
      <div class="text-4xl font-bold italic">Logo</div>
      <div class="ml-auto relative cursor-pointer group">
        <ShoppingBagIcon class="size-9 text-text-primary"/>
        <span class="absolute -right-2 -bottom-2 text-xs text-white bg-primary size-6 scale-[.8] group-hover:scale-100 duration-200 rounded-full grid place-content-center">10</span>
      </div>
      <div class="bg-gradient-to-tl from-primary to-secondary text-white font-medium text-lg tracking-wide px-5 cursor-pointer py-2 rounded-md relative after:absolute">
        Login
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>