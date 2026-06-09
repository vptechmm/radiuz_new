import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Compass } from 'lucide-react';
import CTA from './CTA';
import aboutUsImage from '../../assets/AboutUs.png';

interface AboutUsProps {
  onContactClick: () => void;
}

export default function AboutUs({ onContactClick }: AboutUsProps) {

  return (
    <div id="about-us-page" className="w-full relative z-10 bg-transparent">
      
      {/* 1. TOP HEADER & MAIN IMAGE HERO SECTION */}
      <section className="pt-32 pb-12 px-6 relative overflow-hidden bg-transparent">
        {/* Soft background glow */}
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/5 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          
          {/* Main Title of Vision & Mission section */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-sans">
              About Radiuz
            </h2>
          </div>

          {/* LARGE PHOTO HEADER NOW AT THE VERY TOP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full relative h-[240px] sm:h-[350px] lg:h-[400px] rounded-[32px] overflow-hidden shadow-md border border-slate-200/80 bg-slate-100 group"
          >
            {/* High-resolution widescreen glass refraction photography */}
            <img 
              src={aboutUsImage}
              alt="About Radiuz"
              className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]"
            />
            
            {/* Visual Glass Shading layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* 2. THE THREE FROSTED GLASS CARDS (About Radiuz, Our Mission, Our Vision) */}
      <section className="pb-24 px-6 relative bg-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-10 relative z-10">
          
          {/* CARD 1: About Radiuz Detail */}
          <motion.div
            id="team-cohesive-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-premium rounded-[32px] p-8 sm:p-12 border border-slate-200/80 shadow-lg relative overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-start text-left"
          >
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 blur-3xl rounded-full" />

            <div className="md:col-span-4 flex items-center md:flex-col md:items-start gap-4 relative z-10">
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-[#1638F9] shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-sans tracking-wider font-extrabold text-[#1638F9] block">
                  About Radiuz
                </span>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4 relative z-10">
              <h3 className="text-2xl font-extrabold text-slate-800 tracking-tight leading-snug">
                The Team
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Radiuz Company Limited builds modern OSS/BSS software that helps internet service providers run and scale their operations with ease. We focus on simplifying customer management, billing, subscriptions, and network access in one unified platform.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                By combining real-world ISP operational understanding with modern cloud engineering, we deliver affordable and scalable systems that reduce complexity, lower operational effort, and help providers grow efficiently.
              </p>
            </div>
          </motion.div>

          {/* CARD 2: Our Mission */}
          <motion.div
            id="vertical-mission"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-premium rounded-[32px] p-8 sm:p-12 border border-slate-200/80 shadow-lg relative overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-start text-left"
          >
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500/5 blur-3xl rounded-full" />

            <div className="md:col-span-4 flex items-center md:flex-col md:items-start gap-4 relative z-10">
              <div className="p-4 rounded-2xl bg-pink-50 border border-pink-100 text-pink-600 shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-sans tracking-wider font-extrabold text-pink-600 block">
                  Our Mission
                </span>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4 relative z-10">
              <h3 className="text-2xl font-extrabold text-slate-800 tracking-tight leading-snug">
                Our Mission
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To build modern ISP management software that unifies CRM, billing, subscriptions, FreeRADIUS, and operations into one streamlined platform—helping providers reduce complexity, lower operational costs, and scale with confidence.
              </p>
            </div>
          </motion.div>

          {/* CARD 3: Our Vision */}
          <motion.div
            id="vertical-vision"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-premium rounded-[32px] p-8 sm:p-12 border border-slate-200/80 shadow-lg relative overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-start text-left"
          >
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 blur-3xl rounded-full" />

            <div className="md:col-span-4 flex items-center md:flex-col md:items-start gap-4 relative z-10">
              <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 shrink-0">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-sans tracking-wider font-extrabold text-indigo-600 block">
                  Our Vision
                </span>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4 relative z-10">
              <h3 className="text-2xl font-extrabold text-slate-800 tracking-tight leading-snug">
                Our Vision
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To power the next generation of internet service providers with simple, scalable, and affordable OSS/BSS systems that make network operations effortless in a cloud-first world.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 4: CONTACT US */}
      <CTA 
        id="contact" 
        onContactClick={onContactClick} 
      />

    </div>
  );
}
