import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Zo werkt de GEO-audit \u2014 Foundable",
  description:
    "Wij geven AI alles wat het nodig heeft om jou te begrijpen. Geen verkoopgesprek, geen lange intake. In vijf stappen klaar.",
  alternates: {
    canonical: "/werkwijze",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Foundable",
    url: "https://www.foundable.nl/werkwijze",
    title: "Zo werkt de GEO-audit \u2014 Foundable",
    description:
      "Wij geven AI alles wat het nodig heeft om jou te begrijpen. Geen verkoopgesprek, geen lange intake. In vijf stappen klaar.",
    images: [{ url: "/logo.png" }],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Zo werkt de GEO-audit van Foundable",
  description:
    "De GEO-audit van Foundable in vijf stappen: van gratis AI Visibility Score tot revisie.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Check je gratis AI Visibility Score",
      text: "Vul je URL in en zie direct hoe zichtbaar je website is voor AI, inclusief concrete verbeterpunten. Geen verplichtingen.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Je hoort persoonlijk van ons",
      text: "We bekijken je website en nemen contact op. Geen geautomatiseerde mail, geen verkoopgesprek. Als we denken dat een audit wat voor je doet, laten we je weten wat we zien.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "De audit begint",
      text: "Je betaalt de eerste termijn (50% van het totaal) en wij gaan aan de slag.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Je ontvangt het pakket",
      text: "Binnen 14 werkdagen ontvang je per mail het volledige pakket: auditrapport, Content Optimization PDF, JSON-LD code, implementatiegids en tips om beter gevonden te worden. De tweede termijn (de resterende 50%) ontvang je tegelijk.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Revisie",
      text: "Je hebt 14 dagen om feedback te geven. Wij verwerken dat in twee revisierondes.",
    },
  ],
};

export default function WerkwijzePage() {
  return (
    <>
      <JsonLd data={howToSchema} />
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24 bg-bg">
        <div className="aurora" aria-hidden="true">
          <div className="blob blob-1" />
          <div className="blob blob-3" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-sm font-medium text-navy backdrop-blur">
            In vijf stappen klaar
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-navy leading-tight">
            Wij geven AI alles wat het nodig heeft om jou te begrijpen.
          </h1>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 sm:py-24 bg-bg-alt">
        <Reveal className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Step 1 */}
          <div className="relative pl-16">
            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white font-bold text-lg shadow-[0_8px_20px_-6px_rgba(249,115,22,0.6)]">
              1
            </div>
            <h2 className="text-2xl font-bold text-navy">
              Check je gratis AI Visibility Score
            </h2>
            <p className="mt-3 text-text-light leading-relaxed">
              Vul je URL in en zie direct hoe zichtbaar je website is voor
              AI, inclusief concrete verbeterpunten. Geen verplichtingen.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative pl-16">
            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white font-bold text-lg shadow-[0_8px_20px_-6px_rgba(249,115,22,0.6)]">
              2
            </div>
            <h2 className="text-2xl font-bold text-navy">
              Je hoort persoonlijk van ons
            </h2>
            <p className="mt-3 text-text-light leading-relaxed">
              We bekijken je website en nemen contact op. Geen geautomatiseerde
              mail, geen verkoopgesprek. Als we denken dat een audit wat voor je
              doet, laten we je weten wat we zien.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative pl-16">
            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white font-bold text-lg shadow-[0_8px_20px_-6px_rgba(249,115,22,0.6)]">
              3
            </div>
            <h2 className="text-2xl font-bold text-navy">
              De audit begint
            </h2>
            <p className="mt-3 text-text-light leading-relaxed">
              Je betaalt de eerste termijn (50% van het totaal) en wij gaan
              aan de slag.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative pl-16">
            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white font-bold text-lg shadow-[0_8px_20px_-6px_rgba(249,115,22,0.6)]">
              4
            </div>
            <h2 className="text-2xl font-bold text-navy">
              Je ontvangt het pakket
            </h2>
            <p className="mt-3 text-text-light leading-relaxed">
              Binnen 14 werkdagen ontvang je per mail het volledige pakket:
              auditrapport, Content Optimization PDF, JSON-LD code,
              implementatiegids en tips om beter gevonden te
              worden. De tweede termijn (de resterende 50%) ontvang je
              tegelijk.
            </p>
          </div>

          {/* Step 5 */}
          <div className="relative pl-16">
            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white font-bold text-lg shadow-[0_8px_20px_-6px_rgba(249,115,22,0.6)]">
              5
            </div>
            <h2 className="text-2xl font-bold text-navy">
              Revisie
            </h2>
            <p className="mt-3 text-text-light leading-relaxed">
              Je hebt 14 dagen om feedback te geven. Wij verwerken dat in twee
              revisierondes.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Promise Block */}
      <section className="glow-radial py-16 sm:py-24 bg-navy text-white">
        <Reveal className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-3xl sm:text-4xl font-bold">
            Gevonden worden begint met begrepen worden.
          </p>
          <p className="mt-3 text-lg text-accent font-medium">
            Word gevonden in het AI-tijdperk.
          </p>
          <p className="mt-6 text-white/70 leading-relaxed max-w-xl mx-auto">
            Na de audit heeft AI geen reden meer om jou niet te begrijpen. Hoe
            prominent je daarna verschijnt, bouw je stap voor stap op, aan
            de hand van onze tips.
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-bg">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/score"
            className="glow-accent inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white hover:bg-accent-hover"
          >
            Vraag je gratis AI Visibility Score aan
          </Link>
        </div>
      </section>
    </>
  );
}
