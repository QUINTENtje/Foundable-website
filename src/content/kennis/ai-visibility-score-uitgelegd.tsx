import type { KennisArtikel } from "./types";
import { H2, H3, P, A, Tabel } from "./elements";

const artikel: KennisArtikel = {
  slug: "ai-visibility-score-uitgelegd",
  titel: "De AI Visibility Score uitgelegd: 20 checkpoints, 100 punten",
  description:
    "De AI Visibility Score meet in 20 checkpoints hoe goed AI-systemen je website kunnen lezen, begrijpen en vertrouwen. Dit is wat er precies gemeten wordt.",
  categorie: "Praktijk",
  gepubliceerd: "2026-07-07",
  leestijdMin: 5,
  intro:
    "De AI Visibility Score meet hoe goed AI-systemen zoals ChatGPT, Perplexity en Google AI je website kunnen lezen, begrijpen en vertrouwen. De meting bestaat uit 20 checkpoints van elk 5 punten, verdeeld over vijf categorieën. Samen geven ze een score van 0 tot 100 — en vooral een lijst van wat er precies ontbreekt.",
  content: (
    <>
      <H2>De vijf categorieën</H2>

      <H3>Gestructureerde data — 25 punten</H3>
      <P>
        Heeft je site <A href="/kennis/wat-is-json-ld">JSON-LD</A>, klopt het
        type bij jouw soort bedrijf, staan naam, adres en telefoonnummer in
        het schema, is er een FAQ-schema en is de omschrijving echt gevuld?
        Dit is de zwaarste categorie, omdat structured data machines het
        meeste gokwerk bespaart.
      </P>

      <H3>Entiteitsduidelijkheid — 20 punten</H3>
      <P>
        Staat je bedrijfsnaam prominent bovenaan, is je locatie of regio
        expliciet benoemd, is binnen de eerste 100 woorden duidelijk wat je
        doet, en staat er voor wie je werkt? Dit is de kern van{" "}
        <A href="/kennis/wat-is-geo">GEO</A>: wie, wat, waar, voor wie.
      </P>

      <H3>Contentstructuur — 20 punten</H3>
      <P>
        Zijn er FAQ-vragen met echte antwoorden, zijn je zinnen kort genoeg
        om te citeren, staan er concrete feiten op de pagina (prijzen,
        cijfers, jaartallen) en gebruik je lijsten en tussenkoppen? Zo
        checken we of AI passages uit je site kan knippen die op zichzelf
        begrijpelijk zijn.
      </P>

      <H3>Technische crawlbaarheid — 20 punten</H3>
      <P>
        Worden AI-crawlers zoals GPTBot en PerplexityBot niet geblokkeerd,
        ontbreekt een noindex-tag, is je tekst leesbaar zonder JavaScript en
        laadt de pagina vlot? Faalt dit, dan komt AI niet eens toe aan de
        rest.
      </P>

      <H3>Autoriteitssignalen — 15 punten</H3>
      <P>
        Staan er reviews of testimonials op je site, is er een over-pagina
        die vertelt wie erachter zit, en is je contactinformatie makkelijk te
        vinden? Vertrouwen is voor AI een reden om je wél of niet aan te
        bevelen.
      </P>

      <H2>Wat je score betekent</H2>
      <Tabel
        kop={["Score", "Label", "Wat het zegt"]}
        rijen={[
          [
            "0–39",
            "Slecht",
            "AI moet gokken wie je bent en wat je doet. Grote kans dat het een ander noemt.",
          ],
          [
            "40–59",
            "Matig",
            "De basis staat er, maar er zitten gaten in je feiten, structuur of techniek.",
          ],
          [
            "60–79",
            "Goed",
            "AI begrijpt je. De winst zit in details, autoriteit en consistentie.",
          ],
          [
            "80–100",
            "Uitstekend",
            "AI heeft geen excuus meer om jou niet te begrijpen.",
          ],
        ]}
      />

      <H2>Waarom elk checkpoint alles-of-niets is</H2>
      <P>
        Elk checkpoint is 5 punten of 0 punten, nooit iets ertussenin. Dat is
        een bewuste keuze. &ldquo;Een beetje JSON-LD&rdquo; bestaat niet voor
        een machine: het werkt, of het werkt niet. Door binair te meten zie
        je precies welke punten je laat liggen en wat je te doen staat. Geen
        vaag rapportcijfer, maar een takenlijst.
      </P>

      <H2>Check je eigen score</H2>
      <P>
        De meting is gratis en duurt een paar minuten: URL invullen, en je
        ziet direct je score per categorie.{" "}
        <A href="/score">Check hier je AI Visibility Score</A>.
      </P>
    </>
  ),
  faq: [
    {
      vraag: "Meet de score mijn hele website?",
      antwoord:
        "De tool analyseert de pagina van de URL die je opgeeft — meestal je homepage. Dat is bewust: die pagina bepaalt het eerste beeld dat AI van je bedrijf krijgt. In de volledige GEO-audit kijken we breder dan één pagina.",
    },
    {
      vraag: "Is een hoge score een garantie dat ChatGPT me aanbeveelt?",
      antwoord:
        "Nee, en wees voorzichtig met wie dat wél belooft. De score meet of AI je website kán lezen en begrijpen — dat is de voorwaarde. Of je daarna ook aanbevolen wordt, hangt mede af van reviews, concurrentie en hoe vaak je buiten je eigen site om genoemd wordt.",
    },
    {
      vraag: "Hoe vaak moet ik de score opnieuw checken?",
      antwoord:
        "Na elke serieuze aanpassing aan je website, en verder is eens per kwartaal genoeg. De checkpoints veranderen niet elke week; jouw website meestal ook niet.",
    },
  ],
};

export default artikel;
