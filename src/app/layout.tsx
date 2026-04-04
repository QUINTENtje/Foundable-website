import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Foundable — AIO Audit voor Nederlandse MKB-bedrijven",
    template: "%s",
  },
  description:
    "Foundable helpt Nederlandse bedrijven zichtbaar worden in ChatGPT, Perplexity en Google AI. Done-for-you AIO audit voor €595 excl. BTW. Gratis AI Visibility Score aanvragen.",
  metadataBase: new URL("https://foundable.nl"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-text font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
