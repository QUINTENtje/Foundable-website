import type { KennisArtikel } from "./types";
import { H2, P, UL, LI, A } from "./elements";

const artikel: KennisArtikel = {
  slug: "hoe-kiest-chatgpt-bedrijven",
  titel: "Hoe kiest ChatGPT welke bedrijven het aanbeveelt?",
  description:
    "ChatGPT heeft geen lijst met beste bedrijven. Het stelt elk antwoord opnieuw samen uit trainingsdata en live zoekresultaten. Zo werkt die keuze.",
  categorie: "Hoe AI werkt",
  gepubliceerd: "2026-07-07",
  leestijdMin: 6,
  intro:
    "ChatGPT heeft geen lijst met beste bedrijven klaarliggen. Het stelt bij elke vraag opnieuw een antwoord samen uit twee bronnen: wat het model geleerd heeft uit trainingsdata, en wat het live op het web vindt. In beide gevallen wint het bedrijf dat het duidelijkst beschreven staat, op de eigen website en daarbuiten.",
  content: (
    <>
      <H2>Twee routes naar een aanbeveling</H2>
      <P>
        De eerste route is modelkennis. Tijdens de training heeft het model
        enorme hoeveelheden tekst gelezen. Hoe vaker en hoe consistenter jouw
        bedrijf daarin beschreven staat, hoe steviger het beeld dat het model
        van je heeft. Die kennis loopt wel achter: wat je vandaag verandert,
        zit pas in een volgende trainingsronde.
      </P>
      <P>
        De tweede route is live zoeken, en die telt inmiddels het zwaarst.
        Stelt iemand een vraag waar actuele informatie voor nodig is, dan
        zoekt ChatGPT op het web en leest het een handvol pagina&rsquo;s. Wat
        het daar aantreft, bepaalt het antwoord van dat moment. Deze route
        kun je dus wel snel beïnvloeden.
      </P>

      <H2>Wat er gebeurt als ChatGPT zoekt</H2>
      <P>Achter de schermen gaat het ongeveer zo:</P>
      <UL>
        <LI>
          De vraag van de gebruiker wordt omgezet in een paar zoekopdrachten.
        </LI>
        <LI>Daar komt een lijst pagina&rsquo;s uit; een handvol wordt echt gelezen.</LI>
        <LI>
          Het model leest de tekst van die pagina&rsquo;s. Design, foto&rsquo;s en
          animaties ziet het niet of nauwelijks.
        </LI>
        <LI>
          Het pikt de passages eruit die de vraag concreet beantwoorden.
        </LI>
        <LI>Daarvan maakt het één antwoord, met een paar namen erin.</LI>
      </UL>
      <P>
        Elke stap is een filter. Een website die vaag is over wat het bedrijf
        doet, sneuvelt bij het lezen. Hoe goed het bedrijf zelf ook is.
        Waarom dat misgaat, en hoe je het herkent, staat in{" "}
        <A href="/kennis/waarom-ai-je-website-niet-begrijpt">
          Waarom AI je website niet begrijpt
        </A>
        .
      </P>

      <H2>Elke AI-zoekmachine kiest anders</H2>
      <UL>
        <LI>
          <strong className="text-navy">Perplexity</strong> citeert altijd
          bronnen en heeft een voorkeur voor recente, goed gestructureerde
          pagina&rsquo;s met concrete feiten.
        </LI>
        <LI>
          <strong className="text-navy">Google AI Overviews</strong> vat
          vooral samen wat al goed rankt in Google. Sterke SEO is hier het
          halve werk.
        </LI>
        <LI>
          <strong className="text-navy">ChatGPT</strong> haalt zijn bronnen
          breder op dan de top van Google. Ook een site die niet op pagina
          één staat, kan geciteerd worden, als de tekst maar duidelijk en
          concreet is.
        </LI>
        <LI>
          <strong className="text-navy">Claude en Copilot</strong> werken
          vergelijkbaar: eigen zoekindex of Bing, plus modelkennis. De rode
          draad is overal hetzelfde: begrijpelijkheid wint.
        </LI>
      </UL>

      <H2>Waar je zelf aan kunt draaien</H2>
      <P>Vier knoppen, in volgorde van impact:</P>
      <UL>
        <LI>
          <strong className="text-navy">Je eigen website.</strong> Wie je
          bent, wat je doet, voor wie en waar. Concreet en bovenaan.
          Aangevuld met <A href="/kennis/wat-is-json-ld">JSON-LD</A> zodat
          machines het niet hoeven te raden.
        </LI>
        <LI>
          <strong className="text-navy">Consistentie.</strong> Dezelfde
          bedrijfsnaam en dezelfde omschrijving op je site, LinkedIn, Google
          Bedrijfsprofiel en overal waar je vermeld staat. Tegenstrijdige
          signalen maken het beeld wazig.
        </LI>
        <LI>
          <strong className="text-navy">Externe bevestiging.</strong>{" "}
          Onderzoek naar AI-citaties laat zien dat merken ruim zes keer zo
          vaak via externe bronnen worden aangehaald als via hun eigen
          website. Reviews, branchesites en vermeldingen in artikelen wegen
          dus zwaar.
        </LI>
        <LI>
          <strong className="text-navy">Toegang.</strong> Controleer dat je
          robots.txt de AI-crawlers niet blokkeert: GPTBot (OpenAI),
          PerplexityBot, ClaudeBot (Anthropic) en Google-Extended. Wie de
          deur dichthoudt, kan niet geciteerd worden.
        </LI>
      </UL>
    </>
  ),
  faq: [
    {
      vraag: "Kan ik betalen om aanbevolen te worden door ChatGPT?",
      antwoord:
        "Nee. Er is geen advertentieplek te koop in het organische antwoord van ChatGPT, Claude of Gemini. Wie je een gegarandeerde plek in AI-antwoorden verkoopt, overdrijft. Wat wel kan: je website en externe vermeldingen zo inrichten dat AI je vanzelf begrijpt en meeneemt.",
    },
    {
      vraag: "Waarom noemt ChatGPT mijn concurrent wel en mij niet?",
      antwoord:
        "Meestal omdat de concurrent duidelijker beschreven staat: concretere website, meer reviews, meer externe vermeldingen, of alle drie. Dat is te achterhalen door beide websites en vermeldingen naast elkaar te leggen. En daarna te repareren.",
    },
    {
      vraag: "Hoe controleer ik wat ChatGPT over mijn bedrijf zegt?",
      antwoord:
        "Stel in een nieuw, leeg gesprek de vragen die jouw klanten zouden stellen, bijvoorbeeld “welke [jouw vak] in [jouw regio] raad je aan?” en “wat doet [jouw bedrijfsnaam]?”. Doe dat ook eens in Perplexity en Google. Herhaal het maandelijks; antwoorden veranderen.",
    },
  ],
};

export default artikel;
