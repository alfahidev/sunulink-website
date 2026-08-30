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
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
import CTASection from '@/components/sections/CTASection';

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SUNULINK Telecom SA — Connecter aujourd’hui, bâtir demain.</title>
        <meta
          name="description"
          content="SUNULINK Telecom SA : Opérateur et intégrateur télécoms leader au Sénégal. Installation Kit Starlink, Internet haut débit et déploiement réseau dans les 14 régions."
        />
        <link rel="canonical" href="https://sunulinktelecom.com/" />
        <meta property="og:url" content="https://sunulinktelecom.com/" />
        <meta property="og:image" content="https://sunulinktelecom.com/og-image.jpg" />
        <meta property="og:image:secure_url" content="https://sunulinktelecom.com/og-image.jpg" />
        <meta property="twitter:url" content="https://sunulinktelecom.com/" />
        <meta property="twitter:image" content="https://sunulinktelecom.com/og-image.jpg" />
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

          {/* Starlink Formulaire */}
          <StarlinkFormSection />

          {/* FAQ avec Rich Snippets */}
          <FAQSection />

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
