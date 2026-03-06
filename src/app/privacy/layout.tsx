import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Paraguay Access privacy policy. Learn how we collect, use, and protect your personal data when you use our residency, tax advisory, and business services.",
  openGraph: {
    title: "Privacy Policy | Paraguay Access",
    description: "How we handle and protect your personal data at Paraguay Access.",
    url: "https://paraguayaccess.com/privacy",
  },
  alternates: {
    canonical: "https://paraguayaccess.com/privacy",
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
