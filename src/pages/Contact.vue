<template>
  <section class="contact mb-[90px]">
    <div class="container mx-auto py-9 lg:py-[90px] px-0 lg:px-20">
      <h2
        class="text-white text-4xl lg:text-[56px] font-bold text-center mb-[90px]"
      >
        Get In Touch
      </h2>
      <div class="flex flex-col justify-center md:flex-row gap-5">
        <div
          class="border bg-white w-auto px-9 py-[102px] flex flex-col gap-5 justify-center items-center"
        >
          <img src="../assets/phone.svg" class="contact-img" alt="phone" />
          <h2 class="contact-title text-center">Talk To Sales</h2>
          <p class="contact-desc">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, whe n an unknown printer took a galley of type
            and scrambled it to make a type specimen book.orem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's st andard dummy text ever since the 1500s.....
          </p>
          <a href="#" class="text-xl font-normal"> View all global Members </a>
        </div>
        <div
          class="border bg-white w-auto px-9 py-[102px] flex flex-col gap-5 justify-center items-center"
        >
          <img src="../assets/cs.svg" class="contact-img" alt="phone" />
          <h2 class="contact-title text-center">Contact Customer support</h2>
          <p class="contact-desc">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, whe n an unknown printer took a galley of type
            and scrambled it to make a type specimen book.orem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's st andard dummy text ever since the 1500s.....
          </p>
          <a
            href="#"
            class="text-xl font-normal px-[7px] py-4 border-4 border-black hover:text-white hover:bg-black"
            >Customer Support</a
          >
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
.contact {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/images/bg-about.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.contact-img {
  width: 97px;
}

@layer components {
  .contact-title {
    @apply text-4xl font-semibold;
  }

  .contact-desc {
    @apply text-sm font-normal;
  }
}
</style>
