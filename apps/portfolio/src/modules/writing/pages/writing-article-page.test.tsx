import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import {
  getNextWritingArticle,
  getPublishedWritingArticles,
} from "@/modules/writing/server/writing-content";
import { renderWithIntl } from "@/test/render-with-intl";

import { WritingArticlePageContent } from "./writing-article-page";

vi.mock("../components/writing-mdx-body", () => ({
  WritingMdxBody: ({ body }: { body: string }) => <div>{body}</div>,
}));

describe("WritingArticlePage", () => {
  it("renders the published article shell and follow-up card", async () => {
    const publishedArticles = await getPublishedWritingArticles();
    const article = publishedArticles[0];
    const nextArticle = await getNextWritingArticle(article?.slug ?? "");

    renderWithIntl(
      <WritingArticlePageContent article={article} nextArticle={nextArticle} />,
    );

    expect(
      screen.getAllByRole("heading", {
        name: /mastering component composition in vue\.js\./i,
      }),
    ).toHaveLength(1);
    expect(screen.getByRole("link", { name: /back to writing/i })).toBeInTheDocument();
    expect(screen.getByRole("complementary")).not.toHaveClass("lg:sticky");
    expect(
      screen.getByRole("heading", { name: /in this article/i }),
    ).toBeInTheDocument();
  });
});
