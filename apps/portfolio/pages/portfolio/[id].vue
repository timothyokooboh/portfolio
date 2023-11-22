<script setup lang="ts">
import { BaseButton } from "@app/ui-library";
import { useGetPortfolio } from "~/composables/useGetPortfolio";

const route = useRoute();
const id = route.params.id;
const { getPortfolio } = useGetPortfolio();
const portfolio = await getPortfolio();

const project = portfolio?.body?.find((el) => el.id === Number(id));
const [coverImage, ...otherImages] = project!.images;
</script>

<template>
  <div>
    <img
      :src="coverImage"
      alt="project image"
      class="w-full h-[190px] object-cover object-center border-[25px] border-solid mb-[40px] md:h-[350px]"
      :style="{ borderColor: project?.color }"
    />

    <div class="lg:grid lg:grid-cols-2 lg:gap-x-[125px] mb-[64px]">
      <section
        class="slide-up overflow-auto relative py-[24px] mb-[48px] border-y-[1px] border-secondary-grey-200 md:grid md:grid-cols-2 md:gap-x-[50px] md:py-[32px] lg:block lg:h-fit lg:py-[48px]"
      >
        <h2
          class="text-h2 font-ibarra font-bold leading-h2 tracking-[-0.36px] mb-[24px]"
        >
          {{ project?.title }}
        </h2>
        <div
          class="description text-body-2 leading-body text-primary-blue-200 mb-[24px] md:mb-0 md:absolute md:top-[24px] md-right-0 md:col-start-2 md:pb-[24px] lg:relative lg:mb-[24px]"
        >
          {{ project?.description }}
        </div>
        <div
          class="tags text-[13px] text-primary-cyan font-bold leading-body mb-[24px] md:col-start-1"
        >
          {{ project?.tags.join(" / ") }}
        </div>
        <BaseButton
          variant="secondary"
          class="uppercase text-[12px] tracking-[2px] md:col-start-1 md:w-fit"
        >
          Visit website
        </BaseButton>
      </section>

      <div>
        <section class="slide-down mb-[40px]">
          <h3
            class="font-ibarra text-h3 font-regular leading-h2 tracking-[-0.29px] pb-[28px]"
          >
            Project Background
          </h3>
          <div
            class="text-body-2 text-primary-blue-200 leading-body font-regular"
          >
            {{ project?.project_background }}
          </div>
        </section>

        <section>
          <h3
            class="font-ibarra text-h3 font-regular leading-h2 tracking-[-0.29px] pb-[28px] mb-[40px]"
          >
            Static Previews
          </h3>
          <img
            v-for="(image, index) in otherImages"
            :key="index"
            :src="image"
            alt="static previews"
            class="w-full h-[250px] object-cover object-center border-[25px] border-gray-300 border-solid mb-[32px] md:h-[434px]"
          />
        </section>
      </div>
    </div>

    <ProjectNavigation />

    <section
      class="w-[311px] flex flex-col items-center justify-center text-center mx-auto my-[80px] md:flex-row md:justify-between md:w-full md:text-left"
    >
      <h2
        class="font-ibarra text-h2 font-bold leading-h2 mt-0 mb-[40px] md:mb-0 md:w-[350px] text-primary-blue-200"
      >
        Interested in doing a project together?
      </h2>
      <div
        class="hidden md:block grow mx-[32px] h-[1px] bg-secondary-grey-200"
      />
      <BaseButton variant="secondary" class="uppercase text-xs tracking-[2px]">
        Contact me
      </BaseButton>
    </section>
  </div>
</template>

<style lang="scss" scoped>
// #picture-container {
//   perspective: 1000px;
//   overflow: hidden;
//   cursor: url("cursor.png"), auto;
// }

// #picture {
//   transform-style: preserve-3d;
//   transition: transform 0.3s;
// }
</style>
