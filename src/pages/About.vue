<template>
  <section class="about mb-[90px]">
    <div class="container mx-auto py-9 lg:py-[90px] px-0 lg:px-20">
      <h2 class="text-white text-4xl lg:text-[56px] font-bold text-center mb-5">
        About Us
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div
          class="bg-warning px-[42px] py-8 xl:py-[69px] col-span-1 lg:col-span-2"
        >
          <h3 class="about-title">Mission Statement</h3>
          <p class="about-desc">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.orem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s.....
          </p>
        </div>
        <div class="bg-white px-[42px] py-8 xl:py-[69px]">
          <h3 class="about-title">Vision Statement</h3>
          <p class="about-desc">
            rem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen
          </p>
        </div>

        <div class="pt-7 bg-white col-span-1 lg:row-span-2">
          <h3 class="px-6 about-title">Target Market Summary</h3>
          <div class="">
            <img
              src="../assets/images/people walking 1.png"
              alt="target-market"
              class="h-full bg-cover w-full"
            />
          </div>
        </div>

        <div
          class="bg-primary px-[42px] py-8 xl:py-[68px] col-span-1 lg:col-span-2"
        >
          <h3 class="about-title">Core Values</h3>
          <p class="about-desc">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.orem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s.....
          </p>
        </div>
        <div class="bg-warning px-[42px] py-8 xl:py-[68px] lg:col-span-2">
          <h3 class="about-title">Brief Company History</h3>
          <p class="about-desc">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.orem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s.....
          </p>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup>
import Footer from "../components/Footer.vue";
</script>

<style scoped>
@import url("../style.css");
.about {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/images/bg-about.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@layer components {
  .about-title {
    @apply text-black text-4xl font-bold mb-5;
  }

  .about-desc {
    @apply text-black text-sm font-normal;
  }
}
</style>
