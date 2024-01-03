// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    emailPassword: process.env.NUXT_EMAIL_PASSWORD,
  },

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
    [
      "nuxt-mail",
      {
        message: {
          to: "okoobohtimothy@gmail.com",
        },
        smtp: {
          host: "smtp.gmail.com",
          port: 587,
          auth: {
            user: "okoobohtimothy",
            pass: process.env.NUXT_EMAIL_PASSWORD,
          },
        },
      },
    ],
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
        {
          rel: "preload",
          as: "image",
          href: "eazy-access-customers-1.svg",
        },
        {
          rel: "preload",
          as: "image",
          href: "eazy-access-customers-2.png",
        },
        {
          rel: "preload",
          as: "image",
          href: "eazy-access-customers-3.png",
        },
        {
          rel: "preload",
          as: "image",
          href: "eazy-access-vendors-1.svg",
        },
        {
          rel: "preload",
          as: "image",
          href: "eazy-access-vendors-2.png",
        },
        {
          rel: "preload",
          as: "image",
          href: "eazy-access-vendors-3.png",
        },
        {
          rel: "preload",
          as: "image",
          href: "techjobs-1.png",
        },
        {
          rel: "preload",
          as: "image",
          href: "techjobs-2.png",
        },
        {
          rel: "preload",
          as: "image",
          href: "techjobs-3.png",
        },
        {
          rel: "preload",
          as: "image",
          href: "myllo-1.png",
        },
        {
          rel: "preload",
          as: "image",
          href: "myllo-2.png",
        },
        {
          rel: "preload",
          as: "image",
          href: "myllo-3.png",
        },
      ],
    },
  },
});
