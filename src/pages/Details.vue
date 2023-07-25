<template>
  <section class="detail">
    <div class="flex flex-col justify-center items-center gap-5 py-[90px]">
      <ProductCard
        name="Classic Spring"
        image="men1.png"
        :price="1900"
        :stars="5"
      />
      <RouterLink
        to="/cart"
        class="px-[7px] py-4 rounded-xl border border-4 border-black hover:bg-black hover:text-white"
      >
        Proceed with Payment
      </RouterLink>
    </div>

    <div class="mb-[90px]">
      <Carousel :items-to-show="3.25" :wrap-around="false">
        <Slide v-for="product in menProduct" :key="product.id">
          <div class="product-card mr-3 w-[400px]">
            <RouterLink :to="`/details/${product.id}`">
              <img
                :src="`src/assets/images/product-men/${product.image}`"
                alt="men1"
                class="h-[445px] w-full object-cover"
              />
            </RouterLink>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
    <Footer></Footer>
  </section>
</template>

<script setup>
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { useRoute } from "vue-router";
import { ref, computed, watch } from "vue";
import ProductCard from "../components/ProductCard.vue";
import Footer from "../components/Footer.vue";

const route = useRoute();
const idProduct = route.params.id;
const productDetail = ref();

const menProduct = [
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
];

const socmed = ref([
  "socmed1.png",
  "socmed2.png",
  "socmed3.png",
  "socmed4.png",
  "socmed5.png",
  "socmed6.png",
]);
</script>

<style lang="scss" scoped></style>
