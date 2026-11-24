import type { DienstPagina } from "./types";
import { H2, P, UL, LI, A } from "@/content/kennis/elements";

const geoVoorSprekers: DienstPagina = {
  slug: "geo-voor-sprekers",
  metaTitel: "Als spreker vaker aanbevolen door ChatGPT en AI · Foundable",
  description:
    "Organisatoren vragen steeds vaker aan ChatGPT welke spreker ze moeten boeken. Foundable zorgt dat AI je begrijpt als spreker en je kan noemen bij jouw onderwerp.",
  naam: "GEO voor sprekers",
  h1: "Als spreker vaker aanbevolen worden door AI",
  intro:
    "Een organisator die een spreker zoekt, vraagt het steeds vaker eerst aan ChatGPT. AI noemt dan de sprekers die het bij dat onderwerp het duidelijkst tegenkomt. Foundable zorgt dat jij daartussen staat, met je onderwerpen, je publiek en je ervaring helder voor AI.",
  content: (
    <>
      <H2>AI kent je vaak wel</H2>
      <P>
        In ons onderzoek naar 81 Nederlandse experts wist AI in ruim 9 van de
        10 antwoorden wie we bedoelden als we iemand omschreven. Vroegen we wie
        we moesten inhuren, dan stond diezelfde expert in ongeveer een kwart
        van de antwoorden. Bekend zijn is dus iets anders dan aanbevolen
        worden. Meer daarover in{" "}
        <A href="/kennis/waarom-ai-je-kent-maar-niet-aanraadt">Waarom AI je wel kent maar niet aanraadt</A>.
      </P>

      <H2>Waar AI kijkt bij een sprekersvraag</H2>
      <P>
        Bij een vraag naar een spreker zoekt AI op het onderwerp, zoals
        duurzaamheid of leiderschap. Het leest dan je eigen site, maar ook de
        overzichten van anderen, zoals sprekersbureaus. Staat jouw onderwerp
        nergens helder, dan noemt AI iemand anders.
      </P>

      <H2>Wat we voor sprekers doen</H2>
      <UL>
        <LI>
          Je site zo schrijven dat AI per onderwerp ziet waar je over spreekt,
          voor wie en in welke vorm: keynote, workshop of dagvoorzitter.
        </LI>
        <LI>
          JSON-LD-code die AI vertelt wie je bent, waar je over spreekt en welk
          boek je schreef, als je dat hebt.
        </LI>
        <LI>Een FAQ met de vragen die organisatoren stellen.</LI>
        <LI>
          Een analyse van je profielen buiten je site, zoals bij
          sprekersbureaus: wat er staat, wat er mist en wat er beter kan.
        </LI>
        <LI>Een meting vooraf en een nameting na 90 dagen.</LI>
      </UL>
      <P>
        Op onze <A href="/cases">casepagina</A> lees je hoe dat ging bij een
        salestrainer en bij een spreker.
      </P>
    </>
  ),
  faq: [
    {
      vraag: "Hoe word ik als spreker aanbevolen door ChatGPT?",
      antwoord:
        "Zorg dat AI bij jouw onderwerp jouw naam tegenkomt. Dat begint met een duidelijke pagina per onderwerp op je eigen site. Ook je profielen bij sprekersbureaus tellen mee. Een garantie bestaat niet, want AI stelt elk antwoord opnieuw samen.",
    },
    {
      vraag: "Helpt een profiel bij een sprekersbureau?",
      antwoord:
        "Ja, als het klopt en je onderwerpen erop staan. AI leest ook de overzichten van sprekersbureaus. In de audit kijken we welke profielen er zijn en wat erop beter kan.",
    },
    {
      vraag: "Wat kost dit voor een spreker?",
      antwoord:
        "Hetzelfde als voor iedereen: de meting €295, de audit €999 en met inbouw op je site €1.495. Alles excl. btw en eenmalig.",
    },
  ],
};

export default geoVoorSprekers;
