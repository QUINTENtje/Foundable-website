import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cases \u2014 Foundable",
  description:
    "Bekijk hoe Foundable Nederlandse bedrijven zichtbaar heeft gemaakt in ChatGPT, Perplexity en Google AI.",
};

export default function CasesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-bg">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy leading-tight">
            Bedrijven die AI nu begrijpt.
          </h1>
          <p className="mt-4 text-lg text-text-light">
            Twee cases. Twee verschillende niches. Hetzelfde resultaat: een
            website die AI volledig begrijpt.
          </p>
        </div>
      </section>

      {/* Case 1 - Ory aan Zee */}
      <section id="ory-aan-zee" className="py-16 sm:py-20 bg-bg-alt scroll-mt-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">
            Vakantieverhuur, Noord-Holland
          </p>
          <h2 className="mt-2 text-3xl font-bold text-navy">Ory aan Zee</h2>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-navy">Uitdaging</h3>
              <p className="mt-2 text-text-light leading-relaxed">
                Ory aan Zee verhuurt vakantiewoningen aan de Nederlandse kust.
                De website zag er goed uit, maar AI kon er weinig mee. Bij
                zoekopdrachten als &lsquo;vakantiewoning aan zee
                boeken&rsquo; werd Ory aan Zee niet aanbevolen &mdash; niet
                omdat het aanbod niet klopte, maar omdat de website te vaag was
                voor AI.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-navy">Aanpak</h3>
              <p className="mt-2 text-text-light leading-relaxed">
                We analyseerden de volledige website op AIO-criteria. De
                locatie, sfeer, doelgroep en unieke kenmerken van de woningen
                waren nauwelijks concreet beschreven. We herschreven de teksten,
                voegden specifieke feiten toe en implementeerden JSON-LD
                structured data met alle relevante informatie.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-navy">Resultaat</h3>
              <p className="mt-2 text-text-light leading-relaxed">
                AI begrijpt nu wie Ory aan Zee is, waar het ligt, wat het kost
                en voor wie het geschikt is. De website voldoet aan alle
                criteria die ChatGPT, Perplexity en Google AI gebruiken om een
                aanbeveling te doen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case 2 - Bootzeil.nl */}
      <section id="bootzeil" className="py-16 sm:py-20 bg-bg scroll-mt-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">
            Maatwerk bootzeilen en dekzeilen, Haarlem
          </p>
          <h2 className="mt-2 text-3xl font-bold text-navy">Bootzeil.nl</h2>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-navy">Uitdaging</h3>
              <p className="mt-2 text-text-light leading-relaxed">
                Bootzeil.nl maakt maatwerk zeilen en dekzeilen voor boten. Een
                technische niche met veel vakjargon. De website was informatief
                voor insiders, maar voor AI onbegrijpelijk. Termen als
                &lsquo;dacron&rsquo; en &lsquo;laminate zeil&rsquo; zeggen een
                zoekmachine niets als er geen context bij staat.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-navy">Aanpak</h3>
              <p className="mt-2 text-text-light leading-relaxed">
                We voerden een volledige Golden 10 analyse uit &mdash; een
                methode waarbij we de 10 belangrijkste vragen identificeren die
                AI over een bedrijf moet kunnen beantwoorden. Daarna
                herschreven we de content in begrijpelijke taal zonder het
                vakmanschap te verliezen. JSON-LD structured data zorgde voor
                gestructureerde feiten over diensten, werkgebied en
                contactgegevens.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-navy">Resultaat</h3>
              <p className="mt-2 text-text-light leading-relaxed">
                AI begrijpt nu wat Bootzeil.nl maakt, voor wie, in welke regio
                en wat een klant kan verwachten. De technische expertise is
                behouden &mdash; maar nu ook leesbaar voor de zoekmachines die
                de aanbevelingen doen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
