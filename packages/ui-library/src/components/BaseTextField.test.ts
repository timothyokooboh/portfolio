import BaseTextField from "./BaseTextField.vue";
import { render } from "@testing-library/vue";

it("renders input field correctly", () => {
  render(BaseTextField);
});

it("renders textarea correctly", () => {
  render(BaseTextField, {
    props: {
      as: "textarea",
    },
  });
});
