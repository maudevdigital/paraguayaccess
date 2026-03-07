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
  const seo = seoData[locale].about;

  const alternateLanguages: Record<string, string> = {};
  for (const l of locales) {
    alternateLanguages[l] = `${SITE_URL}/${l}/about`;
  }
  alternateLanguages["x-default"] = `${SITE_URL}/en/about`;

  return {
    title: { absolute: seo.title },
    description: seo.description,
    keywords: [
      "about Paraguay Access", "Paraguay residency experts", "Paraguay tax advisory firm",
      "Paraguay immigration consultants", "Paraguay expat services team",
      "sobre Paraguay Access", "quiénes somos Paraguay Access",
      "sobre a Paraguay Access", "quem somos Paraguay Access",
      "à propos Paraguay Access", "chi siamo Paraguay Access",
      "о нас Paraguay Access", "σχετικά Paraguay Access",
    ],
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${SITE_URL}/${locale}/about`,
      siteName: "Paraguay Access",
      locale: ogLocaleMap[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocaleMap[l]),
      images: [{ url: "/images/logo-blue.png", width: 512, height: 512, alt: "Paraguay Access" }],
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/about`,
      languages: alternateLanguages,
    },
  };
}

function AboutJsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: "About Us", item: `${SITE_URL}/${locale}/about` },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function AboutLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : "en";
  return (
    <>
      <AboutJsonLd locale={locale} />
      {children}
    </>
  );
}
