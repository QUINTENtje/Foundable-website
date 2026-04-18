"use client";

import Link from "next/link";

interface ScoreResult {
  totalScore: number;
  label: string;
}

function getLabelStyle(label: string) {
  switch (label) {
    case "Slecht":
      return { color: "text-red-600", bg: "bg-red-500" };
    case "Matig":
      return { color: "text-accent", bg: "bg-accent" };
    case "Goed":
      return { color: "text-green-600", bg: "bg-green-500" };
    case "Uitstekend":
      return { color: "text-green-600", bg: "bg-green-600" };
    default:
      return { color: "text-text-light", bg: "bg-text-light" };
  }
}

export default function ScoreDisplay({ result }: { result: ScoreResult }) {
  const { color, bg } = getLabelStyle(result.label);

  return (
    <div className="space-y-8">
      {/* Total Score */}
      <div className="text-center">
        <p className={`text-7xl font-bold ${color}`}>{result.totalScore}</p>
        <p className="text-lg text-text-light mt-1">/100</p>
        <div
          className={`mt-3 inline-block rounded-full px-4 py-1.5 text-sm font-semibold text-white ${bg}`}
        >
          {result.label}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-navy p-8 text-center">
        <h3 className="text-2xl font-bold text-white">
          Wil je dit volledig laten aanpakken?
        </h3>
        <p className="mt-3 text-white/70 max-w-lg mx-auto">
          Foundable levert een compleet AIO audit pakket voor &euro;595 excl.
          BTW. Geen vage adviezen &mdash; concrete deliverables die je direct
          kunt implementeren.
        </p>
        <Link
          href="/werkwijze"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white hover:bg-accent-hover transition-colors"
        >
          Bekijk het pakket
        </Link>
      </div>
    </div>
  );
}
