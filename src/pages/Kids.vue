<template>
  <section class="mx-auto max-w-7xl px-2">
    <!-- latest -->
    <div class="kid-product py-[90px]">
      <h1 class="text-4xl font-bold mb-5">Kid's Latest</h1>
      <h6 class="text-sm font-normal mb-5">
        Lorem Ipsum is simply dummy text of the printingand typesetting
        industry.
      </h6>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div
          class="product-card w-auto"
          v-for="product in latestProd"
          :key="product.id"
        >
          <img
            :src="imgPath(product.image)"
            alt="kid1"
            class="h-[445px] w-full object-cover"
          />
          <div class="flex flex-col px-3 py-6 bg-primary">
            <div class="flex flex-row justify-between items-center">
              <RouterLink :to="`/details/${product.id}`">
                <h3 class="text-[22px] font-medium">{{ product.name }}</h3>
              </RouterLink>
              <img src="../assets/stars.svg" alt="stars" />
            </div>
            <div class="flex flex-row justify-between items-baseline">
              <h3 class="text-lg font-normal">${{ product.price }}</h3>
              <div class="flex flex-row gap-4 items-baseline">
                <!-- likes btn -->
                <button class="bg-transparent">
                  <svg
                    width="27"
                    height="37"
                    viewBox="0 0 27 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.25 14.1719C3.79875 14.1719 1 16.8838 1 20.2296C1 22.9305 2.09375 29.3408 12.86 35.8207C13.0529 35.9356 13.2743 35.9964 13.5 35.9964C13.7257 35.9964 13.9471 35.9356 14.14 35.8207C24.9062 29.3408 26 22.9305 26 20.2296C26 16.8838 23.2012 14.1719 19.75 14.1719C16.2988 14.1719 13.5 17.8432 13.5 17.8432C13.5 17.8432 10.7012 14.1719 7.25 14.1719Z"
                      stroke="#FF0000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <!--  -->
                <RouterLink to="/cart" class="bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="22"
                    viewBox="0 0 25 22"
                    fill="none"
                  >
                    <path
                      d="M0 0.733333C0 0.538841 0.0878001 0.352315 0.244085 0.214788C0.40037 0.0772617 0.612338 0 0.833359 0H3.33344C3.51933 4.51902e-05 3.69986 0.054781 3.84634 0.155503C3.99281 0.256225 4.09681 0.39715 4.14179 0.555867L4.81682 2.93333H24.1674C24.2898 2.93343 24.4106 2.95724 24.5213 3.00307C24.6321 3.04891 24.73 3.11563 24.8081 3.19851C24.8862 3.28139 24.9426 3.37839 24.9733 3.48263C25.004 3.58686 25.0083 3.69576 24.9858 3.8016L22.4857 15.5349C22.4499 15.703 22.3486 15.8548 22.1992 15.964C22.0497 16.0733 21.8616 16.1332 21.6673 16.1333H6.66687C6.47259 16.1332 6.28447 16.0733 6.13504 15.964C5.98561 15.8548 5.88426 15.703 5.84851 15.5349L3.3501 3.8236L2.68342 1.46667H0.833359C0.612338 1.46667 0.40037 1.38941 0.244085 1.25188C0.0878001 1.11435 0 0.927825 0 0.733333ZM5.17016 4.4L7.35856 14.6667H20.9756L23.164 4.4H5.17016ZM8.33359 16.1333C7.44951 16.1333 6.60164 16.4424 5.9765 16.9925C5.35135 17.5426 5.00015 18.2887 5.00015 19.0667C5.00015 19.8446 5.35135 20.5907 5.9765 21.1408C6.60164 21.691 7.44951 22 8.33359 22C9.21767 22 10.0655 21.691 10.6907 21.1408C11.3158 20.5907 11.667 19.8446 11.667 19.0667C11.667 18.2887 11.3158 17.5426 10.6907 16.9925C10.0655 16.4424 9.21767 16.1333 8.33359 16.1333ZM20.0006 16.1333C19.1165 16.1333 18.2687 16.4424 17.6435 16.9925C17.0184 17.5426 16.6672 18.2887 16.6672 19.0667C16.6672 19.8446 17.0184 20.5907 17.6435 21.1408C18.2687 21.691 19.1165 22 20.0006 22C20.8847 22 21.7326 21.691 22.3577 21.1408C22.9829 20.5907 23.3341 19.8446 23.3341 19.0667C23.3341 18.2887 22.9829 17.5426 22.3577 16.9925C21.7326 16.4424 20.8847 16.1333 20.0006 16.1333ZM8.33359 17.6C8.77563 17.6 9.19957 17.7545 9.51214 18.0296C9.82471 18.3046 10.0003 18.6777 10.0003 19.0667C10.0003 19.4557 9.82471 19.8287 9.51214 20.1038C9.19957 20.3788 8.77563 20.5333 8.33359 20.5333C7.89155 20.5333 7.46761 20.3788 7.15504 20.1038C6.84247 19.8287 6.66687 19.4557 6.66687 19.0667C6.66687 18.6777 6.84247 18.3046 7.15504 18.0296C7.46761 17.7545 7.89155 17.6 8.33359 17.6ZM20.0006 17.6C20.4427 17.6 20.8666 17.7545 21.1792 18.0296C21.4917 18.3046 21.6673 18.6777 21.6673 19.0667C21.6673 19.4557 21.4917 19.8287 21.1792 20.1038C20.8666 20.3788 20.4427 20.5333 20.0006 20.5333C19.5586 20.5333 19.1346 20.3788 18.8221 20.1038C18.5095 19.8287 18.3339 19.4557 18.3339 19.0667C18.3339 18.6777 18.5095 18.3046 18.8221 18.0296C19.1346 17.7545 19.5586 17.6 20.0006 17.6Z"
                      fill="black"
                    />
                  </svg>
                </RouterLink>
                <!-- cart -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- featured -->
    <div class="kid-product pb-[90px]">
      <h1 class="text-4xl font-bold mb-5">Featured</h1>
      <h6 class="text-sm font-normal mb-5">
        Lorem Ipsum is simply dummy text of the printingand typesetting
        industry.
      </h6>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div
          class="product-card w-auto"
          v-for="product in featuredProd"
          :key="product.id"
        >
          <img
            :src="imgPath(product.image)"
            alt="kid1"
            class="h-[445px] w-full object-cover"
          />
          <div class="flex flex-col px-3 py-6 bg-primary">
            <div class="flex flex-row justify-between items-center">
              <RouterLink :to="`/details/${product.id}`">
                <h3 class="text-[22px] font-medium">{{ product.name }}</h3>
              </RouterLink>
              <img src="../assets/stars.svg" alt="stars" />
            </div>
            <div class="flex flex-row justify-between items-baseline">
              <h3 class="text-lg font-normal">${{ product.price }}</h3>
              <div class="flex flex-row gap-4 items-baseline">
                <!-- likes btn -->
                <button class="bg-transparent">
                  <svg
                    width="27"
                    height="37"
                    viewBox="0 0 27 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.25 14.1719C3.79875 14.1719 1 16.8838 1 20.2296C1 22.9305 2.09375 29.3408 12.86 35.8207C13.0529 35.9356 13.2743 35.9964 13.5 35.9964C13.7257 35.9964 13.9471 35.9356 14.14 35.8207C24.9062 29.3408 26 22.9305 26 20.2296C26 16.8838 23.2012 14.1719 19.75 14.1719C16.2988 14.1719 13.5 17.8432 13.5 17.8432C13.5 17.8432 10.7012 14.1719 7.25 14.1719Z"
                      stroke="#FF0000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <!--  -->
                <RouterLink to="/cart" class="bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="22"
                    viewBox="0 0 25 22"
                    fill="none"
                  >
                    <path
                      d="M0 0.733333C0 0.538841 0.0878001 0.352315 0.244085 0.214788C0.40037 0.0772617 0.612338 0 0.833359 0H3.33344C3.51933 4.51902e-05 3.69986 0.054781 3.84634 0.155503C3.99281 0.256225 4.09681 0.39715 4.14179 0.555867L4.81682 2.93333H24.1674C24.2898 2.93343 24.4106 2.95724 24.5213 3.00307C24.6321 3.04891 24.73 3.11563 24.8081 3.19851C24.8862 3.28139 24.9426 3.37839 24.9733 3.48263C25.004 3.58686 25.0083 3.69576 24.9858 3.8016L22.4857 15.5349C22.4499 15.703 22.3486 15.8548 22.1992 15.964C22.0497 16.0733 21.8616 16.1332 21.6673 16.1333H6.66687C6.47259 16.1332 6.28447 16.0733 6.13504 15.964C5.98561 15.8548 5.88426 15.703 5.84851 15.5349L3.3501 3.8236L2.68342 1.46667H0.833359C0.612338 1.46667 0.40037 1.38941 0.244085 1.25188C0.0878001 1.11435 0 0.927825 0 0.733333ZM5.17016 4.4L7.35856 14.6667H20.9756L23.164 4.4H5.17016ZM8.33359 16.1333C7.44951 16.1333 6.60164 16.4424 5.9765 16.9925C5.35135 17.5426 5.00015 18.2887 5.00015 19.0667C5.00015 19.8446 5.35135 20.5907 5.9765 21.1408C6.60164 21.691 7.44951 22 8.33359 22C9.21767 22 10.0655 21.691 10.6907 21.1408C11.3158 20.5907 11.667 19.8446 11.667 19.0667C11.667 18.2887 11.3158 17.5426 10.6907 16.9925C10.0655 16.4424 9.21767 16.1333 8.33359 16.1333ZM20.0006 16.1333C19.1165 16.1333 18.2687 16.4424 17.6435 16.9925C17.0184 17.5426 16.6672 18.2887 16.6672 19.0667C16.6672 19.8446 17.0184 20.5907 17.6435 21.1408C18.2687 21.691 19.1165 22 20.0006 22C20.8847 22 21.7326 21.691 22.3577 21.1408C22.9829 20.5907 23.3341 19.8446 23.3341 19.0667C23.3341 18.2887 22.9829 17.5426 22.3577 16.9925C21.7326 16.4424 20.8847 16.1333 20.0006 16.1333ZM8.33359 17.6C8.77563 17.6 9.19957 17.7545 9.51214 18.0296C9.82471 18.3046 10.0003 18.6777 10.0003 19.0667C10.0003 19.4557 9.82471 19.8287 9.51214 20.1038C9.19957 20.3788 8.77563 20.5333 8.33359 20.5333C7.89155 20.5333 7.46761 20.3788 7.15504 20.1038C6.84247 19.8287 6.66687 19.4557 6.66687 19.0667C6.66687 18.6777 6.84247 18.3046 7.15504 18.0296C7.46761 17.7545 7.89155 17.6 8.33359 17.6ZM20.0006 17.6C20.4427 17.6 20.8666 17.7545 21.1792 18.0296C21.4917 18.3046 21.6673 18.6777 21.6673 19.0667C21.6673 19.4557 21.4917 19.8287 21.1792 20.1038C20.8666 20.3788 20.4427 20.5333 20.0006 20.5333C19.5586 20.5333 19.1346 20.3788 18.8221 20.1038C18.5095 19.8287 18.3339 19.4557 18.3339 19.0667C18.3339 18.6777 18.5095 18.3046 18.8221 18.0296C19.1346 17.7545 19.5586 17.6 20.0006 17.6Z"
                      fill="black"
                    />
                  </svg>
                </RouterLink>
                <!-- cart -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Collection
      :title="collection.title"
      :description="collection.description"
      :images="collection.images"
      :link="collection.link"
    />
    <!-- casual -->
    <div class="kid-product pb-[90px]">
      <h1 class="text-4xl font-bold mb-5">Casual</h1>
      <h6 class="text-sm font-normal mb-5">
        Lorem Ipsum is simply dummy text of the printingand typesetting
        industry.
      </h6>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div
          class="product-card w-auto"
          v-for="product in casualProd"
          :key="product.id"
        >
          <img
            :src="imgPath(product.image)"
            alt="kid1"
            class="h-[445px] w-full object-cover"
          />
          <div class="flex flex-col px-3 py-6 bg-primary">
            <div class="flex flex-row justify-between items-center">
              <RouterLink :to="`/details/${product.id}`">
                <h3 class="text-[22px] font-medium">{{ product.name }}</h3>
              </RouterLink>
              <img src="../assets/stars.svg" alt="stars" />
            </div>
            <div class="flex flex-row justify-between items-baseline">
              <h3 class="text-lg font-normal">${{ product.price }}</h3>
              <div class="flex flex-row gap-4 items-baseline">
                <!-- likes btn -->
                <button class="bg-transparent">
                  <svg
                    width="27"
                    height="37"
                    viewBox="0 0 27 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.25 14.1719C3.79875 14.1719 1 16.8838 1 20.2296C1 22.9305 2.09375 29.3408 12.86 35.8207C13.0529 35.9356 13.2743 35.9964 13.5 35.9964C13.7257 35.9964 13.9471 35.9356 14.14 35.8207C24.9062 29.3408 26 22.9305 26 20.2296C26 16.8838 23.2012 14.1719 19.75 14.1719C16.2988 14.1719 13.5 17.8432 13.5 17.8432C13.5 17.8432 10.7012 14.1719 7.25 14.1719Z"
                      stroke="#FF0000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <!--  -->
                <RouterLink to="/cart" class="bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="22"
                    viewBox="0 0 25 22"
                    fill="none"
                  >
                    <path
                      d="M0 0.733333C0 0.538841 0.0878001 0.352315 0.244085 0.214788C0.40037 0.0772617 0.612338 0 0.833359 0H3.33344C3.51933 4.51902e-05 3.69986 0.054781 3.84634 0.155503C3.99281 0.256225 4.09681 0.39715 4.14179 0.555867L4.81682 2.93333H24.1674C24.2898 2.93343 24.4106 2.95724 24.5213 3.00307C24.6321 3.04891 24.73 3.11563 24.8081 3.19851C24.8862 3.28139 24.9426 3.37839 24.9733 3.48263C25.004 3.58686 25.0083 3.69576 24.9858 3.8016L22.4857 15.5349C22.4499 15.703 22.3486 15.8548 22.1992 15.964C22.0497 16.0733 21.8616 16.1332 21.6673 16.1333H6.66687C6.47259 16.1332 6.28447 16.0733 6.13504 15.964C5.98561 15.8548 5.88426 15.703 5.84851 15.5349L3.3501 3.8236L2.68342 1.46667H0.833359C0.612338 1.46667 0.40037 1.38941 0.244085 1.25188C0.0878001 1.11435 0 0.927825 0 0.733333ZM5.17016 4.4L7.35856 14.6667H20.9756L23.164 4.4H5.17016ZM8.33359 16.1333C7.44951 16.1333 6.60164 16.4424 5.9765 16.9925C5.35135 17.5426 5.00015 18.2887 5.00015 19.0667C5.00015 19.8446 5.35135 20.5907 5.9765 21.1408C6.60164 21.691 7.44951 22 8.33359 22C9.21767 22 10.0655 21.691 10.6907 21.1408C11.3158 20.5907 11.667 19.8446 11.667 19.0667C11.667 18.2887 11.3158 17.5426 10.6907 16.9925C10.0655 16.4424 9.21767 16.1333 8.33359 16.1333ZM20.0006 16.1333C19.1165 16.1333 18.2687 16.4424 17.6435 16.9925C17.0184 17.5426 16.6672 18.2887 16.6672 19.0667C16.6672 19.8446 17.0184 20.5907 17.6435 21.1408C18.2687 21.691 19.1165 22 20.0006 22C20.8847 22 21.7326 21.691 22.3577 21.1408C22.9829 20.5907 23.3341 19.8446 23.3341 19.0667C23.3341 18.2887 22.9829 17.5426 22.3577 16.9925C21.7326 16.4424 20.8847 16.1333 20.0006 16.1333ZM8.33359 17.6C8.77563 17.6 9.19957 17.7545 9.51214 18.0296C9.82471 18.3046 10.0003 18.6777 10.0003 19.0667C10.0003 19.4557 9.82471 19.8287 9.51214 20.1038C9.19957 20.3788 8.77563 20.5333 8.33359 20.5333C7.89155 20.5333 7.46761 20.3788 7.15504 20.1038C6.84247 19.8287 6.66687 19.4557 6.66687 19.0667C6.66687 18.6777 6.84247 18.3046 7.15504 18.0296C7.46761 17.7545 7.89155 17.6 8.33359 17.6ZM20.0006 17.6C20.4427 17.6 20.8666 17.7545 21.1792 18.0296C21.4917 18.3046 21.6673 18.6777 21.6673 19.0667C21.6673 19.4557 21.4917 19.8287 21.1792 20.1038C20.8666 20.3788 20.4427 20.5333 20.0006 20.5333C19.5586 20.5333 19.1346 20.3788 18.8221 20.1038C18.5095 19.8287 18.3339 19.4557 18.3339 19.0667C18.3339 18.6777 18.5095 18.3046 18.8221 18.0296C19.1346 17.7545 19.5586 17.6 20.0006 17.6Z"
                      fill="black"
                    />
                  </svg>
                </RouterLink>
                <!-- cart -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Collection
    :title="womenCollection.title"
    :description="womenCollection.description"
    :images="womenCollection.images"
    :link="womenCollection.link"
  />
  <Footer />
