<template>
  <form @submit.prevent="sendMessage">
    <div class="mb-[24px]">
      <label>
        <div class="text-[13px] font-bold text-primary-blue-200 mb-[8px]">
          Name
        </div>
        <BaseTextField placeholder="Jane Doe" class="w-full" />
      </label>
    </div>

    <div class="mb-[24px]">
      <label>
        <div class="text-[13px] font-bold text-primary-blue-200 mb-[8px]">
          Email Address
        </div>
        <BaseTextField placeholder="jane@gmail.com" class="w-full" />
      </label>
    </div>

    <div class="mb-[24px]">
      <label>
        <div class="text-[13px] font-bold text-primary-blue-200 mb-[8px]">
          Message
        </div>
        <BaseTextField
          as="textarea"
          rows="3"
          placeholder="How can I help?"
          class="w-full"
        />
      </label>
    </div>

    <BaseButton
      type="submit"
      :show-icon="false"
      class="uppercase text-xs tracking-[2px]"
    >
      Send Message
    </BaseButton>
  </form>
</template>

<script setup lang="ts">
import { BaseTextField, BaseButton } from "@app/ui-library";

const sendMessage = () => {
  console.log("send message");
};
</script>

<style scoped></style>
