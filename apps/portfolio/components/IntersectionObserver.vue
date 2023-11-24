<script setup lang="ts">
import { ref } from "vue";
import { vIntersectionObserver } from "@vueuse/components";

const { customClass } = withDefaults(
  defineProps<{
    /**
     * AN OPTIONAL CLASS NAME THAT PROVIDES AN ANIMATION
     * DIFFERENT FROM THE DEFAULT SLIDE UP ANIMATION
     */
    customClass?: string;
  }>(),
  {
    customClass: "slide-up", // a global class that offers a slide up animation
  },
);

const onIntersectionObserver = ([
  { isIntersecting, target },
]: IntersectionObserverEntry[]) => {
  if (isIntersecting) {
    target.classList.add(customClass);
  } else {
    target.classList.remove(customClass);
  }
};

const root = ref<HTMLElement | null>(null);
</script>

<template>
  <div
    :ref="ref"
    v-intersection-observer="[onIntersectionObserver, { root }]"
    class="opacity-0"
  >
    <slot />
  </div>
</template>

<style scoped></style>
