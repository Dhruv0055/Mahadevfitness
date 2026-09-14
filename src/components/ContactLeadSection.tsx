import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, CheckCircle, ArrowUpRight, Dumbbell } from 'lucide-react';
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
      `Hello The Body Lab Surat! I would like to enquire about membership for ${formData.fitnessGoal || 'training'}.`
    );
    window.open(`https://wa.me/918320102460?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-12 sm:py-20 lg:py-28 bg-[#08090C] border-t border-white/[0.08] overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-12"
        >
          <div className="inline-flex items-center space-x-2 text-[#FF2626] font-mono text-xs tracking-widest uppercase mb-2 font-bold">
            <span className="w-4 h-[2px] bg-[#FF2626]" />
            <span>START YOUR TRAINING</span>
            <span className="w-4 h-[2px] bg-[#FF2626]" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none mb-2 sm:mb-3">
            READY TO <span className="text-[#FF2626]">START?</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-normal">
            Reach our front desk directly in Nana Varachha or request a consultation.
          </p>
        </motion.div>

        {/* Action Buttons - side by side 3-col on mobile! */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          <button
            onClick={() => {
              const el = document.getElementById('lead-form');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary-red flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 py-3 sm:py-3.5 px-2 sm:px-4 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg hover:-translate-y-1 transition-all"
          >
            <Dumbbell className="w-4 h-4 shrink-0" />
            <span className="truncate">JOIN GYM</span>
          </button>

          <a
            href="tel:+918320102460"
            className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 py-3 sm:py-3.5 px-2 sm:px-4 bg-[#0E1015] hover:bg-zinc-900 hover:border-[#FF2626]/50 text-white border border-white/10 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md hover:-translate-y-1"
          >
            <Phone className="w-4 h-4 text-[#FF2626] shrink-0" />
            <span className="truncate">CALL NOW</span>
          </a>

          <button
            onClick={handleWhatsAppDirect}
            className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 py-3 sm:py-3.5 px-2 sm:px-4 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] hover:text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md hover:-translate-y-1"
          >
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span className="truncate">WHATSAPP</span>
          </button>
        </motion.div>

        {/* Lead Form Box */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          id="lead-form"
          className="max-w-2xl mx-auto"
        >
          <div className="bg-[#0E1015] p-5 sm:p-10 rounded-xl sm:rounded-2xl border border-white/[0.08] shadow-2xl relative">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5"
                >
                  <div className="border-b border-white/[0.08] pb-3 sm:pb-4 mb-4 sm:mb-6">
                    <h3 className="font-display text-xl sm:text-2xl text-white font-bold tracking-tight">
                      REQUEST MEMBERSHIP CONSULTATION
                    </h3>
                    <p className="text-xs text-zinc-400 font-normal mt-1">
                      Our front desk at Nana Varachha, Surat will contact you to arrange your pass.
                    </p>
                  </div>

                  {/* Full Name & Phone in 2 cols on mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Patel"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#08090C] border border-white/10 focus:border-[#FF2626] focus:ring-1 focus:ring-[#FF2626] rounded-lg px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 83201 02460"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="w-full bg-[#08090C] border border-white/10 focus:border-[#FF2626] focus:ring-1 focus:ring-[#FF2626] rounded-lg px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Fitness Goal */}
                  <div>
                    <label className="block text-[10px] sm:text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold">
                      Primary Fitness Goal *
                    </label>
                    <select
                      value={formData.fitnessGoal}
                      onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                      className="w-full bg-[#08090C] border border-white/10 focus:border-[#FF2626] focus:ring-1 focus:ring-[#FF2626] rounded-lg px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                    >
                      {goalOptions.map((goal) => (
                        <option key={goal} value={goal} className="bg-[#0E1015] text-white">
                          {goal}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-[10px] sm:text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold">
                      Preferred Contact Method
                    </label>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {contactMethods.map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredContact: method })}
                          className={`py-2 sm:py-2.5 px-2 rounded-lg text-[10px] sm:text-xs font-mono uppercase tracking-wider border transition-all truncate ${
                            formData.preferredContact === method
                              ? 'bg-[#FF2626] text-white border-[#FF2626] shadow-md font-bold'
                              : 'bg-[#08090C] border-white/10 text-zinc-400 hover:text-white font-semibold'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 sm:pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary-red w-full py-3.5 sm:py-4 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg flex items-center justify-center space-x-2 group disabled:opacity-50 shadow-lg"
                    >
                      {isSubmitting ? (
                        <span>PROCESSING...</span>
                      ) : (
                        <>
                          <span>START MY JOURNEY</span>
                          <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[10px] sm:text-[11px] font-mono text-center text-zinc-500">
                    🔒 Privacy Assured. No spam. You will only receive membership details.
                  </p>
                </motion.form>
              ) : (
                /* Post Submission */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 sm:py-12 px-2 text-center flex flex-col items-center"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FF2626]/20 border border-[#FF2626] text-[#FF2626] flex items-center justify-center mb-4 sm:mb-6">
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2 sm:mb-3">
                    CONSULTATION REQUESTED
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 font-normal max-w-md mx-auto mb-6 sm:mb-8 leading-relaxed">
                    Thanks! The Body Lab team will contact you shortly to confirm your session and membership options.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full max-w-xs">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="w-full py-2.5 sm:py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold uppercase text-xs tracking-wider rounded-lg flex items-center justify-center space-x-2 shadow-lg"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="w-full py-2.5 sm:py-3 px-4 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-zinc-700"
                    >
                      Submit Another
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>

      </div>
    </section>
  );
};


