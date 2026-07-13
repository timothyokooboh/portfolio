import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { getWritingMdxComponents } from "./writing-mdx-components";

describe("getWritingMdxComponents", () => {
  it("renders standalone Markdown images without an invalid paragraph wrapper", () => {
    const components = getWritingMdxComponents();
    const WritingImage = components.img;
    const WritingParagraph = components.p;

    render(
      <WritingParagraph>
        <WritingImage
          alt="Design system feedback loop"
          src="/images/writing/design-system-feedback-loop.svg"
          title="A healthy design system feedback loop"
        />
      </WritingParagraph>,
    );

    const image = screen.getByRole("img", {
      name: /design system feedback loop/i,
    });

    expect(image.closest("figure")).toBeInTheDocument();
    expect(image.closest("p")).toBeNull();
  });
});
