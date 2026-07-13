import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@portfolio/ui-lib";

import { ButtonLink } from "@/components/ui/button-link";

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
      <CardFooter>
        <ButtonLink
          href={actionHref}
          variant="secondary"
          size="sm"
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
        >
          {actionLabel}
        </ButtonLink>
      </CardFooter>
    </Card>
  );
}

export { ContactMethodCard };
