import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Paraguay Access | Get in Touch",
  description:
    "Contact Paraguay Access for residency, tax advisory, accounting, or company formation in Paraguay. Email, WhatsApp, or schedule a free consultation. We respond within 24 hours.",
  openGraph: {
    title: "Contact Us | Paraguay Access",
    description:
      "Reach out for a free consultation about residency, taxes, or business setup in Paraguay. Available via email and WhatsApp.",
    url: "https://paraguayaccess.com/contact",
  },
  alternates: {
    canonical: "https://paraguayaccess.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
