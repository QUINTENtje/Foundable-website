import type { KennisArtikel } from "./types";
import { H2, P, A, Tabel } from "./elements";

const artikel: KennisArtikel = {
  slug: "seo-vs-geo",
  titel: "SEO vs. GEO: wat is het verschil?",
  description:
    "SEO zorgt dat je gevonden wordt in de lijst met zoekresultaten. GEO zorgt dat je genoemd wordt in het AI-antwoord zelf. De verschillen op een rij.",
  categorie: "Basis",
  gepubliceerd: "2026-07-07",
  leestijdMin: 4,
  intro:
    "SEO zorgt dat je website gevonden wordt in de lijst met zoekresultaten. GEO zorgt dat je bedrijf genoemd wordt in het antwoord van een AI. Bij SEO concurreer je om een positie op een pagina met tien blauwe links. Bij GEO concurreer je om een plek in het antwoord zelf. En daar passen maar een paar namen in.",
  content: (
    <>
      <H2>De kern in één tabel</H2>
      <Tabel
        kop={["", "SEO", "GEO"]}
        rijen={[
          [
            "Doel",
            "Hoog in de zoekresultaten staan",
            "Genoemd worden in het AI-antwoord",
          ],
          [
            "Resultaat",
            "Een klik naar je website",
            "Een aanbeveling, vaak zonder klik",
          ],
          [
            "Wie beslist",
            "Een ranking-algoritme",
            "Een taalmodel dat je pagina leest en samenvat",
          ],
          [
            "Eenheid",
            "Pagina’s die ranken",
            "Passages die geciteerd worden",
          ],
          [
            "Meten",
            "Positie per zoekwoord",
            "Vermeldingen in AI-antwoorden",
          ],
          [
            "Wat zwaar telt",
            "Links, autoriteit, techniek",
            "Duidelijkheid, feiten, structuur, consistentie",
          ],
        ]}
      />

      <H2>Wat hetzelfde blijft</H2>
      <P>
        Het goede nieuws: werk aan SEO is niet weggegooid. Een snelle site,
        nette techniek en inhoud die echt ergens over gaat, vormen de basis
        voor allebei. Google AI Overviews leunt bovendien sterk op de gewone
        zoekresultaten. Sta je daar goed, dan heb je in die AI-samenvattingen
        een voorsprong.
      </P>

      <H2>Wat echt anders is</H2>
      <P>
        Een AI leest geen pagina&rsquo;s, het leest passages. Elke sectie van
        je website moet op zichzelf te begrijpen zijn, want AI knipt je
        verhaal in stukken en gebruikt alleen het stuk dat de vraag
        beantwoordt. Een pagina die pas na drie alinea&rsquo;s vertelt wat je
        doet, valt buiten de selectie.
      </P>
      <P>
        Ook oude gewoontes werken anders uit. Zoekwoorden herhalen hielp
        vroeger bij Google en werd hooguit genegeerd. In AI-antwoorden werkt
        het averechts: het Princeton-onderzoek naar GEO (KDD 2024) mat er een
        daling van zichtbaarheid mee van zo&rsquo;n 10%. Wat wel werkt:
        bronnen noemen, concrete cijfers geven en helder schrijven.
      </P>

      <H2>Dus: SEO of GEO?</H2>
      <P>
        Allebei, maar de verhouding hangt af van waar jouw klanten zoeken.
        Verkoop je iets wat mensen op advies kiezen, zoals een trainer,
        advocaat of consultant, dan verschuift die keuze nu het snelst naar
        AI. Hoe
        AI die keuze precies maakt, lees je in{" "}
        <A href="/kennis/hoe-kiest-chatgpt-bedrijven">
          Hoe kiest ChatGPT welke bedrijven het aanbeveelt?
        </A>
      </P>
    </>
  ),
  faq: [
    {
      vraag: "Vervangt GEO mijn SEO?",
      antwoord:
        "Nee. SEO blijft belangrijk zolang mensen googelen, en Google AI Overviews bouwt zelfs voort op de gewone rankings. GEO komt erbovenop: het zorgt dat je ook zichtbaar bent waar het antwoord de klik vervangt.",
    },
    {
      vraag: "Ik sta bovenaan in Google. Ben ik dan ook zichtbaar in ChatGPT?",
      antwoord:
        "Niet automatisch. ChatGPT en Perplexity halen hun bronnen breder op dan de top van Google en kiezen op leesbaarheid en concreetheid. Een nummer één in Google die vaag geschreven is, kan in AI-antwoorden compleet ontbreken.",
    },
    {
      vraag: "Kan mijn SEO-bureau GEO er niet gewoon bij doen?",
      antwoord:
        "Soms. Vraag ze concreet hoe ze omgaan met JSON-LD structured data, AI-crawlers in robots.txt en het herschrijven van tekst naar extraheerbare passages. Komt daar geen helder antwoord op, dan doen ze klassieke SEO en geen GEO.",
    },
  ],
};

export default artikel;
