import {
  STUDIO_LOCAL_CONTENT_DIRECTORY,
  WRITING_ROUTE_PATHS,
} from "@/modules/writing/constants/writing";
import type { StudioEnvironmentState } from "@/modules/writing/types/writing";

function getWritingArticlePath(slug: string) {
  return `${WRITING_ROUTE_PATHS.index}/${slug}`;
}

function getStudioWritingEditPath(slug: string) {
  return `${WRITING_ROUTE_PATHS.studioIndex}/${slug}/edit`;
}

function getStudioEnvironmentState(): StudioEnvironmentState {
  return {
    contentDirectory: STUDIO_LOCAL_CONTENT_DIRECTORY,
    isLocalMode: process.env.NODE_ENV === "development",
  };
}

export {
  getStudioWritingEditPath,
  getStudioEnvironmentState,
  getWritingArticlePath,
};
