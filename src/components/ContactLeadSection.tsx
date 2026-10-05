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
    <section id="contact" className="relative py-16 sm:py-24 bg-[#F8F9FB] text-zinc-900 border-t border-zinc-200 overflow-hidden">
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header (Light Theme) */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-2.5"
          >
            <div className="brush-badge bg-[#FF0336] text-white text-xs sm:text-sm font-black tracking-widest uppercase">
              CONTACT US
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-zinc-950 leading-[0.95] tracking-tight mb-2.5"
          >
            Get In Touch <span className="text-[#FF0336]">With Us</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-xs sm:text-sm text-zinc-600 max-w-lg mx-auto leading-relaxed"
          >
            Speak directly with our front desk at Mansarovar Society, Yogi Chowk or reserve your workout shift online.
          </motion.p>
        </div>

        {/* Action Triggers */}
        <div className="grid grid-cols-3 gap-3 max-w-xl mx-auto mb-10">
          <button
            onClick={() => {
              const el = document.getElementById('lead-form');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#FF0336] hover:bg-[#E00230] text-white flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 py-3 px-3 text-[11px] font-black uppercase tracking-wider rounded-xl shadow-md active:scale-95 transition-all"
          >
            <Dumbbell className="w-4 h-4 shrink-0" />
            <span className="truncate">JOIN GYM</span>
          </button>

          <a
            href="tel:08320102460"
            className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 py-3 px-3 bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-900 text-[11px] font-black uppercase tracking-wider rounded-xl transition-all shadow-xs active:scale-95"
          >
            <Phone className="w-4 h-4 text-[#FF0336] shrink-0" />
            <span className="truncate">CALL NOW</span>
          </a>

          <button
            onClick={handleWhatsAppDirect}
            className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 py-3 px-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-emerald-800 text-[11px] font-black uppercase tracking-wider rounded-xl transition-all shadow-xs active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="truncate">WHATSAPP</span>
          </button>
        </div>

        {/* Lead Form Box */}
        <div id="lead-form" className="max-w-2xl mx-auto">
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-zinc-200 shadow-xl relative">
            
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
                  <div className="border-b border-zinc-100 pb-3 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF0336] font-bold block mb-0.5">
                      DESK INQUIRY & PASSES
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl text-zinc-950 font-black uppercase tracking-tight">
                      Request Membership Consultation
                    </h3>
                  </div>

                  {/* Full Name & Phone in 2 cols */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-600 mb-1.5 font-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Patel"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#FF0336] focus:ring-1 focus:ring-[#FF0336] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-600 mb-1.5 font-bold">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 83201 02460"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#FF0336] focus:ring-1 focus:ring-[#FF0336] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Fitness Goal */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-600 mb-1.5 font-bold">
                      Primary Fitness Goal *
                    </label>
                    <select
                      value={formData.fitnessGoal}
                      onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#FF0336] focus:ring-1 focus:ring-[#FF0336] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-900 focus:outline-none transition-colors"
                    >
                      {goalOptions.map((goal) => (
                        <option key={goal} value={goal} className="bg-white text-zinc-900">
                          {goal}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-600 mb-1.5 font-bold">
                      Preferred Contact Method
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {contactMethods.map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredContact: method })}
                          className={`py-2 px-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all border ${
                            formData.preferredContact === method
                              ? 'bg-[#FF0336] text-white border-[#FF0336] shadow-sm'
                              : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-600 mb-1.5 font-bold">
                      Note or Timing Preference (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Interested in morning shift (5:30 AM) or 1-on-1 personal trainer."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#FF0336] focus:ring-1 focus:ring-[#FF0336] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#FF0336] hover:bg-[#E00230] text-white py-3.5 px-6 text-xs sm:text-sm font-black uppercase tracking-wider rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-[#FF0336]/30 active:scale-95 transition-all disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'PROCESSING...' : 'SUBMIT MEMBERSHIP INQUIRY'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-3"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h4 className="font-display text-2xl font-black uppercase text-zinc-950 tracking-tight">
                    Inquiry Received!
                  </h4>
                  <p className="text-zinc-600 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Our front desk at Yogi Chowk will contact you via <strong>{formData.preferredContact}</strong> shortly.
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
                    className="mt-3 px-5 py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 rounded-lg text-xs font-mono font-bold uppercase tracking-wider"
                  >
                    Send Another Inquiry
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
