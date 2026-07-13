import * as React from "react";
import { buttonVariants, cn, type ButtonProps } from "@portfolio/ui-lib";

import { AppLink, type AppLinkProps } from "./app-link";

type ButtonLinkProps = AppLinkProps &
  Pick<ButtonProps, "size" | "variant">;

function ButtonLink({
  children,
  className,
  size,
  variant,
  ...props
}: ButtonLinkProps) {
  return (
    <AppLink
      className={cn(
        buttonVariants({ size, variant }),
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      {...props}
    >
      {children}
    </AppLink>
  );
}

export { ButtonLink };
