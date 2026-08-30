import { useState, useEffect, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/utils/cn';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { navLinks } from '@/data/navigation';
import type { NavLink } from '@/types';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeSection = useScrollSpy(['accueil', 'services', 'a-propos', 'starlink', 'faq', 'contact']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#accueil"
            onClick={(e) => handleNavClick(e, '#accueil')}
            className="flex items-center gap-3 z-50 relative group"
          >
            <div className="flex items-center justify-center w-11 h-11 bg-primary rounded-xl shadow-lg relative overflow-hidden transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-2xl z-10">S</span>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-accent rounded-full" />
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-secondary/40 rounded-full" />
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  'text-xl font-extrabold leading-tight tracking-tight',
                  isScrolled ? 'text-primary' : 'text-white'
                )}
              >
                Sunulink
              </span>
              <span
                className={cn(
                  'text-[0.7rem] font-bold uppercase tracking-wider',
                  isScrolled ? 'text-accent' : 'text-accent-light'
                )}
              >
                Telecom SA
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((item: NavLink) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={cn(
                        'relative text-sm font-semibold transition-colors hover:text-accent py-1',
                        isScrolled ? 'text-dark' : 'text-white/95',
                        isActive ? 'text-accent font-bold' : ''
                      )}
                    >
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                          initial={false}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
            <Button
              variant="primary"
              size="sm"
              href="#starlink"
              className="shadow-lg hover:shadow-xl"
            >
              Espace Client
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              'md:hidden z-50 p-2.5 rounded-lg transition-colors focus:outline-none',
              isScrolled ? 'text-primary hover:bg-gray-100' : 'text-white hover:bg-white/20'
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-dark" />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.35 }}
            className="fixed inset-0 z-40 bg-white md:hidden flex flex-col justify-center px-6"
          >
            <div className="flex flex-col items-center justify-center space-y-8 p-4">
              <ul className="flex flex-col items-center space-y-6 w-full">
                {navLinks.map((item: NavLink) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="w-full text-center"
                    >
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={cn(
                          'block text-2xl font-bold transition-colors py-2',
                          isActive ? 'text-accent' : 'text-primary hover:text-accent'
                        )}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="w-full max-w-xs pt-4"
              >
                <Button
                  variant="primary"
                  href="#starlink"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-base py-3.5"
                >
                  Espace Client
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
