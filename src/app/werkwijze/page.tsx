import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zo werkt de AIO audit \u2014 Foundable",
  description:
    "Van aanvraag tot volledig geoptimaliseerde website in drie stappen. Geen calls, geen intake. Foundable doet het werk \u2014 jij implementeert.",
};

export default function WerkwijzePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-bg">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy leading-tight">
            Van aanvraag tot AIO-proof website. In drie stappen.
          </h1>
          <p className="mt-4 text-lg text-text-light">
            Geen verkoopgesprek. Geen lange intake. Jij stelt &eacute;&eacute;n
            vraag &mdash; wij doen de rest.
          </p>
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
              Gratis AI Visibility Score
            </h2>
            <p className="mt-3 text-text-light leading-relaxed">
              Je vraagt je gratis score aan via de tool op deze website. Je vult
              je URL, naam en e-mailadres in. Wij analyseren je website en
              sturen je een indicatie van hoe zichtbaar je bent voor AI &mdash;
              met concrete verbeterpunten. Geen verplichtingen.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative pl-16">
            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white font-bold text-lg">
              2
            </div>
            <h2 className="text-2xl font-bold text-navy">Audit op maat</h2>
            <p className="mt-3 text-text-light leading-relaxed">
              Na akkoord ontvang je een factuur voor 50% van het auditbedrag
              (&euro;297,50 excl. BTW). Zodra die betaald is, beginnen we. We
              stellen je &eacute;&eacute;n vraag: welke klant of dienst wil je
              het meest aantrekken via AI? Daarna analyseren we je volledige
              website, schrijven we teksten, bouwen we je structured data en
              werken we je implementatiegids uit. De doorlooptijd is gemiddeld 5
              tot 7 werkdagen.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative pl-16">
            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white font-bold text-lg">
              3
            </div>
            <h2 className="text-2xl font-bold text-navy">
              Levering en implementatie
            </h2>
            <p className="mt-3 text-text-light leading-relaxed">
              Je ontvangt het volledige pakket per e-mail: het auditrapport, de
              Content Optimization PDF, de JSON-LD code, de implementatiegids
              en de aanbevelingstips. We lichten de
              belangrijkste bevindingen toe in een heldere begeleidende e-mail.
              Jij implementeert de aanbevelingen zelf, of geef je ze door aan je
              webdesigner.
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
            Geen maandelijkse kosten. Geen abonnement. Geen follow-up calls die
            je niet wil. E&eacute;n audit, een compleet pakket, en daarna ben je
            aan zet.
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
