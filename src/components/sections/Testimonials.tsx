import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { TESTIMONIALS_DATA } from '../../data/testimonials';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CLIENT & ARCHITECT TRUST"
          title="Loved By Homeowners & Designers."
          subtitle="Discover what interior architects and homeowners say about their bespoke Gaddi & Co. experience."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-cream-50 p-8 rounded-3xl border border-sand/70 shadow-soft flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-terracotta-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-terracotta-300/40 mb-3" />

                <p className="text-sm text-brown-800 font-light leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-sand/40 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.clientName}
                  className="w-12 h-12 rounded-full object-cover border-2 border-terracotta-500/30"
                />
                <div>
                  <h4 className="font-serif text-base font-normal text-brown-900">
                    {item.clientName}
                  </h4>
                  <p className="text-xs text-brown-600 font-medium">
                    {item.role} • {item.city}
                  </p>
                  <span className="text-[10px] text-terracotta-600 font-semibold bg-terracotta-50 px-2 py-0.5 rounded-full inline-block mt-1">
                    {item.sofaModel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
