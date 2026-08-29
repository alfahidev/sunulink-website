import Container from '@/components/ui/Container';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function AmbitionSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 overflow-hidden">
      {/* Network pattern overlay */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}>
      </div>
      
      <Container className="relative z-10">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-orange-400 font-bold uppercase tracking-wider text-sm">
              Notre ambition
            </h2>
            
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Devenir un acteur majeur de la connectivité de proximité en Afrique de l'Ouest.
            </h3>
            
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Notre développement commence au Sénégal avec une conviction simple :
            </p>
            
            <div className="mt-12 p-8 md:p-10 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <p className="text-2xl md:text-3xl font-medium text-white italic leading-relaxed">
                "La prochaine étape de la révolution numérique ne consiste pas seulement à construire davantage de réseaux. Elle consiste à faire parvenir ces réseaux jusqu'à chaque entreprise, chaque communauté et chaque foyer."
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20 inline-block">
              <p className="text-lg font-bold text-white tracking-wide">
                SUNULINK Telecom SA <span className="text-orange-400 mx-2">—</span> <span className="font-normal text-blue-100">Connecter aujourd'hui, bâtir demain.</span>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
