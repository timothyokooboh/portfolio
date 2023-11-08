<template>
  <section class="relative" v-auto-animate>
    <ul
      v-if="isOpen"
      role="menu"
      id="menu"
      aria-labelledby="menubutton"
      class="md:hidden absolute top-[30px] right-0 bg-primary-blue-200 text-white text-center flex flex-col text-body-2 items-center justify-center w-[223px] py-10 uppercase"
    >
      <li role="presentation" class="menu-item mb-8">
        <NuxtLink role="menuitem" to="/">Home</NuxtLink>
      </li>

      <li role="presentation" class="menu-item mb-8 menu-item">
        <NuxtLink to="/about" role="menuitem">Portfolio</NuxtLink>
      </li>

      <li role="presentation" class="menu-item">
        <NuxtLink role="menuitem" to="/">Contact Me</NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  isOpen: boolean;
}>();
</script>

<style lang="scss" scoped>
.menu-item {
  &:hover:after {
    transform: scaleX(1);
  }

  &:after {
    display: block;
    content: "";
    border-bottom: 1px solid #fff;
    transform: scaleX(0);
    transition: transform 0.25s ease-in-out;
  }
}
</style>
