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
  const seo = seoData[locale].companyFormation;

  const alternateLanguages: Record<string, string> = {};
  for (const l of locales) {
    alternateLanguages[l] = `${SITE_URL}/${l}/company-formation`;
  }
  alternateLanguages["x-default"] = `${SITE_URL}/en/company-formation`;

  return {
    title: { absolute: seo.title },
    description: seo.description,
    keywords: [
      "company formation Paraguay", "start business Paraguay", "incorporate company Paraguay",
      "Paraguay S.A.", "Paraguay S.R.L.", "Paraguay corporate tax 10%", "open business Paraguay",
      "Paraguay bank account business", "Paraguay business setup", "Paraguay company registration",
      "constituir empresa Paraguay", "crear empresa Paraguay", "abrir empresa Paraguay",
      "registrar empresa Paraguay", "impuesto corporativo Paraguay",
      "abrir empresa Paraguai", "constituir empresa Paraguai",
      "créer entreprise Paraguay", "société Paraguay",
      "aprire azienda Paraguay", "società Paraguay",
      "открыть компанию Парагвай", "регистрация компании Парагвай",
      "ίδρυση εταιρείας Παραγουάη",
    ],
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${SITE_URL}/${locale}/company-formation`,
      siteName: "Paraguay Access",
      locale: ogLocaleMap[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocaleMap[l]),
      images: [{ url: "/images/logo-blue.png", width: 512, height: 512, alt: "Paraguay Access" }],
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/company-formation`,
      languages: alternateLanguages,
    },
  };
}

function CompanyJsonLd({ locale }: { locale: Locale }) {
  const seo = seoData[locale].companyFormation;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/${locale}` },
          { "@type": "ListItem", position: 2, name: "Company Formation", item: `${SITE_URL}/${locale}/company-formation` },
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
        serviceType: "Company Formation & Business Registration",
        url: `${SITE_URL}/${locale}/company-formation`,
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

export default async function CompanyFormationLayout({
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
      <CompanyJsonLd locale={locale} />
      {children}
    </>
  );
}
