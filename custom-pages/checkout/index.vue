<script setup lang="ts">
import {useCartStore} from "~/stores/useCartStore";

definePageMeta({
  middleware: 'auth'
})

const router = useRouter()
const cartStore = useCartStore()
const {$toast} = useNuxtApp()

onMounted(() => {
  if (!cartStore.quantityItemInCart) {
    $toast.error('You have no product in cart')
    navigateTo('/cart')
  }
})

const checkoutMethods = ref('visa')
const address = ref('')
const phone = ref('')
const isLoading = ref(false)
const tax = ref(0.1)

const totalPrice = computed(() => (cartStore.totalPrice * (1 + tax.value)).toFixed(1))

const handleCheckout = async () => {
  if (!address.value || !phone.value) return
  try {
    isLoading.value = true

    // Check stock trước

    const data = await apiServices.post('/order', {
      body: {
        address: address.value,
        phone: phone.value,
        cart_item: cartStore.cartItemsToCheckout
      }
    })
    $toast.success(data.message);
    cartStore.removeAllCart()
    setTimeout(() => {
      navigateTo('/order')
      isLoading.value = false
    }, 1200)
  } catch (error) {
    console.error('Lỗi từ API:', error);
    $toast.error(error?.data?.message || 'Unknown error in checkout');
    isLoading.value = false
  }
}

</script>

