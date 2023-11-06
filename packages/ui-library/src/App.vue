<script setup lang="ts">
import { ref } from "vue";
import BaseTextField from "./components/BaseTextField.vue";
import BaseButton from "./components/BaseButton.vue";
const age = ref(10);
</script>

<template>
  <form
    class="m-5"
    action="
  "
  >
    <BaseTextField as="input" type="email" v-model="age" />

    <BaseButton class="mt-5">Sign In</BaseButton>

    {{ age }}
  </form>
</template>
