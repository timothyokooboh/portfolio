<script setup lang="ts">
import { ref } from "vue";
import { BaseTextField, BaseButton } from "@app/ui-library";

const props = defineProps<{
  isSending: boolean;
}>();
const emit = defineEmits(["send:message"]);

const form = ref({
  name: "",
  email: "",
  message: "",
});

const sendMessage = (event: Event) => {
  event.preventDefault();
  emit("send:message", form.value);
};
</script>

<template>
  <div>
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
            v-model="form.name"
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
            v-model="form.email"
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
            v-model="form.message"
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
        class="uppercase text-xs text-center tracking-[2px]"
      >
        <div class="w-[180px] text-center">
          <Transition name="fade" mode="out-in">
            <div
              v-if="props.isSending"
              class="flex items-center justify-center"
            >
              <Icon name="eos-icons:bubble-loading" class="mr-2" />
              <div>Sending...</div>
            </div>

            <div v-else>Send Message</div>
          </Transition>
        </div>
      </BaseButton>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(3px);
}
</style>
