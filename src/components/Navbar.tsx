"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Werkwijze", href: "/werkwijze" },
  { label: "Cases", href: "/cases" },
  { label: "AI Visibility Score", href: "/score" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo variant="light" className="h-9 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-light hover:text-navy transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/score"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
            >
              Gratis score aanvragen
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu openen"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-border pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-sm font-medium text-text-light hover:text-navy"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/score"
              className="mt-3 block rounded-lg bg-accent px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-accent-hover"
              onClick={() => setMobileOpen(false)}
            >
              Gratis score aanvragen
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
