import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Badge } from "./badge";

describe("Badge", () => {
  it("allows long eyebrow labels to wrap without changing compact status badges", () => {
    render(
      <div>
        <Badge>Design exploration / Selected work archive</Badge>
        <Badge variant="subtle">Draft</Badge>
      </div>,
    );

    expect(screen.getByText(/selected work archive/i)).toHaveClass(
      "max-w-full",
      "whitespace-normal",
    );
    expect(screen.getByText("Draft")).toHaveClass("whitespace-nowrap");
  });
});
