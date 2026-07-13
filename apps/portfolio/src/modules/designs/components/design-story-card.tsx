import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  If,
} from "@portfolio/ui-lib";
import { useTranslations } from "next-intl";

import type { DesignProjectTeaser } from "@/modules/designs/types/designs";

import { ButtonLink } from "@/components/ui/button-link";
import { DesignPreviewImage } from "./design-preview-image";

interface DesignStoryCardProps {
  project: DesignProjectTeaser;
}

function DesignStoryCard({ project }: DesignStoryCardProps) {
  const t = useTranslations("designsPage.collection");

  return (
    <Card className="overflow-hidden">
      <CardHeader className="gap-0 p-0">
        <div className="relative h-72 overflow-hidden border-b border-border bg-surface-tint">
          <DesignPreviewImage alt={project.hero.title} src={project.imageSrc} />
        </div>
      </CardHeader>

      <CardContent className="space-y-4 px-6 pt-6">
        <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-accent">
          {project.label}
        </p>
        <CardTitle>{project.hero.title}</CardTitle>
        <p className="text-base leading-7 text-ink-muted">{project.summary}</p>
        <If condition={Boolean(project.tileCaption)}>
          <p className="border-t border-border pt-4 text-sm leading-6 text-ink-soft">
            {project.tileCaption}
          </p>
        </If>
      </CardContent>

      <CardFooter className="flex flex-col items-stretch gap-3 px-6 pb-6 sm:flex-row">
        <ButtonLink href={project.detailRoute} variant="primary" size="md">
          {t("detailsAction")}
        </ButtonLink>
        <ButtonLink
          href={project.figmaHref}
          variant="secondary"
          size="md"
          target="_blank"
          rel="noreferrer"
        >
          {t("figmaAction")}
        </ButtonLink>
      </CardFooter>
    </Card>
  );
}

export { DesignStoryCard };
