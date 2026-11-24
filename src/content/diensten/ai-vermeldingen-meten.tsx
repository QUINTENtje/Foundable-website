import type { DienstPagina } from "./types";
import { H2, P, UL, LI, A } from "@/content/kennis/elements";

const aiVermeldingenMeten: DienstPagina = {
  slug: "ai-vermeldingen-meten",
  metaTitel: "AI-zichtbaarheid meten: hoe vaak noemt AI je bedrijf? · Foundable",
  description:
    "Laat meten hoe vaak ChatGPT, Claude en Gemini je bedrijf noemen. Over 225 echte antwoorden, met de top 10 namen in je vak en wat AI over je vertelt. Vaste prijs: €295.",
  naam: "AI-vermeldingen meten",
  h1: "Laat meten hoe vaak AI je bedrijf noemt",
  intro:
    "Wil je weten of ChatGPT je bedrijf noemt? Met de meting stellen we ChatGPT, Claude en Gemini de vragen die jouw klanten stellen, elke vraag drie keer. Dat zijn 225 echte antwoorden. Je krijgt één A4 met hoe vaak AI je noemt, wat het over je vertelt en welke namen het in jouw vak noemt. De meting kost €295.",
  cta: { label: "Vraag de meting aan", href: "/start?keuze=meting" },
  content: (
    <>
      <H2>Wat we meten</H2>
      <UL>
        <LI>
          Twintig vragen die je klanten stellen, zonder je naam erin. Zo zie je
          of AI je uit zichzelf noemt.
        </LI>
        <LI>
          Vijf vragen over jou. Zo zie je wat AI over je vertelt en of dat
          klopt.
        </LI>
        <LI>
          Elke vraag drie keer, aan ChatGPT, Claude en Gemini. Dat zijn de drie
          die jouw klanten het meest gebruiken.
        </LI>
        <LI>De top 10 namen die AI in jouw vak noemt.</LI>
      </UL>

      <H2>Waarom drie keer per vraag</H2>
      <P>
        Stel je dezelfde vraag twee keer, dan krijg je vaak andere namen. Eén
        antwoord zegt dus weinig. Door elke vraag drie keer te stellen, zie je
        wat steeds terugkomt. Waarom de antwoorden zo wisselen, lees je in{" "}
        <A href="/kennis/waarom-elke-ai-andere-namen-noemt">Waarom elke AI andere bedrijven noemt</A>.
      </P>

      <H2>Zo gaat het</H2>
      <UL>
        <LI>Je vraagt de meting aan via het formulier.</LI>
        <LI>Wij maken de vragen voor jouw vak. Jij kijkt ze na.</LI>
        <LI>
          Binnen een week nadat je de vragen hebt goedgekeurd, heb je de
          uitslag als A4 in je mailbox.
        </LI>
        <LI>
          Doe je binnen 3 maanden een audit, dan telt de €295 volledig als
          aanbetaling.
        </LI>
      </UL>

      <H2>Eenmalig, geen abonnement</H2>
      <P>
        De meting is eenmalig. Elke maand laten meten bieden we niet aan. Wil
        je later zien wat er veranderd is? Bij de audit meten we op dag 90
        opnieuw. Bij de audit met nazorg ook na 3 en 6 maanden.
      </P>
    </>
  ),
  faq: [
    {
      vraag: "Wat kost een meting van je AI-zichtbaarheid?",
      antwoord: "€295 excl. btw, eenmalig. Doe je binnen 3 maanden een audit, dan telt dat bedrag volledig als aanbetaling.",
    },
    {
      vraag: "Welke AI-systemen meten jullie?",
      antwoord:
        "ChatGPT, Claude en Gemini. Perplexity en Copilot meten we niet. Het werk uit een audit helpt ook in systemen die we niet meten.",
    },
    {
      vraag: "Kan ik mijn eigen vragen aanleveren?",
      antwoord: "Ja, op aanvraag. Standaard maken wij de vragen voor jouw vak en kijk jij ze na.",
    },
    {
      vraag: "Meten jullie ook elke maand?",
      antwoord:
        "Nee. De meting is eenmalig. Bij de audit meten we op dag 90 opnieuw. Bij de audit met nazorg meten we ook na 3 en 6 maanden.",
    },
  ],
};

export default aiVermeldingenMeten;
