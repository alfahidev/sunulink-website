import { Resend } from 'resend';

interface StarlinkRequestBody {
  fullName: string;
  phone: string;
  email?: string;
  region: string;
  departement: string;
  address: string;
  message?: string;
  latitude?: string;
  longitude?: string;
}

export default async function handler(req: any, res: any) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Méthode non autorisée. Seul POST est accepté.',
    });
  }

  try {
    const data: StarlinkRequestBody =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    const { fullName, phone, email, region, departement, address, message, latitude, longitude } = data;

    // Validate required fields
    if (!fullName || !phone || !region || !departement || !address) {
      return res.status(400).json({
        success: false,
        message: 'Veuillez remplir tous les champs obligatoires (*).',
      });
    }

    const apiKey =
      process.env.RESEND_API_KEY ||
      process.env.VITE_RESEND_API_KEY ||
      process.env.NEXT_PUBLIC_RESEND_API_KEY;

    if (!apiKey) {
      console.error('RESEND_API_KEY is not defined in environment variables.');
      return res.status(500).json({
        success: false,
        message:
          "Erreur de configuration : la clé API Resend n'est pas configurée.",
      });
    }

    const resend = new Resend(apiKey);

    const toEmail =
      process.env.CONTACT_EMAIL ||
      process.env.VITE_CONTACT_EMAIL ||
      'contact@sunulinktelecom.com';

    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      process.env.VITE_RESEND_FROM_EMAIL ||
      'SUNULINK Telecom <onboarding@resend.dev>';

    // Build GPS Google Maps link
    const hasGPS = latitude && longitude && latitude !== '' && longitude !== '';
    const googleMapsUrl = hasGPS
      ? `https://www.google.com/maps?q=${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}`
      : null;

    const emailSubject = `🚀 Nouvelle Demande Kit Starlink — ${fullName} (${region}, ${departement})`;

    const emailHtml = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${emailSubject}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f3f4f6; margin: 0; padding: 20px; color: #1e2939; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.08); border: 1px solid #e5e7eb; }
    .header { background: linear-gradient(135deg, #003B73 0%, #002a54 100%); color: #ffffff; padding: 32px 24px; text-align: center; }
    .brand { font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }
    .brand-accent { color: #FF7A00; }
    .tag { display: inline-block; background: rgba(255, 122, 0, 0.15); color: #FF7A00; border: 1px solid #FF7A00; padding: 4px 14px; border-radius: 20px; font-size: 12px; font-weight: 700; margin-top: 12px; text-transform: uppercase; }
    .body { padding: 32px 24px; }
    .section-title { font-size: 18px; font-weight: 700; color: #003B73; margin-top: 0; margin-bottom: 20px; border-bottom: 2px solid #FF7A00; padding-bottom: 8px; }
    .table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .table td { padding: 12px 8px; border-bottom: 1px solid #f3f4f6; font-size: 14px; vertical-align: top; }
    .label { font-weight: 600; color: #003B73; width: 35%; }
    .value { color: #1e2939; font-size: 14px; }
    .gps-box { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 10px; padding: 12px 16px; margin-top: 4px; }
    .gps-btn { display: inline-block; background: #0099FF; color: #ffffff !important; text-decoration: none; padding: 6px 14px; border-radius: 6px; font-size: 12px; font-weight: 600; margin-top: 8px; }
    .cta-container { text-align: center; margin-top: 28px; padding-top: 20px; border-top: 1px solid #e5e7eb; }
    .btn-call { display: inline-block; background: #FF7A00; color: #ffffff !important; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 700; font-size: 15px; box-shadow: 0 4px 12px rgba(255, 122, 0, 0.3); }
    .footer { background: #1e2939; color: #9ca3af; text-align: center; padding: 20px; font-size: 12px; line-height: 1.6; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="brand">SUNULINK <span class="brand-accent">Telecom SA</span></div>
      <div class="tag">📡 Demande d'Installation Kit Starlink</div>
    </div>
    <div class="body">
      <h2 class="section-title">Coordonnées &amp; Localisation du Client</h2>
      <table class="table">
        <tr>
          <td class="label">👤 Nom complet</td>
          <td class="value"><strong>${fullName}</strong></td>
        </tr>
        <tr>
          <td class="label">📞 Téléphone</td>
          <td class="value">
            <a href="tel:${phone}" style="color: #003B73; font-weight: 700; text-decoration: none; font-size: 15px;">
              ${phone}
            </a>
          </td>
        </tr>
        <tr>
          <td class="label">✉️ Email</td>
          <td class="value">${email ? `<a href="mailto:${email}" style="color: #0099FF;">${email}</a>` : '<em style="color: #9ca3af;">Non renseigné</em>'}</td>
        </tr>
        <tr>
          <td class="label">📍 Région</td>
          <td class="value"><strong>${region}</strong></td>
        </tr>
        <tr>
          <td class="label">🏛️ Département</td>
          <td class="value"><strong>${departement}</strong></td>
        </tr>
        <tr>
          <td class="label">🏠 Adresse / Repère</td>
          <td class="value">${address}</td>
        </tr>
        ${
          hasGPS
            ? `
        <tr>
          <td class="label">🛰️ Position GPS</td>
          <td class="value">
            <div class="gps-box">
              Latitude : <strong>${latitude}</strong><br>
              Longitude : <strong>${longitude}</strong><br>
              <a href="${googleMapsUrl}" target="_blank" class="gps-btn">
                🗺️ Ouvrir dans Google Maps &rarr;
              </a>
            </div>
          </td>
        </tr>`
            : ''
        }
        ${
          message
            ? `
        <tr>
          <td class="label">💬 Commentaire</td>
          <td class="value">${message}</td>
        </tr>`
            : ''
        }
      </table>

      <div class="cta-container">
        <a href="tel:${phone}" class="btn-call">
          📞 Appeler le client (${phone})
        </a>
      </div>
    </div>
    <div class="footer">
      <strong>SUNULINK Telecom SA</strong> — Connecter aujourd’hui, bâtir demain.<br>
      Dakar, Sénégal • Présence opérationnelle dans les 14 régions
    </div>
  </div>
</body>
</html>
    `;

    // Send email to SUNULINK admin/team
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email && email.trim() !== '' ? email : undefined,
      subject: emailSubject,
      html: emailHtml,
    });

    if (resendError) {
      console.error('Resend error:', resendError);
      return res.status(400).json({
        success: false,
        message: `Erreur Resend : ${resendError.message || 'Impossible d\'envoyer l\'email.'}`,
      });
    }

    return res.status(200).json({
      success: true,
      message:
        'Votre demande a été envoyée avec succès ! Notre équipe technique vous contactera sous peu.',
      id: resendData?.id,
    });
  } catch (error: any) {
    console.error('Server error in /api/contact:', error);
    return res.status(500).json({
      success: false,
      message:
        error?.message ||
        "Une erreur serveur est survenue lors de l'envoi de la demande.",
    });
  }
}
