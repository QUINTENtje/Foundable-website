"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-lg border border-border px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(
          data.error ||
            "Versturen is niet gelukt. Mail je bericht naar quinten@foundable.nl."
        );
      }

      setSent(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Versturen is niet gelukt. Mail je bericht naar quinten@foundable.nl."
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
          Je bericht is binnen.
        </h2>
        <p className="mt-3 text-text-light leading-relaxed">
          Je krijgt binnen &eacute;&eacute;n werkdag antwoord van Quinten.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-navy mb-1"
        >
          Naam *
        </label>
        <input
          id="contact-name"
          type="text"
          required
          placeholder="Je naam"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-navy mb-1"
        >
          E-mailadres *
        </label>
        <input
          id="contact-email"
          type="email"
          required
          placeholder="je@email.nl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-navy mb-1"
        >
          Bericht *
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          placeholder="Je bericht..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-y`}
        />
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Versturen..." : "Stuur bericht"}
      </button>
    </form>
  );
}
