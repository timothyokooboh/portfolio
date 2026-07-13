import { colors, radii, spacing } from "@portfolio/foundations";

import { messages as appMessages } from "@/i18n/messages";
import { SITE_AUTHOR_NAME } from "@/constants/site-metadata";

function PortfolioSocialImage() {
  const palette = colors.light;

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: palette.canvas,
        color: palette.ink,
        padding: spacing[12],
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          border: `2px solid ${palette.border}`,
          borderRadius: radii.panel,
          background: palette.surface,
          padding: spacing[12],
          boxShadow: "0 18px 48px rgba(11, 28, 48, 0.12)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: spacing[8],
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: spacing[5],
              maxWidth: "72%",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "22px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: palette.accent,
              }}
            >
              {appMessages.home.hero.eyebrow}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: spacing[3],
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: "74px",
                  lineHeight: 1,
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                }}
              >
                {SITE_AUTHOR_NAME.toUpperCase()}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: "32px",
                  lineHeight: 1.25,
                  color: palette.ink,
                }}
              >
                {appMessages.metadata.description}
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              minWidth: "230px",
              minHeight: "230px",
              borderRadius: "999px",
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0) 22%), linear-gradient(135deg, #2d55d8, #1c2f73 70%)",
              border: `10px solid ${palette["surface-tint"]}`,
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: spacing[6],
            fontSize: "24px",
            color: palette["ink-muted"],
          }}
        >
          <div
            style={{
              display: "flex",
              gap: spacing[4],
            }}
          >
            <div
              style={{
                display: "flex",
                borderRadius: radii.pill,
                background: palette["accent-soft"],
                color: palette["accent-strong"],
                padding: `${spacing[2]} ${spacing[4]}`,
                fontSize: "20px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {appMessages.home.principles.title}
            </div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            {appMessages.home.hero.location}
          </div>
        </div>
      </div>
    </div>
  );
}

export { PortfolioSocialImage };
