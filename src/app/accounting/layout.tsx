import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounting & Tax Services in Paraguay",
  description:
    "Professional accounting and tax services in Paraguay. RUC registration, monthly bookkeeping, tax filing, fiscal consulting, and compliance for residents and businesses. 10% flat tax rate.",
  openGraph: {
    title: "Accounting & Tax Services | Paraguay Access",
    description:
      "Expert accounting and tax management in Paraguay. RUC setup, fiscal compliance, bookkeeping, and tax optimization for expats, digital nomads, and businesses.",
    url: "https://paraguayaccess.com/accounting",
  },
  alternates: {
    canonical: "https://paraguayaccess.com/accounting",
  },
};

export default function AccountingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
