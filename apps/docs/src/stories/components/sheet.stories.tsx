import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  buttonVariants,
  cn,
} from "@portfolio/ui-lib";

const SHEET_TRIGGER_CLASSES = cn(
  buttonVariants({ size: "md", variant: "secondary" }),
  "cursor-pointer",
);
const SHEET_CONTENT_CLASSES =
  "w-[calc(100vw-2rem)] max-w-[24rem] rounded-[2rem] border border-border bg-background/95 p-6 pt-16";

const meta = {
  title: "Components/Sheet",
  component: Sheet,
  tags: ["autodocs"],
} satisfies Meta<typeof Sheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MobileNavigationPattern: Story = {
  render: () => (
    <div className="flex min-h-[28rem] items-start justify-start bg-background p-8">
      <Sheet>
        <SheetTrigger className={SHEET_TRIGGER_CLASSES} aria-label="Open mobile menu">
          Open mobile menu
        </SheetTrigger>
        <SheetContent
          side="right"
          closeLabel="Close mobile menu"
          className={SHEET_CONTENT_CLASSES}
        >
          <SheetHeader>
            <SheetTitle>Mobile navigation</SheetTitle>
            <SheetDescription>
              Use sheets for mobile menus, studio side panels, and focused flows that should trap
              attention without leaving the current page.
            </SheetDescription>
          </SheetHeader>

          <nav aria-label="Mobile navigation" className="mt-8 grid gap-2">
            <a
              href="#home"
              className="rounded-card border border-border bg-surface px-4 py-3 text-base text-ink"
            >
              Home
            </a>
            <a
              href="#work"
              className="rounded-card border border-transparent px-4 py-3 text-base text-ink-muted transition-colors hover:border-border hover:bg-surface-muted hover:text-ink"
            >
              Work
            </a>
            <a
              href="#designs"
              className="rounded-card border border-transparent px-4 py-3 text-base text-ink-muted transition-colors hover:border-border hover:bg-surface-muted hover:text-ink"
            >
              Designs
            </a>
            <a
              href="#writing"
              className="rounded-card border border-transparent px-4 py-3 text-base text-ink-muted transition-colors hover:border-border hover:bg-surface-muted hover:text-ink"
            >
              Writing
            </a>
          </nav>

          <SheetFooter>
            <Button variant="secondary">Resume</Button>
            <Button>Contact</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  ),
};
