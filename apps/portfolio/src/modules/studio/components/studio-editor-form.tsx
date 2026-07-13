"use client";

import { useActionState, useState } from "react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CodeWindow,
  If,
  Input,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
} from "@portfolio/ui-lib";
import { useTranslations } from "next-intl";

import { INITIAL_STUDIO_EDITOR_ACTION_STATE } from "@/modules/studio/constants/studio-editor";
import {
  STUDIO_EDITOR_ACTION_INTENTS,
  WRITING_ARTICLE_STATUS,
} from "@/modules/writing/constants/writing";
import { upsertStudioArticleAction } from "@/modules/studio/actions/upsert-studio-article";
import type { WritingArticle } from "@/modules/writing/types/writing";
import { getWritingStructureSummary } from "@/modules/studio/utils/get-writing-structure-summary";

interface StudioEditorFormProps {
  article: WritingArticle | null;
  mode: "edit" | "new";
}

interface FieldErrorMessageProps {
  errorKey?: string;
  errorMessages: Record<string, string>;
}

function FieldErrorMessage({
  errorKey,
  errorMessages,
}: FieldErrorMessageProps) {
  if (!errorKey) {
    return null;
  }

  return <p className="text-sm text-[var(--color-danger)]">{getErrorMessage(errorKey, errorMessages)}</p>;
}

