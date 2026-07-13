import { describe, expect, it } from "vitest";

import { messages } from "@/i18n/messages";

import { getWorkProjectDetail } from "./get-work-content";

describe("getWorkProjectDetail", () => {
  it("builds structured gallery content for work case studies", () => {
    const olanna = getWorkProjectDetail(messages, "olanna");
    const seamkit = getWorkProjectDetail(messages, "seamkit-ui");
    const myfastmeds = getWorkProjectDetail(messages, "myfastmeds");
    const vbox = getWorkProjectDetail(messages, "vbox");

    expect(olanna.heroImage.src).toBe("/images/projects/olanna/inbox-thread.png");
    expect(olanna.gallery.items).toHaveLength(7);
    expect(olanna.gallery.items[0]).toMatchObject({
      title: "Agent query surface",
      src: "/images/projects/olanna/agent-home.png",
    });
    expect(olanna.gallery.items.at(-1)).toMatchObject({
      title: "Generated call summary",
      src: "/images/projects/olanna/call-summary.png",
    });

    expect(seamkit.heroImage.src).toBe("/images/projects/seamkit-ui/accessibility.png");
    expect(seamkit.gallery.items).toHaveLength(4);
    expect(seamkit.gallery.items[1]).toMatchObject({
      title: "Component catalogue overview",
      src: "/images/projects/seamkit-ui/components-overview.png",
    });

    expect(myfastmeds.heroImage.src).toBe("/images/projects/myfastmeds/cart.png");
    expect(myfastmeds.gallery.items).toHaveLength(4);
    expect(myfastmeds.gallery.items.at(-1)).toMatchObject({
      title: "Cart and checkout handoff",
      src: "/images/projects/myfastmeds/cart.png",
    });

    expect(vbox.heroImage.src).toBe("/images/projects/vbox/style-props.png");
    expect(vbox.gallery.items).toHaveLength(3);
    expect(vbox.gallery.items.at(-1)).toMatchObject({
      title: "Configuration and type setup",
      src: "/images/projects/vbox/vbox-config.png",
    });
  });

  it("returns grounded narrative copy for the project case studies", () => {
    const seamkit = getWorkProjectDetail(messages, "seamkit-ui");
    const olanna = getWorkProjectDetail(messages, "olanna");
    const myfastmeds = getWorkProjectDetail(messages, "myfastmeds");
    const vbox = getWorkProjectDetail(messages, "vbox");

    expect(seamkit.overview[0]).toMatch(/frontend foundation they can trust/i);
    expect(seamkit.reflection).toMatch(/shipping primitives is only part of the job/i);

    expect(olanna.hero.description).toMatch(/owned frontend work across authentication/i);
    expect(olanna.reflection).toMatch(/not only about what gets rendered/i);

    expect(myfastmeds.overview[1]).toMatch(
      /search, cart, checkout, account flows, inventory behavior, and operational rules/i,
    );
    expect(myfastmeds.reflection).toMatch(/clear architecture becomes a product decision/i);

    expect(vbox.overview[0]).toMatch(/i did not see a vue alternative that felt equally ergonomic/i);
    expect(vbox.reflection).toMatch(/real api and developer-experience trade-offs/i);
  });
});
