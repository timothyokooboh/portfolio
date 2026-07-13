import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import { ThemeInitializer } from "@/components/layout/theme-initializer";
import { getMessagesForLocale } from "@/i18n/messages";
import { routing } from "@/i18n/routing";
import { createSiteMetadata } from "@/utils/create-page-metadata";
import { getBaseUrl } from "@/utils/get-base-url";
import "../globals.css";

const geistSans = localFont({
  variable: "--font-geist-sans",
  display: "swap",
  src: [
    { path: "../../src/fonts/geist-regular.ttf", weight: "400", style: "normal" },
    { path: "../../src/fonts/geist-medium.ttf", weight: "500", style: "normal" },
    { path: "../../src/fonts/geist-bold.ttf", weight: "700", style: "normal" },
  ],
});

const geistMono = localFont({
  variable: "--font-geist-mono",
  display: "swap",
  src: [
    {
      path: "../../src/fonts/geist-mono-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../src/fonts/geist-mono-medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
});

const playfairDisplay = localFont({
  variable: "--font-playfair-display",
  display: "swap",
  src: [
    {
      path: "../../src/fonts/playfair-display-semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../src/fonts/playfair-display-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = getBaseUrl();

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const appMessages = getMessagesForLocale(locale);

  return createSiteMetadata({
    baseUrl,
    title: appMessages.metadata.title,
    description: appMessages.metadata.description,
  });
}

export default async function RootLayout({
  children,
  params,
}: Readonly<LocaleLayoutProps>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} light h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-background text-foreground font-sans"
      >
        <ThemeInitializer />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
