<template>
  <div class="md:flex md:gap-x-[69px]">
    <IntersectionObserver class="md:basis-1/2 opacity-0">
      <img
        :src="props.images[0]"
        class="border-[25px] border-solid w-full h-[288px] object-cover object-top mb-[32px] md:mb-0 md:items-center md:justify-center md:h-[314px] md:self-center md:border-[34px] lg:h-[500px]"
        :style="{ borderColor: color }"
      />
    </IntersectionObserver>

    <div
      class="w-full py-[24px] border-y-[1px] border-secondary-grey-200 border-solid md:pb-[50px] md:pt-[32px] md:basis-1/2 lg:flex lg:flex-col lg:items-center lg:justify-center"
    >
      <div>
        <IntersectionObserver custom-class="slide-down">
          <h2
            class="text-h2 font-ibarra font-bold leading-h2 mb-[24px] md:mb-[39px]"
          >
            {{ props.title }}
          </h2>
          <div
            class="text-body-2 font-regular leading-body text-primary-blue-200 mb-[24px] md:mb-[35px]"
          >
            {{ props.description }}
          </div>
        </IntersectionObserver>

        <IntersectionObserver>
          <NuxtLink :to="`/portfolio/${props.id}`">
            <BaseButton
              variant="secondary"
              class="uppercase text-xs text-primary-blue-200 tracking-[2px]"
              >View Project</BaseButton
            >
          </NuxtLink>
        </IntersectionObserver>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BaseButton } from "@app/ui-library";
import type { Project } from "~/types";

const props = defineProps<Project>();
</script>

<style lang="scss" scoped></style>
