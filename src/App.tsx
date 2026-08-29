import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import LastKmSection from '@/components/sections/LastKmSection';
import DomainesSection from '@/components/sections/DomainesSection';
import AboutSection from '@/components/sections/AboutSection';
import ForceTerrainSection from '@/components/sections/ForceTerrainSection';
import MissionVisionSection from '@/components/sections/MissionVisionSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhySunulinkSection from '@/components/sections/WhySunulinkSection';
import AmbitionSection from '@/components/sections/AmbitionSection';
import StarlinkFormSection from '@/components/sections/StarlinkFormSection';
import ContactSection from '@/components/sections/ContactSection';
import CTASection from '@/components/sections/CTASection';

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SUNULINK Telecom SA — Connecter aujourd&apos;hui, bâtir demain.</title>
        <meta
          name="description"
          content="SUNULINK Telecom SA, votre partenaire de confiance en solutions télécoms au Sénégal. Internet haut débit, installation Starlink, réseaux, maintenance — couverture nationale dans les 14 régions."
        />
      </Helmet>

      <div className="min-h-screen bg-white font-sans antialiased">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          {/* Accueil */}
          <HeroSection />
          <StatsSection />
          <LastKmSection />

          {/* Services */}
          <DomainesSection />
          <ServicesSection />

          {/* À propos */}
          <AboutSection />
          <ForceTerrainSection />
          <MissionVisionSection />

          {/* Pourquoi Nous */}
          <WhySunulinkSection />
          <AmbitionSection />

          {/* Starlink */}
          <StarlinkFormSection />

          {/* Contact */}
          <ContactSection />
          <CTASection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top */}
        <ScrollToTop />
      </div>
    </HelmetProvider>
  );
}
