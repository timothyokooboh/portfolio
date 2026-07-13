import * as React from "react";
import { cn } from "@portfolio/ui-lib";

import { WRITING_BLOCKQUOTE_CLASS, WRITING_H2_CLASS } from "@/constants/typography";
import { ArticleImage } from "./article-image";
import { ArticleDemo } from "./article-demo";
import { CodeShowcase } from "./code-showcase";
import { WritingCalloutBlock } from "./writing-callout-block";

function WritingImage({
  alt,
  src,
  title,
}: React.ComponentPropsWithoutRef<"img">) {
  if (!src || typeof src !== "string") {
    return null;
  }

  return <ArticleImage alt={alt ?? ""} caption={title} src={src} />;
}

function WritingParagraph({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  const hasSingleChild = React.Children.count(children) === 1;
  const containsStandaloneImage =
    hasSingleChild && React.isValidElement(children) && children.type === WritingImage;

  if (containsStandaloneImage) {
    return children;
  }

  return (
    <p className={cn("text-base leading-8 text-ink-muted", className)} {...props}>
      {children}
    </p>
  );
}

function getWritingMdxComponents() {
  return {
    a: function WritingAnchor({
      className,
      ...props
    }: React.ComponentPropsWithoutRef<"a">) {
      return (
        <a
          className={cn(
            "font-medium text-accent underline underline-offset-4 transition-colors duration-200 hover:text-accent-strong",
            className,
          )}
          {...props}
        />
      );
    },
    ArticleDemo,
    ArticleImage,
    blockquote: function WritingBlockquote({
      className,
      ...props
    }: React.ComponentPropsWithoutRef<"blockquote">) {
      return (
        <blockquote
          className={cn(
            WRITING_BLOCKQUOTE_CLASS,
            className,
          )}
          {...props}
        />
      );
    },
    CodeShowcase,
    code: function WritingCode({
      className,
      ...props
    }: React.ComponentPropsWithoutRef<"code">) {
      const hasLanguageClass = Boolean(className);

      if (hasLanguageClass) {
        return (
          <code
            className={cn("font-mono text-sm leading-7 text-[#bec6e0]", className)}
            {...props}
          />
        );
      }

      return (
        <code
          className={cn(
            "rounded-sm border border-border bg-surface px-1.5 py-1 font-mono text-[0.92em] text-ink",
            className,
          )}
          {...props}
        />
      );
    },
    h2: function WritingHeadingTwo({
      className,
      ...props
    }: React.ComponentPropsWithoutRef<"h2">) {
      return (
        <h2
          className={cn(
            WRITING_H2_CLASS,
            className,
          )}
          {...props}
        />
      );
    },
    h3: function WritingHeadingThree({
      className,
      ...props
    }: React.ComponentPropsWithoutRef<"h3">) {
      return (
        <h3
          className={cn(
            "scroll-mt-28 font-display text-2xl font-semibold leading-tight text-ink",
            className,
          )}
          {...props}
        />
      );
    },
    hr: function WritingRule(props: React.ComponentPropsWithoutRef<"hr">) {
      return <hr className="border-border" {...props} />;
    },
    img: WritingImage,
    li: function WritingListItem({
      className,
      ...props
    }: React.ComponentPropsWithoutRef<"li">) {
      return <li className={cn("leading-8 text-ink-muted", className)} {...props} />;
    },
    ol: function WritingOrderedList({
      className,
      ...props
    }: React.ComponentPropsWithoutRef<"ol">) {
      return (
        <ol
          className={cn("ml-6 list-decimal space-y-3 text-base leading-8 text-ink-muted", className)}
          {...props}
        />
      );
    },
    p: WritingParagraph,
    pre: function WritingPreformatted({
      className,
      ...props
    }: React.ComponentPropsWithoutRef<"pre">) {
      return (
        <pre
          className={cn(
            "min-w-0 w-full max-w-full overflow-x-auto rounded-[1.5rem] border border-white/5 bg-[#131b2e] px-6 py-7 font-mono text-sm leading-7 text-[#bec6e0] shadow-soft",
            className,
          )}
          {...props}
        />
      );
    },
    strong: function WritingStrong({
      className,
      ...props
    }: React.ComponentPropsWithoutRef<"strong">) {
      return <strong className={cn("font-semibold text-ink", className)} {...props} />;
    },
    ul: function WritingUnorderedList({
      className,
      ...props
    }: React.ComponentPropsWithoutRef<"ul">) {
      return (
        <ul
          className={cn("ml-6 list-disc space-y-3 text-base leading-8 text-ink-muted", className)}
          {...props}
        />
      );
    },
    WritingCallout: WritingCalloutBlock,
  };
}

export { getWritingMdxComponents };
