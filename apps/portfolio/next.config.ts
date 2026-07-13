import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
const DEFAULT_BUILD_DIRECTORY = ".next";
const DEFAULT_IMAGE_QUALITY = 75;
const HIGH_FIDELITY_IMAGE_QUALITY = 95;

const nextConfig: NextConfig = {
  distDir: process.env.NEXT_DIST_DIR ?? DEFAULT_BUILD_DIRECTORY,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [DEFAULT_IMAGE_QUALITY, HIGH_FIDELITY_IMAGE_QUALITY],
  },
};

export default withNextIntl(nextConfig);
