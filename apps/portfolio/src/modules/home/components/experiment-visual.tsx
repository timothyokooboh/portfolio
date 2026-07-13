import { cn } from "@portfolio/ui-lib";

interface ExperimentVisualProps {
  variant: "system" | "editorial" | "motion" | "more";
}

const visualClasses: Record<ExperimentVisualProps["variant"], string> = {
  system:
    "bg-[radial-gradient(circle_at_top_left,rgba(133,83,0,0.18),transparent_40%),linear-gradient(150deg,rgba(229,238,255,1),rgba(198,206,230,0.68))]",
  editorial:
    "bg-[radial-gradient(circle_at_center,rgba(11,28,48,0.08),transparent_45%),linear-gradient(160deg,rgba(246,232,210,0.9),rgba(255,255,255,1))]",
  motion:
    "bg-[radial-gradient(circle_at_bottom_left,rgba(216,154,53,0.18),transparent_45%),linear-gradient(145deg,rgba(11,28,48,0.95),rgba(52,83,140,0.92))]",
  more:
    "bg-[linear-gradient(135deg,rgba(255,255,255,1),rgba(241,244,251,1))]"
};

function ExperimentVisual({ variant }: ExperimentVisualProps) {
  return (
    <div className={cn("relative size-full overflow-hidden", visualClasses[variant])}>
      <div className="absolute inset-5 border border-white/60 bg-white/45 shadow-soft backdrop-blur-sm" />
      <div className="absolute right-5 top-5 h-16 w-16 rounded-full border border-white/60 bg-white/55 shadow-soft backdrop-blur-sm" />
      <div className="absolute bottom-6 left-6 right-10 h-20 border border-white/60 bg-white/60 shadow-soft backdrop-blur-sm" />
      <div className="absolute bottom-10 left-10 h-2.5 w-24 rounded-full bg-ink/15" />
      <div className="absolute bottom-16 left-10 h-2.5 w-36 rounded-full bg-ink/10" />
    </div>
  );
}

export { ExperimentVisual };
