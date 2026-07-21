"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-lg border border-border px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent";

const keuzes = ["De meting", "De audit", "De audit met nazorg"] as const;

export default function StartForm({
  initialKeuze = "De audit",
}: {
  initialKeuze?: string;
}) {
  const [keuze, setKeuze] = useState(initialKeuze);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [platform, setPlatform] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keuze, name, email, url, platform, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(
          data.error ||
            "Versturen is niet gelukt. Mail je aanvraag naar quinten@foundable.nl."
        );
      }

      setSent(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Versturen is niet gelukt. Mail je aanvraag naar quinten@foundable.nl."
      );
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl bg-bg-alt border border-border p-8 text-center">
        <svg
          className="mx-auto h-12 w-12 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75l2.25 2.25L15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className="mt-4 text-2xl font-bold text-navy">
          Je aanvraag is binnen.
        </h2>
        <p className="mt-3 text-text-light leading-relaxed">
          Je krijgt binnen twee werkdagen persoonlijk antwoord van Quinten:
          wat hem opvalt aan je website, en de betaallink om te starten.
          Alles gaat per mail.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="keuze" className="block text-sm font-medium text-navy mb-1">
          Waar wil je mee starten? *
        </label>
        <select
          id="keuze"
          required
          value={keuze}
          onChange={(e) => setKeuze(e.target.value)}
          className={inputClass}
        >
          {keuzes.map((k) => (
            <option key={k} value={k}>
              {k === "De meting"
                ? "De meting · €147,50 excl. BTW"
                : k === "De audit"
                  ? "De audit · €499 excl. BTW"
                  : "De audit met nazorg · €875 excl. BTW"}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">
          Naam *
        </label>
        <input
          id="name"
          type="text"
          required
          placeholder="Je naam"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
          E-mailadres *
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="je@email.nl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="url" className="block text-sm font-medium text-navy mb-1">
          Website URL *
        </label>
        <input
          id="url"
          type="url"
          required
          placeholder="https://jouwwebsite.nl"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="platform" className="block text-sm font-medium text-navy mb-1">
          Waar draait je website op? (optioneel)
        </label>
        <input
          id="platform"
          type="text"
          placeholder="Bijv. WordPress, Wix, Squarespace, eigen developer, geen idee"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">
          Wil je nog iets kwijt? (optioneel)
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="Bijv. op welke klanten of diensten je je richt"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClass}
        />
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="glow-accent w-full rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Versturen..." : `Vraag ${keuze.toLowerCase()} aan`}
      </button>
    </form>
  );
}
