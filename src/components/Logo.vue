<template>
  <div class="flex items-center">
    <div class="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 52 60"
        fill="none"
      >
        <path
          d="M26 0L51.9808 15V45L26 60L0.0192375 45V15L26 0Z"
          :fill="`${variant}`"
        />
      </svg>
      <label
        class="absolute font-bold text-2xl z-10 top-[14px] left-[21px]"
        :class="`text-${variant == 'black' ? 'white' : 'black'}`"
        >H</label
      >
    </div>
    <div class="flex flex-col gap-0">
      <h2
        class="text-lg leading-4 font-bold"
        :class="variant === 'black' ? 'text-black' : 'text-white'"
      >
        HEXASHOP
      </h2>
      <h5 class="text-xs font-normal">ONLINE SHOPPING</h5>
    </div>
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>
