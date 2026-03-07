"use client";

import React, { createContext, useContext, useCallback, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import en, { type Dictionary } from "./dictionaries/en";
import es from "./dictionaries/es";
import pt from "./dictionaries/pt";
import fr from "./dictionaries/fr";
import it from "./dictionaries/it";
import ru from "./dictionaries/ru";
import el from "./dictionaries/el";
import { locales as localeConfigs, type Locale } from "./config";

export type { Locale } from "./config";

interface LocaleInfo {
  code: Locale;
  name: string;
  flag: string;
}

export const locales: LocaleInfo[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "el", name: "Ελληνικά", flag: "🇬🇷" },
];

// Translated language names: languageNames[activeLocale][targetCode]
export const languageNames: Record<Locale, Record<Locale, string>> = {
  en: { en: "English", es: "Spanish", pt: "Portuguese", fr: "French", it: "Italian", ru: "Russian", el: "Greek" },
  es: { en: "Inglés", es: "Español", pt: "Portugués", fr: "Francés", it: "Italiano", ru: "Ruso", el: "Griego" },
  pt: { en: "Inglês", es: "Espanhol", pt: "Português", fr: "Francês", it: "Italiano", ru: "Russo", el: "Grego" },
  fr: { en: "Anglais", es: "Espagnol", pt: "Portugais", fr: "Français", it: "Italien", ru: "Russe", el: "Grec" },
  it: { en: "Inglese", es: "Spagnolo", pt: "Portoghese", fr: "Francese", it: "Italiano", ru: "Russo", el: "Greco" },
  ru: { en: "Английский", es: "Испанский", pt: "Португальский", fr: "Французский", it: "Итальянский", ru: "Русский", el: "Греческий" },
  el: { en: "Αγγλικά", es: "Ισπανικά", pt: "Πορτογαλικά", fr: "Γαλλικά", it: "Ιταλικά", ru: "Ρωσικά", el: "Ελληνικά" },
};

const dictionaries: Record<Locale, Dictionary> = { en, es, pt, fr, it, ru, el };

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  t: en,
});

export function LanguageProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const setLocale = useCallback(
    (newLocale: Locale) => {
      // Replace the locale segment in the current URL
      const segments = pathname.split("/");
      // segments[0] is empty string (before first /), segments[1] is the locale
      if (
        segments.length >= 2 &&
        (localeConfigs as readonly string[]).includes(segments[1])
      ) {
        segments[1] = newLocale;
      } else {
        segments.splice(1, 0, newLocale);
      }
      const newPath = segments.join("/") || "/";

      // Set cookie so middleware remembers the preference
      document.cookie = `locale=${newLocale};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
      router.push(newPath);
    },
    [pathname, router]
  );

  const t = dictionaries[initialLocale];

  // Keep the html lang attribute in sync
  useEffect(() => {
    document.documentElement.lang = initialLocale;
  }, [initialLocale]);

  return (
    <LanguageContext.Provider value={{ locale: initialLocale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
