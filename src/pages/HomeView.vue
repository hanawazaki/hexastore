<template>
  <section class="hero mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="flex flex-col sm:flex-row gap-5 my-[44px]">
      <div class="relative mx-auto w-12/12 md:w-6/12">
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
              class="text-xs font-normal mb-7 lg:pr-16 sm:text-sm md:text-base"
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

      <div class="mx-auto w-12/12 md:w-6/12 grid grid-cols-2 grid-rows-2 gap-5">
        <CategoryBox
          v-for="cat in categories"
          :key="cat.id"
          :category="cat.category"
          :image="cat.image"
          :description="cat.desc"
          :link="cat.link"
        />
      </div>
    </div>
  </section>
  <section class="products">
    <div class="min-h-screen pt-[90px] max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <!-- men product -->
      <ProductSlider
        category="Men's Latest"
        description="Lorem Ipsum is simply dummy text of the printingand typesetting industry."
        :data="menProduct"
      />
      <!-- woman product -->
      <ProductSlider
        category="Women's Latest"
        description="Lorem Ipsum is simply dummy text of the printingand typesetting industry."
        :data="womenProduct"
      />
      <!-- kids product -->
      <ProductSlider
        category="Kid's Latest"
        description="Lorem Ipsum is simply dummy text of the printingand typesetting industry."
        :data="kidProduct"
      />
    </div>
  </section>
  <section class="our-product bg-white">
    <div
      class="flex flex-col gap-5 lg:flex-row items-center max-w-7xl px-2 sm:px-6 lg:px-8 mx-auto my-[30px]"
    >
      <div class="our-product-text lg:pr-[105px] w-full lg:w-6/12">
        <h2 class="text-4xl font-bold mb-5">Explore Our Products</h2>
        <p class="text-sm font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem IpsuLorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          IpsuLorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsu
        </p>
      </div>
      <div class="w-full lg:w-6/12">
        <div class="sm:min-[640px]:grid-cols-2 grid grid-cols-1 gap-5">
          <!--  -->
          <div
            class="our-product-image1 border flex items-center justify-center"
          >
            <div class="text">
              <h3 class="text-4xl font-bold">Leather Bags</h3>
              <p class="text-sm font-normal">
                Lorem Ipsum is simply dummy text
              </p>
            </div>
          </div>
          <!--  -->
          <div class="our-product-image2 border"></div>
          <!--  -->
          <div class="our-product-image3 border"></div>
          <!--  -->
          <div
            class="our-product-image4 border flex items-center justify-center"
          >
            <div class="text">
              <h3 class="text-4xl font-bold">Different Types</h3>
              <p class="text-sm font-normal">
                Lorem Ipsum is simply dummy text
              </p>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
  </section>
  <section class="socmed bg-[#E9E9E9] py-[90px]">
    <div class="max-w-7xl px-2 sm:px-6 lg:px-8 mx-auto my-[30px]">
      <h1 class="text-4xl font-bold mb-5">Social Media</h1>
      <h6 class="text-sm font-normal mb-5">
        Lorem Ipsum is simply dummy text of the printingand typesetting
        industry.
      </h6>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5"
      >
        <SocmedCard v-for="image in socmed" :key="image" :image="image" />
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup>
import { ref } from "vue";
import CategoryBox from "../components/CategoryBox.vue";
import SocmedCard from "../components/SocmedCard.vue";
import ProductSlider from "../components/ProductSlider.vue";
import Footer from "../components/Footer.vue";

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

const menProduct = ref([
  {
    id: 1,
    name: "product 1",
    price: 1200,
    image: "men1.png",
    stars: 4.5,
  },
  {
    id: 2,
    name: "product 2",
    price: 900,
    image: "men2.png",
    stars: 3.5,
  },
  {
    id: 3,
    name: "product 3",
    price: 500,
    image: "men3.png",
    stars: 2.5,
  },
  {
    id: 4,
    name: "product 4",
    price: 1500,
    image: "men4.png",
    stars: 5.0,
  },
  {
    id: 5,
    name: "product 5",
    price: 400,
    image: "men5.png",
    stars: 3.5,
  },
  {
    id: 6,
    name: "product 6",
    price: 1200,
    image: "men6.png",
    stars: 4.5,
  },
]);

const womenProduct = ref([
  {
    id: 1,
    name: "product 1",
    price: 1200,
    image: "women1.png",
    stars: 4.5,
  },
  {
    id: 2,
    name: "product 2",
    price: 900,
    image: "women2.png",
    stars: 3.5,
  },
  {
    id: 3,
    name: "product 3",
    price: 500,
    image: "women3.png",
    stars: 2.5,
  },
  {
    id: 4,
    name: "product 4",
    price: 1500,
    image: "women4.png",
    stars: 5.0,
  },
  {
    id: 5,
    name: "product 5",
    price: 400,
    image: "women5.png",
    stars: 3.5,
  },
  {
    id: 6,
    name: "product 6",
    price: 1200,
    image: "women6.png",
    stars: 4.5,
  },
]);

const kidProduct = ref([
  {
    id: 1,
    name: "product 1",
    price: 1200,
    image: "kid1.png",
    stars: 4.5,
  },
  {
    id: 2,
    name: "product 2",
    price: 900,
    image: "kid2.png",
    stars: 3.5,
  },
  {
    id: 3,
    name: "product 3",
    price: 500,
    image: "kid3.png",
    stars: 2.5,
  },
  {
    id: 4,
    name: "product 4",
    price: 1500,
    image: "kid4.png",
    stars: 5.0,
  },
  {
    id: 5,
    name: "product 5",
    price: 400,
    image: "kid5.png",
    stars: 3.5,
  },
  {
    id: 6,
    name: "product 6",
    price: 1200,
    image: "kid6.png",
    stars: 4.5,
  },
]);

const socmed = ref([
  "socmed1.png",
  "socmed2.png",
  "socmed3.png",
  "socmed4.png",
  "socmed5.png",
  "socmed6.png",
]);
</script>

<style scoped>
@import "../style.css";

.products {
  background: #e9e9e9;
  box-shadow: 2px 2px 24px 0px rgba(0, 0, 0, 0.25);
}

.our-product-image1 {
  height: 449px;
  background: url("../../our-product/img-prod1.png");
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
}
.our-product-image2 {
  height: 449px;
  background: url("../../our-product/img-prod2.png");
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
}
.our-product-image3 {
  height: 449px;
  background: url("../../our-product/img-prod3.png");
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
}
.our-product-image4 {
  height: 449px;
  background: url("../../our-product/img-prod4.png");
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
