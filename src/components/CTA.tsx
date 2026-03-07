"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function CTA() {
  const { t, locale } = useLanguage();

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:bg-fixed"
        style={{ backgroundImage: "url('/images/palacio-lopez.webp')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-black/65 via-slate-900/55 to-black/65" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 p-12 lg:p-20 shadow-2xl">
          <div className="relative">
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              {t.cta.title}{" "}
              <span className="text-blue-300">{t.cta.titleHighlight}</span>
            </h2>
            <p className="mt-6 text-lg text-blue-200/90 leading-relaxed max-w-2xl mx-auto">
              {t.cta.subtitle}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-blue-800 shadow-lg hover:bg-blue-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                {t.cta.button}
              </a>
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all duration-300"
              >
                {t.cta.buttonSecondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
