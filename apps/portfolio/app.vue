<template>
  <div class="flex flex-col min-h-screen">
    <div class="p-8 md:py-16 md:px-[39px] lg:px-[165px] mb-auto">
      <TheHeader
        class="fixed z-10 bg-white w-full top-0 left-0 p-8 md:py-16 md:px-[39px] lg:px-[165px]"
      />

      <NuxtPage class="mt-[120px]" />
    </div>

    <TheFooter />
  </div>
</template>
