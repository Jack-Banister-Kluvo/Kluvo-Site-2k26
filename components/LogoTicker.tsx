
import React from 'react';

interface LogoItem {
  name: string;
  icon: React.ReactNode;
  color?: string;
}

const CLIENT_LOGOS: LogoItem[] = [
  {
    name: 'Auxo',
    icon: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current">
        <path d="M50 10 L90 90 H75 L50 40 L25 90 H10 Z" />
      </svg>
    ),
    color: 'text-[#9d174d]'
  },
  {
    name: 'outbound solutions',
    icon: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-none stroke-current" strokeWidth="6">
        <rect x="10" y="25" width="80" height="50" rx="5" />
        <path d="M10 25 L50 55 L90 25" />
        <path d="M5 45 H25 M5 55 H20 M5 65 H15" />
      </svg>
    ),
    color: 'text-blue-500'
  },
  {
    name: 'outreach engine',
    icon: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current">
        <path d="M10 20 H90 V80 H10 Z M15 25 V75 H85 V25 L50 50 Z" />
        <path d="M80 20 L95 10 V30 Z" className="opacity-50" />
      </svg>
    ),
    color: 'text-indigo-600'
  },
  {
    name: 'pipeline upgrade',
    icon: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current">
        <circle cx="50" cy="50" r="30" className="opacity-20" />
        <path d="M40 70 L60 30 M55 35 L65 30 L60 40" />
        <path d="M30 60 A25 25 0 1 1 70 60" fill="none" stroke="currentColor" strokeWidth="8" />
      </svg>
    ),
    color: 'text-purple-500'
  },
  {
    name: 'transcount',
    icon: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current">
        <rect x="20" y="30" width="60" height="40" rx="4" />
        <path d="M60 40 H75 V60 H60 Z" className="opacity-50" />
        <circle cx="35" cy="75" r="8" />
        <circle cx="65" cy="75" r="8" />
      </svg>
    ),
    color: 'text-sky-400'
  },
  {
    name: 'public sector access',
    icon: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-none stroke-current" strokeWidth="6">
        <path d="M10 90 H90 M20 90 V40 M80 90 V40 M50 90 V40" />
        <path d="M15 40 L50 15 L85 40 Z" fill="currentColor" className="opacity-20" />
      </svg>
    ),
    color: 'text-blue-800'
  },
  {
    name: 'ispmint',
    icon: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current">
        <path d="M20 80 Q50 20 80 80 Q50 70 20 80" />
        <circle cx="50" cy="55" r="10" className="opacity-40" />
      </svg>
    ),
    color: 'text-emerald-500'
  },
  {
    name: 'ICS inc',
    icon: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-none stroke-current" strokeWidth="6">
        <circle cx="50" cy="50" r="40" />
        <path d="M10 50 H90 M50 10 V90" className="opacity-30" />
        <path d="M25 25 Q50 50 75 75" />
      </svg>
    ),
    color: 'text-slate-600'
  },
  {
    name: 'big red jelly',
    icon: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current">
        <path d="M30 40 Q50 20 70 40 Q85 60 70 80 Q50 90 30 80 Q15 60 30 40" />
        <circle cx="40" cy="85" r="4" />
        <circle cx="50" cy="85" r="4" />
        <circle cx="60" cy="85" r="4" />
      </svg>
    ),
    color: 'text-red-600'
  },
  {
    name: 'easy trades',
    icon: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current">
        <path d="M50 10 L90 50 L50 90 L10 50 Z" />
        <path d="M40 50 Q50 35 60 50 Q50 65 40 50" fill="white" />
      </svg>
    ),
    color: 'text-green-800'
  },
  {
    name: 'care champion',
    icon: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current">
        <path d="M50 40 L65 25 A10 10 0 0 1 85 45 L50 80 L15 45 A10 10 0 0 1 35 25 Z" />
        <circle cx="80" cy="20" r="8" className="text-red-500" />
      </svg>
    ),
    color: 'text-slate-800'
  },
  {
    name: 'garbanzo',
    icon: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-none stroke-current" strokeWidth="8">
        <circle cx="50" cy="50" r="35" />
        <path d="M75 50 H50 V65" strokeLinecap="round" />
      </svg>
    ),
    color: 'text-orange-600'
  },
  {
    name: 'eversite',
    icon: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current">
        <circle cx="30" cy="30" r="12" />
        <circle cx="30" cy="70" r="12" />
        <circle cx="70" cy="50" r="12" />
        <path d="M30 30 L70 50 L30 70 Z" className="opacity-20" />
      </svg>
    ),
    color: 'text-teal-600'
  },
  {
    name: 'step 8 up',
    icon: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current">
        <path d="M50 10 A20 20 0 1 0 50 50 A20 20 0 1 0 50 90 Q80 90 80 50 Q80 10 50 10" fill="none" stroke="currentColor" strokeWidth="12" />
      </svg>
    ),
    color: 'text-amber-500'
  },
  {
    name: 'hire with lumi',
    icon: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current">
        <path d="M50 15 L55 35 L75 40 L55 45 L50 65 L45 45 L25 40 L45 35 Z" />
        <path d="M80 70 L82 80 L90 82 L82 84 L80 94 L78 84 L70 82 L78 80 Z" className="opacity-40" />
      </svg>
    ),
    color: 'text-blue-400'
  },
  {
    name: 'suite creative',
    icon: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current">
        <rect x="25" y="25" width="50" height="50" rx="4" />
        <path d="M40 75 V85 H60 V75" className="opacity-50" />
        <path d="M45 40 H55 M45 50 H55 M45 60 H55" stroke="white" strokeWidth="4" />
      </svg>
    ),
    color: 'text-indigo-800'
  },
  {
    name: 'flarie',
    icon: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current">
        <path d="M50 10 C30 10 15 25 15 45 C15 70 50 90 50 90 C50 90 85 70 85 45 C85 25 70 10 50 10 Z" />
        <path d="M50 30 L60 55 L50 45 L40 55 Z" fill="white" className="opacity-60" />
      </svg>
    ),
    color: 'text-pink-500'
  },
  {
    name: 'spectra',
    icon: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current">
        <text x="50" y="75" textAnchor="middle" className="text-4xl font-black">S</text>
      </svg>
    ),
    color: 'text-black'
  },
  {
    name: 'cold email hackers',
    icon: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current">
        <path d="M20 30 H80 V45 L50 60 L20 45 Z" />
        <path d="M20 50 H80 V65 L50 80 L20 65 Z" className="opacity-50" />
      </svg>
    ),
    color: 'text-violet-900'
  }
];

