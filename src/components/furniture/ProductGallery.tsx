import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  productName,
}) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Stage */}
      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-sand/30 shadow-elevated border border-sand/60">
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            src={images[selectedImage]}
            alt={`${productName} view ${selectedImage + 1}`}
            className="w-full h-full object-cover object-center"
          />
        </AnimatePresence>
      </div>

      {/* Thumbnail Selector */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`relative aspect-square w-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                selectedImage === idx
                  ? 'border-terracotta-500 scale-105 shadow-soft'
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
