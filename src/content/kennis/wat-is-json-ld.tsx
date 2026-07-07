import type { KennisArtikel } from "./types";
import { H2, P, UL, LI, A, Code } from "./elements";

const artikel: KennisArtikel = {
  slug: "wat-is-json-ld",
  titel: "Wat is JSON-LD en waarom heeft je website het nodig?",
  description:
    "JSON-LD is een klein blok code dat machines in één keer vertelt wie je bent, wat je doet en waar je zit. Bezoekers zien het niet, AI leest het wél.",
  categorie: "Techniek",
  gepubliceerd: "2026-07-07",
  leestijdMin: 5,
  intro:
    "JSON-LD is een klein blok code in je website dat machines in één keer vertelt wie je bent, wat je doet, waar je zit en wat het kost. Bezoekers zien er niets van. Zoekmachines en AI-systemen lezen het wél — en hoeven daardoor niet te gokken wat voor bedrijf je bent.",
  content: (
    <>
      <H2>Hoe het eruitziet</H2>
      <P>
        JSON-LD staat verstopt in de broncode van een pagina. Een simpel
        voorbeeld voor een advocatenkantoor:
      </P>
      <Code>
        {`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Jansen Arbeidsrecht",
  "description": "Advocatenkantoor voor werkgevers
    in Utrecht en omgeving.",
  "telephone": "+31 30 123 45 67",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Utrecht",
    "addressCountry": "NL"
  }
}
</script>`}
      </Code>
      <P>
        Meer is het niet: velden met feiten, in een vaste vorm. Die vorm komt
        van schema.org, een gezamenlijke standaard van onder meer Google en
        Microsoft. Alle grote zoekmachines en de AI-systemen die daarop
        bouwen, kennen deze taal.
      </P>

      <H2>Waarom het werkt</H2>
      <P>
        Je websitetekst is geschreven voor mensen, en dat hoort ook zo.
        Maar een machine die uit lopende tekst moet afleiden wat je
        telefoonnummer is, of je in Utrecht zit of daar alleen een klant
        had, en of &ldquo;vanaf &euro;150&rdquo; per uur of per traject is —
        die maakt fouten. JSON-LD haalt dat gokwerk weg. De feiten staan er
        eenduidig, op een vaste plek, in een vorm die machines feilloos
        lezen.
      </P>
      <P>
        Voor Google levert het bovendien rich results op: sterretjes,
        FAQ-uitklappers en bedrijfsinformatie direct in de zoekresultaten.
        Voor AI-systemen is het de kortste route naar een juist beeld van je
        bedrijf.
      </P>

      <H2>Welke schema-types heb je nodig als dienstverlener?</H2>
      <UL>
        <LI>
          <strong className="text-navy">ProfessionalService</strong> (of een
          specifieker type zoals LegalService): je bedrijf, met naam, adres,
          telefoon en omschrijving.
        </LI>
        <LI>
          <strong className="text-navy">Person</strong>: jij als expert,
          gekoppeld aan je bedrijf. Belangrijk voor iedereen die zichzelf
          verkoopt.
        </LI>
        <LI>
          <strong className="text-navy">Offer</strong>: wat je aanbiedt en
          wat het kost.
        </LI>
        <LI>
          <strong className="text-navy">FAQPage</strong>: je
          veelgestelde vragen, letterlijk als vraag en antwoord.
        </LI>
        <LI>
          <strong className="text-navy">Review of AggregateRating</strong>:
          alleen als je echte, controleerbare reviews hebt.
        </LI>
      </UL>
      <P>
        Meer types is niet automatisch beter. Kloppen is beter. Vijf velden
        die juist zijn, doen meer dan vijftig die half gevuld zijn.
      </P>

      <H2>Eerlijk: wat JSON-LD niet doet</H2>
      <P>
        JSON-LD is een bevestiging van wat zichtbaar op je pagina staat, geen
        truc om iets anders te lijken. Schema dat niet klopt met je zichtbare
        tekst wordt genegeerd, en bij misbruik werkt het tegen je. De
        volgorde is dus altijd: eerst je verhaal en je feiten op de pagina op
        orde, dan de code die het bevestigt. Hoe dat samenspel eruitziet,
        lees je in <A href="/kennis/wat-is-geo">Wat is GEO?</A>
      </P>
    </>
  ),
  faq: [
    {
      vraag: "Ziet een bezoeker JSON-LD op mijn website?",
      antwoord:
        "Nee. JSON-LD staat alleen in de broncode en verandert niets aan hoe je website eruitziet. Het is uitsluitend bedoeld voor machines die je pagina lezen.",
    },
    {
      vraag: "Heeft mijn WordPress- of Shopify-site dit al?",
      antwoord:
        "Vaak gedeeltelijk, via een plugin of het thema. Het probleem: die schema's zijn meestal generiek — type 'WebSite' in plaats van jouw soort bedrijf, zonder adres, prijzen of FAQ. Controleren loont bijna altijd.",
    },
    {
      vraag: "Hoe controleer ik of mijn website JSON-LD heeft?",
      antwoord:
        "Ga naar validator.schema.org of de Rich Results Test van Google, vul je URL in en je ziet direct welke structured data er gevonden wordt en of er fouten in zitten. Duurt een minuut en is gratis.",
    },
  ],
};

export default artikel;
