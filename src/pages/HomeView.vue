<template>
  <section class="mx-auto max-w-7xl px-2 h-[650px]">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-5 mt-[44px]">
      <div class="relative sm:mx-auto md:row-span-2 md:col-span-2">
        <div
          class="text absolute z-1 bg-shade w-full h-full max-w-lg sm:max-w-xl"
        ></div>
        <div
          class="absolute z-2 flex items-center justify-center w-full h-full"
        >
          <div class="content-box text-white px-20">
            <h1
              class="text-2xl font-bold xs:text-[35px] sm:max-md:text-[40px] md:text-[40px] md:leading-[45px] mb-5 lg:text-[56px] lg:leading-[61px]"
            >
              We Are Hexashop
            </h1>
            <p
              class="text-xs font-normal mb-7 md:pr-16 sm:text-sm md:text-base md:pr-4"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button
              class="border-2 border-greyCst bg-transparent text-xs px-2 py-2 xs:px-3 sm:py-2 md:text-lg hover:bg-white hover:text-black"
            >
              Purchase Now
            </button>
          </div>
        </div>
        <img
          src="../assets/images/images.png"
          alt="image1"
          class="w-full h-full max-w-lg sm:max-w-xl object-cover"
        />
      </div>

      <CategoryBox
        v-for="cat in categories"
        :key="cat.id"
        :category="cat.category"
        :image="cat.image"
        :description="cat.desc"
        :link="cat.link"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import CategoryBox from "../components/CategoryBox.vue";

const categories = ref([
  {
    id: 1,
    category: "Women",
    desc: "Lorem Ipsum is simply dummy",
    link: "/women",
    image: "women.png",
  },
  {
    id: 2,
    category: "Men",
    desc: "Lorem Ipsum is simply dummy",
    link: "/men",
    image: "men.png",
  },
  {
    id: 3,
    category: "Kid's",
    desc: "Lorem Ipsum is simply dummy",
    link: "/kids",
    image: "kids.png",
  },
  {
    id: 4,
    category: "Accessories",
    desc: "Lorem Ipsum is simply dummy",
    link: "/accessories",
    image: "accessories.png",
  },
]);
</script>

<style scoped>
@import "../style.css";

@layer components {
  /* nav style */
  .style-md {
    @apply text-lime-500 text-base font-medium;
  }
  .style-lg {
    @apply text-cyan-500 text-lg font-semibold;
  }
  .style-xl {
    @apply text-red-500 text-xl font-bold;
  }
  .style-xl2 {
    @apply text-yellow-500 text-xl font-bold;
  }
  .style-2xl {
    @apply text-indigo-500 text-2xl font-black;
  }
}
</style>
