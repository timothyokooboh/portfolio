import { radii, shadows, spacing } from "@portfolio/foundations/tokens";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Foundations/System",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

function TokenList({
  title,
  tokens,
}: {
  title: string;
  tokens: Record<string, string>;
}) {
  return (
    <section className="space-y-5 rounded-panel border border-border bg-surface p-8 shadow-soft">
      <h2 className="font-display text-2xl text-ink">{title}</h2>
      <div className="space-y-4">
        {Object.entries(tokens).map(([token, value]) => (
          <div key={token} className="flex items-center justify-between gap-4 border-t border-border pt-4 first:border-t-0 first:pt-0">
            <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink-soft">{token}</p>
            <p className="text-sm text-ink">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export const Overview: Story = {
  render: () => (
    <div className="grid gap-6 bg-background p-8 text-foreground xl:grid-cols-3">
      <TokenList title="Spacing" tokens={spacing} />
      <TokenList title="Radii" tokens={radii} />
      <TokenList title="Shadows" tokens={shadows.light} />
    </div>
  ),
};
