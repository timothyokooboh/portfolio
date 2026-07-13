import { ExperienceRow } from "@portfolio/ui-lib";
import { useMessages, useTranslations } from "next-intl";

import { EXPERIENCE_KEYS } from "@/modules/home/constants/home";
import type { AppMessages } from "@/types/messages";

import { SectionShell } from "@/components/page/section-shell";

interface ExperienceMessageItem {
  company: string;
  highlights: string[];
  location?: string;
  note?: string;
  period: string;
  role: string;
}

function ExperienceSection() {
  const t = useTranslations("home.experience");
  const messages = useMessages() as AppMessages;
  const items = EXPERIENCE_KEYS.map((key) => ({
    id: key,
    ...(messages.home.experience.items[key] as ExperienceMessageItem),
  }));

  return (
    <SectionShell>
      <div className="space-y-6">
        <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-accent">
          {t("eyebrow")}
        </p>
        <div className="rounded-panel border border-border/40 bg-surface px-6 shadow-soft sm:px-8">
          {items.map((item, index) => (
            <ExperienceRow
              key={item.id}
              className={index === 0 ? "border-t-0" : undefined}
              company={item.company}
              highlights={item.highlights}
              location={item.location}
              note={item.note}
              period={item.period}
              role={item.role}
            />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

export { ExperienceSection };
