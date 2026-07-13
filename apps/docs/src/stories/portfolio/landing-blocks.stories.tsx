import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Button,
  DesignTile,
  ExperienceRow,
  ProjectCard,
  SectionHeading,
  WritingCard,
} from "@portfolio/ui-lib";

const meta = {
  title: "Portfolio/Landing Blocks",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

function MockVisual({ className }: { className?: string }) {
  return (
    <div
      className={[
        "size-full bg-[radial-gradient(circle_at_top_left,_rgba(133,83,0,0.18),_transparent_45%),linear-gradient(160deg,_rgba(11,28,48,0.95),_rgba(33,49,78,0.92))]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

export const HomeSections: Story = {
  render: () => (
    <div className="space-y-section bg-background px-page py-section text-foreground">
      <SectionHeading
        eyebrow="Selected Work"
        title="Depth in systems, interfaces, and product thinking."
        description="A reusable set of sections that mirrors the approved landing page taste: sharp typographic hierarchy, quiet surfaces, and intentional visual weight."
        action={<Button variant="link">View all projects</Button>}
      />

      <div className="grid gap-6 xl:grid-cols-2">
        <ProjectCard
          href="#"
          label="Design System / Vue"
          title="Seamkit UI"
          summary="Accessible foundations, shared UX guidance, and component architecture for multiple product teams."
          visual={<MockVisual />}
        />
        <ProjectCard
          href="#"
          label="Open Source / Vue"
          title="VBox"
          tone="dark"
          summary="A polymorphic styling engine that translates design-system ergonomics into expressive Vue props."
          visual={<MockVisual className="bg-[radial-gradient(circle_at_center,_rgba(216,154,53,0.22),_transparent_38%),linear-gradient(135deg,_rgba(18,23,41,1),_rgba(44,65,120,1))]" />}
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div className="space-y-4">
          <WritingCard
            href="#"
            meta="Tech / 5 min read"
            title="Why design systems fail without engineering empathy."
            summary="Short-form writing with enough structure for learning notes, architecture reflections, and animation experiments."
          />
          <WritingCard
            href="#"
            meta="Process / 8 min read"
            title="Architecting VBox: a polymorphic journey."
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <DesignTile title="Experimental dashboard" caption="Interaction concept" visual={<MockVisual className="bg-[linear-gradient(135deg,_rgba(229,238,255,0.95),_rgba(198,198,205,0.55))]" />} />
          <DesignTile title="System canvas" caption="Layout exploration" visual={<MockVisual className="bg-[linear-gradient(160deg,_rgba(245,233,211,0.85),_rgba(229,238,255,0.85))]" />} />
        </div>
      </div>

      <div className="rounded-panel border border-border bg-surface p-8 shadow-soft">
        <ExperienceRow
          period="2021 — Present"
          company="SeamlessHR"
          role="Lead Frontend Engineer"
          location="Lagos, Nigeria"
          note="Building design-system foundations and the interface contracts product teams depend on."
          highlights={[
            "Led the delivery of 40+ reusable and accessible design-system components.",
            "Partnered across product teams to improve consistency, UX quality, and frontend velocity.",
          ]}
        />
        <ExperienceRow
          period="Independent"
          company="Contract and Open Source Work"
          role="Full-stack and Frontend Systems Builder"
          location="Remote"
          note="A second row can hold sharper proof points without losing the calm visual rhythm."
          highlights={[
            "Built end-to-end product systems for client work.",
            "Used open source experiments to sharpen API and component design taste.",
          ]}
        />
      </div>
    </div>
  ),
};
