import type { ImgHTMLAttributes } from "react";
import { NextIntlClientProvider } from "next-intl";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { messages } from "@/i18n/messages";
import HomePage from "./home-page";

vi.mock("next/image", () => ({
  default: (props: ImgHTMLAttributes<HTMLImageElement> & { priority?: boolean }) => {
    const imgProps = { ...props };
    Reflect.deleteProperty(imgProps, "priority");
    Reflect.deleteProperty(imgProps, "fill");

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img {...imgProps} alt={imgProps.alt ?? ""} />
    );
  },
}));

describe("Home page", () => {
  it("renders the portfolio hero heading", async () => {
    const homeRoute = await HomePage();

    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        {homeRoute}
      </NextIntlClientProvider>,
    );

    expect(
      screen.getByRole("heading", {
        name: /frontend engineering with systems depth and growing design taste\./i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /view case studies/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /view all projects/i,
      }),
    ).toHaveAttribute("href", "/work");
    expect(
      screen.getByRole("link", {
        name: /read all/i,
      }),
    ).toHaveAttribute("href", "/writing");
    expect(
      screen.getByRole("link", {
        name: /mastering component composition in vue\.js\./i,
      }),
    ).toHaveAttribute("href", "/writing/mastering-component-composition-in-vue");
    expect(screen.queryByRole("link", { name: /^designs$/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /^view all$/i })).not.toBeInTheDocument();
    expect(
      screen.getByText(
        /open to senior frontend roles, design systems work, and selective contracts\./i,
      ),
    ).toBeInTheDocument();
    const getLinkByHref = (href: string) =>
      screen
        .getAllByRole("link")
        .find((link) => link.getAttribute("href") === href);

    const seamkitLink = getLinkByHref("/work/seamkit-ui");

    expect(seamkitLink).toHaveAttribute("href", "/work/seamkit-ui");
    expect(seamkitLink).toHaveClass("xl:col-span-8");
    expect(getLinkByHref("/work/olanna")).toHaveClass("xl:col-span-4");
    expect(getLinkByHref("/work/myfastmeds")).toHaveClass("xl:col-span-4");
    expect(getLinkByHref("/work/vbox")).toHaveClass("xl:col-span-8");
    expect(
      screen.getByText(/40\+ reusable and accessible vue\.js design system components/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/figma, typescript, vue 3, react, next\.js/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /realtrac/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/built and optimized a nuxt ssr application/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /education, certifications, and the path into engineering\./i,
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/university of benin/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/udacity full-stack developer nanodegree/i)).toBeInTheDocument();
  });
});
