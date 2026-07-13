import { fontFamilies, fontSizes, tracking } from "@portfolio/foundations/tokens";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Foundations/Typography",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Scale: Story = {
  render: () => (
    <div className="min-h-screen space-y-12 bg-background px-page py-section text-foreground">
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink-soft">
            Typography
          </p>
          <h1 className="font-display text-display-sm tracking-display text-ink md:text-display-md">
            Editorial contrast with dependable UI rhythm.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-ink-muted">
            The system pairs a literary display face with pragmatic interface text so the portfolio
            feels thoughtful without losing clarity.
          </p>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="space-y-4 rounded-panel border border-border bg-surface px-8 py-8 shadow-soft">
          {Object.entries(fontSizes).map(([token, scale]) => (
            <div key={token} className="border-b border-border/70 pb-4 last:border-b-0 last:pb-0">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink-soft">
                  {token}
                </p>
                <p className="text-sm text-ink-muted">
                  {scale.fontSize} / {scale.lineHeight}
                </p>
              </div>
              <p className="mt-3 text-ink" style={{ fontSize: scale.fontSize, lineHeight: scale.lineHeight }}>
                Precision, warmth, and structure.
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-6 rounded-panel border border-border bg-surface px-8 py-8 shadow-soft">
          <div className="space-y-3">
            <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink-soft">
              Families
            </p>
            <p className="font-display text-3xl text-ink">Display</p>
            <p style={{ fontFamily: fontFamilies.display }} className="text-lg text-ink-muted">
              {fontFamilies.display}
            </p>
            <p className="font-sans text-xl text-ink">Interface</p>
            <p style={{ fontFamily: fontFamilies.sans }} className="text-lg text-ink-muted">
              {fontFamilies.sans}
            </p>
            <p className="font-mono text-lg text-ink">Mono</p>
            <p style={{ fontFamily: fontFamilies.mono }} className="text-lg text-ink-muted">
              {fontFamilies.mono}
            </p>
          </div>

          <div className="space-y-3 border-t border-border pt-6">
            <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink-soft">
              Tracking
            </p>
            {Object.entries(tracking).map(([token, value]) => (
              <div key={token} className="flex items-center justify-between gap-4">
                <p className="font-mono text-sm uppercase tracking-[0.12em] text-ink">{token}</p>
                <p className="text-sm text-ink-muted">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  ),
};
