import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Phone, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = "https://share.google/2BjOAnNhgow9Tl5RB";

  return (
    <section id="location" className="relative py-16 sm:py-24 bg-white text-zinc-900 border-t border-zinc-200 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Light Theme) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 pb-6 border-b border-zinc-200">
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
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 uppercase leading-[0.95] tracking-tight"
            >
              Visit Our <br className="hidden sm:inline" />
              <span className="text-[#FF0336]">Training Ground</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 md:mt-0 max-w-md text-zinc-600 text-xs sm:text-sm leading-relaxed"
          >
            <p className="mb-2">
              Conveniently located at Mansarovar Society, near Ganga Jamuna, Yogi Chowk Road in Nana Varachha, Surat. Easy parking and ground floor access.
            </p>
            <a
              href="tel:08320102460"
              className="inline-flex items-center space-x-1.5 text-[#FF0336] font-mono text-xs font-bold hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Front Desk: +91 83201 02460</span>
            </a>
          </motion.div>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Details Card (Light Card with Red Accent) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-[#F9FAFB] border border-zinc-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm"
          >
            <div>
              {/* Brand Header */}
              <div className="flex items-center space-x-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#FF0336] text-white flex items-center justify-center font-display font-black text-lg shadow-sm">
                  MF
                </div>
                <div>
                  <h3 className="font-display text-2xl font-black text-zinc-950 uppercase tracking-tight">
                    MAHADEV FITNESS GYM
                  </h3>
                  <span className="text-xs font-mono text-[#FF0336] font-bold tracking-wider uppercase block">
                    YOGI CHOWK PREMIER FACILITY
                  </span>
                </div>
              </div>

              {/* Verified Address */}
              <div className="p-4 rounded-xl bg-white border border-zinc-200 mb-5 space-y-1 text-xs sm:text-sm">
                <div className="flex items-center space-x-2 text-[#FF0336] font-bold mb-1">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Verified Address</span>
                </div>
                <p className="font-bold text-zinc-900">Near Ganga Jamuna</p>
                <p className="text-zinc-600">Mansarovar Society, Yogi Chowk Road</p>
                <p className="text-zinc-600">Nana Varachha, Surat</p>
                <p className="text-[#FF0336] font-bold font-mono">Gujarat 395010, India</p>
              </div>

              {/* Shift Schedule */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 mb-1">
                  <Clock className="w-4 h-4 text-[#FF0336]" />
                  <span>TRAINING SHIFTS:</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-lg bg-white border border-zinc-200 text-xs">
                  <span className="text-zinc-600">Morning Shift (Mon–Sat)</span>
                  <span className="font-bold text-zinc-900 font-mono">5:30 AM – 10:30 AM</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-lg bg-white border border-zinc-200 text-xs">
                  <span className="text-zinc-600">Evening Shift (Mon–Sat)</span>
                  <span className="font-bold text-zinc-900 font-mono">5:00 PM – 10:00 PM</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-lg bg-white border border-zinc-200 text-xs">
                  <span className="text-zinc-600">Sunday Recovery</span>
                  <span className="font-bold text-[#FF0336] font-mono">6:00 AM – 12:00 PM</span>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#FF0336] hover:bg-[#E00230] text-white py-3 px-4 text-xs font-black uppercase tracking-wider rounded-lg flex items-center justify-center space-x-2 shadow-md active:scale-95 transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span>OPEN ON GOOGLE MAPS (5.0 ★)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7 rounded-2xl overflow-hidden border border-zinc-200 relative min-h-[340px] sm:min-h-[420px] shadow-md bg-zinc-100"
          >
            <iframe
              title="Mahadev Fitness Gym Surat Google Map"
              src="https://maps.google.com/maps?q=Mahadev%20Fitness%20Gym%20Mansarovar%20Society%20Yogi%20Chowk%20Nana%20Varachha%20Surat%20395010&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[340px] sm:min-h-[420px]"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-zinc-200 shadow-md flex items-center space-x-2 pointer-events-none">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF0336] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900">
                Live Pin: Mansarovar Society, Yogi Chowk
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
