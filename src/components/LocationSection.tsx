import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Phone, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = "https://share.google/2BjOAnNhgow9Tl5RB";

  return (
    <section id="location" className="relative py-20 sm:py-28 lg:py-36 bg-[#0E1015] border-t border-white/[0.08] overflow-hidden text-white">
      
      {/* Background Graphic Watermark */}
      <div className="absolute bottom-4 left-6 pointer-events-none select-none opacity-5 hidden lg:block">
        <span className="font-display text-[15rem] font-black uppercase text-white leading-none">
          SURAT
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Gymate Style Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-white/[0.08]">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-3"
            >
              <div className="brush-badge bg-[#FF0336] text-white text-xs sm:text-sm font-black tracking-widest uppercase">
                FIND US IN SURAT
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.92] tracking-tight"
            >
              VISIT OUR <br className="hidden sm:inline" />
              <span className="text-[#FF0336] inline-block drop-shadow-[0_0_30px_rgba(255,3,54,0.5)]">
                TRAINING GROUND.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 md:mt-0 max-w-md"
          >
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
              Conveniently located at Mansarovar Society, near Ganga Jamuna, Yogi Chowk Road in Nana Varachha, Surat. Easy parking and ground floor access.
            </p>
            <a
              href="tel:08320102460"
              className="inline-flex items-center space-x-2 text-[#FF0336] font-mono text-xs font-bold hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Front Desk: +91 83201 02460</span>
            </a>
          </motion.div>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-[#141720] border-2 border-white/10 hover:border-[#FF0336] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300"
          >
            <div>
              {/* Gym Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#FF0336] text-white flex items-center justify-center font-display font-black text-xl shadow-md">
                  MF
                </div>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                    MAHADEV FITNESS GYM
                  </h3>
                  <span className="text-xs font-mono text-[#FF0336] font-bold tracking-wider uppercase block">
                    YOGI CHOWK PREMIER FACILITY
                  </span>
                </div>
              </div>

              {/* Verified Address */}
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 mb-6 space-y-1 text-xs sm:text-sm">
                <div className="flex items-center space-x-2 text-[#FF0336] font-bold mb-1">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Verified Address</span>
                </div>
                <p className="font-bold text-white">Near Ganga Jamuna</p>
                <p className="text-zinc-300">Mansarovar Society, Yogi Chowk Road</p>
                <p className="text-zinc-300">Nana Varachha, Surat</p>
                <p className="text-[#FF0336] font-bold font-mono">Gujarat 395010, India</p>
              </div>

              {/* Schedule */}
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 mb-2">
                  <Clock className="w-4 h-4 text-[#FF0336]" />
                  <span>TRAINING SHIFTS:</span>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-white/[0.04] border border-white/10 text-xs">
                  <span className="text-zinc-300">Morning Shift (Mon–Sat)</span>
                  <span className="font-bold text-white font-mono">5:30 AM – 10:30 AM</span>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-white/[0.04] border border-white/10 text-xs">
                  <span className="text-zinc-300">Evening Shift (Mon–Sat)</span>
                  <span className="font-bold text-white font-mono">5:00 PM – 10:00 PM</span>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-white/[0.04] border border-white/10 text-xs">
                  <span className="text-zinc-300">Sunday Recovery</span>
                  <span className="font-bold text-[#FF0336] font-mono">6:00 AM – 12:00 PM</span>
                </div>
              </div>
            </div>

            {/* Directions Button with Gymate Offset Frame */}
            <div className="relative group inline-block w-full">
              <div className="absolute top-1 left-1 w-full h-full border-2 border-white/40 group-hover:border-[#FF0336] transition-all pointer-events-none" />
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full bg-[#FF0336] hover:bg-[#E00230] text-white py-3.5 px-4 text-xs font-black uppercase tracking-wider flex items-center justify-center space-x-2 transition-transform active:translate-x-0.5 active:translate-y-0.5 shadow-xl shadow-[#FF0336]/30"
              >
                <Navigation className="w-4 h-4" />
                <span>OPEN ON GOOGLE MAPS (5.0 ★)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Interactive Map Embed */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-7 rounded-2xl overflow-hidden border-2 border-white/10 hover:border-[#FF0336] relative min-h-[360px] sm:min-h-[460px] shadow-2xl transition-all duration-300 bg-black"
          >
            <iframe
              title="Mahadev Fitness Gym Surat Google Map"
              src="https://maps.google.com/maps?q=Mahadev%20Fitness%20Gym%20Mansarovar%20Society%20Yogi%20Chowk%20Nana%20Varachha%20Surat%20395010&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[360px] sm:min-h-[460px]"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute top-4 left-4 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 shadow-2xl flex items-center space-x-2.5 pointer-events-none">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF0336] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                Live Pin: Mansarovar Society, Yogi Chowk
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
