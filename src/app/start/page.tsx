import type { Metadata } from "next";
import Link from "next/link";
import StartForm from "@/components/StartForm";

export const metadata: Metadata = {
  title: "Start je GEO-audit · Foundable",
  description:
    "Vraag de GEO-audit aan met een kort formulier. Je krijgt persoonlijk antwoord met wat ons opvalt aan je site, en de betaallink om te starten. €499 excl. BTW, tijdelijke introductieprijs.",
  alternates: {
    canonical: "/start",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Foundable",
    url: "https://www.foundable.nl/start",
    title: "Start je GEO-audit · Foundable",
    description:
      "Vraag de GEO-audit aan met een kort formulier. Je krijgt persoonlijk antwoord met wat ons opvalt aan je site, en de betaallink om te starten. €499 excl. BTW, tijdelijke introductieprijs.",
    images: [{ url: "/logo.png" }],
  },
};

const products = {
  meting: {
    keuze: "De meting",
    h1: "Start met de meting",
    listPrice: "€295",
    price: "€147,50",
    steps: [
      {
        title: "Je vraagt de meting aan",
        text: "Vul het formulier hieronder in.",
      },
      {
        title: "Wij kijken eerst zelf naar je site",
        text: "Je krijgt binnen twee werkdagen een persoonlijke mail terug: wat ons opvalt aan je website, en de betaallink voor de meting (€147,50 excl. BTW). Denken we dat de meting je te weinig oplevert, dan zeggen we dat ook gewoon.",
      },
      {
        title: "Na je betaling gaan we meten",
        text: "De vragenlijst lever je zelf aan, of wij maken er een. Daarna kijken we over 270 echte antwoorden hoe vaak AI je noemt. Binnen een week ligt het A4 als PDF in je mailbox: de cijfers, wat AI over je vertelt, je AI Visibility Score en de top 10 namen die AI in jouw vak noemt. Doe je binnen 3 maanden een audit, dan telt de meting volledig als aanbetaling.",
      },
    ],
  },
  audit: {
    keuze: "De audit",
    h1: "Start je GEO-audit",
    listPrice: "€999",
    price: "€499",
    steps: [
      {
        title: "Je vraagt de audit aan",
        text: "Vul het formulier hieronder in.",
      },
      {
        title: "Wij kijken eerst zelf naar je site",
        text: "Je krijgt binnen twee werkdagen een persoonlijke mail terug: wat ons opvalt aan je website, en de betaallink voor de eerste helft (€249,50 excl. BTW). Denken we dat de audit je te weinig oplevert, dan zeggen we dat ook gewoon.",
      },
      {
        title: "Na je aanbetaling gaan we aan de slag",
        text: "Binnen 2 weken ligt het complete pakket in je mailbox. De tweede helft betaal je bij oplevering.",
      },
    ],
  },
  nazorg: {
    keuze: "De audit met nazorg",
    h1: "Start je audit met nazorg",
    listPrice: "€1.750",
    price: "€875",
    steps: [
      {
        title: "Je vraagt de audit met nazorg aan",
        text: "Vul het formulier hieronder in.",
      },
      {
        title: "Wij kijken eerst zelf naar je site",
        text: "Je krijgt binnen twee werkdagen een persoonlijke mail terug: wat ons opvalt aan je website, en de betaallink voor de eerste helft (€437,50 excl. BTW). Denken we dat de audit je te weinig oplevert, dan zeggen we dat ook gewoon.",
      },
      {
        title: "Na je aanbetaling gaan we aan de slag",
        text: "Binnen 2 weken ligt het complete pakket in je mailbox. De tweede helft betaal je bij oplevering. Daarna komen we na 3 en na 6 maanden terug om opnieuw te meten en bij te sturen.",
      },
    ],
  },
} as const;

export default async function StartPage({
  searchParams,
}: {
  searchParams: Promise<{ keuze?: string }>;
}) {
  const { keuze } = await searchParams;
  const product =
    keuze === "meting"
      ? products.meting
      : keuze === "nazorg"
        ? products.nazorg
        : products.audit;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-bg">
        <div className="aurora" aria-hidden="true">
          <div className="blob blob-1" />
          <div className="blob blob-3" />
        </div>
        <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-navy">
            {product.h1}
          </h1>
          <p className="mt-4 text-lg text-text-light leading-relaxed">
            Je vraagt {product.keuze.toLowerCase()} aan met het formulier
            hieronder, de rest gaat per mail.
          </p>
          <p className="mt-4 text-sm text-text-light">
            <span className="line-through">{product.listPrice}</span>{" "}
            <span className="font-semibold text-navy">
              {product.price} excl. BTW
            </span>{" "}
            &middot; tijdelijke introductieprijs &middot; alles inbegrepen
          </p>
        </div>
      </section>

      {/* Zo werkt het */}
      <section className="pb-12 sm:pb-16 bg-bg">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 space-y-8">
          {product.steps.map((step, i) => (
            <div key={step.title} className="relative pl-16">
              <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white font-bold text-lg shadow-[0_8px_20px_-6px_rgba(249,115,22,0.6)]">
                {i + 1}
              </div>
              <h2 className="text-xl font-bold text-navy">{step.title}</h2>
              <p className="mt-2 text-text-light leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Formulier */}
      <section className="pb-20 sm:pb-28 bg-bg">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <StartForm initialKeuze={product.keuze} />
          <p className="mt-8 text-center text-sm text-text-light">
            Liever eerst weten waar je staat? Vraag de{" "}
            <Link
              href="/score"
              className="text-accent hover:text-accent-hover transition-colors"
            >
              gratis AI Visibility Score
            </Link>{" "}
            aan. Vragen? Mail naar{" "}
            <a
              href="mailto:quinten@foundable.nl"
              className="text-accent hover:text-accent-hover transition-colors"
            >
              quinten@foundable.nl
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
