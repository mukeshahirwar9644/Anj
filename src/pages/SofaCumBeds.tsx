import React from 'react';
import { Link } from 'react-router-dom';
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider';
import { Button } from '../components/ui/Button';
import { SofaCard } from '../components/furniture/SofaCard';
import { SOFAS_DATA } from '../data/sofas';
import { Maximize2, Moon, Sparkles, Shield, CheckCircle } from 'lucide-react';

export const SofaCumBeds: React.FC = () => {
  const sofaCumBeds = SOFAS_DATA.filter((item) => item.category === 'sofa-cum-bed');

  return (
    <div className="pt-28 md:pt-36 pb-24 bg-cream-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 bg-terracotta-50 text-terracotta-700 px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border border-terracotta-200 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> DUAL UTILITY REVOLUTION
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-brown-900">
            One Sofa. <br />
            <span className="italic text-terracotta-500">Two Ways To Live.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brown-700/80 font-light leading-relaxed">
            Luxury daytime living room sofa transformed into a posture-supporting queen bed in under 5 seconds. Engineered for modern urban homes.
          </p>
        </div>

        {/* TRANSFORMATION SLIDER */}
        <div className="mb-20">
          <BeforeAfterSlider
            sofaImage="https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=1400"
            bedImage="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1400"
            sofaTitle="Sofa Mode (Day)"
            bedTitle="Queen Bed Mode (Night)"
          />
        </div>

        {/* FEATURE BREAKDOWN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Maximize2,
              title: 'Space Saving Dual Purpose',
              desc: 'Eliminates the need for a separate guest room bed. Ideal for modern apartments and villas.',
            },
            {
              icon: Moon,
              title: 'Everyday Sleep Ergonomics',
              desc: 'High-density orthopedic memory foam insert prevents mid-spine sagging for sound sleep.',
            },
            {
              icon: Shield,
              title: 'Heavy Duty Metal Mechanism',
              desc: 'Engineered steel pull-out mechanism with a 10-year durability guarantee.',
            },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-cream-50 p-8 rounded-3xl border border-sand/70 shadow-soft"
              >
                <div className="w-12 h-12 rounded-2xl bg-terracotta-500/10 text-terracotta-600 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-normal text-brown-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs text-brown-700/80 font-light leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CUSTOMIZATION OPTIONS SUMMARY */}
        <div className="bg-brown-950 text-cream-100 p-8 sm:p-12 rounded-4xl mb-20 shadow-elevated">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl font-normal text-cream-50 mb-4">
              Customize Your Sofa-Cum-Bed
            </h2>
            <p className="text-sm text-cream-200/80 font-light leading-relaxed mb-6">
              Choose your custom length, side storage armrests, stain-proof fabric, and mattress thickness.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                'Storage Chaise Module',
                'Memory Foam Mattress Insert',
                'Removable Washable Covers',
                'Custom Armrest Widths',
              ].map((opt, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-sand">
                  <CheckCircle className="w-4 h-4 text-terracotta-400" />
                  <span>{opt}</span>
                </div>
              ))}
            </div>
            <Link to="/customize">
              <Button variant="primary" size="lg" showArrow>
                Customize Your Sofa-Cum-Bed Now
              </Button>
            </Link>
          </div>
        </div>

        {/* FEATURED MODELS */}
        {sofaCumBeds.length > 0 && (
          <div>
            <h2 className="font-serif text-3xl text-brown-900 mb-8">
              Sofa-Cum-Bed Models
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sofaCumBeds.map((sofa) => (
                <SofaCard key={sofa.id} sofa={sofa} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
