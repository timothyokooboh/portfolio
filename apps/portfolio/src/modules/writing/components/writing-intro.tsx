interface WritingIntroProps {
  description: string;
  title: string;
}

function WritingIntro({ description, title }: WritingIntroProps) {
  return (
    <section className="grid gap-5 md:grid-cols-[minmax(12rem,0.65fr)_minmax(0,1.35fr)] md:gap-12">
      <h2 className="max-w-[24rem] font-display text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-tight text-ink">
        {title}
      </h2>
      <p className="max-w-[48rem] text-base leading-8 text-ink-muted md:text-lg">
        {description}
      </p>
    </section>
  );
}

export { WritingIntro };
