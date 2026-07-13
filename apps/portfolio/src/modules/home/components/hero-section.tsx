import { useTranslations } from "next-intl";

import { HOME_SECTION_IDS } from "@/modules/home/constants/home";
import { PAGE_LINKS } from "@/constants/routes";
import { HOME_HERO_TITLE_CLASS } from "@/constants/typography";

import { ButtonLink } from "@/components/ui/button-link";
import { HeroVisual } from "./hero-visual";
import { SectionShell } from "@/components/page/section-shell";

function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <SectionShell id={HOME_SECTION_IDS.top} className="pt-6 md:pt-10">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="space-y-8">
          <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-accent">
            {t("eyebrow")}
          </p>

          <h1 className={HOME_HERO_TITLE_CLASS}>
            <span className="block">{t("title.line1")}</span>
            <span className="block italic">{t("title.line2Emphasis")}</span>
            <span className="block">{t("title.line2Suffix")}</span>
            <span className="block">{t("title.line3Prefix")}</span>
            <span className="block">
              <span className="text-accent-strong sm:bg-gradient-to-r sm:from-ink sm:to-accent-strong sm:bg-clip-text sm:text-transparent">
                {t("title.line3Gradient")}
              </span>
            </span>
          </h1>

          <p className="max-w-[36rem] text-lg leading-8 text-ink-muted">{t("description")}</p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={PAGE_LINKS.work} variant="primary" size="lg">
              {t("primaryAction")}
            </ButtonLink>
            <ButtonLink href={PAGE_LINKS.writing} variant="secondary" size="lg">
              {t("secondaryAction")}
            </ButtonLink>
          </div>

          <p className="font-mono text-sm uppercase tracking-eyebrow text-ink-soft">
            {t("availability")}
          </p>
        </div>

        <HeroVisual />
      </div>
    </SectionShell>
  );
}

export { HeroSection };
