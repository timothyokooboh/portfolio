<script setup lang="ts">
// import { ref } from "vue";
// import type { Portfolio } from "~/types";
// import { useGetPortfolio } from "~/composables/useGetPortfolio";

// const { getPortfolio } = useGetPortfolio();
// const portfolio = ref<Portfolio | null>(null);

// portfolio.value = await getPortfolio();

import { portfolio } from "~/data";
</script>

<template>
  <div>
    <div v-if="portfolio">
      <div class="portfolio-list-item">
        <PortfolioListItemSummary
          v-for="(project, index) in portfolio"
          :key="project.title"
          v-bind="project"
          :class="index % 2 ? 'flex-row-reverse' : 'flex-row'"
        />
      </div>

      <FooterCTA />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.portfolio-list-item > :not(:last-child) {
  margin-block-end: 72px;
}
</style>
