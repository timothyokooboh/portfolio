import { cn } from "@portfolio/ui-lib";

import type { WorkProjectGalleryItem } from "@/modules/work/types/work";

import { AspectImageTile } from "@/components/page/aspect-image-tile";

interface WorkGalleryItemCardProps {
  className?: string;
  item: WorkProjectGalleryItem;
}

function WorkGalleryItemCard({ className, item }: WorkGalleryItemCardProps) {
  return (
    <article className={cn("overflow-hidden rounded-panel border border-border/50 bg-surface shadow-soft", className)}>
      <AspectImageTile
        src={item.src}
        alt={item.alt}
        className="rounded-none border-b border-x-0 border-t-0 border-border/50"
      />

      <div className="space-y-3 px-5 py-5 sm:px-6 sm:py-6">
        <h3 className="font-display text-2xl leading-tight text-ink">{item.title}</h3>
        <p className="text-sm leading-7 text-ink-muted sm:text-base">{item.caption}</p>
      </div>
    </article>
  );
}

export { WorkGalleryItemCard };
