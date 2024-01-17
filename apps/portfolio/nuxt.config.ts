// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
import vsharp from "vite-plugin-vsharp";

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

  vite: {
    plugins: [vsharp()],
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
});
