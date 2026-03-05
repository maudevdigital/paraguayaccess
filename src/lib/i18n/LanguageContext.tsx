"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import en, { type Dictionary } from "./dictionaries/en";
import es from "./dictionaries/es";
import pt from "./dictionaries/pt";
import fr from "./dictionaries/fr";
import it from "./dictionaries/it";
import ru from "./dictionaries/ru";
import el from "./dictionaries/el";

export type Locale = "en" | "es" | "pt" | "fr" | "it" | "ru" | "el";

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

const validLocales: Set<string> = new Set(locales.map((l) => l.code));

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

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Restore saved locale on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("locale");
      if (saved && validLocales.has(saved)) {
        setLocaleState(saved as Locale);
        document.documentElement.lang = saved;
      }
    } catch {
      // localStorage unavailable (SSR / private mode)
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    document.documentElement.lang = newLocale;
    try {
      localStorage.setItem("locale", newLocale);
    } catch {
      // localStorage unavailable
    }
  }, []);

  const t = dictionaries[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
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
