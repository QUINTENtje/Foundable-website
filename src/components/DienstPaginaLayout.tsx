import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import type { DienstPagina } from "@/content/diensten/types";

const base = "https://www.foundable.nl";

const prijzen = [
  { naam: "De meting", prijs: "€295", wat: "Hoe vaak AI je noemt: 25 vragen, elk drie keer aan ChatGPT, Claude en Gemini", href: "/start?keuze=meting" },
  { naam: "De audit", prijs: "€999", wat: "Alles klaar om te plaatsen, met een meting vooraf en een nameting na 90 dagen", href: "/start" },
  { naam: "De audit met inbouw", prijs: "€1.495", wat: "De audit, waarbij wij alles zelf op je site zetten", href: "/start?keuze=inbouw" },
  { naam: "De audit met nazorg", prijs: "€1.750", wat: "De audit, plus opnieuw meten en bijsturen na 3 en 6 maanden", href: "/start?keuze=nazorg" },
];

/* Vaste prijzen op elke dienstpagina. Een prijs is het soort feit dat AI
   overneemt. Bijna geen bureau noemt hem. */
function Prijzen() {
  return (
    <section className="py-16 sm:py-20 bg-bg-alt">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">
          Vaste prijzen
        </h2>
        <p className="mt-3 text-center text-text-light">
          Alle prijzen zijn excl. btw en eenmalig, zonder abonnement.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prijzen.map((p) => (
            <Link
              key={p.naam}
              href={p.href}
              className="rounded-2xl border border-border bg-white p-6 hover:border-accent transition-colors"
            >
              <p className="font-semibold text-navy">{p.naam}</p>
              <p className="mt-1 text-3xl font-bold text-accent">{p.prijs}</p>
              <p className="mt-2 text-sm text-text-light">{p.wat}</p>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-text-light">
          Twijfel je? Begin met de meting. Kies je binnen 3 maanden alsnog de
          audit, dan gaat de €295 van de prijs af.
        </p>
      </div>
    </section>
  );
}

export default function DienstPaginaLayout({ pagina }: { pagina: DienstPagina }) {
  const url = `${base}/${pagina.slug}`;
  const cta = pagina.cta ?? { label: "Start je GEO-audit", href: "/start" };

  const dienstSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#dienst`,
    name: pagina.naam,
    description: pagina.description,
    url,
    serviceType: "Generative Engine Optimization (GEO)",
    provider: { "@id": `${base}/#organization` },
    areaServed: pagina.plaats
      ? { "@type": "City", name: pagina.plaats }
      : { "@type": "Country", name: "Nederland" },
    inLanguage: "nl-NL",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pagina.faq.map((f) => ({
      "@type": "Question",
      name: f.vraag,
      acceptedAnswer: { "@type": "Answer", text: f.antwoord },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: pagina.naam, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={dienstSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Kop */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-bg">
        <div className="aurora" aria-hidden="true">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-text-light" aria-label="Kruimelpad">
            <Link href="/" className="hover:text-navy transition-colors">
              Home
            </Link>{" "}
            <span aria-hidden="true">/</span>{" "}
            <span className="text-navy">{pagina.naam}</span>
          </nav>
          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            {pagina.h1}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-navy leading-relaxed font-medium">
            {pagina.intro}
          </p>
        </div>
      </section>

      {/* Inhoud */}
      <section className="pb-16 sm:pb-20 bg-bg">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {pagina.content}
        </div>
      </section>

      <Prijzen />

      {/* Vragen: met <details> staan de antwoorden altijd in de HTML */}
      <section className="py-16 sm:py-20 bg-bg">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-10">
            Veelgestelde vragen
          </h2>
          <div className="space-y-3">
            {pagina.faq.map((f) => (
              <details
                key={f.vraag}
                name="dienst-faq"
                className="group rounded-xl border border-border bg-white overflow-hidden"
              >
                <summary className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-semibold text-navy pr-4">{f.vraag}</span>
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-text-light transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-text-light leading-relaxed">{f.antwoord}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Knop */}
      <section className="py-16 sm:py-20 bg-bg-alt">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href={cta.href}
            className="glow-accent inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white hover:bg-accent-hover"
          >
            {cta.label}
          </Link>
          <p className="mt-4 text-sm text-text-light">
            Liever eerst lezen hoe het gaat?{" "}
            <Link href="/werkwijze" className="font-medium text-navy hover:text-accent transition-colors">
              Bekijk de werkwijze
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
