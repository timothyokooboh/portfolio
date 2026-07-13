import Image from "next/image";
import { cn } from "@portfolio/ui-lib";

import { INTERFACE_SCREENSHOT_IMAGE_QUALITY } from "@/constants/media";
import {
  PROJECT_IMAGE_DIMENSIONS,
  PROJECT_IMAGE_SOURCES,
  type ProjectKey,
} from "@/modules/work/constants/project-media";

interface ProjectScreenshotProps {
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  projectKey: ProjectKey;
  sizes: string;
}

function ProjectScreenshot({
  alt,
  className,
  fill = false,
  priority = false,
  projectKey,
  sizes,
}: ProjectScreenshotProps) {
  const dimensions = PROJECT_IMAGE_DIMENSIONS[projectKey];

  if (fill) {
    return (
      <Image
        src={PROJECT_IMAGE_SOURCES[projectKey]}
        alt={alt}
        fill
        priority={priority}
        quality={INTERFACE_SCREENSHOT_IMAGE_QUALITY}
        loading={priority ? "eager" : undefined}
        sizes={sizes}
        className={cn("object-cover", className)}
      />
    );
  }

  return (
    <Image
      src={PROJECT_IMAGE_SOURCES[projectKey]}
      alt={alt}
      width={dimensions.width}
      height={dimensions.height}
      priority={priority}
      quality={INTERFACE_SCREENSHOT_IMAGE_QUALITY}
      loading={priority ? "eager" : undefined}
      sizes={sizes}
      className={cn("h-full w-full object-cover", className)}
    />
  );
}

export { ProjectScreenshot };
