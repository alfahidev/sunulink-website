import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Satellite, ShieldCheck, Zap } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary hero-gradient pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none network-pattern" />

      {/* Floating Decorative Elements */}
      <div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-secondary rounded-full opacity-50 animate-float"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-accent rounded-full opacity-40 animate-float"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-3 h-3 bg-white rounded-full opacity-30 animate-float"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-secondary rounded-full opacity-40 animate-float"
        style={{ animationDelay: '1.5s' }}
      />

      <Container className="relative z-10 text-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/95 text-xs sm:text-sm font-semibold border border-white/20 backdrop-blur-md shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span>Opérateur &amp; Intégrateur Télécoms au Sénégal</span>
          </motion.div>

          {/* Main H1 Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight font-sans">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="block mb-2"
            >
              Connecter aujourd&apos;hui,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="block text-accent italic font-black"
            >
              bâtir demain
            </motion.span>
          </h1>

          {/* Subtitle with high-value SEO keywords */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            <strong>SUNULINK Telecom SA</strong>, votre partenaire de confiance en solutions télécoms au Sénégal.
            Déploiement réseau, <strong>Internet haut débit</strong> et <strong>Installation Kit Starlink</strong> certifiée dans les 14 régions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Button
              variant="primary"
              href="#starlink"
              size="lg"
              className="w-full sm:w-auto shadow-xl"
            >
              <Satellite className="w-5 h-5 mr-2" />
              Installer un Kit Starlink
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              variant="outline"
              href="#services-details"
              size="lg"
              className="w-full sm:w-auto text-white border-white/40 hover:bg-white/10 hover:border-white"
            >
              Découvrir nos services
            </Button>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto text-white/80 text-xs sm:text-sm"
          >
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
              <span>14 Régions Couvertes</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 text-accent shrink-0" />
              <span>180+ Professionnels</span>
            </div>
            <div className="col-span-2 md:col-span-1 flex items-center justify-center gap-2">
              <Satellite className="w-4 h-4 text-accent shrink-0" />
              <span>24 000 Foyers Connectés</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      >
        <a
          href="#services-details"
          className="text-white/60 hover:text-white transition-colors"
          aria-label="Faire défiler la page"
        >
          <ChevronDown className="w-7 h-7" />
        </a>
      </motion.div>
    </section>
  );
}
