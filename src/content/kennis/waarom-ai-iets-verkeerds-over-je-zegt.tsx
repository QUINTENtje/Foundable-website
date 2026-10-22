import type { KennisArtikel } from "./types";
import { H2, P, A, UL, LI, StatRij, Tabel } from "./elements";

const artikel: KennisArtikel = {
  slug: "waarom-ai-iets-verkeerds-over-je-zegt",
  titel: "Waarom AI iets verkeerds over je zegt terwijl je site klopt",
  description:
    "Claude zei in mijn meting ten onrechte dat trendwatcher Adjiedj Bakas overleden was. Zijn site was snel op orde. Wat veranderde er daarna wel en wat niet?",
  categorie: "Praktijk",
  gepubliceerd: "2026-10-22",
  leestijdMin: 5,
  intro:
    "Omdat ChatGPT, Claude en Gemini niet altijd gaan zoeken als iemand naar jou vraagt. Dan antwoorden ze uit wat ze bij hun training hebben opgepikt. Weet een model weinig over je, dan vult het de gaten soms zelf in. In september 2026 zei Claude in mijn meting dat trendwatcher Adjiedj Bakas in 2019 was overleden. Dat klopt niet: hij leeft gewoon. Na mijn mail was zijn site snel op orde. Drie weken later zei Claude in mijn meting nog steeds dat hij overleden was. Een nieuwere versie van Claude zei dat in oktober niet meer. Die maakte hem wel zes jaar ouder.",
  content: (
    <>
      <H2>Wat Claude over hem zei</H2>
      <P>
        Op 14 september 2026 stelde ik ChatGPT, Claude en Gemini een vraag die
        hem omschrijft: ken je de Nederlandse trendwatcher van Surinaamse
        afkomst die tientallen boeken over megatrends schreef en het bureau
        Trends by Bakas heeft? Zijn eigen naam stond er niet in, wel die van
        zijn bureau. Alle drie wisten wie ik bedoelde. Claude zei er ten
        onrechte bij dat hij in 2019 was overleden.
      </P>
      <P>
        Een dag later stelde ik dezelfde vraag opnieuw. Nu noemde Claude een
        ander jaar: 2020.
      </P>

      <H2>Waarom het misging</H2>
      <P>
        Ik keek in mijn meting wat Claude bij die vraag had gedaan. Het had
        niet gezocht en dus ook zijn site niet gelezen. Het antwoordde uit wat
        het bij de training had opgepikt.
      </P>
      <P>
        Waar die fout vandaan komt, weet ik niet. Wel zag ik op 15 september
        dat er weinig was wat hem duidelijk omschreef. Op Wikipedia stond geen
        pagina over hem. De code van zijn site zei alleen dat Trends by Bakas
        een organisatie is. Met code bedoel ik de tekst achter een pagina, die
        bezoekers niet zien en AI wel leest. Dat hij een persoon is, geboren in
        1963 in Suriname, stond er niet in.
      </P>
      <P>
        Gemini ging bij dezelfde vraag wel zoeken en pakte zijn site als bron.
        Het had het dus goed. ChatGPT zocht in mijn meting ook niet, maar wist
        uit zijn hoofd wel dat hij leeft.
      </P>

      <H2>Dezelfde middag het belangrijkste gerepareerd</H2>
      <P>
        Op 15 september mailde ik Bakas wat ik had gezien. Een kwartier later
        belde hij. Hij wilde vooral weten hoe dat kon. Ik stuurde hem een
        lijstje met punten voor zijn site en voor Wikidata, de feitenbank
        achter Wikipedia. Het belangrijkste stond er dezelfde middag op:
      </P>
      <UL>
        <LI>zijn naam vooraan in de titels van zijn pagina&rsquo;s</LI>
        <LI>
          op elke pagina een blok code dat zegt wie hij is: trendwatcher,
          spreker en auteur, geboren in 1963 in Suriname
        </LI>
        <LI>omschrijvingen bij meer pagina&rsquo;s</LI>
        <LI>
          een llms.txt: een kort bestand dat AI in één keer vertelt wie hij is
        </LI>
        <LI>op Wikidata een Nederlandse omschrijving met een link naar zijn site</LI>
      </UL>

      <H2>Drie weken later</H2>
      <P>
        Op 7 oktober stelde ik dezelfde vraag opnieuw, nu vier keer per model,
        want een los antwoord kan de volgende keer anders uitvallen.
      </P>
      <UL>
        <LI>
          Gemini zocht elke keer en pakte drie keer zijn site als bron. Alle
          vier keer noemde het zijn geboortejaar: 1963.
        </LI>
        <LI>
          ChatGPT had het alle vier keer goed. In de app zonder account las het
          ook zijn site: &ldquo;geboren in 1963 in Suriname&rdquo;.
        </LI>
        <LI>
          Claude zei in mijn meting drie van de vier keer nog steeds ten
          onrechte dat hij in 2019 was overleden. Het zocht geen enkele keer.
        </LI>
      </UL>
      <P>
        Hetzelfde model gaf dus steeds een ander antwoord. Eerst 2019, toen
        2020, nu weer 2019 en één keer helemaal niets over een overlijden. Zijn
        gerepareerde site las het niet, want het zocht niet.
      </P>

      <H2>Een nieuwere versie, een nieuwe fout</H2>
      <P>
        Tot 19 oktober mat ik Claude via de API met Sonnet 4.5, een versie uit
        2025. Sinds 19 oktober gebruik ik Sonnet 5.5, een nieuwere versie. Wat
        je zelf in de Claude-app ziet, kan dus al een nieuwere versie zijn dan
        wat ik in september mat.
      </P>
      <P>
        Op 22 oktober stelde ik Sonnet 5.5 dezelfde vraag vier keer. Het zei
        geen enkele keer meer dat hij overleden was. Het zocht nog steeds niet.
        Het antwoordde dus uit wat deze nieuwere versie bij de training had
        opgepikt.
      </P>
      <P>
        Daarin zit nu een andere fout. Alle vier de keren zei Claude in mijn
        meting dat hij in 1957 geboren is. Op zijn eigen site en op Wikidata
        staat 1963. Waar die 1957 vandaan komt, weet ik niet.
      </P>
      <Tabel
        kop={["Datum", "Versie van Claude", "Wat Claude zei (klopt niet)"]}
        rijen={[
          ["14 september", "Sonnet 4.5", "Overleden in 2019 (1 van 1)"],
          ["15 september", "Sonnet 4.5", "Overleden in 2020 (1 van 1)"],
          ["7 oktober", "Sonnet 4.5", "Overleden in 2019 (3 van 4)"],
          ["22 oktober", "Sonnet 5.5", "Geboren in 1957 (4 van 4)"],
        ]}
      />
      <P>
        Gemini zocht op 22 oktober alle vier keer en pakte alle vier keer zijn
        site als bron. Stelde ik Claude de vraag die een klant stelt, welke
        trendwatcher je aanraadt voor een jaarcongres, dan ging het wel zoeken.
        Daarbij pakte het op 22 oktober drie van de vier keer zijn site als
        bron.
      </P>
      <P>
        Wat een model uit zijn hoofd over je weet, kun je dus niet direct
        bijsturen. Pas de nieuwere versie zei niet meer dat hij overleden was.
        Die kwam wel met een nieuwe fout.
      </P>
      <StatRij
        stats={[
          { waarde: "0 van 10", label: "Claude zocht bij de vraag over hem" },
          {
            waarde: "5 van 6",
            label: "Sonnet 4.5 noemde hem ten onrechte overleden",
          },
          {
            waarde: "9 van 10",
            label: "Gemini pakte bij de vraag over hem zijn site als bron",
          },
        ]}
      />

      <H2>Wat je hier zelf mee kunt</H2>
      <P>
        Of een model gaat zoeken of uit zijn hoofd antwoordt, kies je niet
        zelf. Je kunt wel zorgen dat alles wat het over je kan lezen hetzelfde
        zegt. Begin bij je eigen site: zet je naam in de titels van je
        pagina&rsquo;s en laat in de code zetten wie je bent en wat je schreef.
        Zet daarna dezelfde feiten op Wikidata en je andere profielen, zoals
        LinkedIn. Een model dat zoekt, kan dan de juiste feiten vinden. Bij een
        volgende versie is de kans groter dat het klopt, want overal staat
        hetzelfde.
      </P>
      <P>
        Je kunt het ook zelf checken. Vraag ChatGPT, Claude en Gemini naar
        jezelf zonder je naam te noemen, liefst in een tijdelijke chat.
        Omschrijf je zoals een klant je zou omschrijven. Staan er geen bronnen
        onder het antwoord, dan heeft het model niet gezocht. Je hoort dan wat
        het uit zijn hoofd over je weet.
      </P>
      <P>
        Waarom de vraag van een klant weer iets anders is dan de vraag naar
        jezelf, lees je in{" "}
        <A href="/kennis/waarom-ai-je-kent-maar-niet-aanraadt">
          Waarom AI je wel kent maar niet aanraadt
        </A>
        . Wil je weten wat de drie modellen over jou zeggen? In{" "}
        <A href="/start?keuze=meting">de meting</A> stel ik elke vraag drie keer
        aan elk model, want één antwoord zegt weinig. Samen zijn dat 225
        antwoorden.
      </P>

      <H2>Zo heb ik gemeten</H2>
      <UL>
        <LI>
          Twee vragen: een omschrijving van hem zonder zijn eigen naam (wel met
          die van zijn bureau) en de vraag die een klant stelt: welke
          Nederlandse trendwatcher raad je aan als spreker over de trends van
          de komende jaren, voor het jaarcongres van onze branche?
        </LI>
        <LI>
          Een derde vraag, over de toekomst van werk, leverde in september en
          op 7 oktober geen enkele keer zijn naam op.
        </LI>
        <LI>
          Gemeten op 14 en 15 september 2026 (één keer per model) en op 7 en 22
          oktober 2026 (vier keer per model).
        </LI>
        <LI>
          ChatGPT (GPT-5.4), Claude en Gemini (3.1 Flash-Lite), via hun API met
          zoeken op internet aan. Claude was tot en met 7 oktober Sonnet 4.5 en
          op 22 oktober Sonnet 5.5.
        </LI>
        <LI>De ChatGPT-app zonder account heb ik op 7 oktober apart bekeken.</LI>
      </UL>
      <P>
        Bakas vond het goed dat ik zijn verhaal vertel. Hij vond het erg
        grappig.
      </P>
    </>
  ),
  faq: [
    {
      vraag: "Waarom zegt ChatGPT of Claude iets verkeerds over mij?",
      antwoord:
        "Omdat een model niet altijd gaat zoeken als iemand naar jou vraagt. Het antwoordt dan uit wat het bij de training heeft opgepikt. Weet het weinig over je, dan vult het de gaten soms zelf in. In mijn meting zei Claude zo ten onrechte dat trendwatcher Adjiedj Bakas overleden was. Hij leeft gewoon. Claude had bij die vraag niet gezocht.",
    },
    {
      vraag: "Helpt het als ik mijn eigen site verbeter?",
      antwoord:
        "Ja, zodra een model zoekt. De ChatGPT-app las in oktober de site van Bakas en zei: 'geboren in 1963 in Suriname'. Antwoordt een model uit zijn hoofd, dan ziet het je site niet. Wat het uit zijn hoofd weet, verandert pas met een nieuwere versie van het model.",
    },
    {
      vraag: "Hoe zie ik wat AI uit zijn hoofd over mij weet?",
      antwoord:
        "Vraag ChatGPT, Claude en Gemini naar jezelf zonder je naam te noemen, liefst in een tijdelijke chat. Omschrijf je zoals een klant dat zou doen. Staan er geen bronnen onder het antwoord, dan heeft het model niet gezocht. Je hoort dan wat het uit zijn hoofd over je weet.",
    },
  ],
};

export default artikel;
