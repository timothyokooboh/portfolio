<script setup lang="ts">
import { BaseButton } from "@app/ui-library";
</script>

<template>
  <div>
    <IntersectionObserver custom-class="slide-down">
      <section
        class="flex flex-col-reverse items-center max-w-[500px] mx-auto lg:max-w-full lg:gap-x-[100px] lg:flex-row lg:justify-between lg:items-start"
      >
        <div>
          <h2
            class="mb-[53px] text-[2rem] lg:text-h1 font-ibarra font-bold leading-h2 tracking-[-0.36px] text-primary-blue-200 md:text-h2 md:pt-[56px] lg:leading-h1"
          >
            Hey, I'm Timothy Okooboh and I love building valuable products
          </h2>

          <div
            class="flex flex-wrap items-center justify-center lg:justify-start"
          >
            <a href="#about-me">
              <BaseButton class="uppercase text-xs tracking-[2px] mr-3 mb-2"
                >About Me</BaseButton
              >
            </a>

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
          </div>
        </div>

        <div class="hidden md:flex md:justify-end">
          <img
            src="/realtrac.png"
            alt=""
            class="md:max-w-[400px] lg:max-w-[400px] object-contain border-solid border-[10px] border-[#33323D]"
          />
        </div>
      </section>
    </IntersectionObserver>

    <section
      id="about-me"
      class="grid mt-[80px] gap-y-[40px] md:grid-cols-[381px_1fr] md:gap-x-[69px] lg:grid-cols-[540px_1fr] lg:gap-x-[125px]"
    >
      <IntersectionObserver custom-class="slide-down">
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
            class="font-publicSans text-body-1 leading-body font-regular text-primary-blue-200 opacity-80 mb-[24px] max-w-[75ch]"
          >
            I'm a software engineer currently based in Lagos Nigeria. Throughout
            my career working with technologies such as TypeScript, Vue.js,
            React.js, GraphQL, etc, I have had the privilege of working on a
            variety of projects, including the development of enterprise-grade
            web applications. My attention to detail shines when translating
            UI/UX designs into pixel-perfect code, ensuring a seamless and
            visually appealing user experience. I am equally comfortable working
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
