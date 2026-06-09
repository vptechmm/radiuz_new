import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

interface CTAProps {
  onContactClick: () => void;
  id?: string;
}

export default function CTA({ onContactClick, id = "cta" }: CTAProps) {
  return (
    <section id={id} className="relative py-20 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 max-w-5xl mx-auto rounded-full bg-gradient-to-r from-indigo-500/5 to-purple-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass-premium rounded-[40px] p-8 sm:p-12 lg:p-16 overflow-hidden border border-slate-200/80 text-center shadow-lg"
        >
          {/* Internal moving radial lamp highlights */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/5 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/5 blur-3xl rounded-full" />

          {/* Sparkly visual element */}
          <div className="inline-flex p-3 rounded-2xl bg-indigo-50 border border-indigo-100 mb-6">
            <Sparkles className="w-6 h-6 text-indigo-600 animate-spin-slow" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-2xl mx-auto leading-tight">
            Start Building a Smarter ISP
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-xl mx-auto mb-10 leading-relaxed">
            Everything you need to run and scale your ISP is waiting in one platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="cta-primary-btn"
              onClick={onContactClick}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1638F9] hover:bg-blue-700 active:scale-98 transition-all duration-300 cursor-pointer shadow-[0_8px_25px_rgba(22,56,249,0.35)] hover:shadow-[0_12px_30px_rgba(22,56,249,0.5)] flex items-center justify-center gap-2 group text-white font-bold text-base"
            >
              Try Radiuz Now <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
