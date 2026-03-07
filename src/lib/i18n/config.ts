export const locales = ["en", "es", "pt", "fr", "it", "ru", "el"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const ogLocaleMap: Record<Locale, string> = {
  en: "en_US",
  es: "es_PY",
  pt: "pt_BR",
  fr: "fr_FR",
  it: "it_IT",
  ru: "ru_RU",
  el: "el_GR",
};

export function isValidLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
