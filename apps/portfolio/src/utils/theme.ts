export const THEME_STORAGE_KEY = "portfolio-theme";

export const THEME_MODES = ["light", "dark"] as const;

export type ThemeMode = (typeof THEME_MODES)[number];
