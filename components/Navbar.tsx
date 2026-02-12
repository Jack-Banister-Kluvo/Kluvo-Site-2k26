
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onCtaClick: () => void;
  setView: (view: 'home' | 'pricing' | 'research' | 'case-studies' | 'about') => void;
  currentView: 'home' | 'pricing' | 'research' | 'case-studies' | 'admin' | 'about';
}

const Navbar: React.FC<NavbarProps> = ({ onCtaClick, setView, currentView }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || currentView !== 'home' ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Left Side: Logo and Navigation Links */}
        <div className="flex items-center gap-10">
          <button onClick={() => setView('home')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#0d2b23] rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-lg shadow-[#0d2b23]/10">
              <svg viewBox="0 0 100 100" className="w-6 h-6 fill-none stroke-white" style={{ strokeWidth: 12, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                <path d="M45 20 H35 C25 20 20 25 20 35 V65 C20 75 25 80 35 80 H45" />
                <path d="M45 50 L75 20 M45 50 L75 80" />
              </svg>
            </div>
            <span className="text-2xl font-black tracking-tighter text-[#0d2b23] lowercase hidden sm:block">kluvo</span>
          </button>

          <div className="hidden lg:flex items-center gap-8 border-l border-slate-100 pl-10">
            <button
              onClick={() => setView('case-studies')}
              className={`text-sm uppercase tracking-widest font-bold transition-colors ${currentView === 'case-studies' ? 'text-[#0d2b23] border-b-2 border-[#0d2b23]' : 'text-[#61756f] hover:text-[#0d2b23]'}`}
            >
              Case Studies
            </button>
            <button
              onClick={() => setView('pricing')}
              className={`text-sm uppercase tracking-widest font-bold transition-colors ${currentView === 'pricing' ? 'text-[#0d2b23] border-b-2 border-[#0d2b23]' : 'text-[#61756f] hover:text-[#0d2b23]'}`}
            >
              Pricing
            </button>
            <button
              onClick={() => setView('about')}
              className={`text-sm uppercase tracking-widest font-bold transition-colors ${currentView === 'about' ? 'text-[#0d2b23] border-b-2 border-[#0d2b23]' : 'text-[#61756f] hover:text-[#0d2b23]'}`}
            >
              About
            </button>
            <button
              onClick={() => setView('research')}
              className={`text-sm uppercase tracking-widest font-bold transition-colors ${currentView === 'research' ? 'text-[#0d2b23] border-b-2 border-[#0d2b23]' : 'text-[#61756f] hover:text-[#0d2b23]'}`}
            >
              Research
            </button>
          </div>
        </div>

        {/* Right Side: CTA */}
        <div className="flex items-center gap-4">
          <button
            data-cal-link="sales-team/sales-discovery"
            data-cal-namespace="sales-discovery"
            data-cal-config='{"layout":"month_view","theme":"light"}'
            className="bg-[#0d2b23] hover:bg-[#2e4841] text-white px-7 py-3 rounded-xl font-bold transition-all active:scale-95 shadow-xl shadow-[#0d2b23]/20"
          >
            Book a call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
