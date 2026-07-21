import Link from "next/link";
import DeliverableCard from "@/components/DeliverableCard";
import CaseCard from "@/components/CaseCard";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";

/* ───────── Hero ───────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg">
      <div className="aurora" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>
      <div
        className="absolute inset-0 bg-dots opacity-70 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-sm font-medium text-navy backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            GEO &middot; Generative Engine Optimization
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            Zorg dat AI jou kent.{" "}
            <span className="text-gradient">Niet alleen je concurrent.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-text-light max-w-2xl leading-relaxed">
            ChatGPT, Perplexity en Google AI bepalen steeds vaker wie klanten
            bellen. Foundable analyseert jouw website en levert alles wat AI
            nodig heeft om jou te begrijpen. Geen vage adviezen, maar een
            compleet pakket dat klaar is om te implementeren.
          </p>

          <p className="mt-6 text-lg font-semibold text-navy">
            Gevonden worden begint met begrepen worden.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/score"
              className="glow-accent inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white hover:bg-accent-hover"
            >
              Vraag je gratis AI Visibility Score aan
            </Link>
            <Link
              href="/werkwijze"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-white/60 px-6 py-3.5 text-base font-semibold text-navy backdrop-blur hover:bg-navy hover:text-white transition-colors"
            >
              Bekijk hoe het werkt
            </Link>
          </div>

          <p className="mt-6 text-sm text-text-light">
            Done-for-you GEO-audit.{" "}
            <span className="line-through">&euro;999</span>{" "}
            <span className="font-semibold text-navy">&euro;499 excl. BTW</span>.
            Tijdelijke introductieprijs.
          </p>
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
        <Reveal className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            De manier waarop mensen zoeken, verandert.
          </h2>
          <div className="mt-8 space-y-6 text-lg text-text-light leading-relaxed">
            <p>
              Google is nog steeds groot. Maar steeds meer mensen stellen hun
              vraag aan ChatGPT, Claude, Perplexity of Google AI, en krijgen
              direct een antwoord, zonder door te klikken naar een website.
            </p>
            <p>
              Je Google-positie zegt niets over hoe zichtbaar je bent in die
              antwoorden. Want AI werkt anders dan Google. Het zoekt niet naar
              je website. Het leest hem, en beslist op basis daarvan wie
              het aanbeveelt. Is je website vaag, onvolledig of slecht
              geschreven? Dan kiezen ze simpelweg iemand anders.
            </p>
            <p>
              Wie nu alleen op Google inzet, mist een steeds groter publiek. En
              wie straks wil inhalen, heeft een achterstand.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── Deliverables ───────── */
