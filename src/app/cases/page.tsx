import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Cases · Foundable",
  description:
    "Drie cases, drie niches, plus twee reviews van klanten: zo maakt Foundable websites begrijpelijk voor ChatGPT, Claude en Gemini.",
  alternates: {
    canonical: "/cases",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Foundable",
    url: "https://www.foundable.nl/cases",
    title: "Cases · Foundable",
    description:
      "Drie cases, drie niches, plus twee reviews van klanten: zo maakt Foundable websites begrijpelijk voor ChatGPT, Claude en Gemini.",
    images: [{ url: "/logo.png" }],
  },
};

// De Google-reviews van Klaas (14-07-2026) en Marianne van Ory aan Zee
// (22-07-2026), allebei woordelijk overgenomen. De laatste node koppelt ze
// terug aan het organisatieschema uit de root layout.
const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Review",
      "@id": "https://www.foundable.nl/cases#review-klaas-kroezen",
      itemReviewed: {
        "@type": "ProfessionalService",
        "@id": "https://www.foundable.nl/#organization",
        name: "Foundable",
      },
      author: {
        "@type": "Person",
        name: "Klaas Kroezen",
        url: "https://www.klaaskroezen.nl",
      },
      datePublished: "2026-07-14",
      inLanguage: "nl-NL",
      reviewBody:
        "Via AI krijg ik steeds meer opdrachten. Maar hoe goed ben ik daar eigenlijk vindbaar? En kun je daar invloed op krijgen? Daar heeft Quinten mij bij geholpen.\n\nHij maakte een helder rapport over hoe ik er nu voorsta. Daarna zijn we er samen doorheen gegaan en hebben we de aanbevelingen meteen toegepast. Aan het einde van de sessie was er al echt iets veranderd.\n\nQuinten legt rustig uit, denkt met je mee en weet waar hij het over heeft. Ik zou hem zo aanraden.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "Review",
      "@id": "https://www.foundable.nl/cases#review-ory-aan-zee",
      itemReviewed: {
        "@type": "ProfessionalService",
        "@id": "https://www.foundable.nl/#organization",
        name: "Foundable",
      },
      author: {
        "@type": "Person",
        name: "Marianne",
        affiliation: {
          "@type": "LodgingBusiness",
          name: "Ory aan Zee",
          url: "https://www.oryaanzee.nl",
        },
      },
      datePublished: "2026-07-22",
      inLanguage: "nl-NL",
      reviewBody:
        "Ik ben erg tevreden over de samenwerking met Foundable. Na de uitgebreide audit van mijn website kreeg ik heel concrete verbeterpunten voor zowel de teksten als de technische code. Veel daarvan waren zaken waar ik zelf nooit aan gedacht zou hebben.\n\nZo bleek dat algemene omschrijvingen als “dicht bij het strand” voor zoekmachines en AI veel minder duidelijk te zijn dan concrete informatie, zoals “op 50 meter van het strand”. Foundable heeft mij geholpen om de informatie op mijn website veel specifieker en beter vindbaar te maken.\n\nDe adviezen werden niet alleen duidelijk uitgelegd, maar zo aangeleverd dat ik het makkelijk kon aanpassen op mijn website. Al binnen korte tijd merkte ik dat oa ChatGPT mijn bedrijf en aanbod beter begreep en relevanter kon aanbevelen.\n\nAbsoluut een aanrader voor bedrijven die beter gevonden willen worden via AI en online zoekmachines.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.foundable.nl/#organization",
      review: [
        { "@id": "https://www.foundable.nl/cases#review-klaas-kroezen" },
        { "@id": "https://www.foundable.nl/cases#review-ory-aan-zee" },
      ],
    },
  ],
};

// Sterrenrij plus citaat; de figcaption verschilt per review en komt binnen
// als children.
function ReviewQuote({
  paragraphs,
  children,
}: {
  paragraphs: string[];
  children: React.ReactNode;
}) {
  return (
    <figure className="mt-10 rounded-2xl border border-border bg-white p-8">
      <div
        className="flex items-center gap-1"
        role="img"
        aria-label="Beoordeling: 5 van 5 sterren"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <svg
            key={i}
            className="h-5 w-5 text-amber"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.539 1.118l-3.366-2.445a1 1 0 00-1.176 0l-3.366 2.445c-.783.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.363-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.951-.69l1.285-3.958z" />
          </svg>
        ))}
      </div>
      <blockquote className="mt-4 space-y-3 text-navy leading-relaxed">
        {paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </blockquote>
      <figcaption className="mt-5 text-sm text-text-light">
        {children}
      </figcaption>
    </figure>
  );
}

