import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const SYSTEM_PROMPT = `Je bent een AIO-specialist bij Foundable. Je analyseert websites op AI-zichtbaarheid via 20 binaire checkpoints. Elke checkpoint scoort ALLEEN 5 punten OF 0 punten — nooit iets ertussenin.

Analyseer de meegestuurde website-inhoud en beantwoord elke checkpoint met true (5pt) of false (0pt).

De 20 checkpoints:

GESTRUCTUREERDE DATA (5 checks x 5pt = 25pt):
1. json_ld_aanwezig — Is er een <script type="application/ld+json"> aanwezig?
2. type_klopt — Klopt @type bij het bedrijfstype?
3. naam_adres_telefoon — Staan naam, adres én telefoon in het schema?
4. faqpage_schema — Is er een FAQPage schema aanwezig?
5. description_ingevuld — Is het description veld gevuld met betekenisvolle tekst?

ENTITEITSDUIDELIJKHEID (4 checks x 5pt = 20pt):
6. bedrijfsnaam_prominent — Staat de bedrijfsnaam in H1 of bovenaan de pagina?
7. locatie_benoemd — Is een locatie of regio expliciet vermeld?
8. wat_bedrijf_doet — Is binnen de eerste 100 woorden duidelijk wat het bedrijf doet?
9. doelgroep_benoemd — Is de doelgroep expliciet benoemd?

CONTENTSTRUCTUUR (4 checks x 5pt = 20pt):
10. faq_aanwezig — Zijn er minimaal 2 FAQ-vragen met antwoorden?
11. korte_zinnen — Zijn zinnen gemiddeld korter dan 20 woorden?
12. concrete_feiten — Zijn er concrete feiten zoals cijfers, prijzen of jaren?
13. lijsten_of_headers — Worden lijsten, bullets of subheadings gebruikt?

TECHNISCHE CRAWLBAARHEID (4 checks x 5pt = 20pt):
14. crawlers_niet_geblokkeerd — Worden AI-crawlers NIET geblokkeerd?
15. geen_noindex — Is er GEEN noindex meta tag?
16. server_rendered — Is de tekst leesbaar zonder JavaScript?
17. laadtijd_acceptabel — Lijkt de pagina snel te laden?

AUTORITEITSSIGNALEN (3 checks x 5pt = 15pt):
18. reviews_aanwezig — Zijn er reviews of testimonials aanwezig?
19. over_ons_aanwezig — Is er een Over ons of team pagina?
20. contact_vindbaar — Is contactinformatie makkelijk te vinden?

Geef je antwoord UITSLUITEND in dit JSON-formaat zonder extra tekst:
{
  "checkpoints": {
    "json_ld_aanwezig": true/false,
    "type_klopt": true/false,
    "naam_adres_telefoon": true/false,
    "faqpage_schema": true/false,
    "description_ingevuld": true/false,
    "bedrijfsnaam_prominent": true/false,
    "locatie_benoemd": true/false,
    "wat_bedrijf_doet": true/false,
    "doelgroep_benoemd": true/false,
    "faq_aanwezig": true/false,
    "korte_zinnen": true/false,
    "concrete_feiten": true/false,
    "lijsten_of_headers": true/false,
    "crawlers_niet_geblokkeerd": true/false,
    "geen_noindex": true/false,
    "server_rendered": true/false,
    "laadtijd_acceptabel": true/false,
    "reviews_aanwezig": true/false,
    "over_ons_aanwezig": true/false,
    "contact_vindbaar": true/false
  }
}`;

interface Checkpoints {
  json_ld_aanwezig: boolean;
  type_klopt: boolean;
  naam_adres_telefoon: boolean;
  faqpage_schema: boolean;
  description_ingevuld: boolean;
  bedrijfsnaam_prominent: boolean;
  locatie_benoemd: boolean;
  wat_bedrijf_doet: boolean;
  doelgroep_benoemd: boolean;
  faq_aanwezig: boolean;
  korte_zinnen: boolean;
  concrete_feiten: boolean;
  lijsten_of_headers: boolean;
  crawlers_niet_geblokkeerd: boolean;
  geen_noindex: boolean;
  server_rendered: boolean;
  laadtijd_acceptabel: boolean;
  reviews_aanwezig: boolean;
  over_ons_aanwezig: boolean;
  contact_vindbaar: boolean;
}

function b(val: boolean): number {
  return val ? 5 : 0;
}

