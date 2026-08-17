import type { KennisArtikel } from "./types";
import { H2, P, UL, LI, A, StatRij } from "./elements";

const artikel: KennisArtikel = {
  slug: "wat-is-geo",
  titel: "Wat is GEO? Generative Engine Optimization uitgelegd",
  description:
    "GEO staat voor Generative Engine Optimization: je website zo inrichten dat AI-systemen zoals ChatGPT, Claude en Gemini je begrijpen en aanbevelen.",
  categorie: "Basis",
  gepubliceerd: "2026-07-07",
  leestijdMin: 5,
  intro:
    "GEO staat voor Generative Engine Optimization: je website zo inrichten dat AI-systemen zoals ChatGPT, Perplexity, Claude en Google AI begrijpen wie je bent, wat je doet en voor wie. Het doel is niet hoger in de zoekresultaten komen. Het doel is genoemd worden in het antwoord dat een AI geeft.",
  content: (
    <>
      <H2>Waarom GEO nu speelt</H2>
      <P>
        Steeds meer mensen stellen hun vraag niet meer aan Google, maar aan een
        AI. Ze vragen ChatGPT om een goede arbeidsrechtadvocaat in Utrecht, of
        Perplexity welke salestrainer bij hun team past. Ze krijgen direct een
        antwoord met een paar namen erin. Wie in dat antwoord staat, wordt
        gebeld. Wie er niet in staat, bestaat voor die klant simpelweg niet.
      </P>
      <P>
        Ook binnen Google zelf verschuift het. Bij bijna de helft van de
        zoekopdrachten verschijnt inmiddels een AI-samenvatting boven de
        gewone resultaten. Mensen lezen het antwoord en klikken minder vaak
        door. Je Google-positie zegt dus steeds minder over hoe vaak je echt
        gezien wordt.
      </P>

      <H2>Waar komt de term vandaan?</H2>
      <P>
        De term komt uit de wetenschap. Onderzoekers van onder meer Princeton
        University introduceerden hem eind 2023 in het paper{" "}
        <em>GEO: Generative Engine Optimization</em>, dat in 2024 werd
        gepresenteerd op de KDD-conferentie. Zij testten negen technieken om
        vaker in AI-antwoorden te verschijnen. De uitkomst was opvallend
        concreet:
      </P>
      <StatRij
        stats={[
          { waarde: "+40%", label: "zichtbaarheid door bronnen te citeren" },
          { waarde: "+37%", label: "door concrete cijfers toe te voegen" },
          { waarde: "+30%", label: "door citaten van experts op te nemen" },
        ]}
      />
      <P>
        Even interessant is wat niet werkte: het oude trucje van zoekwoorden
        herhalen (keyword stuffing) verlaagde de zichtbaarheid in
        AI-antwoorden met zo&rsquo;n 10%. AI beloont duidelijkheid en feiten,
        geen trucs.
      </P>

      <H2>Wat AI van je website nodig heeft</H2>
      <P>
        Een AI leest je website ongeveer zoals een haastige vreemde dat doet:
        het scant de tekst en pikt eruit wat concreet en begrijpelijk is. In
        de praktijk komt GEO neer op vijf dingen:
      </P>
      <UL>
        <LI>
          <strong className="text-navy">Duidelijke taal.</strong> Binnen de
          eerste alinea moet staan wie je bent, wat je doet en voor wie.
          Zonder omwegen.
        </LI>
        <LI>
          <strong className="text-navy">Concrete feiten.</strong> Prijzen,
          locatie, doelgroep, cijfers. AI vult ontbrekende feiten niet in;
          het kiest een bedrijf waar ze wel staan.
        </LI>
        <LI>
          <strong className="text-navy">Structuur.</strong> Koppen die de
          inhoud samenvatten, lijsten, een FAQ. AI citeert passages, geen
          hele pagina&rsquo;s.
        </LI>
        <LI>
          <strong className="text-navy">Structured data.</strong> Een blok{" "}
          <A href="/kennis/wat-is-json-ld">JSON-LD-code</A> dat machines in
          één keer vertelt wie je bent en waar je zit.
        </LI>
        <LI>
          <strong className="text-navy">Toegankelijkheid.</strong> Tekst die
          leesbaar is zonder JavaScript-fratsen en AI-crawlers die niet
          geblokkeerd worden in je robots.txt.
        </LI>
      </UL>

      <H2>Is GEO een vervanging van SEO?</H2>
      <P>
        Nee. SEO zorgt dat je gevonden wordt in de lijst met links, GEO zorgt
        dat je genoemd wordt in het antwoord. Ze overlappen deels en versterken
        elkaar. Het volledige verschil hebben we uitgewerkt in{" "}
        <A href="/kennis/seo-vs-geo">SEO vs. GEO: wat is het verschil?</A>
      </P>
    </>
  ),
  faq: [
    {
      vraag: "Is GEO hetzelfde als AEO of LLMO?",
      antwoord:
        "In de praktijk wel. AEO (Answer Engine Optimization), LLMO (LLM Optimization) en AI SEO zijn verschillende namen voor hetzelfde idee: zorgen dat AI-systemen je begrijpen en aanbevelen. GEO is de term uit het oorspronkelijke onderzoek en wordt het breedst gebruikt.",
    },
    {
      vraag: "Werkt GEO ook voor kleine bedrijven?",
      antwoord:
        "Juist. AI kijkt vooral naar duidelijkheid en concrete feiten, niet alleen naar naamsbekendheid. Een kleine website die precies vertelt wat het bedrijf doet, voor wie en waar, wint het regelmatig van een grote site vol vage teksten.",
    },
    {
      vraag: "Hoe snel zie ik resultaat van GEO?",
      antwoord:
        "Dat wisselt van weken tot maanden. AI-systemen die live zoeken, zoals Perplexity en ChatGPT met zoekfunctie, zien verbeteringen snel. Systemen die op oudere trainingsdata leunen, lopen achter. Hoe eerder je website op orde is, hoe eerder elk systeem het oppikt.",
    },
  ],
};

export default artikel;
