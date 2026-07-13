import Image from "next/image";
import { cn } from "@portfolio/ui-lib";

import { INTERFACE_SCREENSHOT_IMAGE_QUALITY } from "@/constants/media";

interface DesignPreviewImageProps {
  alt: string;
  className?: string;
  priority?: boolean;
  src: string;
}

function DesignPreviewImage({
  alt,
  className,
  priority = false,
  src,
}: DesignPreviewImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      quality={INTERFACE_SCREENSHOT_IMAGE_QUALITY}
      loading={priority ? "eager" : undefined}
      sizes="(min-width: 1280px) 24rem, (min-width: 768px) 50vw, 100vw"
      className={cn("object-cover object-top", className)}
    />
  );
}

export { DesignPreviewImage };
