import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Over Foundable \u2014 AIO specialist in Amsterdam",
  description:
    "Foundable helpt Nederlandse bedrijven vindbaar worden voor AI. Opgericht door Quinten Orij vanuit Amsterdam.",
};

export default function OverPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-bg">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy leading-tight">
            Wij geven AI alles wat het nodig heeft om jou te begrijpen.
          </h1>
        </div>
      </section>

      {/* Over Quinten */}
      <section className="py-16 sm:py-20 bg-bg-alt">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14">
            <div className="flex-shrink-0">
              <Image
                src="/quinten.jpg"
                alt="Quinten Orij, oprichter van Foundable"
                width={224}
                height={224}
                className="rounded-full w-56 h-56 object-cover"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy">
                Over Quinten
              </h2>
              <div className="mt-4 space-y-4 text-text-light leading-relaxed">
                <p>
                  Mijn naam is Quinten Orij, oprichter van Foundable. Ik kom uit
                  een echt ondernemersgezin &mdash; starten is bij ons gewoon
                  iets wat je doet. Op mijn 16e schreef ik me in bij de KvK, nu
                  ben ik 18 en draait Foundable volop.
                </p>
                <p>
                  Het idee ontstond toen mijn moeder vroeg of ze beter vindbaar
                  kon worden via AI. Ik was al vanaf het ontstaan van AI er
                  intensief mee bezig, en dit leek me een mooie uitdaging. Dus
                  ben ik hem aangegaan.
                </p>
                <p>
                  Daarna hoorde ik van meer ondernemers om me heen dat ze
                  hetzelfde wilden. Dat enthousiasme maakte duidelijk dat er
                  iets was. Zo is Foundable geboren.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Over Foundable */}
      <section className="py-16 sm:py-20 bg-bg">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">
            Over Foundable
          </h2>
          <div className="mt-4 space-y-4 text-text-light leading-relaxed">
            <p>
              Foundable is gevestigd in Amsterdam en helpt Nederlandse
              bedrijven vindbaar worden voor AI. Geen vage adviezen, geen
              moeilijke techniek &mdash; een compleet pakket dat je direct
              kunt implementeren.
            </p>
            <p>
              Na onze audit heeft AI geen reden meer om jou niet te begrijpen.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-bg-alt">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/werkwijze"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white hover:bg-accent-hover transition-colors"
          >
            Bekijk hoe het werkt
          </Link>
        </div>
      </section>
    </>
  );
}
