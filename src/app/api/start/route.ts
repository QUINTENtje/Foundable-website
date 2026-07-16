import { Resend } from "resend";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, url, platform, message } = body;

    if (!name || !email || !url) {
      return Response.json(
        { error: "Naam, e-mailadres en website-URL zijn verplicht." },
        { status: 400 }
      );
    }

    const rows: [string, string][] = [
      ["Naam", name],
      ["E-mail", email],
      ["Website", url],
    ];
    if (platform) rows.push(["Platform", platform]);
    if (message) rows.push(["Opmerking", message]);

    const tableRows = rows
      .map(
        ([label, value]) =>
          `<tr><td style="padding:8px 16px 8px 0;font-weight:bold;vertical-align:top;">${label}:</td><td style="padding:8px 0;">${escapeHtml(String(value))}</td></tr>`
      )
      .join("");

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error: sendError } = await resend.emails.send({
      from: "Foundable <noreply@foundable.nl>",
      to: "quinten@foundable.nl",
      replyTo: email,
      subject: `Audit-aanvraag — ${name}`,
      html: `
        <h2>Nieuwe audit-aanvraag via /start</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;">${tableRows}</table>
        <p style="font-family:sans-serif;color:#666;">Opvolgen per mail met observaties en de betaallink. Sjabloon: berichten/opvolg-start-aanvraag.md in de vault.</p>
      `,
    });

    if (sendError) {
      console.error("Start API Resend error:", sendError);
      return Response.json(
        {
          error:
            "Versturen is niet gelukt. Mail je aanvraag naar quinten@foundable.nl, dan pakken we het daar op.",
        },
        { status: 500 }
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Start API error:", error);
    return Response.json(
      {
        error:
          "Versturen is niet gelukt. Mail je aanvraag naar quinten@foundable.nl, dan pakken we het daar op.",
      },
      { status: 500 }
    );
  }
}
