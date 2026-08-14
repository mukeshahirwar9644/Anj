import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export const EditorialShowcase: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-brown-950 text-cream-100 py-24">
      {/* Background Editorial Image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1800"
          alt="Luxury living space featuring Gaddi & Co."
          className="w-full h-full object-cover opacity-35 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brown-950 via-brown-950/70 to-transparent" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] text-terracotta-400 uppercase mb-4">
            EDITORIAL COLLECTION
          </span>
          
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight">
            Where Architecture Meets <span className="italic text-terracotta-300">Uncompromising Comfort.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-cream-200/80 font-light leading-relaxed">
            Every piece crafted at Gaddi &amp; Co. undergoes hand-assembly by master artisans. From kiln-dried hardwood framing to hand-tufted upholstery stitch lines.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/customize">
              <Button variant="primary" size="lg" showArrow>
                Start Customizing
              </Button>
            </Link>
            <Link to="/gallery">
              <Button variant="outline" size="lg" className="border-cream-100/30 text-cream-100 hover:border-terracotta-400 hover:text-terracotta-400">
                View Lookbook
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
