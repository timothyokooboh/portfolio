import { Callout } from "@portfolio/ui-lib";

interface CredentialCardProps {
  description: string;
  eyebrow: string;
  points: string[];
  title: string;
}

function CredentialCard({
  description,
  eyebrow,
  points,
  title,
}: CredentialCardProps) {
  return (
    <Callout eyebrow={eyebrow} title={title} className="h-full">
      <p>{description}</p>
      <ul className="space-y-3 pl-5 text-sm leading-6 text-ink-muted">
        {points.map((point) => (
          <li key={point} className="list-disc">
            {point}
          </li>
        ))}
      </ul>
    </Callout>
  );
}

export { CredentialCard };
