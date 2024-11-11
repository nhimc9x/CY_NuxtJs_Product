<script setup lang="ts">
import InputForm from "~/custom-pages/auth/components/InputForm.vue";
import ButtonForm from "~/custom-pages/auth/components/ButtonForm.vue";

definePageMeta({
  layout: 'auth-layout'
})
</script>

<template>
  <div class="w-[500px] bg-white/20 backdrop-blur-2xl border-2 border-[#80f0ff] rounded-md py-14 px-14">
    <div class="text-4xl font-bold tracking-widest text-slate-900 text-center mb-14">SignUp</div>
    <form class="space-y-6">
      <InputForm type="email" placeholder="Email"/>
      <InputForm type="password" placeholder="Password"/>
      <ButtonForm title="Signup"/>
    </form>
    <div class="my-6 text-right text-gray-300">You have an account? <NuxtLink class="text-[#e84393] hover:text-[#80f0ff] ml-1" to="/login">Login</NuxtLink></div>
  </div>
</template>

<style scoped>

</style>