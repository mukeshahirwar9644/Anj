import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Palette, Ruler, Sliders, MessageSquareCheck, Sparkles, Layers } from 'lucide-react';

export const STEPS = [
  {
    num: '01',
    title: 'Choose Your Style',
    desc: 'Modern, L-Shape Sectional, Sofa-Cum-Bed, Minimalist or Luxury Curved.',
    icon: Sparkles,
  },
  {
    num: '02',
    title: 'Choose Your Fabric',
    desc: 'Royal Velvet, Belgian Linen, Textured Bouclé, micro-weave or genuine leatherette.',
    icon: Layers,
  },
  {
    num: '03',
    title: 'Choose Your Colour',
    desc: 'Terracotta, Cream Alabaster, Deep Mocha, Olive Sage, Charcoal Slate.',
    icon: Palette,
  },
  {
    num: '04',
    title: 'Choose Dimensions',
    desc: 'Custom length (ft), depth, back height, and specific room layout requirements.',
    icon: Ruler,
  },
  {
    num: '05',
    title: 'Add Comfort Preference',
    desc: 'Plush Soft down-feather, Ergonomic Medium, or Firm Posture support foam.',
    icon: Sliders,
  },
  {
    num: '06',
    title: 'Request Your Quote',
    desc: 'Receive immediate estimate + sample swatches delivered directly to your doorstep.',
    icon: MessageSquareCheck,
  },
];

export const CustomizationProcess: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="BESPOKE EXPERIENCE"
          title="Your Sofa. Your Space. Your Way."
          subtitle="Building your dream furniture in 6 seamless guided steps."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="group relative bg-cream-50 p-8 rounded-3xl border border-sand/70 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-normal text-terracotta-500 font-bold">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-terracotta-50 text-terracotta-600 flex items-center justify-center group-hover:bg-terracotta-500 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-normal text-brown-900 mb-3 group-hover:text-terracotta-600 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-brown-700/80 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-sand/40 flex items-center justify-between text-[11px] font-semibold text-terracotta-600">
                  <span>Step {step.num} of 06</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                    Configure →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link to="/customize">
            <Button variant="primary" size="lg" showArrow>
              Launch Interactive Customizer Tool
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
