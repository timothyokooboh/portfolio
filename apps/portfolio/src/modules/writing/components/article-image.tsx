import { If } from "@portfolio/ui-lib";

interface ArticleImageProps {
  alt: string;
  caption?: string;
  src: string;
}

function ArticleImage({ alt, caption, src }: ArticleImageProps) {
  return (
    <figure className="space-y-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={alt}
        src={src}
        className="w-full rounded-[1.5rem] border border-border bg-surface object-cover shadow-soft"
      />
      <If condition={Boolean(caption)}>
        <figcaption className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft">
          {caption}
        </figcaption>
      </If>
    </figure>
  );
}

export { ArticleImage };
