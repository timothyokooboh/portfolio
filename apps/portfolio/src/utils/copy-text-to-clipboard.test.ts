import { afterEach, describe, expect, it, vi } from "vitest";

import { copyTextToClipboard } from "./copy-text-to-clipboard";

const TEST_TEXT = "hello@example.com";
const originalClipboardDescriptor = Object.getOwnPropertyDescriptor(
  navigator,
  "clipboard",
);
const originalExecCommandDescriptor = Object.getOwnPropertyDescriptor(
  document,
  "execCommand",
);

function restoreProperty(
  target: Document | Navigator,
  property: "clipboard" | "execCommand",
  descriptor: PropertyDescriptor | undefined,
) {
  if (descriptor) {
    Object.defineProperty(target, property, descriptor);
    return;
  }

  Reflect.deleteProperty(target, property);
}

describe("copyTextToClipboard", () => {
  afterEach(() => {
    restoreProperty(navigator, "clipboard", originalClipboardDescriptor);
    restoreProperty(document, "execCommand", originalExecCommandDescriptor);
  });

  it("uses the Clipboard API when it is available", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);

    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });

    await expect(copyTextToClipboard(TEST_TEXT)).resolves.toBe(true);
    expect(writeText).toHaveBeenCalledWith(TEST_TEXT);
  });

  it("falls back to a temporary text selection when Clipboard API access fails", async () => {
    const writeText = vi.fn().mockRejectedValue(new Error("Permission denied"));
    const execCommand = vi.fn().mockReturnValue(true);

    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    Object.defineProperty(document, "execCommand", {
      configurable: true,
      value: execCommand,
    });

    await expect(copyTextToClipboard(TEST_TEXT)).resolves.toBe(true);
    expect(execCommand).toHaveBeenCalledWith("copy");
    expect(document.querySelector("textarea")).not.toBeInTheDocument();
  });
});
