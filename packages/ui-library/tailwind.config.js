/** @type {import('tailwindcss').Config} */
import tokens from "@portfolio/foundations/lib/tailwindExtends";

export default {
  theme: {
    extend: {
      ...tokens,
    },
  },
  content: ["./index.html", "./src/*/.{vue,js,ts}"],
  plugins: [],
};
