import { ImageResponse } from "next/og";

import { PortfolioSocialImage } from "@/components/seo/portfolio-social-image";

export const alt = "Timothy Okooboh portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<PortfolioSocialImage />, size);
}
