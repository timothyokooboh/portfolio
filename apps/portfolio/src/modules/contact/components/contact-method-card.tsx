import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@portfolio/ui-lib";

import { ButtonLink } from "@/components/ui/button-link";
import { EMAIL_ADDRESS } from "@/constants/site-links";
import { MAILTO_PROTOCOL } from "@/modules/contact/constants/contact";

import { EmailActionLink } from "./email-action-link";

interface ContactMethodCardProps {
  actionHref: string;
  actionLabel: string;
  description: string;
  eyebrow: string;
  external?: boolean;
  title: string;
}

function ContactMethodCard({
  actionHref,
  actionLabel,
  description,
  eyebrow,
  external = false,
  title,
}: ContactMethodCardProps) {
  let action = (
    <ButtonLink
      href={actionHref}
      variant="secondary"
      size="sm"
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {actionLabel}
    </ButtonLink>
  );

  if (actionHref.startsWith(MAILTO_PROTOCOL)) {
    action = (
      <EmailActionLink
        emailAddress={EMAIL_ADDRESS}
        label={actionLabel}
        variant="secondary"
        size="sm"
      />
    );
  }

  return (
    <Card className="h-full bg-surface-tint">
      <CardHeader>
        <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink-soft">
          {eyebrow}
        </p>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-6 text-ink-muted">{description}</p>
      </CardContent>
      <CardFooter>{action}</CardFooter>
    </Card>
  );
}

export { ContactMethodCard };
