<template>
  <div class="socmed-card flex justify-center">
    <img :src="imgSocmedPath(image)" alt="socmed1" class="h-[281px]" />
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
  },
});

const imgSocmedPath = (image) => {
  return `./socmed/${image}`;
};
</script>

<style lang="scss" scoped></style>
