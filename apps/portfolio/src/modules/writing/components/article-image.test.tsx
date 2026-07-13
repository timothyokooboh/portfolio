import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderWithIntl } from "@/test/render-with-intl";

import { ArticleImage } from "./article-image";

describe("ArticleImage", () => {
  it("renders the article image and caption", () => {
    renderWithIntl(
      <ArticleImage
        alt="Design system relationship map"
        caption="Optional caption"
        src="/images/writing/design-system-feedback-loop.svg"
      />,
    );

    expect(
      screen.getByAltText(/design system relationship map/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/optional caption/i)).toBeInTheDocument();
  });
});
