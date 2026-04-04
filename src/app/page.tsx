import Link from "next/link";
import DeliverableCard from "@/components/DeliverableCard";
import CaseCard from "@/components/CaseCard";
import FAQ from "@/components/FAQ";

/* ───────── Hero ───────── */
function Hero() {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            Zorg dat AI jou kent &mdash; niet alleen je concurrent.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-text-light max-w-2xl leading-relaxed">
            ChatGPT, Perplexity en Google AI bepalen steeds vaker wie klanten
            bellen. Foundable analyseert jouw website en levert alles wat AI
            nodig heeft om jou te begrijpen. Geen vage adviezen &mdash; een
            compleet pakket, klaar om te implementeren.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/score"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-colors"
            >
              Vraag je gratis AI Visibility Score aan
            </Link>
            <Link
              href="/werkwijze"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3.5 text-base font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
            >
              Bekijk hoe het werkt
            </Link>
          </div>
          <div className="mt-6">
            <p className="text-sm text-text-light mb-2">Klaar om te beginnen?</p>
            <Link
              href="/start"
              className="inline-flex items-center justify-center rounded-lg bg-navy px-6 py-3.5 text-base font-semibold text-white hover:bg-navy-light transition-colors"
            >
              Start je audit &mdash; &euro;595
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Problem ───────── */
function Problem() {
  return (
    <section className="py-20 sm:py-28 bg-bg-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            AI leest je website. Maar begrijpt het je?
          </h2>
          <p className="mt-6 text-lg text-text-light leading-relaxed">
            Google kennen we allemaal &mdash; je zorgt dat je gevonden wordt.
            Maar ChatGPT, Perplexity en Google AI werken anders. Die zoeken
            niet naar je website, ze lezen hem om te beslissen wie ze
            aanbevelen. Is jouw website vaag, onvolledig of slecht geschreven?
            Dan kiezen ze simpelweg iemand anders.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl bg-white p-8 border border-border">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-navy">AI slaat je over</h3>
            <p className="mt-2 text-text-light leading-relaxed text-sm">
              De meeste websites missen concrete feiten, locatiedata en
              structuur. AI snapt ze niet &mdash; en beveelt ze daarom niet
              aan.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 border border-border">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-navy">
              Je website vertelt het verkeerde verhaal
            </h3>
            <p className="mt-2 text-text-light leading-relaxed text-sm">
              Wat jij op je website zet en wat AI daaruit opmaakt zijn twee
              verschillende dingen. Foundable analyseert wat AI ziet &mdash; en
              zorgt dat het klopt met wie je echt bent.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 border border-border">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-navy">
              Wie wacht, verliest
            </h3>
            <p className="mt-2 text-text-light leading-relaxed text-sm">
              AIO is nieuw in Nederland. Wie nu begint, bouwt een voorsprong
              die straks moeilijk in te halen is.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Deliverables ───────── */
function Deliverables() {
  const deliverables = [
    {
      title: "PowerPoint Auditrapport \u2014 15 slides",
      description:
        "Je ziet precies hoe AI jouw website nu leest. Je krijgt een overzicht van wat ontbreekt, wat onduidelijk is en wat er als eerste moet veranderen. Inclusief prioriteitenlijst.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>
      ),
    },
    {
      title: "Content Optimization PDF",
      description:
        "We analyseren de teksten op jouw website en leveren verbeterde versies die AI w\u00e9l begrijpt. Jij hoeft ze alleen te kopi\u00ebren.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
      ),
    },
    {
      title: "JSON-LD Structured Data code",
      description:
        "Structured data vertelt AI wie je bent, wat je doet en waar je zit. Wij schrijven de code. Jij of je developer plakt hem in de website. Dat is alles.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      ),
    },
    {
      title: "Platform-specifieke implementatiegids",
      description:
        "Alle aanbevelingen zijn uitgewerkt als stap-voor-stap instructies voor jouw specifieke platform. Of je nou WordPress, Shopify of iets anders gebruikt \u2014 het staat erin.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
        </svg>
      ),
    },
    {
      title: "Tips om beter aanbevolen te worden door AI",
      description:
        "AI-zichtbaarheid gaat verder dan je website. Je leert hoe je via reviews, vermeldingen en externe bronnen je autoriteit opbouwt bij ChatGPT, Perplexity en Google AI.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Een compleet pakket. Geen losse tips.
          </h2>
          <p className="mt-4 text-lg text-text-light">
            Een done-for-you AIO audit die ervoor zorgt dat AI jouw website
            &eacute;cht begrijpt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((d) => (
            <DeliverableCard
              key={d.title}
              icon={d.icon}
              title={d.title}
              description={d.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Promise ───────── */
function Promise() {
  return (
    <section className="py-20 sm:py-28 bg-navy text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-3xl sm:text-4xl font-bold leading-tight">
          We maken je vindbaar, niet beroemd.
        </p>
        <p className="mt-8 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
          Wij geven AI alles wat het nodig heeft om jou te begrijpen. Hoe
          prominent je daarna verschijnt, bouw je stap voor stap op &mdash; aan
          de hand van onze tips.
        </p>
        <p className="mt-6 text-sm text-white/50 max-w-2xl mx-auto leading-relaxed">
          We garanderen geen aanbevelingen. Hoe prominent je verschijnt in
          ChatGPT hangt ook af van je reviews, concurrentie en hoe vaak je
          online vermeld wordt. Wat we w&eacute;l garanderen: na deze audit
          heeft AI geen excuus meer om jou niet te begrijpen.
        </p>
      </div>
    </section>
  );
}

/* ───────── Pricing ───────── */
function Pricing() {
  return (
    <section className="py-20 sm:py-28 bg-bg-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            E&eacute;n prijs. Alles inbegrepen.
          </h2>
        </div>

        <div className="mt-12 mx-auto max-w-lg">
          <div className="rounded-2xl bg-white border-2 border-navy p-8 shadow-sm">
            <div className="text-center">
              <p className="mt-2">
                <span className="text-5xl font-bold text-navy">
                  &euro;595
                </span>
                <span className="text-text-light ml-2">excl. BTW</span>
              </p>
              <p className="mt-2 text-sm text-text-light">
                Betaling: 50% bij start, 50% bij levering
              </p>
              <p className="text-sm text-text-light">
                Doorlooptijd: gemiddeld 5&ndash;7 werkdagen
              </p>
            </div>

            <ul className="mt-8 space-y-3 text-left">
              {[
                "PowerPoint auditrapport (15 slides)",
                "Content Optimization PDF",
                "JSON-LD structured data code",
                "Platform-specifieke implementatiegids",
                "Tips om beter aanbevolen te worden door AI",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-text">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/score"
              className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-colors"
            >
              Start met je gratis AI Visibility Score
            </Link>
            <Link
              href="/start"
              className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-navy px-6 py-3.5 text-base font-semibold text-white hover:bg-navy-light transition-colors"
            >
              Start je audit &mdash; &euro;595
            </Link>
          </div>

          <p className="mt-4 text-center text-sm text-text-light">
            Geen abonnement. Geen maandelijkse kosten. Eenmalig.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────── Cases Preview ───────── */
function CasesPreview() {
  return (
    <section className="py-20 sm:py-28 bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center mb-12">
          Bedrijven die al gevonden worden
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CaseCard
            name="Ory aan Zee"
            sector="Vakantieverhuur"
            result="AI begrijpt nu de locatie, sfeer en doelgroep van Ory aan Zee volledig &mdash; en beveelt het aan bij de juiste zoekopdrachten."
            href="/cases#ory-aan-zee"
          />
          <CaseCard
            name="Bootzeil.nl"
            sector="Maatwerk bootzeilen en dekzeilen"
            result="Een technische niche met veel jargon. Na de audit weet AI precies wat Bootzeil.nl aanbiedt en voor wie."
            href="/cases#bootzeil"
          />
        </div>
      </div>
    </section>
  );
}

/* ───────── JSON-LD ───────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Foundable",
  url: "https://foundable.nl",
  email: "quinten@foundable.nl",
  telephone: "06-38389591",
  founder: "Quinten Orij",
  foundingLocation: "Amsterdam, Nederland",
  description:
    "Foundable helpt Nederlandse MKB-bedrijven zichtbaar worden in AI-zoekmachines zoals ChatGPT, Perplexity en Google AI via done-for-you AIO audits.",
  areaServed: "Nederland",
  priceRange: "\u20ac595 excl. BTW",
  knowsAbout: [
    "AIO",
    "AI Optimization",
    "AI zichtbaarheid",
    "structured data",
    "JSON-LD",
    "ChatGPT zichtbaarheid",
  ],
};

/* ───────── Page ───────── */
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Problem />
      <Deliverables />
      <Promise />
      <Pricing />
      <CasesPreview />
      <FAQ />
    </>
  );
}
