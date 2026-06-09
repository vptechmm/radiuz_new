import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import heroImage from '../../assets/Hero_Section.png';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-24 px-6 overflow-hidden flex flex-col items-center bg-transparent">
      {/* Decorative subtle light grid decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(22,56,249,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,56,249,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center gap-12 relative z-10 text-center">
        {/* Centered Tagline Copy */}
        <div id="hero-left" className="flex flex-col items-center gap-6 text-center max-w-3xl">
          {/* Badge */}
          <motion.div
            id="hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 text-xs font-bold tracking-wider uppercase backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-indigo-600" />
            Just essential features
          </motion.div>

          {/* Heading */}
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] text-center"
          >
            Simple ISP{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600">
              OSS/BSS
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            id="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Manage customers, subscriptions, billing, and daily operations from a single platform designed for modern ISPs.
          </motion.p>

          {/* Actions */}
          <motion.div
            id="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-2 w-full sm:w-auto"
          >
            <button
               id="hero-primary-btn"
              onClick={onContactClick}
              className="relative overflow-hidden group px-8 py-4 rounded-full text-base font-bold text-white bg-[#1638F9] hover:bg-blue-700 transition-all duration-300 cursor-pointer shadow-[0_8px_25px_rgba(22,56,249,0.35)] hover:shadow-[0_12px_30px_rgba(22,56,249,0.5)] flex-1 sm:flex-initial text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Try Radiuz Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>


        </div>

        {/* Centered Widescreen Image below the tagline */}
        <div id="hero-right-photo-panel" className="relative w-full max-w-6xl mx-auto z-10 mt-8 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative glass-premium p-4 sm:p-5 rounded-[40px] z-10 w-full shadow-2xl border border-white/60"
          >
            {/* Widescreen image container */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-[28px] overflow-hidden shadow-lg border border-slate-100 bg-white">
              {/* The high-resolution premium hero photo */}
              <img
                src={heroImage}
                alt="Radiuz dashboard preview"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none" />
            </div>
          </motion.div>

          {/* Liquid premium glowing shadow ring behind photo */}
          <div className="absolute top-[20%] bottom-[10%] left-[10%] right-[10%] bg-indigo-500/10 rounded-full blur-[100px] -z-10 pointer-events-none animate-pulse" />
        </div>
      </div>
    </section>
  );
}
