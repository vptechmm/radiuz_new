import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ActiveTab } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoCloud from './components/LogoCloud';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [activeSection, setActiveSection] = useState<string>('features');
  const [pendingScrollSection, setPendingScrollSection] = useState<string | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = useCallback(() => {
    setIsContactModalOpen(true);
  }, []);

  const closeContactModal = useCallback(() => {
    setIsContactModalOpen(false);
  }, []);

  const openPrivacyPolicy = useCallback(() => {
    setActiveTab('privacy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const returnHome = useCallback(() => {
    setActiveTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (!isContactModalOpen) {
      document.body.style.overflow = '';
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsContactModalOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isContactModalOpen]);

  useEffect(() => {
    if (pendingScrollSection) {
      const targetTab = pendingScrollSection === 'contact' ? 'about' : 'home';
      if (activeTab !== targetTab) return;

      let attempts = 0;
      const interval = setInterval(() => {
        const el = document.getElementById(pendingScrollSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setPendingScrollSection(null);
          clearInterval(interval);
        } else {
          attempts++;
          if (attempts > 30) {
            setPendingScrollSection(null);
            clearInterval(interval);
          }
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [activeTab, pendingScrollSection]);

  useEffect(() => {
    if (activeTab !== 'home') return;

    const sections = ['features', 'logos', 'pricing'];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.25, rootMargin: '-20% 0px -45% 0px' }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, [activeTab]);

  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'contact') {
      if (activeTab !== 'about') {
        setPendingScrollSection('contact');
        setActiveTab('about');
      } else {
        const el = document.getElementById('contact');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      setPendingScrollSection(sectionId);
      if (activeTab !== 'home') {
        setActiveTab('home');
      }
    }
  };

  return (
    <div id="liquid-glass-app" className="relative min-h-screen text-slate-800 flex flex-col justify-between selection:bg-indigo-500/20 selection:text-indigo-900">
      {/* 
        MASTER BACKGROUND SYSTEM:
        Organic GPU-accelerated Liquid Blobs executing continuous 
        rotational and scaling translates underneath a blurry glass sheet 
      */}
      <div id="master-liquid-background" className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Blob 1: Subtle Primary Blue / Sky Blue */}
        <div className="absolute w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] rounded-full bg-gradient-to-tr from-indigo-600/10 via-sky-400/8 to-transparent top-[-10%] left-[-10%] blur-[100px] animate-blob-1" />
        
        {/* Blob 2: Cyan / Soft Primary Blue Transition */}
        <div className="absolute w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full bg-gradient-to-br from-cyan-400/8 via-indigo-500/8 to-transparent bottom-[15%] right-[-10%] blur-[120px] animate-blob-2" />
        
        {/* Blob 3: Soft Indigo / Lavender Violet */}
        <div className="absolute w-[400px] h-[400px] sm:w-[550px] sm:h-[550px] rounded-full bg-gradient-to-tr from-indigo-600/8 via-purple-300/6 to-transparent bottom-[-10%] left-[15%] blur-[90px] animate-blob-3" />
        
        {/* Subtle vignette layer - adapted with soft light glow */}
        <div className="absolute inset-0 bg-radial-gradient(circle at 50% 50%, transparent 60%, rgba(255, 255, 255, 0.4) 100%)" />
      </div>

      {/* Sticky frosted navbar header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeSection={activeSection}
        onScrollToSection={handleScrollToSection}
        onContactClick={openContactModal}
      />

      {/* Main Core Router Workspace */}
      <main className="flex-grow relative z-10 w-full">
        <AnimatePresence mode="wait">
          {activeTab === 'home' ? (
            <motion.div
              id="home-page-view"
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {/* LANDING PAGE MODULES */}
              <Hero onContactClick={openContactModal} />
              <Features />
              <LogoCloud />
              <Pricing onContactClick={openContactModal} />
              <CTA onContactClick={openContactModal} />
            </motion.div>
          ) : activeTab === 'about' ? (
            <motion.div
              id="about-page-view"
              key="about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {/* ABOUT US & CONTACT MODULES */}
              <AboutUs onContactClick={openContactModal} />
            </motion.div>
          ) : (
            <PrivacyPolicy onBackToHome={returnHome} />
          )}
        </AnimatePresence>
      </main>

      {/* Modern polished Footer */}
      <Footer onPrivacyPolicyClick={openPrivacyPolicy} />

      {isContactModalOpen && (
        <div
          className="fixed inset-0 z-[1000] grid place-items-center bg-slate-950/55 p-5 backdrop-blur-sm"
          role="presentation"
          onClick={closeContactModal}
        >
          <div
            className="relative w-[min(620px,100%)] overflow-hidden rounded-[20px] border border-slate-200/80 bg-white px-4 pb-3 pt-4 shadow-[0_28px_68px_rgba(15,23,42,0.28)]"
            role="dialog"
            aria-modal="true"
            aria-label="Contact us form"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900/8 text-[1.45rem] leading-none text-slate-700 transition-colors hover:bg-slate-900/15"
              aria-label="Close contact form"
              onClick={closeContactModal}
            >
              ×
            </button>
            <iframe
              data-tally-src="https://tally.so/embed/wQbZr7?hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Contact us"
              className="block min-h-[500px] w-full rounded-[12px] border-0 max-sm:h-[72vh] max-sm:min-h-[460px]"
              src="https://tally.so/embed/wQbZr7?hideTitle=1&transparentBackground=1&dynamicHeight=1"
            />
          </div>
        </div>
      )}
    </div>
  );
}
