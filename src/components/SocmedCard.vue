<template>
  <div class="socmed-card flex justify-center">
    <img
      :src="`src/assets/images/socmed/${image}`"
      alt="socmed1"
      class="h-[281px]"
    />
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>
