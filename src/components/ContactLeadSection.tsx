import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, CheckCircle, ArrowRight, Dumbbell } from 'lucide-react';
import type { LeadFormData } from '../types';

interface ContactLeadSectionProps {
  preselectedGoal?: string;
}

export const ContactLeadSection: React.FC<ContactLeadSectionProps> = ({ preselectedGoal }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phoneNumber: '',
    fitnessGoal: preselectedGoal || 'Muscle Building',
    preferredContact: 'WhatsApp',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const goalOptions = [
    'Muscle Building',
    'Fat Loss',
    'Strength',
    'General Fitness',
    'Personal Training',
    'Other'
  ];

  const contactMethods = ['WhatsApp', 'Phone Call', 'SMS'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Mahadev Fitness Gym Surat! I would like to enquire about membership for ${formData.fitnessGoal || 'training'}.`
    );
    window.open(`https://wa.me/918320102460?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-36 bg-[#08090C] border-t border-white/[0.08] overflow-hidden text-white">
      
      {/* Background Red Glow */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-[#FF0336]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header (Gymate Style) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-3"
          >
            <div className="brush-badge bg-[#FF0336] text-white text-xs sm:text-sm font-black tracking-widest uppercase">
              CONTACT US
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white leading-[0.92] tracking-tight mb-3"
          >
            GET IN TOUCH <span className="text-[#FF0336]">WITH US</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base text-zinc-400 font-normal max-w-xl mx-auto leading-relaxed"
          >
            Speak directly with our front desk at Mansarovar Society, Yogi Chowk or reserve your workout shift online.
          </motion.p>
        </div>

        {/* Quick Action Triggers */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-2xl mx-auto mb-10 sm:mb-14">
          <button
            onClick={() => {
              const el = document.getElementById('lead-form');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#FF0336] hover:bg-[#E00230] text-white flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 py-3 sm:py-3.5 px-2 sm:px-4 text-[10px] sm:text-xs font-black uppercase tracking-wider rounded-xl shadow-lg active:scale-95 transition-all"
          >
            <Dumbbell className="w-4 h-4 shrink-0" />
            <span className="truncate">JOIN GYM</span>
          </button>

          <a
            href="tel:08320102460"
            className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 py-3 sm:py-3.5 px-2 sm:px-4 bg-[#141720] hover:bg-zinc-900 border border-white/10 hover:border-[#FF0336] text-white text-[10px] sm:text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95"
          >
            <Phone className="w-4 h-4 text-[#FF0336] shrink-0" />
            <span className="truncate">CALL NOW</span>
          </a>

          <button
            onClick={handleWhatsAppDirect}
            className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 py-3 sm:py-3.5 px-2 sm:px-4 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 text-[#25D366] hover:text-white text-[10px] sm:text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95"
          >
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span className="truncate">WHATSAPP</span>
          </button>
        </div>

        {/* Lead Form Box */}
        <div id="lead-form" className="max-w-2xl mx-auto">
          <div className="bg-[#12141A] p-6 sm:p-10 rounded-3xl border-2 border-white/10 shadow-2xl relative">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="border-b border-white/10 pb-4 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF0336] font-bold block mb-1">
                      DESK INQUIRY & PASSES
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl text-white font-black uppercase tracking-tight">
                      REQUEST MEMBERSHIP CONSULTATION
                    </h3>
                  </div>

                  {/* Full Name & Phone in 2 cols */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5 font-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Patel"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-black/60 border border-white/10 focus:border-[#FF0336] focus:ring-1 focus:ring-[#FF0336] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5 font-bold">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 83201 02460"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="w-full bg-black/60 border border-white/10 focus:border-[#FF0336] focus:ring-1 focus:ring-[#FF0336] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Fitness Goal */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5 font-bold">
                      Primary Fitness Goal *
                    </label>
                    <select
                      value={formData.fitnessGoal}
                      onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                      className="w-full bg-black/60 border border-white/10 focus:border-[#FF0336] focus:ring-1 focus:ring-[#FF0336] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    >
                      {goalOptions.map((goal) => (
                        <option key={goal} value={goal} className="bg-[#12141A] text-white">
                          {goal}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5 font-bold">
                      Preferred Contact Method
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {contactMethods.map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredContact: method })}
                          className={`py-2.5 px-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all border ${
                            formData.preferredContact === method
                              ? 'bg-[#FF0336] text-white border-[#FF0336] shadow-md'
                              : 'bg-black/50 text-zinc-400 border-white/10 hover:text-white'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5 font-bold">
                      Note or Timing Preference (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Interested in morning shift (5:30 AM) or 1-on-1 personal trainer."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-black/60 border border-white/10 focus:border-[#FF0336] focus:ring-1 focus:ring-[#FF0336] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button with Gymate Offset Frame */}
                  <div className="pt-2">
                    <div className="relative group inline-block w-full">
                      <div className="absolute top-1 left-1 w-full h-full border-2 border-white/40 group-hover:border-[#FF0336] transition-all pointer-events-none" />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="relative w-full bg-[#FF0336] hover:bg-[#E00230] text-white py-4 px-6 text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center space-x-2 transition-transform active:translate-x-0.5 active:translate-y-0.5 shadow-xl shadow-[#FF0336]/30 disabled:opacity-50"
                      >
                        <span>{isSubmitting ? 'PROCESSING...' : 'SUBMIT MEMBERSHIP INQUIRY'}</span>
                        <ArrowRight className="w-4 h-4 stroke-[3]" />
                      </button>
                    </div>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-3xl font-black uppercase text-white tracking-tight">
                    INQUIRY RECEIVED!
                  </h4>
                  <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Our front desk at Yogi Chowk, Surat will contact you via <strong>{formData.preferredContact}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phoneNumber: '',
                        fitnessGoal: 'Muscle Building',
                        preferredContact: 'WhatsApp',
                        message: ''
                      });
                    }}
                    className="mt-4 px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-xs font-mono font-bold uppercase tracking-wider"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
};
