import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Formation in Paraguay | S.A. & S.R.L. Setup",
  description:
    "Set up your business in Paraguay with expert guidance. Full company incorporation (S.A. or S.R.L.), RUC registration, bank account opening, and ongoing corporate compliance.",
  openGraph: {
    title: "Company Formation in Paraguay | Paraguay Access",
    description:
      "Start your business in Paraguay. Incorporation, tax setup, banking, and compliance. Low 10% corporate tax, territorial tax system, business-friendly environment.",
    url: "https://paraguayaccess.com/company-formation",
  },
  alternates: {
    canonical: "https://paraguayaccess.com/company-formation",
  },
};

export default function CompanyFormationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
