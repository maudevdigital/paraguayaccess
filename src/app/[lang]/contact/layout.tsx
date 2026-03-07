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
  const seo = seoData[locale].contact;

  const alternateLanguages: Record<string, string> = {};
  for (const l of locales) {
    alternateLanguages[l] = `${SITE_URL}/${l}/contact`;
  }
  alternateLanguages["x-default"] = `${SITE_URL}/en/contact`;

  return {
    title: { absolute: seo.title },
    description: seo.description,
    keywords: [
      "contact Paraguay Access", "Paraguay residency consultation", "Paraguay tax consultation",
      "free consultation Paraguay residency", "WhatsApp Paraguay Access",
      "contacto Paraguay Access", "consulta residencia Paraguay",
      "contato Paraguay Access", "consulta residência Paraguai",
      "contact Paraguay Access", "consultation résidence Paraguay",
      "contatto Paraguay Access", "consulenza residenza Paraguay",
      "контакт Paraguay Access", "επικοινωνία Paraguay Access",
    ],
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${SITE_URL}/${locale}/contact`,
      locale: ogLocaleMap[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocaleMap[l]),
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/contact`,
      languages: alternateLanguages,
    },
  };
}

function ContactJsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/${locale}/contact` },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function ContactLayout({
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
      <ContactJsonLd locale={locale} />
      {children}
    </>
  );
}
