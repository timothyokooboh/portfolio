import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import { describe, expect, it } from "vitest";

import { messages } from "@/i18n/messages";

import { SiteHeader } from "./site-header";

function renderHeader() {
  render(
    <NextIntlClientProvider locale="en" messages={messages}>
      <SiteHeader activeItemId="home" />
    </NextIntlClientProvider>,
  );
}

describe("SiteHeader", () => {
  it("uses a layout-neutral active navigation indicator", () => {
    renderHeader();

    const primaryNavigation = screen.getByRole("navigation", {
      name: /primary navigation/i,
    });
    const activeLink = within(primaryNavigation).getByRole("link", {
      name: /home/i,
    });

    expect(
      within(primaryNavigation).queryByRole("link", { name: /^designs$/i }),
    ).not.toBeInTheDocument();
    expect(activeLink).toHaveAttribute("aria-current", "page");
    expect(activeLink.className).toContain("after:absolute");
    expect(activeLink.className).toContain("after:scale-x-100");
    expect(activeLink.className).not.toContain("border-b");
  });

  it("wires contact actions to the contact page", () => {
    renderHeader();

    const contactLinks = screen.getAllByRole("link", { name: /contact/i });
    const wiredLink = contactLinks.find((link) => link.getAttribute("href") === "/contact");

    expect(wiredLink).toBeInTheDocument();
  });

  it("opens and closes the mobile navigation menu", async () => {
    renderHeader();

    const menuButton = screen.getByLabelText(/open navigation menu/i);
    expect(menuButton).toHaveAccessibleName(/open navigation menu/i);

    fireEvent.click(menuButton);

    await waitFor(() => {
      expect(menuButton).toHaveAccessibleName(/close navigation menu/i);
    });

    const mobileDialog = screen.getByRole("dialog", {
      name: /mobile navigation/i,
    });
    const mobileNavigation = within(mobileDialog).getByRole("navigation", {
      name: /mobile navigation/i,
    });

    expect(within(mobileNavigation).getByRole("link", { name: /work/i })).toBeInTheDocument();
    expect(
      within(mobileNavigation).queryByRole("link", { name: /^designs$/i }),
    ).not.toBeInTheDocument();
    await waitFor(() => {
      expect(within(mobileNavigation).getByRole("link", { name: /home/i })).toHaveFocus();
    });

    fireEvent.keyDown(document, { key: "Escape" });

    await waitFor(() => {
      expect(menuButton).toHaveAccessibleName(/open navigation menu/i);
    });

    expect(screen.queryByRole("dialog", { name: /mobile navigation/i })).not.toBeInTheDocument();
    expect(menuButton).toHaveFocus();
  });
});
