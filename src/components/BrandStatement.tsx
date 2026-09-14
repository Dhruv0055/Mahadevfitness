import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Shield } from 'lucide-react';

export const BrandStatement: React.FC = () => {
  return (
    <section id="about" className="relative py-28 sm:py-36 bg-[#0B0D12] border-t border-b border-white/[0.08] overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-minimal opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Two-Column Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 sm:mb-20">
          
          <div className="lg:col-span-6">
            <div className="flex items-center space-x-2 text-brand font-mono text-xs tracking-widest uppercase mb-4 font-medium">
              <span className="w-4 h-[1px] bg-brand" />
              <span>THE BODY LAB MANIFESTO</span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.02]">
              THIS ISN'T <br />
              <span className="text-zinc-500">JUST A</span> <span className="text-brand">GYM.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-lg sm:text-2xl text-zinc-300 font-normal leading-relaxed mb-6">
              It's where <span className="text-white font-semibold underline decoration-brand underline-offset-8">discipline becomes routine</span>, effort becomes progress, and your goals become <span className="text-brand font-semibold">measurable results</span>.
            </p>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              Founded in Nana Varachha, Surat with one singular standard: to eliminate gimmicks, generic routines, and crowded chaos. We deliver an athletic environment engineered for serious lifters, busy professionals, and transformation candidates.
            </p>
          </div>

        </div>

        {/* 3 Value Cards with High-End Minimal Finish */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-8 rounded-xl bg-dark-900/90 border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-semibold text-brand tracking-widest">
                  // STANDARD 01
                </span>
                <Target className="w-5 h-5 text-zinc-400 group-hover:text-brand transition-colors" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-white font-bold mb-3">
                STRUCTURED PROGRESSION
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Workouts configured for progressive overload. We record load volume and mechanical execution to ensure continuous physiological adaptation.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-400">
              FOCUS: HYPERTROPHY & POWER
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-8 rounded-xl bg-dark-900/90 border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-semibold text-brand tracking-widest">
                  // STANDARD 02
                </span>
                <Zap className="w-5 h-5 text-zinc-400 group-hover:text-brand transition-colors" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-white font-bold mb-3">
                UNCOMPROMISED ATMOSPHERE
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                A high-energy, respectful training ground. Clean acoustics, focused lighting, and members who share your drive for self-improvement.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-400">
              FOCUS: PERFORMANCE CULTURE
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-8 rounded-xl bg-dark-900/90 border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-semibold text-brand tracking-widest">
                  // STANDARD 03
                </span>
                <Shield className="w-5 h-5 text-zinc-400 group-hover:text-brand transition-colors" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-white font-bold mb-3">
                DIRECT ACCOUNTABILITY
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Consistency is coached and celebrated. From check-ins to form guidance, our trainers keep you on track until targets are met.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-400">
              FOCUS: SUSTAINED HABITS
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
