import type { KennisArtikel } from "./types";
import { H2, H3, P, UL, LI, A, Kader } from "./elements";

const artikel: KennisArtikel = {
  slug: "waarom-ai-je-website-niet-begrijpt",
  titel: "Waarom AI je website niet begrijpt (en hoe je dat zelf ziet)",
  description:
    "Een website kan er voor mensen prima uitzien en voor AI onleesbaar zijn. De vijf patronen die het vaakst misgaan en twee tests die je vandaag kunt doen.",
  categorie: "Praktijk",
  gepubliceerd: "2026-07-07",
  leestijdMin: 6,
  intro:
    "Een website kan er voor mensen prima uitzien en voor AI onleesbaar zijn. AI ziet je design niet, je foto's nauwelijks en je bedoelingen al helemaal niet. Het leest tekst en code. Gaat het daar mis, dan slaat AI je over. Hoe mooi je site ook is.",
  content: (
    <>
      <H2>De vijf patronen die het vaakst misgaan</H2>

      <H3>1. Vage taal</H3>
      <P>
        &ldquo;Wij ontzorgen u volledig met maatwerkoplossingen.&rdquo; Voor
        een mens klinkt dat professioneel. Voor een AI staat er niets: geen
        dienst, geen doelgroep, geen plaats. Vergelijk:
      </P>
      <Kader>
        <p className="text-sm font-semibold text-text-light">Vaag:</p>
        <p className="mt-1 text-text-light">
          &ldquo;Wij creëren impactvolle trajecten voor duurzame groei.&rdquo;
        </p>
        <p className="mt-4 text-sm font-semibold text-navy">Concreet:</p>
        <p className="mt-1 text-navy">
          &ldquo;Ik train salesteams van B2B-softwarebedrijven. Eén dag op
          locatie, daarna drie maanden begeleiding.&rdquo;
        </p>
      </Kader>
      <P>
        De tweede zin kan een AI letterlijk citeren als antwoord op
        &ldquo;wie traint salesteams?&rdquo;. De eerste niet.
      </P>

      <H3>2. Ontbrekende feiten</H3>
      <P>
        Geen prijsindicatie, geen plaatsnaam, geen doelgroep. AI vult
        ontbrekende feiten niet voor je in. Krijgt het de vraag &ldquo;wat
        kost een salestraining?&rdquo;, dan citeert het een site waar een
        bedrag staat. Dat bedrijf wordt genoemd, niet jij.
      </P>

      <H3>3. Tekst in afbeeldingen</H3>
      <P>
        Die mooie banner met je kernboodschap erin? Voor AI is dat een leeg
        vlak. Alles wat alleen als afbeelding bestaat, telt niet of
        nauwelijks mee. Kerninformatie moet ook als gewone tekst op de
        pagina staan.
      </P>

      <H3>4. Geen structuur</H3>
      <P>
        AI zoekt passages die een vraag beantwoorden. Een lange lap tekst
        zonder tussenkoppen, lijsten of FAQ geeft het niets om vast te
        pakken. Koppen die de inhoud samenvatten (&ldquo;Wat kost een
        training?&rdquo;) werken beter dan creatieve vondsten
        (&ldquo;Investeren in morgen&rdquo;).
      </P>

      <H3>5. Inconsistentie</H3>
      <P>
        Op de ene pagina ben je coach, op de andere consultant. In een
        vergeten hoekje staat nog een oude prijs. Mensen lezen daaroverheen;
        een AI weegt alles mee en houdt een wazig beeld over. Wazig beeld,
        geen aanbeveling.
      </P>

      <H2>Zo zie je het zelf, zonder tools</H2>
      <UL>
        <LI>
          <strong className="text-navy">De voorleestest.</strong> Lees de
          tekst van je homepage hardop voor aan iemand die je bedrijf niet
          kent. Alleen de tekst, zonder beelden erbij. Kan die persoon na
          30 seconden zeggen wat je verkoopt, voor wie en waar? Dan kan AI
          het ook.
        </LI>
        <LI>
          <strong className="text-navy">De directe vraag.</strong> Vraag in
          een nieuw ChatGPT-gesprek: &ldquo;Wat doet [jouw bedrijfsnaam] in
          [jouw plaats]?&rdquo; Alles wat er niet klopt of ontbreekt in het
          antwoord, is precies wat je website niet duidelijk maakt.
        </LI>
      </UL>

      <H2>En dan?</H2>
      <P>
        Het goede nieuws: de meeste van deze punten zijn geen verbouwing,
        maar schrijfwerk. Concreter formuleren, feiten toevoegen, structuur
        aanbrengen en de techniek bevestigen met{" "}
        <A href="/kennis/wat-is-json-ld">JSON-LD</A>. Wil je een gemeten
        beeld in plaats van een gevoel, check dan je{" "}
        <A href="/kennis/ai-visibility-score-uitgelegd">
          AI Visibility Score
        </A>
        : 20 checkpoints, gratis.
      </P>
    </>
  ),
  faq: [
    {
      vraag: "Mijn site staat vol foto's. Is dat erg?",
      antwoord:
        "Foto's zijn prima en voor bezoekers zelfs belangrijk. Het gaat mis als kerninformatie alleen in beeld bestaat: een banner met je slogan, een menukaart als afbeelding, een gescande prijslijst. Zorg dat alles wat AI moet weten ook als gewone tekst op de pagina staat.",
    },
    {
      vraag: "Leest AI mijn PDF-brochure?",
      antwoord:
        "Slecht tot niet. PDF's worden door AI-zoekmachines zelden meegenomen bij het beantwoorden van vragen over je bedrijf. Staat je belangrijkste informatie alleen in een brochure, zet de inhoud dan ook op een gewone webpagina.",
    },
    {
      vraag: "Mijn webbouwer zegt dat de site technisch in orde is. Kan het dan toch misgaan?",
      antwoord:
        "Ja. Technisch in orde en inhoudelijk duidelijk zijn twee verschillende dingen. Een razendsnelle, foutloze site met vage teksten blijft voor AI onbegrijpelijk. De meeste gaten zitten niet in de techniek, maar in de tekst.",
    },
  ],
};

export default artikel;
