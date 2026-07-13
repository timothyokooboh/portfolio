import { Callout, MetaList, SectionHeading } from "@portfolio/ui-lib";
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
  DESIGN_PROJECT_DETAIL_LINKS,
  DESIGN_PROJECT_SLUGS,
  type DesignProjectSlug,
} from "@/modules/designs/constants/designs";
import type { DesignProjectDetail } from "@/modules/designs/types/designs";
import {
  getDesignProjectDetail,
  isDesignProjectSlug,
} from "@/modules/designs/utils/get-design-content";

import { SectionShell } from "@/components/page/section-shell";
import { SiteShell } from "@/components/layout/site-shell";
import { AspectImageTile } from "@/components/page/aspect-image-tile";
import { PageHero } from "@/components/page/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { DesignPrinciplesGrid } from "../components/design-principles-grid";

interface DesignDetailPageContentProps {
  project: DesignProjectDetail;
}

interface DesignDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function generateDesignDetailStaticParams() {
  return DESIGN_PROJECT_SLUGS.map((slug) => ({ slug }));
}

async function generateDesignDetailMetadata({
  params,
}: DesignDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const baseUrl = getBaseUrl();

  if (!isDesignProjectSlug(slug)) {
    const pageTranslations = await getTranslations("pages.designDetail");

    return {
      title: pageTranslations("description"),
    };
  }

  const messages = (await getMessages()) as AppMessages;
  const project = getDesignProjectDetail(messages, slug);

  return createPageMetadata({
    baseUrl,
    title: `${project.hero.title} | ${SITE_AUTHOR_NAME}`,
    description: project.hero.description,
    path: DESIGN_PROJECT_DETAIL_LINKS[slug as DesignProjectSlug],
  });
}

function DesignDetailPageContent({ project }: DesignDetailPageContentProps) {
  const t = useTranslations("designDetailPage");

  return (
    <SiteShell activeItemId="designs" mainId="design-detail-page">
      <PageHero
        eyebrow={project.hero.eyebrow}
        title={project.hero.title}
        description={project.hero.description}
        aside={
          <MetaList
            eyebrow={t("metadataEyebrow")}
            items={[
              { label: t("typeLabel"), value: project.meta.type },
              { label: t("toolLabel"), value: project.meta.tool },
              { label: t("statusLabel"), value: project.meta.status },
            ]}
          />
        }
      />

      <section className="px-page pb-8">
        <div className="mx-auto max-w-[80rem]">
          <AspectImageTile
            src={project.imageSrc}
            alt={project.hero.title}
            priority
            className="aspect-[16/8.5] rounded-[2rem]"
          />
        </div>
      </section>

      <SectionShell className="pt-8">
        <div className="grid gap-12 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <aside className="min-w-0 space-y-8 lg:sticky lg:top-28 lg:self-start">
            <ButtonLink href={PAGE_LINKS.designs} variant="secondary" size="sm">
              {t("backLink")}
            </ButtonLink>

            <Callout eyebrow={project.label} title={project.summary}>
              <p>{project.tileCaption}</p>
            </Callout>

            <MetaList
              items={[
                { label: t("frameLabel"), value: project.meta.figmaFrame },
              ]}
            />

            <ButtonLink
              href={project.figmaHref}
              variant="primary"
              size="lg"
              target="_blank"
              rel="noreferrer"
              className="w-full justify-center sm:w-auto"
            >
              {t("visitFigma")}
            </ButtonLink>
          </aside>

          <div className="min-w-0 space-y-16">
            <section className="space-y-6">
              <SectionHeading
                eyebrow={t("overviewEyebrow")}
                title={project.label}
                description={project.summary}
              />
              <div className="space-y-5 text-base leading-8 text-ink-muted">
                {project.overview.map((paragraph, index) => (
                  <p key={`${project.slug}-overview-${index}`}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <SectionHeading
                eyebrow={t("principlesEyebrow")}
                title={t("principlesTitle")}
              />
              <DesignPrinciplesGrid
                principles={project.principles}
                projectSlug={project.slug}
              />
            </section>

            <section className="space-y-6">
              <SectionHeading
                eyebrow={t("galleryEyebrow")}
                title={project.gallery.title}
                description={project.gallery.caption}
              />
              <AspectImageTile
                src={project.imageSrc}
                alt={project.gallery.title}
                className="aspect-[16/10] rounded-[1.75rem]"
              />
            </section>

            <section>
              <Callout eyebrow={t("reflectionEyebrow")} title={t("reflectionTitle")}>
                <p>{project.reflection}</p>
              </Callout>
            </section>
          </div>
        </div>
      </SectionShell>
    </SiteShell>
  );
}

async function DesignDetailPage({ params }: DesignDetailPageProps) {
  const { slug } = await params;

  if (!isDesignProjectSlug(slug)) {
    notFound();
  }

  const messages = (await getMessages()) as AppMessages;
  const project = getDesignProjectDetail(messages, slug as DesignProjectSlug);

  return <DesignDetailPageContent project={project} />;
}

export {
  DesignDetailPageContent,
  generateDesignDetailMetadata,
  generateDesignDetailStaticParams,
};
export type { DesignDetailPageProps };
export default DesignDetailPage;