<template>
  <div class="text-text-primary mb-20">
    <div class="my-10 text-3xl font-bold text-center">Checkout</div>
    <div class="bg-white my-10 p-4 lg:max-w-7xl max-w-xl mx-auto">
      <div v-auto-animate class="grid lg:grid-cols-3 gap-10">
        <div v-if="!isLoading" class="lg:col-span-2 max-lg:order-1">
          <form @submit.prevent="handleCheckout" v-auto-animate class="mt-10 max-w-lg">

            <input required type="text" placeholder="Address"
                   v-model="address"
                   class="px-4 mt-4 py-3.5 bg-white  w-full text-sm border-b-2 focus:border-gray-800 outline-none"/>

            <input required type="text" placeholder="Phone"
                   v-model="phone"
                   class="px-4 mt-4 py-3.5 bg-white  w-full text-sm border-b-2 focus:border-gray-800 outline-none"/>

            <div class="text-xl mt-8">Payment method</div>

            <div class="grid gap-4 sm:grid-cols-2 mt-4">
              <div class="flex items-center">
                <input type="radio" class="w-5 h-5 cursor-pointer" id="card" value="visa" v-model="checkoutMethods"
                       name="checkout-method" checked/>
                <label for="card" class="ml-4 flex gap-2 cursor-pointer">
                  <img src="https://readymadeui.com/images/visa.webp" class="w-12" alt="card1"/>
                  <img src="https://readymadeui.com/images/american-express.webp" class="w-12" alt="card2"/>
                  <img src="https://readymadeui.com/images/master.webp" class="w-12" alt="card3"/>
                </label>
              </div>

              <div class="flex items-center">
                <input type="radio" class="w-5 h-5 cursor-pointer" value="paypal" v-model="checkoutMethods"
                       name="checkout-method" id="paypal"/>
                <label for="paypal" class="ml-4 flex gap-2 cursor-pointer">
                  <img src="https://readymadeui.com/images/paypal.webp" class="w-20" alt="paypalCard"/>
                </label>
              </div>
            </div>

            <div v-if="checkoutMethods === 'visa'" class="grid gap-4 mt-8">
              <input type="text" placeholder="Cardholder's Name"
                     class="px-4 py-3.5 bg-white  w-full text-sm border-b-2 focus:border-gray-800 outline-none"/>

              <div class="flex bg-white border-b-2 focus-within:border-gray-800 overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-12 ml-3" viewBox="0 0 291.764 291.764">
                  <path fill="#2394bc"
                        d="m119.259 100.23-14.643 91.122h23.405l14.634-91.122h-23.396zm70.598 37.118c-8.179-4.039-13.193-6.765-13.193-10.896.1-3.756 4.24-7.604 13.485-7.604 7.604-.191 13.193 1.596 17.433 3.374l2.124.948 3.182-19.065c-4.623-1.787-11.953-3.756-21.007-3.756-23.113 0-39.388 12.017-39.489 29.204-.191 12.683 11.652 19.721 20.515 23.943 9.054 4.331 12.136 7.139 12.136 10.987-.1 5.908-7.321 8.634-14.059 8.634-9.336 0-14.351-1.404-21.964-4.696l-3.082-1.404-3.273 19.813c5.498 2.444 15.609 4.595 26.104 4.705 24.563 0 40.546-11.835 40.747-30.152.08-10.048-6.165-17.744-19.659-24.035zm83.034-36.836h-18.108c-5.58 0-9.82 1.605-12.236 7.331l-34.766 83.509h24.563l6.765-18.08h27.481l3.51 18.153h21.664l-18.873-90.913zm-26.97 54.514c.474.046 9.428-29.514 9.428-29.514l7.13 29.514h-16.558zM85.059 100.23l-22.931 61.909-2.498-12.209c-4.24-14.087-17.533-29.395-32.368-36.999l20.998 78.33h24.764l36.799-91.021H85.059v-.01z"
                        data-original="#2394bc"/>
                  <path fill="#efc75e"
                        d="M51.916 111.982c-1.787-6.948-7.486-11.634-15.226-11.734H.374L0 101.934c28.329 6.984 52.107 28.474 59.821 48.688l-7.905-38.64z"
                        data-original="#efc75e"/>
                </svg>
                <input type="number" placeholder="Card Number"
                       class="px-4 py-3.5 bg-white  w-full text-sm outline-none"/>
              </div>
            </div>

            <div v-else>
              <label
                  class="flex items-center has-[:checked]:border-blue-600 border-2 gap-4 mt-4 border-gray-200 rounded-md px-4 py-2 cursor-pointer">
              <span class="w-20">
                <img
                    src="https://fm.cnbc.com/applications/cnbc.com/resources/product_select/2024/09/06/Paypal_Debit_Card_2024.png"
                    class="w-full" alt="card1"/>
              </span>
                <span class="flex flex-col">
                <span class="text-xl font-medium">nhimc9x</span>
                <span class="text-gray-400">********</span>
              </span>
                <input type="checkbox" class="w-5 h-5 ml-auto cursor-pointer" checked/>
              </label>
              <div class="bg-blue-200 cursor-pointer text-blue-600 py-2 text-sm w-max mx-auto px-4 rounded-2xl mt-4">+
                Add paypal account
              </div>
            </div>

            <div class="flex flex-wrap gap-4 mt-12">
              <button @click="router.back()" type="button"
                      class="min-w-[150px] px-6 py-3.5 text-sm bg-gray-100  rounded-md hover:bg-gray-200">
                Back
              </button>
              <button type="submit"
                      class="min-w-[150px] px-6 py-3.5 text-sm bg-gray-800 text-white rounded-md hover:bg-[#111]">Pay
                ${{ totalPrice }}
              </button>
            </div>
          </form>
        </div>

        <div v-else></div>

        <div class="bg-gray-100 min-h-96 w-full  p-6 rounded-md">
          <h2 class="text-4xl">${{ totalPrice }}</h2>
          <div class=" mt-8 space-y-4">
            <div class="flex flex-wrap gap-4 text-sm">Price <span class="ml-auto font-bold">${{
                cartStore.totalPrice
              }}.00</span></div>
            <div class="flex flex-wrap gap-4 text-sm">Extra Ship<span class="ml-auto font-bold">$0.00</span></div>
            <div class="flex flex-wrap gap-4 text-sm">Discount <span class="ml-auto font-bold">0%</span></div>
            <div class="flex flex-wrap gap-4 text-sm">Tax <span class="ml-auto font-bold">10%</span></div>
            <div class="flex flex-wrap gap-4 text-sm font-bold border-t-2 pt-4">Total <span
                class="ml-auto">${{ totalPrice }}</span></div>
          </div>
        </div>

      </div>
    </div>

  </div>

</template>

<style scoped>

</style>