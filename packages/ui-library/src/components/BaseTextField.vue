<template>
  <input
    v-if="as === 'input'"
    :value="modelValue"
    @input="handleInput"
    class="input bg-secondary-grey-200"
    invalid
  />

  <textarea
    v-else
    :value="modelValue"
    @input="handleInput"
    class="input bg-secondary-grey-200"
    invalid
  />
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: any;
    as: "input" | "textarea";
  }>(),
  {
    as: "input",
  },
);

const emit = defineEmits(["update:modelValue"]);

const handleInput = (e: Event) => {
  emit(
    "update:modelValue",
    (e.target as HTMLInputElement | HTMLTextAreaElement).value,
  );
};
</script>

<style lang="scss" scoped>
.input {
  padding-block: 9px;
  padding-inline: 16px;
  border: none;

  &:invalid {
    outline: 1px solid var(--colors-secondary-red);
  }

  &:focus {
    outline: 1px solid var(--colors-primary-cyan);
  }
}
</style>
