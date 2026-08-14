export interface FabricSwatch {
  id: string;
  name: string;
  category: 'Velvet' | 'Linen' | 'Bouclé' | 'Leatherette' | 'Chenille';
  colorName: string;
  hex: string;
  description: string;
  features: string[];
  image: string;
}

export const FABRICS_DATA: FabricSwatch[] = [
  {
    id: 'terracotta-royal-velvet',
    name: 'Royal Terracotta Velvet',
    category: 'Velvet',
    colorName: 'Warm Terracotta',
    hex: '#C85A32',
    description: 'Plush high-pile velvet with a subtle sheen and ultra-soft tactile finish. Highly durable and liquid-repellent.',
    features: ['Stain Resistant', 'High Rub Count (40,000+)', 'Pet Friendly'],
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'cream-belgian-linen',
    name: 'Alabaster Belgian Linen',
    category: 'Linen',
    colorName: 'Cream Alabaster',
    hex: '#FAF6F0',
    description: '100% natural organic linen weave providing breathable comfort and an airy, relaxed organic aesthetic.',
    features: ['Breathable', 'Natural Weave', 'Hypoallergenic'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'textured-boucle-sand',
    name: 'Sandstone Textured Bouclé',
    category: 'Bouclé',
    colorName: 'Soft Sand',
    hex: '#EADCC9',
    description: 'Heavy tactile nubby bouclé fabric that creates cozy depth and rich architectural warmth on modern sofas.',
    features: ['Heavy Textured', 'Wrinkle Proof', 'Architectural Style'],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'deep-mocha-chenille',
    name: 'Deep Mocha Chenille',
    category: 'Chenille',
    colorName: 'Dark Mocha',
    hex: '#2A1810',
    description: 'Luxurious velvety yarn with dimensional depth and rich dark chocolate undertones.',
    features: ['Extra Warmth', 'Scratch Resistant', 'Easy Clean'],
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'muted-peach-linen',
    name: 'Warm Peach Micro-Linen',
    category: 'Linen',
    colorName: 'Muted Peach',
    hex: '#F5DFD5',
    description: 'Soft subtle tone that adds gentle warmth without overpowering surrounding interior decor.',
    features: ['Soft Touch', 'Fade Resistant', 'Eco Upholstery'],
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=400'
  }
];
