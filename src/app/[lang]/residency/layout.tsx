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
  const seo = seoData[locale].residency;

  const alternateLanguages: Record<string, string> = {};
  for (const l of locales) {
    alternateLanguages[l] = `${SITE_URL}/${l}/residency`;
  }
  alternateLanguages["x-default"] = `${SITE_URL}/en/residency`;

  return {
    title: { absolute: seo.title },
    description: seo.description,
    keywords: [
      "Paraguay residency", "temporary residency Paraguay", "permanent residency Paraguay",
      "Paraguay cedula", "how to get residency in Paraguay", "Paraguay residency 2026",
      "Paraguay residency cost", "Paraguay residency requirements", "Paraguay residency process",
      "residencia en Paraguay", "residencia temporal Paraguay", "residencia permanente Paraguay",
      "cédula paraguaya", "cómo obtener residencia Paraguay", "requisitos residencia Paraguay",
      "residência no Paraguai", "residência temporária Paraguai", "residência permanente Paraguai",
      "résidence au Paraguay", "résidence temporaire Paraguay", "résidence permanente Paraguay",
      "residenza in Paraguay", "residenza temporanea Paraguay", "residenza permanente Paraguay",
      "резидентство Парагвай", "временное резидентство Парагвай", "постоянное резидентство Парагвай",
      "κατοικία Παραγουάη", "προσωρινή κατοικία Παραγουάη", "μόνιμη κατοικία Παραγουάη",
    ],
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${SITE_URL}/${locale}/residency`,
      locale: ogLocaleMap[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocaleMap[l]),
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/residency`,
      languages: alternateLanguages,
    },
  };
}

function ResidencyJsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: "Residency", item: `${SITE_URL}/${locale}/residency` },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function ResidencyLayout({
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
      <ResidencyJsonLd locale={locale} />
      {children}
    </>
  );
}
