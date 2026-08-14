import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';
import { NAV_LINKS } from './Navbar';
import { getWhatsAppUrl, PHONE_NUMBER, COMPANY_EMAIL } from '../../lib/whatsapp';
import { MessageCircle, Phone, Mail, MapPin, Camera, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brown-950 text-cream-100 pt-16 md:pt-24 pb-28 lg:pb-12 border-t border-terracotta-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-cream-100/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Logo variant="light" size="lg" />
            <p className="text-cream-200/70 text-sm font-light leading-relaxed max-w-sm">
              Custom sofas, sofa-cum-beds, and bespoke comfort furniture designed around your space, style, and posture. Built with handcrafted solid hardwood frames and premium Indian textiles.
            </p>
            
            <div className="flex items-center gap-4 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream-100/10 text-cream-100 hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream-100/10 text-cream-100 hover:bg-terracotta-500 hover:text-white flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Camera className="w-5 h-5" />
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="w-10 h-10 rounded-full bg-cream-100/10 text-cream-100 hover:bg-terracotta-500 hover:text-white flex items-center justify-center transition-colors duration-300"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="font-serif text-lg text-cream-50 font-normal mb-5 tracking-tight">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-cream-200/70 font-light">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-terracotta-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Furniture Categories */}
          <div>
            <h3 className="font-serif text-lg text-cream-50 font-normal mb-5 tracking-tight">
              Furniture Collections
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-cream-200/70 font-light">
              <li>
                <Link to="/sofas" className="hover:text-terracotta-400 transition-colors">
                  Modern Sofas
                </Link>
              </li>
              <li>
                <Link to="/sofas" className="hover:text-terracotta-400 transition-colors">
                  L-Shape Sectionals
                </Link>
              </li>
              <li>
                <Link to="/sofa-cum-beds" className="hover:text-terracotta-400 transition-colors">
                  Sofa-Cum-Beds
                </Link>
              </li>
              <li>
                <Link to="/cushions-comfort" className="hover:text-terracotta-400 transition-colors">
                  Cushions &amp; Bolsters
                </Link>
              </li>
              <li>
                <Link to="/customize" className="hover:text-terracotta-400 transition-colors">
                  Bespoke Customization
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-serif text-lg text-cream-50 font-normal mb-5 tracking-tight">
              Craft Studio &amp; Contact
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-cream-200/70 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-terracotta-400 shrink-0 mt-0.5" />
                <span>Craft Studio &amp; Experience Center, Design District, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-terracotta-400 shrink-0" />
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-terracotta-400">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-terracotta-400 shrink-0" />
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-terracotta-400">
                  {COMPANY_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-200/50 font-light">
          <p>© {new Date().getFullYear()} Gaddi &amp; Co. All rights reserved. Crafted for your space.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-sand/70">
              <ShieldCheck className="w-4 h-4 text-terracotta-400" /> 100% Handcrafted Guarantee
            </span>
            <span className="flex items-center gap-1 text-sand/70">
              Made with <Heart className="w-3.5 h-3.5 text-terracotta-500 fill-current" /> in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
