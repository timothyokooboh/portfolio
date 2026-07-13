"use client";

import { THEME_MODES, THEME_STORAGE_KEY, type ThemeMode } from "@/utils/theme";

interface ApplyThemeOptions {
  persist?: boolean;
}

function getSystemTheme(): ThemeMode {
  if (typeof window.matchMedia !== "function") {
    return "light";
  }

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

function getStoredTheme(): ThemeMode {
  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  return THEME_MODES.find((theme) => theme === storedTheme) ?? getSystemTheme();
}

function applyTheme(theme: ThemeMode, options?: ApplyThemeOptions) {
  const root = document.documentElement;
  const shouldPersist = options?.persist ?? true;

  root.classList.remove("light", "dark");
  root.classList.add(theme);

  if (shouldPersist) {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }
}

export { applyTheme, getStoredTheme, getSystemTheme };
