import type { KennisArtikel } from "./types";
import { H2, H3, P, A, UL, LI } from "./elements";

const artikel: KennisArtikel = {
  slug: "geo-bureau-kiezen",
  titel: "Hoe kies je een GEO-bureau?",
  description:
    "Steeds meer bureaus bieden GEO aan. Met deze vijf controles zie je binnen tien minuten of je met een specialist praat of met een nieuw etiket op oud werk.",
  categorie: "Praktijk",
  gepubliceerd: "2026-09-01",
  leestijdMin: 5,
  intro:
    "Kies een GEO-bureau op controleerbare feiten. Vraag AI naar het bureau zelf, bekijk hun eigen site met dezelfde blik die ze aan jou verkopen en let op of ze hun prijzen gewoon noemen. Met de vijf controles in dit artikel weet je binnen tien minuten of je met een specialist praat.",
  content: (
    <>
      <H2>Wat doet een GEO-bureau?</H2>
      <P>
        GEO staat voor Generative Engine Optimization: zorgen dat AI-modellen
        zoals ChatGPT, Gemini en Perplexity je bedrijf begrijpen en noemen als
        iemand om hulp vraagt. Een GEO-bureau werkt daarvoor aan je website.
        Denk aan teksten die AI kan lezen en citeren en aan structured data
        die vastlegt wie je bent. Een goed bureau meet daarnaast wat AI nu
        over je zegt en adviseert over de plekken buiten je site die meewegen,
        zoals reviews en vermeldingen. Wat GEO inhoudt lees je uitgebreider in{" "}
        <A href="/kennis/wat-is-geo">Wat is GEO?</A>
      </P>

      <H2>Drie soorten aanbieders</H2>
      <UL>
        <LI>
          SEO-bureaus met GEO in het aanbod. Zij kennen de techniek van
          websites goed. Vraag door naar wat ze anders doen dan hun gewone
          SEO-werk, want de aanpak verschilt echt.
        </LI>
        <LI>
          Meetsoftware en dashboards. Die laten via een abonnement zien hoe
          vaak AI je noemt. Meten is nuttig, maar het verandert niets aan je
          site.
        </LI>
        <LI>
          GEO-specialisten. Die doen alleen dit werk en leveren naast advies
          ook de uitvoering: herschreven teksten, code en een
          implementatiegids.
        </LI>
      </UL>

      <H2>Vijf controles die je in tien minuten doet</H2>

      <H3>1. Vraag ChatGPT naar het bureau zelf</H3>
      <P>
        Stel de vraag die jij straks door je eigen klanten beantwoord wilt
        zien, maar dan over hen: wat is dit bureau en wat doen ze? Wie
        AI-zichtbaarheid verkoopt hoort zelf herkenbaar uit die test te komen.
        Komt er een vaag of leeg antwoord terug, dan weet je genoeg.
      </P>

      <H3>2. Bekijk hun eigen site zoals zij naar de jouwe zouden kijken</H3>
      <P>
        Tik achter hun domein /llms.txt in. Dat bestand is het visitekaartje
        van dit vak: een samenvatting van het bedrijf die speciaal voor
        AI-modellen is bedoeld. Bekijk daarna de broncode van hun homepage en
        zoek op ld+json, dan zie je of ze structured data gebruiken. Wie het
        vak beheerst past het op de eigen site toe.
      </P>

      <H3>3. Kijk of er een prijs op de site staat</H3>
      <P>
        GEO is nieuw en dat maakt prijzen lastig te vergelijken. Een bureau
        dat zijn tarieven gewoon op de site zet maakt die vergelijking
        mogelijk. Moet je eerst een gesprek in om een bedrag te horen, dan
        betaal je dat gesprek uiteindelijk ook. Wat er in de markt gevraagd
        wordt lees je in{" "}
        <A href="/kennis/wat-kost-zichtbaar-worden-in-ai">
          Wat kost zichtbaar worden in AI?
        </A>
      </P>

      <H3>4. Vraag wat je in handen krijgt</H3>
      <P>
        Een rapport met bevindingen is een begin. Je wilt weten wat er daarna
        gebeurt: krijg je herschreven teksten, de code voor structured data en
        een gids voor jouw platform? Vraag of je een voorbeeld van een
        oplevering mag zien. Dan weet je of je advies koopt of een resultaat.
      </P>

      <H3>5. Vraag hoe ze resultaat meten</H3>
      <P>
        Een goed antwoord noemt echte AI-antwoorden: dezelfde vragen aan
        meerdere modellen gesteld, voor en na het werk, met aantallen erbij.
        Wij meten bijvoorbeeld over 225 antwoorden per ronde. Zo zie je zwart
        op wit of je vaker genoemd wordt.
      </P>

      <H2>Waar Foundable staat</H2>
      <P>
        Foundable is zo&rsquo;n specialist. We doen alleen GEO, onze prijzen
        staan op de site en je krijgt naast het advies ook alle teksten en
        code erbij. De vijf controles hierboven mag je dus als eerste op ons
        loslaten: vraag ChatGPT naar Foundable, tik foundable.nl/llms.txt in
        en bekijk onze broncode. Zo hoort het bij iedereen die je overweegt.
      </P>
    </>
  ),
  faq: [
    {
      vraag: "Wat kost een GEO-bureau?",
      antwoord:
        "Bij Foundable kost een losse meting €295 en een volledige audit €999, beide excl. BTW en eenmalig. In de bredere markt betaal je voor meetsoftware tientjes per maand en voor doorlopende trajecten bij grote bureaus al snel duizenden euro's per maand.",
    },
    {
      vraag: "Heb ik een groot bureau nodig?",
      antwoord:
        "De grootte van het bureau zegt weinig. GEO is leeswerk en schrijfwerk aan jouw site en dat doet ook bij een groot bureau een klein team. Kijk naar wat je in handen krijgt en hoe er gemeten wordt.",
    },
    {
      vraag: "Hoe snel zie ik resultaat van GEO?",
      antwoord:
        "AI-modellen halen hun informatie deels live van je site en deels uit trainingsdata. Aanpassingen kunnen binnen weken zichtbaar worden in antwoorden die live zoeken, zoals ChatGPT met zoekfunctie en Perplexity. Wij meten daarom na 90 dagen opnieuw, dan is het effect goed te zien.",
    },
  ],
};

export default artikel;
