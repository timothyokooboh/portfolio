import { useTranslations } from "next-intl";

import { PAGE_LINKS } from "@/constants/routes";
import { RESUME_URL, SOCIAL_LINKS } from "@/constants/site-links";
import { FOOTER_CTA_CLASS, FOOTER_TITLE_CLASS } from "@/constants/typography";

import { AppLink } from "@/components/ui/app-link";

const FOOTER_PAGE_LINKS = [
  { id: "work", href: PAGE_LINKS.work },
  { id: "writing", href: PAGE_LINKS.writing },
  { id: "contact", href: PAGE_LINKS.contact },
  { id: "resume", href: RESUME_URL },
] as const;

function SiteFooter() {
  const t = useTranslations("footer");
  const navigation = useTranslations("navigation");

  return (
    <footer className="border-t border-border/40 px-page py-12 md:py-16">
      <div className="mx-auto max-w-[75rem] space-y-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
          <div className="max-w-[30rem] space-y-5">
            <p className={FOOTER_TITLE_CLASS}>
              {t("title").toUpperCase()}
            </p>
            <p className="text-lg leading-8 text-ink-muted">{t("description")}</p>
            <AppLink
              href={PAGE_LINKS.contact}
              className={FOOTER_CTA_CLASS}
            >
              {t("cta")}
            </AppLink>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div className="space-y-4">
              <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink-muted">
                {t("socials")}
              </p>
              <div className="space-y-2">
                {SOCIAL_LINKS.map((link) => (
                  <AppLink
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-base leading-6 text-ink-muted transition-colors hover:text-ink"
                  >
                    {t(`socialItems.${link.id}`)}
                  </AppLink>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink-muted">
                {t("pages")}
              </p>
              <div className="space-y-2">
                {FOOTER_PAGE_LINKS.map((link) => (
                  <AppLink
                    key={link.id}
                    href={link.href}
                    className="block text-base leading-6 text-ink-muted transition-colors hover:text-ink"
                  >
                    {navigation(link.id)}
                  </AppLink>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink-muted">
                {t("contact")}
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-sm uppercase tracking-[0.12em] text-ink-soft">
                    {t("emailLabel")}
                  </p>
                  <AppLink
                    href={`mailto:${t("emailValue")}`}
                    className="text-base leading-6 text-ink-muted transition-colors hover:text-ink"
                  >
                    {t("emailValue")}
                  </AppLink>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.12em] text-ink-soft">
                    {t("locationLabel")}
                  </p>
                  <p className="text-base leading-6 text-ink-muted">{t("locationValue")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border/40 pt-6 text-sm text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>{`© ${new Date().getFullYear()} ${t("title")} — ${t("copyright")}`}</p>
          <p>{t("coordinates")}</p>
        </div>
      </div>
    </footer>
  );
}

export { SiteFooter };
