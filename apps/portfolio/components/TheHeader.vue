<script setup lang="ts">
import { ref } from "vue";
const isOpen = ref(false);
</script>

<template>
  <div>
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
        class="hidden md:flex text-primary-blue-200 text-[12px] uppercase space-x-[42px]"
      >
        <NuxtLink to="/" class="menu-item" active-class="text-primary-cyan"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/portfolio"
          class="menu-item"
          active-class="text-primary-cyan"
          >Portfolio</NuxtLink
        >
        <NuxtLink
          to="/articles"
          class="menu-item"
          active-class="text-primary-cyan"
          >Articles</NuxtLink
        >
        <NuxtLink
          to="/contact"
          class="menu-item"
          active-class="text-primary-cyan"
          >Contact</NuxtLink
        >
      </nav>
    </section>

    <MobileMenuDropdown :isOpen="isOpen" />
  </div>
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
