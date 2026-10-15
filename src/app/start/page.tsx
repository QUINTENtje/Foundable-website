import type { Metadata } from "next";
import StartContent from "@/components/StartContent";

export const metadata: Metadata = {
  title: "Start je GEO-audit · Foundable",
  description:
    "Vraag de GEO-audit aan met een kort formulier. Je krijgt persoonlijk antwoord met wat ons opvalt aan je site en de betaallink om te starten. €999 excl. BTW, vaste prijs.",
  alternates: {
    canonical: "/start",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Foundable",
    url: "https://www.foundable.nl/start",
    title: "Start je GEO-audit · Foundable",
    description:
      "Vraag de GEO-audit aan met een kort formulier. Je krijgt persoonlijk antwoord met wat ons opvalt aan je site en de betaallink om te starten. €999 excl. BTW, vaste prijs.",
    images: [{ url: "/logo.png" }],
  },
};

const products = {
  meting: {
    keuze: "De meting",
    h1: "Start met de meting",
    price: "€295",
    steps: [
      {
        title: "Je vraagt de meting aan",
        text: "Vul het formulier hieronder in.",
      },
      {
        title: "Wij kijken eerst zelf naar je site",
        text: "Je krijgt binnen twee werkdagen een persoonlijke mail terug: wat ons opvalt aan je website en de betaallink voor de meting (€295 excl. BTW). Denken we dat de meting je te weinig oplevert, dan zeggen we dat ook gewoon.",
      },
      {
        title: "Na je betaling gaan we meten",
        text: "Wij maken de vragen voor jouw vak: twintig die je klanten stellen, plus vijf over jou. Een eigen vragenlijst aanleveren kan op aanvraag. Daarna kijken we over 225 echte antwoorden hoe vaak AI je noemt. Binnen een week ligt het A4 als PDF in je mailbox: de cijfers, wat AI over je vertelt en de top 10 namen die AI in jouw vak noemt. Doe je binnen 3 maanden een audit, dan telt de meting volledig als aanbetaling.",
      },
    ],
  },
  audit: {
    keuze: "De audit",
    h1: "Start je GEO-audit",
    price: "€999",
    steps: [
      {
        title: "Je vraagt de audit aan",
        text: "Vul het formulier hieronder in.",
      },
      {
        title: "Wij kijken eerst zelf naar je site",
        text: "Je krijgt binnen twee werkdagen een persoonlijke mail terug: wat ons opvalt aan je website en de betaallink voor de eerste helft (€499,50 excl. BTW). Denken we dat de audit je te weinig oplevert, dan zeggen we dat ook gewoon.",
      },
      {
        title: "Na je aanbetaling gaan we aan de slag",
        text: "Binnen 2 weken ligt het complete pakket in je mailbox: de nieuwe teksten en de code zijn al gemaakt. Plaatsen is kopiëren en plakken met de gids erbij. Loop je ergens vast, dan help ik je er per mail doorheen. De tweede helft betaal je bij oplevering.",
      },
    ],
  },
  inbouw: {
    keuze: "De audit met inbouw",
    h1: "Start je audit met inbouw",
    price: "€1.495",
    steps: [
      {
        title: "Je vraagt de audit met inbouw aan",
        text: "Vul het formulier hieronder in. Zet er even bij waar je site op draait, want wij plaatsen alles zelf in systemen zoals WordPress, Wix of Squarespace.",
      },
      {
        title: "Wij kijken eerst zelf naar je site",
        text: "Je krijgt binnen twee werkdagen een persoonlijke mail terug: wat ons opvalt aan je website en de betaallink voor de eerste helft (€747,50 excl. BTW). Denken we dat de audit je te weinig oplevert, dan zeggen we dat ook gewoon.",
      },
      {
        title: "Na je aanbetaling gaan we aan de slag",
        text: "Binnen 2 weken is het complete pakket klaar: de nieuwe teksten en de code. Daarna plaatsen wij het zelf op je site. Je nodigt ons uit als medewerker in je website en wij doen het klikwerk, alles per mail. De zichtbare teksten krijg je eerst ter goedkeuring, want het blijft jouw verhaal. Als alles staat lopen we het nog een keer na en krijg je het pakket voor je eigen administratie. De tweede helft betaal je bij oplevering.",
      },
    ],
  },
  nazorg: {
    keuze: "De audit met nazorg",
    h1: "Start je audit met nazorg",
    price: "€1.750",
    steps: [
      {
        title: "Je vraagt de audit met nazorg aan",
        text: "Vul het formulier hieronder in.",
      },
      {
        title: "Wij kijken eerst zelf naar je site",
        text: "Je krijgt binnen twee werkdagen een persoonlijke mail terug: wat ons opvalt aan je website en de betaallink voor de eerste helft (€875 excl. BTW). Denken we dat de audit je te weinig oplevert, dan zeggen we dat ook gewoon.",
      },
      {
        title: "Na je aanbetaling gaan we aan de slag",
        text: "Binnen 2 weken ligt het complete pakket in je mailbox: de nieuwe teksten en de code zijn al gemaakt. Plaatsen is kopiëren en plakken met de gids erbij. De tweede helft betaal je bij oplevering. Daarna komen we na 3 en na 6 maanden terug om opnieuw te meten en bij te sturen.",
      },
    ],
  },
} as const;

export default async function StartPage({
  searchParams,
}: {
  searchParams: Promise<{ keuze?: string }>;
}) {
  const { keuze } = await searchParams;
  const product =
    keuze === "meting"
      ? products.meting
      : keuze === "inbouw"
        ? products.inbouw
        : keuze === "nazorg"
          ? products.nazorg
          : products.audit;

  return (
    <StartContent
      products={Object.values(products)}
      initialKeuze={product.keuze}
    />
  );
}
