import type React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

const HeroSection: React.FC = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#003B73] hero-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none network-pattern"></div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#0099FF] rounded-full opacity-50 animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-[#FF7A00] rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-white rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-[#0099FF] rounded-full opacity-40 animate-float" style={{ animationDelay: '1.5s' }}></div>

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
          className="flex flex-col items-center"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium border border-white/20 backdrop-blur-sm"
          >
            Votre partenaire de confiance en solutions télécoms
          </motion.span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight font-montserrat">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="block mb-2"
            >
              Connecter aujourd'hui,
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="block text-[#FF7A00] italic font-bold"
            >
              bâtir demain
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
          >
            Sunulink Telecom SA, votre partenaire de confiance en solutions télécoms et numériques.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="primary" href="#services" className="w-full sm:w-auto flex items-center justify-center gap-2 group">
              Nos services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" href="#contact" className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10 hover:border-white">
              Nous contacter
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <a href="#services" className="text-white/50 hover:text-white transition-colors" aria-label="Scroll down">
          <ChevronDown className="w-8 h-8" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
