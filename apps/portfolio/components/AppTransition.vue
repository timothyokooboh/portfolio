<script setup lang="ts">
import { computed } from "vue";
const { from } = withDefaults(
  defineProps<{
    from?: "top" | "bottom" | "left" | "right";
  }>(),
  {
    from: "bottom",
  },
);

const strategy = {
  top: "translateY(-30px)",
  bottom: "translateY(30px)",
  left: "translateX(-30px)",
  right: "translateX(30px)",
};

const position = computed(() => {
  return strategy[from];
});
</script>

<template>
  <Transition name="slide-fade" mode="out-in" appear>
    <slot />
  </Transition>
</template>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: v-bind(position);
}

.slide-fade-enter-to,
.slide-fade-leave-from,
.slide-fade-leave {
  opacity: 1;
  transform: translateY(0);
}
</style>
