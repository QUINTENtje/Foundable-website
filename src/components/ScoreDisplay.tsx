"use client";

import Link from "next/link";

interface ScoreCategory {
  name: string;
  score: number;
  maxScore: number;
}

interface Checkpoints {
  [key: string]: boolean;
}

interface ScoreResult {
  categories: ScoreCategory[];
  checkpoints: Checkpoints;
  totalScore: number;
  label: string;
}

const CHECKPOINT_LABELS: Record<string, string> = {
  json_ld_aanwezig: "JSON-LD aanwezig",
  type_klopt: "@type klopt bij bedrijfstype",
  naam_adres_telefoon: "Naam, adres en telefoon in schema",
  faqpage_schema: "FAQPage schema aanwezig",
  description_ingevuld: "Description veld gevuld",
  bedrijfsnaam_prominent: "Bedrijfsnaam prominent",
  locatie_benoemd: "Locatie of regio vermeld",
  wat_bedrijf_doet: "Duidelijk wat bedrijf doet",
  doelgroep_benoemd: "Doelgroep benoemd",
  faq_aanwezig: "FAQ-vragen aanwezig",
  korte_zinnen: "Korte, leesbare zinnen",
  concrete_feiten: "Concrete feiten en cijfers",
  lijsten_of_headers: "Lijsten of subheadings gebruikt",
  crawlers_niet_geblokkeerd: "AI-crawlers niet geblokkeerd",
  geen_noindex: "Geen noindex tag",
  server_rendered: "Tekst leesbaar zonder JS",
  laadtijd_acceptabel: "Laadtijd acceptabel",
  reviews_aanwezig: "Reviews of testimonials",
  over_ons_aanwezig: "Over ons pagina",
  contact_vindbaar: "Contactinfo vindbaar",
};

const CATEGORY_CHECKPOINTS: Record<string, string[]> = {
  "Gestructureerde data": [
    "json_ld_aanwezig",
    "type_klopt",
    "naam_adres_telefoon",
    "faqpage_schema",
    "description_ingevuld",
  ],
  Entiteitsduidelijkheid: [
    "bedrijfsnaam_prominent",
    "locatie_benoemd",
    "wat_bedrijf_doet",
    "doelgroep_benoemd",
  ],
  Contentstructuur: [
    "faq_aanwezig",
    "korte_zinnen",
    "concrete_feiten",
    "lijsten_of_headers",
  ],
  "Technische crawlbaarheid": [
    "crawlers_niet_geblokkeerd",
    "geen_noindex",
    "server_rendered",
    "laadtijd_acceptabel",
  ],
  Autoriteitssignalen: [
    "reviews_aanwezig",
    "over_ons_aanwezig",
    "contact_vindbaar",
  ],
};

function getLabelStyle(label: string) {
  switch (label) {
    case "Slecht":
      return { color: "text-red-600", bg: "bg-red-500" };
    case "Matig":
      return { color: "text-accent", bg: "bg-accent" };
    case "Goed":
      return { color: "text-green-600", bg: "bg-green-500" };
    case "Uitstekend":
      return { color: "text-green-600", bg: "bg-green-600" };
    default:
      return { color: "text-text-light", bg: "bg-text-light" };
  }
}

function getBarColor(score: number, maxScore: number) {
  const pct = score / maxScore;
  if (pct <= 0.4) return "bg-red-500";
  if (pct <= 0.7) return "bg-accent";
  return "bg-green-500";
}

export default function ScoreDisplay({ result }: { result: ScoreResult }) {
  const { color, bg } = getLabelStyle(result.label);

  return (
    <div className="space-y-8">
      {/* Total Score */}
      <div className="text-center">
        <p className={`text-7xl font-bold ${color}`}>{result.totalScore}</p>
        <p className="text-lg text-text-light mt-1">/100</p>
        <div
          className={`mt-3 inline-block rounded-full px-4 py-1.5 text-sm font-semibold text-white ${bg}`}
        >
          {result.label}
        </div>
      </div>

      {/* Categories with checkpoints */}
      <div className="space-y-6">
        {result.categories.map((cat) => (
          <div
            key={cat.name}
            className="rounded-xl border border-border bg-white p-5"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-navy">{cat.name}</h3>
              <span className="text-lg font-bold text-navy">
                {cat.score}/{cat.maxScore}
              </span>
            </div>
            <div className="w-full bg-bg-alt rounded-full h-2.5 mb-4">
              <div
                className={`h-2.5 rounded-full ${getBarColor(cat.score, cat.maxScore)}`}
                style={{ width: `${(cat.score / cat.maxScore) * 100}%` }}
              />
            </div>
            <ul className="space-y-1.5">
              {CATEGORY_CHECKPOINTS[cat.name]?.map((key) => (
                <li key={key} className="flex items-center gap-2 text-sm">
                  {result.checkpoints[key] ? (
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                  <span
                    className={
                      result.checkpoints[key]
                        ? "text-text-light"
                        : "text-navy font-medium"
                    }
                  >
                    {CHECKPOINT_LABELS[key] || key}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-navy p-8 text-center">
        <h3 className="text-2xl font-bold text-white">
          Wil je dit volledig laten aanpakken?
        </h3>
        <p className="mt-3 text-white/70 max-w-lg mx-auto">
          Foundable levert een compleet AIO audit pakket voor &euro;595 excl.
          BTW. Geen vage adviezen &mdash; concrete deliverables die je direct
          kunt implementeren.
        </p>
        <Link
          href="/werkwijze"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white hover:bg-accent-hover transition-colors"
        >
          Bekijk het pakket
        </Link>
      </div>
    </div>
  );
}
