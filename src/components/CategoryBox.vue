<template>
  <div class="women-box relative text-center">
    <div class="absolute z-1 bg-shade w-full h-full"></div>
    <div class="content-box absolute px-5 py-[65px] z-2 text-white">
      <h1 class="text-[25px] font-bold mb-5">{{ category }}</h1>
      <p class="font-normal text-lg mb-5">{{ description }}</p>
      <RouterLink
        :to="link"
        class="border-2 border-greyCst bg-transparent px-3 py-2 hover:bg-white hover:text-black"
      >
        Discover More
      </RouterLink>
    </div>
    <img :src="`src/assets/images/${image}`" alt="image1" class="w-full" />
  </div>
</template>

<script setup>
defineProps({
  category: {
    type: String,
  },
  description: {
    type: String,
  },
  link: {
    type: String,
  },
  image: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>
