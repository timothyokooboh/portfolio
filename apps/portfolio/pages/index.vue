<script setup lang="ts">
import { tokens } from "@app/foundations";
import { BaseButton } from "@app/ui-library";
</script>

<template>
  <div class="">
    <!-- <div
      class="bg-[url(/bitmap.svg)] bg-cover bg-bottom md:bg-center h-[271px] md:h-[600px]"
    ></div> -->

    <div class="relative">
      <picture>
        <source
          srcset="/landing-img-desktop.svg"
          :media="`(min-width: ${tokens.screens.lg.value})`"
          class="w-full object-cover"
        />
        <source
          srcset="/landing-img-tablet.svg"
          :media="`(min-width: ${tokens.screens.md.value})`"
          class="w-full object-cover"
        />

        <source
          srcset="/landing-img-mobile.svg"
          :media="`(min-width: ${tokens.screens.sm.value})`"
          class="w-full object-cover"
        />

        <img src="/landing-img-desktop.svg" class="w-full object-cover" />
      </picture>
      <!-- <img
        src="/eazyaccess.svg"
        class="w-full h-[271px] md:h-[600px] object-cover"
      /> -->
      <div
        class="bg-white md:w-[514px] lg:w-[445px] max-w-[514px] md:absolute md:bottom-[0px] mt-6"
      >
        <h2
          class="mb-[53px] md:pt-[56px] text-h2 font-ibarra font-bold leading-h2 tracking-[-0.36px] text-primary-blue-200"
        >
          Hey, I'm Timothy Okooboh and I love building beautiful websites
        </h2>

        <BaseButton>About Me</BaseButton>
      </div>
    </div>
  </div>
</template>

<style></style>
