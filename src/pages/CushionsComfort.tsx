import React from 'react';
import { Link } from 'react-router-dom';
import { ImageReveal } from '../components/ui/ImageReveal';
import { FABRICS_DATA } from '../data/fabrics';
import { Button } from '../components/ui/Button';
import { Sparkles } from 'lucide-react';

export const CushionsComfort: React.FC = () => {
  return (
    <div className="pt-28 md:pt-36 pb-24 bg-cream-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] text-terracotta-600 uppercase mb-3">
            TACTILE ACCENTS &amp; SEATING
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-brown-900">
            Comfort Is In <span className="italic text-terracotta-500">The Details.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brown-700/80 font-light leading-relaxed">
            Plush down-feather throw cushions, cylindrical bolster pillows, and ergonomic lumbar inserts crafted from Indian heritage textiles.
          </p>
        </div>

        {/* CUSHION TYPES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: 'Plush Throw Cushions',
              image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=800',
              desc: 'Feather-down and microfiber inserts wrapped in velvet and linen slipcovers with hidden zippers.',
            },
            {
              title: 'Lumbar & Ergonomic Bolsters',
              image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=800',
              desc: 'Cylindrical bolster pillows providing targeted low-back support for deep lounge sofas.',
            },
            {
              title: 'Soft Floor Poufs & Footstools',
              image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
              desc: 'Versatile auxiliary seating Poufs upholstered in high-rub tactile bouclé fabric.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-cream-50 rounded-3xl overflow-hidden border border-sand/70 shadow-soft group hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <ImageReveal src={item.image} alt={item.title} aspectRatio="square" />
                <div className="p-6">
                  <h3 className="font-serif text-xl font-normal text-brown-900 mb-2 group-hover:text-terracotta-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brown-700/80 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <Link to="/customize">
                  <Button variant="outline" size="sm" className="w-full justify-between">
                    <span>Inquire Fabric Swatches</span>
                    <Sparkles className="w-4 h-4 text-terracotta-500" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* FABRIC TEXTURE CATALOGUE */}
        <div className="bg-brown-950 text-cream-100 p-8 sm:p-12 rounded-4xl mb-20 shadow-elevated">
          <span className="text-xs font-semibold text-terracotta-400 uppercase tracking-widest block mb-2">
            PREMIUM UPHOLSTERY SELECTION
          </span>
          <h2 className="font-serif text-3xl font-normal text-cream-50 mb-6">
            Hand-Curated Indian Textiles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FABRICS_DATA.map((fabric) => (
              <div key={fabric.id} className="bg-brown-900 p-5 rounded-2xl border border-cream-100/10">
                <div className="aspect-video rounded-xl overflow-hidden mb-4 border border-sand/20">
                  <img src={fabric.image} alt={fabric.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-serif text-lg text-cream-100 font-normal">{fabric.name}</h3>
                <p className="text-xs text-sand/80 font-light mt-1">{fabric.description}</p>
                <div className="mt-4 flex flex-wrap gap-1">
                  {fabric.features.map((f, i) => (
                    <span key={i} className="text-[10px] bg-terracotta-500/20 text-terracotta-300 px-2 py-0.5 rounded-md">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
