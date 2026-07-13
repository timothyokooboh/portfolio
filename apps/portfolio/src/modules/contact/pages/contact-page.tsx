import { SectionHeading } from "@portfolio/ui-lib";
import type { Metadata } from "next";
import { useMessages, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import {
  CONTACT_CHANNEL_IDS,
  CONTACT_CHANNEL_LINKS,
} from "@/modules/contact/constants/contact";
import { CONTACT_PAGE_ITEM_ID } from "@/constants/site-navigation";
import { EMAIL_ADDRESS, RESUME_URL } from "@/constants/site-links";
import { PAGE_LINKS } from "@/constants/routes";
import { SITE_AUTHOR_NAME } from "@/constants/site-metadata";
import type { AppMessages } from "@/types/messages";
import { createPageMetadata } from "@/utils/create-page-metadata";
import { getBaseUrl } from "@/utils/get-base-url";

import { SectionShell } from "@/components/page/section-shell";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/page/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { ContactMethodCard } from "../components/contact-method-card";

async function generateContactPageMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.contact");
  const baseUrl = getBaseUrl();

  return createPageMetadata({
    baseUrl,
    title: `${t("title")} | ${SITE_AUTHOR_NAME}`,
    description: t("description"),
    path: PAGE_LINKS.contact,
  });
}

function ContactPage() {
  const t = useTranslations("contactPage");
  const messages = useMessages() as AppMessages;
  const channelItems = CONTACT_CHANNEL_IDS.map((channelId) => {
    const item = messages.contactPage.channels.items[channelId];

    return {
      ...item,
      href: CONTACT_CHANNEL_LINKS[channelId],
      id: channelId,
    };
  });
  return (
    <SiteShell activeItemId={CONTACT_PAGE_ITEM_ID} mainId="contact-page">
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        asideClassName="w-full lg:w-auto"
        aside={
          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col">
            <ButtonLink href={`mailto:${EMAIL_ADDRESS}`} variant="primary" size="lg">
              {t("actions.email")}
            </ButtonLink>
            <ButtonLink
              href={RESUME_URL}
              variant="secondary"
              size="lg"
              target="_blank"
              rel="noreferrer"
            >
              {t("actions.resume")}
            </ButtonLink>
          </div>
        }
      />

      <SectionShell className="pt-0 pb-0">
        <div className="space-y-8">
          <SectionHeading
            title={t("channels.title")}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {channelItems.map((item) => (
              <ContactMethodCard
                key={item.id}
                actionHref={item.href}
                actionLabel={item.action}
                description={item.description}
                eyebrow={item.eyebrow}
                external={item.id !== "email"}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </SectionShell>
    </SiteShell>
  );
}

export { generateContactPageMetadata };
export default ContactPage;
