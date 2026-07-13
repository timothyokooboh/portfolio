# Portfolio Repo Rules

This repository should be built with a strong bias toward modularity, composition, accessibility, and long-term maintainability.

## Core Architecture

- Keep components small and modular. Avoid large, multi-responsibility components.
- Compose aggressively. Prefer assembling features from smaller blocks rather than growing monolith components.
- Page components should mainly compose sections and feature components. Pages should feel like Lego blocks.
- Keep logic out of pages whenever possible. Move shaping, helpers, and reusable behavior into dedicated modules.
- Prefer server components by default in the Next.js app. Use client components only when interactivity or browser APIs require them.
- Reuse shared primitives from `packages/ui-lib` before creating app-local duplicates.

## Rendering Rules

- Do not use ternaries for conditionally rendering JSX.
- Use the shared `If` component from `packages/ui-lib/src/components/ui/if.tsx` for conditional JSX rendering.
- Keep conditional rendering readable and shallow. If rendering logic becomes complex, extract a component.

## Constants And Utilities

- No magic numbers or magic strings.
- Store constants in a dedicated `constants` module at the appropriate scope:
  - feature-local constants stay with the feature
  - app-wide constants live in a shared app constants module
  - design-system values belong in `packages/foundations`
- Helper functions should live in a `utils` directory at the appropriate scope.
- Shared formatting and transformation helpers should not live inside page files or components.

## Copy And Internationalization

- Do not hardcode copy in the application.
- Use `next-intl` for user-facing copy.
- Treat labels, section text, CTA text, empty states, metadata strings, and validation messages as translatable content.
- Centralize message keys and keep copy structured for future iteration.

## Design System

- Do not introduce ad-hoc design values in the app when tokens already exist.
- Colors, typography, spacing, radius, shadows, and motion values should come from `packages/foundations`.
- Keep `packages/ui-lib` accessible and composable. Favor predictable APIs over boolean prop soup.
- Accessibility is a release requirement, not a polish step:
  - keyboard support
  - visible focus states
  - semantic markup
  - reduced motion support
  - acceptable color contrast
  - clear accessible names

## Motion

- For JavaScript-driven UI animation, prefer Motion for React (`motion/react`) over ad-hoc animation solutions.
- Use Motion selectively for:
  - page and section transitions
  - enter and exit choreography
  - scroll-linked effects
  - interruptible and state-driven animations
- Prefer CSS transitions for simple hover, focus, press, color, opacity, and other lightweight UI feedback.
- Respect reduced motion in all motion work.
- Keep motion purposeful. Do not animate for decoration alone on frequently seen interactions.

## Testing

- Write comprehensive unit tests for components, utilities, and rendering logic.
- Write e2e tests for critical user journeys and page-level behavior.
- Test accessibility-sensitive behavior where practical, including keyboard interaction and semantic rendering.
- New components and features should ship with meaningful tests, not only snapshot coverage.

## Skills Reference

When working in this repository, consult the local `.agents` skills directory for implementation guidance:

- React best practices:
  - `.agents/skills/vercel-react-best-practices/SKILL.md`
- UI animation craft and standards:
  - `.agents/skills/emil-design-eng/SKILL.md`
  - `.agents/skills/review-animations/SKILL.md`
  - `.agents/skills/animation-vocabulary/SKILL.md`

These skills should inform implementation decisions, especially for React performance, UI polish, motion quality, and animation review.
