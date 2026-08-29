import { Globe, Wrench, Headphones, Network, Satellite } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import IconCard from '@/components/ui/IconCard';

const domaines = [
  {
    icon: Globe,
    title: 'Internet & Connectivité',
    description:
      "Solutions d'accès Internet et de connectivité adaptées aux particuliers, professionnels et communautés.",
  },
  {
    icon: Wrench,
    title: 'Installation & Déploiement',
    description:
      "Installation, configuration et mise en service d'équipements et d'infrastructures télécoms.",
  },
  {
    icon: Headphones,
    title: 'Maintenance & Support',
    description:
      'Maintenance préventive et corrective, diagnostic, intervention terrain et accompagnement technique.',
  },
  {
    icon: Network,
    title: 'Réseaux & Infrastructures',
    description:
      "Déploiement et optimisation d'infrastructures permettant d'étendre la couverture et la qualité des services.",
  },
  {
    icon: Satellite,
    title: 'Solutions satellitaires',
    description:
      'Installation et accompagnement au déploiement de solutions de connectivité satellitaire, notamment dans les zones difficiles à couvrir.',
  },
];

export default function DomainesSection() {
  return (
    <section id="services" className="py-24 bg-[#F9FAFB]">
      <Container>
        <AnimatedSection>
          <SectionHeading
            badge="Nos domaines"
            title="Nos domaines d'intervention"
            centered
          />
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-6 mt-16">
          {domaines.map((domaine, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <IconCard
                icon={domaine.icon}
                title={domaine.title}
                description={domaine.description}
                className="bg-white hover:border-secondary/30 h-full w-full"
              />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
