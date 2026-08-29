import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { CheckCircle } from 'lucide-react';
import { forceTerrainPoints } from '@/data/services';

export default function ForceTerrainSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white">
      <Container>
        <AnimatedSection>
          <SectionHeading 
            title="Notre force : le terrain" 
            light={true} 
            centered={true}
          />
          <div className="max-w-3xl mx-auto text-center mt-8 text-blue-100 text-lg space-y-6">
            <p>
              La technologie seule ne suffit pas. Pour connecter durablement un territoire, il faut connaître ses infrastructures, ses contraintes géographiques, ses usages, ses langues et ses populations.
            </p>
            <p className="font-semibold text-white text-xl">
              C'est pourquoi SUNULINK Telecom SA s'appuie sur :
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {forceTerrainPoints.map((point, index) => (
            <AnimatedSection key={index} delay={0.1 * (index + 1)}>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <CheckCircle className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                <p className="text-blue-50 leading-relaxed">{point}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
