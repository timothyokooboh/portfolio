<template>
  <section
    class="w-[311px] flex flex-col items-center justify-center text-center mx-auto my-[80px] md:flex-row md:justify-between md:w-full md:text-left"
  >
    <IntersectionObserver custom-class="slide-right">
      <h2
        class="font-ibarra text-h2 font-bold leading-h2 mt-0 mb-[40px] md:mb-0 md:w-[350px] text-primary-blue-200"
      >
        Interested in doing a project together?
      </h2>
    </IntersectionObserver>
    <div class="hidden md:block grow mx-[32px] h-[1px] bg-secondary-grey-200" />

    <IntersectionObserver custom-class="slide-left">
      <NuxtLink to="/contact">
        <BaseButton
          variant="secondary"
          class="uppercase text-xs tracking-[2px]"
        >
          Contact me
        </BaseButton>
      </NuxtLink>
    </IntersectionObserver>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
