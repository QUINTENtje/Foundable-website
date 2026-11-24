import type { DienstPagina } from "./types";
import { H2, P, UL, LI, A } from "@/content/kennis/elements";

const geoBureauAmsterdam: DienstPagina = {
  slug: "geo-bureau-amsterdam",
  metaTitel: "GEO-bureau Amsterdam: zichtbaar in ChatGPT · Foundable",
  description:
    "Foundable is een GEO-bureau aan het Andreasplein in Amsterdam. We zorgen dat ChatGPT, Claude en Gemini je bedrijf begrijpen en noemen, ook bij vragen met een plaatsnaam.",
  naam: "GEO-bureau Amsterdam",
  h1: "GEO-bureau in Amsterdam",
  intro:
    "Foundable is een GEO-bureau in Amsterdam, aan het Andreasplein. We zorgen dat AI zoals ChatGPT je bedrijf begrijpt en noemt als een klant om advies vraagt. We werken voor ondernemers in Amsterdam en de rest van Nederland, met vaste prijzen.",
  plaats: "Amsterdam",
  content: (
    <>
      <H2>Als je klant een plaatsnaam noemt</H2>
      <P>
        Veel vragen aan AI bevatten een plaats, zoals een coach in Amsterdam
        of een advocaat in de buurt. Bij zo&rsquo;n vraag
        toont de ChatGPT-app soms een kaartje met bedrijven en hun sterren. Dat
        zagen we in onze eigen checks.
      </P>
      <P>
        Voor zo&rsquo;n kaartje tellen je gegevens op kaarten en in gidsen: je
        adres, je openingstijden en je reviews. Die moeten overal hetzelfde
        zijn als op je eigen site. In de audit lopen we dat voor je na.
      </P>

      <H2>Wat we voor je doen</H2>
      <UL>
        <LI>
          Een meting: hoe vaak ChatGPT, Claude en Gemini je noemen bij de
          vragen van jouw klanten, over 225 echte antwoorden.
        </LI>
        <LI>
          Een audit met nieuwe teksten, een FAQ, JSON-LD-code en een gids voor
          jouw platform. Alles klaar om te plaatsen.
        </LI>
        <LI>
          Als je wilt, zetten we alles zelf op je site. Dat is de audit met
          inbouw.
        </LI>
      </UL>
      <P>
        Hoe we werken en voor wie, lees je op de pagina{" "}
        <A href="/geo-bureau">GEO-bureau</A>.
      </P>

      <H2>Waar we zitten</H2>
      <P>
        Foundable zit aan het Andreasplein 84 in Amsterdam en staat zo
        ingeschreven bij de KvK. Het meeste werk gaat per mail, dus we werken
        net zo goed voor klanten buiten Amsterdam.
      </P>
    </>
  ),
  faq: [
    {
      vraag: "Zit Foundable echt in Amsterdam?",
      antwoord:
        "Ja. Foundable staat bij de KvK ingeschreven op Andreasplein 84, 1058 GD Amsterdam.",
    },
    {
      vraag: "Werken jullie alleen voor bedrijven in Amsterdam?",
      antwoord:
        "Nee. We werken voor heel Nederland. Bij een bedrijf dat lokaal klanten zoekt, letten we wel extra op vragen met een plaatsnaam.",
    },
    {
      vraag: "Wat kost een GEO-bureau in Amsterdam?",
      antwoord:
        "Bij Foundable kost een meting €295 en de audit €999. Met inbouw op je site is het €1.495. Alles excl. btw en eenmalig, zonder abonnement.",
    },
  ],
};

export default geoBureauAmsterdam;
