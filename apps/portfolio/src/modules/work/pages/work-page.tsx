import { Callout, If, ProjectCard, SectionHeading } from "@portfolio/ui-lib";
import type { Metadata } from "next";
import { useMessages as useIntlMessages } from "next-intl";
import { getTranslations } from "next-intl/server";

import { PAGE_LINKS } from "@/constants/routes";
import { RESUME_URL } from "@/constants/site-links";
import { SITE_AUTHOR_NAME } from "@/constants/site-metadata";
import { createPageMetadata } from "@/utils/create-page-metadata";
import { getBaseUrl } from "@/utils/get-base-url";
import { WORK_PROJECT_LINKS, WORK_PROJECT_TRANSLATION_KEYS } from "@/modules/work/constants/work";
import type { AppMessages } from "@/types/messages";
import { getLabProjectTeasers, getWorkProjectTeasers } from "@/modules/work/utils/get-work-content";

import { SectionShell } from "@/components/page/section-shell";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/page/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { ProjectScreenshot } from "@/modules/work/components/project-screenshot";
import { WorkHeroVisual } from "../components/work-hero-visual";
import { WorkStoryCard } from "../components/work-story-card";

async function generateWorkPageMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.work");
  const baseUrl = getBaseUrl();

  return createPageMetadata({
    baseUrl,
    title: `${t("title")} | ${SITE_AUTHOR_NAME}`,
    description: t("description"),
    path: PAGE_LINKS.work,
  });
}

function WorkPage() {
  const messages = useIntlMessages() as AppMessages;
  const professionalProjects = getWorkProjectTeasers(messages);
  const [labProject] = getLabProjectTeasers(messages);
  const labProjectKey = WORK_PROJECT_TRANSLATION_KEYS[labProject.slug];
  const labProjectLiveUrl = WORK_PROJECT_LINKS[labProject.slug];

  return (
    <SiteShell activeItemId="work" mainId="work-page">
      <PageHero
        eyebrow={messages.workPage.hero.eyebrow}
        title={messages.workPage.hero.title}
        description={messages.workPage.hero.description}
        layoutClassName="lg:grid-cols-[minmax(0,0.92fr)_minmax(28rem,1fr)] lg:items-center xl:grid-cols-[minmax(0,0.9fr)_minmax(32rem,1fr)]"
        asideClassName="lg:justify-self-stretch"
        aside={<WorkHeroVisual />}
      />

      <SectionShell className="pt-0" contentClassName="space-y-10">
        <SectionHeading
          eyebrow={messages.workPage.professional.eyebrow}
          title={messages.workPage.professional.title}
          description={messages.workPage.professional.description}
        />

        <div className="space-y-10">
          {professionalProjects.map((project, index) => (
            <WorkStoryCard
              key={project.slug}
              teaser={project}
              orientation={index % 2 === 0 ? "imageLeft" : "imageRight"}
            />
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pt-4">
        <div className="space-y-10 rounded-[2rem] border border-border bg-surface-tint p-6 shadow-soft md:p-10">
          <SectionHeading
            eyebrow={messages.workPage.lab.eyebrow}
            title={messages.workPage.lab.title}
            description={messages.workPage.lab.description}
          />

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.8fr)]">
            <ProjectCard
              label={labProject.label}
              title={labProject.title}
              summary={labProject.summary}
              tone="dark"
              visual={
                <ProjectScreenshot
                  projectKey={labProjectKey}
                  alt={labProject.title}
                  fill
                  sizes="(min-width: 1280px) 46rem, 100vw"
                  className="h-full w-full object-cover object-top"
                />
              }
            />

            <Callout title={labProject.title}>
              <p>{messages.workPage.lab.description}</p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row xl:flex-col">
                <ButtonLink
                  href={labProject.href ?? "#"}
                  variant="primary"
                  size="sm"
                  className="w-full justify-center sm:w-auto xl:w-full"
                >
                  {messages.workPage.lab.ctaPrimary}
                </ButtonLink>
                <If condition={Boolean(labProjectLiveUrl)}>
                  <ButtonLink
                    href={labProjectLiveUrl ?? labProject.href ?? PAGE_LINKS.work}
                    variant="secondary"
                    size="sm"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full justify-center sm:w-auto xl:w-full"
                  >
                    {messages.workPage.lab.ctaSecondary}
                  </ButtonLink>
                </If>
              </div>
            </Callout>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <Callout
          className="text-center"
          eyebrow={messages.workPage.cta.eyebrow}
          title={messages.workPage.cta.title}
        >
          <p>{messages.workPage.cta.description}</p>
          <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
            <ButtonLink
              href={PAGE_LINKS.contact}
              variant="primary"
              size="lg"
              className="w-full justify-center sm:w-auto"
            >
              {messages.workPage.cta.primaryAction}
            </ButtonLink>
            <ButtonLink
              href={RESUME_URL}
              variant="secondary"
              size="lg"
              target="_blank"
              rel="noreferrer"
              className="w-full justify-center sm:w-auto"
            >
              {messages.workPage.cta.secondaryAction}
            </ButtonLink>
          </div>
        </Callout>
      </SectionShell>
    </SiteShell>
  );
}

export { generateWorkPageMetadata };
export default WorkPage;
