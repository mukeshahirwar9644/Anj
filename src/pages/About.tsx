import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ImageReveal } from '../components/ui/ImageReveal';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-28 md:pt-36 pb-20 bg-cream-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO BANNER */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] text-terracotta-600 uppercase mb-4">
            ABOUT GADDI &amp; CO.
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-brown-900">
            Furniture Made <span className="italic text-terracotta-500 font-serif">Around You.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-brown-700/80 font-light leading-relaxed">
            Every home is different. Every room has its own character. Every person has a different definition of comfort. Gaddi &amp; Co. creates furniture around those differences.
          </p>
        </div>

        {/* QUALITATIVE STATS STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { value: '100% Bespoke', label: 'Millimeter Sizing' },
            { value: '300+', label: 'Premium Fabric Options' },
            { value: 'Handcrafted', label: 'Master Indian Artisans' },
            { value: 'Lifetime', label: 'Hardwood Frame Warranty' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-cream-50 p-6 rounded-3xl border border-sand/70 shadow-soft text-center"
            >
              <h3 className="font-serif text-2xl md:text-3xl font-normal text-terracotta-600 mb-1">
                {stat.value}
              </h3>
              <p className="text-xs text-brown-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* SECTION 1: OUR STORY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6">
            <ImageReveal
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200"
              alt="Gaddi & Co. Story"
              organicMask
              className="shadow-elevated border border-sand"
            />
          </div>
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="OUR STORY"
              title="Born From A Need For True Customization."
            />
            <div className="space-y-4 text-brown-800 font-light text-base leading-relaxed">
              <p>
                Standard mass-produced furniture forces homeowners to compromise—buying sofas that are either too long for their living room, too soft for their posture, or upholstered in low-quality synthetic fabric that wears out in two years.
              </p>
              <p>
                Gaddi &amp; Co. was established to revolutionize furniture buying in India. We combine traditional wood joinery techniques with modern ergonomic engineering, allowing every customer to co-create their furniture piece from scratch.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: OUR CRAFT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 lg:order-2">
            <ImageReveal
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200"
              alt="Gaddi & Co. Craftsmanship"
              organicMask
              className="shadow-elevated border border-sand"
            />
          </div>
          <div className="lg:col-span-6 lg:order-1">
            <SectionHeading
              eyebrow="OUR CRAFT"
              title="Kiln-Dried Hardwood &amp; Precision Stitching."
            />
            <div className="space-y-4 text-brown-800 font-light text-base leading-relaxed">
              <p>
                Inside every Gaddi &amp; Co. sofa is a frame built from kiln-dried hardwood (Teak and Sal wood) engineered to resist warping or squeaking for decades.
              </p>
              <p>
                Our master upholsterers hand-stitch seams, apply high-resilience 40-density foam layering, and inspect every cushion corner before it leaves our craft studio.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: OUR PHILOSOPHY & WHY GADDI & CO */}
        <div className="bg-brown-950 text-cream-100 p-8 sm:p-12 md:p-16 rounded-4xl shadow-elevated mb-20">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest text-terracotta-400 uppercase mb-3 inline-block">
              WHY GADDI &amp; CO.
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-cream-50 mb-6">
              Built Around Your Life, Space, and Style.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {[
                { title: 'No Generic Templates', desc: 'Every sofa is crafted specifically after measuring your room.' },
                { title: 'Stain-Shield Fabrics', desc: 'Liquid-repellent velvet and linen suitable for active families.' },
                { title: 'Ergonomic Posture Options', desc: 'Choose soft cloud down or orthopedic firm back support.' },
                { title: 'Direct Workshop Pricing', desc: 'Transparent pricing with no retail middleman markups.' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-brown-900/60 p-4 rounded-2xl border border-cream-100/10">
                  <CheckCircle className="w-5 h-5 text-terracotta-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif text-base text-cream-100 font-normal">{item.title}</h3>
                    <p className="text-xs text-cream-200/70 font-light mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12">
          <h3 className="font-serif text-3xl text-brown-900 mb-4">
            Ready to craft a sofa around your home?
          </h3>
          <Link to="/customize">
            <Button variant="primary" size="lg" showArrow>
              Start Customization Form
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};
