import type { KennisArtikel } from "./types";
import watIsGeo from "./wat-is-geo";
import seoVsGeo from "./seo-vs-geo";
import hoeKiestChatgpt from "./hoe-kiest-chatgpt";
import elkeAiAndereNamen from "./waarom-elke-ai-andere-namen-noemt";
import watIsJsonLd from "./wat-is-json-ld";
import waaromAiNietBegrijpt from "./waarom-ai-je-website-niet-begrijpt";
import scoreUitgelegd from "./ai-visibility-score-uitgelegd";
import hubspotVerkeerAi from "./hubspot-verkeer-ai";

export type { KennisArtikel, FaqItem } from "./types";

/* Volgorde = volgorde op de overzichtspagina: van basis naar praktijk. */
export const artikelen: KennisArtikel[] = [
  watIsGeo,
  seoVsGeo,
  hoeKiestChatgpt,
  elkeAiAndereNamen,
  waaromAiNietBegrijpt,
  watIsJsonLd,
  scoreUitgelegd,
  hubspotVerkeerAi,
];

export function getArtikel(slug: string): KennisArtikel | undefined {
  return artikelen.find((a) => a.slug === slug);
}

/* Gerelateerde artikelen: eerst dezelfde categorie, dan de rest. */
export function getGerelateerd(slug: string, max = 2): KennisArtikel[] {
  const huidig = getArtikel(slug);
  if (!huidig) return [];
  const rest = artikelen.filter((a) => a.slug !== slug);
  return [
    ...rest.filter((a) => a.categorie === huidig.categorie),
    ...rest.filter((a) => a.categorie !== huidig.categorie),
  ].slice(0, max);
}

export function formatDatum(iso: string): string {
  return new Intl.DateTimeFormat("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T12:00:00`));
}
