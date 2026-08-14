import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/gallery';
import { LightboxModal } from '../components/ui/LightboxModal';
import { Eye } from 'lucide-react';

const GALLERY_CATEGORIES = [
  'All',
  'Living Room',
  'Modern Sofas',
  'Sectional Sofas',
  'Sofa-Cum-Beds',
  'Lounge Sofas',
  'Cushions',
  'Custom Designs',
  'Comfort Furniture',
];

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (idx: number) => {
    setCurrentIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-28 md:pt-36 pb-24 bg-cream-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-12">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] text-terracotta-600 uppercase mb-3">
            PORTFOLIO &amp; LOOKBOOK
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-brown-900">
            Inspiring Designs, <span className="italic text-terracotta-500">Real Homes.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brown-700/80 font-light leading-relaxed">
            Browse our curated gallery of bespoke living rooms, luxury penthouses, and custom sofa projects.
          </p>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-10 no-scrollbar">
          {GALLERY_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-terracotta-500 text-white shadow-soft font-semibold'
                    : 'bg-cream-200/80 text-brown-800 hover:bg-sand/60 hover:text-terracotta-600'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* MASONRY GRID */}
        {filteredItems.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="relative group rounded-3xl overflow-hidden cursor-pointer shadow-soft hover:shadow-elevated border border-sand/60 transition-all duration-500 break-inside-avoid"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brown-950/90 via-brown-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <span className="text-[10px] font-semibold text-terracotta-400 uppercase tracking-widest bg-terracotta-500/20 px-3 py-1 rounded-full w-max mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl font-normal text-cream-50">
                    {item.title}
                  </h3>
                  {item.location && (
                    <p className="text-xs text-sand/70 mt-1">📍 {item.location}</p>
                  )}

                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-terracotta-300">
                    <Eye className="w-4 h-4" /> View Design
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-cream-50 rounded-3xl border border-sand">
            <p className="font-serif text-xl text-brown-800">
              No designs found in this category.
            </p>
          </div>
        )}

        {/* LIGHTBOX MODAL */}
        <LightboxModal
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          items={filteredItems}
          currentIndex={currentIndex}
          onNavigate={setCurrentIndex}
        />
      </div>
    </div>
  );
};
