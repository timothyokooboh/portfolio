<script setup lang="ts">
import { useRoute } from "vue-router";

defineProps<{
  isOpen: boolean;
}>();

const route = useRoute();
</script>

<template>
  <section class="relative" v-auto-animate>
    <ul
      v-if="isOpen"
      role="menu"
      id="menu"
      aria-labelledby="menubutton"
      class="z-10 md:hidden absolute top-[30px] right-0 bg-primary-blue-200 text-white text-center flex flex-col text-[12px] items-center justify-center w-[223px] py-10 uppercase"
    >
      <li role="presentation" class="mb-8 menu-item">
        <NuxtLink role="menuitem" to="/" active-class="text-primary-cyan"
          >Home</NuxtLink
        >
      </li>

      <li role="presentation" class="menu-item mb-8 menu-item">
        <NuxtLink
          to="/portfolio"
          role="menuitem"
          :class="{
            'menu-item--active': route.path.startsWith('/portfolio'),
          }"
          >Portfolio</NuxtLink
        >
      </li>

      <li role="presentation" class="menu-item mb-8 menu-item">
        <NuxtLink
          to="/articles"
          role="menuitem"
          active-class="text-primary-cyan"
          >Articles</NuxtLink
        >
      </li>

      <li role="presentation" class="menu-item">
        <NuxtLink role="menuitem" to="/contact" active-class="text-primary-cyan"
          >Contact Me</NuxtLink
        >
      </li>
    </ul>
  </section>
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
