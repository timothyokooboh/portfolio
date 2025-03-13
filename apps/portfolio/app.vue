<template>
  <div class="flex flex-col min-h-screen">
    <div class="fixed z-10 bg-white w-full top-0 left-0">
      <TheHeader
        class="p-8 max-w-[1200px] mx-auto md:py-10 md:px-[39px] lg:px-10"
      />
    </div>

    <NuxtLoadingIndicator :height="10" />

    <div class="p-8 mb-auto w-screen max-w-[1200px] mx-auto md:py-10 md:px-10">
      <NuxtPage class="mt-[70px]" />
    </div>

    <TheFooter />
  </div>
</template>
