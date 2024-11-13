<script setup>
import {useCartStore} from "~/stores/useCartStore";
import CartProductItem from "~/custom-pages/cart/components/CartProductItem.vue";

definePageMeta({
  middleware: 'auth'
})

const cartStore = useCartStore()

</script>

<template>
  <client-only>
  <div class="pt-16 pb-24 relative">
    <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">

      <div class="title font-bold text-4xl text-text-primary leading-10 mb-8 text-center">Shopping Cart</div>

      <NuxtLink :to="{name: 'product'}" class="mt-12 mb-6 block">
        <PrimaryBtn text="More products" className="max-w-[200px] ml-auto text-sm" typeColor="blue-secondary"/>
      </NuxtLink>

      <div v-if="cartStore.cart.length === 0"
           class="flex flex-col text-center justify-center gap-6 min-h-[50vh] my-10">
        <div class="text-2xl text-text-primary font-medium">Cart is empty</div>
        <div class="text-gray-500 text-lg">You have not added any products to your cart, please add some products to
          your cart
        </div>
      </div>

      <div v-else>
        <client-only>
          <div v-auto-animate>
            <CartProductItem v-for="item in cartStore.cart" :key="item.product_id" :dataItem="item"/>
          </div>

          <div
              class="flex md:items-center md:justify-between lg:px-6 py-6 border-b border-gray-200">
            <div
                class="text-text-primary font-semibold text-2xl leading-9 w-full text-left">
              Total
            </div>
            <div class="font-bold text-3xl text-primary tracking-wider">${{ cartStore.totalPrice }}</div>
          </div>
          <div class="mb-10">
            <p class="font-normal text-base leading-7 text-gray-500 text-center my-5">
              Shipping taxes, and discounts calculated at checkout
            </p>
            <NuxtLink :to="{name: 'checkout'}">
              <PrimaryBtn className="max-w-[90%] mx-auto uppercase font-medium text-secondary py-4 text-xl"
                          text="Check out"/>

            </NuxtLink>
          </div>
        </client-only>
      </div>

    </div>

  </div>
  </client-only>
</template>

<style scoped>

</style>