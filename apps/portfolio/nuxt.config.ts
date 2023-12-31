// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    preset: "vercel",
    output: {
      dir: ".vercel/output",
    },
  },
   imports: {
    transform: {
      // you could also add the path of your built library to prevent this happening
      // for your users, but the issue is probably only replicable in your monorepo
      exclude: [/\bsfui\b/],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@formkit/auto-animate/nuxt",
    "@nuxt/content",
  ],
 
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
});
