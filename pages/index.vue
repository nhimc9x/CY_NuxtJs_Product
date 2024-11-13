<script setup lang="ts">
import heroesBanner from "~/assets/images/heroes.png";
import videoBanner from "~/assets/images/videobanne.mp4";
import paralaxImg from "~/assets/images/paralax.jpg";
import SubHeadLine from "~/components/SubHeadLine.vue";
import BrandList from "~/components/BrandList.vue";

</script>

<template>
  <div class="">

    <div
        :style="{backgroundImage: `url(${heroesBanner})`}"
        class="md:aspect-video aspect-square bg-cover bg-right bg-no-repeat rounded-xl grid place-content-center overflow-hidden relative"
    >
      <div
          class="absolute h-[200%] backdrop-blur-md animate-slide-right aspect-square bg-secondary-light/50 rounded-full -top-1/2 -left-[52%]">
      </div>
      <div class="md:max-w-[50%] sm:max-w-[80%] max-w-full px-10 space-y-4 relative z-10">
        <div class="sm:text-4xl text-3xl font-bold text-text-primary">Discover Exclusive Deals Every Day!</div>
        <div class="text-gray-600 line-clamp-4">Unbeatable prices on the latest trends and essentials. Shop now for fast delivery,
          top-notch
          customer support, and a seamless shopping experience. Don't miss out—start exploring our collections today!
        </div>
        <NuxtLink :to="{name: 'product'}">
          <PrimaryBtn className="max-w-[300px] my-4" text="Shop Now" typeColor="blue-secondary"/>
        </NuxtLink>
      </div>
    </div>

    <SubHeadLine title="Introduce"/>

    <div class="story featured-mugs w-[96%] xl:w-[78%] mx-auto mb-32 flex lg:gap-6 lg:flex-row gap-10 flex-col">
      <div class="basis-1/2">
        <video autoplay loop muted class="w-full h-full object-cover min-h-[340px]">
          <source :src="videoBanner" type="video/mp4">
        </video>
      </div>

      <div class="basis-1/2 text-center lg:text-left lg:pl-4">
        <div class="text-[28px] leading-10">Even the all-powerful Pointing has no control about the
          blind texts.
        </div>
        <div class="text-gray-500 my-6 leading-7">It is a paradisematic country, in which roasted parts
          of sentences fly into
          your mouth.
          <br> Even the all-powerful Pointing has no control about the blind texts it is an
          almost
          unorthographic life One day however a small line of blind text by the name of Lorem
          Ipsum
          decided to leave for the far World of Grammar.
        </div>
      </div>
    </div>

    <SubHeadLine title="Brands"/>

    <BrandList />

    <SubHeadLine title="Paralax"/>

    <div
        :style="{backgroundImage: `url(${paralaxImg})`}"
        class="h-80 relative w-screen left-[calc(-50vw+50%)] bg-no-repeat bg-center bg-fixed bg-cover mb-20"
    ></div>

    <div id="contact" class="subscribe-us h-[340px] bg-[#1d1f2e] mb-24 flex text-center justify-center">
      <div class="flex flex-col justify-center items-center gap-5 md:w-[68%] w-[80%]">
        <div class="w-full flex items-center justify-center">
          <div class="w-9 h-px bg-gray-700"></div>
          <div class="mx-4 uppercase text-gray-400 font-semibold text-sm tracking-widest text-center">
            SIGN UP AND GET FREE PRODUCT
          </div>
          <div class="w-9 h-px bg-gray-700"></div>
        </div>
        <div class="text-4xl text-white">ECOMMERCE UPDATES</div>
        <div class="flex md:flex-row gap-3 flex-col w-full justify-center items-center">
          <input type="text" placeholder="vuvannhi7703@gmail.com" class="max-w-[324px] w-full h-14 px-6 bg-transparent border-gray-700 border-[1px] hover:border-gray-300 focus:border-gray-300 duration-300 outline-none text-white
                            placeholder:uppercase placeholder:text-xs placeholder:tracking-widest placeholder:font-semibold">
          <div
              class="h-full grid place-content-center px-4 uppercase text-sm font-medium tracking-widest cursor-pointer max-w-[324px] md:w-max w-full bg-white text-black">
            Subscribe
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>