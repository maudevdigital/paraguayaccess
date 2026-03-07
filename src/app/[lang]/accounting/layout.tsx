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
  const seo = seoData[locale].accounting;

  const alternateLanguages: Record<string, string> = {};
  for (const l of locales) {
    alternateLanguages[l] = `${SITE_URL}/${l}/accounting`;
  }
  alternateLanguages["x-default"] = `${SITE_URL}/en/accounting`;

  return {
    title: { absolute: seo.title },
    description: seo.description,
    keywords: [
      "Paraguay accounting", "Paraguay tax services", "RUC registration Paraguay",
      "Paraguay bookkeeping", "Paraguay tax filing", "Paraguay fiscal compliance",
      "Paraguay 10% corporate tax", "Paraguay territorial tax", "tax optimization Paraguay",
      "contabilidad Paraguay", "impuestos Paraguay", "registro RUC Paraguay",
      "declaración fiscal Paraguay", "planificación fiscal Paraguay",
      "contabilidade Paraguai", "impostos Paraguai", "registro RUC Paraguai",
      "comptabilité Paraguay", "fiscalité Paraguay",
      "contabilità Paraguay", "tasse Paraguay",
      "бухгалтерия Парагвай", "налоги Парагвай",
      "λογιστική Παραγουάη", "φορολογία Παραγουάη",
    ],
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${SITE_URL}/${locale}/accounting`,
      siteName: "Paraguay Access",
      locale: ogLocaleMap[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocaleMap[l]),
      images: [{ url: "/images/logo-blue.png", width: 512, height: 512, alt: "Paraguay Access" }],
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/accounting`,
      languages: alternateLanguages,
    },
  };
}

function AccountingJsonLd({ locale }: { locale: Locale }) {
  const seo = seoData[locale].accounting;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/${locale}` },
          { "@type": "ListItem", position: 2, name: "Accounting & Tax", item: `${SITE_URL}/${locale}/accounting` },
        ],
      },
      {
        "@type": "Service",
        name: seo.title,
        description: seo.description,
        provider: {
          "@type": "Organization",
          name: "Paraguay Access",
          url: SITE_URL,
        },
        areaServed: { "@type": "Country", name: "Paraguay" },
        serviceType: "Accounting & Tax Advisory Services",
        url: `${SITE_URL}/${locale}/accounting`,
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

export default async function AccountingLayout({
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
      <AccountingJsonLd locale={locale} />
      {children}
    </>
  );
}
