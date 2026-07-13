import { notFound, redirect } from "next/navigation";

import { WRITING_ROUTE_PATHS } from "@/modules/writing/constants/writing";
import type { StudioEnvironmentState } from "@/modules/writing/types/writing";
import { getStudioEnvironmentState } from "@/modules/writing/utils/get-writing-content";

interface StudioAccessResult {
  envState: StudioEnvironmentState;
}

async function getStudioAccessState(): Promise<StudioAccessResult> {
  const envState = getStudioEnvironmentState();

  return {
    envState,
  };
}

async function requireStudioSession() {
  const accessState = await getStudioAccessState();

  if (!accessState.envState.isLocalMode) {
    notFound();
  }

  return accessState;
}

async function redirectAuthenticatedStudioUser() {
  const accessState = await getStudioAccessState();

  if (accessState.envState.isLocalMode) {
    redirect(WRITING_ROUTE_PATHS.studioIndex);
  }

  notFound();
}

export { getStudioAccessState, redirectAuthenticatedStudioUser, requireStudioSession };
