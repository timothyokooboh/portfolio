import * as React from "react";
import { Tabs as BaseTabs } from "@base-ui/react/tabs";

import { cn, resolveStatefulClassName } from "../../lib/cn";

type TabsRootProps = React.ComponentPropsWithoutRef<typeof BaseTabs.Root>;
type TabsListProps = React.ComponentPropsWithoutRef<typeof BaseTabs.List>;
type TabsTriggerProps = React.ComponentPropsWithoutRef<typeof BaseTabs.Tab>;
type TabsContentProps = React.ComponentPropsWithoutRef<typeof BaseTabs.Panel>;
type TabsIndicatorProps = React.ComponentPropsWithoutRef<typeof BaseTabs.Indicator>;

const Tabs = BaseTabs.Root;

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ children, className, ...props }, ref) => (
    <BaseTabs.List
      ref={ref}
      className={cn(
        "relative isolate inline-flex items-center gap-1 rounded-pill border border-border bg-surface p-1 shadow-soft",
        className,
      )}
      {...props}
    >
      <TabsIndicator />
      {children}
    </BaseTabs.List>
  ),
);

TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<HTMLElement, TabsTriggerProps>(
  ({ className, ...props }, ref) => (
    <BaseTabs.Tab
      ref={ref}
      className={(state) =>
        cn(
          "ds-motion-tab relative z-[1] inline-flex min-w-[7rem] items-center justify-center rounded-pill px-4 py-2.5 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          state.active
            ? "text-background"
            : "text-ink-muted hover:bg-surface-muted hover:text-ink",
          resolveStatefulClassName(className, state),
        )
      }
      {...props}
    />
  ),
);

TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, ...props }, ref) => (
    <BaseTabs.Panel
      ref={ref}
      className={cn(
        "mt-6 outline-none transition-[opacity,transform] duration-[var(--duration-base)] ease-[var(--ease-emphasized-out)] data-[starting-style]:translate-y-1 data-[starting-style]:opacity-0 data-[ending-style]:translate-y-1 data-[ending-style]:opacity-0 motion-reduce:transition-none motion-reduce:data-[starting-style]:translate-y-0 motion-reduce:data-[ending-style]:translate-y-0",
        className,
      )}
      {...props}
    />
  ),
);

TabsContent.displayName = "TabsContent";

const TabsIndicator = React.forwardRef<HTMLSpanElement, TabsIndicatorProps>(
  ({ className, ...props }, ref) => (
    <BaseTabs.Indicator
      ref={ref}
      className={cn(
        "pointer-events-none absolute top-1 bottom-1 left-[var(--active-tab-left)] right-[var(--active-tab-right)] z-0 rounded-pill bg-ink shadow-soft transition-[left,right,top,bottom,background-color,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-emphasized-out)] data-[orientation=vertical]:top-[var(--active-tab-top)] data-[orientation=vertical]:bottom-[var(--active-tab-bottom)] data-[orientation=vertical]:left-1 data-[orientation=vertical]:right-1 motion-reduce:transition-none",
        className,
      )}
      {...props}
    />
  ),
);

TabsIndicator.displayName = "TabsIndicator";

export type { TabsContentProps, TabsIndicatorProps, TabsListProps, TabsRootProps, TabsTriggerProps };
export { Tabs, TabsContent, TabsIndicator, TabsList, TabsTrigger };
