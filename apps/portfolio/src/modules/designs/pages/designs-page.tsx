import { Callout, SectionHeading } from "@portfolio/ui-lib";
import type { Metadata } from "next";
import { useMessages } from "next-intl";
import { getTranslations } from "next-intl/server";

import { PAGE_LINKS } from "@/constants/routes";
import { SITE_AUTHOR_NAME } from "@/constants/site-metadata";
import type { AppMessages } from "@/types/messages";
import { createPageMetadata } from "@/utils/create-page-metadata";
import { getBaseUrl } from "@/utils/get-base-url";
import { getDesignProjectTeasers } from "@/modules/designs/utils/get-design-content";

import { SectionShell } from "@/components/page/section-shell";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/page/page-hero";
import { DesignStoryCard } from "../components/design-story-card";

async function generateDesignsPageMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.designs");
  const baseUrl = getBaseUrl();

  return createPageMetadata({
    baseUrl,
    title: `${t("title")} | ${SITE_AUTHOR_NAME}`,
    description: t("description"),
    path: PAGE_LINKS.designs,
  });
}

function DesignsPage() {
  const messages = useMessages() as AppMessages;
  const designProjects = getDesignProjectTeasers(messages);

  return (
    <SiteShell activeItemId="designs" mainId="designs-page">
      <PageHero
        eyebrow={messages.designsPage.hero.eyebrow}
        title={messages.designsPage.hero.title}
        description={messages.designsPage.hero.description}
      />

      <SectionShell className="pt-0" contentClassName="space-y-10">
        <Callout title={messages.designsPage.intro.title}>
          <p>{messages.designsPage.intro.description}</p>
        </Callout>

        <div className="space-y-6">
          <SectionHeading title={messages.designsPage.learning.title} />
          <div className="grid gap-4 md:grid-cols-3">
            {messages.designsPage.learning.items.map((item) => (
              <Callout key={item.title} title={item.title}>
                <p>{item.description}</p>
              </Callout>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <SectionHeading
            title={messages.designsPage.collection.title}
            description={messages.designsPage.collection.description}
          />
          <div className="grid gap-4 md:grid-cols-2">
            {designProjects.map((project) => (
              <DesignStoryCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </SectionShell>
    </SiteShell>
  );
}

export { generateDesignsPageMetadata };
export default DesignsPage;
