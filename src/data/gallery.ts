export interface GalleryItem {
  id: string;
  title: string;
  category: 'Living Room' | 'Modern Sofas' | 'Sectional Sofas' | 'Sofa-Cum-Beds' | 'Lounge Sofas' | 'Cushions' | 'Custom Designs' | 'Comfort Furniture';
  image: string;
  location?: string;
  description: string;
  aspectRatio?: 'tall' | 'wide' | 'square';
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Bespoke Terracotta Modular Sectional',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200',
    location: 'Penthouse Apartment, South Mumbai',
    description: 'Custom 12-foot modular sectional designed for double-height living spaces in rich velvet upholstery.',
    aspectRatio: 'wide'
  },
  {
    id: 'gal-2',
    title: 'Curved Lounge & Accent Bolsters',
    category: 'Modern Sofas',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000',
    location: 'Villa Residence, Bengaluru',
    description: 'Sculptural organic curved sofa with custom high-density foam seating tailored for modern Indian luxury homes.',
    aspectRatio: 'tall'
  },
  {
    id: 'gal-3',
    title: 'Convertible Solace Sofa-Cum-Bed',
    category: 'Sofa-Cum-Beds',
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=1200',
    location: 'Urban Studio, Gurgaon',
    description: 'Space-saving dual utility design with concealed linen storage and orthopedic queen mattress mechanism.',
    aspectRatio: 'square'
  },
  {
    id: 'gal-4',
    title: 'Minimalist Sandstone 3-Seater',
    category: 'Modern Sofas',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000',
    location: 'Private Residence, New Delhi',
    description: 'Clean Scandinavian silhouette with solid teakwood frame finish and Belgian linen covers.',
    aspectRatio: 'tall'
  },
  {
    id: 'gal-5',
    title: 'Custom Velvet & Linen Throw Cushion Ensemble',
    category: 'Cushions',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=1000',
    location: 'Interior Styling Project',
    description: 'Handcrafted down-feather stuffed cushions with concealed copper zippers and piping detail.',
    aspectRatio: 'square'
  },
  {
    id: 'gal-6',
    title: 'Sprawling Family Sectional',
    category: 'Sectional Sofas',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200',
    location: 'Farmhouse Lounge, Hyderabad',
    description: 'Heavy duty stain-shield fabric sectional built for large family gatherings and weekend entertainment.',
    aspectRatio: 'wide'
  },
  {
    id: 'gal-7',
    title: 'Organic Earth Tone Comfort Lounge',
    category: 'Comfort Furniture',
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=1000',
    location: 'Architectural Digest Feature Home',
    description: 'Custom deep-seat lounge sofa with matching floor poufs and lumbar bolster pillows.',
    aspectRatio: 'tall'
  },
  {
    id: 'gal-8',
    title: 'Handcrafted Hardwood Frame & Tailored Upholstery',
    category: 'Custom Designs',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200',
    location: 'Gaddi & Co. Master Workshop',
    description: 'Precision joinery and high-density foam layering in our custom craftsman studio.',
    aspectRatio: 'wide'
  }
];
