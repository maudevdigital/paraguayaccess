"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
      {count}{suffix}
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();

  const stats = [
    { value: 750, suffix: "+", label: t.hero.stats.clients },
    { value: 97, suffix: "%", label: t.hero.stats.satisfaction },
    { value: 41, suffix: "+", label: t.hero.stats.countries },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:bg-fixed scale-110"
        style={{ backgroundImage: "url('/images/paraguay-flag.jpg')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/55 to-black/65" />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        {/* Text - centered */}
        <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 mb-6 border border-white/10">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-sm font-semibold text-blue-200">
                {t.hero.badge}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              {t.hero.title}{" "}
              <span className="relative inline-block">
                <span className="bg-linear-to-r from-red-400 via-white to-blue-400 bg-clip-text text-transparent">
                  {t.hero.titleHighlight}
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="flag-line" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#f87171" />
                      <stop offset="50%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M2 8C40 2 100 2 198 8"
                    stroke="url(#flag-line)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-blue-100/80 leading-relaxed max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                {t.hero.cta}
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/20 bg-white/5 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-white hover:bg-white/15 hover:border-white/30 transition-all duration-300"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
        </div>

        {/* Stats - horizontal row below */}
        <div className="mt-14 grid grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-white/8 backdrop-blur-sm border border-white/10 py-5 px-4 text-center hover:bg-white/12 transition-all duration-300"
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <div className="mt-1 text-xs sm:text-sm font-medium text-blue-200/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
