import * as React from "react";
import { Switch as BaseSwitch } from "@base-ui/react/switch";

import { cn, resolveStatefulClassName } from "../../lib/cn";

type SwitchRootProps = React.ComponentPropsWithoutRef<typeof BaseSwitch.Root>;
type SwitchThumbProps = React.ComponentPropsWithoutRef<typeof BaseSwitch.Thumb>;

const Switch = React.forwardRef<HTMLElement, SwitchRootProps>(
  ({ className, ...props }, ref) => (
    <BaseSwitch.Root
      ref={ref}
      className={(state) =>
        cn(
          "ds-motion-field inline-flex h-7 w-12 items-center rounded-pill border border-border p-0.5 shadow-soft outline-none motion-reduce:transform-none active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          state.checked ? "bg-ink text-background" : "bg-surface-tint text-ink",
          resolveStatefulClassName(className, state),
        )
      }
      {...props}
    />
  ),
);

Switch.displayName = "Switch";

const SwitchThumb = React.forwardRef<HTMLSpanElement, SwitchThumbProps>(
  ({ className, ...props }, ref) => (
    <BaseSwitch.Thumb
      ref={ref}
      className={(state) =>
        cn(
          "ds-motion-thumb block size-5 rounded-full bg-background shadow-sm",
          state.checked ? "translate-x-5" : "translate-x-0",
          resolveStatefulClassName(className, state),
        )
      }
      {...props}
    />
  ),
);

SwitchThumb.displayName = "SwitchThumb";

export { Switch, SwitchThumb };
