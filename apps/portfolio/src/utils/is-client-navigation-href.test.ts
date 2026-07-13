import { describe, expect, it } from "vitest";

import { isClientNavigationHref } from "./is-client-navigation-href";

describe("isClientNavigationHref", () => {
  it("uses client navigation for application routes", () => {
    expect(isClientNavigationHref("/work")).toBe(true);
    expect(isClientNavigationHref("/writing/article-slug?preview=true")).toBe(true);
  });

  it("preserves document navigation for external targets and static files", () => {
    expect(isClientNavigationHref("https://example.com")).toBe(false);
    expect(isClientNavigationHref("mailto:hello@example.com")).toBe(false);
    expect(isClientNavigationHref("#main-content")).toBe(false);
    expect(isClientNavigationHref("/documents/resume.pdf")).toBe(false);
  });
});
