<template>
  <div class="women-box relative text-center">
    <div class="absolute z-1 bg-shade w-full h-full"></div>
    <!--  -->
    <div
      class="content-box w-full text-white absolute z-2 px-5 top-[50%] translate-y-[-50%] xl:content-box-xl xl2:content-box-xl2"
    >
      <h1 class="text-lg font-normal mb-2 xl:title-xl xl2:title-xl2">
        {{ category }}
      </h1>
      <p class="text-sm font-normal mb-5 xl:desc-xl xl2:desc-xl2">
        {{ description }}
      </p>
      <RouterLink
        :to="link"
        class="border-2 border-greyCst bg-transparent px-2 py-2 md:button-md lg:button-lg xl:button-xl xl2:button-xl2 hover:bg-white hover:text-black"
      >
        Discover More
      </RouterLink>
    </div>
    <!--  -->
    <img :src="`/assets/images/${image}`" alt="image1" class="w-full" />
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

<style scoped>
@import "../style.css";

@layer components {
  /* 1440 */
  .content-box-xl2 {
    @apply w-full px-5 top-[50%] translate-y-[-50%];
  }
  .title-xl2 {
    @apply text-[25px] font-bold mb-5;
  }
  .desc-xl2 {
    @apply font-normal text-lg mb-5;
  }

  .button-xl2 {
    @apply text-lg font-bold px-3 py-2;
  }

  /* 1280 */
  .content-box-xl {
    @apply w-full px-5 top-[50%] translate-y-[-50%];
  }
  .title-xl {
    @apply text-[20px] font-semibold mb-3;
  }
  .desc-xl {
    @apply font-normal text-lg mb-5;
  }
  .button-xl {
    @apply text-lg font-normal px-3 py-2;
  }

  /* 1024 */
  .content-box-lg {
    @apply px-5 top-[50%] translate-y-[-50%];
  }
  .title-lg {
    @apply text-[20px] font-semibold mb-3;
  }
  .desc-lg {
    @apply font-normal text-lg mb-5;
  }
  .button-lg {
    @apply text-base font-normal px-2 py-2;
  }

  /* 768 */
  .button-md {
    @apply text-sm font-normal px-2 py-2;
  }
}
</style>
