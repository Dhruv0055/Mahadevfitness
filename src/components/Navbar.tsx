import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';

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
      const scrollPosition = window.scrollY + 180;

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
    { label: 'Overview', href: '#home', id: 'home' },
    { label: 'Why Us', href: '#why-us', id: 'why-us' },
    { label: 'Training', href: '#training', id: 'training' },
    { label: 'Facilities', href: '#facilities', id: 'facilities' },
    { label: 'Results', href: '#results', id: 'results' },
    { label: 'Membership', href: '#membership', id: 'membership' },
    { label: 'Location', href: '#location', id: 'location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090C]/95 backdrop-blur-xl py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.9)]'
          : 'bg-[#08090C]/80 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none py-4 lg:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Mark */}
          <a
            href="#home"
            className="group flex items-center space-x-3 focus:outline-none shrink-0"
          >
            <div className="w-8 h-8 rounded-md bg-[#FF2626] flex items-center justify-center font-display font-black text-base text-white shadow-[0_0_15px_rgba(255,38,38,0.5)] group-hover:scale-105 transition-transform">
              BL
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-black tracking-tight text-white leading-none whitespace-nowrap">
                THE BODY LAB
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF2626] font-bold mt-0.5 whitespace-nowrap">
                Surat • Nana Varachha
              </span>
            </div>
          </a>

          {/* Clean Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-xs font-bold tracking-wide transition-colors relative py-1 whitespace-nowrap ${
                    isActive ? 'text-white font-extrabold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF2626]"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-3 shrink-0">
            <a
              href="https://wa.me/918320102460?text=Hi%20The%20Body%20Lab%20Surat,%20I%20would%20like%20to%20inquire%20about%20membership."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-400 hover:text-emerald-300 px-3.5 py-2 rounded-full bg-emerald-950/40 border border-emerald-500/30 transition-all flex items-center space-x-2 whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>WhatsApp Desk</span>
            </a>

            <button
              onClick={onJoinClick}
              className="btn-primary-red px-5 py-2 text-xs font-black uppercase tracking-wider rounded-lg inline-flex items-center space-x-1.5 active:scale-95 whitespace-nowrap"
            >
              <span>JOIN NOW</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-2.5 lg:hidden">
            <button
              onClick={onJoinClick}
              className="btn-primary-red px-3.5 py-1.5 text-[11px] font-black uppercase tracking-wider rounded-md active:scale-95"
            >
              JOIN NOW
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white focus:outline-none rounded-lg bg-zinc-900 border border-zinc-800"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF2626]" /> : <Menu className="w-5 h-5" />}
            </button>
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
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-bold py-2.5 px-3 rounded-lg transition-colors ${
                      activeSection === link.id
                        ? 'text-[#FF2626] bg-[#FF2626]/10 border-l-4 border-[#FF2626]'
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
                  className="w-full py-3.5 text-center text-xs font-black uppercase tracking-wider text-white btn-primary-red rounded-lg flex items-center justify-center space-x-2"
                >
                  <span>CLAIM PASS & JOIN</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href="tel:+918320102460"
                    className="flex items-center justify-center space-x-2 py-2.5 px-3 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-bold text-zinc-200"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FF2626]" />
                    <span>083201 02460</span>
                  </a>
                  <a
                    href="https://wa.me/918320102460?text=Hi%20The%20Body%20Lab,%20I%20would%20like%20to%20know%20more%20about%20membership."
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

