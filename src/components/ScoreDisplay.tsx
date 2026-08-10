"use client";

import Link from "next/link";

interface ScoreResult {
  totalScore: number;
  label: string;
  categories: {
    name: string;
    score: number;
    maxScore: number;
  }[];
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

      {/* Categorie-uitsplitsing */}
      {result.categories && result.categories.length > 0 && (
        <div className="rounded-2xl bg-bg-alt border border-border p-6 space-y-4">
          {result.categories.map((cat) => (
            <div key={cat.name}>
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-sm font-medium text-navy">{cat.name}</p>
                <p className="text-sm text-text-light whitespace-nowrap">
                  {cat.score}/{cat.maxScore}
                </p>
              </div>
              <div className="mt-1.5 h-1.5 w-full rounded-full bg-border">
                <div
                  className="h-1.5 rounded-full bg-accent"
                  style={{
                    width: `${Math.round((cat.score / cat.maxScore) * 100)}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="glow-radial rounded-2xl bg-navy p-8 text-center">
        <h3 className="text-2xl font-bold text-white">
          Wil je dit volledig laten aanpakken?
        </h3>
        <p className="mt-3 text-white/70 max-w-lg mx-auto">
          De score meet of AI je website kan lezen. De audit lost dat voor je
          op: herschreven teksten, de ontbrekende code en een stappenplan voor
          jouw platform. En omdat AI ook kijkt naar wat anderen over je
          schrijven, krijg je er tips bij om buiten je site vaker genoemd te
          worden.
        </p>
        <p className="mt-2 text-sm text-white/50">
          <span className="line-through">&euro;999</span>{" "}
          <span className="font-semibold text-white">&euro;499 excl. BTW</span>{" "}
          &middot; introductieprijs t/m zondag 16 augustus
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/start"
            className="glow-accent inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white hover:bg-accent-hover"
          >
            Start je audit
          </Link>
          <Link
            href="/werkwijze"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white/90 hover:bg-white/10"
          >
            Eerst zien hoe het werkt
          </Link>
        </div>
        <p className="mt-4 text-xs text-white/50">
          Alles gaat per mail.
        </p>
      </div>
    </div>
  );
}
