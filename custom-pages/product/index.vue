<script setup lang="ts">
import InputForm from "~/custom-pages/auth/components/InputForm.vue";
import {BeakerIcon} from '@heroicons/vue/24/solid'

const route = useRoute()
const router = useRouter()

definePageMeta({
  middleware: 'auth'
})

const currentPage = ref(1)
const currentData = ref([])
const queryProducts = ref({...route.query})
const containerProducts = ref(null)
const totalPage = ref(1)
const isSetUpdate = ref(false)
const isShowFilter = ref(false)
const filterValue = ref({
  name: '',
  min_price: 0,
  max_price: 0,
  category_id: 0
})

const {data: productData, status, refresh} = await useAsyncData(
    'products',
    () => {
      return apiServices.get('/products', {
        query: {
          page: currentPage.value,
          ...queryProducts.value
        }
      })
    }
)

const {data: categoryData} = await useAsyncData(
    'categories',
    () => apiServices.get('/categories')
)

const handleFilter = async () => {
  const query = {}
  if (filterValue.value.name) query.name = filterValue.value.name
  if (filterValue.value.min_price) query.min_price = filterValue.value.min_price
  if (filterValue.value.max_price) query.max_price = filterValue.value.max_price
  if (filterValue.value.category_id) query.category_id = filterValue.value.category_id
  await router.push({query})
}

const resetFilter = () => {
  filterValue.value = {
    name: '',
    min_price: 0,
    max_price: 0,
    category_id: 0
  }
}

watch(() => productData.value, (newValue) => {
  totalPage.value = newValue?.last_page
  if (newValue?.length !== 0) {
    currentData.value.push(...newValue?.data)
  }
}, {deep: true, immediate: true})

watch(() => route.query, (newValue) => {
  if (newValue) {
    queryProducts.value = newValue
    currentPage.value = 1
    currentData.value = []
    refresh()
  }
}, {deep: true})

const isPending = computed(() => status.value === 'pending')

const handleScroll = () => {
  if (isPending.value) return
  let element = containerProducts.value
  if (element.getBoundingClientRect().bottom < window.innerHeight) {
    if (currentPage.value > totalPage.value) {
      isSetUpdate.value = true
      return
    }
    currentPage.value++
    refresh()
  }
}

watch(() => isSetUpdate.value, (newValue) => {
  if (newValue) {
    setTimeout(() => {
      refresh()
      isSetUpdate.value = false
    }, 2000)
  }
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
  <div class="mt-20 mb-32 ">
    <ScrollToTop/>
    <div class="text-3xl font-semibold text-text-primary">Products</div>

    <div v-auto-animate
         :class="isShowFilter ? 'w-full' : 'w-max'"
         class="mb-8 bg-primary-light rounded-md">
      <div @click="isShowFilter = !isShowFilter" class="flex items-center gap-4 px-8 py-4 cursor-pointer my-4">
        <BeakerIcon class="size-8 text-text-primary"/>
        <div class="text-text-primary text-2xl">Filter</div>
      </div>
      <form @submit.prevent="handleFilter" v-if="isShowFilter" class="px-8 pb-8 w-full">
        <InputForm type="text" placeholder="Product name" v-model.trim="filterValue.name"/>
        <div class="flex gap-4">
          <InputForm type="number" placeholder="Min price" v-model.number="filterValue.min_price"/>
          <InputForm type="number" placeholder="Max price" v-model.number="filterValue.max_price"/>
        </div>
        <select
            v-model="filterValue.category_id"
            class="w-full px-4 py-3.5 text-lg outline-[#e84393] focus:border-[#e84393] bg-white/20 border border-[#86f0fd] rounded-md mb-4">
          <option :value="0">All</option>
          <option v-for="item in categoryData.data" :key="item.id" :value="item.id">{{ item.name }}</option>
        </select>
        <div class="flex gap-6">
          <PrimaryBtn @click="resetFilter" text="Reset" typeColor="primary-secondary"/>
          <PrimaryBtn type="submit" text="Filter" typeColor="secondary-primary"/>
        </div>
      </form>
    </div>

    <div v-auto-animate>
      <div
          v-auto-animate
          v-if="currentData.length !== 0"
          ref="containerProducts"
          class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-x-6 gap-x-8 gap-y-10"
      >
        <ProductCard v-for="item in currentData" :key="item?.id" :dataItem="item"/>
      </div>

      <div v-if="isPending" class="flex justify-center items-center h-40">
        <div class="size-16 border-4 rounded-full border-secondary-light border-t-primary animate-spin"></div>
      </div>
    </div>


    <div class="min-h-[20vh] grid place-content-center text-2xl font-semibold" v-if="currentData.length === 0">
      No product found
    </div>


  </div>
</template>

<style scoped>

</style>