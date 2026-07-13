import { render, screen } from "@testing-library/react";

import { If } from "./if";

describe("If", () => {
  it("renders children when the condition is true", () => {
    render(
      <If condition>
        <span>Visible content</span>
      </If>,
    );

    expect(screen.getByText("Visible content")).toBeVisible();
  });

  it("renders nothing when the condition is false", () => {
    render(
      <If condition={false}>
        <span>Hidden content</span>
      </If>,
    );

    expect(screen.queryByText("Hidden content")).not.toBeInTheDocument();
  });
});
