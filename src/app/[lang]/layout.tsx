import type { Metadata } from "next";
import { locales, type Locale, ogLocaleMap, isValidLocale } from "@/lib/i18n/config";
import { seoData } from "@/lib/i18n/seo";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const SITE_URL = "https://paraguayaccess.com";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : "en";
  const seo = seoData[locale].home;

  const alternateLanguages: Record<string, string> = {};
  for (const l of locales) {
    alternateLanguages[l] = `${SITE_URL}/${l}`;
  }
  alternateLanguages["x-default"] = `${SITE_URL}/en`;

  return {
    title: {
      default: seo.title,
      template: `%s | Paraguay Access`,
    },
    description: seo.description,
    keywords: [
      "Paraguay residency", "tax residency Paraguay", "Paraguay relocation",
      "Paraguay tax advisory", "company formation Paraguay", "digital nomad Paraguay",
      "expat services Paraguay", "Paraguay territorial tax", "Paraguay territorial tax system",
      "residencia en Paraguay", "residencia fiscal Paraguay", "mudarse a Paraguay",
      "residência no Paraguai", "residência fiscal Paraguai", "mudar para o Paraguai",
      "résidence au Paraguay", "résidence fiscale Paraguay",
      "residenza in Paraguay", "residenza fiscale Paraguay",
      "резидентство Парагвай", "налоговое резидентство Парагвай",
      "κατοικία Παραγουάη", "φορολογική κατοικία Παραγουάη",
    ],
    authors: [{ name: "Paraguay Access", url: SITE_URL }],
    creator: "Paraguay Access",
    publisher: "Paraguay Access",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${SITE_URL}/${locale}`,
      siteName: "Paraguay Access",
      type: "website",
      locale: ogLocaleMap[locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => ogLocaleMap[l]),
      images: [
        {
          url: "/images/logo-blue.png",
          width: 512,
          height: 512,
          alt: "Paraguay Access - Residency & Tax Advisory Services in Paraguay",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: seo.title,
      description: seo.description,
      images: ["/images/logo-blue.png"],
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: alternateLanguages,
    },
    other: {
      "geo.region": "PY-ASU",
      "geo.placename": "Asunción, Paraguay",
      "geo.position": "-25.2637;-57.5759",
      ICBM: "-25.2637, -57.5759",
    },
  };
}

function JsonLd({ locale }: { locale: Locale }) {
  const seo = seoData[locale].home;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Paraguay Access",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/logo-blue.png`,
          width: 512,
          height: 512,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+595-992-110-955",
            contactType: "customer service",
            email: "advisory@paraguayaccess.com",
            availableLanguage: ["English", "Spanish", "Portuguese", "French", "Italian", "Russian", "Greek"],
            areaServed: "Worldwide",
          },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Asunción",
          addressRegion: "Central",
          addressCountry: "PY",
        },
        sameAs: [],
        knowsLanguage: ["en", "es", "pt", "fr", "it", "ru", "el"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Paraguay Access",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: locales,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: "Paraguay Access",
        url: SITE_URL,
        image: `${SITE_URL}/images/logo-blue.png`,
        description: seo.description,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Asunción",
          addressRegion: "Central",
          addressCountry: "PY",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -25.2637,
          longitude: -57.5759,
        },
        telephone: "+595-992-110-955",
        email: "advisory@paraguayaccess.com",
        areaServed: [
          { "@type": "Country", name: "Paraguay" },
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Germany" },
          { "@type": "Country", name: "France" },
          { "@type": "Country", name: "Italy" },
          { "@type": "Country", name: "Spain" },
          { "@type": "Country", name: "Brazil" },
          { "@type": "Country", name: "Argentina" },
          { "@type": "Country", name: "Russia" },
          { "@type": "Country", name: "Greece" },
        ],
        serviceType: [
          "Residency & Tax Compliance Services",
          "Residency Permit Services",
          "Accounting & Tax Services",
          "Company Formation",
          "Fiscal Planning",
          "Immigration Advisory",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Paraguay Residency & Tax Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Temporary Residency in Paraguay",
                description: "Complete temporary residency processing including cedula, RUC, translations, and in-person assistance.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Permanent Residency in Paraguay",
                description: "Permanent residency for qualifying applicants, including the SUACE investment route. Includes company formation and document processing.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Accounting & Tax Services",
                description: "RUC registration, monthly bookkeeping, tax filing, and ongoing compliance in Paraguay.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Company Formation",
                description: "Business entity incorporation (S.A. or S.R.L.), banking setup, and ongoing corporate compliance.",
              },
            },
          ],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "750",
          bestRating: "5",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/${locale}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/${locale}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/${locale}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "How long does it take to get residency in Paraguay?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The temporary residency process in Paraguay typically takes 4-8 weeks from start to finish. Permanent residency through investment can be obtained in a similar timeframe.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need to live in Paraguay to maintain residency?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Paraguay has flexible presence requirements for maintaining migration residency. Note that migration residency and fiscal residency have separate rules. Consult a qualified advisor for your specific situation.",
            },
          },
          {
            "@type": "Question",
            name: "What is Paraguay's tax system for residents?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Paraguay uses a territorial tax system, meaning only Paraguayan-source income is subject to tax. The IRE corporate rate is 10%, and the IRP personal income rate ranges from 8% to 10% depending on the bracket. Consult a tax advisor for details specific to your situation.",
            },
          },
          {
            "@type": "Question",
            name: "What documents do I need for Paraguay residency?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You need a valid passport, birth certificate, police clearance from your home country (all apostilled), and proof of income or financial solvency. Paraguay Access handles all translations and local paperwork.",
            },
          },
          {
            "@type": "Question",
            name: "Can I open a company in Paraguay as a foreigner?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Foreigners can fully own and operate businesses in Paraguay. Common structures include S.A. (corporation) and S.R.L. (limited liability). Paraguay Access manages the entire incorporation process.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : "en";

  return (
    <LanguageProvider initialLocale={locale}>
      <JsonLd locale={locale} />
      {children}
    </LanguageProvider>
  );
}
