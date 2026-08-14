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
            {/* Logo Icon */}
            <div className="w-16 h-16 rounded-2xl bg-terracotta-500 text-cream-100 flex items-center justify-center shadow-glow">
              <svg viewBox="0 0 100 100" fill="none" className="w-10 h-10">
                <path
                  d="M 20 62 C 20 40, 32 30, 50 30 C 68 30, 80 40, 80 62 C 80 65, 78 68, 74 68 L 26 68 C 22 68, 20 65, 20 62 Z"
                  fill="currentColor"
                />
                <path d="M 28 54 C 38 58, 62 58, 72 54" stroke="#FAF6F0" strokeWidth="3" strokeLinecap="round"/>
                <rect x="22" y="70" width="56" height="5" rx="2.5" fill="#EADCC9"/>
                <rect x="25" y="75" width="4" height="6" fill="#C85A32"/>
                <rect x="71" y="75" width="4" height="6" fill="#C85A32"/>
              </svg>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl font-normal tracking-tight">
              Gaddi <span className="text-terracotta-500 font-sans font-light">&amp;</span> Co.
            </h1>
            <p className="text-[10px] tracking-[0.3em] uppercase text-sand/80 font-medium">
              Custom Sofas &amp; Comfort Furniture
            </p>

            {/* Subtle Progress Bar */}
            <div className="w-36 h-0.5 bg-brown-900 overflow-hidden rounded-full mt-4">
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
