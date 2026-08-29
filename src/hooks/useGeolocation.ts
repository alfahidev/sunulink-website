import { useState, useCallback } from 'react';
import type { GeoPosition } from '@/types';

interface UseGeolocationReturn {
  position: GeoPosition | null;
  error: string | null;
  loading: boolean;
  getPosition: () => void;
}

export function useGeolocation(): UseGeolocationReturn {
  const [position, setPosition] = useState<GeoPosition | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getPosition = useCallback(() => {
    if (!navigator.geolocation) {
      setError("La géolocalisation n'est pas prise en charge par votre navigateur.");
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
        });
        setLoading(false);
      },
      (err) => {
        switch (err.code) {
          case err.PERMISSION_DENIED:
            setError("Vous avez refusé l'accès à votre position.");
            break;
          case err.POSITION_UNAVAILABLE:
            setError('Votre position est indisponible.');
            break;
          case err.TIMEOUT:
            setError('La demande de géolocalisation a expiré.');
            break;
          default:
            setError('Une erreur inconnue est survenue.');
        }
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, []);

  return { position, error, loading, getPosition };
}
