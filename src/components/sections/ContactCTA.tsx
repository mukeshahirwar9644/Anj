import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { getWhatsAppUrl, PHONE_NUMBER } from '../../lib/whatsapp';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-brown-950 text-cream-100 relative overflow-hidden">
      {/* Soft Terracotta Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-terracotta-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-flex items-center gap-2 bg-terracotta-500/10 text-terracotta-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-terracotta-500/20 mb-6">
          <Sparkles className="w-3.5 h-3.5" /> READY FOR YOUR CUSTOM SOFA?
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.15] text-cream-50 max-w-3xl mx-auto">
          Let&apos;s Create Your <span className="italic text-terracotta-400">Perfect Sofa.</span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-cream-200/80 font-light max-w-xl mx-auto leading-relaxed">
          Share your room measurements, fabric preferences, or reference photos. Our custom furniture designers respond within 30 minutes.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link to="/customize">
            <Button variant="primary" size="lg" showArrow>
              Get a Custom Quote
            </Button>
          </Link>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="whatsapp" size="lg">
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Chat</span>
            </Button>
          </a>

          <a href={`tel:${PHONE_NUMBER}`}>
            <Button variant="outline" size="lg" className="border-cream-100/30 text-cream-100 hover:border-sand hover:text-white">
              <Phone className="w-4 h-4" />
              <span>Call Us Direct</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
