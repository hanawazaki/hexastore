<template>
  <section class="cart py-[90px]">
    <div class="container mx-auto px-0 lg:px-20">
      <h2 class="text-black text-4xl font-bold mb-5">Shopping Cart</h2>
      <div class="flex flex-col md:flex-row gap-10">
        <div class="list-product w-8/12">
          <div class="relative overflow-x-auto">
            <table class="w-full text-left">
              <thead class="text-[21px] font-normal">
                <tr>
                  <th scope="col" class="px-6 py-3"></th>
                  <th scope="col" class="px-6 py-3">Name</th>
                  <th scope="col" class="px-6 py-3">Amount</th>
                  <th scope="col" class="px-6 py-3">Quantity</th>
                  <th scope="col" class="px-6 py-3">Colour</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td scope="row" class="px-6 py-4">
                    <img
                      src="../assets/images/product-cart2.png"
                      alt="product2"
                      class="mx-auto my-0"
                    />
                  </td>
                  <td class="px-6 py-4 text-[22px] font-medium">
                    Classic Spring
                  </td>
                  <td class="px-6 py-4 text-[22px] font-medium">$120.00</td>
                  <td class="px-6 py-4 text-[22px] font-medium">
                    <div class="flex gap-2">
                      <button @click="qty--">-</button>
                      <input
                        type="number"
                        min="0"
                        class="input-qty text-center"
                        v-model="qty"
                      />
                      <button @click="qty++">+</button>
                    </div>
                  </td>
                  <td class="px-6 py-4 text-[22px] font-medium">White</td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td scope="row" class="px-6 py-4">
                    <img
                      src="../assets/images/product-cart.png"
                      alt="product2"
                      class="mx-auto my-0"
                    />
                  </td>
                  <td class="px-6 py-4 text-[22px] font-medium">
                    Classic Spring
                  </td>
                  <td class="px-6 py-4 text-[22px] font-medium">$10.00</td>
                  <td class="px-6 py-4 text-[22px] font-medium">
                    <div class="flex gap-2">
                      <button @click="qty--">-</button>
                      <input
                        type="number"
                        min="0"
                        class="input-qty text-center"
                        v-model="qty"
                      />
                      <button @click="qty++">+</button>
                    </div>
                  </td>
                  <td class="px-6 py-4 text-[22px] font-medium">White</td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td scope="row" class="px-6 py-4">
                    <img
                      src="../assets/images/product-cart2.png"
                      alt="product2"
                      class="mx-auto my-0"
                    />
                  </td>
                  <td class="px-6 py-4 text-[22px] font-medium">
                    Classic Spring
                  </td>
                  <td class="px-6 py-4 text-[22px] font-medium">$120.00</td>
                  <td class="px-6 py-4 text-[22px] font-medium">
                    <div class="flex gap-2">
                      <button @click="qty--">-</button>
                      <input
                        type="number"
                        min="0"
                        class="input-qty text-center"
                        v-model="qty"
                      />
                      <button @click="qty++">+</button>
                    </div>
                  </td>
                  <td class="px-6 py-4 text-[22px] font-medium">White</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="order-summary w-4/12 p-4">
          <h3 class="text-[30px] font-medium text-center">Order Summary</h3>
          <hr class="mb-5 border-black border-2" />
          <button
            class="border border-black text-center w-full text-lg font-normal py-2 mb-9 transition-all ease-in duration-200 hover:bg-black hover:text-white"
          >
            Have a promo code
          </button>
          <div class="payable flex flex-row justify-between mb-5">
            <h4 class="text-[22px] font-normal">Payable Amount</h4>
            <h4 class="text-[22px] font-normal">$120.00</h4>
          </div>
          <div class="payable flex flex-row justify-between mb-2">
            <h4 class="text-[22px] font-normal">Shipping</h4>
            <h4 class="text-[22px] font-normal">$10.00</h4>
          </div>
          <hr class="mb-5 border-black border-2" />
          <div class="order-total flex flex-row justify-between mb-5">
            <h4 class="text-[22px] font-normal">Order Total</h4>
            <h4 class="text-[22px] font-normal">$130.00</h4>
          </div>
          <div class="flex justify-center mb-5">
            <button
              class="border-4 border-black text-center text-lg font-normal px-3 py-2 transition-all ease-in duration-200 hover:bg-black hover:text-white"
            >
              Proceed To Checkout
            </button>
          </div>
          <img src="../assets/images/payment.png" alt="" class="mx-auto" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const qty = ref(0);

const increaseItem = () => {};
const decreaseItem = () => {};
</script>

<style scoped>
.input-qty {
  background: #fff;
  box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.25);
  width: 62px;
}

.order-summary {
  background: #fff;
  filter: drop-shadow(2px 2px 11px rgba(0, 0, 0, 0.19));
}
</style>
