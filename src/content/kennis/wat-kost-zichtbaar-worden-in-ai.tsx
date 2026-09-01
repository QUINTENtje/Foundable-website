import type { KennisArtikel } from "./types";
import { H2, P, A, Tabel } from "./elements";

const artikel: KennisArtikel = {
  slug: "wat-kost-zichtbaar-worden-in-ai",
  titel: "Wat kost zichtbaar worden in AI?",
  description:
    "De prijzen voor GEO in Nederland op een rij: meetsoftware, eenmalige projecten, doorlopende trajecten en onze eigen tarieven. Plus waar de verschillen vandaan komen.",
  categorie: "Praktijk",
  gepubliceerd: "2026-09-01",
  leestijdMin: 4,
  intro:
    "Een meting die laat zien hoe vaak AI je noemt kost bij ons €295. Een volledige GEO-audit kost €999. Plaatsen wij alles ook zelf op je site, dan is het €1.495. Alle bedragen zijn excl. BTW en eenmalig. In de bredere markt betaal je voor meetsoftware tientjes per maand en voor doorlopende bureautrajecten al snel duizenden euro's. Dit artikel legt uit waar die verschillen vandaan komen.",
  content: (
    <>
      <H2>Waar je voor betaalt</H2>
      <P>
        GEO-werk bestaat uit een paar vaste onderdelen: meten wat AI nu over
        je zegt, je teksten herschrijven zodat AI ze kan citeren, structured
        data schrijven en alles op je site zetten. Bureaus verschillen vooral
        in hoeveel van die onderdelen je echt in handen krijgt. Een rapport
        met bevindingen is sneller gemaakt dan een pakket waar de nieuwe
        teksten en de code al in zitten. Dat verschil zie je terug in de prijs
        en in hoeveel werk je er zelf nog aan hebt.
      </P>

      <H2>De drie prijsvormen in de markt</H2>
      <Tabel
        kop={["Vorm", "Wat je betaalt", "Voor wie"]}
        rijen={[
          [
            "Meetsoftware",
            "Vanaf enkele tientjes per maand",
            "Wie zelf wil bijhouden hoe vaak AI hem noemt",
          ],
          [
            "Eenmalig project",
            "Enkele honderden tot een paar duizend euro",
            "MKB en zelfstandigen die hun site in één keer goed willen neerzetten",
          ],
          [
            "Doorlopend traject",
            "Vaak vanaf duizend euro per maand",
            "Grote merken die doorlopend content maken",
          ],
        ]}
      />
      <P>
        Meetsoftware meet, maar verandert niets aan je site. Het cijfer blijft
        dan maandenlang hetzelfde. Een doorlopend traject loont als er elke
        maand echt nieuw werk ligt. Voor de meeste MKB-bedrijven is een
        eenmalig project met af en toe een nieuwe meting de logische vorm.
      </P>

      <H2>Onze prijzen</H2>
      <P>Zo hebben wij het ingericht, met vaste bedragen die gewoon op de site staan:</P>
      <Tabel
        kop={["Pakket", "Prijs", "Wat je krijgt"]}
        rijen={[
          [
            "De meting",
            "€295",
            "Hoe vaak AI je noemt over 225 echte antwoorden, wat AI over je vertelt en de top 10 namen in jouw vak, samengevat op één A4",
          ],
          [
            "De audit",
            "€999",
            "Nieuwe teksten, een FAQ voor op je site, JSON-LD structured data, een implementatiegids voor jouw platform, je acties op volgorde en een nameting na 90 dagen",
          ],
          [
            "De audit met inbouw",
            "€1.495",
            "De audit en wij plaatsen alles ook zelf op je site",
          ],
          [
            "De audit met nazorg",
            "€1.750",
            "De audit plus twee bijstuurrondes, na 3 en na 6 maanden",
          ],
        ]}
      />
      <P>
        Alle bedragen zijn excl. BTW en eenmalig. Betaling gaat in twee
        helften: 50% bij de start en 50% bij de oplevering. Doe je binnen drie
        maanden na de meting een audit, dan telt de meting volledig als
        aanbetaling.
      </P>

      <H2>Waar de prijs van afhangt</H2>
      <P>
        Bij bureaus die per offerte werken hangt het bedrag meestal af van de
        grootte van je site, het platform waarop hij draait en of je de
        aanpassingen zelf plaatst of laat plaatsen. Een site van zeven
        pagina&rsquo;s is nu eenmaal sneller doorgewerkt dan een webshop met
        honderden producten. Vraag daarom altijd wat er bij de prijs in zit en
        wat je zelf nog moet doen.
      </P>

      <H2>Is het het waard?</H2>
      <P>
        Dat hangt af van waar jouw klanten zoeken. Kiezen mensen jou op
        advies, zoals bij advocaten, trainers en gespecialiseerde
        dienstverleners, dan verschuift die keuze nu het snelst naar AI. Eén
        klant die via ChatGPT binnenkomt betaalt een audit meestal al terug.
        Twijfel je, begin dan met de meting: voor €295 weet je hoe vaak AI je
        nu noemt en of er iets te winnen valt. Hoe je vervolgens een goed
        bureau uitkiest lees je in{" "}
        <A href="/kennis/geo-bureau-kiezen">Hoe kies je een GEO-bureau?</A>
      </P>
    </>
  ),
  faq: [
    {
      vraag: "Wat kost een GEO-audit?",
      antwoord:
        "Bij Foundable €999 excl. BTW, een vaste prijs waar alles in zit: nieuwe teksten, JSON-LD structured data, een implementatiegids voor jouw platform en een nameting na 90 dagen. Plaatsen wij alles ook zelf op je site, dan is het €1.495.",
    },
    {
      vraag: "Zit ik daarna vast aan maandelijkse kosten?",
      antwoord:
        "De audit is eenmalig en er komt geen abonnement achteraan. Wie het wil laten bijhouden kiest vooraf de audit met nazorg van €1.750, met bijstuurrondes na 3 en na 6 maanden. Een losse nieuwe meting aanvragen kan later ook altijd.",
    },
    {
      vraag: "Kan ik klein beginnen?",
      antwoord:
        "Ja, met de meting van €295 excl. BTW. Die laat over 225 echte antwoorden zien hoe vaak AI je noemt en wat het over je vertelt. Doe je binnen drie maanden een audit, dan telt de meting volledig als aanbetaling.",
    },
  ],
};

export default artikel;
