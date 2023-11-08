<script setup lang="ts">
import { ref } from "vue";
import { clickOutSide as vClickOutSide } from "@mahdikhashan/vue3-click-outside";

const isOpen = ref(false);
</script>

<template>
  <section class="flex items-center justify-between">
    <NuxtLink to="/">
      <img src="/logo.svg" alt="logo" />
    </NuxtLink>

    <button
      @click="isOpen = !isOpen"
      class="md:hidden"
      id="menubutton"
      aria-haspopup="true"
      aria-controls="menu"
    >
      <img v-if="isOpen" src="/close-menu.svg" alt="hamburger menu" />
      <img v-else src="/hamburger.svg" alt="close menu" />
    </button>

    <nav
      class="hidden md:flex text-primary-blue-200 text-body-2 uppercase space-x-[42px]"
    >
      <NuxtLink to="/" class="menu-item">Home</NuxtLink>
      <NuxtLink to="/portfolio" class="menu-item">Portfolio</NuxtLink>
      <NuxtLink to="/contact" class="menu-item">Contact</NuxtLink>
    </nav>
  </section>

  <MobileMenuDropdown :isOpen="isOpen" />
</template>

<style lang="scss" scoped>
.menu-item {
  &:hover:after {
    transform: scaleX(1);
  }

  &:after {
    display: block;
    content: "";
    border-bottom: 1px solid var(--colors-primary-blue-200);
    transform: scaleX(0);
    transition: transform 0.25s ease-in-out;
  }
}
</style>
