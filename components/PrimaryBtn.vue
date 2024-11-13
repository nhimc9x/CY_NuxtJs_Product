<script setup lang="ts">
import {twMerge} from 'tailwind-merge'

type TypeColor = 'blue-secondary' | 'blue-pink' | 'primary-secondary' | 'secondary-primary'

const props = defineProps({
  text: {
    type: String,
    default: 'Button'
  },
  type: {
    type: String as PropType< 'button' | 'submit' | 'reset' | undefined>,
    default: undefined
  },
  typeColor: {
    type: String as PropType<TypeColor>,
    default: 'primary-secondary'
  },
  textColor: {
    type: String,
    default: 'text-text-primary'
  },
  className: {
    type: String,
    default: ''
  }
})

const handleTypeColor = computed(() => {
  switch (props.typeColor) {
    case 'blue-secondary':
      return {
        parent: 'bg-[#45a1d2]/20 border-[#45a1d2] hover:border-secondary hover:text-[#45a1d2]',
        child: 'bg-secondary/20'
      }
    case 'blue-pink':
      return {
        parent: 'bg-[#80f0ff]/20 border-[#80f0ff] hover:border-[#e84393] hover:text-[#80f0ff]',
        child: 'bg-[#e84393]/20'
      }
    case 'secondary-primary':
      return {
        parent: 'bg-secondary/20 border-secondary hover:border-primary hover:text-secondary',
        child: 'bg-primary/20'
      }
    default:
      return {
        parent: 'bg-primary/20 border-primary hover:border-secondary hover:text-primary',
        child: 'bg-secondary/20'
      }
  }
})

</script>

<template>
  <button
      :type="type"
      :class="twMerge('w-full block text-center hover:bg-transparent p-3 text-xl hover:tracking-widest border font-medium rounded-md relative group overflow-hidden duration-500',
                handleTypeColor?.parent,
                textColor, className)"
  >
            <span
                :class="handleTypeColor?.child"
                class="absolute group-hover:w-[108%] aspect-square ease-in-out w-0 duration-300 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
            </span>
    <span>{{ text }}</span>
  </button>
</template>

<style scoped>

</style>