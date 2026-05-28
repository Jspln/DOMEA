import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  consent?: boolean;
  honeypot?: string;
};

const isEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

const isPhone = (value: string) =>
  /^[+\d][\d\s().-]{7,}$/.test(value);

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Format de requête invalide." },
      { status: 400 },
    );
  }

  // Honeypot anti-spam : si rempli, on simule un succès silencieux.
  if (body.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const errors: Record<string, string> = {};
  const firstName = body.firstName?.trim() ?? "";
  const lastName = body.lastName?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const service = body.service?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const consent = Boolean(body.consent);

  if (firstName.length < 2) errors.firstName = "Prénom trop court.";
  if (lastName.length < 2) errors.lastName = "Nom trop court.";
  if (!isEmail(email)) errors.email = "Email invalide.";
  if (phone && !isPhone(phone)) errors.phone = "Téléphone invalide.";
  if (!service) errors.service = "Choisissez un service.";
  if (message.length < 10)
    errors.message = "Décrivez votre besoin (10 caractères minimum).";
  if (!consent) errors.consent = "Vous devez accepter le traitement de vos données.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const TO_EMAIL = "contact@domea-callian.fr";
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#E8705A;margin-bottom:16px">📩 Nouvelle demande de devis — DOMÉA</h2>
      <table cellpadding="8" cellspacing="0" style="font-size:14px;width:100%;border-collapse:collapse">
        <tr style="background:#fdf3f0"><td style="font-weight:bold;width:140px">Prénom</td><td>${firstName}</td></tr>
        <tr><td style="font-weight:bold">Nom</td><td>${lastName}</td></tr>
        <tr style="background:#fdf3f0"><td style="font-weight:bold">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="font-weight:bold">Téléphone</td><td>${phone || "—"}</td></tr>
        <tr style="background:#fdf3f0"><td style="font-weight:bold">Service</td><td>${service}</td></tr>
        <tr><td style="font-weight:bold;vertical-align:top">Message</td><td style="white-space:pre-wrap">${message}</td></tr>
        <tr style="background:#fdf3f0"><td style="font-weight:bold">Reçu le</td><td>${new Date().toLocaleString("fr-FR")}</td></tr>
      </table>
      <p style="margin-top:20px;font-size:12px;color:#999">Réponds directement à cet email pour contacter ${firstName}.</p>
    </div>
  `;

  if (smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST ?? "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: false,
        auth: { user: smtpUser, pass: smtpPass },
      });

      await transporter.sendMail({
        from: `"DOMÉA Contact" <${smtpUser}>`,
        to: TO_EMAIL,
        replyTo: email,
        subject: `Devis DOMÉA — ${firstName} ${lastName} (${service})`,
        html,
      });
    } catch (err) {
      console.error("[contact] Erreur SMTP :", err);
      return NextResponse.json(
        { ok: false, error: "Erreur lors de l'envoi. Réessayez." },
        { status: 500 },
      );
    }
  } else {
    console.log("[contact] (dev — SMTP non configuré) Nouvelle demande :", {
      firstName, lastName, email, phone, service, message,
      receivedAt: new Date().toISOString(),
    });
  }

  return NextResponse.json({ ok: true });
}
