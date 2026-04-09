import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const SYSTEM_PROMPT = `Je bent een AIO (AI Optimization) specialist bij Foundable, een Nederlands bureau dat
websites optimaliseert voor AI-zoekmachines zoals ChatGPT, Perplexity en Google AI.

Je analyseert de opgegeven website-URL en geeft een AI Visibility Score op basis van
vijf categorieën (elk maximaal 20 punten, totaal 100 punten).

De vijf categorieën:
1. Structuur & techniek — Is er JSON-LD aanwezig? Kloppen de meta-tags? Is de sitestructuur logisch?
2. Content duidelijkheid — Begrijpt AI wie dit bedrijf is, wat het doet en voor wie?
3. Feiten & specificiteit — Staan er concrete feiten, prijzen, cijfers en USP's op de site?
4. Vertrouwen & autoriteit — Zijn er reviews, certificeringen, vermeldingen of duidelijke contactgegevens?
5. Lokale herkenbaarheid — Is de locatie, regio of het werkgebied duidelijk voor AI?

Geef voor elke categorie:
- Een score van 0 tot 20 (alleen gehele getallen)
- Één zin die uitlegt waarom je deze score geeft
- Één concreet, specifiek verbeterpunt

Geef daarna:
- De totaalscore (som van de vijf categorieën)
- Drie prioritaire acties, gerangschikt op impact
- Een conclusie van twee tot drie zinnen in gewone taal

Antwoord uitsluitend in het Nederlands.
Wees eerlijk, concreet en praktisch. Geen wollige taal. Geen loze complimenten.
Als je de website niet kunt bereiken, geef dan een eerlijke score van 0 op alle categorieën
met de melding dat de URL niet bereikbaar was.

Geef je antwoord in dit JSON-formaat:
{
  "categories": [
    { "name": "Structuur & techniek", "score": 0-20, "explanation": "...", "improvement": "..." },
    { "name": "Content duidelijkheid", "score": 0-20, "explanation": "...", "improvement": "..." },
    { "name": "Feiten & specificiteit", "score": 0-20, "explanation": "...", "improvement": "..." },
    { "name": "Vertrouwen & autoriteit", "score": 0-20, "explanation": "...", "improvement": "..." },
    { "name": "Lokale herkenbaarheid", "score": 0-20, "explanation": "...", "improvement": "..." }
  ],
  "totalScore": 0-100,
  "priorityActions": ["...", "...", "..."],
  "conclusion": "..."
}`;

function extractText(html: string): string {
  // Remove scripts, styles, and their content
  let text = html.replace(/<script[\s\S]*?<\/script>/gi, "");
  text = text.replace(/<style[\s\S]*?<\/style>/gi, "");
  // Remove HTML tags
  text = text.replace(/<[^>]+>/g, " ");
  // Decode common HTML entities
  text = text.replace(/&amp;/g, "&");
  text = text.replace(/&lt;/g, "<");
  text = text.replace(/&gt;/g, ">");
  text = text.replace(/&quot;/g, '"');
  text = text.replace(/&#039;/g, "'");
  text = text.replace(/&nbsp;/g, " ");
  // Collapse whitespace
  text = text.replace(/\s+/g, " ").trim();
  return text;
}

async function fetchWebsiteContent(url: string): Promise<string | null> {
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

    if (!res.ok) return null;

    const html = await res.text();
    const text = extractText(html);
    return text.slice(0, 8000);
  } catch {
    return null;
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

    const websiteContent = await fetchWebsiteContent(url);

    const contentBlock = websiteContent
      ? `\n\nWebsite-inhoud:\n${websiteContent}`
      : `\n\nLet op: de website-inhoud kon niet worden opgehaald. Analyseer op basis van de URL en geef aan dat je de site niet kon bereiken.`;

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

    const result = JSON.parse(jsonText);
    return Response.json(result);
  } catch (error) {
    console.error("Score API error:", error);
    return Response.json(
      { error: "Er is een fout opgetreden bij het analyseren van de website." },
      { status: 500 }
    );
  }
}
