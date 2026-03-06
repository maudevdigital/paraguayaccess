import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://paraguayaccess.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Paraguay Access | Residency, Tax Advisory & Relocation Services in Paraguay",
    template: "%s | Paraguay Access",
  },
  description:
    "Expert firm helping individuals and businesses obtain personal and tax residency in Paraguay. Accounting, fiscal planning, company formation, and full compliance services for expats, digital nomads, and investors.",
  keywords: [
    "Paraguay residency",
    "tax residency Paraguay",
    "Paraguay relocation",
    "Paraguay tax advisory",
    "company formation Paraguay",
    "digital nomad Paraguay",
    "expat services Paraguay",
    "residencia en Paraguay",
    "residência no Paraguai",
    "Paraguay territorial tax",
    "Paraguay 0 tax foreign income",
    "Paraguay permanent residency",
    "Paraguay temporary residency",
    "Paraguay cedula",
    "Paraguay accounting services",
    "Paraguay RUC registration",
    "Paraguay business setup",
    "invest in Paraguay",
    "Paraguay low taxes",
    "second residency Paraguay",
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
    title: "Paraguay Access | Your Expert Partner for Residency in Paraguay",
    description:
      "We help individuals and businesses secure personal and tax residency in Paraguay. From permits to accounting and compliance, our team ensures you stay aligned with domestic and international tax laws.",
    url: SITE_URL,
    siteName: "Paraguay Access",
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_PY", "pt_BR", "fr_FR", "it_IT", "ru_RU", "el_GR"],
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Paraguay Access - Residency & Tax Advisory Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paraguay Access | Residency & Tax Advisory in Paraguay",
    description:
      "Expert firm helping individuals and businesses obtain personal and tax residency in Paraguay. 0% tax on foreign income, fast process, no minimum stay.",
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en": SITE_URL,
      "es": SITE_URL,
      "pt": SITE_URL,
      "fr": SITE_URL,
      "it": SITE_URL,
      "ru": SITE_URL,
      "el": SITE_URL,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/favicon.png",
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },
};

function JsonLd() {
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
          url: `${SITE_URL}/images/logo.png`,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+595-992-110-955",
            contactType: "customer service",
            email: "advisory@paraguayaccess.com",
            availableLanguage: ["English", "Spanish", "Portuguese", "French", "Italian", "Russian", "Greek"],
          },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Asunción",
          addressCountry: "PY",
        },
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Paraguay Access",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: ["en", "es", "pt", "fr", "it", "ru", "el"],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: "Paraguay Access",
        url: SITE_URL,
        image: `${SITE_URL}/images/logo.png`,
        description:
          "Specialized firm providing personal and tax residency, accounting, fiscal planning, company formation, and compliance services for individuals and businesses in Paraguay.",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Asunción",
          addressCountry: "PY",
        },
        telephone: "+595-992-110-955",
        email: "advisory@paraguayaccess.com",
        areaServed: {
          "@type": "Country",
          name: "Paraguay",
        },
        serviceType: [
          "Tax Residency Services",
          "Personal Residency Services",
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
                description: "Complete temporary residency processing including cedula, RUC, translations, and transfers.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Permanent Residency in Paraguay",
                description: "Immediate permanent residency through investment including company formation and business plan.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Accounting & Tax Services",
                description: "RUC registration, monthly bookkeeping, tax filing, and fiscal compliance in Paraguay.",
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
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/residency#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Is a $5,000 bank deposit still required for Paraguay residency?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Not anymore. Paraguay updated its residency regulations at the end of 2022, completely removing the mandatory bank deposit.",
            },
          },
          {
            "@type": "Question",
            name: "Can I complete everything during a single trip to Paraguay?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Thanks to regulatory changes effective September 2024, you can submit both your residency application and cédula request in one short visit.",
            },
          },
          {
            "@type": "Question",
            name: "Does Paraguay require proof of savings or income for residency?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Paraguay does not impose any economic solvency requirement for granting residency. This applies to both temporary and permanent residency.",
            },
          },
          {
            "@type": "Question",
            name: "What is the current timeline to receive residency documents in Paraguay?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can expect to receive both your residency card and national ID card (cédula) within approximately 75 to 80 days from submission.",
            },
          },
          {
            "@type": "Question",
            name: "Does Paraguay tax foreign income?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Paraguay operates a territorial tax system, meaning income earned outside of Paraguay is not taxed. This includes foreign capital gains.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
