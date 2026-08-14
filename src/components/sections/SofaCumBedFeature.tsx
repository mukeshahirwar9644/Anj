import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';
import { Button } from '../ui/Button';
import { Zap, Moon, Maximize2, ShieldAlert } from 'lucide-react';

export const SofaCumBedFeature: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="DUAL UTILITY REVOLUTION"
          title="One Sofa. Two Ways To Live."
          subtitle="Seamless daytime luxury seating that smoothly transforms into a posture-supporting queen mattress in seconds."
          align="center"
        />

        {/* Interactive Transformation Slider Component */}
        <div className="mb-16">
          <BeforeAfterSlider
            sofaImage="https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=1400"
            bedImage="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1400"
            sofaTitle="Sofa Mode — Daytime Lounge"
            bedTitle="Bed Mode — Queen Mattress"
          />
        </div>

        {/* Features 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Maximize2,
              title: 'Space Saving Efficiency',
              desc: 'Maximalist comfort engineered for compact studio apartments or guest suites.',
            },
            {
              icon: Zap,
              title: '5-Second Transformation',
              desc: 'Smooth roller mechanism designed for one-handed effortless conversion.',
            },
            {
              icon: Moon,
              title: 'Everyday Bed Comfort',
              desc: 'High-density orthopedic foam mattress options with zero middle sagging.',
            },
            {
              icon: ShieldAlert,
              title: 'Custom Fabric & Dimensions',
              desc: 'Tailored length, armrest style, and liquid-barrier upholstery choices.',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-cream-50 p-6 rounded-3xl border border-sand/60 shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-terracotta-500/10 text-terracotta-600 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-normal text-brown-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-brown-700/80 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link to="/sofa-cum-beds">
            <Button variant="primary" size="lg" showArrow>
              Customize Your Sofa-Cum-Bed
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
