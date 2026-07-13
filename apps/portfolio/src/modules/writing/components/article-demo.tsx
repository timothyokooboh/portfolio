"use client";

import { useId, useState } from "react";
import { useMessages } from "next-intl";
import {
  Button,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@portfolio/ui-lib";

import type { WritingDemoId } from "@/modules/writing/constants/writing";
import type { AppMessages } from "@/types/messages";

function FeedbackSurfaceDemo() {
  const [dense, setDense] = useState(false);
  const switchId = useId();
  const messages = useMessages() as AppMessages;
  const copy = messages.writingArticlePage.demos.feedbackSurface;
  let buttonSize: "sm" | "md" = "md";

  if (dense) {
    buttonSize = "sm";
  }

  return (
    <div className="min-w-0 max-w-full overflow-hidden rounded-card border border-border bg-surface p-6 shadow-soft">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-accent">
              {copy.eyebrow}
            </p>
            <p className="text-sm leading-6 text-ink-muted">
              {copy.description}
            </p>
          </div>

          <label htmlFor={switchId} className="flex items-center gap-3 text-sm text-ink">
            {copy.denseMode}
            <Switch
              id={switchId}
              checked={dense}
              onCheckedChange={setDense}
              aria-label={copy.denseModeAriaLabel}
            />
          </label>
        </div>

        <Tabs defaultValue="review">
          <TabsList>
            <TabsTrigger value="review">{copy.tabs.review}</TabsTrigger>
            <TabsTrigger value="states">{copy.tabs.states}</TabsTrigger>
          </TabsList>

          <TabsContent value="review">
            <div className="rounded-card border border-border bg-background p-5 shadow-soft">
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-ink">{copy.review.title}</h3>
                  <p className="text-sm leading-6 text-ink-muted">
                    {copy.review.description}
                  </p>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-card border border-border bg-surface p-4">
                    <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink-soft">
                      {copy.review.focusTitle}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-ink">
                      {copy.review.focusDescription}
                    </p>
                  </div>
                  <div className="rounded-card border border-border bg-surface p-4">
                    <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink-soft">
                      {copy.review.feedbackTitle}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-ink">
                      {copy.review.feedbackDescription}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button size={buttonSize}>{copy.review.primaryAction}</Button>
                  <Button variant="secondary" size={buttonSize}>
                    {copy.review.secondaryAction}
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="states">
            <div className="grid gap-3 sm:grid-cols-3">
              <StateCard
                title={copy.states.restTitle}
                description={copy.states.restDescription}
              />
              <StateCard
                title={copy.states.hoverTitle}
                description={copy.states.hoverDescription}
              />
              <StateCard
                title={copy.states.pressTitle}
                description={copy.states.pressDescription}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function ComponentPreviewDemo() {
  const messages = useMessages() as AppMessages;
  const copy = messages.writingArticlePage.demos.componentPreview;

  return (
    <div className="min-w-0 max-w-full overflow-hidden rounded-card border border-border bg-surface p-6 shadow-soft">
      <div className="space-y-5">
        <div className="space-y-1">
          <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-accent">
            {copy.eyebrow}
          </p>
          <h3 className="text-lg font-semibold text-ink">{copy.title}</h3>
          <p className="text-sm leading-6 text-ink-muted">
            {copy.description}
          </p>
        </div>

        <div className="grid min-w-0 max-w-full gap-4 md:grid-cols-[minmax(0,1fr)_16rem]">
          <div className="min-w-0 max-w-full overflow-hidden rounded-card border border-border bg-background p-5 shadow-soft">
            <pre className="max-w-full overflow-x-auto font-mono text-sm leading-7 text-ink">
              <code>{copy.code}</code>
            </pre>
          </div>

          <div className="min-w-0 max-w-full rounded-card border border-border bg-background p-5 shadow-soft">
            <div className="flex h-full flex-col justify-between gap-5">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-ink">{copy.renderedIdea}</p>
                <div className="rounded-card border border-border bg-surface p-4">
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded-full bg-accent/20" />
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-ink">{copy.name}</p>
                      <p className="text-sm text-ink-muted">{copy.caption}</p>
                    </div>
                  </div>
                </div>
              </div>
              <Button size="sm">{copy.action}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface StateCardProps {
  description: string;
  title: string;
}

function StateCard({ description, title }: StateCardProps) {
  return (
    <div className="rounded-card border border-border bg-surface p-4 shadow-soft">
      <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink-soft">{title}</p>
      <p className="mt-3 text-sm leading-6 text-ink-muted">{description}</p>
    </div>
  );
}

interface ArticleDemoProps {
  demoId: WritingDemoId;
}

function ArticleDemo({ demoId }: ArticleDemoProps) {
  if (demoId === "feedback-surface") {
    return <FeedbackSurfaceDemo />;
  }

  return <ComponentPreviewDemo />;
}

export { ArticleDemo };
