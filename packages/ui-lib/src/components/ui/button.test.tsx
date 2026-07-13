import { render, screen } from "@testing-library/react";

import { Button, IconButton } from "./button";

describe("Button", () => {
  it("renders an accessible button", () => {
    render(<Button>View Case Study</Button>);

    expect(screen.getByRole("button", { name: /view case study/i })).toBeVisible();
  });

  it("supports icon-only labels", () => {
    render(<IconButton srLabel="Toggle theme">T</IconButton>);

    expect(screen.getByRole("button", { name: /toggle theme/i })).toBeVisible();
  });
});
