import React from 'react';
import { MessageSquare, ArrowRight, Phone } from 'lucide-react';

interface MobileStickyCTAProps {
  onJoinClick: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onJoinClick }) => {
  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/918320102460?text=Hi%20Mahadev%20Fitness%20Gym%20Surat,%20I%20would%20like%20to%20inquire%20about%20gym%20membership.',
      '_blank'
    );
  };

  return (
    <aside aria-label="Quick mobile contact actions" className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-2.5 bg-[#08090C]/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-8px_25px_rgba(0,0,0,0.5)]">
      <div className="flex items-center space-x-2 max-w-md mx-auto">
        {/* Call Trigger */}
        <a
          href="tel:+918320102460"
          aria-label="Call gym front desk at 08320102460"
          className="p-3 bg-[#0E1015] hover:bg-zinc-900 text-white border border-white/10 rounded-lg flex items-center justify-center shrink-0 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-[#FF2626]" />
        </a>

        {/* WhatsApp Quick Trigger */}
        <button
          onClick={handleWhatsApp}
          className="flex-1 py-3 px-2 bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/25 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-all active:scale-95"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WHATSAPP</span>
        </button>

        {/* Join Now Primary Action */}
        <button
          onClick={onJoinClick}
          className="flex-1 py-3 px-3 btn-primary-red text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow-md active:scale-95 transition-all"
        >
          <span>JOIN NOW</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};

