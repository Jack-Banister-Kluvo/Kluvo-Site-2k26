
import React from 'react';
import { KluvoLightBackground } from './BrandBackgrounds';

interface WorkshopPageProps {
  onExit: () => void;
  onCtaClick: () => void;
}

const WorkshopPage: React.FC<WorkshopPageProps> = ({ onExit, onCtaClick }) => {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#0d2b23] flex flex-col relative overflow-hidden">
      {/* Brand Background Asset */}
      <div className="absolute inset-0 opacity-60">
        <KluvoLightBackground />
      </div>

      {/* Nav */}
      <nav className="relative z-50 p-8 flex justify-between items-center max-w-7xl mx-auto w-full">
        <button onClick={onExit} className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#0d2b23] rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
            <svg viewBox="0 0 100 100" className="w-6 h-6 fill-none stroke-white" style={{ strokeWidth: 12, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
              <path d="M45 20 H35 C25 20 20 25 20 35 V65 C20 75 25 80 35 80 H45" />
              <path d="M45 50 L75 20 M45 50 L75 80" />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tighter text-[#0d2b23] lowercase">kluvo</span>
        </button>
        <button
          onClick={onCtaClick}
          className="text-[10px] font-black uppercase tracking-[0.3em] text-[#61756f] hover:text-[#0d2b23] transition-colors"
        >
          Book Your Call
        </button>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 md:py-16 text-center max-w-6xl mx-auto w-full">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 w-full">

          {/* Minimalist Headline */}
          <h1 className="text-4xl md:text-7xl font-black leading-[1] tracking-tighter mb-12 max-w-4xl mx-auto uppercase">
            10k Call tested Cold Call Script
          </h1>

          {/* Video Container - The Centerpiece */}
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-[32px] md:rounded-[48px] overflow-hidden shadow-[0_40px_100px_rgba(13,43,35,0.12)] border border-slate-200 bg-white group mb-12">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/vdHuNpBH0dw"
              title="Cold Call Script Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Simple CTA Focus */}
          <div className="max-w-xl mx-auto text-center space-y-8">
            <p className="text-lg md:text-xl text-[#61756f] leading-relaxed font-bold">
              This is our cold call script that has been used in over 10,000 calls to book us hundreds of booked appointments.
            </p>

            <button
              onClick={onCtaClick}
              className="glint-effect bg-[#0d2b23] text-white px-14 py-5 rounded-2xl text-xl font-black transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[#0d2b23]/20"
            >
              See how we can help
            </button>
          </div>
        </div>
      </div>

      {/* Minimal Footer */}
      <div className="h-20 flex items-center justify-center">
        <p className="text-[10px] font-black text-[#9daaa6] uppercase tracking-[0.4em]">
          Internal Training • Strictly Confidential
        </p>
      </div>
    </div>
  );
};

export default WorkshopPage;
