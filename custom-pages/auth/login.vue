<script setup lang="ts">
import ButtonForm from "~/custom-pages/auth/components/ButtonForm.vue";
import InputForm from "~/custom-pages/auth/components/InputForm.vue";
import {useAuthStore} from "~/stores/useAuthStore";

definePageMeta({
  layout: 'auth-layout'
})

const route = useRoute()
const {isAuthenticated, saveToStore} = useAuthStore()
const {$toast} = useNuxtApp()

onMounted(() => {
  if (isAuthenticated) {
    navigateTo('/')
  }
})

const dataLogin = ref({
  email: '',
  password: ''
})

const submitForm = async () => {
  try {
    const data = await apiServices.post('/login', {
      body: dataLogin.value
    });
      console.log(data);
      saveToStore(data.token, data.user);
      $toast.success(`Login success, welcome ${data.user.name}`);
      navigateTo(route.query.redirect || '/');
  } catch (error) {
    console.error('Lỗi từ API:', error);
    $toast.error(error?.data?.message || 'Unknown error in login');
  }
};

</script>

<template>
  <div class="sm:min-w-[500px] xs:min-w-[450px] xs:w-max w-[92%] bg-white/20 backdrop-blur-2xl border-2 border-[#80f0ff] rounded-md sm:p-14 py-12 px-8">
    <div class="text-4xl font-bold tracking-widest text-slate-900 text-center mb-14">Login</div>
    <form @submit.prevent="submitForm" class="space-y-6">
      <InputForm v-model.trim="dataLogin.email" type="email" placeholder="Email"/>
      <InputForm v-model.trim="dataLogin.password" type="password" placeholder="Password"/>
      <ButtonForm title="Login"/>
    </form>
    <div class="my-6 text-right text-gray-300">Don't have an account?
      <NuxtLink class="text-[#e84393] hover:text-[#80f0ff] ml-1" to="/signup">SignUp</NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>