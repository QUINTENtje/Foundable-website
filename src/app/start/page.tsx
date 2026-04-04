"use client";

import { useState } from "react";

export default function StartPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [naam, setNaam] = useState("");
  const [bedrijf, setBedrijf] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ naam, bedrijf, website, email }),
      });

      if (!res.ok) {
        throw new Error();
      }

      setSubmitted(true);
    } catch {
      setError(
        "Er ging iets mis. Probeer het opnieuw of mail naar quinten@foundable.nl."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-16 sm:py-24 bg-bg">
      <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
        {!submitted ? (
          <>
            <h1 className="text-3xl sm:text-4xl font-bold text-navy text-center">
              Start je AIO-audit
            </h1>
            <p className="mt-3 text-text-light text-center">
              Vul je gegevens in en je ontvangt binnen 24 uur een bevestiging
              van ons.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div>
                <label
                  htmlFor="start-naam"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Naam
                </label>
                <input
                  id="start-naam"
                  type="text"
                  required
                  placeholder="Je naam"
                  value={naam}
                  onChange={(e) => setNaam(e.target.value)}
                  className="w-full rounded-lg border border-border px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="start-bedrijf"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Bedrijfsnaam
                </label>
                <input
                  id="start-bedrijf"
                  type="text"
                  required
                  placeholder="Je bedrijfsnaam"
                  value={bedrijf}
                  onChange={(e) => setBedrijf(e.target.value)}
                  className="w-full rounded-lg border border-border px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="start-website"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Website URL
                </label>
                <input
                  id="start-website"
                  type="url"
                  required
                  placeholder="https://jouwwebsite.nl"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full rounded-lg border border-border px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="start-email"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  E-mailadres
                </label>
                <input
                  id="start-email"
                  type="email"
                  required
                  placeholder="je@email.nl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-border px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              {error && <p className="text-red-600 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Bezig met versturen..." : "Verstuur aanvraag"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-navy">
              Gelukt! Je hoort binnen 24 uur van ons.
            </h2>
          </div>
        )}
      </div>
    </section>
  );
}
