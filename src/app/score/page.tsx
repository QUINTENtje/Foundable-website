"use client";

import { useState } from "react";
import ScoreDisplay from "@/components/ScoreDisplay";

interface ScoreResult {
  categories: {
    name: string;
    score: number;
    maxScore: number;
  }[];
  checkpoints: Record<string, boolean>;
  totalScore: number;
  label: string;
}

export default function ScorePage() {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [sector, setSector] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, name, email, company, sector }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Er is een fout opgetreden.");
      }

      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Er is een fout opgetreden bij het analyseren."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 bg-bg">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy">
            Hoe zichtbaar ben jij voor AI?
          </h1>
          <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
            Vul je website-URL in. Wij analyseren hoe goed AI jouw bedrijf
            begrijpt &mdash; en wat er beter kan. Gratis, zonder verplichtingen.
          </p>
        </div>
      </section>

      {/* Uitleg */}
      <section className="pb-12 sm:pb-16 bg-bg">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-bg-alt border border-border p-8">
            <h2 className="text-xl font-bold text-navy mb-4">Wat is de AI Visibility Score?</h2>
            <p className="text-text-light leading-relaxed mb-4">
              De AI Visibility Score laat zien hoe goed AI-zoekmachines zoals ChatGPT, Perplexity en Google AI jouw website kunnen lezen en begrijpen. We analyseren vijf categorie&euml;n:
            </p>
            <ul className="space-y-2">
              {[
                "Structuur & techniek — Heeft je site JSON-LD, correcte meta-tags en een logische opbouw?",
                "Content duidelijkheid — Snapt AI wie je bent, wat je doet en voor wie?",
                "Feiten & specificiteit — Staan er concrete prijzen, cijfers en USP's op je site?",
                "Vertrouwen & autoriteit — Zijn er reviews, certificeringen en duidelijke contactgegevens?",
                "Lokale herkenbaarheid — Weet AI waar je zit en welk gebied je bedient?",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-light">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-text-light leading-relaxed text-sm">
              Je krijgt per categorie een score, uitleg en een concreet verbeterpunt. Plus drie prioritaire acties die je direct kunt oppakken.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          {!result && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="url"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Website URL *
                </label>
                <input
                  id="url"
                  type="url"
                  required
                  placeholder="https://jouwwebsite.nl"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full rounded-lg border border-border px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Naam *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Je naam"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-border px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  E-mailadres *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="je@email.nl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-border px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Bedrijfsnaam (optioneel)
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Je bedrijfsnaam"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full rounded-lg border border-border px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="sector"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Sector/branche (optioneel)
                </label>
                <input
                  id="sector"
                  type="text"
                  placeholder="Bijv. horeca, dienstverlening, retail"
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full rounded-lg border border-border px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              {error && (
                <p className="text-red-600 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "We analyseren je website op AI-leesbaarheid..." : "Analyseer mijn website"}
              </button>
            </form>
          )}

          {result && <ScoreDisplay result={result} />}

          {result && (
            <button
              onClick={() => {
                setResult(null);
                setUrl("");
                setName("");
                setEmail("");
                setCompany("");
                setSector("");
              }}
              className="mt-6 w-full text-center text-sm text-text-light hover:text-navy transition-colors"
            >
              Nog een website analyseren
            </button>
          )}
        </div>
      </section>
    </>
  );
}
