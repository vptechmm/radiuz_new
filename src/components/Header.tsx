import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { ActiveTab } from '../types';
import { navigationItems } from '../data';
import Logo from './Logo';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  activeSection?: string;
  onScrollToSection: (sectionId: string) => void;
  onContactClick: () => void;
}

export default function Header({ activeTab, setActiveTab, activeSection = 'features', onScrollToSection, onContactClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: typeof navigationItems[0]) => {
    setMobileMenuOpen(false);
    if (item.isPage) {
      setActiveTab(item.id as ActiveTab);
      // Wait a frame for page render, then scroll to top
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    } else {
      if (activeTab !== 'home') {
        setActiveTab('home');
        setTimeout(() => {
          onScrollToSection(item.id);
        }, 150);
      } else {
        onScrollToSection(item.id);
      }
    }
  };

  return (
    <motion.header
      id="main-header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-white/70 backdrop-blur-md border-b border-slate-900/10 shadow-[0_4px_30px_rgba(0,0,0,0.04)]'
          : 'py-6 bg-transparent border-b border-white/0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          id="brand-logo"
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="cursor-pointer group flex items-center gap-2"
        >
          <Logo iconSize="w-[36px] h-[36px]" textSize="text-2xl" />
        </div>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-1 bg-slate-900/5 border border-slate-900/5 p-1 rounded-full backdrop-blur-sm">
          {navigationItems.map((item) => {
            const isCurrent =
              item.isPage
                ? activeTab === item.id
                : activeTab === 'home' && activeSection === item.id;

            return (
              <button
                id={`nav-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`relative px-4 py-2 rounded-full text-sm transition-colors duration-300 cursor-pointer ${
                  isCurrent ? 'text-indigo-600 font-extrabold' : 'text-slate-600 hover:text-slate-900 font-semibold'
                }`}
              >
                {isCurrent && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute inset-0 bg-white border border-slate-200 rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Call to Action Button */}
        <div id="cta-button-container" className="hidden md:flex items-center gap-4">
          <button
            id="header-launch-btn"
            onClick={onContactClick}
            className="relative overflow-hidden group px-5 py-2.5 rounded-full text-sm font-bold text-white bg-[#1638F9] hover:bg-blue-700 transition-all duration-300 cursor-pointer shadow-[0_4px_14px_rgba(22,56,249,0.3)] hover:shadow-[0_6px_20px_rgba(22,56,249,0.45)]"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Try Radiuz Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-900/5 hover:bg-slate-900/10 border border-slate-900/10 text-slate-700 hover:text-slate-950 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-slate-900/10 bg-white/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navigationItems.map((item) => {
                const isCurrent =
                  item.isPage
                    ? activeTab === item.id
                    : activeTab === 'home' && activeSection === item.id;

                return (
                  <button
                    id={`mobile-nav-${item.id}`}
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className={`text-left text-lg font-bold py-2 border-b border-slate-100 last:border-0 ${
                      isCurrent ? 'text-indigo-600 font-extrabold' : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <button
                id="mobile-launch-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full mt-2 py-3 bg-[#1638F9] hover:bg-blue-700 rounded-2xl font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Try Radiuz Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
