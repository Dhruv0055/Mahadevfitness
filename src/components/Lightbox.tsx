import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { FacilityItem } from '../types';

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  items: FacilityItem[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  currentIndex,
  items,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onNext, onPrev, onClose]);

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-dark-950/95 backdrop-blur-xl"
          onClick={onClose}
        />

        {/* Top Control Bar */}
        <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-20">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-bold tracking-[0.25em] text-brand uppercase">
              MAHADEV FITNESS SURAT
            </span>
            <span className="text-zinc-600">/</span>
            <span className="text-xs text-zinc-400 uppercase tracking-widest font-mono">
              {currentIndex + 1} of {items.length}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-brand transition-colors focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Previous Navigation Arrow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-brand text-white transition-all duration-300 focus:outline-none backdrop-blur-md group"
          aria-label="Previous Facility Image"
        >
          <ChevronLeft className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" />
        </button>

        {/* Next Navigation Arrow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-brand text-white transition-all duration-300 focus:outline-none backdrop-blur-md group"
          aria-label="Next Facility Image"
        >
          <ChevronRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Main Modal Image & Caption Container */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 max-w-5xl max-h-[85vh] p-4 sm:p-6 flex flex-col items-center"
        >
          <div className="relative rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-dark-900 max-h-[70vh]">
            <img
              src={currentItem.image}
              alt={currentItem.alt}
              className="max-h-[70vh] w-auto object-contain rounded-xl"
            />
          </div>

          <div className="mt-4 text-center">
            <span className="text-xs uppercase tracking-widest text-brand font-semibold block mb-1">
              {currentItem.category}
            </span>
            <h4 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-wider">
              {currentItem.title}
            </h4>
            <p className="text-xs text-zinc-400 font-light mt-1">
              Yogi Chowk, Nana Varachha, Surat Facility Floor
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
