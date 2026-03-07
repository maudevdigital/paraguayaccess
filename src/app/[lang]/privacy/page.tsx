"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

function PrivacyContent() {
  const { t, locale } = useLanguage();
  const p = t.privacyPage;

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-linear-to-br from-blue-800 via-blue-700 to-blue-900">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400 rounded-full translate-y-1/2 -translate-x-1/3" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-24">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-blue-200 mb-8">
              <a href={`/${locale}`} className="hover:text-white transition-colors">
                {p.breadcrumb.home}
              </a>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <span className="text-white font-medium">{p.breadcrumb.privacy}</span>
            </nav>

            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                {p.hero.title}
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed">
                {p.hero.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 lg:py-28 bg-linear-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-slate-500 mb-12">{p.lastUpdated}</p>

            <div className="space-y-8">
              {p.sections.map((section, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-700 text-white text-sm font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 mb-3">
                        {section.title}
                      </h2>
                      <p className="text-slate-600 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function PrivacyPage() {
  return <PrivacyContent />;
}
