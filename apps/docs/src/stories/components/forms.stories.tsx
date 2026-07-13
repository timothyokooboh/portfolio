import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input, Switch, SwitchThumb, Tabs, TabsContent, TabsList, TabsTrigger, Textarea } from "@portfolio/ui-lib";

const meta = {
  title: "Components/Forms",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Controls: Story = {
  render: () => (
    <div className="grid gap-8 bg-background p-8 xl:grid-cols-2">
      <div className="space-y-5 rounded-panel border border-border bg-surface p-8 shadow-soft">
        <div className="space-y-2">
          <label className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink-soft" htmlFor="title">
            Article title
          </label>
          <Input id="title" placeholder="Architecting editor surfaces with restraint" />
        </div>
        <div className="space-y-2">
          <label className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink-soft" htmlFor="summary">
            Summary
          </label>
          <Textarea id="summary" placeholder="A short note about interaction, typography, and editorial rhythm." />
        </div>
        <div className="flex items-center justify-between rounded-xl border border-border bg-surface-muted px-4 py-3">
          <div>
            <p className="text-sm font-medium text-ink">Publish in dark mode preview</p>
            <p className="text-sm text-ink-muted">Mirror how the portfolio adapts to both themes.</p>
          </div>
          <Switch aria-label="Dark mode preview">
            <SwitchThumb />
          </Switch>
        </div>
      </div>

      <div className="rounded-panel border border-border bg-surface p-8 shadow-soft">
        <Tabs defaultValue="writing">
          <TabsList aria-label="Content sections">
            <TabsTrigger value="writing">Writing</TabsTrigger>
            <TabsTrigger value="designs">Designs</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>
          <TabsContent value="writing">
            <p className="text-sm leading-6 text-ink-muted">
              Rich, article-like surfaces for MDX entries, case-study notes, and experimental
              components.
            </p>
          </TabsContent>
          <TabsContent value="designs">
            <p className="text-sm leading-6 text-ink-muted">
              A calm gallery frame for Figma previews, captions, and links back to source files.
            </p>
          </TabsContent>
          <TabsContent value="projects">
            <p className="text-sm leading-6 text-ink-muted">
              Structured case-study content with impact, responsibilities, and technical decisions.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
};
