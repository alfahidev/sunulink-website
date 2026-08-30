import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { cn } from '@/utils/cn';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: 'Entreprise & Identité',
    question: "Qu'est-ce que SUNULINK Telecom SA ?",
    answer:
      "SUNULINK Telecom SA est une société anonyme de télécommunications sénégalaise de référence. Forte de plus de 12 ans d'expérience terrain et d'un réseau structuré de plus de 180 professionnels, SUNULINK est spécialisée dans l'Internet haut débit, l'installation de kits satellites Starlink, le déploiement d'infrastructures réseaux et la maintenance sur l'ensemble des 14 régions du Sénégal.",
  },
  {
    category: 'Starlink & Satellite',
    question: "Comment solliciter SUNULINK pour l'installation d'un Kit Starlink au Sénégal ?",
    answer:
      "Vous pouvez remplir le formulaire dédié sur notre site web (section Starlink). Sélectionnez votre région (parmi les 14 régions du Sénégal) et votre département, puis partagez vos coordonnées GPS précises en cliquant sur 'Partager ma position'. Nos techniciens locaux interviennent rapidement pour l'installation, le pointage et la configuration complète.",
  },
  {
    category: 'Couverture Territoriale',
    question: "Dans quelles régions du Sénégal SUNULINK Telecom SA intervient-elle ?",
    answer:
      "SUNULINK Telecom SA couvre 100% du territoire national sénégalais : Dakar, Thiès, Diourbel, Fatick, Kaolack, Kaffrine, Louga, Saint-Louis, Matam, Tambacounda, Kédougou, Kolda, Sédhiou et Ziguinchor (46 départements). Nos équipes interviennent aussi bien en zones urbaines, périurbaines qu'en zones rurales éloignées.",
  },
  {
    category: 'Solutions & Services',
    question: 'Quels sont les services télécoms proposés par SUNULINK ?',
    answer:
      'SUNULINK Telecom SA intervient sur toute la chaîne de valeur : Internet & Connectivité haut débit, Déploiement et installation d’équipements télécoms, Réseaux & Infrastructures (dernier kilomètre), Solutions satellitaires de pointe, et Maintenance préventive / corrective avec support technique 24/7.',
  },
  {
    category: 'Différenciation & Confiance',
    question: 'Quelle est la différence entre SUNULINK Telecom SA et les autres acteurs ?',
    answer:
      'SUNULINK Telecom SA est l’organisation télécoms nationale structurée avec plus de 24 000 foyers connectés, 180 techniciens certifiés et une présence locale permanente dans chaque région du Sénégal, garantissant une réactivité immédiate et une conformité technique totale.',
  },
  {
    category: 'Support & Délais',
    question: 'Quels sont les délais d’intervention et de support technique ?',
    answer:
      'Grâce à notre maillage territorial dans les 14 régions, nos équipes techniques peuvent intervenir sous 24 à 48 heures pour les installations et déploiements, avec une assistance utilisateur continue et des contrats de maintenance préventive sur mesure.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <Container>
        <AnimatedSection>
          <SectionHeading
            badge="Foire Aux Questions"
            title="Questions fréquentes sur SUNULINK Telecom"
            subtitle="Tout ce que vous devez savoir sur nos services télécoms, l'installation Starlink et notre couverture au Sénégal."
            centered={true}
          />
        </AnimatedSection>

        <div className="mt-16 max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div
                  className={cn(
                    'rounded-2xl border transition-all duration-300 overflow-hidden',
                    isOpen
                      ? 'border-secondary/40 bg-gradient-to-br from-white to-blue-50/30 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-secondary/30 hover:shadow-md'
                  )}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={cn(
                          'w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors',
                          isOpen
                            ? 'bg-primary text-white shadow-md'
                            : 'bg-primary/10 text-primary'
                        )}
                      >
                        <HelpCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                          {faq.category}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-dark font-sans leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={cn(
                        'w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300',
                        isOpen
                          ? 'rotate-180 bg-accent text-white'
                          : 'bg-gray-100 text-gray-500'
                      )}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-2 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom CTA for unaddressed questions */}
        <AnimatedSection delay={0.3} className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-200">
            <p className="text-sm sm:text-base text-dark font-medium">
              Vous avez une question spécifique sur votre projet télécom ou satellitaire ?
            </p>
            <Button variant="primary" size="sm" href="#contact" icon>
              Contactez nos experts
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
