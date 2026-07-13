"use client";

import { IconButton, If } from "@portfolio/ui-lib";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import type { ThemeMode } from "@/utils/theme";
import { applyTheme, getStoredTheme } from "@/utils/theme-client";

function ThemeToggle() {
  const t = useTranslations("theme");
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      setTheme(getStoredTheme());
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const isDark = theme === "dark";
  const nextTheme: ThemeMode = isDark ? "light" : "dark";
  const label = isDark ? t("toggleToLight") : t("toggleToDark");

  const handleClick = () => {
    applyTheme(nextTheme);
    setTheme(nextTheme);
  };

  return (
    <IconButton
      variant="secondary"
      srLabel={label}
      aria-label={label}
      onClick={handleClick}
      className="size-10 border-border bg-surface/90 text-ink shadow-soft hover:bg-surface-muted"
    >
      <If condition={isDark}>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-[18px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2.5" />
          <path d="M12 19.5V22" />
          <path d="M4.93 4.93l1.77 1.77" />
          <path d="M17.3 17.3l1.77 1.77" />
          <path d="M2 12h2.5" />
          <path d="M19.5 12H22" />
          <path d="M4.93 19.07l1.77-1.77" />
          <path d="M17.3 6.7l1.77-1.77" />
        </svg>
      </If>
      <If condition={!isDark}>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-[18px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3c-.02.23-.03.46-.03.7A7.5 7.5 0 0 0 20.3 12c.24 0 .47-.01.7-.03Z" />
        </svg>
      </If>
    </IconButton>
  );
}

export { ThemeToggle };
