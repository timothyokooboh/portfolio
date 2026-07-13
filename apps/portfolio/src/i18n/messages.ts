import contactMessages from "@/modules/contact/messages/en.json";
import contactMessagesEs from "@/modules/contact/messages/es.json";
import contactMessagesFr from "@/modules/contact/messages/fr.json";
import designsMessages from "@/modules/designs/messages/en.json";
import designsMessagesEs from "@/modules/designs/messages/es.json";
import designsMessagesFr from "@/modules/designs/messages/fr.json";
import homeMessages from "@/modules/home/messages/en.json";
import homeMessagesEs from "@/modules/home/messages/es.json";
import homeMessagesFr from "@/modules/home/messages/fr.json";
import studioMessages from "@/modules/studio/messages/en.json";
import studioMessagesEs from "@/modules/studio/messages/es.json";
import studioMessagesFr from "@/modules/studio/messages/fr.json";
import workMessages from "@/modules/work/messages/en.json";
import workMessagesEs from "@/modules/work/messages/es.json";
import workMessagesFr from "@/modules/work/messages/fr.json";
import writingMessages from "@/modules/writing/messages/en.json";
import writingMessagesEs from "@/modules/writing/messages/es.json";
import writingMessagesFr from "@/modules/writing/messages/fr.json";

import sharedMessages from "./messages/en.json";
import sharedMessagesEs from "./messages/es.json";
import sharedMessagesFr from "./messages/fr.json";
import { mergeMessages } from "./utils/merge-messages";
import type { AppLocale } from "./routing";

const messages = {
  ...sharedMessages,
  ...homeMessages,
  ...workMessages,
  ...contactMessages,
  ...designsMessages,
  ...writingMessages,
  ...studioMessages,
} as const;

const localeOverrides = {
  en: {},
  fr: {
    ...sharedMessagesFr,
    ...homeMessagesFr,
    ...workMessagesFr,
    ...contactMessagesFr,
    ...designsMessagesFr,
    ...writingMessagesFr,
    ...studioMessagesFr,
  },
  es: {
    ...sharedMessagesEs,
    ...homeMessagesEs,
    ...workMessagesEs,
    ...contactMessagesEs,
    ...designsMessagesEs,
    ...writingMessagesEs,
    ...studioMessagesEs,
  },
} as const;

function getMessagesForLocale(locale: AppLocale): typeof messages {
  return mergeMessages(messages, localeOverrides[locale]);
}

export { getMessagesForLocale, messages };
