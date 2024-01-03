<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader
      class="fixed z-10 bg-white w-full top-0 left-0 p-8 md:py-16 md:px-[39px] lg:px-[165px]"
    />

    <NuxtLoadingIndicator :height="10" />

    <div class="p-8 md:py-16 md:px-[39px] lg:px-[165px] mb-auto">
      <NuxtPage class="mt-[120px]" />
    </div>

    <TheFooter />
  </div>
</template>

<script lang="ts" setup></script>
