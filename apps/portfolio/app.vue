<template>
  <div class="flex flex-col min-h-screen">
    <div
      class="max-w-[2000px] p-8 mx-auto md:py-16 md:px-[39px] lg:px-[165px] mb-auto"
    >
      <TheHeader
        class="fixed z-10 bg-white w-full top-0 left-0 p-8 md:py-16 md:px-[39px] lg:px-[165px]"
      />

      <NuxtLayout>
        <NuxtLoadingIndicator :height="10" />
        <NuxtPage class="mt-[120px]" />
      </NuxtLayout>
    </div>

    <TheFooter />
  </div>
</template>

<script lang="ts" setup></script>
