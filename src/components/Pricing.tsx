import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface PricingProps {
  onContactClick: () => void;
}

export default function Pricing({ onContactClick }: PricingProps) {
  const [customers, setCustomers] = useState<number>(1000);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('yearly');

  // Constants
  const minCustomers = 1000;
  const maxCustomers = 10000;
  const step = 500;

  // Calculating prices based on billingPeriod
  const startupBase = 199000;
  const getStartupPriceInfo = () => {
    if (billingPeriod === 'yearly') {
      const discountedMonthly = Math.round(startupBase * 0.8);
      const totalYearly = discountedMonthly * 12;
      return {
        displayPrice: `${discountedMonthly.toLocaleString()} MMK`,
        period: '/ Month',
        highlight: `Billed USD/MMK annually: ${totalYearly.toLocaleString()} MMK/yr (Save 20%)`
      };
    }
    return {
      displayPrice: `${startupBase.toLocaleString()} MMK`,
      period: '/ Month',
      highlight: null
    };
  };

  const getProPriceInfo = () => {
    if (customers >= maxCustomers) {
      return { displayPrice: 'Contact Us', period: '', isContact: true, highlight: null };
    }
    const stepsAbove = (customers - minCustomers) / step;
    const baseMonthlyPrice = 299000 + stepsAbove * 50000;

    if (billingPeriod === 'yearly') {
      const discountedMonthly = Math.round(baseMonthlyPrice * 0.8);
      const totalYearly = discountedMonthly * 12;
      return {
        displayPrice: `${discountedMonthly.toLocaleString()} MMK`,
        period: '/ Month',
        isContact: false,
        highlight: `Billed USD/MMK annually: ${totalYearly.toLocaleString()} MMK/yr (Save 20%)`
      };
    }
    return {
      displayPrice: `${baseMonthlyPrice.toLocaleString()} MMK`,
      period: '/ Month',
      isContact: false,
      highlight: null
    };
  };

  const startupPriceInfo = getStartupPriceInfo();
  const proPriceInfo = getProPriceInfo();
  const sliderPercent = ((customers - minCustomers) / (maxCustomers - minCustomers)) * 100;

  return (
    <section id="pricing" className="relative py-28 px-6 overflow-hidden bg-transparent border-t border-slate-200/50">
      {/* Floating high-contrast liquid blobs to show off refraction under the glass */}
      <div className="absolute right-[-10%] top-[-10%] w-[500px] h-[500px] bg-indigo-500/10 blur-[130px] pointer-events-none rounded-full animate-blob-2" />
      <div className="absolute left-[-10%] bottom-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[130px] pointer-events-none rounded-full animate-blob-3" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6"
          >
            Simple, Transparent Pricing.
          </motion.h2>

          {/* Billing Switch */}
          <div className="flex justify-center items-center relative z-20">
            <div className="inline-flex items-center gap-1 p-1 rounded-full bg-slate-900/5 border border-slate-900/10 backdrop-blur-md shadow-sm">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`relative px-6 py-2 rounded-full text-xs transition-colors duration-300 cursor-pointer ${
                  billingPeriod === 'monthly'
                    ? 'text-indigo-600 font-extrabold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {billingPeriod === 'monthly' && (
                  <motion.div
                    layoutId="active-billing-indicator"
                    className="absolute inset-0 bg-white border border-slate-200/60 rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">Monthly Billing</span>
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`relative px-6 py-2 rounded-full text-xs transition-colors duration-300 cursor-pointer ${
                  billingPeriod === 'yearly'
                    ? 'text-indigo-600 font-extrabold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {billingPeriod === 'yearly' && (
                  <motion.div
                    layoutId="active-billing-indicator"
                    className="absolute inset-0 bg-white border border-slate-200/60 rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">Yearly Billing</span>
                <span className="absolute -top-3 -right-4 inline-flex items-center px-1.5 py-0.5 rounded-full bg-emerald-600 text-white text-[8px] font-black uppercase tracking-wider leading-none border border-white whitespace-nowrap shadow-sm">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto relative z-10">
          
          {/* 1. STARTUP TIER */}
          <motion.div
            id="pricing-card-startup"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative flex flex-col justify-between rounded-[32px] p-8 sm:p-10 glass-card border border-slate-200 hover:border-slate-400 hover:bg-white/60 hover:shadow-xl transition-all duration-300"
          >
            <div>
              <span className="inline-flex items-center px-4 py-1.5 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/35 rounded-full text-xs font-black tracking-widest text-emerald-700 uppercase mb-5 font-sans shadow-sm">
                Startup
              </span>

              <div className="flex flex-col gap-1 mb-5">
                <div className="flex items-baseline gap-1.5 border-b border-slate-100 pb-2">
                  <span className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-sans">
                    {startupPriceInfo.displayPrice}
                  </span>
                  <span className="text-slate-900/65 text-sm font-semibold uppercase tracking-wider font-sans shrink-0">
                    {startupPriceInfo.period}
                  </span>
                </div>
              </div>

              <div className="w-full h-px bg-slate-100 mb-8" />

              <ul className="space-y-3.5 mb-10">
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span>Up to 500 customers</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span>Customer management</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span>Unlimited NAS</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span>Unlimited Admins & Roles</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span>Billing & Payments</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span>Subscription Management</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span>Task Management</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span>Unlimited Sale Channels & Branch</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span>Many more</span>
                </li>
              </ul>
            </div>

            <button
              id="pricing-btn-startup"
              onClick={onContactClick}
              className="w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 cursor-pointer bg-[#1638F9] hover:bg-blue-700 text-white shadow-[0_4px_18px_rgba(22,56,249,0.25)] hover:shadow-[0_6px_22px_rgba(22,56,249,0.4)] flex items-center justify-center gap-2 group active:scale-98"
            >
              Try Radiuz Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* 2. PRO TIER (DYNAMIC WITH SLIDER) */}
          <motion.div
            id="pricing-card-pro"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative flex flex-col justify-between rounded-[32px] p-8 sm:p-10 bg-indigo-50/20 hover:bg-indigo-50/30 border-2 border-[#1638F9]/40 hover:border-[#1638F9] shadow-[0_0_35px_rgba(22,56,249,0.08)] hover:shadow-[0_0_40px_rgba(22,56,249,0.14)] scale-102 transition-all duration-300"
          >
            <div>
              <span className="inline-flex items-center px-4 py-1.5 bg-indigo-500/15 backdrop-blur-md border border-[#1638F9]/30 rounded-full text-xs font-black tracking-widest text-[#1638F9] uppercase mb-5 font-sans shadow-sm">
                Pro
              </span>

              <div className="flex flex-col gap-1 mb-5">
                <div className="flex items-baseline gap-1.5 border-b border-indigo-100/30 pb-2">
                  <span className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight transition-all duration-300 font-sans">
                    {proPriceInfo.displayPrice}
                  </span>
                  {proPriceInfo.period && (
                    <span className="text-slate-900/65 text-sm font-semibold uppercase tracking-wider font-sans shrink-0">
                      {proPriceInfo.period}
                    </span>
                  )}
                </div>
              </div>

              {/* Slider embedded directly inside the card */}
              <div className="flex items-center gap-4 py-2 mt-2 mb-8 relative">
                <span className="text-sm font-extrabold text-slate-800 font-sans tracking-wide shrink-0">
                  Customers
                </span>
                <div className="relative flex-1 flex items-center">
                  <input
                    id="pricing-customer-range"
                    type="range"
                    min={minCustomers}
                    max={maxCustomers}
                    step={step}
                    value={customers}
                    onChange={(e) => setCustomers(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#1638F9]/10 transition-all border border-slate-300/10
                      [&::-webkit-slider-thumb]:appearance-none 
                      [&::-webkit-slider-thumb]:w-5.5 
                      [&::-webkit-slider-thumb]:h-5.5 
                      [&::-webkit-slider-thumb]:rounded-full 
                      [&::-webkit-slider-thumb]:bg-[#1638F9] 
                      [&::-webkit-slider-thumb]:border-2 
                      [&::-webkit-slider-thumb]:border-white 
                      [&::-webkit-slider-thumb]:shadow-[0_2px_6px_rgba(22,56,249,0.3)] 
                      [&::-webkit-slider-thumb]:transition-transform 
                      [&::-webkit-slider-thumb]:hover:scale-110 
                      [&::-webkit-slider-thumb]:active:scale-95
                      [&::-moz-range-thumb]:w-5.5 
                      [&::-moz-range-thumb]:h-5.5 
                      [&::-moz-range-thumb]:border-2 
                      [&::-moz-range-thumb]:border-white 
                      [&::-moz-range-thumb]:rounded-full 
                      [&::-moz-range-thumb]:bg-[#1638F9] 
                      [&::-moz-range-thumb]:shadow-[0_2px_6px_rgba(22,56,249,0.3)] 
                      [&::-moz-range-thumb]:transition-transform 
                      [&::-moz-range-thumb]:hover:scale-110 
                      [&::-moz-range-thumb]:active:scale-95"
                  />
                  
                  {/* Floating sticky tooltip count badge tracking the slider thumb */}
                  <div 
                    className="absolute -top-7 pointer-events-none transition-all duration-75 inline-flex items-center px-2 py-0.5 rounded bg-slate-900/85 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold font-sans shadow-md"
                    style={{ 
                      left: `${sliderPercent}%`,
                      transform: 'translateX(-50%)',
                      marginLeft: `${11 - (sliderPercent * 0.22)}px`
                    }}
                  >
                    <span>{customers.toLocaleString()}</span>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-slate-900/85 border-r border-b border-white/10 rotate-45" />
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-slate-100 mb-8" />

              <ul className="space-y-3.5 mb-10">
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span className="font-semibold text-slate-950">Up to {customers.toLocaleString()} customers</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span>Customer management</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span>Unlimited NAS</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span>Unlimited Admins & Roles</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span>Billing & Payments</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span>Subscription Management</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span>Task Management</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span>Unlimited Sale Channels & Branch</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span>Many more</span>
                </li>
              </ul>
            </div>

            <button
              id="pricing-btn-pro"
              onClick={onContactClick}
              className="w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 cursor-pointer bg-[#1638F9] hover:bg-blue-700 text-white shadow-[0_4px_18px_rgba(22,56,249,0.25)] hover:shadow-[0_6px_22px_rgba(22,56,249,0.4)] flex items-center justify-center gap-2 group active:scale-98"
            >
              Try Radiuz Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* 3. ULTRA TIER */}
          <motion.div
            id="pricing-card-ultra"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative flex flex-col justify-between rounded-[32px] p-8 sm:p-10 glass-card border border-slate-200 hover:border-slate-400 hover:bg-white/60 hover:shadow-xl transition-all duration-300"
          >
            <div>
              <span className="inline-flex items-center px-4 py-1.5 bg-purple-500/10 backdrop-blur-md border border-purple-500/35 rounded-full text-xs font-black tracking-widest text-purple-700 uppercase mb-5 font-sans shadow-sm">
                Ultra
              </span>

              <div className="flex flex-col gap-1 mb-5">
                <div className="flex items-baseline gap-1.5 border-b border-slate-100 pb-2">
                  <span className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-sans">
                    Contact Us
                  </span>
                </div>
              </div>

              <div className="w-full h-px bg-slate-100 mb-8" />

              <ul className="space-y-3.5 mb-10">
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span className="font-semibold text-slate-900">Unlimited customers</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span>Customer management</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span>Unlimited NAS</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span>Unlimited Admins & Roles</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span>Billing & Payments</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span>Subscription Management</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span>Task Management</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span>Unlimited Sale Channels & Branch</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-[13px]">
                  <div className="w-2 h-2 rounded-full bg-[#1638F9] shrink-0 mt-1.5" />
                  <span>Many more</span>
                </li>
              </ul>
            </div>

            <button
              id="pricing-btn-ultra"
              onClick={onContactClick}
              className="w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 cursor-pointer bg-[#1638F9] hover:bg-blue-700 text-white shadow-[0_4px_18px_rgba(22,56,249,0.25)] hover:shadow-[0_6px_22px_rgba(22,56,249,0.4)] flex items-center justify-center gap-2 group active:scale-98"
            >
              Try Radiuz Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>

        {/* Highlight footer text below the pricing cards about the yearly fee and total saving */}
      </div>
    </section>
  );
}
