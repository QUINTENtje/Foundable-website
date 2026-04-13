import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { naam, bedrijf, website, email } = await request.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    if (!naam || !bedrijf || !website || !email) {
      return Response.json(
        { error: "Alle velden zijn verplicht." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Foundable <noreply@foundable.nl>",
      to: "quinten@foundable.nl",
      subject: `Nieuwe audit aanvraag — ${naam} (${bedrijf})`,
      html: `
        <h2>Nieuwe AIO-audit aanvraag</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;">
          <tr><td style="padding:8px 16px 8px 0;font-weight:bold;">Naam:</td><td style="padding:8px 0;">${naam}</td></tr>
          <tr><td style="padding:8px 16px 8px 0;font-weight:bold;">Bedrijf:</td><td style="padding:8px 0;">${bedrijf}</td></tr>
          <tr><td style="padding:8px 16px 8px 0;font-weight:bold;">Website:</td><td style="padding:8px 0;"><a href="${website}">${website}</a></td></tr>
          <tr><td style="padding:8px 16px 8px 0;font-weight:bold;">E-mail:</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
        </table>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      { error: "Er is een fout opgetreden bij het versturen." },
      { status: 500 }
    );
  }
}
