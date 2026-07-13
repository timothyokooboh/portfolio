import { SectionHeading } from "@portfolio/ui-lib";
import { useMessages } from "next-intl";

import { CREDENTIAL_KEYS } from "@/modules/home/constants/home";
import type { AppMessages } from "@/types/messages";

import { CredentialRow } from "./credential-row";
import { SectionShell } from "@/components/page/section-shell";

interface CredentialMessageItem {
  description: string;
  eyebrow: string;
  points: string[];
  title: string;
}

function CredentialsSection() {
  const messages = useMessages() as AppMessages;
  const credentials = CREDENTIAL_KEYS.map((key) => ({
    id: key,
    ...(messages.home.credentials.items[key] as CredentialMessageItem),
  }));

  return (
    <SectionShell>
      <div className="space-y-10">
        <SectionHeading
          eyebrow={messages.home.credentials.eyebrow}
          title={messages.home.credentials.title}
          description={messages.home.credentials.description}
        />

        <div className="space-y-14 md:space-y-20">
          {credentials.map((credential) => (
            <CredentialRow
              key={credential.id}
              description={credential.description}
              eyebrow={credential.eyebrow}
              points={credential.points}
              title={credential.title}
            />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

export { CredentialsSection };
