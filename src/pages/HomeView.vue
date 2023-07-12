<template>
  <section class="mx-auto max-w-7xl px-2 h-[650px]">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-5 mt-[44px]">
      <div class="relative md:row-span-2 md:col-span-2">
        <div class="text absolute z-1 bg-shade w-full h-full"></div>
        <div
          class="content-box absolute md:px-[61px] md:py-[180px] z-2 text-white"
        >
          <h1 class="text-2xl md:text-[56px] font-bold mb-5">
            We Are Hexashop
          </h1>
          <p class="font-normal text-lg mb-7 pr-16">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button
            class="border border-2 border-greyCst bg-transparent px-3 py-2 hover:bg-white hover:text-black"
          >
            Purchase Now
          </button>
        </div>
        <img src="../assets/images/images.png" alt="image1" class="w-full" />
      </div>
      <div class="women-box relative text-center">
        <div class="text absolute z-1 bg-shade w-full h-full"></div>
        <div class="content-box absolute px-5 py-[65px] z-2 text-white">
          <h1 class="text-[25px] font-bold mb-5">Women</h1>
          <p class="font-normal text-lg mb-5">Lorem Ipsum is simply dummy</p>
          <RouterLink
            to="/women"
            class="border border-2 border-greyCst bg-transparent px-3 py-2 hover:bg-white hover:text-black"
          >
            Discover More
          </RouterLink>
        </div>
        <img src="../assets/images/women.png" alt="image1" class="w-full" />
      </div>
      <div class="men-box relative text-center">
        <div class="text absolute z-1 bg-shade w-full h-full"></div>
        <div class="content-box absolute px-5 py-[65px] z-2 text-white">
          <h1 class="text-[25px] font-bold mb-5">Men</h1>
          <p class="font-normal text-lg mb-5">Lorem Ipsum is simply dummy</p>
          <RouterLink
            to="/men"
            class="border border-2 border-greyCst bg-transparent px-3 py-2 hover:bg-white hover:text-black"
          >
            Discover More
          </RouterLink>
        </div>
        <img src="../assets/images/men.png" alt="image1" class="w-full" />
      </div>
      <div class="kids-box relative text-center">
        <div class="text absolute z-1 bg-shade w-full h-full"></div>
        <div class="content-box absolute px-5 py-[65px] z-2 text-white">
          <h1 class="text-[25px] font-bold mb-5">Kids</h1>
          <p class="font-normal text-lg mb-5">Lorem Ipsum is simply dummy</p>
          <RouterLink
            to="/kids"
            class="border border-2 border-greyCst bg-transparent px-3 py-2 hover:bg-white hover:text-black"
          >
            Discover More
          </RouterLink>
        </div>
        <img src="../assets/images/kids.png" alt="image1" class="w-full" />
      </div>
      <div class="accessories-box relative text-center">
        <div class="text absolute z-1 bg-shade w-full h-full"></div>
        <div class="content-box absolute px-5 py-[65px] z-2 text-white">
          <h1 class="text-[25px] font-bold mb-5">accessories</h1>
          <p class="font-normal text-lg mb-5">Lorem Ipsum is simply dummy</p>
          <RouterLink
            to="/accessories"
            class="border border-2 border-greyCst bg-transparent px-3 py-2 hover:bg-white hover:text-black"
          >
            Discover More
          </RouterLink>
        </div>
        <img
          src="../assets/images/accessories.png"
          alt="image1"
          class="w-full"
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
