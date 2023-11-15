<template>
  <div class="md:flex md:gap-x-[69px]">
    <img
      :src="image"
      class="border-[25px] border-purple-500 border-solid w-full h-[288px] object-cover object-top mb-[32px] md:mb-0 md:items-center md:justify-center md:basis-1/2 md:h-[314px] md:self-center md:border-[34px] lg:h-[500px]"
      :style="{ borderColor: color }"
    />

    <div
      class="py-[24px] border-y-[1px] border-secondary-grey-200 border-solid md:pb-[50px] md:pt-[32px] md:basis-1/2 lg:flex lg:flex-col lg:items-center lg:justify-center"
    >
      <div>
        <h2
          class="text-h2 font-ibarra font-bold leading-h2 mb-[24px] md:mb-[39px]"
        >
          {{ title }}
        </h2>
        <div
          class="text-body-2 font-regular leading-body text-primary-blue-200 mb-[24px] md:mb-[35px]"
        >
          {{ description }}
        </div>

        <BaseButton
          variant="secondary"
          class="uppercase text-xs text-primary-blue-200 tracking-[2px]"
          >View Project</BaseButton
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BaseButton } from "@app/ui-library";

defineProps<{
  title: string;
  description: string;
  image: string;
  color: string;
}>();
</script>

<style lang="scss" scoped></style>
