import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge, Card, CardContent, CardDescription, CardHeader, CardTitle, CodeWindow } from "@portfolio/ui-lib";

const meta = {
  title: "Components/Surfaces",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const exampleCode = `const article = {\n  title: "Design systems with engineering empathy",\n  status: "draft",\n  tags: ["design systems", "frontend"],\n};`;

export const EditorialSurfaces: Story = {
  render: () => (
    <div className="grid gap-6 bg-background p-8 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
      <Card>
        <CardHeader>
          <Badge variant="solid">Draft</Badge>
          <CardTitle>Writing studio snapshot</CardTitle>
          <CardDescription>
            Reusable surfaces for studio-facing pages, article previews, and public case-study
            blocks.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-6 text-ink-muted">
          <p>Use restrained borders, soft shadows, and editorial typography to keep admin pages polished.</p>
          <p>These same primitives can also power preview cards across the public portfolio.</p>
        </CardContent>
      </Card>

      <CodeWindow code={exampleCode} filename="article-meta.ts" />
    </div>
  ),
};
