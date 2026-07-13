import type { DesignProjectPrinciple } from "@/modules/designs/types/designs";

interface DesignPrinciplesGridProps {
  principles: DesignProjectPrinciple[];
  projectSlug: string;
}

function DesignPrinciplesGrid({
  principles,
  projectSlug,
}: DesignPrinciplesGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {principles.map((principle, index) => (
        <article
          key={`${projectSlug}-principle-${index}`}
          className="rounded-card border border-border bg-surface px-5 py-6 shadow-soft"
        >
          <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-accent">
            {principle.title}
          </p>
          <p className="mt-4 text-sm leading-6 text-ink-muted">
            {principle.description}
          </p>
        </article>
      ))}
    </div>
  );
}

export { DesignPrinciplesGrid };
