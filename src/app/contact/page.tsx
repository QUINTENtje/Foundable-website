import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact · Foundable",
  description:
    "Neem contact op met Foundable. We reageren binnen twee werkdagen.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Foundable",
    url: "https://www.foundable.nl/contact",
    title: "Contact · Foundable",
    description:
      "Neem contact op met Foundable. We reageren binnen twee werkdagen.",
    images: [{ url: "/logo.png" }],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-bg">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy">
            Neem contact op
          </h1>
          <p className="mt-4 text-lg text-text-light">
            Heb je een vraag of loop je ergens vast? E&eacute;n berichtje en ik
            kijk met je mee. Je krijgt binnen twee werkdagen antwoord.
          </p>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">
                Contactgegevens
              </h2>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-semibold text-navy">E-mail</dt>
                  <dd>
                    <a
                      href="mailto:quinten@foundable.nl"
                      className="text-accent hover:text-accent-hover transition-colors"
                    >
                      quinten@foundable.nl
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-navy">Telefoon</dt>
                  <dd>
                    <a
                      href="tel:+31638389591"
                      className="text-text-light hover:text-navy transition-colors"
                    >
                      +31 6 38389591
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-navy">
                    Vestigingsplaats
                  </dt>
                  <dd className="text-text-light">Amsterdam, Nederland</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-navy">KvK</dt>
                  <dd className="text-text-light">96898267</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-navy">
                    Google Bedrijfsprofiel
                  </dt>
                  <dd>
                    <a
                      href="https://www.google.com/maps?cid=7591528248257612358"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-hover transition-colors"
                    >
                      Foundable op Google
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="mt-10 rounded-xl bg-bg-alt border border-border p-6">
                <p className="text-text-light leading-relaxed">
                  Liever direct starten? Vraag je gratis AI Visibility Score
                  aan, dan nemen we contact met je op.
                </p>
                <Link
                  href="/score"
                  className="glow-accent mt-4 inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover"
                >
                  Gratis score aanvragen
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">
                Stuur een bericht
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
