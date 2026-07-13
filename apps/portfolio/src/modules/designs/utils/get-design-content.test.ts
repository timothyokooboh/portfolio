import { describe, expect, it } from "vitest";

import { messages } from "@/i18n/messages";

import {
  getDesignProjectDetail,
  getDesignProjectTeasers,
  getHomeDesignProjectTeasers,
  isDesignProjectSlug,
} from "./get-design-content";

describe("getDesignContent", () => {
  it("builds the full public designs collection", () => {
    const projects = getDesignProjectTeasers(messages);

    expect(projects).toHaveLength(5);
    expect(projects[0]).toMatchObject({
      detailRoute: "/designs/portfolio-home-direction",
      label: "Portfolio Redesign / Home",
    });
  });

  it("returns the reduced home preview selection", () => {
    const projects = getHomeDesignProjectTeasers(messages);

    expect(projects).toHaveLength(4);
    expect(projects.every((project) => project.detailRoute.startsWith("/designs/"))).toBe(true);
  });

  it("builds a full detail payload for a design study", () => {
    const project = getDesignProjectDetail(messages, "case-study-storytelling");

    expect(project.meta.status).toBe("Selected for build");
    expect(project.principles).toHaveLength(3);
    expect(project.figmaHref).toContain("figma.com/design/");
  });

  it("returns grounded narrative copy for the design studies", () => {
    const designsPage = messages.designsPage;
    const writingSurface = getDesignProjectDetail(messages, "writing-journal-surface");
    const designShowcase = getDesignProjectDetail(messages, "design-showcase-gallery");

    expect(designsPage.hero.description).toMatch(/strengthening typography, layout, systems thinking, and motion design in public/i);
    expect(designsPage.intro.description).toMatch(/building the design side of my practice in public/i);
    expect(writingSurface.hero.title).toMatch(/designing a writing surface for technical notes, code, and demos/i);
    expect(writingSurface.reflection).toMatch(/when the layout gets quieter, the ideas themselves have more room/i);
    expect(designShowcase.reflection).toMatch(/visible, reviewable, and worth building on/i);
  });

  it("guards the valid design slugs", () => {
    expect(isDesignProjectSlug("design-showcase-gallery")).toBe(true);
    expect(isDesignProjectSlug("not-a-design")).toBe(false);
  });
});
