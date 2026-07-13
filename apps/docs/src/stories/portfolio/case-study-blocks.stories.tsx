import type { Meta, StoryObj } from "@storybook/react-vite";

import { Callout, CodeWindow, MetaList, SectionHeading } from "@portfolio/ui-lib";

const meta = {
  title: "Portfolio/Case Study Blocks",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleCode = `export const schemas = {\n  revenueCard: z.object({\n    type: z.literal("revenueCard"),\n    total: z.number(),\n    currency: z.string(),\n  }),\n};`;

export const NarrativeBlocks: Story = {
  render: () => (
    <div className="grid gap-8 bg-background p-8 xl:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)]">
      <MetaList
        eyebrow="Project Metrics"
        items={[
          { label: "Role", value: "Senior Frontend Engineer" },
          { label: "Timeline", value: "3 months" },
          { label: "Stack", value: "Next.js, TypeScript, WebSockets" },
        ]}
      />

      <div className="space-y-8">
        <SectionHeading
          eyebrow="Case Study"
          title="A narrative structure that gives engineering work emotional clarity."
          description="Useful for project pages, detailed writeups, and the future blog posts that embed interactive React components."
        />

        <Callout
          eyebrow="The Challenge"
          title="Designers wanted nuance. Engineers needed a contract."
        >
          <p>
            This panel mirrors the challenge block from the approved case-study page and also fits
            private studio surfaces where you may want to surface editorial guidance or publishing
            notes.
          </p>
        </Callout>

        <CodeWindow code={sampleCode} filename="schemas.ts" />

        <Callout variant="quote">
          <p>
            A portfolio can feel expressive without becoming noisy when each surface carries a clear
            job: orient, persuade, explain, or reflect.
          </p>
        </Callout>
      </div>
    </div>
  ),
};