function Deliverables() {
  const deliverables = [
    {
      title: "PowerPoint Auditrapport (15 slides)",
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
        "Alle aanbevelingen zijn uitgewerkt als stap-voor-stap instructies voor jouw specifieke platform. Of je nou WordPress, Shopify of iets anders gebruikt, het staat erin.",
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
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Een compleet pakket. Geen losse tips.
          </h2>
          <p className="mt-4 text-lg text-text-light">
            Een done-for-you GEO-audit die ervoor zorgt dat AI jouw website
            &eacute;cht begrijpt.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((d, i) => (
            <Reveal key={d.title} delay={i * 70} className="h-full">
              <DeliverableCard
                icon={d.icon}
                title={d.title}
                description={d.description}
              />
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-center text-text-light">
          De deliverables zijn &eacute;&eacute;n geheel, geen losse lijstjes.
          Samen vertellen ze AI precies wie je bent.
        </p>
      </div>
    </section>
  );
}

/* ───────── Promise ───────── */
function Promise() {
  return (
    <section className="glow-radial py-20 sm:py-28 bg-navy text-white">
      <Reveal className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-3xl sm:text-4xl font-bold leading-tight">
          Gevonden worden begint met begrepen worden.
        </p>
        <p className="mt-3 text-lg text-accent font-medium">
          Word gevonden in het AI-tijdperk.
        </p>
        <p className="mt-8 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
          Wij geven AI alles wat het nodig heeft om jou te begrijpen. Hoe
          prominent je daarna verschijnt, bouw je stap voor stap op, aan
          de hand van onze tips.
        </p>
        <p className="mt-6 text-sm text-white/50 max-w-2xl mx-auto leading-relaxed">
          We garanderen geen aanbevelingen. Hoe prominent je verschijnt in
          ChatGPT hangt ook af van je reviews, concurrentie en hoe vaak je
          online vermeld wordt. Wat we w&eacute;l garanderen: na deze audit
          heeft AI geen excuus meer om jou niet te begrijpen. Geen enkele stap
          is een garantie, maar samen verschuiven ze de kans duidelijk in jouw
          voordeel.
        </p>
      </Reveal>
    </section>
  );
}

/* ───────── Pricing ───────── */
function Check() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "De meting",
      tagline: "Weet waar je staat",
      listPrice: "€295",
      price: "€147,50",
      meta: ["Eenmalig, alles per mail"],
      items: [
        "Hoe vaak AI je noemt in echte antwoorden",
        "Wat AI over je vertelt, en of dat klopt",
        "De AI Visibility Score van je website",
        "De vijf namen die AI in jouw vak wél noemt",
        "Eén A4 met de cijfers en de logische vervolgstap",
      ],
      note: "Doe je binnen 3 maanden een audit, dan telt de meting volledig als aanbetaling.",
      cta: { label: "Vraag de meting aan", href: "/start?keuze=meting" },
      featured: false,
    },
    {
      name: "De audit",
      tagline: "Het volledige pakket",
      listPrice: "€999",
      price: "€499",
      meta: ["Betaling: 50% bij start, 50% bij oplevering", "Doorlooptijd: 2 weken"],
      items: [
        "PowerPoint auditrapport (15 slides)",
        "Content Optimization PDF",
        "JSON-LD structured data code",
        "Platform-specifieke implementatiegids",
        "Tips om beter aanbevolen te worden door AI",
        "Nulmeting vooraf, nameting na 90 dagen",
      ],
      note: "Je ziet zwart op wit wat het werk heeft gedaan.",
      cta: { label: "Start je audit", href: "/start" },
      featured: true,
    },
    {
      name: "De audit met nazorg",
      tagline: "De audit, plus twee bijstuurrondes",
      listPrice: "€1.750",
      price: "€875",
      meta: ["Betaling: 50% bij start, 50% bij oplevering"],
      items: [
        "Alles uit de audit",
        "Na 3 maanden: opnieuw meten en je site nalopen",
        "Na 6 maanden nog een ronde",
        "Verbeterpunten zo aangeleverd dat je bouwer ze direct kan plaatsen",
      ],
      note: "AI beweegt traag. Juist in die eerste maanden is bijsturen waar de winst zit.",
      cta: { label: "Vraag de audit met nazorg aan", href: "/start?keuze=nazorg" },
      featured: false,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-bg-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Drie manieren om te starten.
          </h2>
          <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Tijdelijke introductiekorting &middot; 50% op alles
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
          {tiers.map((tier, i) => {
            const card = (
              <div className="flex h-full flex-col rounded-2xl bg-white p-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-navy">{tier.name}</h3>
                  <p className="mt-1 text-sm text-text-light">{tier.tagline}</p>

                  <p className="mt-5 flex items-end justify-center gap-3">
                    <span className="text-lg font-semibold text-text-light line-through decoration-2">
                      {tier.listPrice}
                    </span>
                    <span
                      className={`${tier.featured ? "shimmer" : "text-navy"} text-4xl font-bold leading-none`}
                    >
                      {tier.price}
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-text-light">excl. BTW</p>

                  <div className="mt-3 space-y-0.5">
                    {tier.meta.map((line) => (
                      <p key={line} className="text-sm text-text-light">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-left">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check />
                      <span className="text-sm text-text">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-sm text-text-light leading-relaxed">
                  {tier.note}
                </p>

                <div className="mt-auto pt-6">
                  <Link
                    href={tier.cta.href}
                    className={
                      tier.featured
                        ? "glow-accent inline-flex w-full items-center justify-center rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white hover:bg-accent-hover"
                        : "inline-flex w-full items-center justify-center rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
                    }
                  >
                    {tier.cta.label}
                  </Link>
                </div>
              </div>
            );

            return (
              <Reveal key={tier.name} delay={i * 70} className="h-full">
                {tier.featured ? (
                  <div className="h-full rounded-[1.1rem] bg-gradient-to-br from-accent/60 via-amber/40 to-navy/30 p-[1.5px] shadow-[0_30px_70px_-30px_rgba(249,115,22,0.45)]">
                    {card}
                  </div>
                ) : (
                  <div className="h-full rounded-2xl border border-border shadow-sm">
                    {card}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>

        <p className="mt-6 text-center text-sm text-text-light">
          Geen abonnement. Geen maandelijkse kosten. Eenmalig.
        </p>
        <p className="mt-2 text-center text-sm text-text-light">
          Liever eerst gratis kijken waar je staat? Vraag de{" "}
          <Link
            href="/score"
            className="text-accent hover:text-accent-hover transition-colors"
          >
            gratis AI Visibility Score
          </Link>{" "}
          aan.
        </p>
      </div>
    </section>
  );
}

/* ───────── Cases Preview ───────── */
function CasesPreview() {
  return (
    <section className="py-20 sm:py-28 bg-bg">
      <Reveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center mb-12">
          Bedrijven die al gevonden worden
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CaseCard
            name="Klaas Kroezen"
            sector="Salestraining en keynotes"
            result="Zijn site was al sterk gebouwd. De audit vond wat er nog ontbrak en de belangrijkste punten hebben we samen in &eacute;&eacute;n middag doorgevoerd. Zijn review: een 5,0 op Google."
            href="/cases#klaas-kroezen"
          />
          <CaseCard
            name="Ory aan Zee"
            sector="Vakantieverhuur"
            result="AI begrijpt nu de locatie, sfeer en doelgroep van Ory aan Zee volledig, en beveelt het aan bij de juiste zoekopdrachten."
            href="/cases#ory-aan-zee"
          />
          <CaseCard
            name="Bootzeil.nl"
            sector="Maatwerk bootzeilen en dekzeilen"
            result="Een technische niche met veel jargon. Na de audit weet AI precies wat Bootzeil.nl aanbiedt en voor wie."
            href="/cases#bootzeil"
          />
        </div>
      </Reveal>
    </section>
  );
}

/* ───────── JSON-LD ───────── */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wat is GEO en waarom zou ik er iets mee doen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GEO staat voor Generative Engine Optimization: je website zo inrichten dat AI-systemen zoals ChatGPT, Perplexity, Claude en Google AI je begrijpen en aanbevelen. Steeds meer mensen vragen eerst een AI om advies in plaats van te googelen. Begrijpt de AI jouw website niet goed, dan noemt hij gewoon iemand anders.",
      },
    },
    {
      "@type": "Question",
      name: "Hoe werkt de audit precies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We analyseren je website grondig: wat AI ziet, wat AI mist en wat AI verkeerd begrijpt. Daarna leveren we een compleet pakket met rapport, herschreven teksten, JSON-LD code en implementatie-instructies. Jij hoeft maar \u00e9\u00e9n vraag te beantwoorden. De rest doen wij.",
      },
    },
    {
      "@type": "Question",
      name: "Wat heb ik zelf nodig om te doen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Weinig. Na je aanbetaling stellen we \u00e9\u00e9n vraag: welke klant of dienst wil je het meest aantrekken via AI? Daarna gaan we aan de slag. Na levering implementeer jij de aanbevelingen zelf, of laat je het doen door je webdesigner.",
      },
    },
    {
      "@type": "Question",
      name: "Wanneer zie ik resultaat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dat verschilt per website en per zoekmachine. Sommige klanten zien al binnen enkele weken een verschil in hoe AI hun bedrijf beschrijft. Een garantie op snelheid geven we niet, maar je website is na de audit aantoonbaar beter begrijpelijk voor AI.",
      },
    },
    {
      "@type": "Question",
      name: "Kan ik eerst alleen laten meten waar ik sta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, dat is de meting. Je krijgt één A4 met hoe vaak AI je noemt, wat AI over je vertelt, je AI Visibility Score en de vijf namen die AI in jouw vak wél noemt. Doe je binnen 3 maanden een audit, dan telt de meting volledig als aanbetaling.",
      },
    },
    {
      "@type": "Question",
      name: "Wat is het verschil tussen de audit en de audit met nazorg?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bij de audit meten we vooraf en op dag 90 opnieuw, zodat je zwart op wit ziet wat het werk heeft gedaan. Bij de audit met nazorg komen we daarna nog twee keer terug: na 3 en na 6 maanden meten we opnieuw, lopen we je site na en leveren we de verbeterpunten zo aan dat je bouwer ze direct kan plaatsen. AI beweegt traag, dus juist in die eerste maanden is bijsturen waar de winst zit.",
      },
    },
    {
      "@type": "Question",
      name: "Garanderen jullie dat ik aanbevolen word door ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nee. Dat doet niemand die eerlijk is. Hoe prominent je verschijnt hangt ook af van externe factoren zoals reviews, concurrentie en vermeldingen. Wat we w\u00e9l garanderen: we geven AI alles wat het nodig heeft om jou te begrijpen. De rest bouw je stap voor stap op met onze tips.",
      },
    },
    {
      "@type": "Question",
      name: "Voor wie is dit geschikt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Foundable werkt vooral met gevestigde experts die zichzelf verkopen: trainers, sprekers, auteurs en executive coaches. Daarnaast met gespecialiseerde advocaten en boutique consultants. De rode draad: je hebt een bewezen naam, je opdrachten zijn wat waard, en je verkoopt jezelf via je eigen website. Juist dan telt het of AI je begrijpt, want bij dat soort keuzes vraagt de klant steeds vaker eerst een AI om advies.",
      },
    },
  ],
};

/* ───────── Page ───────── */
export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
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
