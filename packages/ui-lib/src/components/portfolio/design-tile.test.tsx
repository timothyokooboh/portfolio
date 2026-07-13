import { render, screen } from "@testing-library/react";

import { DesignTile } from "./design-tile";

describe("DesignTile", () => {
  it("uses the title as the accessible link name when interactive", () => {
    render(
      <DesignTile
        href="/designs/homepage-credibility"
        title="Designing a homepage that feels credible before it feels flashy."
        caption="Layout study"
        visual={<div>Visual</div>}
      />,
    );

    expect(
      screen.getByRole("link", {
        name: /designing a homepage that feels credible before it feels flashy\./i,
      }),
    ).toHaveAttribute("href", "/designs/homepage-credibility");
  });
});
