// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    // "@nuxtjs/eslint-module",
    "@formkit/auto-animate/nuxt",
    "@nuxt/content",
  ],
  imports: {
    transform: {
      // you could also add the path of your built library to prevent this happening
      // for your users, but the issue is probably only replicable in your monorepo
      exclude: [/\bsfui\b/],
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "preload",
          as: "image",
          href: "landing-img-desktop.svg",
          imagesrcset:
            "landing-img-mobile.svg, landing-img-tablet.svg, landing-img-desktop.svg",
        },
      ],
    },
  },
  //eslint: {},
});
