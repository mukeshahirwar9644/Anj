import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Compass, HeartHandshake, Feather } from 'lucide-react';

export const TRUST_ITEMS = [
  { icon: Compass, text: '100% Custom Made' },
  { icon: Feather, text: '300+ Premium Fabrics' },
  { icon: HeartHandshake, text: 'Expert Indian Craftsmanship' },
  { icon: Shield, text: 'Made To Fit Your Room' },
  { icon: Sparkles, text: 'Designed For Ergonomic Comfort' },
];

export const TrustStrip: React.FC = () => {
  return (
    <section className="py-8 bg-brown-950 text-cream-100 border-y border-terracotta-500/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Grid / Mobile Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-6 md:gap-8"
        >
          {TRUST_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 text-cream-200/90 hover:text-terracotta-400 transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-terracotta-500/10 text-terracotta-400 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs md:text-sm font-medium tracking-wide uppercase">
                  {item.text}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
