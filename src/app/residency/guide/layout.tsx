import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residency Program in Paraguay | Complete Guide 2026",
  description:
    "Everything you need to know about Paraguay's residency program in 2026. Requirements, documents, timeline, costs, tax implications, and step-by-step process for temporary and permanent residency.",
  openGraph: {
    title: "Paraguay Residency Guide 2026 | Paraguay Access",
    description:
      "Comprehensive guide to Paraguay's residency program: temporary & permanent options, requirements, documents, tax benefits, and minimum stay rules.",
    url: "https://paraguayaccess.com/residency/guide",
  },
  alternates: {
    canonical: "https://paraguayaccess.com/residency/guide",
  },
};

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return children;
}
