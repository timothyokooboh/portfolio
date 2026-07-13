import Image from "next/image";

const WORK_HERO_VISUAL_ITEMS = {
  primary: "/images/projects/seamkit-ui/accessibility.png",
  secondary: "/images/projects/olanna/inbox-thread.png",
  tertiary: "/images/projects/myfastmeds/cart.png",
} as const;

function WorkHeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="hidden w-full max-w-[30rem] lg:block xl:max-w-[34rem]"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-surface-tint p-5 shadow-soft xl:p-6">
        <div className="absolute inset-x-12 top-0 h-28 rounded-full bg-[radial-gradient(circle_at_center,_rgba(183,134,43,0.18),_transparent_68%)] blur-3xl" />

        <div className="relative grid gap-4 lg:grid-cols-[minmax(0,1.26fr)_minmax(0,0.92fr)]">
          <div className="relative min-h-[24rem] overflow-hidden rounded-[1.75rem] border border-white/70 bg-surface shadow-soft lg:row-span-2 xl:min-h-[27rem]">
            <Image
              src={WORK_HERO_VISUAL_ITEMS.primary}
              alt=""
              fill
              sizes="(min-width: 1280px) 22rem, 19rem"
              className="object-cover object-left-top"
            />
          </div>

          <div className="relative min-h-[11.5rem] overflow-hidden rounded-[1.45rem] border border-white/70 bg-surface shadow-soft xl:min-h-[13rem]">
            <Image
              src={WORK_HERO_VISUAL_ITEMS.secondary}
              alt=""
              fill
              sizes="(min-width: 1280px) 10rem, 9rem"
              className="object-cover object-top"
            />
          </div>

          <div className="relative min-h-[11.5rem] overflow-hidden rounded-[1.45rem] border border-white/70 bg-surface shadow-soft xl:min-h-[13rem]">
            <Image
              src={WORK_HERO_VISUAL_ITEMS.tertiary}
              alt=""
              fill
              sizes="(min-width: 1280px) 10rem, 9rem"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { WorkHeroVisual };
