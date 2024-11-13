<script setup lang="ts">

const props = defineProps({
  dataItem: {
    type: Object,
    required: true
  }
})

const showDetails = ref(false)

const formatDate = computed(() => {
  const date = new Date(props.dataItem.created_at)
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
})

</script>

<template>
  <div v-auto-animate class="flex flex-wrap items-center gap-y-4 py-6 border-b border-gray-200">
    <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
      <dt class="text-base font-medium text-gray-500">Order ID:</dt>
      <dd class="mt-1.5 text-base font-semibold text-gray-900">
        <div class="hover:underline">#{{ dataItem.id }}</div>
      </dd>
    </dl>

    <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
      <dt class="text-base font-medium text-gray-500">Date:</dt>
      <dd class="mt-1.5 text-base font-semibold text-gray-900">{{ formatDate }}</dd>
    </dl>

    <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
      <dt class="text-base font-medium text-gray-500">Price:</dt>
      <dd class="mt-1.5 text-base font-semibold text-primary">${{ dataItem.total }}</dd>
    </dl>

    <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
      <dt class="text-base font-medium text-gray-500">Status:</dt>
      <dd class="me-2 mt-1.5 gap-3 inline-flex items-center rounded bg-primary-light text-primary px-2.5 py-1 text-xs font-medium">
        <div class="size-3 border-[2px] border-gray-200 rounded-full border-t-primary animate-spin"></div>
        <div class="">{{ dataItem.status }}</div>
      </dd>
    </dl>

    <PrimaryBtn @click="showDetails = !showDetails" className="lg:w-auto lg:flex-1 text-sm" text="View details" typeColor="secondary-primary"/>

    <div v-if="showDetails" class="w-full bg-gray-50 rounded-md text-gray-500">
      <div v-for="item in dataItem.order_items" class="grid grid-cols-5 items-center gap-4 p-4">
        <div class="lg:col-span-2 col-span-5">{{ item.name }}</div>
        <div class="text-text-primary">$ {{ item.price }}</div>
        <div class="text-text-primary">x {{ item.quantity }}</div>
        <div class="font-semibold text-primary/70 lg:col-span-1 col-span-3 lg:text-left text-right">$ {{item.total}}</div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>