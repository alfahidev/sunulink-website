import type React from 'react';
import { Globe, Phone, Radio, Cloud } from 'lucide-react';
import Container from '@/components/ui/Container';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { cn } from '@/utils/cn';

const features = [
  { icon: Globe, label: 'Internet Haut Débit' },
  { icon: Phone, label: 'Voix & Téléphonie' },
  { icon: Radio, label: 'Réseaux & Infrastructure' },
  { icon: Cloud, label: 'Solutions Cloud' },
];

const LastKmSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left" className="space-y-8">
            <div>
              <Badge className="mb-4 bg-blue-50 text-[#003B73]">Notre engagement</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E2939] font-montserrat leading-tight">
                La connectivité jusqu'au dernier kilomètre
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                Notre ambition ne s'arrête pas à déployer des infrastructures. SUNULINK Telecom SA intervient là où la connectivité prend réellement tout son sens : chez l'utilisateur final.
              </p>
              <p>
                Des grands centres urbains aux territoires plus éloignés, nous mettons notre connaissance du terrain, nos équipes locales et nos capacités techniques au service d'une connectivité plus inclusive.
              </p>
            </div>

            <Button variant="primary" href="#services">
              Découvrir nos services
            </Button>
          </AnimatedSection>

          <AnimatedSection direction="right" className="relative">
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#0099FF]/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className={cn(
                      "p-6 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center justify-center text-center gap-4 transition-transform hover:-translate-y-1",
                      index === 1 || index === 3 ? "translate-y-8" : ""
                    )}
                  >
                    <div className="w-14 h-14 rounded-full bg-blue-50 text-[#003B73] flex items-center justify-center">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-semibold text-[#1E2939]">{feature.label}</h3>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
};

export default LastKmSection;
