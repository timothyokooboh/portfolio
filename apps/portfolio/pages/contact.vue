<script setup lang="ts">
const isSending = ref(false);
const toastMessage = ref("");
const showToastMessage = ref(false);
const toastType = ref("success");

const mail = useMail();

const sendMessage = async (value: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    isSending.value = true;

    await mail.send({
      subject: "Message from a visitor of my portfolio",
      text: `
        My name is ${value.name}. \n 
        My email address is ${value.email}. \n
        My message is ${value.message}`,
    });
    toastType.value = "success";
    toastMessage.value = "Message sent successfully";
    showToastMessage.value = true;

    setTimeout(() => {
      showToastMessage.value = false;
    }, 5000);
  } catch (err) {
    toastType.value = "error";
    toastMessage.value =
      "There was an error while sending your message. Please try again.";
    showToastMessage.value = true;

    setTimeout(() => {
      showToastMessage.value = false;
    }, 5000);
  } finally {
    isSending.value = false;
  }
};
</script>

<template>
  <div>
    <section
      class="border-y-[1px] border-secondary-grey-200 pt-[24px] pb-[32px] lg:grid lg:grid-cols-2"
    >
      <IntersectionObserver custom-class="slide-right">
        <h2
          data-testid="get-in-touch"
          class="text-h2 font-ibarra font-bold leading-h2 text-primary-blue-200 pb-[24px]"
        >
          Get in Touch
        </h2>
      </IntersectionObserver>

      <IntersectionObserver>
        <div>
          <div
            class="text-body-2 font-regular leading-body text-primary-blue-200 opacity-80 mb-[24px]"
          >
            I'd love to hear about what you're working on and how I could help.
            I'm open to remote opportunities in the US and Europe and I'm
            willing to relocate. Please do feel free to check out my online
            profiles below and get in touch using the form. One of my key
            strengths is my ability to establish a robust infrastructure for
            maintainable frontend codebases. I am well-versed in setting up
            essential tools like ESLint, Prettier, and TypeScript to enforce
            coding standards and maintain code quality. I also have experience
            in configuring testing infrastructures using Testing Library (Vue.js
            & React.js), Jest, and Playwright to ensure the reliability of the
            applications I work on. Additionally, I have set up efficient build
            processes using GitHub Actions, streamlining the deployment pipeline
            for projects I've been involved in.
          </div>

          <div class="flex items-center gap-x-[16px]">
            <!-- GITHUB -->
            <a href="https://github.com/timothyokooboh" target="_blank">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 0C5.59375 0 0 5.50948 0 12.3045C0 17.742 3.58125 22.3531 8.54688 23.9788C9.17188 24.0946 9.40104 23.7137 9.40104 23.3871C9.40104 23.095 9.39062 22.3207 9.38542 21.295C5.90833 22.0369 5.175 19.6442 5.175 19.6442C4.60625 18.2241 3.78437 17.8443 3.78437 17.8443C2.65208 17.0815 3.87188 17.0971 3.87188 17.0971C5.12708 17.1827 5.78646 18.3649 5.78646 18.3649C6.90104 20.2463 8.7125 19.7027 9.42708 19.3886C9.53958 18.5924 9.86146 18.0509 10.2188 17.743C7.44271 17.4352 4.525 16.3771 4.525 11.6628C4.525 10.3198 5.00937 9.22212 5.81146 8.36127C5.67083 8.05031 5.24896 6.7992 5.92083 5.10462C5.92083 5.10462 6.96771 4.77489 9.35833 6.36617C10.3583 6.09278 11.4208 5.95713 12.4833 5.95087C13.5458 5.95713 14.6083 6.09278 15.6083 6.36617C17.9833 4.77489 19.0302 5.10462 19.0302 5.10462C19.7021 6.7992 19.2802 8.05031 19.1552 8.36127C19.9521 9.22212 20.4365 10.3198 20.4365 11.6628C20.4365 16.3897 17.5146 17.43 14.7333 17.7326C15.1708 18.102 15.5771 18.8564 15.5771 20.0094C15.5771 21.656 15.5615 22.9791 15.5615 23.3788C15.5615 23.7012 15.7802 24.0862 16.4208 23.9631C21.4219 22.3478 25 17.7336 25 12.3045C25 5.50948 19.4031 0 12.5 0V0Z"
                  fill="black"
                />
              </svg>
            </a>

            <!-- TWITTER -->

            <a href="https://twitter.com/inspiretim24" target="_blank">
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 2.55705C23.117 2.94905 22.168 3.21305 21.172 3.33205C22.189 2.72305 22.97 1.75805 23.337 0.608047C22.386 1.17205 21.332 1.58205 20.21 1.80305C19.313 0.846047 18.032 0.248047 16.616 0.248047C13.437 0.248047 11.101 3.21405 11.819 6.29305C7.728 6.08805 4.1 4.12805 1.671 1.14905C0.381 3.36205 1.002 6.25705 3.194 7.72305C2.388 7.69705 1.628 7.47605 0.965 7.10705C0.911 9.38805 2.546 11.522 4.914 11.997C4.221 12.185 3.462 12.229 2.69 12.081C3.316 14.037 5.134 15.46 7.29 15.5C5.22 17.123 2.612 17.848 0 17.54C2.179 18.937 4.768 19.752 7.548 19.752C16.69 19.752 21.855 12.031 21.543 5.10605C22.505 4.41105 23.34 3.54405 24 2.55705Z"
                  fill="black"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/timothy-okooboh-193980165"
              target="_blank"
            >
              <!-- LINKEDIN-->
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.4 0H21.6C22.92 0 24 1.08 24 2.4V21.6C24 22.92 22.92 24 21.6 24H2.4C1.08 24 0 22.92 0 21.6V2.4C0 1.08 1.08 0 2.4 0ZM3.6 20.4H7.2V9.6H3.6V20.4ZM5.4 7.56C4.2 7.56 3.24 6.6 3.24 5.4C3.24 4.2 4.2 3.24 5.4 3.24C6.6 3.24 7.56 4.2 7.56 5.4C7.56 6.6 6.6 7.56 5.4 7.56ZM16.8 20.4H20.4V13.56C20.4 11.28 18.48 9.36 16.2 9.36C15.12 9.36 13.8 10.08 13.2 11.04V9.6H9.6V20.4H13.2V14.04C13.2 13.08 14.04 12.24 15 12.24C15.96 12.24 16.8 13.08 16.8 14.04V20.4Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>
      </IntersectionObserver>
    </section>

    <section class="mb-[70px] pt-[32px] lg:grid lg:grid-cols-2">
      <IntersectionObserver>
        <h2 class="text-h2 font-bold font-ibarra mb-[24px]">Contact Me</h2>
      </IntersectionObserver>

      <IntersectionObserver>
        <ContactForm :is-sending="isSending" @send:message="sendMessage" />
      </IntersectionObserver>
    </section>

    <Transition name="fade" mode="out-in">
      <AppToast v-if="showToastMessage" :type="toastType">
        <div>{{ toastMessage }}</div>
      </AppToast>
    </Transition>
  </div>
</template>

<style scoped>
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
