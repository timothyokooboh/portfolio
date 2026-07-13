import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import { describe, expect, it } from "vitest";

import { messages } from "@/i18n/messages";

import { SiteFooter } from "./site-footer";

function renderFooter() {
  render(
    <NextIntlClientProvider locale="en" messages={messages}>
      <SiteFooter />
    </NextIntlClientProvider>,
  );
}

describe("SiteFooter", () => {
  it("routes the main footer CTA to the contact page", () => {
    renderFooter();

    expect(
      screen.getByRole("link", {
        name: /share the context\./i,
      }),
    ).toHaveAttribute("href", "/contact");
    expect(screen.queryByRole("link", { name: /^designs$/i })).not.toBeInTheDocument();
  });
});
