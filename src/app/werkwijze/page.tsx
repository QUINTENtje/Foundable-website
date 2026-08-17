import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Zo werkt het · Foundable",
  description:
    "Kies de meting, de audit of de audit met nazorg en vul een kort formulier in. Binnen twee werkdagen persoonlijk antwoord, in vijf stappen klaar.",
  alternates: {
    canonical: "/werkwijze",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Foundable",
    url: "https://www.foundable.nl/werkwijze",
    title: "Zo werkt het · Foundable",
    description:
      "Kies de meting, de audit of de audit met nazorg en vul een kort formulier in. Binnen twee werkdagen persoonlijk antwoord, in vijf stappen klaar.",
    images: [{ url: "/logo.png" }],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Zo werkt Foundable",
  description:
    "De werkwijze van Foundable in vijf stappen: aanvragen, persoonlijke mail, betaling, levering per mail en revisie.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Kies wat bij je past",
      text: "Je kiest de meting, de audit of de audit met nazorg en vult een kort formulier in. Dat is alles, je kunt vandaag nog beginnen. Weet je nog niet welke bij je past, zet dat er dan bij.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Je hoort persoonlijk van ons",
      text: "We bekijken je website en je krijgt binnen twee werkdagen een persoonlijke mail: wat ons opvalt aan je site en de betaallink om te starten. Denken we dat het je te weinig oplevert, dan zeggen we dat ook gewoon.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Na je betaling gaan we aan de slag",
      text: "Bij de audit betaal je de eerste helft (50%) en gaan wij aan het werk. De audit begint met een nulmeting: twintig vragen die jouw klanten aan AI zouden stellen, plus vijf over jou, zodat je straks precies ziet wat er verandert. Kies je de losse meting, dan betaal je die in één keer en gaan we meteen meten.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Je ontvangt alles per mail",
      text: "De meting ligt binnen een week als A4 in je mailbox. De audit binnen 2 weken, als volledig pakket: je acties op volgorde, nieuwe teksten voor je site die AI begrijpt, een FAQ voor op je site, JSON-LD-code, implementatiegids en een analyse waar buiten je site de grootste winst te halen valt. Alles staat klaar om te kopiëren en te plakken, de gids laat per punt zien waar het in jouw platform moet staan. Loop je bij het plaatsen ergens vast, dan help ik je er per mail doorheen tot alles staat. De tweede helft betaal je bij oplevering.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Revisie en vervolg",
      text: "Je hebt 14 dagen om feedback te geven, wij verwerken dat in twee revisierondes. Op dag 90 draaien we de nulmeting precies opnieuw, zodat je het verschil in cijfers ziet. Koos je de audit met nazorg? Dan komen we ook na 3 en na 6 maanden terug om opnieuw te meten en bij te sturen.",
    },
  ],
};

const steps = [
  {
    title: "Kies wat bij je past",
    text: (
      <>
        Je kiest{" "}
        <Link
          href="/start"
          className="text-accent hover:text-accent-hover transition-colors"
        >
          de meting, de audit of de audit met nazorg
        </Link>{" "}
        en vult een kort formulier in. Dat is alles, je kunt vandaag nog
        beginnen. Weet je nog niet welke bij je past, zet dat er dan bij.
      </>
    ),
  },
  {
    title: "Je hoort persoonlijk van ons",
    text: (
      <>
        We bekijken je website en je krijgt binnen twee werkdagen een
        persoonlijke mail: wat ons opvalt aan je site en de betaallink om
        te starten. Denken we dat het je te weinig oplevert, dan zeggen we
        dat ook gewoon.
      </>
    ),
  },
  {
    title: "Na je betaling gaan we aan de slag",
    text: (
      <>
        Bij de audit betaal je de eerste helft (50%) en gaan wij aan het
        werk. De audit begint met een nulmeting: twintig vragen die jouw
        klanten aan AI zouden stellen, plus vijf over jou, zodat je straks
        precies ziet wat er verandert. Kies je de losse meting, dan betaal
        je die in &eacute;&eacute;n keer en gaan we meteen meten.
      </>
    ),
  },
  {
    title: "Je ontvangt alles per mail",
    text: (
      <>
        De meting ligt binnen een week als A4 in je mailbox. De audit binnen
        2 weken, als volledig pakket: je acties op volgorde, nieuwe teksten
        voor je site die AI begrijpt, een FAQ voor op je site, JSON-LD-code,
        implementatiegids en een analyse waar buiten je site de grootste
        winst te halen valt. Alles staat
        klaar om te kopi&euml;ren en te plakken, de gids laat per punt zien
        waar het in jouw platform moet staan. Loop je bij het plaatsen
        ergens vast, dan help ik je er per mail doorheen tot alles staat. De
        tweede helft betaal je bij oplevering.
      </>
    ),
  },
  {
    title: "Revisie en vervolg",
    text: (
      <>
        Je hebt 14 dagen om feedback te geven, wij verwerken dat in twee
        revisierondes. Op dag 90 draaien we de nulmeting precies opnieuw,
        zodat je het verschil in cijfers ziet. Koos je de audit met nazorg?
        Dan komen we ook na 3 en na 6 maanden terug om opnieuw te meten en
        bij te sturen.
      </>
    ),
  },
];

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
          {steps.map((step, i) => (
            <div key={step.title} className="relative pl-16">
              <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white font-bold text-lg shadow-[0_8px_20px_-6px_rgba(249,115,22,0.6)]">
                {i + 1}
              </div>
              <h2 className="text-2xl font-bold text-navy">{step.title}</h2>
              <p className="mt-3 text-text-light leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
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
            href="/start"
            className="glow-accent inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white hover:bg-accent-hover"
          >
            Begin vandaag nog
          </Link>
          <p className="mt-4 text-sm text-text-light">
            We kijken eerst zelf naar je site en je hoort wat ons opvalt
            voordat je betaalt.
          </p>
        </div>
      </section>
    </>
  );
}
