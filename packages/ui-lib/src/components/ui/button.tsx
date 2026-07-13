import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/cn";

const buttonVariants = cva(
  "ds-motion-button inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-sm border font-mono text-[13px] uppercase tracking-[0.12em] motion-reduce:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4",
  {
    variants: {
      variant: {
        primary:
          "border-black bg-black text-white shadow-soft hover:border-black/90 hover:bg-[#101828]",
        secondary:
          "border-border bg-surface text-ink hover:border-ink/25 hover:bg-surface-muted",
        muted: "border-transparent bg-surface-muted text-ink hover:bg-surface-tint",
        ghost: "border-transparent bg-transparent text-ink hover:bg-surface-muted",
        link: "border-transparent bg-transparent px-0 py-0 text-accent hover:text-accent-strong hover:underline",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-6",
        lg: "h-12 px-8",
        icon: "size-10 px-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, type = "button", variant, ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(buttonVariants({ size, variant }), className)}
      {...props}
    />
  ),
);

Button.displayName = "Button";

export interface IconButtonProps extends Omit<ButtonProps, "size"> {
  srLabel?: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, className, srLabel, variant = "ghost", ...props }, ref) => (
    <Button
      ref={ref}
      variant={variant}
      size="icon"
      className={cn("rounded-full", className)}
      aria-label={srLabel ?? props["aria-label"]}
      {...props}
    >
      {children}
    </Button>
  ),
);

IconButton.displayName = "IconButton";

export { Button, IconButton, buttonVariants };
