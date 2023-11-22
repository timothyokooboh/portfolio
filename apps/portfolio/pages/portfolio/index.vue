<script setup lang="ts">
import { BaseButton } from "@app/ui-library";
import type { Portfolio } from "~/types";
import { useGetPortfolio } from "~/composables/useGetPortfolio";
import { ref } from "vue";

const { getPortfolio } = useGetPortfolio();
const portfolio = ref<Portfolio | null>(null);

portfolio.value = await getPortfolio();
</script>

<template>
  <div>
    <div v-if="portfolio?.body">
      <div class="portfolio-list-item">
        <PortfolioListItemSummary
          v-for="(project, index) in portfolio.body"
          :key="project.title"
          :id="project.id"
          :title="project?.title"
          :description="project.description"
          :image="project.images[0]"
          :color="project.color"
          :class="index % 2 ? 'flex-row-reverse' : 'flex-row'"
        />
      </div>

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
        <BaseButton
          variant="secondary"
          class="uppercase text-xs tracking-[2px]"
        >
          Contact me
        </BaseButton>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.portfolio-list-item > :not(:last-child) {
  margin-block-end: 72px;
}
</style>
