"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

type Currency = "USD" | "EUR" | "GBP" | "CAD" | "AUD" | "BRL" | "ARS";

const CURRENCIES: Currency[] = ["USD", "EUR", "GBP", "CAD", "AUD", "BRL", "ARS"];

// PYG per 1 unit of foreign currency. Used for server rendering and as the
// fallback whenever the live rate lookup below is unavailable.
// Last reviewed: 2026-08-10 — prices are always billed in PYG.
const FALLBACK_RATES: Record<Currency, number> = {
  USD: 5950,
  EUR: 6875,
  GBP: 8025,
  CAD: 4265,
  AUD: 4200,
  BRL: 1170,
  ARS: 3.97,
};

// Free, key-less endpoint refreshed daily. Returns units of each currency per 1 USD.
const RATES_ENDPOINT = "https://open.er-api.com/v6/latest/USD";

// Guardrail: ignore obviously broken responses rather than showing a wrong price.
const MIN_PYG_PER_USD = 3000;
const MAX_PYG_PER_USD = 20000;

function ResidencyContent() {
  const { t, locale } = useLanguage();
  const r = t.residencyPage;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [tempCurrency, setTempCurrency] = useState<Currency>("EUR");
  const [permCurrency, setPermCurrency] = useState<Currency>("EUR");

  const [exchangeRates, setExchangeRates] = useState<Record<Currency, number>>(FALLBACK_RATES);

  // Refresh the conversion rates on load so the "≈" prices never go stale.
  // Any failure leaves FALLBACK_RATES in place.
  useEffect(() => {
    const controller = new AbortController();

    fetch(RATES_ENDPOINT, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        const rates = data?.rates;
        const pygPerUsd = rates?.PYG;

        if (
          typeof pygPerUsd !== "number" ||
          pygPerUsd < MIN_PYG_PER_USD ||
          pygPerUsd > MAX_PYG_PER_USD
        ) {
          return;
        }

        const next = {} as Record<Currency, number>;
        for (const currency of CURRENCIES) {
          // The feed is USD-based, so USD itself has no entry.
          const perUsd = currency === "USD" ? 1 : rates[currency];
          if (typeof perUsd !== "number" || perUsd <= 0) return;
          next[currency] = pygPerUsd / perUsd;
        }

        setExchangeRates(next);
      })
      .catch(() => {
        /* offline, blocked or malformed - keep the fallback rates */
      });

    return () => controller.abort();
  }, []);

  const currencySymbols: Record<Currency, string> = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    CAD: "C$",
    AUD: "A$",
    BRL: "R$",
    ARS: "ARS$",
  };

  const currencies = CURRENCIES;

  const TEMP_PYG = 17_000_000;
  const PERM_PYG = 29_750_000;

  function convertPrice(pyg: number, currency: Currency): string {
    const converted = pyg / exchangeRates[currency];
    return converted.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }

  const processIcons = [
    // Preparation - clipboard
    <svg key="prep" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
    </svg>,
    // Visit - airplane
    <svg key="visit" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>,
    // Residency - building
    <svg key="res" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>,
    // Cédula - ID card
    <svg key="cedula" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
    </svg>,
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-130 lg:min-h-150 flex items-center">
          {/* Background Image with parallax */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:bg-fixed"
            style={{ backgroundImage: "url('/images/paraguay-residencia.webp')" }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28 w-full">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-blue-200 mb-8">
              <a href={`/${locale}`} className="hover:text-white transition-colors">{r.breadcrumb.home}</a>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <span className="text-white font-medium">{r.breadcrumb.residency}</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                {r.hero.title}
              </h1>
              <p className="mt-6 text-lg text-blue-100 leading-relaxed max-w-2xl">
                {r.hero.subtitle}
              </p>

              {/* Bullet points */}
              <ul className="mt-8 space-y-3">
                {r.hero.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <svg className="w-5 h-5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`/${locale}/contact`}
                className="mt-10 inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all shadow-lg shadow-blue-900/20 text-base"
              >
                {r.hero.cta}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                {r.process.title}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {r.process.steps.map((step, index) => (
                <div key={index} className="relative text-center group">
                  {/* Connector line */}
                  {index < r.process.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-blue-100" />
                  )}

                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-50 text-blue-700 mb-5 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300 shadow-sm">
                    {processIcons[index]}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="relative py-20 lg:py-28 bg-blue-50">
          {/* Blue banner */}
          <div className="bg-blue-700 py-12 text-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {r.pricing.title}
              </h2>
              <p className="mt-3 text-lg text-blue-100">
                {r.pricing.subtitle}
              </p>
            </div>
            {/* Triangle decoration */}
            <div className="relative mt-8">
              <div className="absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-20 border-l-transparent border-r-20 border-r-transparent border-t-16 border-t-blue-700" />
            </div>
          </div>

          {/* Currency info */}
          <div className="bg-slate-50 pt-12 pb-4">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="space-y-4 text-sm text-slate-600">
                <p>
                  <span className="font-semibold text-slate-800">{r.pricing.currencyNote}</span>
                </p>
                <p>
                  {r.pricing.exchangeNote}
                </p>
                <p>
                  {r.pricing.finalNote}
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="bg-slate-50 pb-20">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-10">
              <div className="grid md:grid-cols-2 gap-8">

                {/* Temporary Residency - POPULAR */}
                <div className="relative rounded-2xl bg-white border-2 border-yellow-400 shadow-xl overflow-hidden">
                  {/* Popular badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-sm">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {r.pricing.popular}
                    </span>
                  </div>

                  {/* Header */}
                  <div className="bg-yellow-400 px-6 py-5">
                    <h3 className="text-xl font-bold text-yellow-900">
                      {r.pricing.temporary.name}
                    </h3>
                    <p className="text-sm text-yellow-800 mt-1">
                      {r.pricing.temporary.tag}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="px-6 py-8 text-center border-b border-slate-100">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm font-semibold text-slate-500">PYG</span>
                      <span className="text-5xl font-extrabold text-slate-900 tracking-tight">17</span>
                      <span className="text-2xl font-bold text-slate-400">,000,000</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-2">
                      ≈ {currencySymbols[tempCurrency]}{convertPrice(TEMP_PYG, tempCurrency)} {tempCurrency}
                    </p>
                    <div className="mt-3 inline-flex items-center">
                      <select
                        value={tempCurrency}
                        onChange={(e) => setTempCurrency(e.target.value as Currency)}
                        className="text-xs border border-slate-200 rounded-md px-2 py-1.5 text-slate-600 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        {currencies.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="px-6 py-6">
                    <ul className="space-y-3">
                      {r.pricing.temporary.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Permanent Residency */}
                <div className="relative rounded-2xl bg-white border-2 border-red-500 shadow-xl overflow-hidden">
                  {/* Header */}
                  <div className="bg-red-500 px-6 py-5">
                    <h3 className="text-xl font-bold text-white">
                      {r.pricing.permanent.name}
                    </h3>
                    <p className="text-sm text-red-100 mt-1">
                      {r.pricing.permanent.tag}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="px-6 py-8 text-center border-b border-slate-100">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm font-semibold text-slate-500">PYG</span>
                      <span className="text-5xl font-extrabold text-slate-900 tracking-tight">29</span>
                      <span className="text-2xl font-bold text-slate-400">,750,000</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-2">
                      ≈ {currencySymbols[permCurrency]}{convertPrice(PERM_PYG, permCurrency)} {permCurrency}
                    </p>
                    <div className="mt-3 inline-flex items-center">
                      <select
                        value={permCurrency}
                        onChange={(e) => setPermCurrency(e.target.value as Currency)}
                        className="text-xs border border-slate-200 rounded-md px-2 py-1.5 text-slate-600 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        {currencies.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="px-6 py-6">
                    <ul className="space-y-3">
                      {r.pricing.permanent.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guide CTA Section */}
        <section className="bg-slate-800 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {r.guideCta.title}
              </h2>
              <div className="mt-4 h-0.5 w-20 bg-red-500 mx-auto" />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="text-slate-300 max-w-lg text-sm leading-relaxed text-center sm:text-left">
                {r.guideCta.description}
              </p>
              <a
                href={`/${locale}/residency/guide`}
                className="inline-flex items-center gap-2 bg-red-500 text-white font-bold px-8 py-3.5 rounded-full hover:bg-red-600 transition-all text-sm whitespace-nowrap"
              >
                {r.guideCta.button}
              </a>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/residencia-paraguay.webp"
                    alt="Paraguayan Residency Card"
                    width={560}
                    height={420}
                    className="rounded-2xl object-cover"
                  />
                </div>
                {/* Decoration */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-2xl -z-10" />
              </div>

              {/* Right: Text */}
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="h-px w-12 bg-red-500" />
                  <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">
                    {r.breadcrumb.residency}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                  {r.info.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {r.info.description}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {r.info.description2}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-20 lg:py-28 bg-blue-700 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="h-px w-12 bg-green-400" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                  {r.support.title}
                </h2>

                <div className="relative rounded-2xl overflow-hidden max-w-md">
                  <Image
                    src="/images/equipo-trabajo.webp"
                    alt="Paraguay Access team assisting clients"
                    width={500}
                    height={333}
                    className="rounded-2xl object-cover"
                  />
                </div>
              </div>

              {/* Right */}
              <div>
                <p className="text-blue-100 leading-relaxed mb-8">
                  {r.support.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {r.support.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center shrink-0">
                        <svg className="w-3.5 h-3.5 text-green-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="font-semibold">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Note box */}
                <div className="bg-yellow-400 text-yellow-900 rounded-xl p-4 mb-8">
                  <p className="text-sm font-medium leading-relaxed">
                    {r.support.note}
                  </p>
                </div>

                <a
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all shadow-lg text-base"
                >
                  {r.support.cta}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-28 bg-blue-50">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-red-500" />
                <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">
                  {r.faq.sectionTag}
                </span>
                <div className="h-px w-12 bg-red-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                {r.faq.title}
              </h2>
            </div>

            <div className="space-y-3">
              {r.faq.items.map((item, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex items-center justify-between w-full px-6 py-4 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-blue-700 text-sm pr-4">
                      {item.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-blue-700 shrink-0 transition-transform duration-200 ${
                        openFaq === index ? "rotate-45" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-sm text-red-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
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

export default function ResidencyPage() {
  return <ResidencyContent />;
}
