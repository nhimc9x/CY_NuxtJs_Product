<script setup lang="ts">
import {LockClosedIcon, ShoppingBagIcon, TruckIcon, UserIcon} from '@heroicons/vue/24/solid'
import imgLogo from "~/assets/images/Shopping.png";
import {useAuthStore} from "~/stores/useAuthStore";
import {useCartStore} from "~/stores/useCartStore";

const {authentications, clearStore} = useAuthStore()

const cartStore = useCartStore()

const quantityItemInCart = computed(() => cartStore.quantityItemInCart)

const {$toast} = useNuxtApp()

const userInfo = ref({
  name: authentications.userInfo?.name || '',
  isLoggedIn: !!authentications.userInfo
})

const isLoading = ref(false)

onMounted(async () => {
  if (!authentications.userInfo && useCookie('token').value) {
    try {
      isLoading.value = true
      const res = await apiServices.get('/user')
      authentications.userInfo = res
      userInfo.value = {
        name: res.name,
        isLoggedIn: true
      }
    } catch (error) {
      console.log(error)
      $toast.error(error?.data?.message || 'Unknown error in verifying user')
      clearStore()
      cartStore.removeAllCart()
      navigateTo('/login')
    }
  }
  isLoading.value = false
})

const handleLogout = async () => {
  try {
    const res = await apiServices.post('/logout')
    $toast.success('Logout success 😊😊😊')
    cartStore.removeAllCart()
    clearStore()
    navigateTo('/login')
  } catch (error) {
    console.error('Lỗi từ API:', error);
    $toast.error(error?.data?.message || 'Unknown error in logout');
  }
}


</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-[100] h-20 bg-white/60 backdrop-blur-xl">
    <div class="wrapper h-full flex items-center gap-8">
      <NuxtLink to="/" class="text-4xl h-full py-2 font-bold italic">
        <div class="h-full">
          <img class="h-full mix-blend-multiply object-contain" :src="imgLogo" alt="logo">
        </div>
      </NuxtLink>
      <client-only>
        <NuxtLink
            :to="{ name: 'cart' }"
            class="ml-auto relative cursor-pointer group">
          <ShoppingBagIcon class="size-9 text-text-primary"/>
          <span
              class="absolute -right-2 -bottom-2 text-xs text-white bg-primary size-6 scale-[.8] group-hover:scale-100 duration-200 rounded-full grid place-content-center">{{
              cartStore.quantityItemInCart
            }}</span>
        </NuxtLink>
      </client-only>

      <div v-auto-animate class="">
        <div
            v-if="userInfo.isLoggedIn"
            class="flex items-center gap-2 cursor-pointer relative group"
        >
          <div class="size-11 rounded-full overflow-hidden">
            <img class="img-cover"
                 src="https://inkythuatso.com/uploads/thumbnails/800/2022/03/4a7f73035bb4743ee57c0e351b3c8bed-29-13-53-17.jpg"
                 alt="">
          </div>
          <div class="text-text-primary text-lg italic">{{ userInfo.name }}</div>
          <div
              class="absolute hidden group-hover:block animate-slide-bottom min-w-[160px] py-0.5 bg-primary-light rounded-md top-full right-1/2 translate-x-1/2">
            <NuxtLink :to="{name: 'profile'}" class="flex items-center gap-4 px-6 py-2 w-full hover:bg-secondary-light">
              <UserIcon class="size-6 text-text-primary"/>
              <div class="">Profile</div>
            </NuxtLink>
            <NuxtLink :to="{name: 'order'}" class="flex items-center gap-4 px-6 py-2 w-full hover:bg-secondary-light">
              <TruckIcon class="size-6 text-text-primary"/>
              <div class="">Orders</div>
            </NuxtLink>
            <div @click="handleLogout" class="flex items-center gap-4 px-6 py-2 w-full hover:bg-secondary-light">
              <LockClosedIcon class="size-6 text-text-primary"/>
              <div class="">Logout</div>
            </div>
          </div>
        </div>

        <div v-else-if="isLoading" class="flex items-center gap-2 animate-pulse">
          <div class="size-11 bg-gray-200 rounded-full"></div>
          <div class="h-7 w-20 bg-gray-200 rounded"></div>
        </div>

        <NuxtLink
            v-else
            :to="{name: 'login'}"
            class="bg-gradient-to-tl from-primary to-secondary text-white font-medium text-lg tracking-wide px-5 cursor-pointer py-2 rounded-md relative after:absolute">
          Login
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>