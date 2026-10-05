import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, ArrowUpRight } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = "https://share.google/2BjOAnNhgow9Tl5RB";

  return (
    <section id="location" className="relative py-12 sm:py-20 lg:py-28 bg-[#08090C] border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-16 pb-6 sm:pb-8 border-b border-white/[0.08]"
        >
          <div>
            <div className="flex items-center space-x-2 text-[#FF2626] font-mono text-xs tracking-widest uppercase mb-3 font-bold">
              <span className="w-4 h-[2px] bg-[#FF2626]" />
              <span>YOGI CHOWK • NANA VARACHHA • SURAT</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
              FIND YOUR <span className="text-[#FF2626]">TRAINING GROUND.</span>
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-xs sm:text-base text-zinc-400 max-w-md font-normal leading-relaxed">
            Conveniently situated at Mansarovar Society, near Ganga Jamuna on Yogi Chowk Road in Nana Varachha, Surat.
          </p>
        </motion.div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-[#0E1015] border border-white/[0.08] hover:border-[#FF2626]/50 rounded-xl sm:rounded-2xl p-5 sm:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
          >
            <div>
              <div className="flex items-center space-x-3 mb-5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#FF2626]/15 border border-[#FF2626]/30 flex items-center justify-center text-[#FF2626]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                    MAHADEV FITNESS GYM
                  </h3>
                  <span className="text-[10px] font-mono text-[#FF2626] font-bold tracking-wider uppercase">
                    YOGI CHOWK PREMIER FACILITY
                  </span>
                </div>
              </div>

              {/* Verified Address */}
              <div className="space-y-1 text-zinc-300 text-xs sm:text-sm font-normal leading-relaxed mb-6 pl-3 sm:pl-4 border-l-2 border-[#FF2626]">
                <p className="font-bold text-white">Near Ganga Jamuna</p>
                <p>Mansarovar Society, Yogi Chowk Road</p>
                <p>Nana Varachha</p>
                <p className="text-[#FF2626] font-semibold">Surat, Gujarat 395010</p>
                <p className="text-xs text-zinc-500 font-mono">India</p>
              </div>

              {/* Schedule Stream */}
              <div className="pt-4 border-t border-white/[0.08] mb-6">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-200 mb-3">
                  <Clock className="w-3.5 h-3.5 text-[#FF2626]" />
                  <span>FACILITY SCHEDULE</span>
                </div>
                <div className="space-y-2 text-xs text-zinc-300">
                  <div className="flex justify-between py-1.5 border-b border-white/[0.06]">
                    <span className="text-zinc-400">Morning Shift (Mon–Sat)</span>
                    <span className="font-bold text-white font-mono">05:30 AM – 10:30 AM</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/[0.06]">
                    <span className="text-zinc-400">Evening Shift (Mon–Sat)</span>
                    <span className="font-bold text-white font-mono">05:00 PM – 10:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/[0.06]">
                    <span className="text-zinc-400">Sunday Sessions</span>
                    <span className="font-bold text-[#FF2626] font-mono">06:00 AM – 12:00 PM</span>
                  </div>
                </div>
                <p className="text-[10px] text-zinc-500 italic mt-2.5">
                  *Hours verified with gym front desk for holiday schedules.
                </p>
              </div>
            </div>

            {/* Directions Button */}
            <div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-red w-full py-3.5 sm:py-4 px-4 sm:px-6 text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center space-x-2 group shadow-lg"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Interactive Map Embed */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.08] hover:border-[#FF2626]/50 relative min-h-[300px] sm:min-h-[420px] shadow-xl transition-all duration-300"
          >
            <iframe
              title="Mahadev Fitness Gym Surat Google Map"
              src="https://maps.google.com/maps?q=Mahadev%20Fitness%20Gym%20Mansarovar%20Society%20Yogi%20Chowk%20Nana%20Varachha%20Surat%20395010&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[300px] sm:min-h-[420px]"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 p-2 sm:p-2.5 rounded-lg bg-[#08090C]/90 backdrop-blur-md border border-white/10 shadow-xl flex items-center space-x-2 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-[#FF2626] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-white">
                Live Pin: Mansarovar Society, Yogi Chowk
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};


