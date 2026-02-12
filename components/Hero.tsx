
import React from 'react';
import LogoTicker from './LogoTicker';

interface HeroProps {
  onCtaClick: () => void;
  // Added isDark and toggleDark to match usage in App.tsx and fix TypeScript errors
  isDark: boolean;
  toggleDark: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, isDark, toggleDark }) => {
  return (
    <section className="relative pt-40 pb-20 md:pt-64 md:pb-24 bg-[#fcfcfc] overflow-hidden">
      {/* Texture & Grain Overlay */}
      <div className="grain-overlay opacity-[0.01]" />

      {/* Main Depth Gradient */}
      <div className="absolute inset-0 bg-radial-at-t from-white via-transparent to-[#fcfcfc] pointer-events-none" />

      {/* 1. Large Liquid Background Shapes (The "Aura") - Refined for zero artifacts */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        {/* Extreme Blur Orbs to prevent visible edges/artifacts */}
        <div
          className="absolute top-[5%] left-[15%] w-[70%] h-[70%] bg-[#2e4841]/2 blur-[200px] animate-liquid"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute bottom-[0%] right-[0%] w-[60%] h-[60%] bg-[#9daaa6]/3 blur-[180px] animate-liquid"
          style={{ animationDelay: '-5s' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        <div className="px-6">
          <div className="inline-block mb-6 opacity-0 animate-reveal" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-[#61756f] font-bold tracking-[0.3em] text-xs md:text-sm mb-2 uppercase flex items-center gap-3 justify-center">
              <span className="w-8 h-[1px] bg-[#9daaa6]/40" />
              B2B LEAD GENERATION
              <span className="w-8 h-[1px] bg-[#9daaa6]/40" />
            </h2>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0d2b23] leading-[1.1] tracking-tight mb-8 drop-shadow-sm">
            <div className="opacity-0 animate-reveal" style={{ animationDelay: '0.3s' }}>Double your sales</div>
            <div className="opacity-0 animate-reveal" style={{ animationDelay: '0.5s' }}>
              <span className="text-[#2e4841] relative inline-block">
                opportunities
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#2e4841]/10 rounded-full" />
              </span>
            </div>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#61756f] mb-12 leading-relaxed font-medium px-4 opacity-0 animate-reveal" style={{ animationDelay: '0.7s' }}>
            We deliver 100–400+ qualified appointments in a year through tailored omnichannel strategies. Trusted by top B2B companies globally.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 opacity-0 animate-reveal" style={{ animationDelay: '0.9s' }}>
            <button
              onClick={onCtaClick}
              className="glint-effect w-full md:w-auto bg-[#0d2b23] hover:bg-[#2e4841] text-white px-12 py-5 rounded-2xl text-lg font-black transition-all shadow-2xl shadow-[#0d2b23]/20 active:scale-95 hover:-translate-y-1 z-20"
            >
              Get a quote
            </button>
          </div>
        </div>

        {/* Dynamic Logo Ticker Section */}
        <div className="opacity-0 animate-reveal" style={{ animationDelay: '1.2s' }}>
          <LogoTicker />
        </div>
      </div>
    </section>
  );
};

export default Hero;
