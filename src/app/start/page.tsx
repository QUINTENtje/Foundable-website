import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Start je GEO-audit — Foundable",
  description:
    "Start in vijf minuten je GEO-audit. Eén vraag beantwoorden, de rest doen wij. Tijdelijke introductieprijs €499 (normaal €999) excl. BTW, alles inbegrepen.",
  alternates: {
    canonical: "/start",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Foundable",
    url: "https://www.foundable.nl/start",
    title: "Start je GEO-audit — Foundable",
    description:
      "Start in vijf minuten je GEO-audit. Eén vraag beantwoorden, de rest doen wij. Tijdelijke introductieprijs €499 (normaal €999) excl. BTW, alles inbegrepen.",
    images: [{ url: "/logo.png" }],
  },
};

export default function StartPage() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-bg">
      <div className="aurora" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-3" />
      </div>
      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-navy">
          Start je GEO-audit
        </h1>
        <p className="mt-4 text-lg text-text-light leading-relaxed">
          Elke audit begint met de gratis AI Visibility Score. Vul je URL in,
          zie direct waar je website staat, en wij nemen persoonlijk contact
          met je op.
        </p>
        <Link
          href="/score"
          className="glow-accent mt-8 inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white hover:bg-accent-hover"
        >
          Vraag je gratis AI Visibility Score aan
        </Link>
        <p className="mt-6 text-sm text-text-light">
          Liever direct contact? Mail naar{" "}
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
  );
}
