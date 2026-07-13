import {
  Callout,
  CodeWindow,
  If,
  MetaList,
  SectionHeading,
} from "@portfolio/ui-lib";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";

import { PAGE_LINKS } from "@/constants/routes";
import { SITE_AUTHOR_NAME } from "@/constants/site-metadata";
import type { AppMessages } from "@/types/messages";
import { createPageMetadata } from "@/utils/create-page-metadata";
import { getBaseUrl } from "@/utils/get-base-url";
import {
  WORK_PROJECT_DETAIL_LINKS,
  WORK_PROJECT_SLUGS,
  type WorkProjectSlug,
} from "@/modules/work/constants/work";
import type { WorkProjectDetail } from "@/modules/work/types/work";
import {
  getWorkProjectDetail,
  isWorkProjectSlug,
} from "@/modules/work/utils/get-work-content";

import { SectionShell } from "@/components/page/section-shell";
import { SiteShell } from "@/components/layout/site-shell";
import { AspectImageTile } from "@/components/page/aspect-image-tile";
import { PageHero } from "@/components/page/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { WorkGallery } from "../components/work-gallery";

interface WorkDetailPageContentProps {
  project: WorkProjectDetail;
}

interface WorkDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function generateWorkDetailStaticParams() {
  return WORK_PROJECT_SLUGS.map((slug) => ({ slug }));
}

async function generateWorkDetailMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const baseUrl = getBaseUrl();

  if (!isWorkProjectSlug(slug)) {
    const pageTranslations = await getTranslations("pages.workDetail");

    return {
      title: pageTranslations("description"),
    };
  }

  const messages = (await getMessages()) as AppMessages;
  const project = getWorkProjectDetail(messages, slug);

  return createPageMetadata({
    baseUrl,
    title: `${project.title} | ${SITE_AUTHOR_NAME}`,
    description: project.hero.description,
    path: WORK_PROJECT_DETAIL_LINKS[slug as WorkProjectSlug],
  });
}

function WorkDetailPageContent({ project }: WorkDetailPageContentProps) {
  const t = useTranslations("workDetailPage");

  return (
    <SiteShell activeItemId="work" mainId="work-detail-page">
      <PageHero
        eyebrow={project.hero.eyebrow}
        title={project.hero.title}
        description={project.hero.description}
        aside={
          <MetaList
            items={[
              { label: t("roleLabel"), value: project.role },
              { label: t("timelineLabel"), value: project.timeline },
              { label: t("stackLabel"), value: project.stack },
            ]}
          />
        }
      />

      <section className="px-page pb-8">
        <div className="mx-auto max-w-[80rem]">
          <AspectImageTile
            src={project.heroImage.src}
            alt={project.heroImage.alt}
            priority
            className="aspect-[16/8.5] rounded-[2rem]"
          />
        </div>
      </section>

      <SectionShell className="pt-8">
        <div className="grid gap-12 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <aside className="min-w-0 space-y-8 lg:sticky lg:top-28 lg:self-start">
            <ButtonLink href={PAGE_LINKS.work} variant="secondary" size="sm">
              {t("backLink")}
            </ButtonLink>

            <MetaList
              eyebrow={t("metricsEyebrow")}
              items={project.metrics.map((metric, index) => ({
                label: t("metricLabel", { index: index + 1 }),
                value: metric,
              }))}
            />

            <Callout eyebrow={project.label} title={project.summary}>
              <p>{project.reflection}</p>
            </Callout>
          </aside>

          <div className="min-w-0 space-y-16">
            <section className="space-y-6">
              <SectionHeading eyebrow={t("overviewEyebrow")} title={project.title} />
              <div className="space-y-5 text-base leading-8 text-ink-muted">
                {project.overview.map((paragraph, index) => (
                  <p key={`${project.slug}-overview-${index}`}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <Callout eyebrow={t("challengeEyebrow")} title={project.challenge.title}>
                <p>{project.challenge.description}</p>
                <div className="grid gap-4 pt-2 md:grid-cols-2">
                  {project.challenge.points.map((point) => (
                    <div key={`${project.slug}-${point.title}`} className="rounded-card border border-border bg-background/80 p-5">
                      <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-accent">
                        {point.title}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-ink-muted">{point.description}</p>
                    </div>
                  ))}
                </div>
              </Callout>
            </section>

            <section className="space-y-6">
              <SectionHeading
                eyebrow={t("implementationEyebrow")}
                title={project.implementation.title}
                description={project.implementation.description}
              />
              <CodeWindow
                filename={project.implementation.codeFilename}
                code={project.implementation.code}
                actionLabel={project.implementation.codeActionLabel}
              />
            </section>

            <section className="space-y-6">
              <WorkGallery
                items={project.gallery.items}
                title={project.gallery.title}
                caption={project.gallery.caption}
              />
            </section>

            <section className="space-y-6">
              <Callout eyebrow={t("reflectionEyebrow")} title={t("reflectionTitle")}>
                <p>{project.reflection}</p>
              </Callout>

              <If condition={Boolean(project.href)}>
                <ButtonLink
                  href={project.href ?? PAGE_LINKS.work}
                  variant="primary"
                  size="lg"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full justify-center sm:w-auto"
                >
                  {t("visitLive")}
                </ButtonLink>
              </If>
            </section>
          </div>
        </div>
      </SectionShell>
    </SiteShell>
  );
}

async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;

  if (!isWorkProjectSlug(slug)) {
    notFound();
  }

  const messages = (await getMessages()) as AppMessages;
  const project = getWorkProjectDetail(messages, slug as WorkProjectSlug);

  return <WorkDetailPageContent project={project} />;
}

export {
  WorkDetailPageContent,
  generateWorkDetailMetadata,
  generateWorkDetailStaticParams,
};
export type { WorkDetailPageProps };
export default WorkDetailPage;
