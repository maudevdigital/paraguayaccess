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
  const seo = seoData[locale].privacy;

  const alternateLanguages: Record<string, string> = {};
  for (const l of locales) {
    alternateLanguages[l] = `${SITE_URL}/${l}/privacy`;
  }
  alternateLanguages["x-default"] = `${SITE_URL}/en/privacy`;

  return {
    title: { absolute: seo.title },
    description: seo.description,
    keywords: [
      "Paraguay Access privacy policy", "data protection Paraguay",
      "política de privacidad Paraguay Access", "protección de datos",
      "política de privacidade Paraguay Access",
      "politique de confidentialité Paraguay Access",
      "informativa privacy Paraguay Access",
      "политика конфиденциальности Paraguay Access",
      "πολιτική απορρήτου Paraguay Access",
    ],
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${SITE_URL}/${locale}/privacy`,
      siteName: "Paraguay Access",
      locale: ogLocaleMap[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocaleMap[l]),
      images: [{ url: "/images/logo-blue.png", width: 512, height: 512, alt: "Paraguay Access" }],
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/privacy`,
      languages: alternateLanguages,
    },
  };
}

function PrivacyJsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${SITE_URL}/${locale}/privacy` },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function PrivacyLayout({
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
      <PrivacyJsonLd locale={locale} />
      {children}
    </>
  );
}
