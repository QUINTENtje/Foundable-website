import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <Logo variant="dark" className="h-9 w-auto" />
            </div>
            <p className="text-sm max-w-xs font-medium text-white/90">
              Gevonden worden begint met begrepen worden.
            </p>
            <p className="mt-1 text-sm max-w-xs">
              Word gevonden in het AI-tijdperk.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Pagina&apos;s
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Werkwijze", href: "/werkwijze" },
                { label: "Cases", href: "/cases" },
                { label: "Kennis", href: "/kennis" },
                { label: "Score aanvragen", href: "/score" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:quinten@foundable.nl"
                  className="hover:text-white transition-colors"
                >
                  quinten@foundable.nl
                </a>
              </li>
              <li>
                <a
                  href="tel:+31638389591"
                  className="hover:text-white transition-colors"
                >
                  +31 6 38389591
                </a>
              </li>
              <li>Amsterdam, Nederland</li>
              <li>
                <a
                  href="https://www.linkedin.com/company/foundable-nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps?cid=7591528248257612358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.25a8.25 8.25 0 0 0-8.25 8.25c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.683 2.282c.36.253.744.5 1.144.742l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041c.4-.242.784-.489 1.145-.742a19.58 19.58 0 0 0 2.682-2.282c1.944-1.99 3.963-4.981 3.963-8.827A8.25 8.25 0 0 0 12 2.25Zm0 5.25a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
                  </svg>
                  Google Bedrijfsprofiel
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          <p>
            Foundable | KvK: 96898267 | BTW: NL005235720B29 |
            quinten@foundable.nl | +31 6 38389591
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} Foundable. Gevestigd in Amsterdam,
            Nederland.
          </p>
        </div>
      </div>
    </footer>
  );
}
