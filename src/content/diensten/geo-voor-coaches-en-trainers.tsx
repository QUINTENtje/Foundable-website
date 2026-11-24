import type { DienstPagina } from "./types";
import { H2, P, UL, LI, A } from "@/content/kennis/elements";

const geoVoorCoachesEnTrainers: DienstPagina = {
  slug: "geo-voor-coaches-en-trainers",
  metaTitel: "Als coach of trainer gevonden worden in ChatGPT · Foundable",
  description:
    "Klanten vragen ChatGPT steeds vaker welke coach of trainer ze moeten kiezen. Foundable zorgt dat AI je begrijpt en kan noemen bij jouw vak. Vaste prijzen vanaf €295.",
  naam: "GEO voor coaches en trainers",
  h1: "Als coach of trainer gevonden worden in ChatGPT",
  intro:
    "Wie een coach of trainer zoekt, vraagt het steeds vaker aan ChatGPT. AI noemt dan een paar namen. Jouw naam staat daar alleen tussen als AI begrijpt waar je goed in bent en voor wie. Foundable zorgt dat je site dat duidelijk zegt. We kijken ook mee naar je profielen elders. Een meting kost €295 en de audit €999.",
  content: (
    <>
      <H2>Wat een klant aan AI vraagt</H2>
      <P>
        Een klant vraagt bijvoorbeeld welke salestrainer goed is voor een team
        van tien verkopers. Een ander zoekt een executive coach voor een
        directeur die net begonnen is. AI zoekt dan naar je specialisme en je doelgroep.
        Staat dat niet duidelijk op je site, dan noemt AI dus iemand anders.
      </P>

      <H2>Je eigen site is de belangrijkste route</H2>
      <P>
        We vroegen ChatGPT, Claude en Gemini naar Nederlandse experts:
        trainers, sprekers, auteurs, coaches en adviseurs. AI raadde vooral de
        experts aan van wie het de site tegenkwam als het zocht op de vraag van
        een klant. Bij de experts die AI nooit noemde, kwam de eigen site bij
        het zoeken geen enkele keer voorbij. Het hele onderzoek lees je in{" "}
        <A href="/kennis/waarom-ai-je-kent-maar-niet-aanraadt">Waarom AI je wel kent maar niet aanraadt</A>.
      </P>

      <H2>Ook als je klanten via via komen</H2>
      <P>
        Hoor je vooral via via van nieuwe klanten? Ook dan vraagt een klant
        vaak eerst aan AI wie je bent. Dan wil je dat het antwoord klopt: je
        vak, je aanpak en wat je eerder deed. In de meting stellen we daarom
        ook vijf vragen over jou.
      </P>

      <H2>Wat we voor coaches en trainers doen</H2>
      <UL>
        <LI>
          Je site zo schrijven dat AI ziet waar je in gespecialiseerd bent en
          voor wie je werkt. In jouw toon. Jij keurt de teksten eerst goed.
        </LI>
        <LI>
          Code die AI vertelt wie je bent, wat je aanbiedt en welk boek je
          schreef, als je dat hebt (JSON-LD).
        </LI>
        <LI>Een FAQ met de vragen die je klanten stellen.</LI>
        <LI>
          Een analyse van je profielen buiten je site, zoals bij je
          beroepsvereniging: wat er staat en wat er beter kan.
        </LI>
        <LI>Een meting vooraf en een nameting na 90 dagen.</LI>
      </UL>
      <P>
        Het werk doet Quinten Orij zelf. Op de <A href="/cases">casepagina</A>{" "}
        lees je hoe het ging bij een salestrainer.
      </P>
    </>
  ),
  faq: [
    {
      vraag: "Hoe word ik als coach gevonden in ChatGPT?",
      antwoord:
        "Zorg dat AI op je eigen site terugvindt waar je in gespecialiseerd bent en voor wie je werkt. Ook je profielen elders tellen mee, zoals bij een beroepsvereniging. Een garantie bestaat niet, want AI stelt elk antwoord opnieuw samen.",
    },
    {
      vraag: "Werkt dit ook voor trainers die vooral bedrijven als klant hebben?",
      antwoord:
        "Ja. Ook bij zakelijke opdrachten vraagt een klant vaak eerst een AI om advies. De vragen in de meting maken we voor jouw klanten, dus ook voor inkopers en HR.",
    },
    {
      vraag: "Wat kost dit voor een coach of trainer?",
      antwoord:
        "De prijzen zijn voor iedereen gelijk. De meting kost €295 en de audit €999. Met inbouw op je site is het €1.495 en met nazorg €1.750. Alles excl. btw en eenmalig.",
    },
  ],
};

export default geoVoorCoachesEnTrainers;
