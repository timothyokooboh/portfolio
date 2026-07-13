import * as React from "react";
import Link from "next/link";

import { isClientNavigationHref } from "@/utils/is-client-navigation-href";

interface AppLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
}

const AppLink = React.forwardRef<HTMLAnchorElement, AppLinkProps>(
  ({ href, ...props }, ref) => {
    if (isClientNavigationHref(href)) {
      return <Link ref={ref} href={href} {...props} />;
    }

    return <a ref={ref} href={href} {...props} />;
  },
);

AppLink.displayName = "AppLink";

export { AppLink, type AppLinkProps };
