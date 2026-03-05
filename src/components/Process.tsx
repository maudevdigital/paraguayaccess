"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Process() {
  const { t } = useLanguage();

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background image with zoom on city */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:bg-fixed"
        style={{ backgroundImage: "url('/images/asuncion-skyline.jpg')" }}
      />
      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-linear-to-br from-black/70 via-slate-900/60 to-black/70" />

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-700/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-indigo-700/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-blue-200 mb-6 border border-white/10">
            {t.process.sectionTag}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            {t.process.title}{" "}
            <span className="text-blue-300">{t.process.titleHighlight}</span>
          </h2>
          <p className="mt-6 text-lg text-blue-200/80 leading-relaxed">
            {t.process.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.process.steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < t.process.steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[calc(100%-20%)] h-0.5 bg-linear-to-r from-blue-400/30 to-blue-400/10" />
              )}

              <div className="relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 group-hover:-translate-y-1">
                {/* Step Number */}
                <div className="text-5xl font-bold text-blue-400/30 mb-4 font-mono">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-blue-200/70 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
