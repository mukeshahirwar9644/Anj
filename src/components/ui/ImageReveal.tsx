import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape' | 'custom';
  organicMask?: boolean;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'landscape',
  organicMask = false,
}) => {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    custom: '',
  }[aspectRatio];

  return (
    <div
      className={cn(
        'relative overflow-hidden group bg-sand/30',
        aspectClasses,
        organicMask ? 'organic-mask' : 'rounded-2xl',
        className
      )}
    >
      <motion.img
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {/* Subtle Warm Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brown-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};
