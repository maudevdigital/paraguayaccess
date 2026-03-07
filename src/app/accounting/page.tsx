"use client";

import { useEffect } from "react";

import { LanguageProvider, useLanguage } from "@/lib/i18n/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

function AccountingContent() {
  const { t } = useLanguage();
  const a = t.accountingPage;

  useEffect(() => {
    document.title = a.hero.title + " | Paraguay Access";
  }, [a.hero.title]);

  const serviceIcons = [
    // RUC - document/ID
    <svg key="ruc" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
    </svg>,
    // Accounting - calculator
    <svg key="acc" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
    </svg>,
    // Consulting - light bulb
    <svg key="cons" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>,
  ];

  const processIcons = [
    // Assessment
    <svg key="assess" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
    </svg>,
    // Incorporation
    <svg key="inc" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>,
    // Bank
    <svg key="bank" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>,
    // Compliance
    <svg key="comp" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>,
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-130 lg:min-h-150 flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:bg-fixed"
            style={{ backgroundImage: "url('/images/palacio-lopez-dos.webp')" }}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28 w-full">
            <nav className="flex items-center gap-2 text-sm text-blue-200 mb-8">
              <a href="/" className="hover:text-white transition-colors">{a.breadcrumb.home}</a>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <span className="text-white font-medium">{a.breadcrumb.accounting}</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                {a.hero.title}
              </h1>
              <p className="mt-6 text-lg text-blue-100 leading-relaxed max-w-2xl">
                {a.hero.subtitle}
              </p>

              <ul className="mt-8 space-y-3">
                {a.hero.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <svg className="w-5 h-5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base">{bullet}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className="mt-10 inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all shadow-lg shadow-blue-900/20 text-base"
              >
                {a.hero.cta}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-red-500" />
                <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">
                  {a.overview.sectionTag}
                </span>
                <div className="h-px w-12 bg-red-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                {a.overview.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                {a.overview.description}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {a.overview.description2}
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 lg:py-28 bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                {a.services.title}
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {a.services.items.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-6">
                    {serviceIcons[index]}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tax Highlights */}
        <section className="py-20 lg:py-28 bg-blue-700 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                {a.taxHighlights.title}
              </h2>
              <p className="mt-4 text-blue-100 leading-relaxed">
                {a.taxHighlights.subtitle}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {a.taxHighlights.items.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl sm:text-6xl font-extrabold text-white mb-2">
                    {item.value}
                  </div>
                  <div className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-2">
                    {item.label}
                  </div>
                  <p className="text-xs text-blue-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 lg:py-28 bg-blue-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                  {a.benefits.title}
                </h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-4">
                {a.benefits.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4">
                    <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden py-20 lg:py-28">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:bg-fixed"
            style={{ backgroundImage: "url('/images/taxes.webp')" }}
          />
          <div className="absolute inset-0 bg-linear-to-br from-black/65 via-slate-900/55 to-black/65" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {a.cta.title}
            </h2>
            <p className="mt-4 text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              {a.cta.subtitle}
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all shadow-lg text-base"
            >
              {a.cta.button}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function AccountingPage() {
  return (
    <LanguageProvider>
      <AccountingContent />
    </LanguageProvider>
  );
}
