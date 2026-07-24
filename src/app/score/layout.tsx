import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gratis AI Visibility Score \u00b7 Foundable",
  description:
    "Hoe zichtbaar is jouw website voor ChatGPT, Claude en Gemini? Vraag je gratis score aan en ontvang concrete verbeterpunten.",
  alternates: {
    canonical: "/score",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Foundable",
    url: "https://www.foundable.nl/score",
    title: "Gratis AI Visibility Score \u00b7 Foundable",
    description:
      "Hoe zichtbaar is jouw website voor ChatGPT, Claude en Gemini? Vraag je gratis score aan en ontvang concrete verbeterpunten.",
    images: [{ url: "/logo.png" }],
  },
};

export default function ScoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
