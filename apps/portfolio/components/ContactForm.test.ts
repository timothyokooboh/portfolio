import { render, screen } from "@testing-library/vue";
import { axe, toHaveNoViolations } from "jest-axe";
import ContactForm from "./ContactForm.vue";

expect.extend(toHaveNoViolations);

it("renders correctly", () => {
  render(ContactForm);
});

it("is accessible", async () => {
  const { container } = render(ContactForm);
  const result = await axe(container);
  expect(result).toHaveNoViolations();
});

it("renders the correct form elements", () => {
  render(ContactForm);

  // renders the label for name input
  screen.getByTestId("name");

  // renders the text field for typing name
  screen.getByTestId("name-input");

  // renders the label for email address input
  screen.getByTestId("email");

  // renders the text field for typing email address
  screen.getByTestId("email-input");

  // renders the label for message input
  screen.getByTestId("message");

  // renders the text area for typing message
  screen.getByTestId("message-input");

  // renders the button for submitting a message
  screen.getByTestId("submit-btn");
});
