import { SectionHeading, cn } from "@portfolio/ui-lib";

import type { WorkProjectGalleryItem } from "@/modules/work/types/work";

import { WorkGalleryItemCard } from "./work-gallery-item-card";

interface WorkGalleryProps {
  items: WorkProjectGalleryItem[];
  title: string;
  caption: string;
}

function WorkGallery({ caption, items, title }: WorkGalleryProps) {
  return (
    <div className="space-y-6">
      <SectionHeading title={title} description={caption} />
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item, index) => (
          <WorkGalleryItemCard
            key={`${item.src}-${item.title}`}
            item={item}
            className={cn(index === 0 && items.length > 1 && "md:col-span-2")}
          />
        ))}
      </div>
    </div>
  );
}

export { WorkGallery };
