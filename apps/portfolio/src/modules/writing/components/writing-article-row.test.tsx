import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { WritingArticleRow } from "./writing-article-row";

vi.mock("@/components/ui/app-link", () => ({
  AppLink: ({ children, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

const ARTICLE_PROPS = {
  meta: "Architecture / 5 min read",
  summary: "A practical guide to composing resilient component APIs.",
  title: "Mastering component composition",
};

describe("WritingArticleRow", () => {
  it("renders an accessible article link when an href is provided", () => {
    render(<WritingArticleRow {...ARTICLE_PROPS} href="/writing/composition" />);

    expect(
      screen.getByRole("link", { name: /mastering component composition/i }),
    ).toHaveAttribute("href", "/writing/composition");
  });

  it("renders a non-interactive article without a link", () => {
    render(<WritingArticleRow {...ARTICLE_PROPS} />);

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(screen.getByText(ARTICLE_PROPS.summary)).toBeInTheDocument();
  });
});
