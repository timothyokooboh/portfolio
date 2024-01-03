<script setup lang="ts">
import { BaseTextField, BaseButton } from "@app/ui-library";

const mail = useMail();

const sendMessage = (event: Event) => {
  console.log("luck");
  event.preventDefault();
  mail.send({
    from: "john",
    subject: "hello there",
    text: "twice as much",
  });

  // const myForm = event.target as HTMLFormElement;
  // if (myForm) {
  //   const formData = new FormData(myForm);
  //   const body = new URLSearchParams(
  //     formData as unknown as URLSearchParams,
  //   ).toString();

  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body,
  //   })
  //     .then(() => {
  //       console.log(body);
  //       console.log("Form successfully submitted");
  //     })
  //     .catch((error) => alert(error));
  // }
};
</script>

<template>
  <form data-netlify="true" @submit="sendMessage($event)">
    <div class="mb-[24px]">
      <label>
        <div
          data-testid="name"
          class="text-[13px] font-bold text-primary-blue-200 mb-[8px]"
        >
          Name
        </div>
        <BaseTextField
          data-testid="name-input"
          name="name"
          required
          placeholder="Jane Doe"
          class="w-full"
        />
      </label>
    </div>

    <div class="mb-[24px]">
      <label>
        <div
          data-testid="email"
          class="text-[13px] font-bold text-primary-blue-200 mb-[8px]"
        >
          Email Address
        </div>
        <BaseTextField
          data-testid="email-input"
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
        <div
          data-testid="message"
          class="text-[13px] font-bold text-primary-blue-200 mb-[8px]"
        >
          Message
        </div>
        <BaseTextField
          data-testid="message-input"
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
      data-testid="submit-btn"
      type="submit"
      :show-icon="false"
      class="uppercase text-xs tracking-[2px]"
    >
      Send Message
    </BaseButton>
  </form>
</template>

<style scoped></style>
