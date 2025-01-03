<template>
  <div class="md:flex md:gap-x-[69px]">
    <IntersectionObserver class="md:basis-1/2 opacity-0">
      <img
        :src="props.images[0]"
        alt=""
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
            {{ props.project_background }}
          </div>
        </IntersectionObserver>

        <IntersectionObserver>
          <ul class="flex flex-wrap mb-5 gap-[7px]">
            <li
              v-for="(tag, index) in props.tags"
              :key="tag"
              class="text-gray-500 text-sm"
            >
              <span class="mr-2">{{ tag }}</span>
              <span v-if="index < props.tags.length - 1">/</span>
            </li>
          </ul>
        </IntersectionObserver>

        <IntersectionObserver>
          <a :href="props.url" target="_blank">
            <BaseButton
              :data-testid="props.id"
              variant="secondary"
              class="uppercase text-xs text-primary-blue-200 tracking-[2px]"
              >View Project</BaseButton
            >
          </a>
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
