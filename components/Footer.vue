<script setup lang="ts">
import imgLogo from "~/assets/images/Shopping.png";

</script>

<template>
  <div class="wrapper">
    <div class="mx-auto pb-24">
      <div class="flex md:flex-row flex-col md:text-left text-center md:gap-4 gap-10">
        <div class="basis-5/12 flex flex-col items-center md:items-start md:gap-0 gap-y-4">
          <div class="max-w-[160px] h-full max-auto">
            <img :src="imgLogo" alt="logo" class="max-auto">
          </div>
          <div class="text-sm text-gray-400 mb-2">Delivering the best asss life since 1996. From coffee geeks to the
            real ones.
          </div>
          <div class="text-sm text-gray-400 mt-auto">Vuvannhi7703. © 2024</div>
        </div>
        <div class="basis-2/12">
          <div class="mb-6 uppercase text-sm text-gray-500 font-medium tracking-widest">Menu</div>
          <ul class="text-sm text-gray-400 flex flex-col gap-2">
            <li>
              <NuxtLink :to="{name: 'product'}" class="hover:text-primary">Products</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{name: 'profile'}" class="hover:text-primary">Profile</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{name: 'cart'}" class="hover:text-primary">Cart</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{name: 'checkout'}" class="hover:text-primary">Checkout</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{name: 'order'}" class="hover:text-primary">Order</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="basis-2/12">
          <div class="mb-6 uppercase text-sm text-gray-500 font-medium tracking-widest">Follow Us</div>
          <ul class="text-sm text-gray-400 flex flex-col gap-2">
            <li>
              <a href="" class="hover:text-primary">Facebook</a>
            </li>
            <li>
              <a href="" class="hover:text-primary">Instagram</a>
            </li>
            <li>
              <a href="" class="hover:text-primary">Pinterest</a>
            </li>
            <li>
              <a href="" class="hover:text-primary">Twitter</a>
            </li>
          </ul>
        </div>
        <div class="basis-3/12 flex flex-col">
          <div class="mb-6 uppercase text-sm text-gray-500 font-medium tracking-widest">Contact Us</div>
          <div class="text-sm text-gray-400 mb-4">We're Always Happy to Help</div>
          <div class="mb-2"><a href="" class="hover:text-primary text-gray-500">vuvannhi7703@gmail.com</a></div>
          <div class="text-sm text-gray-400 hover:text-primary mt-auto">Powered by Vuvannhi Author</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>