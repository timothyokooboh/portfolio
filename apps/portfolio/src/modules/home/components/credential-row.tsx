interface CredentialRowProps {
  description: string;
  eyebrow: string;
  points: string[];
  title: string;
}

function CredentialRow({
  description,
  eyebrow,
  points,
  title,
}: CredentialRowProps) {
  return (
    <article className="grid gap-6 md:grid-cols-[minmax(9rem,0.4fr)_minmax(0,1.6fr)] md:gap-10">
      <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-accent">
        {eyebrow}
      </p>

      <div className="grid gap-7 xl:grid-cols-[minmax(0,1.15fr)_minmax(15rem,0.85fr)] xl:gap-12">
        <div className="space-y-3">
          <h3 className="max-w-[34rem] font-display text-[clamp(1.85rem,3.4vw,2.5rem)] font-semibold leading-tight text-ink">
            {title}
          </h3>
          <p className="max-w-[38rem] text-base leading-7 text-ink-muted">
            {description}
          </p>
        </div>

        <ul className="space-y-2">
          {points.map((point) => (
            <li key={point} className="text-sm leading-6 text-ink-muted">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export { CredentialRow };
