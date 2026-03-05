import type { Locale } from "@/lib/i18n/LanguageContext";

interface FlagIconProps {
  code: Locale;
  className?: string;
}

export default function FlagIcon({ code, className = "w-5 h-4" }: FlagIconProps) {
  return (
    <span className={`inline-block overflow-hidden rounded-[3px] shadow-sm ${className}`}>
      <svg viewBox="0 0 640 480" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {flags[code]}
      </svg>
    </span>
  );
}

const flags: Record<Locale, React.ReactNode> = {
  en: (
    // UK Flag
    <>
      <rect width="640" height="480" fill="#012169" />
      <path d="M75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z" fill="#fff" />
      <path d="M424 281l216 159v40L369 281h55zm-184 20l6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z" fill="#C8102E" />
      <path d="M241 0v480h160V0H241zM0 160v160h640V160H0z" fill="#fff" />
      <path d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" fill="#C8102E" />
    </>
  ),
  es: (
    // Spain Flag
    <>
      <rect width="640" height="480" fill="#c60b1e" />
      <rect width="640" height="240" y="120" fill="#ffc400" />
    </>
  ),
  pt: (
    // Brazil Flag
    <>
      <rect width="640" height="480" fill="#009b3a" />
      <path d="M320 76.8L588.8 240 320 403.2 51.2 240z" fill="#fedf00" />
      <circle cx="320" cy="240" r="96" fill="#002776" />
      <path d="M230 207c40-18 96-18 180 12" fill="none" stroke="#fff" strokeWidth="12" />
    </>
  ),
  fr: (
    // France Flag
    <>
      <rect width="213" height="480" fill="#002395" />
      <rect width="214" height="480" x="213" fill="#fff" />
      <rect width="213" height="480" x="427" fill="#ED2939" />
    </>
  ),
  it: (
    // Italy Flag
    <>
      <rect width="213" height="480" fill="#009246" />
      <rect width="214" height="480" x="213" fill="#fff" />
      <rect width="213" height="480" x="427" fill="#CE2B37" />
    </>
  ),
  ru: (
    // Russia Flag
    <>
      <rect width="640" height="160" fill="#fff" />
      <rect width="640" height="160" y="160" fill="#0039A6" />
      <rect width="640" height="160" y="320" fill="#D52B1E" />
    </>
  ),
  el: (
    // Greece Flag
    <>
      <rect width="640" height="480" fill="#0D5EAF" />
      <path d="M0 53.3h640v53.4H0zM0 160h640v53.3H0zM0 266.7h640v53.3H0zM0 373.3h640v53.3H0z" fill="#fff" />
      <rect width="240" height="266.7" fill="#0D5EAF" />
      <path d="M0 106.7h240v53.3H0z" fill="#fff" />
      <path d="M93.3 0h53.4v266.7H93.3z" fill="#fff" />
    </>
  ),
};
