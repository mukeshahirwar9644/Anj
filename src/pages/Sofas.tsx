import React from 'react';
import { SofaGrid } from '../components/furniture/SofaGrid';
import { SOFAS_DATA } from '../data/sofas';

export const Sofas: React.FC = () => {
  return (
    <div className="pt-28 md:pt-36 pb-24 bg-cream-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PAGE HEADER */}
        <div className="max-w-3xl mb-12">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] text-terracotta-600 uppercase mb-3">
            BESPOKE CATALOGUE
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-brown-900">
            Our Sofa <span className="italic text-terracotta-500 font-serif">Collections.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brown-700/80 font-light leading-relaxed">
            Discover our masterfully designed sofa styles. Every model is built to order in your exact dimensions, fabric preference, and foam density.
          </p>
        </div>

        {/* SOFA CATALOGUE GRID & CATEGORY FILTER */}
        <SofaGrid sofas={SOFAS_DATA} showFilters={true} />

      </div>
    </div>
  );
};
