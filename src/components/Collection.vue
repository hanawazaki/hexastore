<template>
  <div class="relative bg-collection mb-[55px] min-h-[500px]">
    <div class="overlay absolute z-1 bg-shade w-full h-full"></div>
    <div class="container absolute z-2">
      <div class="flex flex-row items-center py-[35px] px-8 1440:px-[100px]">
        <div class="photos flex flex-row w-7/12">
          <img
            v-for="image in props.images"
            :key="image"
            :src="imgPath(image)"
            alt="kid-collection-1"
            class="max-h-[430px] m-0"
          />
        </div>

        <div class="text-white w-5/12">
          <h2 class="text-4xl font-bold text-center mb-5">
            {{ props.title }}
          </h2>
          <p class="text-sm font-normal mb-5">
            {{ props.description }}
          </p>

          <div class="flex justify-center">
            <RouterLink
              :to="props.link"
              class="border-2 border-greyCst bg-transparent px-2 py-2 md:button-md lg:button-lg xl:button-xl xl2:button-xl2 hover:bg-white hover:text-black"
            >
              Discover More
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  images: {
    type: Array,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  link: {
    type: String,
  },
});

const imgPath = (image) => {
  return `./collections/${image}`;
};
</script>

<style scoped>
.bg-collection {
  background-image: url("../assets/images/kid-collection-bg.png");
}
</style>
