import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { artikelen, formatDatum } from "@/content/kennis";

export const metadata: Metadata = {
  title: "Kennis over GEO en AI-zichtbaarheid · Foundable",
  description:
    "Hoe AI-systemen websites lezen en bedrijven kiezen, in gewone taal uitgelegd. Over GEO, JSON-LD en waarom elke AI andere bedrijven noemt.",
  alternates: {
    canonical: "/kennis",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Foundable",
    url: "https://www.foundable.nl/kennis",
    title: "Kennis over GEO en AI-zichtbaarheid · Foundable",
    description:
      "Hoe AI-systemen websites lezen en bedrijven kiezen, in gewone taal uitgelegd.",
    images: [{ url: "/logo.png" }],
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Kennis over GEO en AI-zichtbaarheid",
  url: "https://www.foundable.nl/kennis",
  inLanguage: "nl-NL",
  publisher: { "@id": "https://www.foundable.nl/#organization" },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: artikelen.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://www.foundable.nl/kennis/${a.slug}`,
      name: a.titel,
    })),
  },
};

export default function KennisPage() {
  return (
    <>
      <JsonLd data={collectionSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24 bg-bg">
        <div className="aurora" aria-hidden="true">
          <div className="blob blob-1" />
          <div className="blob blob-3" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-sm font-medium text-navy backdrop-blur">
            Kennis
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-navy leading-tight">
            Snappen hoe AI kiest.
          </h1>
          <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
            Hoe AI-systemen websites lezen en bedrijven aanbevelen, in gewone
            taal uitgelegd. Dezelfde kennis die we in elke audit
            gebruiken.
          </p>
        </div>
      </section>

      {/* Artikelen */}
      <section className="py-16 sm:py-20 bg-bg-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artikelen.map((a) => (
                <Link
                  key={a.slug}
                  href={`/kennis/${a.slug}`}
                  className="card-lift group flex h-full flex-col rounded-2xl border border-border bg-white p-7"
                >
                  <span className="inline-flex w-fit items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {a.categorie}
                  </span>
                  <h2 className="mt-4 text-xl font-bold text-navy group-hover:text-accent transition-colors">
                    {a.titel}
                  </h2>
                  <p className="mt-3 flex-1 text-sm text-text-light leading-relaxed">
                    {a.description}
                  </p>
                  <p className="mt-5 text-xs text-text-light">
                    {formatDatum(a.gepubliceerd)} &middot; {a.leestijdMin} min
                    leestijd
                  </p>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="glow-radial py-16 sm:py-24 bg-navy text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-3xl sm:text-4xl font-bold">
            Liever weten waar jouw website staat?
          </p>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
            We kijken naar je site en je hoort van ons wat ons opvalt,
            voordat je iets betaalt.
          </p>
          <Link
            href="/start"
            className="glow-accent mt-8 inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white hover:bg-accent-hover"
          >
            Start je GEO-audit
          </Link>
        </div>
      </section>
    </>
  );
}
