import type { Metadata } from "next";
import { H2, P, UL, LI, A } from "@/content/kennis/elements";

export const metadata: Metadata = {
  title: "Privacyverklaring · Foundable",
  description:
    "Welke gegevens Foundable gebruikt, waarom dat gebeurt en welke rechten je hebt.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Foundable",
    url: "https://www.foundable.nl/privacy",
    title: "Privacyverklaring · Foundable",
    description:
      "Welke gegevens Foundable gebruikt, waarom dat gebeurt en welke rechten je hebt.",
    images: [{ url: "/logo.png" }],
  },
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-bg">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy">
            Privacyverklaring
          </h1>
          <p className="mt-4 text-lg text-text-light">
            Hier lees je welke gegevens ik gebruik, waarom ik dat doe en wat je
            rechten zijn.
          </p>
          <p className="mt-2 text-sm text-text-light">
            Laatst bijgewerkt op 1 november 2026.
          </p>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <H2>Wie ik ben</H2>
          <P>
            Foundable is verantwoordelijk voor de gegevens op deze pagina. Ik
            ben Quinten Orij, de oprichter. Je bereikt me op{" "}
            <A href="mailto:quinten@foundable.nl">quinten@foundable.nl</A> of
            +31 6 38389591. Foundable staat bij de KvK ingeschreven onder
            nummer 96898267 en is gevestigd op Andreasplein 84, 1058 GD
            Amsterdam.
          </P>

          <H2>Welke gegevens ik gebruik en waarom</H2>
          <UL>
            <LI>
              <strong>Als je een formulier invult.</strong> Je naam, je
              e-mailadres, je website en wat je er verder bij zet komen als
              mail bij mij binnen. Dat gebruik ik om je te antwoorden en je
              aanvraag uit te voeren. De grondslag is de overeenkomst die je met
              me aangaat of wilt aangaan.
            </LI>
            <LI>
              <strong>Als je klant bent.</strong> Ik bewaar je contactgegevens,
              je factuurgegevens en wat we per mail of telefoon afspreken. Dat
              heb ik nodig om het werk te doen. Voor facturen geldt ook een
              wettelijke bewaarplicht.
            </LI>
            <LI>
              <strong>Als ik je een eerste mail stuur.</strong> Ik gebruik dan
              je naam, je zakelijke mailadres en wat er op je site en in
              AI-antwoorden over je staat. Die gegevens komen uit openbare
              bronnen. Ik houd ze bij in mijn eigen klantoverzicht, samen met de
              stand van ons contact. De grondslag is mijn gerechtvaardigd
              belang: ik wil mensen bereiken voor wie mijn werk iets kan
              betekenen. Wil je geen mail meer, dan is één berichtje genoeg.
            </LI>
            <LI>
              <strong>Als je de site bezoekt.</strong> Ik zie anonieme
              bezoekcijfers via Vercel Web Analytics: welke pagina&rsquo;s
              bekeken worden, via welke site mensen binnenkomen en op wat voor
              apparaat. Daar komen geen cookies aan te pas. Mijn hostingpartij
              Vercel verwerkt daarnaast technische gegevens zoals je IP-adres,
              omdat de site anders niet werkt.
            </LI>
          </UL>

          <H2>Met wie ik gegevens deel</H2>
          <P>
            Ik verkoop geen gegevens. Wel gebruik ik diensten die gegevens voor
            mij verwerken:
          </P>
          <UL>
            <LI>Vercel: de hosting van de site en de bezoekcijfers.</LI>
            <LI>Resend: het afleveren van de formulieren in mijn mailbox.</LI>
            <LI>Hostnet: mijn zakelijke mail.</LI>
            <LI>Apple iCloud: de opslag van mijn bestanden.</LI>
            <LI>bunq: betalingen.</LI>
            <LI>
              Anthropic, OpenAI en Google: de AI-modellen die ik gebruik bij
              mijn werk en bij de metingen.
            </LI>
          </UL>
          <P>
            Een deel van deze bedrijven zit in de Verenigde Staten, dus je
            gegevens kunnen ook daar terechtkomen. Zij bieden daarvoor de
            waarborgen die de AVG vraagt, zoals de standaardcontracten van de
            Europese Commissie.
          </P>

          <H2>Hoe lang ik gegevens bewaar</H2>
          <P>
            Ik bewaar gegevens zo lang als nodig is voor het doel waarvoor ik ze
            heb. Facturen en de rest van de administratie bewaar ik zeven jaar,
            want dat is wettelijk verplicht. Vraag je me om gegevens te
            verwijderen, dan doe ik dat, behalve wat ik volgens de wet moet
            bewaren.
          </P>

          <H2>Cookies</H2>
          <P>
            Deze site plaatst geen cookies om je te volgen. Daarom zie je ook
            geen cookiemelding.
          </P>

          <H2>Jouw rechten</H2>
          <P>
            Je mag vragen welke gegevens ik van je heb. Je mag ze laten
            aanpassen, verwijderen of overdragen. Je mag ook bezwaar maken tegen
            het gebruik ervan. Stuur dan een mail naar{" "}
            <A href="mailto:quinten@foundable.nl">quinten@foundable.nl</A>, dan
            reageer ik binnen een maand.
          </P>
          <P>
            Kom je er met mij niet uit, dan kun je een klacht indienen bij de{" "}
            <A href="https://www.autoriteitpersoonsgegevens.nl">
              Autoriteit Persoonsgegevens
            </A>
            .
          </P>
        </div>
      </section>
    </>
  );
}
