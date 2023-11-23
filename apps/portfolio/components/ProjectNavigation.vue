<script setup lang="ts">
import { useGetPortfolio } from "~/composables/useGetPortfolio";
import { ref } from "vue";
import { useRoute } from "vue-router";
import type { Portfolio, Project } from "~/types";

const route = useRoute();
const { getPortfolio } = useGetPortfolio();
const portfolio = ref<Portfolio | null>(null);
portfolio.value = await getPortfolio();

const id = Number(route.params.id);
const previousProject = ref<Project>({
  id: 1,
  title: "",
  description: "",
  color: "",
  project_background: "",
  images: [],
  tags: [],
  url: "",
});

const nextProject = ref<Project>({
  id: 1,
  title: "",
  description: "",
  color: "",
  project_background: "",
  images: [],
  tags: [],
  url: "",
});

if (portfolio.value?.body) {
  /**
   * When a user is viewing the first project in the portfolio
   */
  if (id === 1) {
    previousProject.value =
      portfolio.value.body[portfolio.value.body.length - 1];
    nextProject.value = portfolio.value.body[1];

    // When a user is viewing the last project in the portfolio
  } else if (id === portfolio.value.body.length) {
    previousProject.value =
      portfolio.value.body[portfolio.value.body.length - 2];
    nextProject.value = portfolio.value.body[0];

    // Viewing projects in between
  } else {
    previousProject.value = portfolio.value.body[id - 2];
    nextProject.value = portfolio.value.body[id];
  }
}
</script>

<template>
  <div class="border-y-[1px] border-secondary-grey-200 grid grid-cols-2">
    <IntersectionObserver custom-class="slide-right">
      <NuxtLink :to="`/portfolio/${previousProject.id}`">
        <div class="border-r-[1px] border-secondary-grey-200 pr-3">
          <img
            src="/previous.svg"
            alt="previous project"
            class="mb-[16px] pt-[24px]"
          />
          <h3
            class="text-h3 font-ibarra whitespace-nowrap overflow-hidden text-ellipsis"
          >
            {{ previousProject.title }}
          </h3>
          <div
            class="font-regular text-body-1 text-primary-blue-200 opacity-50 pb-[24px]"
          >
            Previous Project
          </div>
        </div>
      </NuxtLink>
    </IntersectionObserver>

    <IntersectionObserver custom-class="slide-left">
      <NuxtLink :to="`/portfolio/${nextProject.id}`">
        <div class="px-3">
          <div class="flex justify-end">
            <img
              src="/next.svg"
              alt="previous project"
              class="mb-[16px] pt-[24px]"
            />
          </div>
          <h3
            class="text-right font-ibarra text-h3 whitespace-nowrap overflow-hidden text-ellipsis"
          >
            {{ nextProject.title }}
          </h3>
          <div
            class="text-right font-regular text-body-1 text-primary-blue-200 opacity-50 pb-[24px]"
          >
            Next Project
          </div>
        </div>
      </NuxtLink>
    </IntersectionObserver>
  </div>
</template>

<style scoped></style>
