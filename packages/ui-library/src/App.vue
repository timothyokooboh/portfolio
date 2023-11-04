<script setup lang="ts">
import BaseButton from "./components/BaseButton.vue";
</script>

<template>
  <div class="flex justify-center mt-5">
    <BaseButton>
      <div>sign in</div>
    </BaseButton>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
