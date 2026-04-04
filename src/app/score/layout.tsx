import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gratis AI Visibility Score \u2014 Foundable",
  description:
    "Hoe zichtbaar is jouw website voor ChatGPT, Perplexity en Google AI? Vraag je gratis score aan en ontvang concrete verbeterpunten.",
};

export default function ScoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
