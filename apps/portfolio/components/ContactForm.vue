<script setup lang="ts">
import { BaseTextField, BaseButton } from "@app/ui-library";

const sendMessage = (event: Event) => {
  event.preventDefault();

  const myForm = event.currentTarget;
  if (myForm) {
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  }
};
</script>

<template>
  <form data-netlify="true" @submit="sendMessage($event)">
    <div class="mb-[24px]">
      <label>
        <div class="text-[13px] font-bold text-primary-blue-200 mb-[8px]">
          Name
        </div>
        <BaseTextField
          name="name"
          required
          placeholder="Jane Doe"
          class="w-full"
        />
      </label>
    </div>

    <div class="mb-[24px]">
      <label>
        <div class="text-[13px] font-bold text-primary-blue-200 mb-[8px]">
          Email Address
        </div>
        <BaseTextField
          type="email"
          name="email"
          required
          placeholder="jane@gmail.com"
          class="w-full"
        />
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
          name="message"
          required
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

<style scoped></style>
