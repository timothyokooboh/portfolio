/** @type {import('tailwindcss').Config} */
import tokens from "@app/foundations/lib/tailwindExtends";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "../../node_modules/@app/ui-library/**/*.{js,vue,ts,html}",
  ],
  theme: {
    extend: {
      ...tokens,
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
