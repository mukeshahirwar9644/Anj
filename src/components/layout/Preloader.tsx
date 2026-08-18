import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brown-950 text-cream-100"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4 text-center px-4"
          >
            {/* Logo Emblem */}
            <div className="w-20 h-20 rounded-full overflow-hidden shadow-glow">
              <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                <circle cx="100" cy="100" r="95" fill="#F4EAE0" stroke="#D35F36" strokeWidth="3"/>
                <circle cx="100" cy="15" r="3.5" fill="#D35F36"/>
                <circle cx="100" cy="185" r="3.5" fill="#D35F36"/>
                <circle cx="15" cy="100" r="3.5" fill="#D35F36"/>
                <circle cx="185" cy="100" r="3.5" fill="#D35F36"/>
                <circle cx="142" cy="26" r="3.5" fill="#D35F36"/>
                <circle cx="174" cy="58" r="3.5" fill="#D35F36"/>
                <circle cx="174" cy="142" r="3.5" fill="#D35F36"/>
                <circle cx="142" cy="174" r="3.5" fill="#D35F36"/>
                <circle cx="58" cy="174" r="3.5" fill="#D35F36"/>
                <circle cx="26" cy="142" r="3.5" fill="#D35F36"/>
                <circle cx="26" cy="58" r="3.5" fill="#D35F36"/>
                <circle cx="58" cy="26" r="3.5" fill="#D35F36"/>

                <rect x="52" y="125" width="10" height="15" rx="3" fill="#582415"/>
                <rect x="138" y="125" width="10" height="15" rx="3" fill="#582415"/>
                <rect x="48" y="65" width="104" height="65" rx="20" fill="#D35F36"/>
                <rect x="36" y="80" width="22" height="50" rx="10" fill="#B74B26"/>
                <rect x="142" y="80" width="22" height="50" rx="10" fill="#B74B26"/>
                <rect x="50" y="82" width="100" height="48" rx="12" fill="#D35F36"/>
                <line x1="100" y1="83" x2="100" y2="130" stroke="#FAF4EE" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-cream-50">
              Gaddi &amp; Co.
            </h1>
            <p className="text-sm font-serif italic text-cream-200/80">
              Custom sofas, made to fit
            </p>

            {/* Subtle Progress Bar */}
            <div className="w-36 h-0.5 bg-brown-900 overflow-hidden rounded-full mt-2">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="w-full h-full bg-terracotta-500"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
