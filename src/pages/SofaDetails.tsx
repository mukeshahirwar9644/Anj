import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SOFAS_DATA } from '../data/sofas';
import { ProductGallery } from '../components/furniture/ProductGallery';
import { Button } from '../components/ui/Button';
import { getProductWhatsAppUrl } from '../lib/whatsapp';
import { trackWhatsAppClick } from '../lib/activityLogger';
import { ArrowLeft, CheckCircle2, MessageCircle, Ruler } from 'lucide-react';

export const SofaDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const sofa = SOFAS_DATA.find((s) => s.id === id);

  if (!sofa) {
    return (
      <div className="pt-36 pb-24 min-h-screen text-center flex flex-col items-center justify-center">
        <h1 className="font-serif text-3xl text-brown-900 mb-4">Sofa Design Not Found</h1>
        <Button variant="primary" onClick={() => navigate('/sofas')}>
          Back to Catalogue
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-28 md:pt-36 pb-24 bg-cream-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BACK LINK */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs font-semibold text-brown-700 hover:text-terracotta-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Collections
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: PRODUCT GALLERY */}
          <div className="lg:col-span-7">
            <ProductGallery images={sofa.gallery} productName={sofa.name} />
          </div>

          {/* RIGHT: DETAILS & CTAS */}
          <div className="lg:col-span-5 flex flex-col gap-6 bg-cream-50 p-8 rounded-4xl border border-sand/70 shadow-elevated">
            <div>
              <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-terracotta-600 bg-terracotta-50 px-3 py-1 rounded-full mb-3">
                {sofa.category.replace('-', ' ')}
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl font-normal text-brown-900">
                {sofa.name}
              </h1>

              <p className="mt-2 text-sm text-brown-700 font-light italic">
                {sofa.tagline}
              </p>

              <div className="mt-4 flex items-center justify-between border-y border-sand/50 py-3">
                <span className="text-xs text-brown-600">Pricing</span>
                <span className="font-serif text-lg font-semibold text-terracotta-600">
                  {sofa.priceLabel}
                </span>
              </div>
            </div>

            <p className="text-xs text-brown-800 font-light leading-relaxed">
              {sofa.description}
            </p>

            {/* DIMENSIONS */}
            <div className="bg-cream-100 p-4 rounded-2xl border border-sand">
              <h3 className="text-xs font-bold text-brown-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Ruler className="w-4 h-4 text-terracotta-500" /> Dimensions Specs
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs text-brown-700">
                <div>Length: <span className="font-medium text-brown-900">{sofa.dimensions.length}</span></div>
                <div>Depth: <span className="font-medium text-brown-900">{sofa.dimensions.depth}</span></div>
                <div>Height: <span className="font-medium text-brown-900">{sofa.dimensions.height}</span></div>
                <div>Seat Height: <span className="font-medium text-brown-900">{sofa.dimensions.seatHeight}</span></div>
              </div>
            </div>

            {/* CUSTOMIZATIONS AVAILABLE */}
            <div>
              <h3 className="text-xs font-bold text-brown-900 uppercase tracking-wider mb-2">
                Available Customizations
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {sofa.customizationOptions.map((opt, i) => (
                  <span key={i} className="text-[11px] bg-sand/40 text-brown-800 px-2.5 py-1 rounded-md flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-terracotta-500" /> {opt}
                  </span>
                ))}
              </div>
            </div>

            {/* FABRIC SELECTION */}
            <div>
              <h3 className="text-xs font-bold text-brown-900 uppercase tracking-wider mb-2">
                Recommended Fabrics
              </h3>
              <div className="flex flex-wrap gap-2">
                {sofa.fabrics.map((f, i) => (
                  <span key={i} className="text-xs font-medium text-brown-900 bg-cream-100 border border-sand px-3 py-1 rounded-full">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="pt-4 border-t border-sand/60 flex flex-col gap-3">
              <Link to="/customize" className="w-full">
                <Button variant="primary" size="lg" className="w-full" showArrow>
                  Customize This Sofa
                </Button>
              </Link>

              <a
                href={getProductWhatsAppUrl(sofa.name)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick(`Product Details Page: ${sofa.name}`, `Inquiry for sofa "${sofa.name}" (${sofa.priceLabel})`)}
                className="w-full"
              >
                <Button variant="whatsapp" size="lg" className="w-full">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Ask on WhatsApp Direct
                </Button>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
