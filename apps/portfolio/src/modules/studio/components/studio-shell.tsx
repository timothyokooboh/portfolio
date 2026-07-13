import { useTranslations } from "next-intl";

import { STUDIO_TITLE_CLASS } from "@/constants/typography";

import { SectionShell } from "@/components/page/section-shell";
import { SiteShell } from "@/components/layout/site-shell";
import { ButtonLink } from "@/components/ui/button-link";

interface StudioShellProps {
  actions?: React.ReactNode;
  children: React.ReactNode;
  description: string;
  mainId: string;
  title: string;
}

function StudioShell({
  actions,
  children,
  description,
  mainId,
  title,
}: StudioShellProps) {
  const t = useTranslations("studio.shell");

  return (
    <SiteShell activeItemId="writing" mainId={mainId}>
      <section className="px-page pt-16">
        <div className="mx-auto max-w-[80rem]">
          <div className="rounded-[2rem] border border-border bg-surface-tint p-8 shadow-soft md:p-10">
            <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
              <div className="max-w-3xl space-y-4">
                <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-accent">
                  {t("eyebrow")}
                </p>
                <h1 className={STUDIO_TITLE_CLASS}>
                  {title}
                </h1>
                <p className="max-w-2xl text-base leading-8 text-ink-muted">{description}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <ButtonLink href="/" variant="secondary" size="sm">
                  {t("backToSite")}
                </ButtonLink>
                {actions}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionShell className="pt-10">{children}</SectionShell>
    </SiteShell>
  );
}

export { StudioShell };