const LogoTicker: React.FC = () => {
  return (
    <div className="mt-16 relative w-full overflow-hidden py-12">
      <div className="relative z-10 w-full">
        <p className="text-[#9daaa6] font-bold text-[10px] mb-10 uppercase tracking-[0.5em] opacity-80 text-center">
          Trusted by B2B Companies Globally
        </p>
        
        {/* Using CSS Mask Image for a perfectly smooth fade that eliminates "end artifacts" */}
        <div 
          className="flex w-full overflow-hidden select-none group relative"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >
          <div className="flex flex-nowrap gap-10 py-8 animate-marquee">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 bg-white border border-slate-50 pl-6 pr-8 py-5 rounded-[20px] shadow-sm hover:shadow-xl hover:border-[#2e4841]/20 transition-all duration-500 cursor-default flex items-center gap-4 group/item"
              >
                <div className={`w-10 h-10 flex items-center justify-center ${client.color || 'text-[#0d2b23]'} transition-transform group-hover/item:scale-110`}>
                  {client.icon}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm md:text-base font-black text-[#0d2b23] tracking-tight whitespace-nowrap">
                    {client.name}
                  </span>
                  <div className="h-0.5 w-0 group-hover/item:w-full bg-[#2e4841]/10 transition-all duration-500 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 80s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoTicker;
