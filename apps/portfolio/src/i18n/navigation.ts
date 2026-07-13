import { createNavigation } from "next-intl/navigation";

import { routing } from "./routing";

const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);

export { Link, getPathname, redirect, usePathname, useRouter };
