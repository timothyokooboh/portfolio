import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderWithIntl } from "@/test/render-with-intl";

import ContactPage from "./contact-page";

describe("ContactPage", () => {
  it("renders the contact page hero and direct email action", () => {
    renderWithIntl(<ContactPage />);

    expect(
      screen.getByRole("heading", {
        name: /hiring for senior frontend, design systems, or product ui\? let.?s talk\./i,
      }),
    ).toBeInTheDocument();

    const emailLink = screen
      .getAllByRole("link", { name: /email me/i })
      .find((link) => link.getAttribute("href") === "mailto:okoobohtimothy@gmail.com");

    expect(emailLink).toBeInTheDocument();
    expect(screen.queryByText(/snapshot/i)).not.toBeInTheDocument();
  });
});
