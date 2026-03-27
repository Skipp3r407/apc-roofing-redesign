import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let body: { name?: string; email?: string; phone?: string; city?: string; details?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const city = String(body.city || "").trim();
  const details = String(body.details || "").trim();

  if (!name || !email || !details) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM;

  if (!apiKey || !to || !from) {
    return NextResponse.json(
      {
        error:
          "Email is not configured. Set RESEND_API_KEY, RESEND_FROM, and CONTACT_TO_EMAIL in .env.local",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `[APC Roofing site] Message from ${name}`,
    html: `
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
      <p><strong>City / area:</strong> ${escapeHtml(city || "—")}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;font-family:sans-serif;">${escapeHtml(details)}</pre>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
