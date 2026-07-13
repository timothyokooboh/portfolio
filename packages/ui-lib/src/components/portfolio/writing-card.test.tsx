import { render, screen } from "@testing-library/react";

import { WritingCard } from "./writing-card";

describe("WritingCard", () => {
  it("exposes an accessible link name when interactive", () => {
    render(
      <WritingCard
        href="/writing/architecting-vbox"
        meta="Open source / 8 min read"
        title="Architecting VBox: a polymorphic journey."
        summary="The design and engineering tradeoffs behind building a typed style-props experience for Vue."
      />,
    );

    expect(
      screen.getByRole("link", {
        name: /architecting vbox: a polymorphic journey\./i,
      }),
    ).toHaveAttribute("href", "/writing/architecting-vbox");
  });
});
