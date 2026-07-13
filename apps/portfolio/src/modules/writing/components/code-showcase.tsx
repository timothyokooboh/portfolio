import type { ReactNode } from "react";
import { CodeWindow } from "@portfolio/ui-lib";

interface CodeShowcaseProps {
  actionLabel?: string;
  children: ReactNode;
  filename?: string;
}

function CodeShowcase({
  actionLabel,
  children,
  filename,
}: CodeShowcaseProps) {
  const code = getCodeShowcaseContent(children);

  return <CodeWindow actionLabel={actionLabel} code={code} filename={filename} />;
}

function getCodeShowcaseContent(children: ReactNode) {
  if (typeof children === "string") {
    return children.trim();
  }

  if (Array.isArray(children)) {
    return children.join("").trim();
  }

  return "";
}

export { CodeShowcase };
