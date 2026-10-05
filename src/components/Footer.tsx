import React, { useState } from 'react';
import { ChevronUp, ArrowUpRight, MapPin, Clock, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Overview', href: '#home' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Training', href: '#training' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Results', href: '#results' },
    { label: 'Membership', href: '#membership' },
    { label: 'Location', href: '#contact' },
  ];

  const trainingLinks = [
    { label: 'Strength & Heavy Lifts', href: '#training' },
    { label: 'Physique & Muscle', href: '#training' },
    { label: 'Metabolic Fat Loss', href: '#training' },
    { label: 'Functional Conditioning', href: '#training' },
    { label: '1-on-1 Personal Training', href: '#training' },
  ];

  return (
    <footer className="relative bg-[#050608] border-t border-white/[0.08] pt-12 sm:pt-16 pb-24 lg:pb-12 text-zinc-400 text-xs overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 sm:pb-16 border-b border-white/[0.08]">
          
          {/* Col 1: Brand & Bio (Spans 2 cols on mobile) */}
          <div className="col-span-2 lg:col-span-4 space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded bg-[#FF2626] flex items-center justify-center font-display text-lg text-white font-black">
                MF
              </div>
              <span className="font-display text-2xl tracking-wider text-white uppercase font-bold">
                MAHADEV FITNESS
              </span>
            </div>

            <p className="text-zinc-400 font-normal text-xs sm:text-sm leading-relaxed max-w-sm">
              Surat’s premier fitness ground in Yogi Chowk for serious strength, body transformation, and functional conditioning. Built for disciplined individuals.
            </p>

            {/* Social SVGs */}
            <div className="flex items-center space-x-2.5 pt-1">
              <a
                href="https://share.google/2BjOAnNhgow9Tl5RB"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#0E1015] hover:bg-[#FF2626] text-zinc-300 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300"
                aria-label="Mahadev Fitness Gym Google Maps & Reviews"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#0E1015] hover:bg-[#FF2626] text-zinc-300 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300"
                aria-label="Mahadev Fitness Gym Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.889C10.5 0 9 1.5 9 4.667V8z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#0E1015] hover:bg-[#FF2626] text-zinc-300 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300"
                aria-label="Mahadev Fitness Gym YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (1 col on mobile) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-sm sm:text-base text-white uppercase tracking-wider font-bold">
              NAVIGATION
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#FF2626] transition-colors duration-200 text-[11px] sm:text-xs"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Training Programs (1 col on mobile) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm sm:text-base text-white uppercase tracking-wider font-bold">
              DISCIPLINES
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {trainingLinks.map((prog) => (
                <li key={prog.label}>
                  <a
                    href={prog.href}
                    className="hover:text-[#FF2626] transition-colors duration-200 text-[11px] sm:text-xs"
                  >
                    {prog.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Location & Hours (Structured & Sleek) */}
          <div className="col-span-2 lg:col-span-3 space-y-3.5">
            <h4 className="font-display text-sm sm:text-base text-white uppercase tracking-wider font-bold">
              FACILITY LOCATION
            </h4>

            {/* Address with Icon */}
            <div className="flex items-start space-x-2.5 text-zinc-300 text-xs leading-relaxed">
              <MapPin className="w-4 h-4 text-[#FF2626] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">Near Ganga Jamuna</p>
                <p className="text-zinc-400">Mansarovar Society, Yogi Chowk Road</p>
                <p className="text-[#FF2626] font-semibold">Nana Varachha, Surat 395010</p>
              </div>
            </div>

            {/* Timings with Icon */}
            <div className="flex items-start space-x-2.5 text-zinc-300 text-xs leading-relaxed pt-1 border-t border-white/[0.06]">
              <Clock className="w-4 h-4 text-[#FF2626] shrink-0 mt-0.5" />
              <div className="text-[11px] sm:text-xs">
                <p className="text-white font-medium">Morning: <span className="text-zinc-300 font-mono">5:30 AM – 10:30 AM</span></p>
                <p className="text-white font-medium">Evening: <span className="text-zinc-300 font-mono">5:00 PM – 10:00 PM</span></p>
                <p className="text-zinc-400">Sunday: <span className="text-[#FF2626] font-mono font-semibold">6:00 AM – 12:00 PM</span></p>
              </div>
            </div>

            {/* Direct Phone Contact */}
            <div className="flex items-center space-x-2.5 text-zinc-300 text-xs leading-relaxed pt-1 border-t border-white/[0.06]">
              <Phone className="w-4 h-4 text-[#FF2626] shrink-0" />
              <div className="text-[11px] sm:text-xs">
                <a
                  href="tel:+918320102460"
                  className="text-white font-bold font-mono tracking-wider hover:text-[#FF2626] transition-colors"
                >
                  +91 83201 02460
                </a>
                <span className="text-zinc-500 text-[10px] ml-1.5">(Desk & Inquiries)</span>
              </div>
            </div>

            {/* Direct Google Maps Link */}
            <div className="pt-1.5">
              <a
                href="https://share.google/2BjOAnNhgow9Tl5RB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-[#FF2626] hover:text-white border border-white/10 text-xs font-semibold text-zinc-300 transition-all group"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FF2626] group-hover:text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-zinc-400 text-center sm:text-left">
            <p>© 2026 Mahadev Fitness Gym. All rights reserved.</p>
            <p className="text-[10px] sm:text-[11px] text-zinc-500 mt-0.5 font-mono">
              Mansarovar Society, Yogi Chowk, Surat, Gujarat 395010
            </p>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6 text-[11px] sm:text-xs text-zinc-400">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-3 py-2 rounded bg-[#0E1015] hover:bg-zinc-800 border border-white/10 text-zinc-300 hover:text-white transition-all duration-300 text-xs font-semibold"
            aria-label="Back to top of page"
          >
            <span>BACK TO TOP</span>
            <ChevronUp className="w-3.5 h-3.5 text-[#FF2626]" />
          </button>
        </div>

      </div>

      {/* Legal Modals */}
      {legalModal && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setLegalModal(null)}
          />
          <div className="relative bg-[#0E1015] border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto z-10 text-left">
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
              <h3 className="font-display text-xl sm:text-2xl text-white uppercase font-bold">
                {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="text-zinc-400 hover:text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>
            <div className="space-y-3 text-xs text-zinc-300 leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    Mahadev Fitness Gym ("we", "our", "gym") is dedicated to safeguarding member and visitor privacy.
                  </p>
                  <p>
                    <strong>Information Collection:</strong> Contact numbers and inquiry forms submitted on this website are used strictly for communicating gym memberships, personal training schedules, and facility updates in Yogi Chowk, Nana Varachha, Surat.
                  </p>
                  <p>
                    <strong>Data Security:</strong> We do not sell or trade your personal information to third-party marketing entities.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Facility Code:</strong> All members at Mahadev Fitness Gym agree to adhere to safe weight handling, re-racking of weights, and respectful conduct within the gym floor premises.
                  </p>
                  <p>
                    <strong>Membership Terms:</strong> Membership renewals, coaching schedules, and guest pass policies are administered at the Mansarovar Society, Yogi Chowk reception desk in accordance with gym management guidelines.
                  </p>
                </>
              )}
            </div>
            <div className="mt-6 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="btn-primary-red px-5 py-2 text-white text-xs font-bold uppercase tracking-wider rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

