import type { Metadata } from "next";
import { locales, type Locale, ogLocaleMap, isValidLocale } from "@/lib/i18n/config";
import { seoData } from "@/lib/i18n/seo";

const SITE_URL = "https://paraguayaccess.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : "en";
  const seo = seoData[locale].terms;

  const alternateLanguages: Record<string, string> = {};
  for (const l of locales) {
    alternateLanguages[l] = `${SITE_URL}/${l}/terms`;
  }
  alternateLanguages["x-default"] = `${SITE_URL}/en/terms`;

  return {
    title: { absolute: seo.title },
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${SITE_URL}/${locale}/terms`,
      locale: ogLocaleMap[locale],
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/terms`,
      languages: alternateLanguages,
    },
  };
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
