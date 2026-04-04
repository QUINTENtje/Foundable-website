import Link from "next/link";

interface CaseCardProps {
  name: string;
  sector: string;
  result: string;
  href: string;
}

export default function CaseCard({ name, sector, result, href }: CaseCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-white p-8 hover:shadow-md transition-shadow">
      <p className="text-sm font-semibold text-accent uppercase tracking-wide">
        {sector}
      </p>
      <h3 className="mt-2 text-xl font-bold text-navy">{name}</h3>
      <p className="mt-3 text-text-light leading-relaxed">{result}</p>
      <Link
        href={href}
        className="mt-4 inline-flex items-center text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
      >
        Bekijk de case
        <svg
          className="ml-1 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </Link>
    </div>
  );
}
