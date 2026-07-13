const WRITING_PUBLISHED_ON_FORMAT_OPTIONS = {
  month: "long",
  year: "numeric",
} as const satisfies Intl.DateTimeFormatOptions;

function formatWritingPublishedOn(date: Date) {
  return new Intl.DateTimeFormat("en", WRITING_PUBLISHED_ON_FORMAT_OPTIONS).format(date);
}

export { formatWritingPublishedOn };
