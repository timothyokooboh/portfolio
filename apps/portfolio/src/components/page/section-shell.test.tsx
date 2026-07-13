import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SectionShell } from "./section-shell";

describe("SectionShell", () => {
  it("applies layout spacing to the inner content wrapper", () => {
    render(
      <SectionShell className="pt-0" contentClassName="space-y-10">
        <p>Section content</p>
      </SectionShell>,
    );

    const section = screen.getByText("Section content").closest("section");
    const contentWrapper = screen.getByText("Section content").parentElement;

    expect(section).toHaveClass("pt-0");
    expect(section).not.toHaveClass("space-y-10");
    expect(contentWrapper).toHaveClass("space-y-10");
  });
});
