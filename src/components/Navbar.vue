<template>
  <Disclosure as="nav" class="bg-primary" v-slot="{ open }">
    <div class="mx-auto max-w-7xl">
      <div class="relative flex h-20 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch md:justify-between"
        >
          <!-- logo -->
          <div class="flex flex-shrink-0 items-center">
            <Logo />
          </div>
          <!--  -->
          <!-- desktop menu -->
          <div class="hidden md:ml-6 md:flex">
            <div class="flex items-center space-x-4">
              <RouterLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                :class="[
                  item.current
                    ? 'text-black font-bold'
                    : 'text-black hover:text-danger',
                  'rounded-md px-3 py-2 text-base xl:text-[21px] font-normal',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import Logo from "./Logo.vue";
import { ref } from "vue";

const navigation = ref([
  { name: "Home", href: "/", current: true },
  { name: "Men's", href: "/men", current: false },
  { name: "Women's", href: "/women", current: false },
  { name: "Kid's", href: "/kids", current: false },
  { name: "About Us", href: "/about", current: false },
  { name: "Contact Us", href: "/contact", current: false },
]);
</script>
