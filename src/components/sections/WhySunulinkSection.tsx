import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Card from '@/components/ui/Card';
import { whyUsItems } from '@/data/services';
import { MapPin, Users, Zap, Award, Target, Handshake } from 'lucide-react';
import type { ElementType } from 'react';

const iconMap: Record<string, ElementType> = {
  MapPin,
  Users,
  Zap,
  Award,
  Target,
  Handshake,
};

export default function WhySunulinkSection() {
  return (
    <section id="pourquoi" className="py-24 bg-white">
      <Container>
        <AnimatedSection>
          <SectionHeading
            badge="Nos atouts"
            title="Pourquoi SUNULINK ?"
            subtitle="Une infrastructure technologique a besoin d'un partenaire terrain."
            centered={true}
          />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUsItems.map((item, index) => {
            const Icon = iconMap[item.icon] || Award;

            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 group">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
