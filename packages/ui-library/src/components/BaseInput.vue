<template>
  <input
    :value="modelValue"
    @input="handleInput"
    class="input bg-secondary-grey-200"
  />
</template>

<script setup lang="ts">
defineProps<{
  modelValue?: any;
}>();

const emit = defineEmits(["update:modelValue"]);

const handleInput = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>

<style scoped>
.input {
  padding-block: 9px;
  padding-inline: 16px;
}
</style>
