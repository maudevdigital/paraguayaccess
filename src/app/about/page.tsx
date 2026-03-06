"use client";

import { useEffect } from "react";
import { LanguageProvider, useLanguage } from "@/lib/i18n/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

function AboutContent() {
  const { t } = useLanguage();
  const a = t.aboutPage;

  useEffect(() => {
    document.title = a.pageTitle;
  }, [a.pageTitle]);

  const stats = [a.stats.clients, a.stats.countries, a.stats.years, a.stats.satisfaction];

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
              <a href="/" className="hover:text-white transition-colors">
                {a.breadcrumb.home}
              </a>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <span className="text-white font-medium">{a.breadcrumb.about}</span>
            </nav>

            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                {a.hero.title}
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed">
                {a.hero.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="relative -mt-8 z-10">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 sm:p-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-blue-700">{stat.value}</p>
                  <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <span className="inline-block text-sm font-semibold text-blue-700 tracking-wide uppercase mb-3">
                {a.story.sectionTag}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                {a.story.title}
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>{a.story.p1}</p>
                <p>{a.story.p2}</p>
                <p>{a.story.p3}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-blue-700 tracking-wide uppercase mb-3">
                {a.values.sectionTag}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                {a.values.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
              {a.values.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                    <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      {i === 0 && <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />}
                      {i === 0 && <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />}
                      {i === 1 && <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                      {i === 2 && <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />}
                      {i === 3 && <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block text-sm font-semibold text-blue-700 tracking-wide uppercase mb-3">
                  {a.trust.sectionTag}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                  {a.trust.title}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {a.trust.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-slate-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-24 bg-linear-to-br from-blue-800 via-blue-700 to-blue-900 text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {a.cta.title}
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-10 max-w-2xl mx-auto">
              {a.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                {a.cta.button}
              </a>
              <a
                href="/#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                {a.cta.buttonSecondary}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function AboutPage() {
  return (
    <LanguageProvider>
      <AboutContent />
    </LanguageProvider>
  );
}
