import React, { useState } from 'react';
import type { SofaProduct } from '../../data/sofas';
import { SofaCard } from './SofaCard';
import { SofaFilters } from './SofaFilters';

interface SofaGridProps {
  sofas: SofaProduct[];
  showFilters?: boolean;
}

export const SofaGrid: React.FC<SofaGridProps> = ({
  sofas,
  showFilters = true,
}) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSofas = activeCategory === 'all'
    ? sofas
    : sofas.filter((sofa) => sofa.category === activeCategory);

  return (
    <div className="w-full">
      {showFilters && (
        <div className="mb-10">
          <SofaFilters
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      )}

      {filteredSofas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSofas.map((sofa) => (
            <SofaCard key={sofa.id} sofa={sofa} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-cream-200/50 rounded-3xl border border-sand">
          <p className="font-serif text-2xl text-brown-800 font-normal">
            No designs found in this category.
          </p>
          <p className="mt-2 text-sm text-brown-600">
            We specialize in bespoke custom designs for any style. Contact our studio!
          </p>
        </div>
      )}
    </div>
  );
};
