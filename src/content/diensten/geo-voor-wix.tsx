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
    "AI kan ook een Wix-site goed lezen. Je hoeft er niet voor te programmeren. Foundable schrijft de teksten, maakt de code en zet bij de audit met inbouw alles zelf in je Wix-site. Jij keurt alleen de teksten goed die je bezoekers zien. De audit met inbouw kost €1.495.",
  cta: { label: "Start je audit met inbouw", href: "/start?keuze=inbouw" },
  content: (
    <>
      <H2>Waarom dit telt</H2>
      <P>
        Steeds meer klanten vragen eerst aan ChatGPT wie ze moeten inhuren. AI
        zoekt dan op internet en noemt de bedrijven die online het duidelijkst
        bij de vraag passen. Of je site in Wix staat of ergens anders, maakt
        daarbij weinig uit. Wat telt, is of AI snapt wat je doet en voor wie.
      </P>

      <H2>Wat er in Wix kan</H2>
      <UL>
        <LI>Per pagina een eigen titel en omschrijving, die AI en zoekmachines lezen.</LI>
        <LI>
          Code per pagina die AI vertelt wie je bent en wat je doet.
          Wix heeft een grens aan hoeveel code er past. Daar houden wij
          rekening mee.
        </LI>
        <LI>
          Een FAQ op je pagina. Gebruik je de FAQ-app van Wix? Dan kijken we
          eerst of die app AI al goed vertelt wat er in je FAQ staat.
        </LI>
        <LI>Teksten die AI begrijpt, gewoon in de editor van Wix.</LI>
      </UL>

      <H2>Zelf plaatsen of door ons</H2>
      <P>
        Bij de audit met inbouw nodig je ons uit als medewerker in je
        Wix-site. Wij zetten alles erin en controleren daarna of het werkt. De
        zichtbare teksten krijg je eerst te zien, want het blijft jouw verhaal.
      </P>
      <P>
        Doe je het liever zelf? Bij de gewone audit (€999) krijg je een gids
        voor Wix, met per punt waar het moet staan. Wat we verder leveren, lees
        je op de pagina <A href="/geo-bureau">GEO-bureau</A>.
      </P>
    </>
  ),
  faq: [
    {
      vraag: "Kan ChatGPT een Wix-site goed lezen?",
      antwoord:
        "Ja, als de teksten en de code kloppen. In Wix kun je per pagina de titel, de omschrijving en code voor AI instellen. Daarmee begrijpt AI beter wat je doet.",
    },
    {
      vraag: "Moet ik kunnen programmeren?",
      antwoord:
        "Nee. Bij de audit met inbouw plaatsen wij alles. Bij de gewone audit krijg je een gids die per punt laat zien waar het in Wix moet.",
    },
    {
      vraag: "Verandert er iets aan hoe mijn site eruitziet?",
      antwoord:
        "Je teksten worden aangescherpt, in jouw toon. De code voor AI zien je bezoekers niet. Aan het ontwerp van je site veranderen we niets.",
    },
    {
      vraag: "Hoeveel code past er in Wix?",
      antwoord:
        "Volgens de hulp van Wix moet een blok code per pagina onder de 7.000 tekens blijven. Per pagina mag er in totaal 8.000 tekens bij. Daar houden wij rekening mee, dus jij merkt er niets van.",
    },
    {
      vraag: "Wat kost het om een Wix-site geschikt te maken voor AI?",
      antwoord:
        "De audit kost €999 en met inbouw €1.495. Alles excl. btw en eenmalig.",
    },
  ],
};

export default geoVoorWix;
