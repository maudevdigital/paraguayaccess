"use client";

import { useEffect } from "react";
import { LanguageProvider, useLanguage } from "@/lib/i18n/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

function GuideContent() {
  const { t } = useLanguage();
  const g = t.residencyPage.guidePage;
  const s = g.sections;

  useEffect(() => {
    document.title = g.pageTitle;
  }, [g.pageTitle]);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-blue-700 pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-blue-200 mb-6">
              <a href="/" className="hover:text-white transition-colors">{t.residencyPage.breadcrumb.home}</a>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <a href="/residency" className="hover:text-white transition-colors">{t.residencyPage.breadcrumb.residency}</a>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <span className="text-white font-medium">Guide</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              {g.title}
            </h1>
            <p className="mt-4 text-blue-200 text-sm">{g.date}</p>
          </div>
        </section>

        {/* Content */}
        <article className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose-slate">
            {/* Intro */}
            <p className="text-slate-600 leading-relaxed mb-6">{g.intro1}</p>
            <p className="text-slate-600 leading-relaxed mb-12">{g.intro2}</p>

            {/* Temporary and Permanent */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{s.tempAndPerm.title}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{s.tempAndPerm.intro}</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3 text-slate-600">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                {s.tempAndPerm.tempOption}
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                {s.tempAndPerm.permOption}
              </li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-12">{s.tempAndPerm.outro}</p>

            {/* Temporary Residency */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{s.temporary.title}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{s.temporary.intro}</p>
            <p className="text-slate-600 leading-relaxed mb-4">{s.temporary.processIntro}</p>
            <ol className="space-y-4 mb-6">
              <li className="flex items-start gap-3 text-slate-600">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-700 text-white text-xs font-bold shrink-0 mt-0.5">1</span>
                <span className="leading-relaxed">{s.temporary.step1}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-700 text-white text-xs font-bold shrink-0 mt-0.5">2</span>
                <span className="leading-relaxed">{s.temporary.step2}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-700 text-white text-xs font-bold shrink-0 mt-0.5">3</span>
                <span className="leading-relaxed">{s.temporary.step3}</span>
              </li>
            </ol>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-4">
              <p className="text-slate-700 text-sm leading-relaxed">{s.temporary.note1}</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-6">
              <p className="text-slate-700 text-sm leading-relaxed">{s.temporary.note2}</p>
            </div>
            <p className="text-slate-600 leading-relaxed mb-12">{s.temporary.benefits}</p>

            {/* Permanent Residency */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{s.permanent.title}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{s.permanent.intro}</p>
            <p className="text-slate-600 leading-relaxed mb-4">{s.permanent.routesIntro}</p>
            <ol className="space-y-4 mb-6">
              <li className="flex items-start gap-3 text-slate-600">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold shrink-0 mt-0.5">1</span>
                <span className="leading-relaxed">{s.permanent.route1}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold shrink-0 mt-0.5">2</span>
                <span className="leading-relaxed">{s.permanent.route2}</span>
              </li>
            </ol>
            <p className="text-slate-600 leading-relaxed mb-4">{s.permanent.investBenefitsIntro}</p>
            <ul className="space-y-2 mb-12">
              {s.permanent.investBenefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Stay Requirements */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{s.stayRequirements.title}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{s.stayRequirements.intro}</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3 text-slate-600">
                <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 shrink-0" />
                {s.stayRequirements.req1}
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 shrink-0" />
                {s.stayRequirements.req2}
              </li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-4">
              <p className="text-slate-700 text-sm leading-relaxed">{s.stayRequirements.note}</p>
            </div>
            <p className="text-slate-600 leading-relaxed mb-12">{s.stayRequirements.note2}</p>

            {/* Benefits */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{s.benefits.title}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{s.benefits.intro}</p>
            <ul className="space-y-3 mb-6">
              {s.benefits.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-slate-50 border-l-4 border-slate-400 p-4 rounded-r-lg mb-12">
              <p className="text-slate-700 text-sm leading-relaxed">{s.benefits.nomadNote}</p>
            </div>

            {/* CTA */}
            <div className="text-center py-8 border-t border-slate-200">
              <a
                href="mailto:advisory@paraguayaccess.com"
                className="inline-flex items-center gap-2 bg-blue-700 text-white font-bold px-10 py-4 rounded-xl hover:bg-blue-800 transition-all shadow-lg text-base"
              >
                {g.cta}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function GuidePage() {
  return (
    <LanguageProvider>
      <GuideContent />
    </LanguageProvider>
  );
}