</template>

<script setup>
import { ref, onMounted } from "vue";
import Footer from "../components/Footer.vue";
import Collection from "../components/Collection.vue";
import SocmedCard from "../components/SocmedCard.vue";

const casualProd = ref([]);
const featuredProd = ref([]);
const latestProd = ref([]);
const collection = ref({
  images: ["men-collection1.png", "men-collection2.png"],
  title: "Men's Collection",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  link: "/men",
});

const womenCollection = ref({
  images: ["women-collection1.png", "women-collection2.png"],
  title: "Women's Collection",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  link: "/women",
});

const kidProduct = ref([
  {
    id: 1,
    name: "product 1",
    price: 1200,
    image: "kid1.png",
    stars: 4.5,
    category: "latest",
    isFeatured: true,
  },
  {
    id: 2,
    name: "product 2",
    price: 900,
    image: "kid2.png",
    stars: 3.5,
    category: "latest",
    isFeatured: true,
  },
  {
    id: 3,
    name: "product 3",
    price: 500,
    image: "kid3.png",
    stars: 2.5,
    category: "latest",
    isFeatured: false,
  },
  {
    id: 4,
    name: "product 4",
    price: 1500,
    image: "kid4.png",
    stars: 5.0,
    category: "casual",
    isFeatured: true,
  },
  {
    id: 5,
    name: "product 5",
    price: 400,
    image: "kid5.png",
    stars: 3.5,
    category: "latest",
    isFeatured: true,
  },
  {
    id: 6,
    name: "product 6",
    price: 1200,
    image: "kid6.png",
    stars: 4.5,
    category: "casual",
    isFeatured: false,
  },
]);

const imgPath = (image) => {
  return `./products/${image}`;
};

onMounted(() => {
  latestProd.value = kidProduct.value.filter((latest) => !latest.isFeatured);
  casualProd.value = kidProduct.value.filter(
    (casual) => casual.category == "casual"
  );
  featuredProd.value = kidProduct.value.filter(
    (featured) => featured.isFeatured
  );
});
</script>

<style lang="scss" scoped></style>
