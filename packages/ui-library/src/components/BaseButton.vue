<template>
  <button
    class="btn flex items-center"
    :class="{
      primary: variant === 'primary',
      secondary: variant === 'secondary',
    }"
  >
    <slot v-if="variant === 'primary'" name="leftIcon">
      <svg
        v-if="showIcon"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <rect opacity="0.1" width="48" height="48" fill="black" />
        <path d="M16 26L24 30L32 26" stroke="white" />
        <path opacity="0.5" d="M16 22L24 26L32 22" stroke="white" />
        <path opacity="0.25" d="M16 18L24 22L32 18" stroke="white" />
      </svg>
    </slot>

    <div class="btn__default-slot" :class="{ 'py-4': !showIcon }">
      <slot />
    </div>
  </button>
</template>

<script setup lang="ts">
const { variant } = withDefaults(
  defineProps<{
    variant?: "primary" | "secondary";
    showIcon?: boolean;
  }>(),
  {
    variant: "primary",
    showIcon: true,
  },
);
</script>

<style lang="scss" scoped>
.btn {
  transition: all 0.25s ease;

  &__default-slot {
    padding-inline: 32px;
  }

  &:disabled {
    cursor: no-drop;
  }
}
.primary {
  background-color: var(--colors-primary-blue-100);
  color: #fff;

  &:disabled {
    background-color: var(--colors-secondary-grey-200);
  }

  &:hover:not(:disabled) {
    background-color: var(--colors-primary-cyan);
  }
}
.secondary {
  background-color: #fff;
  color: var(--colors-primary-blue-200);
  border: 1px solid currentColor;
  padding-block: 17px;

  &:disabled {
    background-color: #fff;
    border: 1px solid var(--colors-secondary-grey-200);
  }

  &:hover:not(:disabled) {
    background-color: var(--colors-primary-blue-200);
    color: #fff;
  }
}
</style>
