import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { ImageReveal } from '../ui/ImageReveal';
import { FABRICS_DATA } from '../../data/fabrics';
import { Button } from '../ui/Button';

export const ComfortCushionsSec: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-cream-50 overflow-hidden border-t border-sand/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* LEFT TEXT */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="TEXTILE & ACCENT CRAFT"
              title="Comfort Is In The Details."
              subtitle="From feather-down inserts to custom piping edge stitches, discover how our accent cushions elevate your seating experience."
              className="mb-6"
            />

            <div className="space-y-4 text-brown-800 text-sm font-light leading-relaxed mb-8">
              <p>
                We source premium cottons, rich velvets, and textured linens from heritage textile weavers across India. Every cushion is filled with hypoallergenic fiber inserts or posture-supporting memory foam.
              </p>
            </div>

            <Link to="/cushions-comfort">
              <Button variant="primary" size="md" showArrow>
                Explore Cushions &amp; Throw Accessories
              </Button>
            </Link>
          </div>

          {/* RIGHT TACTILE IMAGE GRID */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
            <ImageReveal
              src="https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=800"
              alt="Soft Velvet Cushions"
              aspectRatio="square"
              organicMask
            />
            <ImageReveal
              src="https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=800"
              alt="Plush Bolster Pillows"
              aspectRatio="square"
              className="mt-8"
            />
          </div>
        </div>

        {/* FABRIC SWATCH HORIZONTAL PREVIEW */}
        <div className="bg-cream-100 p-8 rounded-3xl border border-sand shadow-soft">
          <p className="text-xs font-semibold text-terracotta-600 uppercase tracking-widest mb-4">
            Curated Fabric Swatches
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {FABRICS_DATA.map((fabric) => (
              <div key={fabric.id} className="group cursor-pointer">
                <div className="aspect-video rounded-xl overflow-hidden mb-2 border border-sand/80 shadow-sm">
                  <img
                    src={fabric.image}
                    alt={fabric.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-xs font-bold text-brown-900">{fabric.colorName}</p>
                <p className="text-[10px] text-brown-600 font-light">{fabric.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
