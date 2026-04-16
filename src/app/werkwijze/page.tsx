import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zo werkt de AIO audit \u2014 Foundable",
  description:
    "Wij geven AI alles wat het nodig heeft om jou te begrijpen. Geen verkoopgesprek, geen lange intake \u2014 in vijf stappen klaar.",
};

export default function WerkwijzePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-bg">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy leading-tight">
            Wij geven AI alles wat het nodig heeft om jou te begrijpen.
          </h1>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 sm:py-24 bg-bg-alt">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Step 1 */}
          <div className="relative pl-16">
            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white font-bold text-lg">
              1
            </div>
            <h2 className="text-2xl font-bold text-navy">
              Check je gratis AI Visibility Score
            </h2>
            <p className="mt-3 text-text-light leading-relaxed">
              Vul je URL in en zie direct hoe zichtbaar je website is voor
              AI &mdash; inclusief concrete verbeterpunten. Geen verplichtingen.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative pl-16">
            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white font-bold text-lg">
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
            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white font-bold text-lg">
              3
            </div>
            <h2 className="text-2xl font-bold text-navy">
              De audit begint
            </h2>
            <p className="mt-3 text-text-light leading-relaxed">
              Je betaalt de eerste termijn (&euro;297,50 excl. BTW) en wij gaan
              aan de slag.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative pl-16">
            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white font-bold text-lg">
              4
            </div>
            <h2 className="text-2xl font-bold text-navy">
              Je ontvangt het pakket
            </h2>
            <p className="mt-3 text-text-light leading-relaxed">
              Binnen 14 werkdagen ontvang je per mail het volledige pakket:
              auditrapport, Content Optimization PDF, JSON-LD code,
              implementatiegids, bonus website tips en tips om beter gevonden te
              worden. De tweede termijn (&euro;297,50 excl. BTW) ontvang je
              tegelijk.
            </p>
          </div>

          {/* Step 5 */}
          <div className="relative pl-16">
            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white font-bold text-lg">
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
        </div>
      </section>

      {/* Promise Block */}
      <section className="py-16 sm:py-24 bg-navy text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-3xl sm:text-4xl font-bold">
            We maken je vindbaar, niet beroemd.
          </p>
          <p className="mt-6 text-white/70 leading-relaxed max-w-xl mx-auto">
            Na de audit heeft AI geen reden meer om jou niet te begrijpen. Hoe
            prominent je daarna verschijnt, bouw je stap voor stap op &mdash;
            aan de hand van onze tips.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-bg">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/score"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white hover:bg-accent-hover transition-colors"
          >
            Vraag je gratis AI Visibility Score aan
          </Link>
        </div>
      </section>
    </>
  );
}
