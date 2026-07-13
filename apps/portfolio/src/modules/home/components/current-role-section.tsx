import { SECTION_TITLE_CLASS } from "@portfolio/ui-lib";
import { useTranslations } from "next-intl";

import { METRIC_VALUE_CLASS } from "@/constants/typography";

import { SectionShell } from "@/components/page/section-shell";

function CurrentRoleSection() {
  const t = useTranslations("home.positioning");

  return (
    <SectionShell className="border-y border-border/30 bg-surface">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="max-w-[46rem] space-y-4">
          <h2 className={SECTION_TITLE_CLASS}>
            {t("title")}
          </h2>
          <p className="text-lg leading-8 text-ink-muted">{t("description")}</p>
        </div>

        <div className="flex items-end gap-6 border-l border-border/60 pl-6 sm:gap-10 sm:pl-8">
          <div className="space-y-1 text-center">
            <p className={METRIC_VALUE_CLASS}>
              {t("stats.years.value")}
            </p>
            <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink-muted">
              {t("stats.years.label")}
            </p>
          </div>
          <div className="space-y-1 text-center">
            <p className={METRIC_VALUE_CLASS}>
              {t("stats.components.value")}
            </p>
            <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink-muted">
              {t("stats.components.label")}
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export { CurrentRoleSection };
