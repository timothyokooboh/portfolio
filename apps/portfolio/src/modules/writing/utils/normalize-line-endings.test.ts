import { describe, expect, it } from "vitest";

import { normalizeLineEndings } from "./normalize-line-endings";

describe("normalizeLineEndings", () => {
  it("normalizes Windows and legacy line endings", () => {
    expect(normalizeLineEndings("first\r\nsecond\rthird\nfourth")).toBe(
      "first\nsecond\nthird\nfourth",
    );
  });
});
