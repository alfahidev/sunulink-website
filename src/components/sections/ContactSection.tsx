import { Phone, Mail, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function ContactSection() {
  const contacts = [
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+221 XX XXX XX XX',
      href: 'tel:+221000000000',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@sunulink.com',
      href: 'mailto:contact@sunulink.com',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: 'Dakar, Sénégal',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-light">
      <Container>
        <AnimatedSection>
          <SectionHeading badge="Contact" title="Nous contacter" centered />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 mt-12">
          {contacts.map((contact, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="bg-white p-8 text-center hover:shadow-xl transition-shadow duration-300 h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                  <contact.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2">
                  {contact.title}
                </h3>
                <a
                  href={contact.href}
                  className="text-primary hover:text-accent transition-colors font-medium"
                >
                  {contact.value}
                </a>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="text-center">
          <p className="text-xl text-dark mb-8 font-medium">
            Vous avez un projet ? Discutons-en.
          </p>
          <Button variant="primary" href="mailto:contact@sunulink.com">
            Contactez-nous
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
