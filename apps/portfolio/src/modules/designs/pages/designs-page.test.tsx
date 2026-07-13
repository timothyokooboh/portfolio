import type { ImgHTMLAttributes } from "react";
import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { renderWithIntl } from "@/test/render-with-intl";

import DesignsPage from "./designs-page";

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

describe("DesignsPage", () => {
  it("renders the designs page hero and collection", () => {
    renderWithIntl(<DesignsPage />);

    expect(
      screen.getByRole("heading", {
        name: /interface studies from a frontend engineer sharpening design craft\./i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /designing a homepage that feels credible before it feels flashy\./i,
      }),
    ).toBeInTheDocument();
  });
});
