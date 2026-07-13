import { fireEvent, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { renderWithIntl } from "@/test/render-with-intl";
import { copyTextToClipboard } from "@/utils/copy-text-to-clipboard";

import { EmailActionLink } from "./email-action-link";

vi.mock("@/utils/copy-text-to-clipboard", () => ({
  copyTextToClipboard: vi.fn(),
}));

const TEST_EMAIL_ADDRESS = "hello@example.com";

describe("EmailActionLink", () => {
  beforeEach(() => {
    vi.mocked(copyTextToClipboard).mockReset();
  });

  it("keeps the native email action and confirms a successful copy", async () => {
    vi.mocked(copyTextToClipboard).mockResolvedValue(true);
    renderWithIntl(
      <EmailActionLink
        emailAddress={TEST_EMAIL_ADDRESS}
        label="Email me"
        variant="primary"
      />,
    );

    const emailLink = screen.getByRole("link", { name: "Email me" });

    emailLink.addEventListener("click", (event) => event.preventDefault());
    fireEvent.click(emailLink);

    expect(emailLink).toHaveAttribute("href", `mailto:${TEST_EMAIL_ADDRESS}`);
    expect(copyTextToClipboard).toHaveBeenCalledWith(TEST_EMAIL_ADDRESS);
    expect(
      await screen.findByRole("link", { name: "Email copied" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("Email copied");
    expect(screen.getByText("Email me")).toHaveClass("invisible");
  });

  it("shows an accessible fallback message when copying is unavailable", async () => {
    vi.mocked(copyTextToClipboard).mockResolvedValue(false);
    renderWithIntl(
      <EmailActionLink emailAddress={TEST_EMAIL_ADDRESS} label="Email me" />,
    );

    const emailLink = screen.getByRole("link", { name: "Email me" });

    emailLink.addEventListener("click", (event) => event.preventDefault());
    fireEvent.click(emailLink);

    expect(
      await screen.findByRole("link", { name: "Copy unavailable" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("Copy unavailable");
  });
});
