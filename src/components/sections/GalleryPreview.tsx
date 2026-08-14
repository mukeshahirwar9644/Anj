import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { GALLERY_ITEMS } from '../../data/gallery';
import { LightboxModal } from '../ui/LightboxModal';
import { Button } from '../ui/Button';
import { Eye } from 'lucide-react';

export const GalleryPreview: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const previewItems = GALLERY_ITEMS.slice(0, 6);

  const openLightbox = (idx: number) => {
    setActivePhotoIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <section className="py-20 md:py-32 bg-cream-50 overflow-hidden border-t border-sand/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="REAL HOMES & PROJECT LOOKBOOK"
            title="Crafted Spaces & Inspiring Interiors."
            subtitle="Take a peek into real homes, penthouses, and villa living rooms transformed by Gaddi & Co."
            className="mb-0"
          />

          <Link to="/gallery" className="mt-6 md:mt-0 shrink-0">
            <Button variant="outline" size="md" showArrow>
              View Full Gallery
            </Button>
          </Link>
        </div>

        {/* Masonry-Style Responsive Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {previewItems.map((item, idx) => (
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
              
              {/* Hover Dark Vignette & View Button */}
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

        {/* Lightbox Component */}
        <LightboxModal
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          items={previewItems}
          currentIndex={activePhotoIndex}
          onNavigate={setActivePhotoIndex}
        />
      </div>
    </section>
  );
};
