import type { DienstPagina } from "./types";
import { H2, P, UL, LI, A } from "@/content/kennis/elements";

const geoVoorWix: DienstPagina = {
  slug: "geo-voor-wix",
  metaTitel: "Wix-site vindbaar maken voor ChatGPT en AI · Foundable",
  description:
    "Staat je site op Wix en kun je niet programmeren? Foundable maakt hem geschikt voor ChatGPT, Claude en Gemini. Bij de audit met inbouw zetten we alles zelf in Wix.",
  naam: "GEO voor Wix",
  h1: "Je Wix-site vindbaar maken voor AI",
  intro:
    "Ook een site in Wix kan AI goed lezen. Je hoeft er niet voor te programmeren. Foundable schrijft de teksten, maakt de code en zet bij de audit met inbouw alles zelf in je Wix-site. Jij keurt alleen de teksten goed die je bezoekers zien.",
  cta: { label: "Start je audit met inbouw", href: "/start?keuze=inbouw" },
  content: (
    <>
      <H2>Wat er in Wix kan</H2>
      <UL>
        <LI>Per pagina een eigen titel en omschrijving, die AI en zoekmachines lezen.</LI>
        <LI>
          Structured data per pagina: JSON-LD-code die AI precies vertelt wie
          je bent en wat je doet. Wix staat per blok minder dan 7.000 tekens
          toe. Per pagina is dat 8.000.
        </LI>
        <LI>
          Een FAQ op je pagina. Gebruik je de FAQ-app van Wix, dan kijken we
          eerst of die zelf al de juiste code meegeeft.
        </LI>
        <LI>Teksten die AI begrijpt, gewoon in de editor van Wix.</LI>
      </UL>

      <H2>Waar Wix-sites vaak op vastlopen</H2>
      <P>
        Twee dingen kwamen we vaker tegen: een blok code dat te groot is voor
        Wix en een FAQ-app waarvan de code niet compleet is. Daar letten we bij
        elke Wix-site op.
      </P>

      <H2>Zelf plaatsen of door ons</H2>
      <P>
        Bij de audit met inbouw nodig je ons uit als medewerker in je
        Wix-site. Wij plaatsen alles uit de implementatiegids en lopen het
        daarna na. De zichtbare teksten krijg je eerst te zien, want het blijft
        jouw verhaal.
      </P>
      <P>
        Doe je het liever zelf? Bij de gewone audit krijg je een gids voor
        Wix, met per punt waar het moet staan. Wat we verder leveren, lees je
        op de pagina <A href="/geo-bureau">GEO-bureau</A>.
      </P>
    </>
  ),
  faq: [
    {
      vraag: "Kan ChatGPT een Wix-site goed lezen?",
      antwoord:
        "Ja, als de teksten en de code kloppen. In Wix kun je per pagina de titel, de omschrijving en structured data instellen. Dat is precies wat AI helpt om je te begrijpen.",
    },
    {
      vraag: "Moet ik kunnen programmeren?",
      antwoord:
        "Nee. Bij de audit met inbouw plaatsen wij alles. Bij de gewone audit krijg je een gids die per punt laat zien waar het in Wix moet.",
    },
    {
      vraag: "Wat kost het om een Wix-site geschikt te maken voor AI?",
      antwoord:
        "De audit kost €999 en met inbouw €1.495. Alles excl. btw en eenmalig.",
    },
  ],
};

export default geoVoorWix;
