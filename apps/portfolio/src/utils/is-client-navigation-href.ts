const APP_ROUTE_PREFIX = "/";
const PROTOCOL_RELATIVE_PREFIX = "//";
const STATIC_FILE_EXTENSION_PATTERN = /\.[a-z0-9]{2,8}(?:[?#]|$)/i;

function isClientNavigationHref(href: string) {
  if (!href.startsWith(APP_ROUTE_PREFIX) || href.startsWith(PROTOCOL_RELATIVE_PREFIX)) {
    return false;
  }

  return !STATIC_FILE_EXTENSION_PATTERN.test(href);
}

export { isClientNavigationHref };
