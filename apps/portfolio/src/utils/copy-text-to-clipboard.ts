const COPY_FALLBACK_TEXTAREA_STYLES = {
  left: "-9999px",
  opacity: "0",
  position: "fixed",
  top: "0",
} as const;

function copyTextWithSelection(text: string): boolean {
  const textarea = document.createElement("textarea");

  textarea.value = text;
  textarea.setAttribute("readonly", "");
  Object.assign(textarea.style, COPY_FALLBACK_TEXTAREA_STYLES);
  document.body.append(textarea);
  textarea.select();
  textarea.setSelectionRange(0, text.length);

  try {
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    textarea.remove();
  }
}

async function copyTextToClipboard(text: string): Promise<boolean> {
  if (typeof navigator === "undefined" || typeof document === "undefined") {
    return false;
  }

  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);

      return true;
    } catch {
      return copyTextWithSelection(text);
    }
  }

  return copyTextWithSelection(text);
}

export { copyTextToClipboard };
