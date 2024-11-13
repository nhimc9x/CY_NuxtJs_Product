<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const {authentications} = useAuthStore()

</script>

<template>
  <div class="relative pt-36 pb-24">
    <img src="https://pagedone.io/asset/uploads/1705471739.png" alt="cover-image" class="w-full absolute top-0 left-0 z-0 h-60 object-cover">
    <div class="w-full max-w-7xl mx-auto px-6 md:px-8">
      <div class="flex items-center justify-center relative z-10 mb-2.5">
        <img src="https://inkythuatso.com/uploads/thumbnails/800/2022/03/4a7f73035bb4743ee57c0e351b3c8bed-29-13-53-17.jpg" alt="user-avatar-image" class="border-4 w-52 border-solid border-white rounded-full object-cover">
      </div>
      <h3 class="text-center font-bold text-3xl leading-10 text-gray-900 mb-3">{{authentications.userInfo?.name}}</h3>
      <p class="font-normal text-base leading-7 text-gray-500 text-center mb-8">{{authentications.userInfo?.email}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>