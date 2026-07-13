import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [tailwindcss()],
    }),
};

export default config;
