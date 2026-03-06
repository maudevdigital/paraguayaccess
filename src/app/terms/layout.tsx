import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Paraguay Access terms of service. Rules and conditions governing the use of our website and residency, accounting, tax advisory, and company formation services.",
  openGraph: {
    title: "Terms of Service | Paraguay Access",
    description: "Terms governing the use of Paraguay Access website and services.",
    url: "https://paraguayaccess.com/terms",
  },
  alternates: {
    canonical: "https://paraguayaccess.com/terms",
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
