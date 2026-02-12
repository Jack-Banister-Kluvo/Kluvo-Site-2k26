
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
            Are you the biggest risk <br className="hidden md:block"/> to your own business?
          </h1>

          {/* Video Container - The Centerpiece */}
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-[32px] md:rounded-[48px] overflow-hidden shadow-[0_40px_100px_rgba(13,43,35,0.12)] border border-slate-200 bg-white group mb-12">
            <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
               <img 
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600" 
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity" 
                 alt="Training Preview"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b23]/20 via-transparent to-transparent" />
               
               {/* High-Impact Play Button */}
               <button className="w-24 h-24 bg-[#0d2b23] rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 group-hover:shadow-[#0d2b23]/20">
                  <svg className="w-10 h-10 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
               </button>

               {/* Caption Bar Overlay - Refined for light theme */}
               <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#0d2b23] px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap shadow-2xl text-white">
                  Watch the masterclass
               </div>
            </div>
          </div>

          {/* Simple CTA Focus */}
          <div className="max-w-xl mx-auto text-center space-y-8">
            <p className="text-lg md:text-xl text-[#61756f] leading-relaxed font-bold">
              Receive actionable insights to scale your B2B engine <br className="hidden md:block"/> 
              without being the single point of failure.
            </p>
            
            <button 
              onClick={onCtaClick}
              className="glint-effect bg-[#0d2b23] text-white px-14 py-5 rounded-2xl text-xl font-black transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[#0d2b23]/20"
            >
              Secure Your Slot
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
