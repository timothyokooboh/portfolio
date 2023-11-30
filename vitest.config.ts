/// <reference types="vitest" />

import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import Vue from "@vitejs/plugin-vue";

export default defineConfig(() => ({
  plugins: [Vue()],
  test: {
    globals: true,
    environment: "jsdom",
    exclude: [
      ...configDefaults.exclude,
      "apps/*/e2e/*",
      "apps/*/tests-examples/*",
    ],
  },
}));