function StudioEditorForm({ article, mode }: StudioEditorFormProps) {
  const t = useTranslations("studio.editor");
  const [state, formAction, isPending] = useActionState(
    upsertStudioArticleAction,
    INITIAL_STUDIO_EDITOR_ACTION_STATE,
  );
  const fieldErrorKeys = state?.fieldErrorKeys ?? {};
  const formErrorKey = state?.formErrorKey ?? null;
  const [status, setStatus] = useState(article?.status ?? WRITING_ARTICLE_STATUS.draft);
  const [title, setTitle] = useState(article?.hero.title ?? "");
  const [slug, setSlug] = useState(article?.slug ?? "");
  const [description, setDescription] = useState(article?.hero.description ?? "");
  const [summary, setSummary] = useState(article?.summary ?? "");
  const [category, setCategory] = useState(article?.meta.category ?? "");
  const [readTime, setReadTime] = useState(article?.meta.readTime ?? "");
  const [body, setBody] = useState(article?.body ?? "");
  const sectionSummary = getWritingStructureSummary(body);
  const previewTitle = title || t("previewEmptyTitle");
  const previewDescription = description || t("previewEmptyDescription");
  const previewSummary = summary || t("previewEmptySummary");
  const bodyExample = t.raw("bodyExample") as string;
  const bodyPlaceholder = t.raw("bodyPlaceholder") as string;
  const errorMessages = {
    required: t("errors.required"),
    slugTaken: t("errors.slugTaken"),
    validationError: t("errors.validationError"),
  } satisfies Record<string, string>;
  let statusLabel = t("draftLabel");

  if (status === WRITING_ARTICLE_STATUS.published) {
    statusLabel = t("publishedLabel");
  }

  if (mode === "edit" && !article) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{t("editTitle")}</CardTitle>
          <CardDescription>{t("notAvailable")}</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <form action={formAction} className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_24rem]">
      <input type="hidden" name="previousSlug" value={article?.slug ?? ""} />
      <input type="hidden" name="status" value={status} />

      <Card className="min-w-0">
        <CardHeader className="p-6 pb-0 sm:p-8 sm:pb-0">
          <CardTitle>{t("formTitle")}</CardTitle>
          <CardDescription>{t("description")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 px-6 pb-6 pt-8 sm:px-8 sm:pb-8">
          <Tabs value={status} onValueChange={(value) => setStatus(value as WritingArticle["status"])}>
            <TabsList>
              <TabsTrigger value={WRITING_ARTICLE_STATUS.draft}>{t("draftLabel")}</TabsTrigger>
              <TabsTrigger value={WRITING_ARTICLE_STATUS.published}>{t("publishedLabel")}</TabsTrigger>
            </TabsList>
            <TabsContent value={WRITING_ARTICLE_STATUS.draft} />
            <TabsContent value={WRITING_ARTICLE_STATUS.published} />
          </Tabs>

          <div className="grid gap-x-6 gap-y-8 md:grid-cols-2">
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="article-title" className="text-sm font-medium text-ink">
                {t("titleLabel")}
              </label>
              <Input
                id="article-title"
                name="title"
                required
                value={title}
                placeholder={t("newTitlePlaceholder")}
                aria-invalid={Boolean(fieldErrorKeys.title)}
                onChange={(event) => setTitle(event.currentTarget.value)}
              />
              <FieldErrorMessage errorKey={fieldErrorKeys.title} errorMessages={errorMessages} />
            </div>

            <div className="space-y-2">
              <label htmlFor="article-slug" className="text-sm font-medium text-ink">
                {t("slugLabel")}
              </label>
              <Input
                id="article-slug"
                name="slug"
                required
                value={slug}
                placeholder={t("newSlugPlaceholder")}
                aria-invalid={Boolean(fieldErrorKeys.slug)}
                onChange={(event) => setSlug(event.currentTarget.value)}
              />
              <FieldErrorMessage errorKey={fieldErrorKeys.slug} errorMessages={errorMessages} />
            </div>

            <div className="space-y-2">
              <label htmlFor="article-read-time" className="text-sm font-medium text-ink">
                {t("readTimeLabel")}
              </label>
              <Input
                id="article-read-time"
                name="readTime"
                required
                value={readTime}
                placeholder={t("newReadTimePlaceholder")}
                aria-invalid={Boolean(fieldErrorKeys.readTime)}
                onChange={(event) => setReadTime(event.currentTarget.value)}
              />
              <FieldErrorMessage errorKey={fieldErrorKeys.readTime} errorMessages={errorMessages} />
            </div>

            <div className="space-y-2">
              <label htmlFor="article-category" className="text-sm font-medium text-ink">
                {t("categoryLabel")}
              </label>
              <Input
                id="article-category"
                name="category"
                required
                value={category}
                placeholder={t("newCategoryPlaceholder")}
                aria-invalid={Boolean(fieldErrorKeys.category)}
                onChange={(event) => setCategory(event.currentTarget.value)}
              />
              <FieldErrorMessage errorKey={fieldErrorKeys.category} errorMessages={errorMessages} />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label htmlFor="article-description" className="text-sm font-medium text-ink">
                {t("descriptionLabel")}
              </label>
              <Textarea
                id="article-description"
                name="description"
                required
                value={description}
                placeholder={t("newDescriptionPlaceholder")}
                aria-invalid={Boolean(fieldErrorKeys.description)}
                onChange={(event) => setDescription(event.currentTarget.value)}
              />
              <FieldErrorMessage errorKey={fieldErrorKeys.description} errorMessages={errorMessages} />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label htmlFor="article-summary" className="text-sm font-medium text-ink">
                {t("summaryLabel")}
              </label>
              <Textarea
                id="article-summary"
                name="summary"
                required
                value={summary}
                placeholder={t("newSummaryPlaceholder")}
                aria-invalid={Boolean(fieldErrorKeys.summary)}
                onChange={(event) => setSummary(event.currentTarget.value)}
              />
              <FieldErrorMessage errorKey={fieldErrorKeys.summary} errorMessages={errorMessages} />
            </div>

            <div className="space-y-4 border-t border-border pt-8 md:col-span-2">
              <div className="space-y-2">
                <label htmlFor="article-body" className="text-sm font-medium text-ink">
                  {t("bodyLabel")}
                </label>
                <p className="text-sm leading-6 text-ink-muted">{t("bodyDescription")}</p>
              </div>
              <Textarea
                id="article-body"
                name="body"
                required
                value={body}
                rows={18}
                placeholder={bodyPlaceholder}
                aria-invalid={Boolean(fieldErrorKeys.body)}
                onChange={(event) => setBody(event.currentTarget.value)}
              />
              <FieldErrorMessage errorKey={fieldErrorKeys.body} errorMessages={errorMessages} />
            </div>
          </div>

          <CodeWindow
            filename={t("bodyExampleFilename")}
            actionLabel={t("bodyExampleLabel")}
            code={bodyExample}
          />

          <If condition={Boolean(formErrorKey)}>
            <p role="alert" className="text-sm text-[var(--color-danger)]">
              {getErrorMessage(formErrorKey ?? "validationError", errorMessages)}
            </p>
          </If>

          <div className="flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:flex-wrap">
            <Button
              className="w-full justify-center sm:w-auto"
              type="submit"
              name="intent"
              value={STUDIO_EDITOR_ACTION_INTENTS.saveDraft}
              disabled={isPending}
            >
              {t("saveDraft")}
            </Button>
            <Button
              className="w-full justify-center sm:w-auto"
              type="submit"
              name="intent"
              value={STUDIO_EDITOR_ACTION_INTENTS.publish}
              disabled={isPending}
              variant="secondary"
            >
              {t("publish")}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="min-w-0 space-y-8">
        <Card>
          <CardHeader className="p-6 pb-0 sm:p-8 sm:pb-0">
            <CardTitle>{t("previewTitle")}</CardTitle>
            <CardDescription>{t("previewDescription")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5 px-6 pb-6 pt-6 sm:px-8 sm:pb-8">
            <Badge variant="subtle">{statusLabel}</Badge>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold leading-tight text-ink">{previewTitle}</h3>
              <p className="text-sm leading-6 text-ink-muted">{previewDescription}</p>
              <p className="text-sm leading-6 text-ink">{previewSummary}</p>
            </div>
            <div className="space-y-2 border-t border-border pt-4 text-sm text-ink-muted">
              <p>{category || t("newCategoryPlaceholder")}</p>
              <p>{readTime || t("newReadTimePlaceholder")}</p>
              <p>{slug || t("newSlugPlaceholder")}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="p-6 pb-0 sm:p-8 sm:pb-0">
            <CardTitle>{t("sectionsTitle")}</CardTitle>
            <CardDescription>{t("sectionsDescription")}</CardDescription>
          </CardHeader>
          <CardContent className="px-6 pb-6 pt-6 sm:px-8 sm:pb-8">
            <If condition={sectionSummary.length > 0}>
              <div className="space-y-4">
                {sectionSummary.map((section) => (
                  <div key={section.title} className="rounded-card border border-border bg-background px-4 py-4">
                    <p className="text-sm font-semibold text-ink">{section.title}</p>
                    <p className="mt-1 text-sm text-ink-muted">
                      {t("lineCount", { count: section.lineCount })}
                    </p>
                  </div>
                ))}
              </div>
            </If>

            <If condition={sectionSummary.length === 0}>
              <p className="text-sm leading-6 text-ink-muted">{t("structureEmpty")}</p>
            </If>
          </CardContent>
        </Card>
      </div>
    </form>
  );
}

function getErrorMessage(errorKey: string, errorMessages: Record<string, string>) {
  return errorMessages[errorKey] ?? errorMessages.validationError ?? "";
}

export { StudioEditorForm };
