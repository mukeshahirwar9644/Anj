import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getWhatsAppUrl, PHONE_NUMBER, COMPANY_EMAIL } from '../lib/whatsapp';
import { Button } from '../components/ui/Button';
import { MessageCircle, Phone, Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z.string().min(10, 'Please enter a valid 10-digit phone number'),
  email: z.string().email('Please enter a valid email address'),
  requirement: z.string().min(2, 'Please select your requirement'),
  message: z.string().min(5, 'Please provide a brief message'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (_data: ContactFormValues) => {
    setSubmitted(true);
  };

  return (
    <div className="pt-28 md:pt-36 pb-24 bg-cream-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] text-terracotta-600 uppercase mb-3">
            GET IN TOUCH
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-brown-900">
            Let&apos;s Create Your <span className="italic text-terracotta-500">Perfect Sofa.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brown-700/80 font-light leading-relaxed">
            Have questions about room dimensions, fabric durability, or custom quotes? Reach out to our design consultants today.
          </p>
        </div>

        {/* 3 QUICK CONTACT OPTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* WhatsApp Card */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cream-50 p-8 rounded-3xl border border-sand/70 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-normal text-brown-900 mb-1 group-hover:text-terracotta-600">
                WhatsApp Us
              </h3>
              <p className="text-xs text-brown-600 font-light mb-4">
                Instant chat with custom furniture consultants. Share reference photos &amp; room sketches.
              </p>
            </div>
            <Button variant="whatsapp" size="sm" className="w-full">
              Chat With Us
            </Button>
          </a>

          {/* Call Card */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="bg-cream-50 p-8 rounded-3xl border border-sand/70 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brown-900/10 text-brown-900 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-terracotta-600" />
              </div>
              <h3 className="font-serif text-xl font-normal text-brown-900 mb-1 group-hover:text-terracotta-600">
                Call Our Team
              </h3>
              <p className="text-xs text-brown-600 font-light mb-4">
                Direct phone consultation with our studio craftsmen.
              </p>
            </div>
            <Button variant="secondary" size="sm" className="w-full">
              Talk To Our Team
            </Button>
          </a>

          {/* Response Guarantee */}
          <div className="bg-brown-950 text-cream-100 p-8 rounded-3xl border border-terracotta-500/20 shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-terracotta-500/20 text-terracotta-400 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-normal text-cream-50 mb-1">
                Fast Response Guarantee
              </h3>
              <p className="text-xs text-cream-200/70 font-light">
                We respond to all quote inquiries within 30 minutes during studio working hours (10 AM - 8 PM IST).
              </p>
            </div>
            <div className="text-[11px] text-terracotta-300 font-semibold uppercase tracking-wider">
              Studio Open 7 Days
            </div>
          </div>
        </div>

        {/* MAIN ENQUIRY FORM & LOCATION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-cream-50 p-8 sm:p-10 rounded-4xl border border-sand/70 shadow-elevated">
            <h2 className="font-serif text-2xl font-normal text-brown-900 mb-6">
              Request A Custom Quote
            </h2>

            {!submitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-brown-900 mb-1">
                    Your Name *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-sand focus:border-terracotta-500 focus:outline-none text-sm text-brown-900"
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-brown-900 mb-1">
                      Phone Number *
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-sand focus:border-terracotta-500 focus:outline-none text-sm text-brown-900"
                      placeholder="Phone number"
                    />
                    {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brown-900 mb-1">
                      Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-sand focus:border-terracotta-500 focus:outline-none text-sm text-brown-900"
                      placeholder="Email address"
                    />
                    {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brown-900 mb-1">
                    Furniture Requirement *
                  </label>
                  <select
                    {...register('requirement')}
                    className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-sand focus:border-terracotta-500 focus:outline-none text-sm text-brown-900"
                  >
                    <option value="">Select your interest...</option>
                    <option value="Custom Sofa">Custom Sofa (L-Shape / Sectional / 3-Seater)</option>
                    <option value="Sofa-Cum-Bed">Sofa-Cum-Bed Convertible</option>
                    <option value="Cushions & Accents">Cushions &amp; Accent Seating</option>
                    <option value="Full Living Room Project">Full Living Room Project</option>
                  </select>
                  {errors.requirement && <p className="text-[11px] text-red-600 mt-1">{errors.requirement.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brown-900 mb-1">
                    Message / Specifications *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-sand focus:border-terracotta-500 focus:outline-none text-sm text-brown-900"
                    placeholder="Tell us about your room size, style preferences, or custom requirements..."
                  />
                  {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message.message}</p>}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <Button variant="primary" size="lg" type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                    <Send className="w-4 h-4 mr-2" />
                    Send Enquiry
                  </Button>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button variant="whatsapp" size="lg" type="button" className="w-full sm:w-auto">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Us Direct
                    </Button>
                  </a>
                </div>
              </form>
            ) : (
              <div className="text-center py-12">
                <CheckCircle2 className="w-14 h-14 text-terracotta-500 mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-normal text-brown-900 mb-2">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-sm text-brown-700 font-light mb-6">
                  Thank you. Our studio team will get in touch with you shortly.
                </p>
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" size="md">
                    Continue On WhatsApp
                  </Button>
                </a>
              </div>
            )}
          </div>

          {/* Location & Studio details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-cream-50 p-8 rounded-3xl border border-sand/70 shadow-soft">
              <h3 className="font-serif text-xl text-brown-900 font-normal mb-4">
                Studio Experience Center
              </h3>
              <ul className="space-y-4 text-xs text-brown-800 font-light">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-terracotta-600 shrink-0 mt-0.5" />
                  <span>Gaddi &amp; Co. Craft Studio &amp; Experience Center, Design District, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-terracotta-600 shrink-0" />
                  <a href={`tel:${PHONE_NUMBER}`} className="font-medium hover:text-terracotta-600">
                    {PHONE_NUMBER}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-terracotta-600 shrink-0" />
                  <a href={`mailto:${COMPANY_EMAIL}`} className="font-medium hover:text-terracotta-600">
                    {COMPANY_EMAIL}
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-sand/30 p-8 rounded-3xl border border-sand">
              <h4 className="font-serif text-lg text-brown-900 mb-2">
                Home Measurement Visit
              </h4>
              <p className="text-xs text-brown-700 font-light leading-relaxed">
                Need our master carpenter to visit your home with fabric swatch boxes and measure your living room? We offer doorstep consultation across major cities.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
