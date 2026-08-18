import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { getWhatsAppUrl, PHONE_NUMBER } from '../../lib/whatsapp';
import { trackWhatsAppClick, trackCallClick } from '../../lib/activityLogger';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-brown-950/95 backdrop-blur-xl border-t border-cream-100/10 px-3 py-2.5 shadow-[0_-10px_25px_rgba(0,0,0,0.3)]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* WhatsApp Button */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('Mobile Bottom Sticky Bar - WhatsApp')}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-[#25D366] text-white active:scale-95 transition-transform"
        >
          <MessageCircle className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Phone Call Button */}
        <a
          href={`tel:${PHONE_NUMBER}`}
          onClick={() => trackCallClick('Mobile Bottom Sticky Bar - Call')}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-brown-900 text-cream-100 border border-sand/20 active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5 mb-0.5 text-sand" />
          <span className="text-[10px] font-bold tracking-tight">Call Us</span>
        </a>

        {/* Get Quote Button */}
        <Link
          to="/customize"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-terracotta-500 text-white shadow-soft active:scale-95 transition-transform"
        >
          <Sparkles className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">Get Quote</span>
        </Link>
      </div>
    </div>
  );
};
