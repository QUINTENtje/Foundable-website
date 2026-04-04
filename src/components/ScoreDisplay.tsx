"use client";

import Link from "next/link";

interface ScoreCategory {
  name: string;
  score: number;
  explanation: string;
  improvement: string;
}

interface ScoreResult {
  categories: ScoreCategory[];
  totalScore: number;
  priorityActions: string[];
  conclusion: string;
}

function getScoreColor(score: number) {
  if (score <= 40) return { color: "text-red-600", bg: "bg-red-500", label: "Er is veel te verbeteren" };
  if (score <= 70) return { color: "text-accent", bg: "bg-accent", label: "Een goede basis, maar AI mist nog te veel" };
  return { color: "text-green-600", bg: "bg-green-500", label: "Sterke basis \u2014 verfijning maakt het verschil" };
}

function getCategoryBarColor(score: number) {
  if (score <= 8) return "bg-red-500";
  if (score <= 14) return "bg-accent";
  return "bg-green-500";
}

export default function ScoreDisplay({ result }: { result: ScoreResult }) {
  const { color, bg, label } = getScoreColor(result.totalScore);

  return (
    <div className="space-y-8">
      {/* Total Score */}
      <div className="text-center">
        <p className={`text-7xl font-bold ${color}`}>{result.totalScore}</p>
        <p className="text-lg text-text-light mt-1">/100</p>
        <div className={`mt-3 inline-block rounded-full px-4 py-1.5 text-sm font-semibold text-white ${bg}`}>
          {label}
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-6">
        {result.categories.map((cat) => (
          <div key={cat.name} className="rounded-xl border border-border bg-white p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-navy">{cat.name}</h3>
              <span className="text-lg font-bold text-navy">{cat.score}/20</span>
            </div>
            <div className="w-full bg-bg-alt rounded-full h-2.5 mb-3">
              <div
                className={`h-2.5 rounded-full ${getCategoryBarColor(cat.score)}`}
                style={{ width: `${(cat.score / 20) * 100}%` }}
              />
            </div>
            <p className="text-sm text-text-light">{cat.explanation}</p>
            <p className="text-sm text-navy font-medium mt-2">
              Verbeterpunt: {cat.improvement}
            </p>
          </div>
        ))}
      </div>

      {/* Priority Actions */}
      <div className="rounded-xl border border-border bg-white p-6">
        <h3 className="text-lg font-bold text-navy mb-4">Prioritaire acties</h3>
        <ol className="space-y-3">
          {result.priorityActions.map((action, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-accent text-white text-sm font-bold">
                {i + 1}
              </span>
              <span className="text-text-light">{action}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Conclusion */}
      <div className="rounded-xl bg-bg-alt border border-border p-6">
        <h3 className="text-lg font-bold text-navy mb-2">Conclusie</h3>
        <p className="text-text-light leading-relaxed">{result.conclusion}</p>
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
