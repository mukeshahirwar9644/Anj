import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { getCustomizerWhatsAppUrl } from '../lib/whatsapp';
import { Button } from '../components/ui/Button';
import { CheckCircle2, MessageCircle, Sparkles, Ruler, Sliders, Send } from 'lucide-react';

// Zod Validation Schema for Quote Form
const customizationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Enter a valid 10-digit phone number'),
  whatsapp: z.string().optional(),
  email: z.string().email('Enter a valid email address'),
  city: z.string().min(2, 'Please enter your city'),
  requirements: z.string().optional(),
});

type CustomizationFormValues = z.infer<typeof customizationSchema>;

export const Customize: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Customizer Selections State
  const [selectedStyle, setSelectedStyle] = useState('Modern L-Shape Sectional');
  const [selectedFabric, setSelectedFabric] = useState('Royal Terracotta Velvet');
  const [selectedColor, setSelectedColor] = useState('Warm Terracotta');
  const [dimensions, setDimensions] = useState('9.5 ft Length x 5.8 ft Depth');
  const [selectedComfort, setSelectedComfort] = useState('Balanced Medium (Ergonomic)');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CustomizationFormValues>({
    resolver: zodResolver(customizationSchema),
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(6, prev + 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(1, prev - 1));

  const onSubmit = (_data: CustomizationFormValues) => {
    setIsSubmitted(true);
  };

  return (
    <div className="pt-28 md:pt-36 pb-24 bg-cream-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 bg-terracotta-50 text-terracotta-700 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-terracotta-200 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> BESPOKE CONFIGURATOR
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-brown-900 leading-[1.1]">
            Your Sofa. Your Space. <br />
            <span className="italic text-terracotta-500 font-serif">Your Way.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brown-700/80 font-light leading-relaxed">
            Configure your custom sofa in 6 guided steps. Receive a personalized price quote and fabric sample box.
          </p>
        </div>

        {/* STEP PROGRESS TRACKER */}
        {!isSubmitted && (
          <div className="mb-12">
            <div className="flex items-center justify-between max-w-2xl mx-auto mb-4 px-2">
              {[1, 2, 3, 4, 5, 6].map((step) => (
                <button
                  key={step}
                  onClick={() => setCurrentStep(step)}
                  className={`w-9 h-9 rounded-full font-serif text-sm font-semibold flex items-center justify-center transition-all duration-300 ${
                    currentStep === step
                      ? 'bg-terracotta-500 text-white shadow-soft scale-110'
                      : currentStep > step
                      ? 'bg-brown-900 text-cream-100'
                      : 'bg-cream-200 text-brown-600'
                  }`}
                >
                  {currentStep > step ? <CheckCircle2 className="w-5 h-5 text-terracotta-400" /> : `0${step}`}
                </button>
              ))}
            </div>
            <div className="w-full h-1.5 bg-cream-200 rounded-full max-w-2xl mx-auto overflow-hidden">
              <div
                className="h-full bg-terracotta-500 transition-all duration-500"
                style={{ width: `${(currentStep / 6) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* STEP CONTENT WRAPPER */}
        <div className="bg-cream-50 p-6 sm:p-10 md:p-12 rounded-4xl border border-sand/70 shadow-elevated">
          {!isSubmitted ? (
            <AnimatePresence mode="wait">
              {/* STEP 01: STYLE */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <span className="text-xs font-semibold tracking-widest text-terracotta-600 uppercase block mb-1">
                    STEP 01 OF 06
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-normal text-brown-900 mb-6">
                    Choose Your Sofa Silhouette &amp; Style
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {[
                      { name: 'Modern L-Shape Sectional', desc: 'Spacious corner lounging' },
                      { name: 'Dual Sofa-Cum-Bed', desc: 'Convertible space saver' },
                      { name: 'Velouria Curved Lounge', desc: 'Sculptural luxury centerpiece' },
                      { name: 'Scandinavian Minimal 3-Seater', desc: 'Sleek wood frame base' },
                      { name: 'Grandeur U-Shape Sectional', desc: 'Family home lounge' },
                      { name: 'Classic Chesterfield', desc: 'Deep tufted elegance' },
                    ].map((item) => (
                      <div
                        key={item.name}
                        onClick={() => setSelectedStyle(item.name)}
                        className={`p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                          selectedStyle === item.name
                            ? 'border-terracotta-500 bg-terracotta-50/40 shadow-soft'
                            : 'border-sand/60 bg-cream-100 hover:border-sand'
                        }`}
                      >
                        <h3 className="font-serif text-base font-normal text-brown-900 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-xs text-brown-600 font-light">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <Button variant="primary" size="md" onClick={nextStep} showArrow>
                      Next: Choose Fabric
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* STEP 02: FABRIC */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <span className="text-xs font-semibold tracking-widest text-terracotta-600 uppercase block mb-1">
                    STEP 02 OF 06
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-normal text-brown-900 mb-6">
                    Choose Your Upholstery Fabric
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {[
                      { name: 'Royal Terracotta Velvet', type: 'High-pile liquid repellent' },
                      { name: 'Alabaster Belgian Linen', type: '100% natural organic weave' },
                      { name: 'Sandstone Textured Bouclé', type: 'Heavy architectural texture' },
                      { name: 'Deep Mocha Chenille', type: 'Plush scratch-resistant yarn' },
                      { name: 'Microfiber Stain-Shield', type: 'Pet-friendly heavy duty' },
                      { name: 'Nappa Leatherette', type: 'Smooth luxury finish' },
                    ].map((fab) => (
                      <div
                        key={fab.name}
                        onClick={() => setSelectedFabric(fab.name)}
                        className={`p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                          selectedFabric === fab.name
                            ? 'border-terracotta-500 bg-terracotta-50/40 shadow-soft'
                            : 'border-sand/60 bg-cream-100 hover:border-sand'
                        }`}
                      >
                        <h3 className="font-serif text-base font-normal text-brown-900 mb-1">
                          {fab.name}
                        </h3>
                        <p className="text-xs text-brown-600 font-light">{fab.type}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" size="md" onClick={prevStep}>
                      Back
                    </Button>
                    <Button variant="primary" size="md" onClick={nextStep} showArrow>
                      Next: Choose Colour
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* STEP 03: COLOUR */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <span className="text-xs font-semibold tracking-widest text-terracotta-600 uppercase block mb-1">
                    STEP 03 OF 06
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-normal text-brown-900 mb-6">
                    Choose Your Preferred Colour Palette
                  </h2>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-8">
                    {[
                      { name: 'Warm Terracotta', hex: '#C85A32' },
                      { name: 'Cream Alabaster', hex: '#FAF6F0' },
                      { name: 'Deep Mocha', hex: '#2A1810' },
                      { name: 'Soft Sand', hex: '#EADCC9' },
                      { name: 'Olive Sage', hex: '#6B705C' },
                      { name: 'Charcoal Slate', hex: '#343A40' },
                    ].map((col) => (
                      <div
                        key={col.name}
                        onClick={() => setSelectedColor(col.name)}
                        className={`p-4 rounded-2xl border-2 cursor-pointer text-center transition-all duration-300 ${
                          selectedColor === col.name
                            ? 'border-terracotta-500 bg-terracotta-50/40 shadow-soft scale-105'
                            : 'border-sand/60 bg-cream-100 hover:border-sand'
                        }`}
                      >
                        <div
                          className="w-10 h-10 rounded-full mx-auto mb-2 border border-black/10 shadow-sm"
                          style={{ backgroundColor: col.hex }}
                        />
                        <p className="text-xs font-medium text-brown-900">{col.name}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" size="md" onClick={prevStep}>
                      Back
                    </Button>
                    <Button variant="primary" size="md" onClick={nextStep} showArrow>
                      Next: Choose Dimensions
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* STEP 04: DIMENSIONS */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <span className="text-xs font-semibold tracking-widest text-terracotta-600 uppercase block mb-1">
                    STEP 04 OF 06
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-normal text-brown-900 mb-2">
                    Specify Room Dimensions &amp; Sizing
                  </h2>
                  <p className="text-xs text-brown-600 mb-6 font-light">
                    Select a preset or enter your room space length.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        '7.0 ft Compact (Standard 3-Seater)',
                        '9.5 ft Standard L-Shape',
                        '12.5 ft Grand Sectional',
                      ].map((dim) => (
                        <div
                          key={dim}
                          onClick={() => setDimensions(dim)}
                          className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                            dimensions === dim
                              ? 'border-terracotta-500 bg-terracotta-50/40 shadow-soft'
                              : 'border-sand/60 bg-cream-100'
                          }`}
                        >
                          <Ruler className="w-5 h-5 text-terracotta-600 mb-2" />
                          <p className="text-xs font-bold text-brown-900">{dim}</p>
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brown-900 mb-2">
                        Or enter custom length/depth in feet (e.g. 10.5 ft x 6 ft)
                      </label>
                      <input
                        type="text"
                        value={dimensions}
                        onChange={(e) => setDimensions(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-cream-100 border border-sand focus:border-terracotta-500 focus:outline-none text-sm text-brown-900"
                        placeholder="e.g. 11.2 ft Length, Right Chaise"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" size="md" onClick={prevStep}>
                      Back
                    </Button>
                    <Button variant="primary" size="md" onClick={nextStep} showArrow>
                      Next: Comfort Preference
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* STEP 05: COMFORT PREFERENCE */}
              {currentStep === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <span className="text-xs font-semibold tracking-widest text-terracotta-600 uppercase block mb-1">
                    STEP 05 OF 06
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-normal text-brown-900 mb-6">
                    Choose Your Seat Cushion Comfort Level
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    {[
                      {
                        title: 'Plush Soft (Cloud Comfort)',
                        desc: 'Down-feather wrap over soft foam. Perfect for sinking in and afternoon lounging.',
                      },
                      {
                        title: 'Balanced Medium (Ergonomic)',
                        desc: '40-density high-resilience foam providing equal blend of softness and posture support.',
                      },
                      {
                        title: 'Firm Support (Ortho Extra)',
                        desc: 'Dense orthopedic foam preventing lower back strain for upright posture seating.',
                      },
                    ].map((comf) => (
                      <div
                        key={comf.title}
                        onClick={() => setSelectedComfort(comf.title)}
                        className={`p-6 rounded-3xl border-2 cursor-pointer transition-all duration-300 ${
                          selectedComfort === comf.title
                            ? 'border-terracotta-500 bg-terracotta-50/40 shadow-soft'
                            : 'border-sand/60 bg-cream-100 hover:border-sand'
                        }`}
                      >
                        <Sliders className="w-6 h-6 text-terracotta-600 mb-3" />
                        <h3 className="font-serif text-lg font-normal text-brown-900 mb-2">
                          {comf.title}
                        </h3>
                        <p className="text-xs text-brown-700/80 font-light leading-relaxed">
                          {comf.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" size="md" onClick={prevStep}>
                      Back
                    </Button>
                    <Button variant="primary" size="md" onClick={nextStep} showArrow>
                      Next: Request Your Quote
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* STEP 06: QUOTE FORM */}
              {currentStep === 6 && (
                <motion.div
                  key="step6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <span className="text-xs font-semibold tracking-widest text-terracotta-600 uppercase block mb-1">
                    STEP 06 OF 06 — FINAL ENQUIRY
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-normal text-brown-900 mb-2">
                    Submit For Your Custom Quote
                  </h2>
                  <p className="text-xs text-brown-600 font-light mb-6">
                    Our custom design studio will prepare pricing options and dispatch fabric swatches to your address.
                  </p>

                  {/* Summary Box */}
                  <div className="bg-cream-100 p-4 rounded-2xl border border-sand mb-6 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    <div><span className="text-brown-500">Style:</span> <p className="font-bold text-brown-900">{selectedStyle}</p></div>
                    <div><span className="text-brown-500">Fabric:</span> <p className="font-bold text-brown-900">{selectedFabric}</p></div>
                    <div><span className="text-brown-500">Color:</span> <p className="font-bold text-brown-900">{selectedColor}</p></div>
                    <div><span className="text-brown-500">Size:</span> <p className="font-bold text-brown-900">{dimensions}</p></div>
                    <div><span className="text-brown-500">Comfort:</span> <p className="font-bold text-brown-900">{selectedComfort}</p></div>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-brown-900 mb-1">
                          Full Name *
                        </label>
                        <input
                          {...register('name')}
                          type="text"
                          className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-sand focus:border-terracotta-500 focus:outline-none text-sm text-brown-900"
                          placeholder="Your Name"
                        />
                        {errors.name && (
                          <p className="text-[11px] text-red-600 mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-brown-900 mb-1">
                          Phone Number *
                        </label>
                        <input
                          {...register('phone')}
                          type="tel"
                          className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-sand focus:border-terracotta-500 focus:outline-none text-sm text-brown-900"
                          placeholder="98765 43210"
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-red-600 mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-brown-900 mb-1">
                          Email Address *
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-sand focus:border-terracotta-500 focus:outline-none text-sm text-brown-900"
                          placeholder="hello@example.com"
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-600 mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-brown-900 mb-1">
                          City *
                        </label>
                        <input
                          {...register('city')}
                          type="text"
                          className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-sand focus:border-terracotta-500 focus:outline-none text-sm text-brown-900"
                          placeholder="Mumbai, Bengaluru, Delhi, etc."
                        />
                        {errors.city && (
                          <p className="text-[11px] text-red-600 mt-1">{errors.city.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brown-900 mb-1">
                        Additional Requirements / Room Photos (Optional)
                      </label>
                      <textarea
                        {...register('requirements')}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-sand focus:border-terracotta-500 focus:outline-none text-sm text-brown-900"
                        placeholder="Mention any specific room layout notes or requests..."
                      />
                    </div>

                    <div className="flex justify-between items-center pt-4">
                      <Button variant="outline" size="md" type="button" onClick={prevStep}>
                        Back
                      </Button>
                      <Button variant="primary" size="lg" type="submit" disabled={isSubmitting}>
                        <Send className="w-4 h-4 mr-2" />
                        Get My Custom Quote
                      </Button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          ) : (
            /* SUCCESS STATE */
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12 px-4"
            >
              <div className="w-16 h-16 rounded-full bg-terracotta-500 text-white flex items-center justify-center mx-auto mb-6 shadow-glow">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brown-900 mb-3">
                Thank You! Enquiry Received.
              </h2>
              <p className="text-base text-brown-700 font-light max-w-md mx-auto leading-relaxed mb-8">
                Our custom furniture design team will review your specifications and get in touch with you shortly.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={getCustomizerWhatsAppUrl({
                    style: selectedStyle,
                    fabric: selectedFabric,
                    color: selectedColor,
                    dimensions: dimensions,
                    comfort: selectedComfort,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" size="lg">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Continue On WhatsApp Directly
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </div>
  );
};
