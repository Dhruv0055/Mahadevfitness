import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Activity, ArrowRight, ShieldCheck } from 'lucide-react';

interface WhyBodyLabProps {
  onExploreMore?: () => void;
}

export const WhyBodyLab: React.FC<WhyBodyLabProps> = ({ onExploreMore }) => {
  return (
    <section id="why-us" className="relative py-16 sm:py-24 lg:py-32 bg-white text-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Graphic Composition from Pin Design */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Background Dotted Grid Pattern */}
            <div className="absolute -top-10 left-4 sm:left-12 grid grid-cols-6 gap-2.5 opacity-40 z-0">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
              ))}
            </div>

            {/* Main Graphic Circle and Athlete Frame */}
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] aspect-square flex items-center justify-center">
              
              {/* Vibrant Red Half-Circle / Disc (Gymate Signature) */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute inset-4 sm:inset-6 rounded-full bg-[#FF0336] shadow-[0_20px_50px_rgba(255,3,54,0.35)] overflow-hidden flex items-center justify-center"
              >
                {/* Internal Graphic Waves */}
                <div className="absolute left-8 bottom-16 opacity-40">
                  <svg width="70" height="30" viewBox="0 0 70 30" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round">
                    <path d="M2 10L14 3L26 17L38 3L50 17L62 3L68 10" />
                    <path d="M2 20L14 13L26 27L38 13L50 27L62 13L68 20" />
                  </svg>
                </div>
              </motion.div>

              {/* Dynamic Athlete Photo with circular clip + breakout */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative z-10 w-[90%] h-[90%] rounded-full overflow-hidden border-4 border-white shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85"
                  alt="Mahadev Fitness Athlete Training"
                  className="w-full h-full object-cover object-center filter contrast-[1.1] scale-105 hover:scale-110 transition-transform duration-700"
                />
              </motion.div>

              {/* Vertical Watermark Text Outline: FITNESS (Gymate Style) */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 z-20 pointer-events-none select-none">
                <span className="font-display text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter watermark-outline opacity-70 block -rotate-90">
                  FITNESS
                </span>
              </div>
            </div>

          </div>

          {/* Right Text & Features Column from Pin Design */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Red Brush Badge from Pin */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-3"
            >
              <div className="brush-badge bg-[#FF0336] text-white text-xs sm:text-sm font-black tracking-widest uppercase">
                ABOUT MAHADEV FITNESS
              </div>
            </motion.div>

            {/* Display Headline with Curved Underline Accent from Pin */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative mb-5"
            >
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 uppercase leading-[0.95] tracking-tight">
                We Can Give A Shape <br />
                Of Your Body Here!
              </h2>
              {/* Curved Red Swoosh SVG Underline */}
              <div className="mt-2 text-[#FF0336]">
                <svg width="180" height="12" viewBox="0 0 180 12" fill="none">
                  <path d="M2 9C50 1.5 130 1.5 178 9" stroke="#FF0336" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
            </motion.div>

            {/* Descriptive Body Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl"
            >
              Mahadev Fitness Gym is Yogi Chowk’s premier workout center situated at Mansarovar Society, near Ganga Jamuna. Whether your focus is heavy powerlifting, aesthetic bodybuilding, or sustainable fat loss, our training environment and equipment will push you to your absolute peak.
            </motion.p>

            {/* 2 Feature Rows with Soft Rounded Red-Tinted Badges (Exact from Pin) */}
            <div className="space-y-6 mb-8">
              
              {/* Feature 1: Modern Equipment */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start space-x-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-[#FF0336] shrink-0 shadow-sm">
                  <Dumbbell className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-black text-zinc-900 uppercase tracking-tight mb-1">
                    Modern Equipment
                  </h3>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-md">
                    Surat's dedicated strength floor with Olympic barbells, calibrated cast plates, dumbbells up to 40+ kg, and biomechanical plate-loaded machines.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2: Body Fitness */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start space-x-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-[#FF0336] shrink-0 shadow-sm">
                  <Activity className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-black text-zinc-900 uppercase tracking-tight mb-1">
                    Body Fitness & Coaching
                  </h3>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-md">
                    Custom muscle splits, certified form correction, and personalized nutrition guidance engineered for real body transformations.
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Action / Shift Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-2 border-t border-zinc-100"
            >
              <div className="relative group inline-block">
                <div className="absolute top-1 left-1 w-full h-full border-2 border-zinc-900 group-hover:border-[#FF0336] transition-all pointer-events-none" />
                <a
                  href="#training"
                  onClick={(e) => {
                    if (onExploreMore) {
                      e.preventDefault();
                      onExploreMore();
                    }
                  }}
                  className="relative bg-zinc-950 group-hover:bg-[#FF0336] text-white px-7 py-3 text-xs font-black uppercase tracking-wider flex items-center space-x-2 transition-all shadow-md"
                >
                  <span>EXPLORE SESSIONS</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center space-x-2 text-xs font-mono text-zinc-600 font-bold bg-zinc-50 border border-zinc-200 px-3.5 py-2.5 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dual Shifts: 5:30-10:30 AM & 5-10 PM</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
