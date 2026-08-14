export interface SofaProduct {
  id: string;
  name: string;
  tagline: string;
  category: 'modern' | 'l-shape' | 'sectional' | 'lounge' | 'minimal' | 'luxury' | 'sofa-cum-bed';
  priceLabel: string;
  description: string;
  image: string;
  gallery: string[];
  styles: string[];
  customizationOptions: string[];
  dimensions: {
    length: string;
    depth: string;
    height: string;
    seatHeight: string;
  };
  comfortOptions: ('Plush Soft' | 'Balanced Medium' | 'Firm Ortho Support')[];
  fabrics: string[];
  featured?: boolean;
  bestseller?: boolean;
}

export const SOFAS_DATA: SofaProduct[] = [
  {
    id: 'sereno-l-shape',
    name: 'Sereno Modular L-Shape',
    tagline: 'Architectural silhouette with deep sink-in comfort',
    category: 'l-shape',
    priceLabel: 'Request Price',
    description: 'The Sereno L-Shape sofa combines crisp low-profile lines with plush down-blend seating. Designed for expansive living areas, its modular components let you reconfigure your space seamlessly.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200'
    ],
    styles: ['Contemporary', 'L-Shape', 'Modular'],
    customizationOptions: ['Left/Right Chaise', 'Custom Lengths up to 14ft', 'Stain-Guard Fabric'],
    dimensions: {
      length: '9.5 ft (Customizable)',
      depth: '5.8 ft (Chaise side)',
      height: '32 in',
      seatHeight: '17 in'
    },
    comfortOptions: ['Plush Soft', 'Balanced Medium'],
    fabrics: ['Textured Bouclé', 'Royal Velvet', 'Belgian Linen'],
    featured: true,
    bestseller: true
  },
  {
    id: 'solace-sofa-cum-bed',
    name: 'Solace Dual-Sofa-Cum-Bed',
    tagline: 'Effortless daytime sofa to nighttime luxury queen bed',
    category: 'sofa-cum-bed',
    priceLabel: 'Request Price',
    description: 'Engineering excellence meets luxury upholstery. Solace transforms from a sleek 3-seater living room sofa into a posture-supporting queen mattress in under 5 seconds with zero effort.',
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200'
    ],
    styles: ['Space Saving', 'Modern Classic', 'Convertible'],
    customizationOptions: ['Storage Chaise', 'Memory Foam Mattress Insert', 'Removable Washable Covers'],
    dimensions: {
      length: '7.2 ft',
      depth: '3.3 ft (Sofa) / 6.2 ft (Bed open)',
      height: '34 in',
      seatHeight: '18 in'
    },
    comfortOptions: ['Balanced Medium', 'Firm Ortho Support'],
    fabrics: ['Microfiber Velvet', 'Heavy Linen Blend', 'Stain Shield Suede'],
    featured: true,
    bestseller: true
  },
  {
    id: 'velouria-curved-lounge',
    name: 'Velouria Curved Lounge',
    tagline: 'Sculptural luxury statement sofa for modern living rooms',
    category: 'luxury',
    priceLabel: 'Request Price',
    description: 'Inspired by organic forms in modern architecture, Velouria features soft curved contours wrapped in rich terracotta velvet. Crafted to become the focal centerpiece of upscale interiors.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=1200'
    ],
    styles: ['Organic Modern', 'Sculptural', 'Luxury'],
    customizationOptions: ['Brass Metal Trim', 'Custom Arc Radius', 'Matching Swivel Armchairs'],
    dimensions: {
      length: '8.5 ft',
      depth: '3.8 ft',
      height: '30 in',
      seatHeight: '16.5 in'
    },
    comfortOptions: ['Plush Soft', 'Balanced Medium'],
    fabrics: ['Terracotta Velvet', 'Cashmere Wool Blend', 'Ivory Bouclé'],
    featured: true
  },
  {
    id: 'nordic-minimalist-3seater',
    name: 'Koben Modern Minimalist',
    tagline: 'Clean Scandinavian lines with solid teakwood frame base',
    category: 'minimal',
    priceLabel: 'Request Price',
    description: 'Embodying restraint and structural elegance, the Koben 3-seater balances slim profile wooden legs with high-resilience foam cushions upholstered in natural linen blend.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200'
    ],
    styles: ['Scandinavian', 'Minimal', 'Mid-Century Modern'],
    customizationOptions: ['Teak Wood Polish', 'Custom Length 6ft - 9ft', 'Natural Organic Weave'],
    dimensions: {
      length: '7.0 ft',
      depth: '3.1 ft',
      height: '31 in',
      seatHeight: '17.5 in'
    },
    comfortOptions: ['Balanced Medium', 'Firm Ortho Support'],
    fabrics: ['Oatmeal Linen', 'Sage Micro-weave', 'Charcoal Canvas'],
    featured: false
  },
  {
    id: 'grandeur-sectional-u',
    name: 'Grandeur U-Shape Sectional',
    tagline: 'Expansive family seating with built-in lounge corners',
    category: 'sectional',
    priceLabel: 'Request Price',
    description: 'Designed for large family gatherings and home theatre lounges, the Grandeur U-Shape Sectional offers sprawling seating with dual chaises and feather-down accent cushions.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200'
    ],
    styles: ['Sectional', 'Luxury Lounge', 'Expansive'],
    customizationOptions: ['Integrated USB Outlets', 'Reclining Corner Seats', 'Stain-Resistant Performance Fabric'],
    dimensions: {
      length: '12.5 ft',
      depth: '6.5 ft (Chaises)',
      height: '33 in',
      seatHeight: '17 in'
    },
    comfortOptions: ['Plush Soft', 'Balanced Medium'],
    fabrics: ['Rich Mocha Chenille', 'Warm Cream Velvet', 'Sandstone Weave'],
    featured: true
  },
  {
    id: 'haven-daybed-sofa',
    name: 'Haven Plush Daybed Sofa',
    tagline: 'Deep lounge sofa designed for afternoon relaxation',
    category: 'lounge',
    priceLabel: 'Request Price',
    description: 'Extra deep seating (40 inches) allows Haven to double as a cozy daybed for reading or napping. Features multiple accent throw cushions in warm earth tones.',
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=1200'
    ],
    styles: ['Lounge', 'Daybed', 'Comfort First'],
    customizationOptions: ['Extra Cushion Density', 'Custom Bolster Sizes', 'Washable Linen Slipcovers'],
    dimensions: {
      length: '6.8 ft',
      depth: '3.6 ft',
      height: '29 in',
      seatHeight: '16 in'
    },
    comfortOptions: ['Plush Soft'],
    fabrics: ['Terracotta Linen', 'Soft Peach Cotton', 'Muted Olive Corduroy'],
    featured: false
  }
];