export default function CasesPage() {
  return (
    <>
      <JsonLd data={reviewsJsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24 bg-bg">
        <div className="aurora" aria-hidden="true">
          <div className="blob blob-1" />
          <div className="blob blob-3" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy leading-tight">
            Bedrijven die AI nu begrijpt.
          </h1>
          <p className="mt-4 text-lg text-text-light">
            Drie cases. Drie verschillende niches. Steeds dezelfde vraag: wat
            leest AI hier en wat mist het nog?
          </p>
        </div>
      </section>

      {/* Case 1 - Klaas Kroezen */}
      <section
        id="klaas-kroezen"
        className="py-16 sm:py-20 bg-bg-alt scroll-mt-20"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">
            Salestraining en keynotes, Castricum
          </p>
          <h2 className="mt-2 text-3xl font-bold text-navy">Klaas Kroezen</h2>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-navy">Uitdaging</h3>
              <p className="mt-2 text-text-light leading-relaxed">
                Klaas Kroezen is salestrainer en spreker, met meer dan 25 jaar
                ervaring en een eigen boek. Via AI krijgt hij steeds meer
                opdrachten binnen. Juist daarom wilde hij precies weten hoe AI
                hem nu leest en of je daar zelf iets aan kunt doen. Zijn site
                was al met veel zorg gebouwd. De vraag was dus niet of het
                goed zat, maar wat er nog ontbrak.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-navy">Aanpak</h3>
              <p className="mt-2 text-text-light leading-relaxed">
                We liepen de site helemaal na en het eerlijke antwoord was dat
                de basis er gewoon stond. Dat hebben we ook zo gezegd. Alleen zegt zo&rsquo;n score niet of
                alles eruit is gehaald. Op de site zelf vonden we nog een paar
                punten, zoals twee pagina&rsquo;s met een zichtbare FAQ maar
                zonder het FAQ-schema waarmee AI die vragen en antwoorden ook
                herkent. Daarna zijn we vooral buiten de site gaan kijken.
                Want of AI je noemt hangt maar deels af van je eigen
                pagina&rsquo;s; het kijkt net zo hard naar wat anderen over je
                schrijven.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-navy">Resultaat</h3>
              <p className="mt-2 text-text-light leading-relaxed">
                We hebben de audit bij Klaas aan tafel besproken en de
                belangrijkste punten diezelfde middag samen doorgevoerd. Geen
                rapport voor in een la, maar een site die er direct beter voor
                staat. En voor de wereld buiten zijn site ligt er een concreet
                lijstje, van meer reviews verzamelen tot vaker opduiken in
                artikelen op andere sites. Daar zit zijn volgende groei.
              </p>
            </div>
          </div>

          {/* Review */}
          <ReviewQuote
            paragraphs={[
              "Via AI krijg ik steeds meer opdrachten. Maar hoe goed ben ik daar eigenlijk vindbaar? En kun je daar invloed op krijgen? Daar heeft Quinten mij bij geholpen.",
              "Hij maakte een helder rapport over hoe ik er nu voorsta. Daarna zijn we er samen doorheen gegaan en hebben we de aanbevelingen meteen toegepast. Aan het einde van de sessie was er al echt iets veranderd.",
              "Quinten legt rustig uit, denkt met je mee en weet waar hij het over heeft. Ik zou hem zo aanraden.",
            ]}
          >
            <a
              href="https://www.klaaskroezen.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-navy hover:text-accent transition-colors"
            >
              Klaas Kroezen
            </a>
            , salestrainer en spreker &middot;{" "}
            <a
              href="https://www.google.com/maps?cid=7591528248257612358"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-accent transition-colors"
            >
              review op ons Google Bedrijfsprofiel
            </a>
            , juli 2026
          </ReviewQuote>
        </div>
      </section>

      {/* Case 2 - Ory aan Zee */}
      <section id="ory-aan-zee" className="py-16 sm:py-20 bg-bg scroll-mt-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">
            Vakantieverhuur, Noord-Holland
          </p>
          <h2 className="mt-2 text-3xl font-bold text-navy">Ory aan Zee</h2>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-navy">Uitdaging</h3>
              <p className="mt-2 text-text-light leading-relaxed">
                Ory aan Zee verhuurt vakantiewoningen aan de Nederlandse kust.
                De website zag er goed uit, maar AI kon er weinig mee. Bij
                zoekopdrachten als &lsquo;vakantiewoning aan zee
                boeken&rsquo; werd Ory aan Zee niet aanbevolen. Niet
                omdat het aanbod niet klopte, maar omdat de website te vaag was
                voor AI.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-navy">Aanpak</h3>
              <p className="mt-2 text-text-light leading-relaxed">
                We brachten in kaart wat AI wel en niet begreep van de site:
                structuur, duidelijkheid en techniek. De locatie, sfeer, doelgroep en
                unieke kenmerken van de woningen waren nauwelijks concreet
                beschreven. We herschreven de teksten, vulden ze aan met
                concrete feiten en leverden JSON-LD structured data aan met
                alle relevante informatie, klaar om te plaatsen.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-navy">Resultaat</h3>
              <p className="mt-2 text-text-light leading-relaxed">
                AI begrijpt nu wie Ory aan Zee is, waar het ligt, wat het kost
                en voor wie het geschikt is. Alles wat ChatGPT, Claude en
                Gemini van de site zelf nodig hebben om een aanbeveling te
                doen, staat er nu.
              </p>
            </div>
          </div>

          {/* Review */}
          <ReviewQuote
            paragraphs={[
              "Ik ben erg tevreden over de samenwerking met Foundable. Na de uitgebreide audit van mijn website kreeg ik heel concrete verbeterpunten voor zowel de teksten als de technische code. Veel daarvan waren zaken waar ik zelf nooit aan gedacht zou hebben.",
              "Zo bleek dat algemene omschrijvingen als “dicht bij het strand” voor zoekmachines en AI veel minder duidelijk te zijn dan concrete informatie, zoals “op 50 meter van het strand”. Foundable heeft mij geholpen om de informatie op mijn website veel specifieker en beter vindbaar te maken.",
              "De adviezen werden niet alleen duidelijk uitgelegd, maar zo aangeleverd dat ik het makkelijk kon aanpassen op mijn website. Al binnen korte tijd merkte ik dat oa ChatGPT mijn bedrijf en aanbod beter begreep en relevanter kon aanbevelen.",
              "Absoluut een aanrader voor bedrijven die beter gevonden willen worden via AI en online zoekmachines.",
            ]}
          >
            <span className="font-semibold text-navy">Marianne</span>,{" "}
            <a
              href="https://www.oryaanzee.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Ory aan Zee
            </a>{" "}
            &middot;{" "}
            <a
              href="https://www.google.com/maps?cid=7591528248257612358"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-accent transition-colors"
            >
              review op ons Google Bedrijfsprofiel
            </a>
            , juli 2026
          </ReviewQuote>
        </div>
      </section>

      {/* Case 3 - Bootzeil.nl */}
      <section id="bootzeil" className="py-16 sm:py-20 bg-bg-alt scroll-mt-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">
            Maatwerk bootzeilen en dekzeilen, Haarlem
          </p>
          <h2 className="mt-2 text-3xl font-bold text-navy">Bootzeil.nl</h2>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-navy">Uitdaging</h3>
              <p className="mt-2 text-text-light leading-relaxed">
                Bootzeil.nl maakt maatwerk zeilen en dekzeilen voor boten. Een
                technische niche met veel vakjargon. De website was informatief
                voor insiders, maar voor AI onbegrijpelijk. Termen als
                &lsquo;dacron&rsquo; en &lsquo;laminaatzeil&rsquo; zeggen een
                AI niets als er geen context bij staat.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-navy">Aanpak</h3>
              <p className="mt-2 text-text-light leading-relaxed">
                We liepen de site na op wat AI mist, verkeerd leest of niet
                kan plaatsen. Daar kwamen zes punten uit, van begrijpelijke
                taal naast het vakjargon tot de JSON-LD-code die AI vertelt
                wat Bootzeil maakt, voor wie en waar. Alles stond klaar om
                geplaatst te worden.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-navy">Resultaat</h3>
              <p className="mt-2 text-text-light leading-relaxed">
                Bootzeil kon er meteen mee aan de slag. Hun Google-reviews
                staan nu op de site, de vragen van kopers staan met antwoord
                op de productpagina&rsquo;s in code die AI als vraag en
                antwoord leest, de producten hebben een prijs in de codelaag
                en er is een llms.txt die AI in &eacute;&eacute;n keer
                vertelt wat er te vinden is. Bij de hermeting drie maanden
                later was de score gestegen. De technische expertise is
                behouden en AI kan er nu bij.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
