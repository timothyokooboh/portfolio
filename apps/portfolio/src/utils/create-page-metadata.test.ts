import { describe, expect, it } from "vitest";

import {
  createPageMetadata,
  createSiteMetadata,
} from "./create-page-metadata";

describe("createPageMetadata", () => {
  it("builds canonical, open graph, and twitter metadata with absolute URLs", () => {
    const metadata = createPageMetadata({
      baseUrl: "https://timothyokooboh.com",
      description: "Portfolio page description",
      path: "/work",
      title: "Work | Timothy Okooboh",
    });
    const openGraphImage = Array.isArray(metadata.openGraph?.images)
      ? metadata.openGraph.images[0]
      : metadata.openGraph?.images;

    expect(metadata.alternates?.canonical).toBe("https://timothyokooboh.com/work");
    expect(metadata.openGraph?.url).toBe("https://timothyokooboh.com/work");
    expect(openGraphImage).toMatchObject({
      url: "https://timothyokooboh.com/opengraph-image",
      alt: "Work | Timothy Okooboh",
    });
    expect(metadata.twitter).toMatchObject({
      card: "summary_large_image",
      title: "Work | Timothy Okooboh",
      description: "Portfolio page description",
      images: ["https://timothyokooboh.com/twitter-image"],
    });
  });
});

describe("createSiteMetadata", () => {
  it("builds site-level metadata defaults", () => {
    const metadata = createSiteMetadata({
      baseUrl: "https://timothyokooboh.com",
      description: "Portfolio site description",
      title: "Timothy Okooboh | Senior Frontend Engineer",
    });

    expect(metadata.applicationName).toBe("Timothy Okooboh Portfolio");
    expect(metadata.metadataBase?.toString()).toBe("https://timothyokooboh.com/");
    expect(metadata.openGraph?.siteName).toBe("Timothy Okooboh");
    expect(metadata.twitter?.images).toEqual([
      "https://timothyokooboh.com/twitter-image",
    ]);
  });
});
