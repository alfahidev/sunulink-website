import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-primary to-dark overflow-hidden">
      {/* Network pattern overlay */}
      <div className="absolute inset-0 network-pattern opacity-10" />

      <Container className="relative z-10 text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à connecter votre territoire ?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet de connectivité.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" href="#starlink">
              Demander un devis
            </Button>
            <Button variant="outline" href="tel:+221771419283">
              Nous appeler
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
