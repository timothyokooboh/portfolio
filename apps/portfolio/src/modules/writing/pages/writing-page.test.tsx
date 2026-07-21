import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderWithIntl } from "@/test/render-with-intl";
import { getPublishedWritingArticles } from "@/modules/writing/server/writing-content";

import { WritingPageContent } from "./writing-page";

describe("WritingPage", () => {
  it("renders the writing page hero and published collection", async () => {
    const publishedArticles = await getPublishedWritingArticles();

    renderWithIntl(
      <WritingPageContent publishedArticles={publishedArticles} />,
    );

    expect(
      screen.getByRole("heading", {
        name: /writing about frontend systems and user interface architecture/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", {
        name: /interface motion that clarifies instead of distracts\./i,
      }),
    ).not.toBeInTheDocument();
  });
});
