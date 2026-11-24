import type { DienstPagina } from "./types";
import { H2, P, UL, LI, A } from "@/content/kennis/elements";

const geoVoorCoachesEnTrainers: DienstPagina = {
  slug: "geo-voor-coaches-en-trainers",
  metaTitel: "Als coach of trainer gevonden worden in ChatGPT · Foundable",
  description:
    "Klanten vragen ChatGPT steeds vaker welke coach of trainer ze moeten kiezen. Foundable zorgt dat AI je begrijpt en kan noemen bij jouw vak. Vaste prijzen vanaf €295.",
  naam: "GEO voor coaches en trainers",
  h1: "Als coach of trainer gevonden worden in AI",
  intro:
    "Wie een coach of trainer zoekt, vraagt het steeds vaker aan ChatGPT. AI noemt dan een paar namen. Jouw naam staat daar alleen tussen als AI je goed begrijpt. Foundable zorgt daarvoor, op je eigen site en op de plekken waar AI in jouw vak zijn antwoord vandaan haalt.",
  content: (
    <>
      <H2>Bekend is nog niet aanbevolen</H2>
      <P>
        In ons onderzoek naar 81 Nederlandse experts wist AI in ruim 9 van de
        10 antwoorden wie we bedoelden als we iemand omschreven. Vroegen we wie
        we moesten inhuren, dan stond diezelfde expert in ongeveer een kwart
        van de antwoorden. Meer daarover in{" "}
        <A href="/kennis/waarom-ai-je-kent-maar-niet-aanraadt">Waarom AI je wel kent maar niet aanraadt</A>.
      </P>

      <H2>Wat een klant aan AI vraagt</H2>
      <P>
        Een klant vraagt bijvoorbeeld welke salestrainer goed is voor een team
        van tien verkopers. Of welke executive coach past bij een directeur
        die net begonnen is. AI zoekt dan naar je specialisme, je doelgroep en
        je aanpak. Staat dat niet helder op je site, dan noemt het iemand
        anders.
      </P>

      <H2>Wat we voor coaches en trainers doen</H2>
      <UL>
        <LI>
          Je site zo schrijven dat AI ziet waar je in gespecialiseerd bent en
          voor wie je werkt.
        </LI>
        <LI>
          JSON-LD-code die AI vertelt wie je bent, wat je aanbiedt en welk
          boek je schreef, als je dat hebt.
        </LI>
        <LI>Een FAQ met de vragen die je klanten stellen.</LI>
        <LI>
          Een analyse van je profielen buiten je site, zoals bij
          beroepsverenigingen en platforms: wat er staat en wat er beter kan.
        </LI>
        <LI>Een meting vooraf en een nameting na 90 dagen.</LI>
      </UL>
      <P>
        Op onze <A href="/cases">casepagina</A> lees je hoe dat ging bij een
        salestrainer.
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
        "Ja. Juist bij zakelijke opdrachten vraagt de klant steeds vaker eerst een AI om advies. De vragen in de meting maken we voor jouw klanten, dus ook voor inkopers en HR.",
    },
    {
      vraag: "Wat kost dit voor een coach of trainer?",
      antwoord:
        "Hetzelfde als voor iedereen: de meting €295, de audit €999 en met inbouw op je site €1.495. Alles excl. btw en eenmalig.",
    },
  ],
};

export default geoVoorCoachesEnTrainers;