function calculateScores(cp: Checkpoints) {
  const categories = [
    {
      name: "Gestructureerde data",
      score:
        b(cp.json_ld_aanwezig) +
        b(cp.type_klopt) +
        b(cp.naam_adres_telefoon) +
        b(cp.faqpage_schema) +
        b(cp.description_ingevuld),
      maxScore: 25,
    },
    {
      name: "Entiteitsduidelijkheid",
      score:
        b(cp.bedrijfsnaam_prominent) +
        b(cp.locatie_benoemd) +
        b(cp.wat_bedrijf_doet) +
        b(cp.doelgroep_benoemd),
      maxScore: 20,
    },
    {
      name: "Contentstructuur",
      score:
        b(cp.faq_aanwezig) +
        b(cp.korte_zinnen) +
        b(cp.concrete_feiten) +
        b(cp.lijsten_of_headers),
      maxScore: 20,
    },
    {
      name: "Technische crawlbaarheid",
      score:
        b(cp.crawlers_niet_geblokkeerd) +
        b(cp.geen_noindex) +
        b(cp.server_rendered) +
        b(cp.laadtijd_acceptabel),
      maxScore: 20,
    },
    {
      name: "Autoriteitssignalen",
      score:
        b(cp.reviews_aanwezig) +
        b(cp.over_ons_aanwezig) +
        b(cp.contact_vindbaar),
      maxScore: 15,
    },
  ];

  const totalScore = categories.reduce((sum, cat) => sum + cat.score, 0);

  let label: string;
  if (totalScore <= 39) label = "Slecht";
  else if (totalScore <= 59) label = "Matig";
  else if (totalScore <= 79) label = "Goed";
  else label = "Uitstekend";

  return { categories, totalScore, label };
}

function extractText(html: string): string {
  let text = html.replace(/<script[\s\S]*?<\/script>/gi, "");
  text = text.replace(/<style[\s\S]*?<\/style>/gi, "");
  text = text.replace(/<[^>]+>/g, " ");
  text = text.replace(/&amp;/g, "&");
  text = text.replace(/&lt;/g, "<");
  text = text.replace(/&gt;/g, ">");
  text = text.replace(/&quot;/g, '"');
  text = text.replace(/&#039;/g, "'");
  text = text.replace(/&nbsp;/g, " ");
  text = text.replace(/\s+/g, " ").trim();
  return text;
}

async function fetchWebsiteContent(
  url: string
): Promise<{ text: string | null; html: string | null }> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Foundable-AIO-Scanner/1.0",
      },
    });
    clearTimeout(timeout);

    if (!res.ok) return { text: null, html: null };

    const html = await res.text();
    const text = extractText(html);
    return { text: text.slice(0, 8000), html: html.slice(0, 12000) };
  } catch {
    return { text: null, html: null };
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url, name, email, company, sector } = body;

    if (!url || !name || !email) {
      return Response.json(
        { error: "URL, naam en e-mailadres zijn verplicht." },
        { status: 400 }
      );
    }

    const { text: websiteText, html: websiteHtml } =
      await fetchWebsiteContent(url);

    const contentBlock = websiteText
      ? `\n\nWebsite-inhoud (leesbare tekst):\n${websiteText}\n\nRuwe HTML (voor structured data checks):\n${websiteHtml}`
      : `\n\nLet op: de website-inhoud kon niet worden opgehaald. Zet alle checkpoints op false.`;

    const userMessage = `Analyseer de volgende website op AI-zichtbaarheid: ${url}

Aanvullende context:
- Naam: ${name}
- E-mail: ${email}
${company ? `- Bedrijfsnaam: ${company}` : ""}
${sector ? `- Sector: ${sector}` : ""}
${contentBlock}

Geef je analyse als JSON.`;

    const message = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1500,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userMessage }],
    });

    const textContent = message.content.find((c) => c.type === "text");
    if (!textContent || textContent.type !== "text") {
      return Response.json(
        { error: "Geen antwoord ontvangen van AI." },
        { status: 500 }
      );
    }

    // Extract JSON from the response (handle markdown code blocks)
    let jsonText = textContent.text.trim();
    const jsonMatch = jsonText.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      jsonText = jsonMatch[1].trim();
    }

    const parsed = JSON.parse(jsonText);
    const checkpoints: Checkpoints = parsed.checkpoints;
    const { categories, totalScore, label } = calculateScores(checkpoints);

    return Response.json({
      categories,
      checkpoints,
      totalScore,
      label,
    });
  } catch (error) {
    console.error("Score API error:", error);
    return Response.json(
      {
        error:
          "Er is een fout opgetreden bij het analyseren van de website.",
      },
      { status: 500 }
    );
  }
}
