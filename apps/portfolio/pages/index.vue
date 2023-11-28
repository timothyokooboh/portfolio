<script setup lang="ts">
import { onMounted } from "vue";
// import { tokens } from "@app/foundations";
import { BaseButton } from "@app/ui-library";

const handleBendingAnimation = () => {
  const pictureContainer = document.querySelector(
    "#picture-container",
  ) as HTMLDivElement;
  const picture = document.querySelector("#picture") as HTMLImageElement;

  if (pictureContainer && picture) {
    pictureContainer.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { offsetWidth, offsetHeight } = pictureContainer;

      const xPos = (clientX / offsetWidth - 0.5) * 2;
      const yPos = (clientY / offsetHeight - 0.5) * 2;

      const rotateX = 20 * yPos;
      const rotateY = -20 * xPos;

      picture.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(30px)`;

      pictureContainer.addEventListener("mouseleave", () => {
        picture.style.transform = "rotateX(0) rotateY(0) translateZ(0)";
      });
    });
  }
};

onMounted(() => {
  handleBendingAnimation();
});
</script>

<template>
  <div>
    <section class="relative">
      <IntersectionObserver>
        <div id="picture-container">
          <picture>
            <source
              srcset="/landing-img-desktop.svg"
              :media="`(min-width: 1440px)`"
            />
            <source
              srcset="/landing-img-tablet.svg"
              :media="`(min-width: 768px)`"
            />

            <source
              srcset="/landing-img-mobile.svg"
              :media="`(min-width: 375px)`"
            />

            <img
              id="picture"
              src="/landing-img-desktop.svg"
              class="w-full object-cover"
            />
          </picture>
        </div>
      </IntersectionObserver>

      <div
        class="bg-white md:w-[514px] lg:w-[445px] max-w-[514px] md:absolute md:bottom-[0px] mt-6"
      >
        <IntersectionObserver custom-class="slide-right">
          <h2
            class="mb-[53px] md:pt-[56px] text-h2 lg:text-h1 font-ibarra font-bold leading-h2 lg:leading-h1 tracking-[-0.36px] text-primary-blue-200"
          >
            Hey, I'm Timothy Okooboh and I love building beautiful websites
          </h2>
        </IntersectionObserver>

        <div class="flex flex-wrap items-center">
          <IntersectionObserver>
            <a href="#about-me">
              <BaseButton class="uppercase text-xs tracking-[2px] mr-3 mb-2"
                >About Me</BaseButton
              >
            </a>
          </IntersectionObserver>

          <IntersectionObserver>
            <a
              download
              href="/resume.pdf"
              class="flex items-center menu-item hover:translate-y-[-2px] duration-200 mb-2"
            >
              <Icon
                name="ic:baseline-download"
                class="mr-1 text-primary-blue-200"
              />
              <div class="text-xs text-primary-blue-200">Resume</div>
            </a>
          </IntersectionObserver>
        </div>
      </div>
    </section>

    <section
      id="about-me"
      class="grid mt-[80px] gap-y-[40px] md:grid-cols-[281px_1fr] md:gap-x-[69px] lg:grid-cols-[540px_350px] lg:gap-x-[125px]"
    >
      <IntersectionObserver>
        <img
          src="/profile-picture.jpeg"
          alt="profile picture"
          class="md:h-full object-cover"
        />
      </IntersectionObserver>

      <div
        class="py-[32px] w-fit border-y-[1px] border-secondary-grey-200 border-solid"
      >
        <IntersectionObserver custom-class="slide-down">
          <div
            class="font-ibarra text-h2 font-bold text-primary-blue-200 pb-[32px]"
          >
            About Me
          </div>
          <div
            class="font-publicSans text-body-1 leading-body font-regular text-primary-blue-200 opacity-80 mb-[24px] max-w-[50ch]"
          >
            I'm a front-end developer currently based in Lagos Nigeria.
            Throughout my career working with JavaScript/TypeScript, Vue.js and
            React.js, I have had the privilege of working on a variety of
            projects, including the development of enterprise-grade web
            applications. My attention to detail shines when translating UI/UX
            designs into pixel-perfect code, ensuring a seamless and visually
            appealing user experience. I am equally comfortable working
            independently and collaboratively in an agile, cross-functional team
            setting.
          </div>
        </IntersectionObserver>

        <IntersectionObserver>
          <NuxtLink to="/portfolio">
            <BaseButton
              variant="secondary"
              class="uppercase text-xs tracking-[2px]"
              >Go to portfolio</BaseButton
            >
          </NuxtLink>
        </IntersectionObserver>
      </div>
    </section>

    <FooterCTA />
  </div>
</template>

<style lang="scss" scoped>
#picture-container {
  perspective: 1000px;
  overflow: hidden;
  cursor: url("cursor.png"), auto;
}

#picture {
  transform-style: preserve-3d;
  transition: transform 0.3s;
}
</style>
