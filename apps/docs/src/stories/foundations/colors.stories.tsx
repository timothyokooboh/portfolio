import { colors } from "@portfolio/foundations/tokens";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Foundations/Colors",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

function ThemePalette({ mode, palette }: { mode: "light" | "dark"; palette: Record<string, string> }) {
  return (
    <section className="space-y-6">
      <div>
        <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink-soft">{mode}</p>
        <h2 className="mt-2 font-display text-3xl text-ink">
          {mode === "light" ? "Light palette" : "Dark palette"}
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Object.entries(palette).map(([token, value]) => (
          <div key={token} className="overflow-hidden rounded-card border border-border bg-surface shadow-soft">
            <div className="h-28 border-b border-border" style={{ backgroundColor: value }} />
            <div className="space-y-2 p-4">
              <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink-soft">{token}</p>
              <p className="text-sm font-medium text-ink">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export const Overview: Story = {
  render: () => (
    <div className="min-h-screen space-y-12 bg-background px-page py-section text-foreground">
      <ThemePalette mode="light" palette={colors.light} />
      <ThemePalette mode="dark" palette={colors.dark} />
    </div>
  ),
};
