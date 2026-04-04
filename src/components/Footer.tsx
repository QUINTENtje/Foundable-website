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
            <p className="text-sm max-w-xs">
              We maken je vindbaar, niet beroemd.
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
                  06-38389591
                </a>
              </li>
              <li>Amsterdam, Nederland</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          <p>
            Foundable | KvK: 96898267 | BTW: NL005235720B29 |
            quinten@foundable.nl | 06-38389591
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
