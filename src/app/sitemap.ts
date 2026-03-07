import type { MetadataRoute } from "next";

const SITE_URL = "https://paraguayaccess.com";
const LANGUAGES = ["en", "es", "pt", "fr", "it", "ru", "el"] as const;

interface PageDef {
  path: string;
  lastModified: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
}

const pages: PageDef[] = [
  { path: "", lastModified: "2026-03-07", changeFrequency: "weekly", priority: 1.0 },
  { path: "residency", lastModified: "2026-03-07", changeFrequency: "weekly", priority: 0.95 },
  { path: "residency/guide", lastModified: "2026-03-07", changeFrequency: "monthly", priority: 0.9 },
  { path: "accounting", lastModified: "2026-03-07", changeFrequency: "monthly", priority: 0.85 },
  { path: "company-formation", lastModified: "2026-03-07", changeFrequency: "monthly", priority: 0.85 },
  { path: "about", lastModified: "2026-03-07", changeFrequency: "monthly", priority: 0.7 },
  { path: "contact", lastModified: "2026-03-07", changeFrequency: "monthly", priority: 0.7 },
  { path: "privacy", lastModified: "2026-01-01", changeFrequency: "yearly", priority: 0.3 },
  { path: "terms", lastModified: "2026-01-01", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const lang of LANGUAGES) {
      const suffix = page.path ? `/${page.path}` : "";
      const url = `${SITE_URL}/${lang}${suffix}`;

      const languages: Record<string, string> = {};
      for (const l of LANGUAGES) {
        languages[l] = `${SITE_URL}/${l}${suffix}`;
      }
      languages["x-default"] = `${SITE_URL}/en${suffix}`;

      entries.push({
        url,
        lastModified: new Date(page.lastModified),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: { languages },
      });
    }
  }

  return entries;
}
