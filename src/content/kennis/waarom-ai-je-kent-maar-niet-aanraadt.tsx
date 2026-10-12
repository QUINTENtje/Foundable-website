import type { KennisArtikel } from "./types";
import { H2, P, A, UL, LI, Kader, StatRij } from "./elements";

const artikel: KennisArtikel = {
  slug: "waarom-ai-je-kent-maar-niet-aanraadt",
  titel: "Waarom AI je wel kent maar niet aanraadt",
  description:
    "Ik vroeg ChatGPT, Claude en Gemini naar 81 Nederlandse experts. Omschreven kende AI er 9 van de 10. Vroeg een klant om hulp, dan noemde het 1 op de 4.",
  categorie: "Praktijk",
  gepubliceerd: "2026-10-11",
  leestijdMin: 5,
  intro:
    "Omdat AI vooral de experts aanraadt die het tegenkomt op het moment dat een klant zoekt. Tussen 8 september en 8 oktober 2026 stelde ik ChatGPT, Claude en Gemini 1.089 vragen over 81 Nederlandse experts. Als ik iemand omschreef, wist AI in ruim 9 van de 10 antwoorden wie ik bedoelde. Vroeg ik wie ik moest inhuren voor hun vak, dan stond diezelfde expert in ongeveer een kwart van de antwoorden. Het grootste verschil zat in één ding: of AI tijdens het zoeken de eigen site van de expert tegenkwam.",
  content: (
    <>
      <H2>Wat ik heb gevraagd</H2>
      <P>
        Per expert stelde ik twee soorten vragen. De eerste omschrijft de
        expert zonder zijn naam te noemen. Bijvoorbeeld: ken je de Nederlandse
        trainer die een boek schreef over feedback geven en daar workshops over
        geeft? Zo&rsquo;n vraag test of AI weet wie iemand is.
      </P>
      <P>
        De tweede is de vraag die een klant stelt. Bijvoorbeeld: welke trainer
        raad je aan voor een workshop feedback geven aan ons managementteam?
        Elke vraag ging over het vak van die ene expert. Hij had er dus met
        recht in kunnen staan. Ik stelde alle vragen aan de drie modellen en
        telde of de naam van de expert in het antwoord stond.
      </P>
      <StatRij
        stats={[
          { waarde: "9 op 10", label: "Herkend als ik de expert omschreef" },
          { waarde: "1 op 4", label: "Genoemd als een klant om hulp vroeg" },
          {
            waarde: "23 van 80",
            label: "Nooit genoemd als een klant om hulp vroeg",
          },
        ]}
      />

      <H2>AI weet wie ze zijn</H2>
      <P>
        Eerst het goede nieuws. Als ik een expert omschreef, stond zijn naam in
        372 van de 402 antwoorden. Deze experts kent AI dus gewoon.
      </P>

      <H2>Maar als een klant om hulp vraagt</H2>
      <P>
        Daarna stelde ik de vraag die een klant stelt. Toen stond de expert in
        175 van de 687 antwoorden. Dat is ongeveer een kwart. Per model
        verschilde dat flink:
      </P>
      <UL>
        <LI>Claude noemde de expert in 30 procent van de antwoorden.</LI>
        <LI>Gemini in 28 procent.</LI>
        <LI>ChatGPT in 18 procent.</LI>
      </UL>
      <P>
        Van de 80 experts kwamen er 23 op de vraag van een klant geen enkele
        keer voor. Twintig van hen wist AI wel goed te plaatsen als ik ze
        omschreef. AI kende ze dus prima. Het dacht alleen niet aan ze toen
        iemand om hulp vroeg.
      </P>

      <H2>Wat het verschil maakte</H2>
      <P>
        Bij bijna elke vraag zoekt het model eerst op internet. Het antwoord
        haalt het uit de pagina&rsquo;s die het daarbij vindt. Ik heb per
        antwoord bekeken welke pagina&rsquo;s dat waren.
      </P>
      <Kader>
        <p className="text-text-light leading-relaxed">
          <strong className="text-navy">Eigen site gevonden:</strong> de expert
          stond in 84 van de 89 antwoorden.
        </p>
        <p className="mt-2 text-text-light leading-relaxed">
          <strong className="text-navy">Eigen site niet gevonden:</strong> de
          expert stond in 91 van de 598 antwoorden.
        </p>
      </Kader>
      <P>
        Bij ChatGPT was het verschil het grootst. Dat kwam de eigen site van
        een expert maar 14 keer tegen in 229 antwoorden. Alle 14 keer noemde
        het de expert.
      </P>
      <P>
        Je zou kunnen denken dat het andersom werkt: dat AI eerst een naam
        kiest en dan pas de site erbij zoekt. Dat kwam weinig voor. In 13 van
        de 89 antwoorden zocht het model ook op de naam van de expert. In de
        andere 76 kwam de site gewoon boven bij het zoeken op de vraag zelf.
        Daar stond de expert er 71 keer in.
      </P>
      <P>
        Bij de 23 experts die nooit genoemd werden, kwam de eigen site geen
        enkele keer voorbij. Dus: AI raadt vooral de experts aan van wie het de
        site tegenkomt als het zoekt op de vraag van een klant.
      </P>

      <H2>De tweede route: plekken waar klanten al zoeken</H2>
      <P>
        Een expert kan ook genoemd worden zonder dat zijn eigen site voorbijkomt.
        Dat gebeurde 91 keer. In 47 van die antwoorden stond een sprekersbureau
        of boekingssite tussen de bronnen. In 21 stond Managementboek ertussen.
        AI neemt namen dus ook over van de sites waar klanten al zoeken. Een
        goed profiel op zo&rsquo;n plek telt mee.
      </P>

      <H2>Wat je hier zelf mee kunt</H2>
      <P>
        Op je naam vindt AI je meestal al. De winst zit in de vraag van je
        klant. Dat begint bij gewone woorden: zet op je site in de taal van je
        klant welke vraag jij oplost en voor wie. Een klant zoekt op
        &lsquo;training feedback geven voor managers&rsquo;. De titel van je
        boek kent hij dan nog niet.
      </P>
      <P>
        Je kunt dit vandaag zelf checken. Stel ChatGPT de vraag die jouw klant
        zou stellen, in een tijdelijk gesprek. Kijk welke bronnen het onder het
        antwoord zet. Staat je eigen site ertussen, dan zit je goed. Staat hij
        er niet tussen, dan weet je waar je winst zit.
      </P>
      <P>
        Hoe een model die keuze verder maakt, lees je in{" "}
        <A href="/kennis/hoe-kiest-chatgpt-bedrijven">
          Hoe kiest ChatGPT welke bedrijven het aanbeveelt?
        </A>{" "}
        Wil je weten hoe het voor al jouw vragen uitpakt, bij alle drie de
        modellen? Dat laat <A href="/start?keuze=meting">de meting</A> zien: 225
        antwoorden, met per model het cijfer erbij.
      </P>

      <H2>Zo heb ik gemeten</H2>
      <UL>
        <LI>Periode: 8 september tot en met 8 oktober 2026.</LI>
        <LI>
          81 Nederlandse experts: trainers, sprekers, auteurs, coaches en
          adviseurs.
        </LI>
        <LI>
          165 vragen zoals een klant ze stelt en 85 vragen die de expert
          omschrijven. Samen 1.089 antwoorden.
        </LI>
        <LI>
          ChatGPT (GPT-5.4), Claude (Sonnet 4.5) en Gemini (3.1 Flash-Lite),
          via hun API met zoeken op internet aan.
        </LI>
        <LI>
          Genoemd betekent: de naam van de expert staat in het antwoord.
          Antwoorden met een foutmelding tellen niet mee.
        </LI>
      </UL>
      <P>
        De meeste vragen stelde ik één keer per model, een deel vier keer. Een
        los antwoord kan de volgende keer anders uitvallen. Over meer dan
        duizend antwoorden is het patroon wel stevig.
      </P>
      <P>
        De apps die je zelf gebruikt kunnen per vraag anders antwoorden dan de
        API. In mijn steekproeven in de ChatGPT-app ging dat verschil twee
        kanten op. Soms stond een expert er in de app wel in en via de API
        niet, soms andersom. Namen noem ik hier niet. Het gaat om het patroon.
      </P>
    </>
  ),
  faq: [
    {
      vraag: "Waarom noemt ChatGPT mij niet terwijl het mij wel kent?",
      antwoord:
        "Omdat kennen en aanraden twee verschillende vragen zijn. Op je naam vindt AI je meestal wel. Vraagt een klant om hulp, dan zoekt het op die vraag en neemt het de namen over van de pagina's die het dan vindt. In mijn meting bij 81 Nederlandse experts stond de expert in ongeveer een kwart van die antwoorden. Kwam zijn eigen site bij het zoeken voorbij, dan stond hij er bijna altijd in.",
    },
    {
      vraag: "Hoe zorg ik dat AI mijn site vindt op de vraag van een klant?",
      antwoord:
        "Begin bij de woorden. Beschrijf op je site welke vraag je oplost en voor wie, in de woorden die je klant zelf gebruikt. Zet die feiten ook in de code van je site, zodat AI ze makkelijk kan lezen. Een goed profiel op de plekken waar je klanten al zoeken, zoals een sprekersbureau of Managementboek, helpt daarnaast mee.",
    },
    {
      vraag: "Welk model noemde experts het vaakst?",
      antwoord:
        "In mijn meting Claude, met 30 procent van de antwoorden op de vraag van een klant. Daarna Gemini met 28 procent en ChatGPT met 18 procent. ChatGPT kwam de eigen site van een expert ook het minst vaak tegen. Elke keer dat het wel gebeurde, noemde het de expert.",
    },
  ],
};

export default artikel;
