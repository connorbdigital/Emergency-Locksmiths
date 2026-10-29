import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustProof } from './components/TrustProof';
import { SecurityCalculator } from './components/SecurityCalculator';
import { AuditBreakdown } from './components/AuditBreakdown';
import { ProductShowcase } from './components/ProductShowcase';
import { AudienceSolutions } from './components/AudienceSolutions';
import { CoverageMap } from './components/CoverageMap';
import { PricingSection } from './components/PricingSection';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { EmergencyStickyBar } from './components/EmergencyStickyBar';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState<'residential' | 'commercial'>('residential');
  const [bookingPostcode, setBookingPostcode] = useState('');

  const handleOpenBooking = (type: 'residential' | 'commercial' = 'residential', postcode: string = '') => {
    setBookingType(type);
    setBookingPostcode(postcode);
    setIsBookingOpen(true);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      {/* Sticky Navigation */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onNavigateSection={handleNavigateSection}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onNavigateSection={handleNavigateSection}
        />

        {/* Social Proof & Trust Badges */}
        <TrustProof />

        {/* Interactive Security Risk Calculator */}
        <SecurityCalculator
          onOpenBooking={handleOpenBooking}
        />

        {/* 36-Point Physical Security Check Details */}
        <AuditBreakdown
          onOpenBooking={() => handleOpenBooking('residential')}
        />

        {/* Hardware Comparison & Interactive Snap Attack Simulation */}
        <ProductShowcase
          onOpenBooking={() => handleOpenBooking('residential')}
        />

        {/* Domestic & Commercial Tailored Solutions */}
        <AudienceSolutions
          onOpenBooking={handleOpenBooking}
        />

        {/* Interactive Wirral Postcode Coverage Map */}
        <CoverageMap
          onOpenBooking={handleOpenBooking}
        />

        {/* Transparent Guarantee & Upfront Pricing */}
        <PricingSection
          onOpenBooking={() => handleOpenBooking('residential')}
        />

        {/* Verified Community Testimonials */}
        <Testimonials
          onOpenBooking={() => handleOpenBooking('residential')}
        />

        {/* Interactive FAQ Accordion */}
        <FAQ />

        {/* High-Converting Final Call to Action */}
        <CTASection
          onOpenBooking={() => handleOpenBooking('residential')}
        />
      </main>

      {/* Comprehensive Tech Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking('residential')}
        onNavigateSection={handleNavigateSection}
      />

      {/* Interactive Free Check Booking Wizard Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialType={bookingType}
        initialPostcode={bookingPostcode}
      />

      {/* Floating Emergency & Quick Booking Sticky Bar */}
      <EmergencyStickyBar
        onOpenBooking={() => handleOpenBooking('residential')}
      />
    </div>
  );
}

export default App;
