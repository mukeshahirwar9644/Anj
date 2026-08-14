import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { ImageReveal } from '../ui/ImageReveal';
import { Button } from '../ui/Button';
import { CheckCircle2 } from 'lucide-react';

export const MadeAroundYouIntro: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Image Grid */}
          <div className="lg:col-span-6 relative">
            <ImageReveal
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
              alt="Gaddi & Co. Custom Furniture Philosophy"
              organicMask
              className="shadow-elevated border border-sand"
            />
            {/* Overlay Accent Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 max-w-xs bg-brown-900 text-cream-100 p-6 rounded-3xl shadow-elevated border border-terracotta-500/20 hidden sm:block"
            >
              <p className="font-serif text-lg font-normal italic text-terracotta-300">
                &ldquo;Every room has its own character. We design around it.&rdquo;
              </p>
              <p className="mt-3 text-xs text-sand/80 font-medium tracking-widest uppercase">
                — Gaddi &amp; Co. Design Philosophy
              </p>
            </motion.div>
          </div>

          {/* RIGHT: Philosophy Story */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <SectionHeading
              eyebrow="OUR PHILOSOPHY"
              title="Furniture Made Around You."
              subtitle="We believe your sofa should adapt to your living space, not the other way around."
            />

            <div className="space-y-4 text-brown-800 font-light text-base md:text-lg leading-relaxed">
              <p className="border-l-2 border-terracotta-500 pl-4 py-1 italic font-serif text-brown-900">
                Every home is different. Every room has its own character. Every person has a unique definition of comfort.
              </p>
              <p>
                At Gaddi &amp; Co., we craft furniture around those exact differences. From custom armrest widths and seating depth to foam firmness and hand-stitched upholstery—every piece is built to your specifications.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full">
              {[
                'Millimeter-Perfect Dimensions',
                'Ergonomic Posture Cushioning',
                'Hand-Selected Indian Textiles',
                'Lifetime Frame Structural Support',
              ].map((pillar, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-cream-50 p-3.5 rounded-2xl border border-sand/50">
                  <CheckCircle2 className="w-5 h-5 text-terracotta-500 shrink-0" />
                  <span className="text-xs font-semibold text-brown-900">{pillar}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link to="/about">
                <Button variant="primary" size="md" showArrow>
                  Read Our Full Story
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
