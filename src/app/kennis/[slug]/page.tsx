import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import {
  artikelen,
  getArtikel,
  getGerelateerd,
  formatDatum,
} from "@/content/kennis";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return artikelen.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const artikel = getArtikel(slug);
  if (!artikel) return {};

  return {
    title: `${artikel.titel} — Foundable`,
    description: artikel.description,
    alternates: {
      canonical: `/kennis/${artikel.slug}`,
    },
    openGraph: {
      type: "article",
      locale: "nl_NL",
      siteName: "Foundable",
      url: `https://www.foundable.nl/kennis/${artikel.slug}`,
      title: `${artikel.titel} — Foundable`,
      description: artikel.description,
      publishedTime: artikel.gepubliceerd,
      authors: ["Quinten Orij"],
      images: [{ url: "/logo.png" }],
    },
  };
}

export default async function KennisArtikelPage({ params }: PageProps) {
  const { slug } = await params;
  const artikel = getArtikel(slug);
  if (!artikel) notFound();

  const gerelateerd = getGerelateerd(artikel.slug);
  const url = `https://www.foundable.nl/kennis/${artikel.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: artikel.titel,
    description: artikel.description,
    datePublished: artikel.gepubliceerd,
    dateModified: artikel.gepubliceerd,
    inLanguage: "nl-NL",
    mainEntityOfPage: url,
    author: { "@id": "https://www.foundable.nl/#quinten-orij" },
    publisher: { "@id": "https://www.foundable.nl/#organization" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: artikel.faq.map((f) => ({
      "@type": "Question",
      name: f.vraag,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.antwoord,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.foundable.nl",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Kennis",
        item: "https://www.foundable.nl/kennis",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: artikel.titel,
        item: url,
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Kop */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-bg">
        <div className="aurora" aria-hidden="true">
          <div className="blob blob-1" />
          <div className="blob blob-3" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-text-light" aria-label="Kruimelpad">
            <Link href="/kennis" className="hover:text-navy transition-colors">
              Kennis
            </Link>{" "}
            <span aria-hidden="true">/</span>{" "}
            <span className="text-navy">{artikel.categorie}</span>
          </nav>
          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            {artikel.titel}
          </h1>
          <p className="mt-6 text-sm text-text-light">
            Door{" "}
            <Link
              href="/over"
              className="font-medium text-navy hover:text-accent transition-colors"
            >
              Quinten Orij
            </Link>{" "}
            &middot; {formatDatum(artikel.gepubliceerd)} &middot;{" "}
            {artikel.leestijdMin} min leestijd
          </p>
        </div>
      </section>

      {/* Artikel */}
      <section className="pb-16 sm:pb-24 bg-bg">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg sm:text-xl text-navy leading-relaxed font-medium">
            {artikel.intro}
          </p>
          {artikel.content}

          {/* FAQ */}
          <h2 className="mt-14 text-2xl sm:text-3xl font-bold text-navy">
            Veelgestelde vragen
          </h2>
          <div className="mt-6 space-y-6">
            {artikel.faq.map((f) => (
              <div
                key={f.vraag}
                className="rounded-2xl border border-border bg-bg-alt p-6"
              >
                <h3 className="font-bold text-navy">{f.vraag}</h3>
                <p className="mt-2 text-text-light leading-relaxed">
                  {f.antwoord}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* CTA */}
      <section className="glow-radial py-16 sm:py-20 bg-navy text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl sm:text-3xl font-bold">
            Benieuwd hoe goed AI jouw website begrijpt?
          </p>
          <p className="mt-3 text-white/70">
            Check je gratis AI Visibility Score. 20 checkpoints, direct
            resultaat, geen verplichtingen.
          </p>
          <Link
            href="/score"
            className="glow-accent mt-8 inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-hover"
          >
            Check je gratis score
          </Link>
        </div>
      </section>

      {/* Gerelateerd */}
      {gerelateerd.length > 0 && (
        <section className="py-16 sm:py-20 bg-bg-alt">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy text-center">
              Lees ook
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {gerelateerd.map((a) => (
                <Link
                  key={a.slug}
                  href={`/kennis/${a.slug}`}
                  className="card-lift group flex h-full flex-col rounded-2xl border border-border bg-white p-7"
                >
                  <span className="inline-flex w-fit items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {a.categorie}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-navy group-hover:text-accent transition-colors">
                    {a.titel}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-text-light leading-relaxed">
                    {a.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
