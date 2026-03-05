import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paraguay Access | Relocation, Residency & Tax Advisory Services",
  description:
    "Specialized firm providing comprehensive relocation, residency, accounting, and tax advisory services for foreigners, investors, and digital nomads in Paraguay.",
  keywords: [
    "Paraguay residency",
    "Paraguay relocation",
    "Paraguay tax advisory",
    "company formation Paraguay",
    "digital nomad Paraguay",
    "expat services Paraguay",
  ],
  openGraph: {
    title: "Paraguay Access | Your Gateway to Paraguay",
    description:
      "Expert relocation, residency, accounting, and tax services for foreigners, investors, and digital nomads in Paraguay.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
