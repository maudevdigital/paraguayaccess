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
  const seo = seoData[locale].residencyGuide;

  const alternateLanguages: Record<string, string> = {};
  for (const l of locales) {
    alternateLanguages[l] = `${SITE_URL}/${l}/residency/guide`;
  }
  alternateLanguages["x-default"] = `${SITE_URL}/en/residency/guide`;

  return {
    title: { absolute: seo.title },
    description: seo.description,
    keywords: [
      "Paraguay residency guide", "Paraguay residency program", "Paraguay residency requirements 2026",
      "Paraguay residency documents", "Paraguay residency timeline", "Paraguay residency step by step",
      "Paraguay temporary residency requirements", "Paraguay permanent residency investment",
      "guía residencia Paraguay", "programa residencia Paraguay", "requisitos residencia Paraguay 2026",
      "guide résidence Paraguay", "guida residenza Paraguay",
      "руководство резидентство Парагвай", "οδηγός κατοικίας Παραγουάη",
      "guia residência Paraguai", "requisitos residência Paraguai",
    ],
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${SITE_URL}/${locale}/residency/guide`,
      type: "article",
      siteName: "Paraguay Access",
      locale: ogLocaleMap[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocaleMap[l]),
      images: [{ url: "/images/logo-blue.png", width: 512, height: 512, alt: "Paraguay Access" }],
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/residency/guide`,
      languages: alternateLanguages,
    },
  };
}

function GuideJsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/${locale}` },
          { "@type": "ListItem", position: 2, name: "Residency", item: `${SITE_URL}/${locale}/residency` },
          { "@type": "ListItem", position: 3, name: "Guide", item: `${SITE_URL}/${locale}/residency/guide` },
        ],
      },
      {
        "@type": "Article",
        headline: "Residency Program in Paraguay: How It Works in 2026",
        description: "Complete guide to obtaining temporary and permanent residency in Paraguay. Requirements, documents, costs, tax benefits, and step-by-step process.",
        datePublished: "2026-01-15",
        dateModified: "2026-03-07",
        author: { "@type": "Organization", name: "Paraguay Access" },
        publisher: {
          "@type": "Organization",
          name: "Paraguay Access",
          logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo-blue.png` },
        },
        mainEntityOfPage: `${SITE_URL}/${locale}/residency/guide`,
        inLanguage: locale,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function GuideLayout({
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
      <GuideJsonLd locale={locale} />
      {children}
    </>
  );
}
