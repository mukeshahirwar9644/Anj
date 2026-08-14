import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { getWhatsAppUrl } from '../../lib/whatsapp';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Our Sofas', path: '/sofas' },
  { name: 'Sofa-Cum-Beds', path: '/sofa-cum-beds' },
  { name: 'Cushions & Comfort', path: '/cushions-comfort' },
  { name: 'Customize', path: '/customize' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const location = useLocation();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'glass-header py-3 shadow-soft'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 xl:gap-4">
            {/* Logo */}
            <Logo size="md" className="shrink-0" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 bg-cream-50/60 backdrop-blur-md px-2.5 xl:px-4 py-1.5 rounded-full border border-sand/40 shrink-0">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={`relative px-2.5 xl:px-3.5 py-1.5 text-xs xl:text-sm font-medium whitespace-nowrap transition-colors duration-300 rounded-full ${
                      isActive
                        ? 'text-terracotta-600 font-semibold'
                        : 'text-brown-800 hover:text-terracotta-600'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-terracotta-500/10 rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* Right Side Desktop Actions */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 shrink-0"
                aria-label="WhatsApp Chat"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <Link to="/customize" className="shrink-0">
                <Button variant="primary" size="sm" showArrow>
                  Get a Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#25D366]/10 text-[#25D366]"
                aria-label="WhatsApp Chat"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-full bg-cream-200 text-brown-900 focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-brown-950 text-cream-100 flex flex-col justify-between p-6 sm:p-8 lg:hidden overflow-y-auto"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between border-b border-cream-100/10 pb-4">
              <Logo variant="light" size="md" />
              <button
                onClick={closeMobileMenu}
                className="p-2.5 rounded-full bg-cream-100/10 text-cream-100 hover:bg-terracotta-500 transition-colors"
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="py-8 flex flex-col gap-4">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={closeMobileMenu}
                    className={`font-serif text-2xl sm:text-3xl font-normal block py-1 transition-colors ${
                      location.pathname === link.path
                        ? 'text-terracotta-400 font-medium'
                        : 'text-cream-100 hover:text-terracotta-400'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-cream-100/10 flex flex-col gap-3">
              <Link to="/customize" onClick={closeMobileMenu} className="w-full">
                <Button variant="primary" size="lg" className="w-full justify-between" showArrow>
                  Get a Custom Quote
                </Button>
              </Link>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="whatsapp" size="lg" className="w-full justify-between">
                  <span>Chat on WhatsApp</span>
                  <MessageCircle className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
