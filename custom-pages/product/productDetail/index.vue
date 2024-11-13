<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
import {useCartStore} from "~/stores/useCartStore";

const route = useRoute()
const router = useRouter()
const {addToCart} = useCartStore()

const {data: product} = await useAsyncData(
    'productDetail',
    () => apiServices.get(`/products/${route.params.id}`),
)

const handleAddToCart = () => {
  addToCart({
    product_id: product.value.id,
    name: product.value.name,
    price: product.value.price,
    image: product.value.preview_img_path,
    stock: product.value.stock,
    quantity: 1
  })
}

</script>

<template>
  <div class="text-text-primary body-font overflow-hidden bg-white">
    <div class="container px-5 pt-10 pb-32 mx-auto">
    <div
        @click="router.back()"
         class="pb-6 text-lg text-gray-500 font-medium cursor-pointer hover:text-primary w-max"
    >< Back</div>
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="ecommerce" class="lg:w-1/2 w-full min-h-80 object-cover object-center rounded border border-gray-200"
             :src="product.preview_img_path"
        >
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 space-y-4">
          <div class="text-sm title-font text-gray-500 tracking-widest">{{ product.category.name }}</div>
          <div class="text-gray-900 text-3xl title-font font-medium mb-1">{{ product.name }}</div>
          <div class="bg-gray-200 grid place-content-center size-10 text-secondary font-medium">{{ product.stock }}
          </div>
          <p class="leading-relaxed">{{ product.description }}</p>
          <div class="flex justify-between">
            <span class="title-font font-medium text-2xl text-primary">${{ product.price }}.00</span>
            <PrimaryBtn
                :disabled="product.stock === 0"
                :className="product.stock === 0 ? 'opacity-30 max-w-[200px]' : 'max-w-[200px]'"
                :text="product.stock === 0 ? 'Out of stock' : 'Add to cart'"
                @click="handleAddToCart"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>