"use client";

import { useEffect } from "react";
import { LanguageProvider, useLanguage } from "@/lib/i18n/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyParaguay from "@/components/WhyParaguay";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

function HomeContent() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.pageTitle;
  }, [t.pageTitle]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyParaguay />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
