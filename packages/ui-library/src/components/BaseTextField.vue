<template>
  <input
    v-if="as === 'input'"
    :value="modelValue"
    class="input bg-secondary-grey-200"
    @input="handleInput"
  />

  <textarea
    v-else
    :value="modelValue"
    class="input bg-secondary-grey-200"
    @input="handleInput"
  ></textarea>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: any;
    as: "input" | "textarea";
  }>(),
  {
    modelValue: "",
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

  &:focus {
    outline: 1px solid var(--colors-primary-cyan);
  }

  &:required:focus:invalid {
    outline: 1px solid var(--colors-secondary-red);
  }
}

textarea {
  resize: none;
}
</style>
