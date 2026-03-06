import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residency Services in Paraguay | Temporary & Permanent Residency",
  description:
    "Get temporary or permanent residency in Paraguay. 0% tax on foreign income, no minimum stay, fast processing. Complete assistance from document preparation to cédula. Prices for 2026.",
  openGraph: {
    title: "Residency in Paraguay | Paraguay Access",
    description:
      "Obtain your temporary or permanent residency in Paraguay. Our team has helped 750+ clients from 40+ countries. No upfront payment required.",
    url: "https://paraguayaccess.com/residency",
  },
  alternates: {
    canonical: "https://paraguayaccess.com/residency",
  },
};

export default function ResidencyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
