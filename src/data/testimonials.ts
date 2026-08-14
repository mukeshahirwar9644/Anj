export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  city: string;
  quote: string;
  sofaModel: string;
  rating: number;
  avatar: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Rohan & Ananya Roy',
    role: 'Homeowners',
    city: 'Mumbai',
    quote: 'Finding a sofa that fitted our odd-shaped living room room corner seemed impossible until Gaddi & Co. came in. They measured our space down to the millimeter and built a stunning terracotta L-shape that exceeded every expectation.',
    sofaModel: 'Sereno Modular L-Shape',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'test-2',
    clientName: 'Meera Deshmukh',
    role: 'Principal Interior Designer, Studio V',
    city: 'Bengaluru',
    quote: 'As an interior architect, cushion density and stitching precision are non-negotiable for my luxury projects. Gaddi & Co. is my go-to custom sofa brand in India. Craftsmanship and fabric selection are world-class.',
    sofaModel: 'Velouria Curved Lounge',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'test-3',
    clientName: 'Vikram & Priya Malhotra',
    role: 'Villa Owners',
    city: 'Gurgaon',
    quote: 'Our Solace Sofa-Cum-Bed is used daily by guests. The transformation mechanism is buttery smooth and the mattress comfort feels like a 5-star hotel bed. Truly worth every rupee.',
    sofaModel: 'Solace Sofa-Cum-Bed',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  }
];
