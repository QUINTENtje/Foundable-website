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
            ChatGPT, Claude en Gemini bepalen steeds vaker wie klanten
            bellen. Foundable analyseert jouw website en levert alles wat AI
            nodig heeft om jou te begrijpen. Geen vage adviezen, maar een
            compleet pakket dat klaar is om te plaatsen: de teksten en de
            code zijn al gemaakt.
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
            De complete GEO-audit.{" "}
            <span className="font-semibold text-navy">&euro;999 excl. BTW</span>.
            Vaste prijs.
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
              vraag aan ChatGPT, Claude, Perplexity of Google AI. Ze krijgen
              direct een antwoord, zonder door te klikken naar een website.
            </p>
            <p>
              Je Google-positie zegt niets over hoe zichtbaar je bent in die
              antwoorden. Want AI werkt anders dan Google. Het zoekt niet naar
              je website. Het leest hem en beslist op basis daarvan wie
              het aanbeveelt. Is je website vaag, onvolledig of slecht
              geschreven? Dan kiest AI gewoon iemand anders.
            </p>
            <p>
              Vaag betekent daarbij iets heel alledaags. Een vakantiehuis dat
              &lsquo;dicht bij het strand&rsquo; ligt, klinkt prima. Alleen
              weet AI daar niks mee te beginnen. &lsquo;Op 50 meter van het
              strand&rsquo; wel, want dat is een feit waarmee het je kan
              aanbevelen. Dat verschil zit op bijna elke pagina van bijna elke
              website.
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
      title: "Begin hier",
      description:
        "De kortste route door het pakket: je acties op volgorde, met de grootste winst bovenaan. Wie alleen dit document afwerkt, heeft het grootste gat al gedicht.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 17.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
      ),
    },
    {
      title: "Nieuwe teksten voor je site die AI begrijpt",
      description:
        "We analyseren de teksten op jouw website en leveren verbeterde versies die AI wel begrijpt, geschreven in jouw eigen toon. Jij hoeft ze alleen te kopi\u00ebren.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
      ),
    },
    {
      title: "FAQ voor op je site",
      description:
        "Tien vragen die jouw klanten echt stellen, met de antwoorden erbij. De tekst is woordelijk gelijk aan het codeblok, dus wat je bezoeker leest is wat AI leest.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
        </svg>
      ),
    },
    {
      title: "JSON-LD structured data code",
      description:
        "Structured data vertelt AI wie je bent, wat je doet en waar je zit. Wij schrijven de code. Jij of je developer plakt hem in de website. Dat is alles.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      ),
    },
    {
      title: "Platformspecifieke implementatiegids",
      description:
        "Alle aanbevelingen zijn stap voor stap uitgewerkt voor jouw platform. Of je nou WordPress, Shopify of iets anders gebruikt, het staat erin.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
        </svg>
      ),
    },
    {
      title: "Analyse: de grootste winst buiten je site",
      description:
        "AI kijkt verder dan je website: reviews, vermeldingen en externe bronnen tellen mee. Je krijgt een analyse waar voor jou de grootste winst te halen valt, met tips hoe je die pakt.",
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
            Een complete GEO-audit die ervoor zorgt dat AI jouw website echt begrijpt.
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
          De onderdelen zijn &eacute;&eacute;n geheel, geen losse lijstjes.
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
          online vermeld wordt. Wat we wel garanderen: na deze audit
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
      price: "€295",
      meta: [],
      items: [
        "Hoe vaak AI je noemt, gemeten over 225 echte antwoorden",
        "Wat AI over je vertelt en of dat klopt",
        "De AI Visibility Score van je website",
        "De top 10 namen die AI in jouw vak noemt",
        "Twintig vragen die jouw klanten stellen plus vijf over jou, eigen vragenlijst kan op aanvraag",
        "Eén A4 met de cijfers en de logische vervolgstap",
      ],
      note: "Doe je binnen 3 maanden een audit, dan telt de meting volledig als aanbetaling.",
      cta: { label: "Vraag de meting aan", href: "/start?keuze=meting" },
      featured: false,
    },
    {
      name: "De audit",
      tagline: "Het volledige pakket",
      price: "€999",
      meta: ["Betaling: 50% bij start, 50% bij oplevering", "Doorlooptijd: 2 weken"],
      items: [
        "Begin hier: je acties op volgorde, de grootste winst bovenaan",
        "Nieuwe teksten voor je site die AI begrijpt",
        "FAQ met vragen en antwoorden voor op je site",
        "JSON-LD structured data code",
        "Platformspecifieke implementatiegids",
        "Analyse waar buiten je site de grootste winst te halen valt, met tips hoe je die pakt",
        "Nulmeting vooraf, nameting na 90 dagen",
      ],
      note: "",
      cta: { label: "Start je audit", href: "/start" },
      featured: true,
    },
    {
      name: "De audit met nazorg",
      tagline: "De audit, plus twee bijstuurrondes",
      price: "€1.750",
      meta: ["Betaling: 50% bij start, 50% bij oplevering"],
      items: [
        "Alles uit de audit",
        "Na 3 maanden: opnieuw meten en je site nalopen",
        "Na 6 maanden nog een ronde",
        "Verbeterpunten per ronde meteen uitgewerkt",
      ],
      note: "In de eerste maanden wordt duidelijk waar AI je oppakt en waar nog niet. Precies daar sturen we bij.",
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
          <p className="mt-5 text-lg text-text-light">
            Vaste prijzen, alles inbegrepen.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
          {tiers.map((tier, i) => {
            const card = (
              <div className="flex h-full flex-col rounded-2xl bg-white p-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-navy">{tier.name}</h3>
                  <p className="mt-1 text-sm text-text-light">{tier.tagline}</p>

                  <p className="mt-5 flex items-end justify-center">
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

                {tier.note && (
                  <p className="mt-5 text-sm text-text-light leading-relaxed">
                    {tier.note}
                  </p>
                )}

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
            result="Sfeerwoorden vervangen door concrete feiten over de locatie, de prijs en voor wie de woningen geschikt zijn. Haar review: ook een 5,0 op Google."
            href="/cases#ory-aan-zee"
          />
          <CaseCard
            name="Bootzeil.nl"
            sector="Maatwerk bootzeilen en dekzeilen"
            result="Een technische niche met veel jargon. Ze plaatsten de punten uit de audit zelf: hun reviews, de vragen van kopers met antwoord en de prijzen zijn nu leesbaar voor AI."
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
        text: "We analyseren je website grondig: wat AI ziet, wat AI mist en wat AI verkeerd begrijpt. Daarna leveren we een compleet pakket: je acties op volgorde, herschreven teksten, een FAQ voor op je site, JSON-LD-code, een implementatiegids voor jouw platform en een analyse waar buiten je site de grootste winst te halen valt. Jij hoeft maar \u00e9\u00e9n vraag te beantwoorden. De rest doen wij.",
      },
    },
    {
      "@type": "Question",
      name: "Krijg ik alleen advies of doen jullie het ook?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wij doen het. De nieuwe teksten en de code zijn al gemaakt als je het pakket ontvangt. Het enige wat nog moet gebeuren is plaatsen. Daarvoor krijg je een gids die per punt laat zien waar het in jouw platform moet staan: kopi\u00ebren en plakken, voor jou of je websitebouwer. Je krijgt alles klaar om te plaatsen en je hoeft ons geen inloggegevens te geven. Loop je ergens vast, dan help ik je er per mail doorheen tot alles staat. Heb je geen websitebouwer en zie je op tegen het plaatsen? Zeg dat bij je aanvraag, dan zoeken we samen de handigste route.",
      },
    },
    {
      "@type": "Question",
      name: "Wat verandert er aan mijn site? Zien mijn bezoekers dat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Twee dingen. Je bestaande teksten worden aangescherpt waar AI ze nu niet of verkeerd leest, in jouw eigen toon, dus je site blijft gewoon jouw verhaal. Daarnaast komt er een codelaag bij die bezoekers niet zien maar AI wel leest. We bouwen geen verborgen pagina's en gebruiken geen trucs. Daar prikken deze systemen doorheen. Wat AI over je leest is precies wat je bezoekers ook zien.",
      },
    },
    {
      "@type": "Question",
      name: "Wat moet ik zelf doen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Weinig. Vooraf beantwoord je \u00e9\u00e9n vraag: welke klant of dienst wil je het meest aantrekken via AI? Daarna gaan wij aan het werk. Na levering is het plaatsen kopi\u00ebren en plakken met de gids erbij. De meeste punten zijn een paar minuten werk. En je websitebouwer kan het ook van je overnemen.",
      },
    },
    {
      "@type": "Question",
      name: "Hoe meten jullie of het werkt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Met echte cijfers. Vooraf stellen we AI twintig vragen die jouw klanten zouden kunnen stellen, plus vijf vragen over jou. Elke vraag stellen we drie keer aan ChatGPT, Claude en Gemini, de drie die jouw klanten het meest gebruiken. Dat zijn samen 225 echte antwoorden, waarin we tellen hoe vaak jij genoemd wordt en lezen wat AI over je vertelt. Op dag 90 draaien we precies dezelfde meting opnieuw. Dan zie je het verschil gewoon in cijfers. Het werk helpt ook in systemen die we niet meten, zoals Perplexity. Hoe snel het gaat verschilt per AI-systeem.",
      },
    },
    {
      "@type": "Question",
      name: "Kan ik eerst alleen laten meten waar ik sta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, dat is de meting. We kijken over 225 echte antwoorden hoe vaak AI je noemt en wat AI over je vertelt. Je krijgt één A4 met die cijfers, je AI Visibility Score en de top 10 namen die AI in jouw vak noemt. Wij maken de vragen voor jouw vak: twintig die je klanten stellen, plus vijf over jou. Een eigen vragenlijst aanleveren kan op aanvraag. Doe je binnen 3 maanden een audit, dan telt de meting volledig als aanbetaling.",
      },
    },
    {
      "@type": "Question",
      name: "Wat is het verschil tussen de audit en de audit met nazorg?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bij de audit meten we vooraf en op dag 90 opnieuw, zodat je het verschil ziet. Bij de audit met nazorg komen we daarna nog twee keer terug: na 3 en na 6 maanden meten we opnieuw, lopen we je site na en werken we de verbeterpunten meteen voor je uit. In die eerste maanden wordt duidelijk waar AI je oppakt en waar nog niet. Precies daar sturen we bij.",
      },
    },
    {
      "@type": "Question",
      name: "Mijn site is al goed geoptimaliseerd. Wat levert dit mij dan op?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dan zit jouw winst vooral buiten je site. AI haalt zijn antwoorden ook uit reviews, artikelen, profielen en andere externe bronnen. Juist daar liggen bij een goede site de kansen. De audit zoekt uit waar AI in jouw vak zijn informatie vandaan haalt en op welke van die plekken jij nog ontbreekt, met per plek uitgewerkt wat daar moet staan. Zo ging het bij Klaas Kroezen: zijn site was al sterk en bijna al zijn actiepunten lagen daarbuiten. Wil je eerst zeker weten of er iets te winnen valt? Daar is de meting voor.",
      },
    },
    {
      "@type": "Question",
      name: "Kan ik een voorbeeld zien voordat ik besluit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Op de casepagina lees je wat de audit bij eerdere klanten opleverde. Wil je een echt document uit een audit inzien, mail dan even, dan sturen we een voorbeeld mee.",
      },
    },
    {
      "@type": "Question",
      name: "Garanderen jullie dat ik aanbevolen word door ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nee. Dat doet niemand die eerlijk is. Hoe prominent je verschijnt hangt ook af van externe factoren zoals reviews, concurrentie en vermeldingen. Wat we wel garanderen: we geven AI alles wat het nodig heeft om jou te begrijpen. De rest bouw je stap voor stap op met onze tips.",
      },
    },
    {
      "@type": "Question",
      name: "Voor wie is dit geschikt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Foundable werkt vooral met gevestigde experts die zichzelf verkopen: trainers, sprekers, auteurs en executive coaches. Daarnaast met gespecialiseerde advocaten en boutique consultants. De rode draad: je hebt een bewezen naam, je opdrachten zijn wat waard en je verkoopt jezelf via je eigen website. Juist dan telt het of AI je begrijpt, want bij dat soort keuzes vraagt de klant steeds vaker eerst een AI om advies.",
      },
    },
    {
      "@type": "Question",
      name: "Ik kreeg een mail van jullie. Hoe kwamen jullie bij mij terecht?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die mails stuur ik zelf, één voor één, nadat ik echt naar je site heb gekeken. Ik zoek gericht naar gevestigde experts per vakgebied en bekijk hun sites zoals een AI dat doet. Wat ik in de mail noem, heb ik zelf op of rond jouw site gezien.",
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
