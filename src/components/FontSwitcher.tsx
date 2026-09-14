import React, { useState } from 'react';
import { Type, Check } from 'lucide-react';

interface FontSwitcherProps {
  currentTheme: string;
  onSelectTheme: (theme: string) => void;
}

export const FontSwitcher: React.FC<FontSwitcherProps> = ({ currentTheme, onSelectTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const fontOptions = [
    {
      id: 'font-theme-athletic',
      name: 'Athletic Bold',
      preview: 'Barlow Condensed',
      brand: 'Nike / UFC Style',
      description: 'Punchy, commanding, muscular typography'
    },
    {
      id: 'font-theme-luxury',
      name: 'Luxury Club',
      preview: 'Outfit',
      brand: 'Equinox Style',
      description: 'Modern, clean, geometric luxury aesthetic'
    },
    {
      id: 'font-theme-swiss',
      name: 'Swiss Modernist',
      preview: 'Space Grotesk',
      brand: 'On Running / Studio Style',
      description: 'Architectural, tight, European precision'
    }
  ];

  return (
    <div className="fixed bottom-20 right-5 lg:bottom-6 lg:right-6 z-50">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3.5 py-2.5 rounded-full bg-dark-900/95 hover:bg-dark-850 text-white border border-white/20 shadow-2xl backdrop-blur-md transition-all text-xs font-mono group"
        aria-label="Toggle Font Style Options"
      >
        <Type className="w-4 h-4 text-brand group-hover:scale-110 transition-transform" />
        <span className="font-semibold hidden sm:inline">Change Font</span>
      </button>

      {/* Font Options Modal / Flyout */}
      {isOpen && (
        <div className="absolute bottom-12 right-0 w-72 p-4 rounded-2xl bg-[#0E1015] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Typography Style
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white text-xs"
            >
              ✕
            </button>
          </div>

          <div className="space-y-2">
            {fontOptions.map((opt) => {
              const isSelected = currentTheme === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    onSelectTheme(opt.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-3 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-brand/15 border-brand text-white shadow-md'
                      : 'bg-dark-950 border-white/[0.08] text-zinc-300 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold font-sans">
                      {opt.name}
                    </span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-brand" />}
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono">
                    <span className="text-brand">{opt.preview}</span>
                    <span>{opt.brand}</span>
                  </div>
                  <p className="text-[10px] text-zinc-400 font-light mt-1">
                    {opt.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
