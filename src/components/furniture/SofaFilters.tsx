import React from 'react';

interface SofaFiltersProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CATEGORIES = [
  { id: 'all', label: 'All Sofas' },
  { id: 'modern', label: 'Modern Sofas' },
  { id: 'l-shape', label: 'L-Shape Sofas' },
  { id: 'sectional', label: 'Sectional Sofas' },
  { id: 'sofa-cum-bed', label: 'Sofa-Cum-Beds' },
  { id: 'lounge', label: 'Lounge Sofas' },
  { id: 'minimal', label: 'Minimal Sofas' },
  { id: 'luxury', label: 'Luxury Sofas' },
];

export const SofaFilters: React.FC<SofaFiltersProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
      {CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-300 ${
              isActive
                ? 'bg-terracotta-500 text-white shadow-soft font-semibold'
                : 'bg-cream-200/80 text-brown-800 hover:bg-sand/60 hover:text-terracotta-600'
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
};
