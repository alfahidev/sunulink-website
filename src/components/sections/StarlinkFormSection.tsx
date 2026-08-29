import { useState, type ChangeEvent, type FormEvent } from 'react';
import {
  User,
  Phone,
  Mail,
  Send,
  CheckCircle,
  Satellite,
  Loader2,
  MapPin,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Textarea from '@/components/ui/Textarea';
import Card from '@/components/ui/Card';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { useGeolocation } from '@/hooks/useGeolocation';
import { regions } from '@/data/regions';
import { sendStarlinkRequest } from '@/lib/resend';

export default function StarlinkFormSection() {
  const {
    position,
    error: geoError,
    loading: geoLoading,
    getPosition,
  } = useGeolocation();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    region: '',
    departement: '',
    address: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const selectedRegion = regions.find((r) => r.name === formData.region);
  const departementOptions = selectedRegion
    ? selectedRegion.departements.map((d) => ({ value: d, label: d }))
    : [];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      region: e.target.value,
      departement: '',
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await sendStarlinkRequest({
        ...formData,
        latitude: position ? position.latitude.toString() : '',
        longitude: position ? position.longitude.toString() : '',
      });
      setStatus('success');
      setStatusMessage(response.message);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        region: '',
        departement: '',
        address: '',
        message: '',
      });
    } catch {
      setStatus('error');
      setStatusMessage("Une erreur est survenue lors de l'envoi.");
    }
  };

  return (
    <section id="starlink" className="py-20 bg-white relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Info Column */}
          <AnimatedSection>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              Starlink
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Installation du Kit Starlink
            </h2>
            <p className="text-dark/80 text-lg mb-8 leading-relaxed">
              Bénéficiez d&apos;une connexion Internet haut débit par satellite.
              Remplissez le formulaire ci-dessous pour solliciter nos services
              d&apos;installation.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Internet haut débit par satellite',
                'Installation professionnelle',
                'Configuration complète',
                'Support technique après installation',
                'Couverture nationale',
              ].map((benefit, i) => (
                <li key={i} className="flex items-center text-dark/90">
                  <CheckCircle className="w-6 h-6 text-accent mr-3 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-center p-8 bg-gray-light/50 rounded-2xl w-fit">
              <Satellite className="w-24 h-24 text-secondary opacity-80" />
            </div>
          </AnimatedSection>

          {/* Right Form Column */}
          <AnimatedSection delay={0.2}>
            <Card className="p-8 shadow-xl bg-white border border-gray-light">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Demander une installation
              </h3>

              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 mt-0.5" />
                  <p>{statusMessage}</p>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
                  <p>{statusMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  label="Nom complet"
                  name="fullName"
                  icon={User}
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input
                    label="Téléphone"
                    name="phone"
                    type="tel"
                    icon={Phone}
                    required
                    placeholder="+221 XX XXX XX XX"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    icon={Mail}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Select
                    label="Région"
                    name="region"
                    required
                    placeholder="Sélectionnez une région"
                    options={regions.map((r) => ({
                      value: r.name,
                      label: r.name,
                    }))}
                    value={formData.region}
                    onChange={handleRegionChange}
                  />
                  <Select
                    label="Département"
                    name="departement"
                    required
                    disabled={!formData.region}
                    placeholder={
                      !formData.region
                        ? "Sélectionnez d'abord une région"
                        : 'Sélectionnez un département'
                    }
                    options={departementOptions}
                    value={formData.departement}
                    onChange={handleChange}
                  />
                </div>

                <Textarea
                  label="Adresse"
                  name="address"
                  required
                  placeholder="Décrivez votre emplacement..."
                  rows={3}
                  value={formData.address}
                  onChange={handleChange}
                />

                {/* GPS Section */}
                <div className="bg-gray-light/30 p-4 rounded-lg border border-gray-light">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium text-dark">
                      Position GPS (Optionnel)
                    </label>
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      onClick={getPosition}
                      disabled={geoLoading}
                    >
                      {geoLoading ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <MapPin className="w-4 h-4 mr-2" />
                      )}
                      📍 Partager ma position
                    </Button>
                  </div>

                  {position && (
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-3">
                        <Input
                          readOnly
                          name="latitude"
                          value={position.latitude.toFixed(6)}
                          label="Latitude"
                          className="bg-white text-sm"
                        />
                        <Input
                          readOnly
                          name="longitude"
                          value={position.longitude.toFixed(6)}
                          label="Longitude"
                          className="bg-white text-sm"
                        />
                      </div>
                      {position.accuracy && (
                        <p className="text-xs text-dark/70 text-right">
                          Précision : {Math.round(position.accuracy)} mètres
                        </p>
                      )}
                    </div>
                  )}
                  {geoError && (
                    <p className="text-sm text-red-500 mt-2">{geoError}</p>
                  )}
                </div>

                <Textarea
                  label="Message"
                  name="message"
                  placeholder="Commentaire additionnel..."
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                />

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full mt-4"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  Envoyer la demande
                </Button>
              </form>
            </Card>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
