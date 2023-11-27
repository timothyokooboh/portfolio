import { render } from "@testing-library/vue";
import BaseButton from "./BaseButton.vue";
import { expect, it } from "vitest";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

it("renders properly", () => {
  render(BaseButton);
});

it("renders default slot properly", () => {
  const { container } = render(BaseButton, {
    slots: {
      default: `<div>About Me</div>`,
    },
  });

  expect(container.textContent).toMatch(/about me/i);
});

it("is accessible", async () => {
  const { container } = render(BaseButton, {
    slots: {
      default: `<div>About Me</div>`,
    },
  });
  const result = await axe(container);
  expect(result).toHaveNoViolations();
});
