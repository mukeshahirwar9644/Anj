import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, MessageCircle, ShieldCheck, Layers, Ruler } from 'lucide-react';
import { Button } from '../ui/Button';
import { getWhatsAppUrl } from '../../lib/whatsapp';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const imageScale = useTransform(scrollY, [0, 500], [1, 1.08]);
  const imageY = useTransform(scrollY, [0, 500], [0, 40]);
  const textY = useTransform(scrollY, [0, 500], [0, -30]);

  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-cream-100 flex items-center">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-terracotta-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-sand/40 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div style={{ y: textY }} className="lg:col-span-6 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-terracotta-50 text-terracotta-700 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase border border-terracotta-200/60 mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-terracotta-500" />
              CRAFTED FOR YOUR SPACE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal leading-[1.1] text-brown-900 tracking-tight"
            >
              Comfort, <br />
              <span className="italic text-terracotta-500 font-serif">Crafted Around</span> You.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-brown-700/80 font-light leading-relaxed max-w-xl"
            >
              Premium custom sofas, sofa-cum-beds and comfort furniture designed around your space, style and lifestyle.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <Link to="/sofas">
                <Button variant="primary" size="lg" showArrow>
                  Explore Our Sofas
                </Button>
              </Link>

              <Link to="/customize">
                <Button variant="secondary" size="lg">
                  Get a Quote
                </Button>
              </Link>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="whatsapp" size="lg" className="w-full sm:w-auto">
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </Button>
              </a>
            </motion.div>

            {/* Quick Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10 pt-6 border-t border-sand/60 flex items-center gap-6 text-xs text-brown-800 font-medium"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-terracotta-500" />
                <span>Lifetime Hardwood Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-terracotta-500" />
                <span>Precision Custom Fitting</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL & FLOATING CARDS */}
          <div className="lg:col-span-6 relative">
            <motion.div
              style={{ scale: imageScale, y: imageY }}
              className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl lg:organic-mask overflow-hidden shadow-elevated border-2 border-cream-50"
            >
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200"
                alt="Gaddi & Co. Bespoke Luxury Sofa"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-950/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating Info Card 1: 100% Custom Made */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -top-4 -left-4 sm:top-6 sm:-left-6 glass-card p-4 rounded-2xl shadow-soft flex items-center gap-3 border border-sand animate-float"
            >
              <div className="w-10 h-10 rounded-xl bg-terracotta-500 text-white flex items-center justify-center shrink-0">
                <Ruler className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-brown-900">100% Custom Made</p>
                <p className="text-[10px] text-brown-600">Built to your room size</p>
              </div>
            </motion.div>

            {/* Floating Info Card 2: Premium Fabrics */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute top-1/2 -right-4 sm:-right-6 glass-card p-4 rounded-2xl shadow-soft flex items-center gap-3 border border-sand animate-float [animation-delay:2s]"
            >
              <div className="w-10 h-10 rounded-xl bg-brown-900 text-cream-100 flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-brown-900">Premium Fabrics</p>
                <p className="text-[10px] text-brown-600">300+ velvet &amp; linens</p>
              </div>
            </motion.div>

            {/* Floating Info Card 3: Made For Your Space */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 left-1/4 glass-card p-4 rounded-2xl shadow-soft flex items-center gap-3 border border-sand animate-float [animation-delay:4s]"
            >
              <div className="w-10 h-10 rounded-xl bg-terracotta-100 text-terracotta-700 flex items-center justify-center shrink-0 font-serif font-bold text-lg">
                G&amp;C
              </div>
              <div>
                <p className="text-xs font-bold text-brown-900">Made For Your Space</p>
                <p className="text-[10px] text-brown-600">Ergonomic posture support</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
