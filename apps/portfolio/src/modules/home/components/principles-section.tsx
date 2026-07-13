import { SECTION_TITLE_CLASS } from "@portfolio/ui-lib";
import { useTranslations } from "next-intl";

import { PRINCIPLE_KEYS } from "@/modules/home/constants/home";

import { SectionShell } from "@/components/page/section-shell";

function PrinciplesSection() {
  const t = useTranslations("home.principles");

  return (
    <SectionShell>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)]">
        <div className="space-y-4">
          <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-accent">
            {t("eyebrow")}
          </p>
          <h2 className={SECTION_TITLE_CLASS}>
            {t("title")}
          </h2>
          <p className="max-w-[32rem] text-lg leading-8 text-ink-muted">{t("description")}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PRINCIPLE_KEYS.map((key) => (
            <article
              key={key}
              className="rounded-card border border-border/50 bg-surface px-6 py-7 shadow-soft"
            >
              <div className="space-y-4">
                <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-accent">
                  {t(`items.${key}.index`)}
                </p>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl leading-tight text-ink">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-base leading-7 text-ink-muted">
                    {t(`items.${key}.description`)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

export { PrinciplesSection };
