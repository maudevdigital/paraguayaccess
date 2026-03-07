"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useLanguage, locales, languageNames, type Locale } from "@/lib/i18n/LanguageContext";
import FlagIcon from "@/components/FlagIcon";

export default function Header() {
  const { t, locale, setLocale } = useLanguage();
  const pathname = usePathname();

  // Helper: locale-prefixed path
  const lp = (path: string) => (path === "/" ? `/${locale}` : `/${locale}${path}`);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Desktop-only click-outside handler
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, []);

  const handleMobileNav = useCallback((href: string) => {
    closeMobileMenu();
    setTimeout(() => {
      window.location.href = href;
    }, 50);
  }, [closeMobileMenu]);

  const currentLocale = locales.find((l) => l.code === locale)!;

  const isServicePage = ["/residency", "/accounting", "/company-formation"].some(
    (p) => pathname === lp(p) || pathname.startsWith(lp(p) + "/")
  );

  const isActive = (href: string) => {
    const full = lp(href);
    if (href === "/") return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname === full || pathname.startsWith(full + "/");
  };

  const navLinks = [
    { href: lp("/about"), label: t.nav.aboutUs },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-visible ${
          isScrolled
            ? "bg-white shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-visible">
          <div className="flex h-20 sm:h-24 lg:h-28 items-center justify-between overflow-visible">
            {/* Logo */}
            <a href={lp("/")} className="flex items-center shrink-0 -ml-4 overflow-visible">
              <Image
                src="/images/logo-blue.png"
                alt="Paraguay Access"
                width={500}
                height={200}
                priority
                className="h-40 sm:h-44 lg:h-48 w-auto -my-16 sm:-my-18 lg:-my-20"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Services Dropdown */}
              <div
                ref={servicesRef}
                className="relative"
                onMouseEnter={() => {
                  if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                  setIsServicesOpen(true);
                }}
                onMouseLeave={() => {
                  hoverTimeoutRef.current = setTimeout(() => setIsServicesOpen(false), 150);
                }}
              >
                <button
                  className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-colors rounded-lg ${
                    isServicePage
                      ? "text-blue-700 bg-blue-50"
                      : "text-slate-700 hover:text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  {t.nav.services}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-80 rounded-2xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden p-2">
                    <a
                      href={lp("/residency")}
                      onClick={() => setIsServicesOpen(false)}
                      className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-700 shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{t.nav.residency}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{t.nav.residencyDesc}</div>
                      </div>
                    </a>
                    <a
                      href={lp("/accounting")}
                      onClick={() => setIsServicesOpen(false)}
                      className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-700 shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{t.nav.accountingTax}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{t.nav.accountingTaxDesc}</div>
                      </div>
                    </a>
                    <a
                      href={lp("/company-formation")}
                      onClick={() => setIsServicesOpen(false)}
                      className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-700 shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{t.nav.companyFormation}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{t.nav.companyFormationDesc}</div>
                      </div>
                    </a>
                  </div>
                )}
              </div>

              {/* Contact Us */}
              <a
                href={lp("/contact")}
                className={`px-4 py-2 text-sm font-semibold transition-colors rounded-lg ${
                  isActive("/contact")
                    ? "text-blue-700 bg-blue-50"
                    : "text-slate-700 hover:text-blue-700 hover:bg-blue-50"
                }`}
              >
                {t.nav.contactUs}
              </a>

              {/* Other Links */}
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-semibold transition-colors rounded-lg ${
                    isActive(link.href)
                      ? "text-blue-700 bg-blue-50"
                      : "text-slate-700 hover:text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              {/* Language Selector */}
              <div ref={langRef} className="relative ml-2">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors rounded-lg hover:bg-blue-50"
                >
                  <FlagIcon code={currentLocale.code} className="w-5 h-3.5" />
                  <span className="text-xs font-bold uppercase tracking-wide">{currentLocale.code.toUpperCase()}</span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isLangOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isLangOpen && (
                  <div className="absolute top-full right-0 mt-2 w-64 rounded-xl bg-white shadow-2xl border border-slate-200 overflow-hidden">
                    <div className="py-1.5">
                      {locales.map((loc) => (
                        <button
                          key={loc.code}
                          onClick={() => {
                            setLocale(loc.code as Locale);
                            setIsLangOpen(false);
                          }}
                          className={`flex items-center gap-2.5 w-full px-3.5 py-2 text-[13px] transition-colors ${
                            locale === loc.code
                              ? "bg-blue-50 text-blue-700 font-semibold"
                              : "text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <FlagIcon code={loc.code} className="w-5 h-3.5 shrink-0" />
                          <span>
                            {loc.name}
                            {loc.code !== locale && (
                              <span className="text-slate-400 font-normal"> ({languageNames[locale][loc.code]})</span>
                            )}
                          </span>
                          {locale === loc.code && (
                            <svg className="w-3.5 h-3.5 ml-auto text-blue-700 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <a
                href={lp("/contact")}
                className="ml-4 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-800 transition-all hover:shadow-lg"
              >
                {t.nav.getStarted}
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu — slides down from below the header */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      />

      {/* Panel — full width, anchored below header, slides down */}
      <div
        className={`fixed top-20 sm:top-24 left-0 right-0 z-40 bg-white shadow-2xl lg:hidden transition-transform duration-300 ease-in-out max-h-[calc(100dvh-5rem)] sm:max-h-[calc(100dvh-6rem)] overflow-y-auto ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-[calc(100%+6rem)]"
        }`}
      >
        <div className="px-4 py-5 flex flex-col">
          {/* Services */}
          <p className="px-4 pt-1 pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">{t.nav.services}</p>
          <div className="space-y-0.5 mb-3">
            <button onClick={() => handleMobileNav(lp("/residency"))} className={`flex items-center gap-3 px-4 py-2.5 rounded-lg w-full text-left transition-colors ${isActive("/residency") ? "text-blue-700 bg-blue-50 font-semibold" : "text-slate-700 hover:text-blue-700 hover:bg-blue-50"}`}>
              <svg className="w-5 h-5 shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
              </svg>
              <span className="text-sm font-medium">{t.nav.residency}</span>
            </button>
            <button onClick={() => handleMobileNav(lp("/accounting"))} className={`flex items-center gap-3 px-4 py-2.5 rounded-lg w-full text-left transition-colors ${isActive("/accounting") ? "text-blue-700 bg-blue-50 font-semibold" : "text-slate-700 hover:text-blue-700 hover:bg-blue-50"}`}>
              <svg className="w-5 h-5 shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
              <span className="text-sm font-medium">{t.nav.accountingTax}</span>
            </button>
            <button onClick={() => handleMobileNav(lp("/company-formation"))} className={`flex items-center gap-3 px-4 py-2.5 rounded-lg w-full text-left transition-colors ${isActive("/company-formation") ? "text-blue-700 bg-blue-50 font-semibold" : "text-slate-700 hover:text-blue-700 hover:bg-blue-50"}`}>
              <svg className="w-5 h-5 shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
              <span className="text-sm font-medium">{t.nav.companyFormation}</span>
            </button>
          </div>

          {/* Other links */}
          <div className="border-t border-slate-100 pt-3 space-y-0.5">
            <button onClick={() => handleMobileNav(lp("/contact"))} className={`block w-full text-left px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${isActive("/contact") ? "text-blue-700 bg-blue-50" : "text-slate-700 hover:text-blue-700 hover:bg-blue-50"}`}>
              {t.nav.contactUs}
            </button>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleMobileNav(link.href)}
                className={`block w-full text-left px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${isActive(link.href) ? "text-blue-700 bg-blue-50" : "text-slate-700 hover:text-blue-700 hover:bg-blue-50"}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Language selector */}
          <div className="pt-3 border-t border-slate-100 mt-3">
            <p className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Language</p>
            <div className="flex flex-col gap-1 px-4">
              {locales.map((loc) => (
                <button
                  key={loc.code}
                  onClick={() => setLocale(loc.code as Locale)}
                  className={`flex items-center gap-2.5 px-3 py-2.5 text-xs rounded-lg transition-colors ${
                    locale === loc.code
                      ? "bg-blue-100 text-blue-700 font-semibold ring-1 ring-blue-200"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <FlagIcon code={loc.code} className="w-5 h-3.5 shrink-0" />
                  <span className="text-[13px] font-medium">
                    {loc.name}
                    {loc.code !== locale && (
                      <span className="text-slate-400 font-normal"> ({languageNames[locale][loc.code]})</span>
                    )}
                  </span>
                  {locale === loc.code && (
                    <svg className="w-3.5 h-3.5 ml-auto text-blue-700 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => handleMobileNav("/contact")}
              className="block w-full text-center rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
            >
              {t.nav.getStarted}
            </button>
          </div>

          {/* Contact Info */}
          <div className="pt-4 border-t border-slate-100 mt-3">
            <a
              href="https://wa.me/595992110955"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:text-blue-700 transition-colors"
            >
              <svg className="w-5 h-5 text-green-600 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>+595 992 110 955</span>
            </a>
            <a
              href="mailto:advisory@paraguayaccess.com"
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:text-blue-700 transition-colors"
            >
              <svg className="w-5 h-5 text-blue-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span>advisory@paraguayaccess.com</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
