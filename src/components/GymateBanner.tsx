import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, MapPin, Clock } from 'lucide-react';

interface GymateBannerProps {
  onJoinClick: () => void;
}

export const GymateBanner: React.FC<GymateBannerProps> = ({ onJoinClick }) => {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-r from-[#FF0336] via-[#D6022C] to-[#B30022] text-white overflow-hidden shadow-2xl">
      
      {/* Decorative Diagonal Stripes / Watermark */}
      <div className="absolute inset-0 opacity-10 bg-grid-minimal pointer-events-none" />
      <div className="absolute -right-16 -bottom-16 pointer-events-none select-none opacity-15">
        <span className="font-display text-9xl sm:text-[14rem] font-black uppercase text-white leading-none">
          TRAIN
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          {/* Left Text */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-3 text-white"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Admissions Open • Yogi Chowk, Surat</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.92] tracking-tight mb-4"
            >
              NEED A FITNESS TRAINER? <br />
              <span className="text-black inline-block bg-white px-3 py-0.5 rounded-md mt-1">
                CALL: 08320102460
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/90 text-sm sm:text-base leading-relaxed mb-4 font-medium"
            >
              Mansarovar Society, near Ganga Jamuna, Yogi Chowk. Morning (5:30–10:30 AM) & Evening (5:00–10:00 PM) shifts with dedicated guidance.
            </motion.p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/80">
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Yogi Chowk Road, Surat 395010</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Dual Daily Shifts</span>
              </div>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            {/* Gymate Hollow Offset Button */}
            <div className="relative group inline-block">
              <div className="absolute top-1.5 left-1.5 w-full h-full border-2 border-white group-hover:border-black transition-all pointer-events-none" />
              <button
                onClick={onJoinClick}
                className="relative bg-black group-hover:bg-zinc-900 text-white px-8 sm:px-10 py-4 text-xs sm:text-sm font-black uppercase tracking-wider flex items-center space-x-2 transition-transform active:translate-x-1 active:translate-y-1 shadow-2xl"
              >
                <span>JOIN CLASS NOW</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>

            <a
              href="tel:08320102460"
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 border-2 border-white px-6 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-white transition-all rounded-none"
            >
              <Phone className="w-4 h-4" />
              <span>DIRECT CALL</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
