import { WRITING_ARTICLE_STATUS, type WritingArticleStatus } from "@/modules/writing/constants/writing";

function getWritingArticleEyebrow({
  category,
  status,
}: {
  category: string;
  status: WritingArticleStatus;
}) {
  let statusLabel = "Draft";

  if (status === WRITING_ARTICLE_STATUS.published) {
    statusLabel = "Published";
  }

  return `${category} / ${statusLabel}`;
}

export { getWritingArticleEyebrow };
