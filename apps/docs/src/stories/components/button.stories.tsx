import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, IconButton } from "@portfolio/ui-lib";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 bg-background p-8">
      <Button variant="primary">View Case Studies</Button>
      <Button variant="secondary">Latest Writing</Button>
      <Button variant="muted">Preview Draft</Button>
      <Button variant="ghost">More Details</Button>
      <Button variant="link">Read the article</Button>
      <IconButton srLabel="Toggle theme">T</IconButton>
      <IconButton srLabel="Send note" variant="secondary">
        S
      </IconButton>
    </div>
  ),
};
