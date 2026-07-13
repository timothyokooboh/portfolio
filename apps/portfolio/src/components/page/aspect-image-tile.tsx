import Image from "next/image";
import { cn } from "@portfolio/ui-lib";

import { INTERFACE_SCREENSHOT_IMAGE_QUALITY } from "@/constants/media";

interface AspectImageTileProps {
  alt: string;
  className?: string;
  priority?: boolean;
  src: string;
}

function AspectImageTile({
  alt,
  className,
  priority = false,
  src,
}: AspectImageTileProps) {
  return (
    <div className={cn("relative aspect-[16/10] overflow-hidden rounded-card border border-white/8", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={INTERFACE_SCREENSHOT_IMAGE_QUALITY}
        loading={priority ? "eager" : undefined}
        sizes="(min-width: 1280px) 42rem, (min-width: 768px) 70vw, 100vw"
        className="object-cover object-top"
      />
    </div>
  );
}

export { AspectImageTile };
