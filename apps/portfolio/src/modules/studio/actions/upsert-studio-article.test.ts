import { beforeEach, describe, expect, it, vi } from "vitest";

import { INITIAL_STUDIO_EDITOR_ACTION_STATE } from "@/modules/studio/constants/studio-editor";

const studioAuthMocks = vi.hoisted(() => ({
  requireStudioSession: vi.fn(),
}));

vi.mock("@/modules/studio/utils/studio-auth", () => ({
  requireStudioSession: studioAuthMocks.requireStudioSession,
}));

import { upsertStudioArticleAction } from "./upsert-studio-article";

describe("upsertStudioArticleAction", () => {
  beforeEach(() => {
    studioAuthMocks.requireStudioSession.mockReset();
    studioAuthMocks.requireStudioSession.mockResolvedValue({
      envState: {
        contentDirectory: "content/writing",
        isLocalMode: true,
      },
    });
  });

  it("checks local studio access before validating article content", async () => {
    const result = await upsertStudioArticleAction(
      INITIAL_STUDIO_EDITOR_ACTION_STATE,
      new FormData(),
    );

    expect(studioAuthMocks.requireStudioSession).toHaveBeenCalledOnce();
    expect(result.formErrorKey).toBe("validationError");
    expect(result.fieldErrorKeys).not.toHaveProperty("relatedProject");
  });

  it("stops immediately when local studio access is denied", async () => {
    const accessError = new Error("Studio access denied");
    studioAuthMocks.requireStudioSession.mockRejectedValue(accessError);

    await expect(
      upsertStudioArticleAction(INITIAL_STUDIO_EDITOR_ACTION_STATE, new FormData()),
    ).rejects.toBe(accessError);
  });
});
