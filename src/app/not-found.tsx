import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pagina niet gevonden · Foundable",
};

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32 bg-bg">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-navy">
          Deze pagina kon ik niet vinden
        </h1>
        <p className="mt-4 text-lg text-text-light">
          Misschien is de link oud of zit er een tikfout in. Op de homepage
          vind je alles terug.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="glow-accent inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white hover:bg-accent-hover"
          >
            Naar de homepage
          </Link>
          <Link
            href="/kennis"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-white/60 px-6 py-3.5 text-base font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
          >
            Naar de artikelen
          </Link>
        </div>
      </div>
    </section>
  );
}
