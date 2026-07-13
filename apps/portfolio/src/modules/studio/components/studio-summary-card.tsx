import { Card, CardContent, CardHeader, CardTitle } from "@portfolio/ui-lib";

interface StudioSummaryCardProps {
  title: string;
  value: string;
}

function StudioSummaryCard({ title, value }: StudioSummaryCardProps) {
  return (
    <Card>
      <CardHeader className="gap-2">
        <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink-soft">
          {title}
        </p>
        <CardTitle>{value}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0" />
    </Card>
  );
}

export { StudioSummaryCard };
