import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLenis } from './hooks/useLenis';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Preloader } from './components/layout/Preloader';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileBottomBar } from './components/layout/MobileBottomBar';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Gallery } from './pages/Gallery';
import { Sofas } from './pages/Sofas';
import { SofaCumBeds } from './pages/SofaCumBeds';
import { CushionsComfort } from './pages/CushionsComfort';
import { Customize } from './pages/Customize';
import { Contact } from './pages/Contact';
import { SofaDetails } from './pages/SofaDetails';
import { NotFound } from './pages/NotFound';

const AppContent: React.FC = () => {
  // Initialize Lenis Smooth Scroll momentum
  useLenis();

  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-brown-900 selection:bg-terracotta-500 selection:text-white">
      {/* Brand Splash Screen Preloader */}
      <Preloader />

      {/* Automatic Scroll Reset on Navigation */}
      <ScrollToTop />

      {/* Sticky Translucent Header */}
      <Navbar />

      {/* Main Viewport Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sofas" element={<Sofas />} />
          <Route path="/sofa-cum-beds" element={<SofaCumBeds />} />
          <Route path="/cushions-comfort" element={<CushionsComfort />} />
          <Route path="/customize" element={<Customize />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sofa/:id" element={<SofaDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Omnipresent Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Mobile-Only Sticky Bottom Bar */}
      <MobileBottomBar />

      {/* Editorial Luxury Footer */}
      <Footer />
    </div>
  );
};

export function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
