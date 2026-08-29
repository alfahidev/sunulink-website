import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function AboutSection() {
  return (
    <section id="a-propos" className="py-20 bg-white">
      <Container>
        <AnimatedSection>
          <SectionHeading 
            badge="À propos" 
            title="Un acteur sénégalais au service de la connectivité" 
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <AnimatedSection delay={0.2}>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                SUNULINK Telecom SA est née d'une expérience de terrain construite au plus près des besoins de connectivité des populations et des entreprises sénégalaises.
              </p>
              <p>
                Notre organisation s'appuie sur un réseau historique regroupant des professionnels spécialisés dans la vente, l'installation, le déploiement et la maintenance d'équipements et de solutions de télécommunications.
              </p>
              <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
                <p className="text-xl font-medium text-blue-900 italic">
                  "Faire de la connectivité un moteur de développement économique, social et territorial."
                </p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <div className="bg-gray-50 rounded-2xl p-8 h-full border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                Notre histoire
              </h3>
              <div className="space-y-6 text-gray-600">
                <p>
                  Depuis plus de 12 ans, nos équipes et partenaires interviennent dans l'écosystème des télécommunications au Sénégal.
                </p>
                <p>
                  Au fil des années, nous avons développé une connaissance approfondie des réalités locales, constitué un réseau de professionnels présents sur le terrain et participé au déploiement de solutions de connectivité auprès de milliers de foyers.
                </p>
                <p className="font-semibold text-gray-900">
                  Cette expérience constitue aujourd'hui l'ADN de SUNULINK Telecom SA.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
