import { Callout, CodeWindow } from "@portfolio/ui-lib";
import { useTranslations } from "next-intl";

interface StudioSetupStateProps {
  contentDirectory: string;
}

function StudioSetupState({ contentDirectory }: StudioSetupStateProps) {
  const t = useTranslations("studio.setup");
  const workflowSnippet = `${contentDirectory}/\n  article-slug.mdx`;

  return (
    <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
      <Callout className="p-6 sm:p-8" title={t("title")}>
        <p>{t("description")}</p>
        <p>{t("note")}</p>
      </Callout>

      <CodeWindow
        className="h-full"
        filename={t("filename")}
        actionLabel={t("required")}
        code={workflowSnippet}
      />
    </div>
  );
}

export { StudioSetupState };
