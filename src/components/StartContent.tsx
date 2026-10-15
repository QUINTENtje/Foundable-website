"use client";

import { useState } from "react";
import StartForm from "@/components/StartForm";

type Product = {
  keuze: string;
  h1: string;
  price: string;
  steps: readonly { title: string; text: string }[];
};

export default function StartContent({
  products,
  initialKeuze,
}: {
  products: readonly Product[];
  initialKeuze: string;
}) {
  const [keuze, setKeuze] = useState(initialKeuze);
  const product = products.find((p) => p.keuze === keuze) ?? products[0];

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
            hieronder. Daarna hoor je persoonlijk van ons.
          </p>
          <p className="mt-4 text-sm text-text-light">
            <span className="font-semibold text-navy">
              {product.price} excl. BTW
            </span>{" "}
            &middot; vaste prijs &middot; alles inbegrepen
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
          <StartForm keuze={keuze} onKeuzeChange={setKeuze} />
          <p className="mt-8 text-center text-sm text-text-light">
            Vragen? Mail naar{" "}
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
