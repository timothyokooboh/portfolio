import { If, cn } from "@portfolio/ui-lib";

import { PAGE_LINKS } from "@/constants/routes";
import {
  WORK_PROJECT_LINKS,
  WORK_PROJECT_TRANSLATION_KEYS,
} from "@/modules/work/constants/work";
import { WORK_STORY_TITLE_CLASS } from "@/constants/typography";
import type { WorkProjectTeaser } from "@/modules/work/types/work";

import { ButtonLink } from "@/components/ui/button-link";
import { ProjectScreenshot } from "@/modules/work/components/project-screenshot";

interface WorkStoryCardProps {
  orientation?: "imageLeft" | "imageRight";
  teaser: WorkProjectTeaser;
}

function WorkStoryCard({
  orientation = "imageLeft",
  teaser,
}: WorkStoryCardProps) {
  const projectKey = WORK_PROJECT_TRANSLATION_KEYS[teaser.slug];
  const liveUrl = WORK_PROJECT_LINKS[teaser.slug];
  const imageFirst = orientation === "imageLeft";

  return (
    <article className="grid gap-8 border-t border-border/50 pt-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.76fr)] lg:items-center">
      <div className={cn("min-w-0 space-y-6", imageFirst ? "lg:order-1" : "lg:order-2")}>
        <div className="space-y-4">
          <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-accent">{teaser.label}</p>
          <h2 className={WORK_STORY_TITLE_CLASS}>
            {teaser.title}
          </h2>
          <p className="max-w-[32rem] text-base leading-7 text-ink-muted">{teaser.summary}</p>
        </div>

        <dl className="space-y-3 border-t border-border/50 pt-6">
          {teaser.metaItems.map((item) => (
            <div key={`${teaser.slug}-${item.label}`} className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <dt className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink-soft">
                {item.label}
              </dt>
              <dd className="max-w-[20rem] text-sm leading-6 text-ink">{item.value}</dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink
            href={teaser.href ?? "#"}
            variant="primary"
            size="sm"
            className="w-full justify-center sm:w-auto"
          >
            {teaser.ctaLabel}
          </ButtonLink>
          <If condition={Boolean(liveUrl)}>
            <ButtonLink
              href={liveUrl ?? teaser.href ?? PAGE_LINKS.work}
              variant="secondary"
              size="sm"
              target="_blank"
              rel="noreferrer"
              className="w-full justify-center sm:w-auto"
            >
              Live surface
            </ButtonLink>
          </If>
        </div>
      </div>

      <div
        className={cn(
          "relative aspect-[16/10] min-w-0 overflow-hidden rounded-panel border border-border/50 bg-surface shadow-soft",
          imageFirst ? "lg:order-2" : "lg:order-1",
        )}
      >
        <ProjectScreenshot
          projectKey={projectKey}
          alt={teaser.title}
          fill
          sizes="(min-width: 1280px) 42rem, (min-width: 1024px) 55vw, 100vw"
          className="object-cover object-top"
        />
      </div>
    </article>
  );
}

export { WorkStoryCard };
