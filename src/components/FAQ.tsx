"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Wat is GEO en waarom zou ik er iets mee doen?",
    answer:
      "GEO staat voor Generative Engine Optimization: je website zo inrichten dat AI-systemen zoals ChatGPT, Perplexity, Claude en Google AI je begrijpen en aanbevelen. Steeds meer mensen vragen eerst een AI om advies in plaats van te googelen. Begrijpt de AI jouw website niet goed, dan noemt hij gewoon iemand anders.",
  },
  {
    question: "Hoe werkt de audit precies?",
    answer:
      "We analyseren je website grondig: wat AI ziet, wat AI mist en wat AI verkeerd begrijpt. Daarna leveren we een compleet pakket: je acties op volgorde, herschreven teksten, een FAQ voor op je site, JSON-LD-code, een implementatiegids voor jouw platform en een analyse waar buiten je site de grootste winst te halen valt. Jij hoeft maar \u00e9\u00e9n vraag te beantwoorden. De rest doen wij.",
  },
  {
    question: "Krijg ik alleen advies of doen jullie het ook?",
    answer:
      "Wij doen het. De nieuwe teksten en de code zijn al gemaakt als je het pakket ontvangt. Het enige wat nog moet gebeuren is plaatsen. Daarvoor krijg je een gids die per punt laat zien waar het in jouw platform moet staan: kopi\u00ebren en plakken, voor jou of je websitebouwer. Je krijgt alles klaar om te plaatsen en je hoeft ons geen inloggegevens te geven. Loop je ergens vast, dan help ik je er per mail doorheen tot alles staat. Heb je geen websitebouwer en zie je op tegen het plaatsen? Zeg dat bij je aanvraag, dan zoeken we samen de handigste route.",
  },
  {
    question: "Wat verandert er aan mijn site? Zien mijn bezoekers dat?",
    answer:
      "Twee dingen. Je bestaande teksten worden aangescherpt waar AI ze nu niet of verkeerd leest, in jouw eigen toon, dus je site blijft gewoon jouw verhaal. Daarnaast komt er een codelaag bij die bezoekers niet zien maar AI wel leest. We bouwen geen verborgen pagina's en gebruiken geen trucs. Daar prikken deze systemen doorheen. Wat AI over je leest is precies wat je bezoekers ook zien.",
  },
  {
    question: "Wat moet ik zelf doen?",
    answer:
      "Weinig. Vooraf beantwoord je \u00e9\u00e9n vraag: welke klant of dienst wil je het meest aantrekken via AI? Daarna gaan wij aan het werk. Na levering is het plaatsen kopi\u00ebren en plakken met de gids erbij. De meeste punten zijn een paar minuten werk. En je websitebouwer kan het ook van je overnemen.",
  },
  {
    question: "Hoe meten jullie of het werkt?",
    answer:
      "Met echte cijfers. Vooraf stellen we AI twintig vragen die jouw klanten zouden kunnen stellen, plus vijf vragen over jou. Elke vraag stellen we drie keer aan ChatGPT, Claude en Gemini, de drie die jouw klanten het meest gebruiken. Dat zijn samen 225 echte antwoorden, waarin we tellen hoe vaak jij genoemd wordt en lezen wat AI over je vertelt. Op dag 90 draaien we precies dezelfde meting opnieuw. Dan zie je het verschil gewoon in cijfers. Het werk helpt ook in systemen die we niet meten, zoals Perplexity. Hoe snel het gaat verschilt per AI-systeem.",
  },
  {
    question: "Kan ik eerst alleen laten meten waar ik sta?",
    answer:
      "Ja, dat is de meting. We kijken over 225 echte antwoorden hoe vaak AI je noemt en wat AI over je vertelt. Je krijgt één A4 met die cijfers en de top 10 namen die AI in jouw vak noemt. Wij maken de vragen voor jouw vak: twintig die je klanten stellen, plus vijf over jou. Een eigen vragenlijst aanleveren kan op aanvraag. Doe je binnen 3 maanden een audit, dan telt de meting volledig als aanbetaling.",
  },
  {
    question: "Wat is het verschil tussen de audit en de audit met nazorg?",
    answer:
      "Bij de audit meten we vooraf en op dag 90 opnieuw, zodat je het verschil ziet. Bij de audit met nazorg komen we daarna nog twee keer terug: na 3 en na 6 maanden meten we opnieuw, lopen we je site na en werken we de verbeterpunten meteen voor je uit. In die eerste maanden wordt duidelijk waar AI je oppakt en waar nog niet. Precies daar sturen we bij.",
  },
  {
    question: "Mijn site is al goed geoptimaliseerd. Wat levert dit mij dan op?",
    answer:
      "Dan zit jouw winst vooral buiten je site. AI haalt zijn antwoorden ook uit reviews, artikelen, profielen en andere externe bronnen. Juist daar liggen bij een goede site de kansen. De audit zoekt uit waar AI in jouw vak zijn informatie vandaan haalt en op welke van die plekken jij nog ontbreekt, met per plek uitgewerkt wat daar moet staan. Zo ging het bij Klaas Kroezen: zijn site was al sterk en bijna al zijn actiepunten lagen daarbuiten. Wil je eerst zeker weten of er iets te winnen valt? Daar is de meting voor.",
  },
  {
    question: "Kan ik een voorbeeld zien voordat ik besluit?",
    answer:
      "Ja. Op de casepagina lees je wat de audit bij eerdere klanten opleverde. Wil je een echt document uit een audit inzien, mail dan even, dan sturen we een voorbeeld mee.",
  },
  {
    question: "Garanderen jullie dat ik aanbevolen word door ChatGPT?",
    answer:
      "Nee. Dat doet niemand die eerlijk is. Hoe prominent je verschijnt hangt ook af van externe factoren zoals reviews, concurrentie en vermeldingen. Wat we wel garanderen: we geven AI alles wat het nodig heeft om jou te begrijpen. De rest bouw je stap voor stap op met onze tips.",
  },
  {
    question: "Voor wie is dit geschikt?",
    answer:
      "Foundable werkt vooral met gevestigde experts die zichzelf verkopen: trainers, sprekers, auteurs en executive coaches. Daarnaast met gespecialiseerde advocaten en boutique consultants. De rode draad: je hebt een bewezen naam, je opdrachten zijn wat waard en je verkoopt jezelf via je eigen website. Juist dan telt het of AI je begrijpt, want bij dat soort keuzes vraagt de klant steeds vaker eerst een AI om advies.",
  },
  {
    question: "Ik kreeg een mail van jullie. Hoe kwamen jullie bij mij terecht?",
    answer:
      "Die mails stuur ik zelf, één voor één, nadat ik echt naar je site heb gekeken. Ik zoek gericht naar gevestigde experts per vakgebied en bekijk hun sites zoals een AI dat doet. Wat ik in de mail noem, heb ik zelf op of rond jouw site gezien.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-bg-alt">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center mb-12">
          Veelgestelde vragen
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-semibold text-navy pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-text-light transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-text-light leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
