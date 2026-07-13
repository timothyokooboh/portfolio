import { Callout, If } from "@portfolio/ui-lib";
import { useTranslations } from "next-intl";

import { WRITING_ARTICLE_STATUS, WRITING_ROUTE_PATHS } from "@/modules/writing/constants/writing";
import type { WritingArticle } from "@/modules/writing/types/writing";
import { getWritingArticlePath } from "@/modules/writing/utils/get-writing-content";

import { ButtonLink } from "@/components/ui/button-link";
import { StudioSetupState } from "./studio-setup-state";
import { StudioEditorForm } from "./studio-editor-form";
import { StudioShell } from "./studio-shell";

interface StudioEditorPageProps {
  article: WritingArticle | null;
  contentDirectory: string;
  mode: "edit" | "new";
}

function StudioEditorPage({
  article,
  contentDirectory,
  mode,
}: StudioEditorPageProps) {
  const shell = useTranslations("studio.shell");
  const t = useTranslations("studio.editor");
  let previewHref: string | null = null;
  let editorTitle = t("editTitle");

  if (article?.status === WRITING_ARTICLE_STATUS.published) {
    previewHref = getWritingArticlePath(article.slug);
  }

  if (mode === "new") {
    editorTitle = t("newTitle");
  }

  return (
    <StudioShell
      description={shell("description")}
      mainId="studio-editor-page"
      title={shell("title")}
      actions={
        <>
          <ButtonLink href={WRITING_ROUTE_PATHS.studioIndex} variant="secondary" size="sm">
            {shell("allPosts")}
          </ButtonLink>
          <If condition={Boolean(previewHref)}>
            <ButtonLink href={previewHref ?? WRITING_ROUTE_PATHS.studioIndex} variant="ghost" size="sm">
              {t("preview")}
            </ButtonLink>
          </If>
        </>
      }
    >
      <div className="space-y-10 md:space-y-12">
        <Callout className="p-6 sm:p-8 md:p-10" title={editorTitle}>
          <p className="max-w-5xl">{t("description")}</p>
        </Callout>
        <StudioSetupState contentDirectory={contentDirectory} />
        <StudioEditorForm article={article} mode={mode} />
      </div>
    </StudioShell>
  );
}

export { StudioEditorPage };
