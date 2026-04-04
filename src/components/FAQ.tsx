"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Wat is AIO en waarom zou ik er iets mee doen?",
    answer:
      "AIO staat voor AI Optimization. Het is het optimaliseren van je website voor AI-zoekmachines zoals ChatGPT, Perplexity en Google AI. Die tools worden steeds vaker gebruikt om bedrijven te vergelijken en aanbevelingen te doen. Als jouw website niet AIO-proof is, word je simpelweg niet genoemd.",
  },
  {
    question: "Hoe werkt de audit precies?",
    answer:
      "We analyseren je website grondig: wat AI ziet, wat AI mist en wat AI verkeerd begrijpt. Daarna leveren we een compleet pakket met rapport, herschreven teksten, JSON-LD code en implementatie-instructies. Jij hoeft maar \u00e9\u00e9n vraag te beantwoorden \u2014 de rest doen wij.",
  },
  {
    question: "Wat heb ik zelf nodig om te doen?",
    answer:
      "Weinig. Na je aanbetaling stellen we \u00e9\u00e9n vraag: welke klant of dienst wil je het meest aantrekken via AI? Daarna gaan we aan de slag. Na levering implementeer jij de aanbevelingen zelf, of laat je het doen door je webdesigner.",
  },
  {
    question: "Wanneer zie ik resultaat?",
    answer:
      "Dat verschilt per website en per zoekmachine. Sommige klanten zien al binnen enkele weken een verschil in hoe AI hun bedrijf beschrijft. Een garantie op snelheid geven we niet \u2014 maar je website is na de audit aantoonbaar beter begrijpelijk voor AI.",
  },
  {
    question: "Garanderen jullie dat ik aanbevolen word door ChatGPT?",
    answer:
      "Nee \u2014 en dat doet niemand die eerlijk is. Hoe prominent je verschijnt hangt ook af van externe factoren zoals reviews, concurrentie en vermeldingen. Wat we w\u00e9l garanderen: we geven AI alles wat het nodig heeft om jou te begrijpen. De rest bouw je stap voor stap op met onze tips.",
  },
  {
    question: "Voor welke bedrijven is dit geschikt?",
    answer:
      "Foundable werkt met Nederlandse MKB-bedrijven die lokale klanten aantrekken. Denk aan horecabedrijven, vakantieparken, dienstverleners en ambachtelijke bedrijven. Als mensen jou kunnen vinden via Google, kunnen ze je ook vinden via AI \u2014 maar dan moet je website daar wel op ingericht zijn.",
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
