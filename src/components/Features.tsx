import React from 'react';
import { motion } from 'motion/react';
import { Users, Globe, ClipboardList, CreditCard, Wifi, MessageSquare, Package, Server, Lock, Sparkles } from 'lucide-react';
import { featuresData } from '../data';

const ICON_MAP: Record<string, any> = {
  Users: Users,
  Globe: Globe,
  ClipboardList: ClipboardList,
  CreditCard: CreditCard,
  Wifi: Wifi,
  MessageSquare: MessageSquare,
  Package: Package,
  Server: Server,
  Lock: Lock,
};

export default function Features() {
  return (
    <section id="features" className="relative py-28 px-6 overflow-hidden">
      {/* Floating high-contrast liquid blobs to show off refraction under the glass */}
      <div className="absolute -right-20 top-1/4 w-96 h-96 bg-indigo-500/20 blur-[130px] rounded-full pointer-events-none animate-blob-1" />
      <div className="absolute -left-20 bottom-1/4 w-[450px] h-[450px] bg-cyan-400/20 blur-[140px] rounded-full pointer-events-none animate-blob-2" />
      <div className="absolute left-1/3 top-1/2 w-80 h-80 bg-purple-400/15 blur-[120px] rounded-full pointer-events-none animate-blob-3" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div id="features-header" className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6"
          >
            A Complete OSS/BSS Solution.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed"
          >
            Simplify customer management, automate operations, and scale your ISP with powerful OSS/BSS tools built for modern providers.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, idx) => {
            const IconComp = ICON_MAP[feature.iconName] || Sparkles;

            return (
              <motion.div
                id={`feature-card-${feature.id}`}
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                className="group relative rounded-3xl p-8 glass-card hover:bg-white/60 hover:shadow-2xl hover:border-indigo-400/80 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Glass Edge Light Highlight */}
                <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-indigo-300/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div>
                  {/* Icon Header with custom frosted ring */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="relative p-3.5 rounded-2xl bg-white/50 border border-slate-200/50 group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all duration-300 shadow-sm backdrop-blur-md">
                      <IconComp className="w-6 h-6 text-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                      <div className="absolute inset-0 bg-indigo-500/10 blur opacity-0 group-hover:opacity-100 transition-all rounded-2xl animate-pulse" />
                    </div>
                  </div>

                  {/* Copy */}
                  <h3 className="text-xl font-extrabold text-slate-800 tracking-wide mb-3 group-hover:text-indigo-700 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm font-normal leading-relaxed group-hover:text-slate-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
