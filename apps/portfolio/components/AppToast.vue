<template>
  <div
    class="fixed top-5 right-5 z-40 py-3 px-5 rounded-sm text-white"
    :style="{
      backgroundColor: type === 'success' ? 'rgb(22 163 74)' : 'rgb(153 27 27)',
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  type: "success" | "error";
}>();
</script>

<style lang="scss" scoped></style>
