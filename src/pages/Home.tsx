import React from 'react';
import { Hero } from '../components/sections/Hero';
import { TrustStrip } from '../components/sections/TrustStrip';
import { MadeAroundYouIntro } from '../components/sections/MadeAroundYouIntro';
import { FeaturedSofas } from '../components/sections/FeaturedSofas';
import { EditorialShowcase } from '../components/sections/EditorialShowcase';
import { SofaCumBedFeature } from '../components/sections/SofaCumBedFeature';
import { ComfortCushionsSec } from '../components/sections/ComfortCushionsSec';
import { CustomizationProcess } from '../components/sections/CustomizationProcess';
import { GalleryPreview } from '../components/sections/GalleryPreview';
import { Testimonials } from '../components/sections/Testimonials';
import { ContactCTA } from '../components/sections/ContactCTA';

export const Home: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. Made Around You Intro */}
      <MadeAroundYouIntro />

      {/* 4. Featured Sofas */}
      <FeaturedSofas />

      {/* 5. Editorial Showcase */}
      <EditorialShowcase />

      {/* 6. Sofa-Cum-Bed Feature */}
      <SofaCumBedFeature />

      {/* 7. Comfort / Cushions Section */}
      <ComfortCushionsSec />

      {/* 8. Customization Process */}
      <CustomizationProcess />

      {/* 9. Gallery Preview */}
      <GalleryPreview />

      {/* 10. Testimonials */}
      <Testimonials />

      {/* 11. Contact CTA */}
      <ContactCTA />
    </div>
  );
};
