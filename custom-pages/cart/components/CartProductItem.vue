<script setup lang="ts">
import {TrashIcon} from '@heroicons/vue/20/solid'
import {useCartStore} from "~/stores/useCartStore";

const {removeFromCart} = useCartStore()

const {$toast} = useNuxtApp()

const props = defineProps({
  dataItem: {
    type: Object,
    required: true,
  }
})

const handlePlus = () => {
  if (props.dataItem.quantity < props.dataItem.stock) {
    props.dataItem.quantity++
  } else {
    $toast.error('No more product in stock')
  }
}

const handleMinus = () => {
  if (props.dataItem.quantity > 1) {
    props.dataItem.quantity--
  }
}

</script>

<template>
  <div
      class="rounded-xl border border-secondary/40 p-4 lg:p-8 grid grid-cols-12 mb-4 max-lg:max-w-lg max-lg:mx-auto gap-y-4 ">
    <div class="col-span-12 lg:col-span-2">
      <img
          :src="dataItem?.image"
          alt=""
          class="max-lg:w-full lg:w-[180px] h-full rounded-lg object-cover">
    </div>
    <div class="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
      <div class="flex items-center justify-between w-full mb-4">
        <h5 class="font-semibold text-2xl leading-9 text-left line-clamp-2 text-secondary">{{ dataItem?.name }}</h5>
        <button
            @click="removeFromCart(dataItem.product_id)"
            class="rounded-full flex-shrink-0 size-10 p-2.5 group flex items-center justify-center hover:bg-red-200">
          <TrashIcon class="size-full text-[#EF4444]"/>
        </button>
      </div>
      <div class="flex gap-4 mb-6">
        <div
            class="text-gray-400 grid place-content-center border border-secondary rounded-sm px-4 font-medium uppercase text-sm">
          In Stock: <span class="text-secondary">{{ dataItem.stock }}</span></div>
        <NuxtLink :to="{name: 'product_detail', params: {id: dataItem.product_id}}">
          <PrimaryBtn className="max-w-[180px] min-w-[140px] text-base" text="See details" typeColor="secondary-primary"/>
        </NuxtLink>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-4">
          <button
              @click="handleMinus"
              class="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
            <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                 width="18" height="19" viewBox="0 0 18 19" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 9.5H13.5" stroke="" stroke-width="1.6" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </button>
          <input type="text"
                 v-model="dataItem.quantity"
                 readonly
                 class="border border-secondary rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-2 bg-secondary/10  text-center"
                 placeholder="1">
          <button
              @click="handlePlus"
              class="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
            <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                 width="18" height="19" viewBox="0 0 18 19" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M3.75 9.5H14.25M9 14.75V4.25" stroke="" stroke-width="1.6"
                    stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <h6 class="text-secondary font-bold text-xl tracking-wider leading-9 text-right">${{ dataItem?.price }}</h6>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>