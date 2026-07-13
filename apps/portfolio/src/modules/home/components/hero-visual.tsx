import { useTranslations } from "next-intl";

import { HERO_COLLAGE_PROJECTS } from "@/modules/home/constants/home";

import { ProjectScreenshot } from "@/modules/work/components/project-screenshot";

function HeroVisual() {
  const projectTranslations = useTranslations("home.featuredWork.items");
  const heroTranslations = useTranslations("home.hero");

  return (
    <div className="relative overflow-hidden border border-white/70 bg-surface shadow-card">
      <div className="grid grid-cols-2 gap-3 bg-[radial-gradient(circle_at_top_left,rgba(229,238,255,0.95),transparent_42%),linear-gradient(150deg,rgba(11,28,48,0.08),rgba(133,83,0,0.12))] p-4 sm:p-5">
        {HERO_COLLAGE_PROJECTS.map((projectKey) => (
          <div
            key={projectKey}
            className="relative aspect-[4/5] overflow-hidden border border-white/60 bg-surface shadow-soft"
          >
            <ProjectScreenshot
              projectKey={projectKey}
              alt={projectTranslations(`${projectKey}.title`)}
              priority={projectKey === HERO_COLLAGE_PROJECTS[0]}
              className="object-cover"
              sizes="(min-width: 1024px) 240px, 45vw"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 bg-accent px-5 py-2">
        <p className="font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-white">
          {heroTranslations("location")}
        </p>
      </div>
    </div>
  );
}

export { HeroVisual };
