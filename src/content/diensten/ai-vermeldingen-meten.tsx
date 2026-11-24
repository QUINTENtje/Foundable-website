import type { DienstPagina } from "./types";
import { H2, P, UL, LI, A } from "@/content/kennis/elements";

const aiVermeldingenMeten: DienstPagina = {
  slug: "ai-vermeldingen-meten",
  metaTitel: "AI-zichtbaarheid meten: hoe vaak noemt AI je bedrijf? · Foundable",
  description:
    "Laat meten hoe vaak ChatGPT, Claude en Gemini je bedrijf noemen. Je krijgt de uitslag van 225 echte antwoorden, met de top 10 namen in je vak en wat AI over je vertelt. De meting kost €295.",
  naam: "AI-vermeldingen meten",
  h1: "Laat meten hoe vaak AI je bedrijf noemt",
  intro:
    "Wil je weten of ChatGPT je bedrijf noemt? We stellen ChatGPT, Claude en Gemini 20 vragen die je klanten zouden kunnen stellen en 5 vragen over jou, elke vraag drie keer per AI. Zo krijg je 225 antwoorden. De uitslag krijg je op één A4: hoe vaak AI je noemt, wat het over je vertelt en welke namen het in jouw vak noemt. De meting kost €295.",
  cta: { label: "Vraag de meting aan", href: "/start?keuze=meting" },
  content: (
    <>
      <H2>Wat we meten</H2>
      <UL>
        <LI>
          Twintig vragen die je klanten zouden kunnen stellen, zonder je naam erin. Zo zie je
          of AI je uit zichzelf noemt.
        </LI>
        <LI>
          Vijf vragen over jou. Dan zie je wat AI over je vertelt en of dat
          klopt.
        </LI>
        <LI>
          Elke vraag stellen we drie keer aan elk model: ChatGPT, Claude en
          Gemini.
        </LI>
        <LI>De top 10 namen die AI in jouw vak noemt. Dan zie je wie AI wel aanraadt.</LI>
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
        <LI>
          Binnen twee werkdagen krijg je een persoonlijke mail met de
          betaallink. De meting betaal je in één keer.
        </LI>
        <LI>Wij maken de vragen voor jouw vak. Jij kijkt ze na.</LI>
        <LI>
          Binnen een week nadat je de vragen hebt goedgekeurd, heb je de
          uitslag in je mailbox.
        </LI>
        <LI>
          Kies je binnen 3 maanden alsnog de audit? Dan gaat de €295 van de
          prijs af.
        </LI>
      </UL>

      <H2>Eenmalig</H2>
      <P>
        De meting is eenmalig, zonder abonnement. We bieden geen maandelijkse
        meting aan. In de audit zitten een meting vooraf en een nameting op
        dag 90. Bij de audit met nazorg meten we ook na 3 en 6 maanden.
      </P>
    </>
  ),
  faq: [
    {
      vraag: "Wat kost een meting van je AI-zichtbaarheid?",
      antwoord:
        "€295 excl. btw, eenmalig. Kies je binnen 3 maanden alsnog de audit, dan gaat dat bedrag van de prijs af.",
    },
    {
      vraag: "Welke AI-modellen meten jullie?",
      antwoord:
        "ChatGPT, Claude en Gemini. Perplexity en Copilot meten we niet. Wat je na een audit aanpast, helpt ook bij modellen die we niet meten, zoals Perplexity.",
    },
    {
      vraag: "Kan ik mijn eigen vragen aanleveren?",
      antwoord:
        "Ja. Wij maken eerst een voorstel voor de vragen in jouw vak. Wil je er eigen vragen bij of wil je er een paar vervangen, dan kan dat.",
    },
    {
      vraag: "Wat doe ik als AI me niet noemt?",
      antwoord:
        "Dan zie je in de uitslag wie AI wel noemt. In de audit zoeken we uit waarom dat zo is en wat je eraan kunt doen, op je site en daarbuiten.",
    },
  ],
};

export default aiVermeldingenMeten;
