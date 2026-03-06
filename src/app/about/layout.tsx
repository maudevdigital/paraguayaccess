import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Paraguay Access | Who We Are & Our Story",
  description:
    "Learn about Paraguay Access: a specialized firm built on firsthand experience with Paraguay's residency process. 750+ clients served from 40+ countries. Expert local team with international perspective.",
  openGraph: {
    title: "About Us | Paraguay Access",
    description:
      "Built on real experience in Paraguay. 750+ clients from 40+ countries trust our team for residency, tax, and business services.",
    url: "https://paraguayaccess.com/about",
  },
  alternates: {
    canonical: "https://paraguayaccess.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
