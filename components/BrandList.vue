<script setup lang="ts">
const logoBrand = ref([
  {
    id: 1,
    src: 'https://www.zarla.com/images/nike-logo-2400x2400-20220504.png?crop=1:1,smart&width=150&dpr=2',
  },
  {
    id: 2,
    src: 'https://www.zarla.com/images/apple-logo-2400x2400-20220512-1.png?crop=1:1,smart&width=150&dpr=2',
  },
  {
    id: 3,
    src: 'https://www.zarla.com/images/zarla-chanel-monogram-logo-2400x2400-20240701.png?crop=1:1,smart&width=150&dpr=2',
  },
  {
    id: 4,
    src: 'https://www.zarla.com/images/wwf-logo-2400x2400-20220518.png?crop=1:1,smart&width=150&dpr=2',
  },
  {
    id: 5,
    src: 'https://www.zarla.com/images/bmw-logo-2400x2400-20220519.png?crop=1:1,smart&width=150&dpr=2',
  },
  {
    id: 6,
    src: 'https://www.zarla.com/images/mercedes-benz-logo-2400x2400-20220513.png?crop=1:1,smart&width=150&dpr=2',
  },
  {
    id: 7,
    src: 'https://www.zarla.com/images/walmart-logo-2400x2400-20220513.png?crop=1:1,smart&width=150&dpr=2',
  },
  {
    id: 8,
    src: 'https://www.zarla.com/images/ebay-logo-2400x2400-20223105.png?crop=1:1,smart&width=150&dpr=2',
  },
  {
    id: 9,
    src: 'https://www.zarla.com/images/olympics-logo-2400x2400-20220519.png?crop=1:1,smart&width=150&dpr=2',
  },
  {
    id: 10,
    src: 'https://www.zarla.com/images/starbucks-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=150&dpr=2',
  },
  {
    id: 11,
    src: 'https://www.zarla.com/images/nike-logo-2400x2400-20220504.png?crop=1:1,smart&width=150&dpr=2',
  },
  {
    id: 12,
    src: 'https://www.zarla.com/images/apple-logo-2400x2400-20220512-1.png?crop=1:1,smart&width=150&dpr=2',
  },
  {
    id: 13,
    src: 'https://www.zarla.com/images/zarla-chanel-monogram-logo-2400x2400-20240701.png?crop=1:1,smart&width=150&dpr=2',
  },
  {
    id: 14,
    src: 'https://www.zarla.com/images/wwf-logo-2400x2400-20220518.png?crop=1:1,smart&width=150&dpr=2',
  },
  {
    id: 15,
    src: 'https://www.zarla.com/images/bmw-logo-2400x2400-20220519.png?crop=1:1,smart&width=150&dpr=2',
  },
  {
    id: 16,
    src: 'https://www.zarla.com/images/mercedes-benz-logo-2400x2400-20220513.png?crop=1:1,smart&width=150&dpr=2',
  },
  {
    id: 17,
    src: 'https://www.zarla.com/images/walmart-logo-2400x2400-20220513.png?crop=1:1,smart&width=150&dpr=2',
  },
  {
    id: 18,
    src: 'https://www.zarla.com/images/ebay-logo-2400x2400-20223105.png?crop=1:1,smart&width=150&dpr=2',
  },
  {
    id: 19,
    src: 'https://www.zarla.com/images/olympics-logo-2400x2400-20220519.png?crop=1:1,smart&width=150&dpr=2',
  },
  {
    id: 20,
    src: 'https://www.zarla.com/images/starbucks-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=150&dpr=2',
  }
])

const shuffleArray = () => {
  logoBrand.value.sort(() => Math.random() - 0.5)
}

let intervalId: any
onMounted(() => {
  intervalId = setInterval(shuffleArray, 4000)
})
onUnmounted(() => {
  clearInterval(intervalId)
})

</script>

<template>
  <div v-auto-animate="{duration: 600}" class="grid sm:grid-cols-5 xs:grid-cols-4 grid-cols-3 gap-6 justify-center px-8">
    <div v-for="logo in logoBrand" :key="logo.id" class="md:size-24 size-20 justify-self-center">
      <img :src="logo.src" class="w-full mx-auto" alt="logo">
    </div>
  </div>
</template>

<style scoped>

</style>