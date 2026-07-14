import type { KennisArtikel } from "./types";
import { H2, P, A, StatRij } from "./elements";

const artikel: KennisArtikel = {
  slug: "hubspot-verkeer-ai",
  titel: "HubSpot verloor miljoenen bezoekers. Kwam dat door AI?",
  description:
    "HubSpot ging in één maand van 13,5 naar 8,6 miljoen organische bezoekers. Het internet wees naar AI. De cijfers wijzen eerst naar Google. Wat je eruit leert.",
  categorie: "Praktijk",
  gepubliceerd: "2026-07-14",
  leestijdMin: 5,
  intro:
    "Deels, maar minder dan je overal leest. HubSpot ging van 13,5 miljoen organische bezoekers in november 2024 naar 8,6 miljoen een maand later, en zakte daarna verder. Het internet wees naar AI. De timing wijst vooral naar Google, dat in diezelfde weken twee updates uitrolde. En de pagina's die het hardst wegvielen gingen over beroemde citaten en ontslagbrieven, onderwerpen waar HubSpot niks mee te maken heeft. Dat maakt dit verhaal minder eng en een stuk bruikbaarder.",
  content: (
    <>
      <H2>Wat er gebeurde</H2>
      <P>
        HubSpot is het grootste contentmarketingbedrijf ter wereld. Hun blog
        trok jarenlang meer bezoekers dan de meeste nieuwssites. Volgens cijfers
        van Semrush, gepubliceerd door Search Engine Land, viel dat verkeer in
        één maand terug van 13,5 miljoen naar 8,6 miljoen bezoekers. Daarna
        bleef het zakken.
      </P>
      <StatRij
        stats={[
          { waarde: "13,5 mln", label: "Organische bezoekers, november 2024" },
          { waarde: "8,6 mln", label: "Eén maand later, december 2024" },
          { waarde: "~70%", label: "Onder de piek, medio 2025" },
        ]}
      />
      <P>
        Die getallen komen uit tools als Semrush en Ahrefs, niet uit HubSpot
        zelf. Houd daar rekening mee. De richting staat vast, de exacte hoogte
        is een schatting. Je ziet online percentages van 70 tot 80 procent
        voorbijkomen die allemaal op hetzelfde type meting teruggaan.
      </P>

      <H2>Wat er nog meer speelde</H2>
      <P>
        In dezelfde weken rolde Google twee updates uit: de core update van
        december 2024 en de spamupdate. De core update van november was net op 5
        december afgerond. Drie ingrepen bovenop elkaar, precies in het venster
        waarin het verkeer instortte.
      </P>
      <P>
        Kijk je naar de pagina&rsquo;s die wegvielen, dan wordt het beeld
        scherper. Search Engine Land noemt blogs over beroemde citaten, over het
        schrijven van een ontslagbrief en over voorbeelden van
        sollicitatiebrieven. HubSpot verkoopt software voor marketing en sales.
        Met ontslagbrieven hebben ze niks te maken. Die pagina&rsquo;s stonden
        er omdat er zoekverkeer op zat, en om geen andere reden. Dat is het type
        pagina dat Google in december wegzette.
      </P>
      <P>
        AI Overviews speelt zeker mee. Google beantwoordt informatieve vragen
        nu bovenaan zelf, en dat kost klikken aan iedereen die het van dat soort
        vragen moest hebben. Maar wie de hele crash op AI schuift, stapt over de
        simpelere verklaring heen die er direct naast ligt.
      </P>

      <H2>Wat HubSpot er zelf over zegt</H2>
      <P>
        Kipp Bodnar, de marketingbaas van HubSpot, schreef er een stuk over. Hij
        bevestigt de daling in klikken uit zoekmachines en zegt erbij dat dat
        voor iedereen geldt. Zijn punt: HubSpot verlegde zijn koers al sinds
        2020 richting YouTube, podcasts en social, en kocht The Hustle.
        Zoekverkeer was volgens hem allang niet meer waar ze op stuurden. Hij
        zegt ook dat de zoekwoorden waarmee mensen echt kopen het onverminderd
        goed doen, en dat hun content juist goed opduikt in AI-antwoorden.
      </P>
      <P>
        Daar zit een portie eigen straatje schoonvegen bij, want niemand zegt
        graag dat hij iets niet zag aankomen. Toch is dat stuk over
        transactionele zoekwoorden belangrijk. Wat wegviel was de bovenkant van
        de trechter. Wat bleef staan was het deel dat aan hun eigen vak
        vastzit.
      </P>

      <H2>De les die eronder zit</H2>
      <P>
        Wat HubSpot verloor was content zonder eigenaar. Pagina&rsquo;s
        geschreven om te ranken, over onderwerpen waar het bedrijf geen verstand
        van heeft en geen naam in. Wat overeind bleef was het deel dat
        vastzit aan wie ze zijn.
      </P>
      <P>
        Google en AI bewegen daarin dezelfde kant op. Allebei belonen ze
        pagina&rsquo;s waarbij duidelijk is wie er aan het woord is en waarom
        die het zou weten. Een taalmodel dat een antwoord samenstelt doet in
        feite hetzelfde als een lezer: het kijkt of er iemand achter de tekst
        staat.
      </P>

      <H2>Wat dit voor jou betekent</H2>
      <P>
        Ben je een trainer, een spreker of een advocaat met een site van tien
        pagina&rsquo;s, dan heb je het probleem van HubSpot niet. Je hebt geen
        duizend dunne pagina&rsquo;s over onderwerpen die niet van jou zijn. Je
        hebt het omgekeerde: echte kennis op een handvol pagina&rsquo;s, die AI
        nog niet goed kan lezen.
      </P>
      <P>
        HubSpot moest snoeien. Jouw werk is duidelijk maken wie je bent. Dat is
        een makkelijkere opgave, en het is waar een GEO-audit over gaat. Hoe AI
        die keuze maakt, lees je in{" "}
        <A href="/kennis/hoe-kiest-chatgpt-bedrijven">
          Hoe kiest ChatGPT welke bedrijven het aanbeveelt?
        </A>
      </P>
    </>
  ),
  faq: [
    {
      vraag: "Verlies ik ook zo veel verkeer?",
      antwoord:
        "Onwaarschijnlijk, als je een kleine site hebt met echte kennis erop. Bij HubSpot viel vooral massa weg: pagina's over onderwerpen waar het bedrijf niks mee te maken had, die er alleen stonden voor het zoekverkeer. Heb je dat type pagina's niet, dan loop je dat risico ook niet.",
    },
    {
      vraag: "Kwam het nou door AI of door Google?",
      antwoord:
        "Allebei, en de timing wijst het eerst naar Google. De core update en de spamupdate van december 2024 vielen samen met de grootste daling. AI Overviews speelt mee op de langere lijn, omdat Google informatieve vragen nu zelf bovenaan beantwoordt en dat klikken kost aan iedereen die het van dat soort vragen moest hebben.",
    },
    {
      vraag: "HubSpot zegt zelf dat het een keuze was. Klopt dat?",
      antwoord:
        "Deels. Ze zijn sinds 2020 inderdaad verschoven naar YouTube, podcasts en The Hustle, en hun marketingbaas bevestigt dat de zoekwoorden waarop mensen kopen het goed blijven doen. Tegelijk raak je niet vrijwillig miljoenen bezoekers in één maand kwijt. Het eerlijke antwoord is dat allebei waar is.",
    },
  ],
};

export default artikel;
