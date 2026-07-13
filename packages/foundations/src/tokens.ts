export const colors = {
  light: {
    canvas: "#F8F9FF",
    surface: "#FFFFFF",
    "surface-muted": "#F1F4FB",
    "surface-tint": "#E5EEFF",
    border: "#C6C6CD",
    "border-subtle": "#E4E6EB",
    ink: "#0B1C30",
    "ink-muted": "#45464D",
    "ink-soft": "#6B7280",
    accent: "#855300",
    "accent-strong": "#6C4300",
    "accent-soft": "#F6E8D2",
    "accent-contrast": "#FFF9F0",
    success: "#0E7A53",
    warning: "#8C5A00",
    danger: "#B3261E",
    "inverse-surface": "#0B1C30",
    "inverse-border": "#1E2B44",
    "inverse-ink": "#F8F9FF",
    "inverse-ink-muted": "#C4CDDA",
    "inverse-accent": "#D89A35",
  },
  dark: {
    canvas: "#0B1220",
    surface: "#101A2B",
    "surface-muted": "#142033",
    "surface-tint": "#1B2940",
    border: "#2B3A52",
    "border-subtle": "#202E45",
    ink: "#F4F7FB",
    "ink-muted": "#C4CDDA",
    "ink-soft": "#8D98AA",
    accent: "#D89A35",
    "accent-strong": "#E7B55B",
    "accent-soft": "#2A2113",
    "accent-contrast": "#140F08",
    success: "#31B67E",
    warning: "#E4A83E",
    danger: "#F07F78",
    "inverse-surface": "#0B1C30",
    "inverse-border": "#1E2B44",
    "inverse-ink": "#F8F9FF",
    "inverse-ink-muted": "#C4CDDA",
    "inverse-accent": "#D89A35",
  },
} as const;

export const fontFamilies = {
  sans: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif",
  mono: "var(--font-geist-mono), ui-monospace, SFMono-Regular, monospace",
  display: "var(--font-playfair-display), ui-serif, Georgia, serif",
  editorial: "var(--font-source-serif), ui-serif, Georgia, serif",
} as const;

export const fontSizes = {
  "2xs": { fontSize: "0.6875rem", lineHeight: "1.45" },
  xs: { fontSize: "0.75rem", lineHeight: "1.5" },
  sm: { fontSize: "0.875rem", lineHeight: "1.55" },
  base: { fontSize: "1rem", lineHeight: "1.65" },
  lg: { fontSize: "1.125rem", lineHeight: "1.7" },
  xl: { fontSize: "1.25rem", lineHeight: "1.6" },
  "2xl": { fontSize: "1.5rem", lineHeight: "1.45" },
  "3xl": { fontSize: "1.875rem", lineHeight: "1.3" },
  "4xl": { fontSize: "2.25rem", lineHeight: "1.15" },
  "5xl": { fontSize: "3rem", lineHeight: "1.05" },
  "6xl": { fontSize: "3.75rem", lineHeight: "1" },
  eyebrow: { fontSize: "0.8125rem", lineHeight: "1.2" },
  "display-sm": { fontSize: "2.5rem", lineHeight: "1.08" },
  "display-md": { fontSize: "3.25rem", lineHeight: "1.02" },
  "display-lg": { fontSize: "4rem", lineHeight: "1" },
} as const;

export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const tracking = {
  eyebrow: "0.12em",
  tight: "-0.015em",
  display: "-0.03em",
} as const;

export const spacing = {
  px: "1px",
  0: "0rem",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  page: "clamp(1.5rem, 4vw, 2.5rem)",
  section: "clamp(4rem, 7vw, 7rem)",
  card: "1.5rem",
  "stack-sm": "0.75rem",
  "stack-md": "1.25rem",
  "stack-lg": "2rem",
} as const;

export const radii = {
  none: "0rem",
  xs: "0.125rem",
  sm: "0.25rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  "2xl": "1.5rem",
  card: "1.5rem",
  panel: "2rem",
  pill: "9999px",
} as const;

export const containers = {
  copy: "42rem",
  reading: "48rem",
  content: "75rem",
} as const;

export const shadows = {
  light: {
    soft: "0 1px 2px rgb(11 28 48 / 0.05), 0 12px 32px rgb(11 28 48 / 0.08)",
    card: "0 20px 60px rgb(11 28 48 / 0.12)",
    focus: "0 0 0 4px rgb(133 83 0 / 0.18)",
  },
  dark: {
    soft: "0 1px 2px rgb(0 0 0 / 0.25), 0 18px 44px rgb(0 0 0 / 0.35)",
    card: "0 24px 72px rgb(0 0 0 / 0.45)",
    focus: "0 0 0 4px rgb(216 154 53 / 0.24)",
  },
} as const;

export const easings = {
  standard: "cubic-bezier(0.2, 0.8, 0.2, 1)",
  productive: "cubic-bezier(0.16, 1, 0.3, 1)",
  crisp: "cubic-bezier(0.4, 0, 0.2, 1)",
  "emphasized-out": "cubic-bezier(0.23, 1, 0.32, 1)",
  "emphasized-in-out": "cubic-bezier(0.77, 0, 0.175, 1)",
} as const;

export const durations = {
  instant: "120ms",
  fast: "160ms",
  base: "220ms",
  slow: "280ms",
} as const;

export const breakpoints = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
  "2xl": "96rem",
  "3xl": "112rem",
} as const;

export const foundations = {
  breakpoints,
  colors,
  containers,
  durations,
  easings,
  fontFamilies,
  fontSizes,
  fontWeights,
  radii,
  shadows,
  spacing,
  tracking,
} as const;

export type Foundations = typeof foundations;
