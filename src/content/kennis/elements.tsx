import type { ReactNode } from "react";
import Link from "next/link";

/* Opmaakcomponenten voor kennisartikelen. Geen typography-plugin,
   dus de artikelstijl staat hier op één plek. */

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-navy">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-8 text-xl font-bold text-navy">{children}</h3>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-text-light leading-relaxed">{children}</p>;
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="mt-4 space-y-2">{children}</ul>;
}

export function LI({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-text-light leading-relaxed">
      <span
        className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
        aria-hidden="true"
      />
      <span>{children}</span>
    </li>
  );
}

export function Kader({ children }: { children: ReactNode }) {
  return (
    <div className="mt-6 rounded-2xl border border-border bg-bg-alt p-6">
      {children}
    </div>
  );
}

export function Code({ children }: { children: string }) {
  return (
    <pre className="mt-6 overflow-x-auto rounded-2xl bg-navy p-5 text-sm leading-relaxed text-white/90 font-mono">
      <code>{children}</code>
    </pre>
  );
}

export function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
    >
      {children}
    </Link>
  );
}

interface Stat {
  waarde: string;
  label: string;
}

export function StatRij({ stats }: { stats: Stat[] }) {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl border border-border bg-bg-alt p-5 text-center"
        >
          <p className="text-3xl font-bold text-accent">{s.waarde}</p>
          <p className="mt-1 text-sm text-text-light">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

interface TabelProps {
  kop: string[];
  rijen: string[][];
}

export function Tabel({ kop, rijen }: TabelProps) {
  return (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-navy text-left text-white">
            {kop.map((k) => (
              <th key={k} className="px-4 py-3 font-semibold">
                {k}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rijen.map((rij, i) => (
            <tr
              key={rij[0]}
              className={i % 2 === 0 ? "bg-white" : "bg-bg-alt"}
            >
              {rij.map((cel, j) => (
                <td
                  key={`${rij[0]}-${j}`}
                  className={`px-4 py-3 align-top ${
                    j === 0
                      ? "font-medium text-navy whitespace-nowrap"
                      : "text-text-light"
                  }`}
                >
                  {cel}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
