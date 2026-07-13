"use client";

import * as React from "react";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";

import { cn, resolveStatefulClassName } from "../../lib/cn";
import { buttonVariants } from "./button";
import { If } from "./if";

type SheetProps = React.ComponentPropsWithoutRef<typeof BaseDialog.Root>;
type SheetTriggerProps = React.ComponentPropsWithoutRef<typeof BaseDialog.Trigger>;
type SheetCloseProps = React.ComponentPropsWithoutRef<typeof BaseDialog.Close>;
type SheetPortalProps = React.ComponentPropsWithoutRef<typeof BaseDialog.Portal>;
type SheetOverlayProps = React.ComponentPropsWithoutRef<typeof BaseDialog.Backdrop>;
type SheetPopupProps = React.ComponentPropsWithoutRef<typeof BaseDialog.Popup>;
type SheetTitleProps = React.ComponentPropsWithoutRef<typeof BaseDialog.Title>;
type SheetDescriptionProps = React.ComponentPropsWithoutRef<typeof BaseDialog.Description>;

const SHEET_OVERLAY_CLASSES =
  "fixed inset-0 z-50 bg-ink/12 backdrop-blur-[2px] transition-opacity duration-[var(--duration-base)] ease-[var(--ease-emphasized-out)] data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 motion-reduce:transition-none";
const SHEET_CONTENT_BASE_CLASSES =
  "fixed z-50 border border-border bg-background/95 shadow-soft outline-none backdrop-blur-xl transition-[opacity,transform] duration-[var(--duration-base)] ease-[var(--ease-emphasized-out)] motion-reduce:transition-none";
const SHEET_CLOSE_BUTTON_CLASSES = cn(
  buttonVariants({ size: "icon", variant: "secondary" }),
  "absolute right-4 top-4 rounded-full",
);

const SHEET_SIDE_CLASSES = {
  top: "inset-x-0 top-0 border-b data-[starting-style]:-translate-y-4 data-[starting-style]:opacity-0 data-[ending-style]:-translate-y-4 data-[ending-style]:opacity-0 motion-reduce:data-[starting-style]:translate-y-0 motion-reduce:data-[ending-style]:translate-y-0",
  right:
    "inset-y-0 right-0 h-full w-full max-w-[28rem] border-l data-[starting-style]:translate-x-4 data-[starting-style]:opacity-0 data-[ending-style]:translate-x-4 data-[ending-style]:opacity-0 motion-reduce:data-[starting-style]:translate-x-0 motion-reduce:data-[ending-style]:translate-x-0",
  bottom:
    "inset-x-0 bottom-0 border-t data-[starting-style]:translate-y-4 data-[starting-style]:opacity-0 data-[ending-style]:translate-y-4 data-[ending-style]:opacity-0 motion-reduce:data-[starting-style]:translate-y-0 motion-reduce:data-[ending-style]:translate-y-0",
  left: "inset-y-0 left-0 h-full w-full max-w-[28rem] border-r data-[starting-style]:-translate-x-4 data-[starting-style]:opacity-0 data-[ending-style]:-translate-x-4 data-[ending-style]:opacity-0 motion-reduce:data-[starting-style]:translate-x-0 motion-reduce:data-[ending-style]:translate-x-0",
} as const;

type SheetSide = keyof typeof SHEET_SIDE_CLASSES;

interface SheetContentProps extends Omit<SheetPopupProps, "className"> {
  side?: SheetSide;
  showClose?: boolean;
  closeLabel?: string;
  portalProps?: SheetPortalProps;
  className?: SheetPopupProps["className"];
  backdropClassName?: SheetOverlayProps["className"];
}

interface SheetSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const Sheet = BaseDialog.Root;
const SheetTrigger = BaseDialog.Trigger;
const SheetClose = BaseDialog.Close;
const SheetPortal = BaseDialog.Portal;

const SheetOverlay = React.forwardRef<React.ElementRef<typeof BaseDialog.Backdrop>, SheetOverlayProps>(
  ({ className, ...props }, ref) => (
    <BaseDialog.Backdrop
      ref={ref}
      className={(state) =>
        cn(SHEET_OVERLAY_CLASSES, resolveStatefulClassName(className, state))
      }
      {...props}
    />
  ),
);

SheetOverlay.displayName = "SheetOverlay";

const SheetContent = React.forwardRef<React.ElementRef<typeof BaseDialog.Popup>, SheetContentProps>(
  (
    {
      backdropClassName,
      children,
      className,
      closeLabel = "Close panel",
      portalProps,
      showClose = true,
      side = "right",
      ...props
    },
    ref,
  ) => (
    <SheetPortal {...portalProps}>
      <SheetOverlay className={backdropClassName} />
      <BaseDialog.Popup
        ref={ref}
        className={(state) =>
          cn(
            SHEET_CONTENT_BASE_CLASSES,
            SHEET_SIDE_CLASSES[side],
            resolveStatefulClassName(className, state),
          )
        }
        {...props}
      >
        <If condition={showClose}>
          <BaseDialog.Close aria-label={closeLabel} className={SHEET_CLOSE_BUTTON_CLASSES}>
            <X aria-hidden="true" />
          </BaseDialog.Close>
        </If>
        {children}
      </BaseDialog.Popup>
    </SheetPortal>
  ),
);

SheetContent.displayName = "SheetContent";

const SheetHeader = React.forwardRef<HTMLDivElement, SheetSectionProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col gap-2 text-left", className)}
      {...props}
    />
  ),
);

SheetHeader.displayName = "SheetHeader";

const SheetFooter = React.forwardRef<HTMLDivElement, SheetSectionProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end", className)}
      {...props}
    />
  ),
);

SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<React.ElementRef<typeof BaseDialog.Title>, SheetTitleProps>(
  ({ className, ...props }, ref) => (
    <BaseDialog.Title
      ref={ref}
      className={cn("font-display text-[1.75rem] font-semibold leading-none tracking-[-0.04em] text-ink", className)}
      {...props}
    />
  ),
);

SheetTitle.displayName = "SheetTitle";

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof BaseDialog.Description>,
  SheetDescriptionProps
>(({ className, ...props }, ref) => (
  <BaseDialog.Description
    ref={ref}
    className={cn("text-sm leading-6 text-ink-muted", className)}
    {...props}
  />
));

SheetDescription.displayName = "SheetDescription";

export type {
  SheetCloseProps,
  SheetContentProps,
  SheetDescriptionProps,
  SheetOverlayProps,
  SheetPopupProps,
  SheetPortalProps,
  SheetProps,
  SheetSide,
  SheetTitleProps,
  SheetTriggerProps,
};
export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};
