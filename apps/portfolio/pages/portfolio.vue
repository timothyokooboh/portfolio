<template>
  <div>
    <div v-if="data?.body">
      <PortfolioListItemSummary
        v-for="(portfolio, index) in data?.body"
        :key="portfolio?.title"
        :title="portfolio?.title"
        :description="portfolio.description"
        :image="portfolio.images[0]"
        :color="portfolio.color"
        class="mb-[72px]"
        :class="index % 2 ? 'flex-row-reverse' : 'flex-row'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
type Portfolio = {
  title: string;
};

const { data } = await useAsyncData<Portfolio[]>("portfolio", () =>
  queryContent("/portfolio").findOne(),
);
</script>

<style scoped></style>
