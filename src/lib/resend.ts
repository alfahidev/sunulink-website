import type { StarlinkFormData } from "@/types";

/**
 * Utilitaires pour l'intégration de Resend (Envoi d'emails)
 */

export const sendStarlinkRequest = async (
  data: StarlinkFormData,
): Promise<{ success: boolean; message: string }> => {
  // TODO: Implémenter l'intégration de l'API Resend ici
  // Vous pourrez utiliser les variables d'environnement suivantes:
  // const RESEND_API_KEY = import.meta.env.VITE_RESEND_API_KEY;
  // const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL;

  console.log(
    "Simulation d'envoi de la demande Starlink avec les données:",
    data,
  );

  // Simulation d'une requête réseau
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: true,
    message:
      "Votre demande a été envoyée avec succès. Nous vous contacterons sous peu.",
  };
};
