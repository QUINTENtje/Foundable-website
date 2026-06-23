import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd, { siteGraph } from "@/components/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Foundable — GEO-audit: word gevonden in het AI-tijdperk",
    template: "%s",
  },
  description:
    "Foundable zorgt dat ChatGPT, Perplexity, Claude en Google AI jouw website begrijpen en aanbevelen. Done-for-you GEO-audit. Vraag gratis je AI Visibility Score aan.",
  metadataBase: new URL("https://www.foundable.nl"),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Foundable",
    title: "Foundable — GEO-audit: word gevonden in het AI-tijdperk",
    description:
      "Foundable zorgt dat ChatGPT, Perplexity, Claude en Google AI jouw website begrijpen en aanbevelen. Done-for-you GEO-audit.",
    url: "https://www.foundable.nl",
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foundable — GEO-audit: word gevonden in het AI-tijdperk",
    description:
      "Foundable zorgt dat ChatGPT, Perplexity, Claude en Google AI jouw website begrijpen en aanbevelen. Done-for-you GEO-audit.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-text font-sans">
        <JsonLd data={siteGraph} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
