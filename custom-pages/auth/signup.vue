<script setup lang="ts">
import InputForm from "~/custom-pages/auth/components/InputForm.vue";
import ButtonForm from "~/custom-pages/auth/components/ButtonForm.vue";

definePageMeta({
  layout: 'auth-layout'
})

const { $toast } = useNuxtApp()

const username = ref('')
const email = ref('')
const password = ref('')

const submitForm = async () => {
  const { data, error } = await useAsyncData('signup', () =>
      apiServices.post('/signup', {
        body: {
          name: username.value,
          email: email.value,
          password: password.value
        }
      })
  )
  if (error.value) {
    console.error('Lỗi từ API:', error.value)
    $toast.error(error.value?.data?.message || 'Unknown error in signup')
    return
  }
  if (data.value) {
    console.log(data.value)
    $toast.success('Signup success, please login')
    navigateTo('/login')
  }
}

</script>

<template>
  <div class="sm:min-w-[500px] xs:min-w-[450px] xs:w-max w-[92%] bg-white/20 backdrop-blur-2xl border-2 border-[#80f0ff] rounded-md sm:p-14 py-12 px-8">
    <div class="text-4xl font-bold tracking-widest text-slate-900 text-center mb-14">SignUp</div>
    <form @submit.prevent="submitForm" class="space-y-6">
      <InputForm v-model.trim="username" type="text" placeholder="Username"/>
      <InputForm v-model.trim="email" type="email" placeholder="Email"/>
      <InputForm v-model.trim="password" type="password" placeholder="Password"/>
      <ButtonForm title="Signup"/>
    </form>
    <div class="my-6 text-right text-gray-300">You have an account?
      <NuxtLink class="text-[#e84393] hover:text-[#80f0ff] ml-1" to="/login">Login</NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>