<template>
  <div
    class="bg-primary-blue-200 py-[56px] md:flex md:justify-between md:items-center md:px-[40px] md:py-[24px]"
  >
    <section
      class="flex flex-col items-center justify-center md:flex-row md:justify-start"
    >
      <img
        src="/logo_white.svg"
        alt="logo"
        class="mb-[40px] h-[32px] w-[61px] md:mb-0 md:mr-[40px]"
      />
      <div
        class="mb-[40px] space-y-[32px] flex flex-col items-center justify-center text-white text-xs font-regular uppercase md:flex-row md:justify-center md:space-y-0 md:space-x-[42px] md:mb-0"
      >
        <NuxtLink to="/" class="block menu-item w-fit">Home</NuxtLink>

        <NuxtLink to="/portfolio" class="block menu-item w-fit"
          >Portfolio</NuxtLink
        >
        <NuxtLink to="/articles" class="block menu-item w-fit"
          >Articles</NuxtLink
        >
        <NuxtLink to="/contact" class="block menu-item w-fit"
          >Contact me</NuxtLink
        >
      </div>
    </section>

    <section
      class="flex items-center justify-center space-x-[16px] md:justify-end"
    >
      <a href="https://github.com/timothyokooboh" target="_blank">
        <img src="/github.svg" alt="github" class="w-[25px] h-[24px]" />
      </a>

      <a href="https://twitter.com/inspiretim24" target="_blank">
        <img src="/twitter.svg" alt="twitter" class="w-[24px] h-[19.5px]" />
      </a>

      <a
        href="https://www.linkedin.com/in/timothy-okooboh-193980165/"
        target="_blank"
      >
        <img src="/linkedin.svg" alt="linkedin" class="w-[24px] h-[24px]" />
      </a>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
