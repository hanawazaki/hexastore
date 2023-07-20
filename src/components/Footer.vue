<template>
  <footer class="relative bg-dark">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg-px-8">
      <div class="flex text-white py-[30px] gap-[134px]">
        <div class="logo flex flex-col gap-5">
          <Logo variant="white" />
          <h5 class="text-base font-semibold">
            <span class="font-bold"> Address:</span> Lahore Road, Sheikhupura
          </h5>
          <h5 class="text-base font-semibold">
            <span class="font-bold"> E-mail:</span> Example@gmail.com
          </h5>
          <h5 class="text-base font-semibold">
            <span class="font-bold"> Phone:</span> 0092 356 3656210
          </h5>
        </div>
        <div class="1 flex flex-col gap-5">
          <h5 class="text-base font-bold">Shopping and Categories</h5>
          <a href="#" class="text-sm font-normal hover:underline"
            >Men’s Shopping</a
          >
          <a href="#" class="text-sm font-normal hover:underline"
            >Women’s Shopping</a
          >
          <a href="#" class="text-sm font-normal hover:underline"
            >Kid’s Shopping</a
          >
        </div>
        <div class="1 flex flex-col gap-5">
          <h5 class="text-base font-bold">Useful Links</h5>
          <a href="#" class="text-sm font-normal hover:underline">Homepage</a>
          <a href="#" class="text-sm font-normal hover:underline">About Us</a>
          <a href="#" class="text-sm font-normal hover:underline">Help</a>
          <a href="#" class="text-sm font-normal hover:underline">Contact Us</a>
        </div>
        <div class="1 flex flex-col gap-5">
          <h5 class="text-base font-bold">Help & Information</h5>
          <a href="#" class="text-sm font-normal hover:underline">FAQ’S</a>
          <a href="#" class="text-sm font-normal hover:underline">Shipping</a>
          <a href="#" class="text-sm font-normal hover:underline"
            >Tracking Id</a
          >
        </div>
      </div>
      <div class="copyright flex justify-center py-5">
        <a href="#" class="text-white text-[10px] font-normal"
          >Copyright @ 2023</a
        >
      </div>
    </div>
  </footer>
</template>

<script setup>
import Logo from "../components/Logo.vue";
</script>

<style lang="scss" scoped></style>
