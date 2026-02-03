
import React, { useEffect, useRef } from 'react';

interface CalendarModalProps {
  onClose: () => void;
}

const CalendarModal: React.FC<CalendarModalProps> = ({ onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';
    
    // Create and append script
    const script = document.createElement('script');
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.style.overflow = 'unset';
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0d2b23]/60 backdrop-blur-md animate-in fade-in duration-500" 
        onClick={onClose} 
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-5xl bg-white rounded-[48px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col h-[90vh] md:h-[800px]">
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#0d2b23] rounded-xl flex items-center justify-center shadow-lg">
              <svg viewBox="0 0 100 100" className="w-6 h-6 fill-none stroke-white" style={{ strokeWidth: 12, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                <path d="M45 20 H35 C25 20 20 25 20 35 V65 C20 75 25 80 35 80 H45" />
                <path d="M45 50 L75 20 M45 50 L75 80" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-black text-[#0d2b23] tracking-tight">Book your discovery call</h3>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#61756f]">With Joseph Kennedy • Marketing Director</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-colors group"
          >
            <svg className="w-5 h-5 text-[#61756f] group-hover:text-[#0d2b23] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* HubSpot Embed Container */}
        <div className="flex-1 overflow-y-auto bg-[#fcfcfc] p-4">
          <div 
            className="meetings-iframe-container h-full w-full" 
            data-src="https://meetings-na2.hubspot.com/joseph-kennedy/sales-calendar?embed=true"
            ref={containerRef}
          >
            {/* The script will inject the iframe here */}
          </div>
        </div>
        
        {/* Footer info */}
        <div className="p-4 text-center border-t border-slate-50 bg-white">
          <p className="text-[9px] font-bold text-[#9daaa6] uppercase tracking-[0.3em]">
            Secured via HubSpot • Available Mon-Fri
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;
