<script setup lang="ts">
import { useCartStore } from '~/stores/useCartStore'

const {addToCart} = useCartStore()

const props = defineProps({
  dataItem: {
    type: Object,
    required: true
  }
})

const handleAddToCart = () => {
  addToCart({
    product_id: props.dataItem.id,
    name: props.dataItem.name,
    price: props.dataItem.price,
    image: props.dataItem.preview_img_path,
    stock: props.dataItem.stock,
    quantity: 1
  })
}

</script>

<template>
  <div class="max-w-[400px] mx-auto">
    <div
        :style="{backgroundImage: `url(${dataItem.preview_img_path})`}"
        class="h-[380px] bg-cover bg-no-repeat bg-center relative"
    >
      <div
          class="w-full h-full hover:bg-black/20 transition-all duration-300 ease-in-out relative group overflow-hidden">
        <div class="size-11 bg-white text-lg font-medium grid place-content-center -top-12 group-hover:top-1 duration-300 right-1 absolute">{{dataItem.stock}}</div>
        <button
            :disabled="dataItem.stock === 0"
            @click="handleAddToCart"
            :class="dataItem.stock === 0 ? 'bg-gray-700' : 'bg-white'"
            class="select-none py-4 tracking-wider uppercase text-center font-medium translate-y-4 transition-all duration-500 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 absolute bottom-4 left-[4%] w-[92%] px-2">
          {{ dataItem.stock === 0 ? 'Out of stock' : 'Add to cart' }}
        </button>
      </div>
    </div>
    <NuxtLink :to="{name: 'product_detail', params: {id: dataItem.id}}" class="text-center block mt-8">
      <div class="text-xl font-medium text-text-primary mb-3 group-hover:text-primary duration-300">
        {{ dataItem.name }}
      </div>
      <div class="">
        <span class="text-gray-400">$ {{ dataItem.price }}.00 USD</span>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>