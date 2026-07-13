import { render, screen } from "@testing-library/react";

import { ProjectCard } from "./project-card";

const projectCardProps = {
  label: "Design System",
  title: "Seamkit UI",
  summary: "A cohesive system for accessible product surfaces.",
  visual: <div data-testid="project-visual">Visual</div>,
};

describe("ProjectCard", () => {
  it("applies wrapper layout classes to the link when href is provided", () => {
    const { container } = render(
      <ProjectCard
        {...projectCardProps}
        href="/work/seamkit-ui"
        className="xl:col-span-8"
      />,
    );

    const link = screen.getByRole("link", { name: /seamkit ui/i });

    expect(link).toHaveClass("xl:col-span-8");
    expect(link).toHaveAccessibleName("Seamkit UI");
    expect(container.querySelector("article")).not.toHaveClass(
      "ds-motion-surface-lift",
    );
    expect(container.querySelector(".ds-motion-visual")).not.toBeInTheDocument();
    expect(container.querySelector(".ds-motion-arrow-shift")).toBeInTheDocument();
  });

  it("applies layout classes to the article when the card is not interactive", () => {
    const { container } = render(
      <ProjectCard
        {...projectCardProps}
        className="xl:col-span-4"
      />,
    );

    const article = container.querySelector("article");

    expect(article).toHaveClass("xl:col-span-4");
  });

  it("keeps the dark tone on theme-stable inverse colors", () => {
    const { container } = render(
      <ProjectCard
        {...projectCardProps}
        tone="dark"
      />,
    );

    const article = container.querySelector("article");

    expect(article).toHaveClass("bg-inverse-surface");
    expect(article).toHaveClass("text-inverse-ink");
    expect(article).not.toHaveClass("bg-ink");
  });
});
