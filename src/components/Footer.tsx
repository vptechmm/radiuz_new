import React from 'react';
import { Facebook } from 'lucide-react';
export default function Footer() {

  return (
    <footer id="footer" className="relative border-t border-slate-200/80 bg-transparent pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Centered Contact Box */}
        <div className="flex flex-col items-center justify-center pb-16 border-b border-slate-200/60 max-w-2xl mx-auto">
          
          {/* Contact Column */}
          <div className="w-full flex flex-col gap-4 text-center items-center">
            <h3 className="text-xl font-extrabold uppercase tracking-widest text-[#1638F9] mb-2 font-sans">Contact</h3>
            
            <div className="w-full flex flex-col gap-3 p-2 items-center text-center">
              <p className="text-sm text-slate-600 leading-relaxed max-w-md font-sans">
                <span className="font-bold text-slate-900">Address:</span> The Leaf Tower, Dhamma Thukha Kyaung Street, Hlaing, Yangon, Myanmar
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                <span className="font-bold text-slate-900">Email:</span> <a href="mailto:info@radiuz.net" className="text-[#1638F9] font-bold hover:text-blue-700 transition-colors hover:underline">info@radiuz.net</a>
              </p>
            </div>

            {/* Socials & Action */}
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center justify-center">
                <a 
                  href="https://www.facebook.com/radiuztool"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#1638F9] border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
                  aria-label="Facebook Profile"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom meta */}
        <div className="pt-8 text-center">
          <p className="text-slate-400 text-xs font-normal">
            &copy; 2026 Radiuz Company Limited, All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
