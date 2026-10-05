import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageSquare, MapPin, Clock, Plus, Dumbbell } from 'lucide-react';

interface NavbarProps {
  onJoinClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'why-us', 'training', 'facilities', 'results', 'membership', 'location', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#why-us', id: 'why-us' },
    { label: 'Classes', href: '#training', id: 'training' },
    { label: 'Facilities', href: '#facilities', id: 'facilities' },
    { label: 'Results', href: '#results', id: 'results' },
    { label: 'Membership', href: '#membership', id: 'membership' },
    { label: 'Location', href: '#location', id: 'location' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Mini Utility Bar (Gymate Style) */}
      <div className="bg-white text-zinc-900 border-b border-zinc-200 hidden md:block py-1.5 px-4 sm:px-6 lg:px-8 text-[11px] font-semibold transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Location & Inquiry */}
          <div className="flex items-center space-x-4 text-zinc-700">
            <a
              href="https://share.google/2BjOAnNhgow9Tl5RB"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 hover:text-[#FF0336] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#FF0336] shrink-0" />
              <span><strong className="text-zinc-900 font-bold">Location:</strong> Mansarovar Society, Yogi Chowk, Surat</span>
            </a>
            <span className="text-zinc-300">/</span>
            <div className="flex items-center space-x-1.5 text-zinc-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Admissions & Training Open Daily</span>
            </div>
          </div>

          {/* Right: Shifts & Direct Phone */}
          <div className="flex items-center space-x-4 text-zinc-700">
            <div className="flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-[#FF0336] shrink-0" />
              <span><strong className="text-zinc-900 font-bold">Opening Hours:</strong> Mon - Sat: 5:30 am - 10:30 am & 5:00 pm - 10:00 pm</span>
            </div>
            <span className="text-zinc-300">/</span>
            <a
              href="tel:08320102460"
              className="flex items-center space-x-1.5 text-zinc-900 hover:text-[#FF0336] transition-colors font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF0336] shrink-0" />
              <span>Let's Phone: <span className="text-[#FF0336] font-extrabold">+91 83201 02460</span></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08090C]/95 backdrop-blur-xl py-3 shadow-[0_10px_35px_rgba(0,0,0,0.95)] border-b border-white/[0.08]'
            : 'bg-[#08090C]/90 lg:bg-[#08090C]/80 backdrop-blur-md py-3.5 lg:py-5 border-b border-white/[0.05]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Gymate Style Bold Brand Mark */}
            <a
              href="#home"
              className="group flex items-center space-x-3 focus:outline-none shrink-0"
            >
              <div className="w-10 h-10 rounded-lg bg-[#FF0336] flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,3,54,0.5)] group-hover:scale-105 transition-transform">
                <Dumbbell className="w-5 h-5 -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white leading-none whitespace-nowrap">
                  MAHADEV <span className="text-[#FF0336]">FITNESS</span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400 font-bold mt-1 whitespace-nowrap">
                  ULTIMATE GYM • YOGI CHOWK
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`text-xs font-bold uppercase tracking-wider transition-colors relative py-1 whitespace-nowrap ${
                      isActive ? 'text-white font-black' : 'text-zinc-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FF0336]"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3 shrink-0">
              <a
                href="https://wa.me/918320102460?text=Hi%20Mahadev%20Fitness%20Gym%20Surat,%20I%20would%20like%20to%20inquire%20about%20membership."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-zinc-300 hover:text-white px-3 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 transition-all flex items-center space-x-2 whitespace-nowrap"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              {/* Gymate Red CTA with Plus Icon */}
              <button
                onClick={onJoinClick}
                className="bg-[#FF0336] hover:bg-[#E00230] text-white px-5 py-2.5 text-xs font-black uppercase tracking-wider rounded-md inline-flex items-center space-x-2 shadow-[0_4px_20px_rgba(255,3,54,0.4)] active:scale-95 transition-all whitespace-nowrap"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>JOIN CLASS NOW</span>
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center space-x-2.5 lg:hidden">
              <button
                onClick={onJoinClick}
                className="bg-[#FF0336] text-white px-3.5 py-1.5 text-[11px] font-black uppercase tracking-wider rounded-md active:scale-95 flex items-center space-x-1"
              >
                <Plus className="w-3.5 h-3.5 stroke-[3]" />
                <span>JOIN NOW</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-300 hover:text-white focus:outline-none rounded-lg bg-zinc-900 border border-zinc-800"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF0336]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#08090C]/98 backdrop-blur-2xl border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 space-y-4 max-w-md mx-auto">
              {/* Mini Info in drawer */}
              <div className="p-3 bg-zinc-900/90 rounded-xl border border-white/10 text-xs space-y-1.5 text-zinc-300">
                <div className="flex items-center space-x-2 text-[#FF0336] font-bold">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>Mansarovar Society, Yogi Chowk, Surat</span>
                </div>
                <div className="flex items-center space-x-2 text-zinc-400">
                  <Clock className="w-3.5 h-3.5 shrink-0 text-[#FF0336]" />
                  <span>5:30am - 10:30am & 5:00pm - 10:00pm</span>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-bold uppercase tracking-wide py-2.5 px-3 rounded-lg transition-colors ${
                      activeSection === link.id
                        ? 'text-[#FF0336] bg-[#FF0336]/10 border-l-4 border-[#FF0336]'
                        : 'text-zinc-300 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onJoinClick();
                  }}
                  className="w-full py-3.5 text-center text-xs font-black uppercase tracking-wider text-white bg-[#FF0336] rounded-lg flex items-center justify-center space-x-2 shadow-lg shadow-[#FF0336]/30"
                >
                  <Plus className="w-4 h-4 stroke-[3]" />
                  <span>JOIN CLASS NOW</span>
                </button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href="tel:08320102460"
                    className="flex items-center justify-center space-x-2 py-2.5 px-3 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-bold text-zinc-200"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FF0336]" />
                    <span>083201 02460</span>
                  </a>
                  <a
                    href="https://wa.me/918320102460?text=Hi%20Mahadev%20Fitness%20Gym%20Surat,%20I%20would%20like%20to%20know%20more%20about%20membership."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 py-2.5 px-3 bg-emerald-950/40 border border-emerald-500/30 rounded-lg text-xs font-bold text-emerald-400"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
