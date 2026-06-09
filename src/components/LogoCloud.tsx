import React from 'react';
import { motion } from 'motion/react';
import { logoCloud } from '../data';

export default function LogoCloud() {
  const firstRowLogos = logoCloud;
  const secondRowLogos = logoCloud;

  // Triple repeat to guarantee seamless, infinite visual stream without whitespace gaps
  const firstRowDuplicated = [...firstRowLogos, ...firstRowLogos, ...firstRowLogos, ...firstRowLogos];
  const secondRowDuplicated = [...secondRowLogos, ...secondRowLogos, ...secondRowLogos, ...secondRowLogos];

  return (
    <section id="logos" className="relative py-28 px-6 overflow-hidden border-t border-slate-200/45 bg-[#f8fafc]">
      {/* Decorative ambient background blur */}
      <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-indigo-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-sky-500/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6"
          >
            Trusted by ISPs
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed"
          >
            A unified platform powering internet service providers across regions. Built for reliability, scale, and everyday operations.
          </motion.p>
        </div>

        {/* Outer scrolling container with blurred visual fade blocks on the edges */}
        <div className="relative w-full overflow-hidden flex flex-col gap-10 py-4">
          
          {/* Fade mask overlay left */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
          
          {/* Fade mask overlay right */}
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

          {/* FIRST STREAM: Scrolling Left */}
          <div className="relative overflow-hidden py-2">
            <div className="flex gap-16 sm:gap-24 items-center animate-marquee whitespace-nowrap hover:[animation-play-state:paused] select-none">
              {firstRowDuplicated.map((company, index) => {
                const uniqueKey = `first-${company.name}-${index}`;

                return (
                  <motion.div
                    id={`logo-row1-${company.name.toLowerCase().replace(/\s+/g, '-')}-${index}`}
                    key={uniqueKey}
                    initial={{ opacity: 0.4 }}
                    whileHover={{ 
                      scale: 1.05, 
                      opacity: 1,
                      transition: { duration: 0.15 } 
                    }}
                    className="flex items-center gap-4 cursor-pointer transition-all duration-300 opacity-60 hover:opacity-100 group shrink-0"
                  >
                    <div className="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-sm ring-1 ring-slate-200/80">
                      <img
                        src={company.logoSrc}
                        alt={`${company.name} logo`}
                        className="h-[60px] w-[60px] object-contain"
                      />
                    </div>
                    <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-600 group-hover:text-slate-900 transition-colors duration-300">
                      {company.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* SECOND STREAM: Scrolling Right */}
          <div className="relative overflow-hidden py-2 border-t border-slate-200/20 pt-8">
            <div className="flex gap-16 sm:gap-24 items-center animate-marquee-reverse whitespace-nowrap hover:[animation-play-state:paused] select-none">
              {secondRowDuplicated.map((company, index) => {
                const uniqueKey = `second-${company.name}-${index}`;

                return (
                  <motion.div
                    id={`logo-row2-${company.name.toLowerCase().replace(/\s+/g, '-')}-${index}`}
                    key={uniqueKey}
                    initial={{ opacity: 0.4 }}
                    whileHover={{ 
                      scale: 1.05, 
                      opacity: 1,
                      transition: { duration: 0.15 } 
                    }}
                    className="flex items-center gap-4 cursor-pointer transition-all duration-300 opacity-60 hover:opacity-100 group shrink-0"
                  >
                    <div className="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-sm ring-1 ring-slate-200/80">
                      <img
                        src={company.logoSrc}
                        alt={`${company.name} logo`}
                        className="h-[60px] w-[60px] object-contain"
                      />
                    </div>
                    <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-600 group-hover:text-slate-900 transition-colors duration-300">
                      {company.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
