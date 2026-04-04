import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact \u2014 Foundable",
  description:
    "Neem contact op met Foundable. We reageren binnen \u00e9\u00e9n werkdag.",
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
            Heb je een vraag over de audit of wil je meer weten? Stuur een
            berichtje. We reageren binnen &eacute;&eacute;n werkdag.
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
                      06-38389591
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
              </dl>

              <div className="mt-10 rounded-xl bg-bg-alt border border-border p-6">
                <p className="text-text-light leading-relaxed">
                  Liever direct starten? Vraag je gratis AI Visibility Score
                  aan &mdash; dan nemen we daarna contact op.
                </p>
                <Link
                  href="/score"
                  className="mt-4 inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
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
              <form
                action="mailto:quinten@foundable.nl"
                method="POST"
                encType="text/plain"
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Naam
                  </label>
                  <input
                    id="contact-name"
                    name="Naam"
                    type="text"
                    required
                    placeholder="Je naam"
                    className="w-full rounded-lg border border-border px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    E-mailadres
                  </label>
                  <input
                    id="contact-email"
                    name="Email"
                    type="email"
                    required
                    placeholder="je@email.nl"
                    className="w-full rounded-lg border border-border px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Bericht
                  </label>
                  <textarea
                    id="contact-message"
                    name="Bericht"
                    required
                    rows={5}
                    placeholder="Je bericht..."
                    className="w-full rounded-lg border border-border px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-colors"
                >
                  Stuur bericht
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
