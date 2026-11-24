import type { DienstPagina } from "./types";
import { H2, P, UL, LI, A } from "@/content/kennis/elements";

const geoVoorSprekers: DienstPagina = {
  slug: "geo-voor-sprekers",
  metaTitel: "Als spreker vaker aanbevolen door ChatGPT en AI · Foundable",
  description:
    "Organisatoren vragen ChatGPT welke spreker ze moeten boeken. Foundable maakt op je site duidelijk waar je over spreekt, zodat AI je bij jouw onderwerp kan noemen.",
  naam: "GEO voor sprekers",
  h1: "Als spreker vaker aanbevolen worden door AI",
  intro:
    "Een organisator die een spreker zoekt, vraagt het steeds vaker eerst aan ChatGPT. ChatGPT noemt dan de sprekers die online het duidelijkst bij dat onderwerp horen. Foundable helpt je daartussen te komen. We maken je onderwerpen, je publiek en je ervaring duidelijk voor AI. Een meting kost €295 en de audit €999.",
  content: (
    <>
      <H2>AI kent je vaak wel, maar noemt je niet</H2>
      <P>
        We vroegen ChatGPT, Claude en Gemini naar Nederlandse experts:
        trainers, sprekers, auteurs, coaches en adviseurs. Omschreven we
        iemand, dan wist AI in ruim 9 van de 10 antwoorden wie we bedoelden.
        Vroegen we wie we moesten inhuren, dan noemde AI diezelfde expert in
        ongeveer een kwart van de antwoorden. Bekend zijn is dus iets anders
        dan aanbevolen worden.
      </P>

      <H2>Sprekersbureaus tellen mee</H2>
      <P>
        In datzelfde onderzoek noemde AI ook experts zonder dat hun eigen site
        voorbijkwam. Dan stond er vaak een sprekersbureau of boekingssite
        tussen de bronnen. AI neemt namen dus
        ook over van de plekken waar organisatoren al zoeken. Een goed profiel
        bij een bureau telt mee, op het juiste onderwerp. Het hele onderzoek
        lees je in{" "}
        <A href="/kennis/waarom-ai-je-kent-maar-niet-aanraadt">Waarom AI je wel kent maar niet aanraadt</A>.
      </P>

      <H2>Wat we voor sprekers doen</H2>
      <UL>
        <LI>
          We schrijven je teksten zo dat AI per onderwerp ziet voor wie je
          spreekt en in welke vorm, bijvoorbeeld als keynote of als
          dagvoorzitter. In jouw toon. Jij keurt de teksten eerst goed.
        </LI>
        <LI>
          Code die AI vertelt wie je bent, waar je over spreekt en welk boek je
          schreef, als je dat hebt (JSON-LD).
        </LI>
        <LI>Een FAQ met de vragen die organisatoren stellen.</LI>
        <LI>
          We kijken welke profielen je hebt bij sprekersbureaus en wat je het
          bureau kunt vragen aan te passen.
        </LI>
        <LI>Een meting vooraf en een nameting na 90 dagen.</LI>
      </UL>
      <P>
        Het werk doet Quinten Orij zelf. Op de <A href="/cases">casepagina</A>{" "}
        lees je hoe het ging bij een spreker en bij een salestrainer.
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
      vraag: "Passen jullie mijn profielen bij sprekersbureaus aan?",
      antwoord:
        "Die profielen beheert het bureau. Je krijgt van ons per profiel wat er beter kan, zodat je het bureau gericht kunt vragen wat er moet veranderen. Je eigen site passen we wel zelf aan als je de audit met inbouw kiest.",
    },
    {
      vraag: "Wat kost dit voor een spreker?",
      antwoord:
        "De prijzen zijn voor iedereen gelijk. De meting kost €295 en de audit €999. Met inbouw op je site is het €1.495 en met nazorg €1.750. Alle prijzen zijn excl. btw.",
    },
  ],
};

export default geoVoorSprekers;
