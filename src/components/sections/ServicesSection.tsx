import type { ElementType } from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';
import { Globe, Wrench, Headphones, Network, Satellite, ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

const iconMap: Record<string, ElementType> = {
  Globe,
  Wrench,
  HeadsetIcon: Headphones,
  Network,
  Satellite,
};

export default function ServicesSection() {
  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().indexOf('wifi communautaire') === -1
  );

  return (
    <section id="services-details" className="py-24 bg-gray-50/70 relative">
      <Container>
        <AnimatedSection>
          <SectionHeading
            badge="Nos solutions"
            title="Des solutions télécoms de bout en bout"
            subtitle="SUNULINK Telecom SA intervient sur l'ensemble de la chaîne de valeur de la connectivité : de l'étude du besoin jusqu'à l'installation, l'exploitation et la maintenance."
            centered={true}
          />
        </AnimatedSection>

        <div className="mt-20 space-y-28">
          {filteredServices.map((service, index) => {
            const isEven = index % 2 === 1;
            const Icon = iconMap[service.icon] || Globe;

            return (
              <div
                key={service.title}
                className={cn(
                  'flex flex-col lg:flex-row gap-12 lg:gap-16 items-center',
                  isEven ? 'lg:flex-row-reverse' : ''
                )}
              >
                {/* Text Content */}
                <div className="flex-1 w-full">
                  <AnimatedSection
                    direction={isEven ? 'left' : 'right'}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1.5 rounded-full">
                          Service 0{index + 1}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark font-sans tracking-tight">
                        {service.title}
                      </h3>

                      <p className="text-base md:text-lg text-gray-600 leading-relaxed font-normal">
                        {service.fullDescription}
                      </p>

                      {service.solutions && service.solutions.length > 0 && (
                        <div className="pt-2">
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-dark/70 mb-3">
                            Domaines & Prestations :
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.solutions.map(
                              (solution: string, sIndex: number) => (
                                <Badge
                                  key={sIndex}
                                  variant={sIndex % 2 === 0 ? 'primary' : 'secondary'}
                                  className="px-3.5 py-1.5 text-xs font-medium normal-case tracking-normal shadow-sm"
                                >
                                  {solution}
                                </Badge>
                              )
                            )}
                          </div>
                        </div>
                      )}

                      <div className="pt-4">
                        <Button
                          variant={index === 4 ? 'primary' : 'secondary'}
                          size="md"
                          href={index === 4 ? '#starlink' : '#contact'}
                          className="shadow-sm"
                        >
                          {index === 4 ? 'Commander un kit Starlink' : 'Solliciter nos services'}
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>

                {/* Service Image visual */}
                <div className="flex-1 w-full">
                  <AnimatedSection
                    direction={isEven ? 'right' : 'left'}
                    delay={0.2}
                  >
                    <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 bg-dark">
                      {/* Image */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        {/* Gradient overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                      </div>

                      {/* Floating bottom label banner */}
                      <div className="absolute bottom-0 inset-x-0 p-6 flex items-center justify-between backdrop-blur-md bg-dark/70 border-t border-white/10 text-white">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white shadow-md">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white leading-snug">
                              {service.title}
                            </p>
                            <p className="text-xs text-gray-300">
                              SUNULINK Telecom SA • 14 Régions
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-accent bg-accent/20 border border-accent/40 px-2.5 py-1 rounded-md">
                          Certifié
                        </span>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
