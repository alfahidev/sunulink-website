import type { StarlinkFormData } from '@/types';

/**
 * Service d'envoi de formulaire via l'API Resend
 */
export const sendStarlinkRequest = async (
  data: StarlinkFormData
): Promise<{ success: boolean; message: string }> => {
  try {
    // 1. Appel principal vers le backend serverless (/api/contact)
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json().catch(() => null);

    if (response.ok && result?.success) {
      return {
        success: true,
        message:
          result.message ||
          'Votre demande a été envoyée avec succès ! Notre équipe technique vous contactera sous peu.',
      };
    }

    // Si le serveur a répondu avec une erreur explicite
    if (result && result.message) {
      // Si l'erreur est liée à la clé API ou si la route est en 404
      if (response.status !== 404) {
        return {
          success: false,
          message: result.message,
        };
      }
    }

    // 2. Fallback direct côté client si l'API route n'est pas déployée (ex: hébergement statique pur)
    const clientApiKey =
      import.meta.env.VITE_RESEND_API_KEY ||
      import.meta.env.RESEND_API_KEY;

    if (clientApiKey && clientApiKey.startsWith('re_')) {
      const directResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${clientApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from:
            import.meta.env.VITE_RESEND_FROM_EMAIL ||
            'SUNULINK Telecom <onboarding@resend.dev>',
          to: [
            import.meta.env.VITE_CONTACT_EMAIL ||
            'contact@sunulinktelecom.com',
          ],
          reply_to: data.email || undefined,
          subject: `🚀 Nouvelle Demande Kit Starlink — ${data.fullName} (${data.region})`,
          html: `
            <h2>Nouvelle Demande d'Installation Kit Starlink</h2>
            <p><strong>Nom :</strong> ${data.fullName}</p>
            <p><strong>Téléphone :</strong> ${data.phone}</p>
            <p><strong>Email :</strong> ${data.email || 'Non renseigné'}</p>
            <p><strong>Région :</strong> ${data.region}</p>
            <p><strong>Département :</strong> ${data.departement}</p>
            <p><strong>Adresse :</strong> ${data.address}</p>
            ${
              data.latitude && data.longitude
                ? `<p><strong>GPS :</strong> Lat ${data.latitude}, Long ${data.longitude} (<a href="https://www.google.com/maps?q=${data.latitude},${data.longitude}">Voir sur Maps</a>)</p>`
                : ''
            }
            <p><strong>Message :</strong> ${data.message || 'Aucun'}</p>
          `,
        }),
      });

      const directResult = await directResponse.json().catch(() => null);

      if (directResponse.ok) {
        return {
          success: true,
          message:
            'Votre demande a été envoyée avec succès ! Notre équipe technique vous contactera sous peu.',
        };
      } else {
        return {
          success: false,
          message:
            directResult?.message ||
            "Erreur lors de l'envoi direct avec l'API Resend.",
        };
      }
    }

    return {
      success: false,
      message:
        result?.message ||
        "Impossible d'envoyer votre demande. Veuillez vérifier votre connexion ou nous contacter directement.",
    };
  } catch (error: any) {
    console.error('Error sending Starlink request:', error);
    return {
      success: false,
      message:
        error?.message ||
        "Une erreur de réseau est survenue lors de l'envoi de votre demande.",
    };
  }
};
