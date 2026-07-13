import type { Metadata } from "next";

import {
  SITE_APPLICATION_NAME,
  SITE_AUTHOR_NAME,
  SITE_LOCALE,
  SITE_OG_IMAGE_PATH,
  SITE_TWITTER_IMAGE_PATH,
} from "@/constants/site-metadata";

const TWITTER_CARD = "summary_large_image" as const;

interface CreatePageMetadataParams {
  baseUrl: string;
  description: string;
  path: string;
  title: string;
  type?: "article" | "website";
}

interface CreateSiteMetadataParams {
  baseUrl: string;
  description: string;
  title: string;
}

function toAbsoluteUrl(baseUrl: string, path: string) {
  return new URL(path, baseUrl).toString();
}

function createPageMetadata({
  baseUrl,
  description,
  path,
  title,
  type = "website",
}: CreatePageMetadataParams): Metadata {
  const canonicalUrl = toAbsoluteUrl(baseUrl, path);
  const openGraphImageUrl = toAbsoluteUrl(baseUrl, SITE_OG_IMAGE_PATH);
  const twitterImageUrl = toAbsoluteUrl(baseUrl, SITE_TWITTER_IMAGE_PATH);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_AUTHOR_NAME,
      locale: SITE_LOCALE,
      type,
      images: [
        {
          url: openGraphImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: TWITTER_CARD,
      title,
      description,
      images: [twitterImageUrl],
    },
  };
}

function createSiteMetadata({
  baseUrl,
  description,
  title,
}: CreateSiteMetadataParams): Metadata {
  const siteUrl = toAbsoluteUrl(baseUrl, "/");
  const openGraphImageUrl = toAbsoluteUrl(baseUrl, SITE_OG_IMAGE_PATH);
  const twitterImageUrl = toAbsoluteUrl(baseUrl, SITE_TWITTER_IMAGE_PATH);

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    applicationName: SITE_APPLICATION_NAME,
    authors: [{ name: SITE_AUTHOR_NAME }],
    creator: SITE_AUTHOR_NAME,
    publisher: SITE_AUTHOR_NAME,
    referrer: "origin-when-cross-origin",
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: SITE_AUTHOR_NAME,
      locale: SITE_LOCALE,
      type: "website",
      images: [
        {
          url: openGraphImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: TWITTER_CARD,
      title,
      description,
      images: [twitterImageUrl],
    },
  };
}

export { createPageMetadata, createSiteMetadata };
