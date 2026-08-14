import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { SofaGrid } from '../furniture/SofaGrid';
import { SOFAS_DATA } from '../../data/sofas';
import { Button } from '../ui/Button';

export const FeaturedSofas: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-cream-50 overflow-hidden border-t border-sand/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="FLAGSHIP DESIGNS"
            title="Sofas Designed To Be Loved."
            subtitle="Explore our most popular bespoke sofa collections, fully customizable in dimensions, fabric, and cushion density."
            className="mb-0"
          />

          <Link to="/sofas" className="mt-6 md:mt-0 shrink-0">
            <Button variant="outline" size="md" showArrow>
              View Entire Catalogue
            </Button>
          </Link>
        </div>

        <SofaGrid sofas={SOFAS_DATA} showFilters={true} />
      </div>
    </section>
  );
};
