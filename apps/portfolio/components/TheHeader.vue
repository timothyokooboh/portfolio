<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isOpen = ref(false);

console.log("path oo", route.path);

const activeClass = ref({
  cyan: "text-primary-cyan",
});
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
        <NuxtLink to="/" class="menu-item" active-class="menu-item--active"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/portfolio"
          class="menu-item"
          :class="{
            'menu-item--active': route.path.startsWith('/portfolio'),
          }"
          >Portfolio</NuxtLink
        >
        <NuxtLink
          to="/articles"
          class="menu-item"
          active-class="menu-item--active"
          >Articles</NuxtLink
        >
        <NuxtLink
          to="/contact"
          class="menu-item"
          active-class="menu-item--active"
          >Contact</NuxtLink
        >
      </nav>
    </section>

    <MobileMenuDropdown :isOpen="isOpen" />
  </div>
</template>

<style lang="scss" scoped>
@mixin after-pseudo-style($color: #33323d) {
  display: block;
  content: "";
  border-bottom: 1px solid $color;
  transform: scaleX(0);
  transition: transform 0.25s ease-in-out;
}

.menu-item {
  &:hover:after {
    transform: scaleX(1);
  }

  &:after {
    @include after-pseudo-style;
  }

  &--active {
    color: #5fb4a2;

    &:after {
      @include after-pseudo-style(#5fb4a2);
    }
  }
}
</style>
