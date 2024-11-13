<script setup lang="ts">
import OrderItemCard from "~/custom-pages/order/components/OrderItemCard.vue";

definePageMeta({
  middleware: 'auth'
})

const {$toast} = useNuxtApp()

const isLoading = ref(false)
const orders = ref([])

onMounted(async () => {
  try {
    isLoading.value = true
    orders.value = await apiServices.get('/orders')
    isLoading.value = false
  } catch (error) {
    isLoading.value = false
    $toast.error(error?.data?.message || 'Unknown error in get orders');
  }
})

</script>

<template>
  <div class="mt-10 mb-20 px-4">
    <div class="text-3xl font-semibold">My Order</div>
    <div class="my-10">

      <div v-if="isLoading" class="flex-col gap-4 w-full min-h-[40vh] flex items-center justify-center">
        <div
            class="w-20 h-20 border-4 border-transparent animate-spin flex items-center justify-center border-t-primary rounded-full"
        >
          <div
              class="w-16 h-16 border-4 border-transparent animate-spin flex items-center justify-center border-t-secondary rounded-full"
          ></div>
        </div>
      </div>

      <div v-else-if="orders.length === 0" class="min-h-[40vh] grid place-content-center text-gray-500 text-xl">No order yet</div>

      <OrderItemCard v-else v-for="order in orders" :dataItem="order"/>
    </div>
  </div>
</template>

<style scoped>

</style>