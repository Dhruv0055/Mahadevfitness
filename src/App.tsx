import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyBodyLab } from './components/WhyBodyLab';
import { TrainingPrograms } from './components/TrainingPrograms';
import { FacilitiesGallery } from './components/FacilitiesGallery';
import { GymateBanner } from './components/GymateBanner';
import { ResultsShowcase } from './components/ResultsShowcase';
import { MembershipPlans } from './components/MembershipPlans';
import { PersonalTraining } from './components/PersonalTraining';
import { TestimonialSlider } from './components/TestimonialSlider';
import { LocationSection } from './components/LocationSection';
import { ContactLeadSection } from './components/ContactLeadSection';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = useState<string>('Muscle Building');

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const scrollToLeadForm = (goal?: string) => {
    if (goal) {
      setSelectedGoal(goal);
    }
    const element = document.getElementById('lead-form') || document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFacilities = () => {
    const element = document.getElementById('facilities');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090C] text-white selection:bg-[#FF2626] selection:text-white relative font-sans">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Clean Frosted Sticky Navbar */}
      <Navbar onJoinClick={() => scrollToLeadForm()} />

      {/* Main Page Flow */}
      <main>
        {/* Section 1: Dynamic Hero (Clean background slideshow & video reel) */}
        <Hero
          onStartJourney={() => scrollToLeadForm()}
          onExploreGym={scrollToFacilities}
        />

        {/* Section 2: Why Mahadev Fitness */}
        <WhyBodyLab />

        {/* Section 3: Training Disciplines */}
        <TrainingPrograms
          onSelectProgram={(program) => scrollToLeadForm(program)}
        />

        {/* Section 4: Gym Facilities Gallery with Fullscreen Lightbox */}
        <FacilitiesGallery />

        {/* Section 5: Gymate High-Energy Callout Banner */}
        <GymateBanner onJoinClick={() => scrollToLeadForm()} />

        {/* Section 6: Transformation & Results Framework */}
        <ResultsShowcase
          onStartTransformation={() => scrollToLeadForm('Personal Training')}
        />

        {/* Section 7: Membership Commitments */}
        <MembershipPlans
          onSelectPlan={(plan) => scrollToLeadForm(`${plan} Membership`)}
        />

        {/* Section 8: Personal Training Split Spotlight */}
        <PersonalTraining
          onEnquirePT={() => scrollToLeadForm('Personal Training')}
        />

        {/* Section 9: Genuine Member Reviews */}
        <TestimonialSlider />

        {/* Section 10: Surat Location & Google Maps */}
        <LocationSection />

        {/* Section 11: Lead Capture & Fast WhatsApp/Call conversion */}
        <ContactLeadSection preselectedGoal={selectedGoal} />
      </main>

      {/* Floating Bottom Conversion Bar on Mobile */}
      <MobileStickyCTA onJoinClick={() => scrollToLeadForm()} />

      {/* Clean Footer */}
      <Footer />
    </div>
  );
};

export default App;
