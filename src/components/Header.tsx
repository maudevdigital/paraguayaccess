"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useLanguage, locales, type Locale } from "@/lib/i18n/LanguageContext";
import FlagIcon from "@/components/FlagIcon";

export default function Header() {
  const { t, locale, setLocale } = useLanguage();
  const pathname = usePathname();
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
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  const navLinks = [
    { href: "/about", label: t.nav.aboutUs },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center mt-3">
              <Image
                src="/images/logo-blue.png"
                alt="Paraguay Access"
                width={500}
                height={200}
                className="h-45 w-auto"
                priority
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
                      href="/residency"
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
                      href="/accounting"
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
                      href="/company-formation"
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
                href="/contact"
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
                  <div className="absolute top-full right-0 mt-2 w-44 rounded-xl bg-white shadow-2xl border border-slate-200 overflow-hidden">
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
                          <FlagIcon code={loc.code} className="w-5 h-3.5" />
                          <span>{loc.name}</span>
                          {locale === loc.code && (
                            <svg className="w-3.5 h-3.5 ml-auto text-blue-700" fill="currentColor" viewBox="0 0 20 20">
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
                href="/contact"
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

      {/* Mobile Menu — rendered outside header to avoid stacking context issues */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-60 bg-black/40 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 z-70 h-full w-80 max-w-[85vw] bg-white shadow-2xl lg:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 h-20 border-b border-slate-100">
          <button onClick={() => handleMobileNav("/")} className="flex items-center">
            <Image
              src="/images/logo-blue.png"
              alt="Paraguay Access"
              width={240}
              height={56}
              className="h-14 w-auto"
            />
          </button>
          <button
            onClick={closeMobileMenu}
            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-4 py-5 space-y-1 overflow-y-auto h-[calc(100%-5rem)]">
          {/* Services Accordion — separate state from desktop */}
          <button
            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            className={`flex items-center justify-between w-full px-4 py-3 text-sm font-semibold rounded-lg transition-colors ${
              isServicePage
                ? "text-blue-700 bg-blue-50"
                : "text-slate-700 hover:text-blue-700 hover:bg-blue-50"
            }`}
          >
            {t.nav.services}
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isMobileServicesOpen && (
            <div className="ml-4 space-y-1 rounded-xl bg-blue-700 p-3">
              <button onClick={() => handleMobileNav("/residency")} className={`flex items-center gap-3 px-3 py-2.5 text-white rounded-lg w-full text-left ${isActive("/residency") ? "bg-blue-600" : "hover:bg-blue-600"}`}>
                <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
                <span className="font-medium">{t.nav.residency}</span>
              </button>
              <button onClick={() => handleMobileNav("/accounting")} className={`flex items-center gap-3 px-3 py-2.5 text-white rounded-lg w-full text-left ${isActive("/accounting") ? "bg-blue-600" : "hover:bg-blue-600"}`}>
                <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
                <span className="font-medium">{t.nav.accountingTax}</span>
              </button>
              <button onClick={() => handleMobileNav("/company-formation")} className={`flex items-center gap-3 px-3 py-2.5 text-white rounded-lg w-full text-left ${isActive("/company-formation") ? "bg-blue-600" : "hover:bg-blue-600"}`}>
                <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
                <span className="font-medium">{t.nav.companyFormation}</span>
              </button>
            </div>
          )}

          <button onClick={() => handleMobileNav("/contact")} className={`block w-full text-left px-4 py-3 text-sm font-semibold rounded-lg transition-colors ${isActive("/contact") ? "text-blue-700 bg-blue-50" : "text-slate-700 hover:text-blue-700 hover:bg-blue-50"}`}>
            {t.nav.contactUs}
          </button>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleMobileNav(link.href)}
              className={`block w-full text-left px-4 py-3 text-sm font-semibold rounded-lg transition-colors ${isActive(link.href) ? "text-blue-700 bg-blue-50" : "text-slate-700 hover:text-blue-700 hover:bg-blue-50"}`}
            >
              {link.label}
            </button>
          ))}

          {/* Language selector mobile */}
          <div className="pt-3 border-t border-slate-100 mt-3">
            <p className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Language</p>
            <div className="grid grid-cols-4 gap-1.5 px-4">
              {locales.map((loc) => (
                <button
                  key={loc.code}
                  onClick={() => setLocale(loc.code as Locale)}
                  className={`flex flex-col items-center gap-0.5 px-2 py-2 text-xs rounded-lg transition-colors ${
                    locale === loc.code
                      ? "bg-blue-100 text-blue-700 font-semibold ring-1 ring-blue-200"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <FlagIcon code={loc.code} className="w-6 h-4" />
                  <span className="text-[10px] font-medium uppercase tracking-wider">{loc.code}</span>
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
        </div>
      </div>
    </>
  );
}
