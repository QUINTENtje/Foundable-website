import type { ReactNode } from "react";
import type { FaqItem } from "@/content/kennis/types";

/* Een dienstpagina beantwoordt één soort koopvraag ("welk GEO-bureau",
   "GEO-bureau Amsterdam", "vindbaar als spreker"). De woorden waarmee AI
   zoekt, staan in de titel, de kop en het adres van de pagina. */
export interface DienstPagina {
  /** Adres zonder slash, bv. "geo-bureau". */
  slug: string;
  /** De <title>, met de zoekwoorden vooraan. */
  metaTitel: string;
  /** Meta description: wat de pagina beantwoordt, in één of twee zinnen. */
  description: string;
  /** Kruimelpad en naam in de structured data. */
  naam: string;
  h1: string;
  /** Openingsalinea: een direct, op zichzelf staand antwoord. */
  intro: string;
  content: ReactNode;
  faq: FaqItem[];
  /** Knop onderaan. Standaard: de audit. */
  cta?: { label: string; href: string };
  /** Alleen bij een plaatspagina: de plaats voor areaServed. */
  plaats?: string;
}
