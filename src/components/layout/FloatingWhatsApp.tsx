import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../lib/whatsapp';
import { trackWhatsAppClick } from '../../lib/activityLogger';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick('Floating WhatsApp Button', 'User clicked sticky bottom-right WhatsApp button')}
      className="fixed bottom-20 right-5 lg:bottom-8 lg:right-8 z-40 flex items-center gap-3 p-3.5 md:p-4 rounded-full bg-[#25D366] text-white shadow-elevated hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-105 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
      title="Chat with Gaddi & Co."
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white animate-ping opacity-75" />
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white" />
      </div>
      <span className="hidden md:inline font-sans text-xs font-semibold tracking-wide pr-1">
        Chat with Expert
      </span>
    </motion.a>
  );
};
