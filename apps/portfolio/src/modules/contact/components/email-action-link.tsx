"use client";

import * as React from "react";
import { cn, If } from "@portfolio/ui-lib";
import { useTranslations } from "next-intl";

import { ButtonLink } from "@/components/ui/button-link";
import {
  EMAIL_COPY_FEEDBACK_DURATION_MS,
  EMAIL_COPY_STATUS,
  MAILTO_PROTOCOL,
} from "@/modules/contact/constants/contact";
import { copyTextToClipboard } from "@/utils/copy-text-to-clipboard";

interface EmailActionLinkProps
  extends Omit<
    React.ComponentProps<typeof ButtonLink>,
    "children" | "href" | "onClick"
  > {
  emailAddress: string;
  label: string;
}

type EmailCopyStatus =
  (typeof EMAIL_COPY_STATUS)[keyof typeof EMAIL_COPY_STATUS];

function EmailActionLink({
  className,
  emailAddress,
  label,
  ...props
}: EmailActionLinkProps) {
  const t = useTranslations("contactPage.actions");
  const [copyStatus, setCopyStatus] = React.useState<EmailCopyStatus>(
    EMAIL_COPY_STATUS.idle,
  );
  const resetTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    return () => {
      if (resetTimerRef.current !== null) {
        clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  function showCopyStatus(status: EmailCopyStatus) {
    if (resetTimerRef.current !== null) {
      clearTimeout(resetTimerRef.current);
    }

    setCopyStatus(status);
    resetTimerRef.current = setTimeout(() => {
      setCopyStatus(EMAIL_COPY_STATUS.idle);
    }, EMAIL_COPY_FEEDBACK_DURATION_MS);
  }

  function handleClick() {
    void copyTextToClipboard(emailAddress).then((didCopy) => {
      if (didCopy) {
        showCopyStatus(EMAIL_COPY_STATUS.copied);
        return;
      }

      showCopyStatus(EMAIL_COPY_STATUS.failed);
    });
  }

  const isCopied = copyStatus === EMAIL_COPY_STATUS.copied;
  const hasFailed = copyStatus === EMAIL_COPY_STATUS.failed;
  const isIdle = copyStatus === EMAIL_COPY_STATUS.idle;

  return (
    <>
      <ButtonLink
        className={cn("min-w-36", className)}
        href={`${MAILTO_PROTOCOL}${emailAddress}`}
        onClick={handleClick}
        {...props}
      >
        <span className="grid place-items-center">
          <span
            aria-hidden={!isIdle}
            className={cn("col-start-1 row-start-1", {
              invisible: !isIdle,
            })}
          >
            {label}
          </span>
          <span
            aria-hidden={!isCopied}
            className={cn("col-start-1 row-start-1", {
              invisible: !isCopied,
            })}
          >
            {t("emailCopied")}
          </span>
          <span
            aria-hidden={!hasFailed}
            className={cn("col-start-1 row-start-1", {
              invisible: !hasFailed,
            })}
          >
            {t("emailCopyFailed")}
          </span>
        </span>
      </ButtonLink>
      <span className="sr-only" role="status" aria-live="polite">
        <If condition={isCopied}>{t("emailCopied")}</If>
        <If condition={hasFailed}>{t("emailCopyFailed")}</If>
      </span>
    </>
  );
}

export { EmailActionLink };
