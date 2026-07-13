import type { Preview } from "@storybook/react-vite";
import "../src/styles/storybook.css";

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      defaultValue: "light",
      toolbar: {
        icon: "mirror",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
      },
    },
  },
  parameters: {
    layout: "padded",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle("dark", context.globals.theme === "dark");
        document.documentElement.classList.toggle("light", context.globals.theme !== "dark");
      }

      return Story();
    },
  ],
};

export default preview;
