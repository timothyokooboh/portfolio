const LINE_ENDING_PATTERN = /\r\n?/g;
const NORMALIZED_LINE_ENDING = "\n";

function normalizeLineEndings(value: string) {
  return value.replace(LINE_ENDING_PATTERN, NORMALIZED_LINE_ENDING);
}

export { normalizeLineEndings };
