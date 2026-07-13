interface WritingStructureSummaryItem {
  lineCount: number;
  title: string;
}

const MARKDOWN_SECTION_HEADING_PREFIX = "## ";

function getWritingStructureSummary(body: string) {
  if (!body.trim()) {
    return [];
  }

  const sections = body
    .split(MARKDOWN_SECTION_HEADING_PREFIX)
    .slice(1)
    .map((section) => section.trim())
    .filter(Boolean)
    .map((section) => {
      const lines = section.split(/\r?\n/);
      const [titleLine, ...contentLines] = lines;

      return {
        lineCount: contentLines.filter((line) => line.trim().length > 0).length,
        title: titleLine?.trim() ?? "Untitled section",
      };
    });

  return sections satisfies WritingStructureSummaryItem[];
}

export type { WritingStructureSummaryItem };
export { getWritingStructureSummary };
