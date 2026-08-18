import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../../data/gallery';
import { getProductWhatsAppUrl } from '../../lib/whatsapp';
import { trackWhatsAppClick } from '../../lib/activityLogger';
import { Button } from './Button';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate,
}) => {
  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-brown-950/95 backdrop-blur-xl"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 rounded-full bg-cream-100/10 text-cream-100 hover:bg-terracotta-500 hover:text-white transition-colors duration-300"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation Buttons */}
        {items.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((currentIndex - 1 + items.length) % items.length);
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3.5 rounded-full bg-cream-100/10 text-cream-100 hover:bg-terracotta-500 hover:text-white transition-all duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((currentIndex + 1) % items.length);
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3.5 rounded-full bg-cream-100/10 text-cream-100 hover:bg-terracotta-500 hover:text-white transition-all duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Main Content Container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row bg-brown-900 rounded-3xl overflow-hidden shadow-elevated border border-cream-100/10"
        >
          {/* Image Viewport */}
          <div className="relative flex-1 bg-black/40 flex items-center justify-center p-4 min-h-[300px] md:min-h-[500px]">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
            />
          </div>

          {/* Details Sidebar */}
          <div className="w-full md:w-80 p-6 md:p-8 bg-brown-950 flex flex-col justify-between border-t md:border-t-0 md:border-l border-cream-100/10">
            <div>
              <span className="inline-block text-[10px] font-semibold tracking-widest text-terracotta-400 uppercase bg-terracotta-500/10 px-3 py-1 rounded-full mb-3">
                {currentItem.category}
              </span>
              <h3 className="font-serif text-2xl text-cream-100 font-normal leading-snug">
                {currentItem.title}
              </h3>
              {currentItem.location && (
                <p className="mt-2 text-xs text-sand/70 font-medium">
                  📍 {currentItem.location}
                </p>
              )}
              <p className="mt-4 text-sm text-cream-200/80 font-light leading-relaxed">
                {currentItem.description}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-cream-100/10 flex flex-col gap-3">
              <a
                href={getProductWhatsAppUrl(currentItem.title)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick(`Gallery Lightbox: ${currentItem.title}`, `Inquiry from gallery modal for "${currentItem.title}"`)}
                className="w-full"
              >
                <Button variant="whatsapp" className="w-full">
                  Inquire This Design
                </Button>
              </a>
              <p className="text-center text-[11px] text-cream-200/50">
                Item {currentIndex + 1} of {items.length}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
