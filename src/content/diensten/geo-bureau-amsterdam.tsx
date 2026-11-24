import type { DienstPagina } from "./types";
import { H2, P, UL, LI, A } from "@/content/kennis/elements";

const geoBureauAmsterdam: DienstPagina = {
  slug: "geo-bureau-amsterdam",
  metaTitel: "GEO-bureau Amsterdam: zichtbaar in ChatGPT · Foundable",
  description:
    "Foundable is een GEO-bureau aan het Andreasplein in Amsterdam. We zorgen dat ChatGPT, Claude en Gemini je bedrijf begrijpen en kunnen noemen, ook bij vragen met een plaatsnaam.",
  naam: "GEO-bureau Amsterdam",
  h1: "GEO-bureau in Amsterdam",
  intro:
    "Foundable is een GEO-bureau aan het Andreasplein in Amsterdam. We zorgen dat ChatGPT je bedrijf begrijpt en kan noemen wanneer iemand om advies vraagt, ook als die vraag over Amsterdam gaat. Een meting kost €295 en de audit €999, eenmalig en zonder abonnement.",
  plaats: "Amsterdam",
  content: (
    <>
      <H2>Als je klant &ldquo;in Amsterdam&rdquo; vraagt</H2>
      <P>
        Veel vragen aan AI bevatten een plaats, zoals een coach in Amsterdam
        of een advocaat in de buurt. Bij zo&rsquo;n vraag toont de app van ChatGPT
        soms een blokje met bedrijven op een kaart, met hun sterren erbij. Dat
        zagen we in onze eigen checks, ook bij vragen over Amsterdam.
      </P>
      <P>
        Wie in dat blokje komt, hangt af van je gegevens op kaartsites en in
        bedrijvengidsen: je adres, je openingstijden en je reviews. Die moeten
        overal kloppen met je eigen site. In de audit zie je per plek wat er
        niet klopt en wat je moet aanpassen.
      </P>

      <H2>Wat we voor je doen</H2>
      <UL>
        <LI>
          Een meting: 25 vragen die je klanten zouden kunnen stellen, elk drie keer aan
          ChatGPT, Claude en Gemini. Bij een lokaal bedrijf zitten daar ook
          vragen met Amsterdam in.
        </LI>
        <LI>
          Een audit met nieuwe teksten voor je site, een FAQ, code die AI
          vertelt wie je bent en waar je zit (JSON-LD) en een gids om alles
          op je site te zetten.
        </LI>
        <LI>
          Als je wilt, zetten we alles zelf op je site. Dat is de audit met
          inbouw.
        </LI>
      </UL>
      <P>
        Wat we verder leveren en voor wie we werken, lees je op de pagina{" "}
        <A href="/geo-bureau">GEO-bureau</A>.
      </P>

      <H2>Waar je ons vindt</H2>
      <P>
        Foundable zit aan het Andreasplein 84 in Amsterdam. Achter Foundable
        zit Quinten Orij, die het werk zelf doet. Hoe dat bij eerdere klanten
        ging, lees je op de <A href="/cases">casepagina</A>.
      </P>
    </>
  ),
  faq: [
    {
      vraag: "Wat verandert er als een klant naar een bedrijf in Amsterdam vraagt?",
      antwoord:
        "Bij een vraag met een plaatsnaam laat de app van ChatGPT soms bedrijven op een kaart zien, met hun sterren erbij. Daarom is het slim dat je adres en je reviews op kaartsites en in gidsen kloppen met je site. In de audit lopen we die plekken na.",
    },
    {
      vraag: "Werken jullie alleen voor bedrijven in Amsterdam?",
      antwoord:
        "Nee. We werken voor heel Nederland. Bij een bedrijf dat in Amsterdam klanten zoekt, letten we extra op vragen met een plaatsnaam.",
    },
    {
      vraag: "Wat kost een GEO-bureau in Amsterdam?",
      antwoord:
        "Bij Foundable kost een meting €295 en de audit €999. Met inbouw op je site is het €1.495 en met nazorg €1.750. Alles excl. btw en eenmalig.",
    },
  ],
};

export default geoBureauAmsterdam;
