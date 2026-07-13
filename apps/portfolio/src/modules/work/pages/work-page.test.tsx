import type { ImgHTMLAttributes } from "react";
import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { renderWithIntl } from "@/test/render-with-intl";

import WorkPage from "./work-page";

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

describe("WorkPage", () => {
  it("renders the work page hero", () => {
    renderWithIntl(<WorkPage />);

    expect(
      screen.getByRole("heading", {
        name: /frontend work with real product depth\./i,
      }),
    ).toBeInTheDocument();
  });
});
