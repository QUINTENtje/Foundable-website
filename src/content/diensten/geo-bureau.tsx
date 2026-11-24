import type { DienstPagina } from "./types";
import { H2, P, UL, LI, Kader, A } from "@/content/kennis/elements";

const geoBureau: DienstPagina = {
  slug: "geo-bureau",
  metaTitel: "GEO-bureau Nederland: vindbaar in ChatGPT en AI · Foundable",
  description:
    "Foundable is een GEO-bureau in Amsterdam dat alleen GEO doet. We zorgen dat ChatGPT, Claude en Gemini je bedrijf begrijpen en kunnen noemen. Vaste prijzen vanaf €295.",
  naam: "GEO-bureau",
  h1: "Een GEO-bureau dat alleen GEO doet",
  intro:
    "Foundable is een GEO-bureau uit Amsterdam. We zorgen dat AI zoals ChatGPT, Claude en Gemini je bedrijf begrijpt en kan noemen als een klant om advies vraagt. Dat heet GEO, generative engine optimization. Je hoort ook wel AI SEO of AI-vindbaarheid. We doen niets anders. De prijzen staan gewoon op deze pagina.",
  content: (
    <>
      <H2>Wat doet een GEO-bureau?</H2>
      <P>
        Steeds meer mensen vragen eerst een AI wie ze moeten inhuren. Die AI
        zoekt dan op internet, leest een paar pagina&rsquo;s en noemt de namen
        die daar het duidelijkst staan. Een GEO-bureau zorgt dat jij daar
        tussen staat. Op je eigen site, maar ook op de plekken buiten je site
        waar AI zijn antwoord vandaan haalt.
      </P>
      <P>
        Het lijkt op SEO, maar het is niet hetzelfde. Bij SEO wil je bovenaan
        in Google staan. Bij GEO wil je dat AI jou noemt in zijn antwoord. Het
        verschil lees je in <A href="/kennis/seo-vs-geo">SEO of GEO: wat is het verschil?</A>
      </P>

      <H2>Wat je bij ons krijgt</H2>
      <UL>
        <LI>
          Eerst meten we waar je staat. We stellen ChatGPT, Claude en Gemini de
          vragen die jouw klanten stellen. Dat zijn samen 225 echte antwoorden.
          Dan weet je hoe vaak AI je noemt en wat het over je vertelt.
        </LI>
        <LI>
          Daarna de audit: je acties op volgorde, nieuwe teksten voor je site
          die AI begrijpt, een FAQ, JSON-LD-code en een gids voor jouw
          platform.
        </LI>
        <LI>
          Wil je het niet zelf plaatsen? Bij de audit met inbouw zetten wij
          alles op je site. Dat kan in WordPress, Wix of Squarespace.
        </LI>
        <LI>Op dag 90 meten we precies hetzelfde opnieuw.</LI>
      </UL>

      <H2>Voor wie we werken</H2>
      <P>
        We werken vooral met gevestigde experts die zichzelf verkopen:
        trainers, sprekers, auteurs en coaches. Daarnaast met gespecialiseerde
        advocaten en kleine adviesbureaus. De rode draad is dat je klanten
        via je eigen site bij je uitkomen. Dan telt het of AI je begrijpt.
      </P>
      <UL>
        <LI>
          <A href="/geo-voor-sprekers">GEO voor sprekers</A>
        </LI>
        <LI>
          <A href="/geo-voor-coaches-en-trainers">GEO voor coaches en trainers</A>
        </LI>
        <LI>
          <A href="/geo-voor-wix">Een Wix-site vindbaar maken voor AI</A>
        </LI>
      </UL>

      <H2>Waarom alleen GEO</H2>
      <P>
        Veel bureaus doen GEO erbij, naast SEO, advertenties of webdesign. Wij
        doen alleen dit. In elke opdracht meten we welke bronnen AI in dat vak
        leest en welke namen het noemt. Wat we in onze metingen zien, schrijven
        we op in <A href="/kennis">onze kennisartikelen</A>.
      </P>

      <H2>Wat we niet beloven</H2>
      <P>
        Een plek in het antwoord van ChatGPT kan niemand garanderen. Dat hangt
        ook af van je reviews, je concurrenten en hoe vaak je online genoemd
        wordt. Wat we wel doen: AI alles geven wat het nodig heeft om jou te
        begrijpen. Daarna meten we eerlijk wat het oplevert.
      </P>

      <H2>Hoe kies je een GEO-bureau?</H2>
      <Kader>
        <P>
          Vraag AI naar het bureau zelf. Kijk of hun eigen site doet wat ze jou
          verkopen. Let op of ze hun prijzen gewoon noemen. Meer controles
          staan in <A href="/kennis/geo-bureau-kiezen">Hoe kies je een GEO-bureau?</A>
        </P>
      </Kader>
    </>
  ),
  faq: [
    {
      vraag: "Wat kost een GEO-bureau?",
      antwoord:
        "Bij Foundable kost een meting €295 en de audit €999. Met inbouw op je site is het €1.495 en met nazorg €1.750. Alles excl. btw en eenmalig. Veel bureaus werken met een abonnement per maand. Wij niet.",
    },
    {
      vraag: "Wat is het verschil tussen een GEO-bureau en een SEO-bureau?",
      antwoord:
        "Een SEO-bureau werkt aan je plek in Google. Een GEO-bureau zorgt dat AI zoals ChatGPT, Claude en Gemini je begrijpt en noemt in zijn antwoord. Er zit overlap in, want AI zoekt ook via zoekmachines. Maar het doel is anders: genoemd worden in plaats van aangeklikt.",
    },
    {
      vraag: "Werken jullie in heel Nederland?",
      antwoord:
        "Ja. Foundable zit in Amsterdam en werkt voor klanten in heel Nederland. Het meeste gaat per mail.",
    },
    {
      vraag: "Hoe snel is de audit klaar?",
      antwoord:
        "Binnen 2 weken nadat je de vragen voor de meting hebt goedgekeurd. Op dag 90 meten we opnieuw. Hoe snel AI je oppakt, verschilt per systeem en per vak. Daarom beloven we geen datum.",
    },
  ],
};

export default geoBureau;
