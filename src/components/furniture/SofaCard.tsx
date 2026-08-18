import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import type { SofaProduct } from '../../data/sofas';
import { getProductWhatsAppUrl } from '../../lib/whatsapp';
import { trackWhatsAppClick } from '../../lib/activityLogger';
import { Button } from '../ui/Button';

interface SofaCardProps {
  sofa: SofaProduct;
}

export const SofaCard: React.FC<SofaCardProps> = ({ sofa }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-cream-50 rounded-3xl overflow-hidden border border-sand/60 shadow-soft hover:shadow-elevated transition-all duration-500 flex flex-col justify-between"
    >
      <div>
        {/* Card Header & Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-sand/30">
          <img
            src={sofa.image}
            alt={sofa.name}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {sofa.bestseller && (
              <span className="bg-terracotta-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-soft flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Best Seller
              </span>
            )}
            <span className="bg-brown-900/80 text-cream-100 backdrop-blur-md text-[10px] font-medium uppercase tracking-wider px-3 py-1 rounded-full">
              {sofa.category.replace('-', ' ')}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-serif text-xl font-normal text-brown-900 group-hover:text-terracotta-600 transition-colors">
              {sofa.name}
            </h3>
            <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-600 bg-terracotta-50 px-2.5 py-1 rounded-full shrink-0">
              {sofa.priceLabel}
            </span>
          </div>

          <p className="text-xs text-brown-600/70 font-light line-clamp-2 leading-relaxed mb-4">
            {sofa.tagline}
          </p>

          {/* Key Specs / Customization highlights */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {sofa.styles.map((style) => (
              <span
                key={style}
                className="text-[11px] font-medium text-brown-700 bg-sand/40 px-2.5 py-0.5 rounded-md"
              >
                {style}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="px-6 pb-6 pt-0 flex items-center gap-2">
        <Link to={`/sofa/${sofa.id}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full justify-between group-hover:border-terracotta-500">
            <span>Explore Design</span>
            <ArrowRight className="w-4 h-4 text-terracotta-500" />
          </Button>
        </Link>
        <a
          href={getProductWhatsAppUrl(sofa.name)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick(`Product Card: ${sofa.name}`, `Inquiry for sofa "${sofa.name}" (${sofa.priceLabel})`)}
          className="p-2.5 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors duration-300"
          title="Inquire via WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};
