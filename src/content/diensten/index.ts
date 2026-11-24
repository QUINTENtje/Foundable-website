import type { Metadata } from "next";
import type { DienstPagina } from "./types";
import geoBureau from "./geo-bureau";
import geoBureauAmsterdam from "./geo-bureau-amsterdam";
import aiVermeldingenMeten from "./ai-vermeldingen-meten";
import geoVoorSprekers from "./geo-voor-sprekers";
import geoVoorCoachesEnTrainers from "./geo-voor-coaches-en-trainers";
import geoVoorWix from "./geo-voor-wix";

export type { DienstPagina } from "./types";

/* Volgorde = volgorde in de footer en de sitemap. */
export const dienstPaginas: DienstPagina[] = [
  geoBureau,
  geoBureauAmsterdam,
  aiVermeldingenMeten,
  geoVoorSprekers,
  geoVoorCoachesEnTrainers,
  geoVoorWix,
];

/* Laatste inhoudelijke wijziging van de dienstpagina's, voor de sitemap. */
export const dienstPaginasBijgewerkt = new Date("2026-11-24T12:00:00");

export function getDienst(slug: string): DienstPagina {
  const pagina = dienstPaginas.find((p) => p.slug === slug);
  if (!pagina) throw new Error(`Onbekende dienstpagina: ${slug}`);
  return pagina;
}

export function dienstMetadata(pagina: DienstPagina): Metadata {
  return {
    title: pagina.metaTitel,
    description: pagina.description,
    alternates: { canonical: `/${pagina.slug}` },
    openGraph: {
      type: "website",
      locale: "nl_NL",
      siteName: "Foundable",
      url: `https://www.foundable.nl/${pagina.slug}`,
      title: pagina.metaTitel,
      description: pagina.description,
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
  };
}
