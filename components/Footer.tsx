
import React from 'react';

interface FooterProps {
  setView: (view: 'home' | 'pricing' | 'research' | 'case-studies' | 'about') => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {/* Brand Info */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#0d2b23] rounded-xl flex items-center justify-center shadow-lg shadow-[#0d2b23]/10">
                <svg viewBox="0 0 100 100" className="w-6 h-6 fill-none stroke-white" style={{ strokeWidth: 12, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                  <path d="M45 20 H35 C25 20 20 25 20 35 V65 C20 75 25 80 35 80 H45" />
                  <path d="M45 50 L75 20 M45 50 L75 80" />
                </svg>
              </div>
              <span className="text-2xl font-black text-[#0d2b23] lowercase tracking-tighter">kluvo</span>
            </div>
            <p className="text-[#61756f] font-medium mb-8 leading-relaxed max-w-xs text-sm">
              B2B Lead Generation Agency helping companies generate $12m+ in revenue through strategic outbound.
            </p>
            <div className="space-y-4">
              <a href="mailto:Support@kluvo.co.uk" className="block text-[#0d2b23] hover:text-[#2e4841] font-bold transition-colors underline decoration-[#9daaa6] underline-offset-4">support@kluvo.co.uk</a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:pl-20">
            <h4 className="font-bold text-[#0d2b23] mb-8 text-xs uppercase tracking-[0.2em]">Navigation</h4>
            <ul className="space-y-4">
              <li><button onClick={() => setView('home')} className="text-[#61756f] hover:text-[#0d2b23] transition-colors font-bold text-sm">Home</button></li>
              <li><button onClick={() => setView('pricing')} className="text-[#61756f] hover:text-[#0d2b23] transition-colors font-bold text-sm">Pricing</button></li>
              <li><button onClick={() => setView('about')} className="text-[#61756f] hover:text-[#0d2b23] transition-colors font-bold text-sm">About</button></li>
              <li><button onClick={() => setView('research')} className="text-[#61756f] hover:text-[#0d2b23] transition-colors font-bold text-sm">Research</button></li>
            </ul>
          </div>

          {/* Social */}
          <div className="lg:pl-20">
            <h4 className="font-bold text-[#0d2b23] mb-8 text-xs uppercase tracking-[0.2em]">Connect</h4>
            <div className="flex gap-4">
              {[
                { label: 'LI', href: 'https://www.linkedin.com/company/kluvosales' },
                { label: 'IG', href: 'https://www.instagram.com/kluvo.co.uk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' }
              ].map(social => (
                <a 
                  key={social.label} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-[#fcfcfc] border border-slate-100 flex items-center justify-center text-[#9daaa6] text-xs font-black hover:bg-[#0d2b23] hover:text-white transition-all hover:-translate-y-1 shadow-sm"
                >
                  {social.label}
                </a>
              ))}
            </div>
            <p className="mt-8 text-[11px] text-[#9daaa6] font-medium leading-relaxed max-w-[200px]">
              Stay updated with our latest research and B2B growth blueprints on LinkedIn and Instagram.
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 text-[#9daaa6] text-[10px] font-black uppercase tracking-widest">
          <p>© 2026 Kluvo Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
