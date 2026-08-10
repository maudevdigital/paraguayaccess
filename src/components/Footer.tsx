"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t, locale } = useLanguage();
  const lp = (path: string) => (path === "/" ? `/${locale}` : `/${locale}${path}`);

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href={lp("/")} className="inline-block mb-6 -ml-4">
              <Image
                src="/images/logo-white.png"
                alt="Paraguay Access"
                width={500}
                height={200}
                className="h-40 w-auto -my-18"
              />
            </a>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              {t.footer.services}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href={lp("/residency")} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  {t.footer.residency}
                </a>
              </li>
              <li>
                <a href={lp("/accounting")} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  {t.footer.accountingTax}
                </a>
              </li>
              <li>
                <a href={lp("/company-formation")} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  {t.footer.companyFormation}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              {t.footer.company}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href={lp("/about")} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  {t.footer.aboutUs}
                </a>
              </li>
              <li>
                <a href={lp("/contact")} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  {t.footer.contact}
                </a>
              </li>
              <li>
                <a href={lp("/privacy")} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a href={lp("/terms")} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  {t.footer.terms}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              {t.footer.contact}
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:advisory@paraguayaccess.com" className="flex items-center gap-3 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  {t.footer.advisoryEmail}
                </a>
              </li>
              <li>
                <a href="tel:+595992110995" className="flex items-center gap-3 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  {t.footer.phone}
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {t.footer.address}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Paraguay Access. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <a href={lp("/privacy")} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              {t.footer.privacy}
            </a>
            <a href={lp("/terms")} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              {t.footer.terms}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
