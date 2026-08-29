import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Target, Eye } from 'lucide-react';

export default function MissionVisionSection() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <AnimatedSection delay={0.1}>
            <Card className="h-full p-8 border-t-4 border-t-orange-500 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Notre mission</h3>
              <p className="text-xl font-medium text-gray-800 mb-4">
                Rendre la connectivité accessible partout où elle peut créer de la valeur.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nous voulons permettre aux particuliers, entreprises, administrations et communautés d'accéder à des solutions télécoms fiables, performantes et adaptées à leurs besoins.
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="h-full p-8 border-t-4 border-t-blue-600 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Notre vision</h3>
              <p className="text-xl font-medium text-gray-800 mb-4">
                Un Sénégal connecté, sans territoire oublié.
              </p>
              <p className="text-gray-600 leading-relaxed">
                SUNULINK Telecom SA souhaite contribuer à réduire la fracture numérique et accompagner le développement de nouvelles infrastructures de connectivité au Sénégal.
              </p>
            </Card>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Proximité</h4>
              <p className="text-gray-600">être présent au plus près des utilisateurs.</p>
            </Card>
            <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Innovation</h4>
              <p className="text-gray-600">intégrer les technologies les plus pertinentes pour chaque territoire.</p>
            </Card>
            <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Impact</h4>
              <p className="text-gray-600">faire de la connectivité un levier d'emploi, d'éducation, d'entrepreneuriat et de développement économique.</p>
            </Card>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
