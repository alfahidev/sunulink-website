import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, loadEnv } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import { Resend } from 'resend';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'resend-dev-api-middleware',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === '/api/contact' && req.method === 'POST') {
              let body = '';
              req.on('data', (chunk) => {
                body += chunk;
              });
              req.on('end', async () => {
                try {
                  const data = JSON.parse(body);
                  const apiKey =
                    env.RESEND_API_KEY ||
                    env.VITE_RESEND_API_KEY ||
                    process.env.RESEND_API_KEY ||
                    process.env.VITE_RESEND_API_KEY;

                  if (!apiKey) {
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(
                      JSON.stringify({
                        success: false,
                        message:
                          "La clé API Resend n'est pas configurée dans les variables d'environnement (RESEND_API_KEY).",
                      })
                    );
                    return;
                  }

                  const resend = new Resend(apiKey);
                  const toEmail =
                    env.CONTACT_EMAIL ||
                    env.VITE_CONTACT_EMAIL ||
                    process.env.CONTACT_EMAIL ||
                    'contact@sunulinktelecom.com';

                  const fromEmail =
                    env.RESEND_FROM_EMAIL ||
                    env.VITE_RESEND_FROM_EMAIL ||
                    process.env.RESEND_FROM_EMAIL ||
                    'SUNULINK Telecom <onboarding@resend.dev>';

                  const hasGPS =
                    data.latitude &&
                    data.longitude &&
                    data.latitude !== '' &&
                    data.longitude !== '';
                  const googleMapsUrl = hasGPS
                    ? `https://www.google.com/maps?q=${encodeURIComponent(data.latitude)},${encodeURIComponent(data.longitude)}`
                    : null;

                  const emailSubject = `🚀 Nouvelle Demande Kit Starlink — ${data.fullName} (${data.region}, ${data.departement})`;

                  const emailHtml = `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
                      <div style="background: #003B73; color: white; padding: 24px; text-align: center;">
                        <h1 style="margin: 0; font-size: 22px;">SUNULINK <span style="color: #FF7A00;">Telecom SA</span></h1>
                        <p style="margin: 6px 0 0; font-size: 13px; color: #93c5fd;">Nouvelle Demande d'Installation Kit Starlink</p>
                      </div>
                      <div style="padding: 24px; background: white;">
                        <h2 style="color: #003B73; font-size: 18px; border-bottom: 2px solid #FF7A00; padding-bottom: 8px; margin-top: 0;">Détails du Client</h2>
                        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                          <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #003B73; font-weight: bold; width: 35%;">Nom complet</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">${data.fullName}</td></tr>
                          <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #003B73; font-weight: bold;">Téléphone</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;"><a href="tel:${data.phone}" style="color: #003B73; font-weight: bold;">${data.phone}</a></td></tr>
                          <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #003B73; font-weight: bold;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">${data.email || 'Non renseigné'}</td></tr>
                          <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #003B73; font-weight: bold;">Région</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;"><strong>${data.region}</strong></td></tr>
                          <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #003B73; font-weight: bold;">Département</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">${data.departement}</td></tr>
                          <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #003B73; font-weight: bold;">Adresse</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">${data.address}</td></tr>
                          ${
                            hasGPS
                              ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #003B73; font-weight: bold;">Position GPS</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">Lat ${data.latitude}, Long ${data.longitude} <br><a href="${googleMapsUrl}" target="_blank" style="display: inline-block; margin-top: 4px; background: #0099FF; color: white; text-decoration: none; padding: 4px 10px; border-radius: 4px; font-size: 12px;">🗺️ Ouvrir Google Maps</a></td></tr>`
                              : ''
                          }
                          ${
                            data.message
                              ? `<tr><td style="padding: 10px 0; color: #003B73; font-weight: bold;">Message</td><td style="padding: 10px 0;">${data.message}</td></tr>`
                              : ''
                          }
                        </table>
                        <div style="text-align: center; margin-top: 24px;">
                          <a href="tel:${data.phone}" style="display: inline-block; background: #FF7A00; color: white; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; font-size: 14px;">📞 Appeler le client</a>
                        </div>
                      </div>
                      <div style="background: #1e2939; color: #9ca3af; text-align: center; padding: 16px; font-size: 12px;">
                        SUNULINK Telecom SA — Connecter aujourd’hui, bâtir demain.
                      </div>
                    </div>
                  `;

                  const { data: resendData, error: resendError } =
                    await resend.emails.send({
                      from: fromEmail,
                      to: [toEmail],
                      replyTo: data.email || undefined,
                      subject: emailSubject,
                      html: emailHtml,
                    });

                  if (resendError) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(
                      JSON.stringify({
                        success: false,
                        message: `Erreur Resend : ${resendError.message}`,
                      })
                    );
                    return;
                  }

                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(
                    JSON.stringify({
                      success: true,
                      message:
                        'Votre demande a été envoyée avec succès ! Notre équipe technique vous contactera sous peu.',
                      id: resendData?.id,
                    })
                  );
                } catch (e: any) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(
                    JSON.stringify({
                      success: false,
                      message: e?.message || "Erreur lors de l'envoi.",
                    })
                  );
                }
              });
            } else {
              next();
            }
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  };
});
