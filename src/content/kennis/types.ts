import type { ReactNode } from "react";

export interface FaqItem {
  vraag: string;
  antwoord: string;
}

export interface KennisArtikel {
  slug: string;
  titel: string;
  /** Meta description en kaarttekst op de overzichtspagina. */
  description: string;
  categorie: "Basis" | "Hoe AI werkt" | "Techniek" | "Praktijk";
  /** ISO-datum, bv. "2026-07-07". */
  gepubliceerd: string;
  /** ISO-datum van de laatste inhoudelijke wijziging, als die er is. */
  bijgewerkt?: string;
  leestijdMin: number;
  /** Openingsalinea: een direct, op zichzelf staand antwoord op de titelvraag. */
  intro: string;
  content: ReactNode;
  faq: FaqItem[];
}
