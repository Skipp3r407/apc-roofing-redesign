import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { SiteLoadOverlay } from "@/components/SiteLoadOverlay";
import { site } from "@/lib/content";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} | Roofing, solar & gutters`,
  description: site.tagline,
  openGraph: {
    title: `${site.name} | Trusted roofing contractor`,
    description: heroDescription(),
  },
};

function heroDescription() {
  return "GAF certified roofing contractor serving Central Florida and the Midwest. Inspections, repairs, replacements, storm damage, gutters, and solar.";
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-brand-dark font-sans antialiased">
        <SiteLoadOverlay />
        {children}
      </body>
    </html>
  );
}
