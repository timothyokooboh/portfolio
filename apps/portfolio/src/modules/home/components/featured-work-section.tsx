import { ProjectCard, SectionHeading } from "@portfolio/ui-lib";
import { useTranslations } from "next-intl";

import { HOME_SECTION_IDS } from "@/modules/home/constants/home";
import { WORK_PROJECT_DETAIL_LINKS } from "@/modules/work/constants/work";
import { PAGE_LINKS } from "@/constants/routes";

import { ProjectScreenshot } from "@/modules/work/components/project-screenshot";
import { SectionShell } from "@/components/page/section-shell";
import { AppLink } from "@/components/ui/app-link";
import { ButtonLink } from "@/components/ui/button-link";

function FeaturedWorkSection() {
  const t = useTranslations("home.featuredWork");

  return (
    <SectionShell id={HOME_SECTION_IDS.work}>
      <div className="space-y-10">
        <SectionHeading
          title={t("title")}
          action={
            <ButtonLink href={PAGE_LINKS.work} variant="link" size="sm">
              {t("action")}
            </ButtonLink>
          }
        />

        <div className="grid gap-6 xl:grid-cols-12">
          <ProjectCard
            className="xl:col-span-8"
            href={WORK_PROJECT_DETAIL_LINKS["seamkit-ui"]}
            linkComponent={AppLink}
            label={t("items.seamkit.label")}
            title={t("items.seamkit.title")}
            summary={t("items.seamkit.summary")}
            visual={
              <ProjectScreenshot
                projectKey="seamkit"
                alt={t("items.seamkit.title")}
                fill
                priority
                className="object-cover object-top"
                sizes="(min-width: 1280px) 45rem, 100vw"
              />
            }
          />

          <ProjectCard
            className="xl:col-span-4"
            href={WORK_PROJECT_DETAIL_LINKS.olanna}
            linkComponent={AppLink}
            label={t("items.olanna.label")}
            title={t("items.olanna.title")}
            summary={t("items.olanna.summary")}
            visual={
              <ProjectScreenshot
                projectKey="olanna"
                alt={t("items.olanna.title")}
                fill
                className="object-cover object-top"
                sizes="(min-width: 1280px) 23rem, 100vw"
              />
            }
          />

          <ProjectCard
            className="xl:col-span-4"
            href={WORK_PROJECT_DETAIL_LINKS.myfastmeds}
            linkComponent={AppLink}
            label={t("items.myfastmeds.label")}
            title={t("items.myfastmeds.title")}
            summary={t("items.myfastmeds.summary")}
            visual={
              <ProjectScreenshot
                projectKey="myfastmeds"
                alt={t("items.myfastmeds.title")}
                fill
                className="object-cover object-top"
                sizes="(min-width: 1280px) 23rem, 100vw"
              />
            }
          />

          <ProjectCard
            className="xl:col-span-8"
            href={WORK_PROJECT_DETAIL_LINKS.vbox}
            linkComponent={AppLink}
            label={t("items.vbox.label")}
            title={t("items.vbox.title")}
            summary={t("items.vbox.summary")}
            tone="dark"
            visual={
              <ProjectScreenshot
                projectKey="vbox"
                alt={t("items.vbox.title")}
                fill
                className="object-cover object-top"
                sizes="(min-width: 1280px) 45rem, 100vw"
              />
            }
          />
        </div>
      </div>
    </SectionShell>
  );
}

export { FeaturedWorkSection };
