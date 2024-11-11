<script setup lang="ts">
import ButtonForm from "~/custom-pages/auth/components/ButtonForm.vue";
import InputForm from "~/custom-pages/auth/components/InputForm.vue";
definePageMeta({
  layout: 'auth-layout'
})

const email = ref('')
const password = ref('')

</script>

<template>
  <div class="w-[500px] bg-white/20 backdrop-blur-2xl border-2 border-[#80f0ff] rounded-md py-14 px-14">
    <div class="text-4xl font-bold tracking-widest text-slate-900 text-center mb-14">Login</div>
    <form class="space-y-6">
      <InputForm v-model.trim="email" type="email" placeholder="Email"/>
      <InputForm v-model.trim="password" type="password" placeholder="Password"/>
      <ButtonForm title="Login"/>
    </form>
    <div class="my-6 text-right text-gray-300">Don't have an account? <NuxtLink class="text-[#e84393] hover:text-[#80f0ff] ml-1" to="/signup">SignUp</NuxtLink></div>
  </div>
</template>

<style scoped>

</style>