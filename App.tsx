
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Challenges from './components/Challenges';
import Pricing from './components/Pricing';
import Timeline from './components/Timeline';
import ValueProps from './components/ValueProps';
import OmnichannelFunnel from './components/OmnichannelFunnel';
import Footer from './components/Footer';
import LeadAssistant from './components/LeadAssistant';
import EnterpriseSection from './components/EnterpriseSection';
import TechStack from './components/TechStack';
import Research from './components/Research';
import ResearchControl from './components/ResearchControl';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import LeadMagnetWall from './components/LeadMagnetWall';
import WorkshopPage from './components/WorkshopPage';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

const App: React.FC = () => {
  const [showAssistant, setShowAssistant] = useState(false);
  const [view, setView] = useState<'home' | 'pricing' | 'research' | 'admin' | 'case-studies' | 'about' | 'resource' | 'workshop'>('home');
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    // Check for /resource route on initial load
    if (window.location.pathname === '/resource') {
      setView('resource');
    } else if (window.location.pathname === '/workbook') {
      setView('workshop');
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-[#9daaa6]/30 selection:text-[#0d2b23]">
      {view !== 'admin' && (
        <Navbar onCtaClick={() => { }} setView={setView} currentView={view} />
      )}

      <main className={view !== 'admin' ? "pt-20" : ""}>
        {view === 'home' && (
          <>
            <Hero onCtaClick={() => setView('pricing')} isDark={isDark} toggleDark={toggleDark} />
            <div className="bg-[#fcfcfc]">
              <Challenges />
            </div>
            <section className="py-20 bg-[#fcfcfc]">
              <OmnichannelFunnel />
            </section>
            <section id="process" className="py-24 bg-[#fcfcfc]">
              <Timeline />
            </section>
            <ValueProps onCtaClick={() => { }} />
          </>
        )}

        {view === 'pricing' && (
          <div className="animate-in fade-in duration-500">
            <section id="pricing" className="py-24 bg-white">
              <Pricing onCtaClick={() => { }} />
              <EnterpriseSection onCtaClick={() => { }} />
              <TechStack />
            </section>
          </div>
        )}

        {view === 'research' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Research onCtaClick={() => { }} />
          </div>
        )}

        {view === 'case-studies' && (
          <div className="animate-in fade-in duration-700">
            <CaseStudies />
          </div>
        )}

        {view === 'about' && (
          <div className="animate-in fade-in duration-700">
            <About />
          </div>
        )}

        {view === 'admin' && (
          <div className="animate-in zoom-in-95 duration-500">
            <ResearchControl onExit={() => setView('home')} />
          </div>
        )}

        {view === 'resource' && (
          <div className="animate-in zoom-in-95 duration-500 fixed inset-0 z-50 bg-[#fcfcfc]">
            <LeadMagnetWall
              onExit={() => {
                setView('home');
                window.history.pushState({}, '', '/');
              }}
              onSuccess={() => {
                setView('workshop');
                window.history.pushState({}, '', '/workbook');
                window.scrollTo(0, 0);
              }}
            />
          </div>
        )}

        {view === 'workshop' && (
          <div className="animate-in fade-in duration-500 fixed inset-0 z-50 bg-[#fcfcfc] overflow-y-auto">
            <WorkshopPage
              onExit={() => {
                setView('home');
                window.history.pushState({}, '', '/');
              }}
              onCtaClick={() => {
                // Determine CTA behavior - for now, maybe open the calendar or just scroll safely?
                // The workshop page has a "Secure Your Slot" button.
                // It might need to open the booking modal.
                const btn = document.querySelector('[data-cal-link="sales-team/sales-discovery"]');
                if (btn && btn instanceof HTMLElement) {
                  btn.click();
                }
              }}
            />
          </div>
        )}

        {view !== 'admin' && (
          <section className="py-24 bg-[#0d2b23] text-white text-center">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                Our clients close <span className="text-[#9daaa6]">25% more deals</span><br />with their dream accounts
              </h2>
              <button
                data-cal-link="sales-team/sales-discovery"
                data-cal-namespace="sales-discovery"
                data-cal-config='{"layout":"month_view","theme":"light"}'
                className="bg-white text-[#0d2b23] px-10 py-5 rounded-2xl text-xl font-black transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-black/40"
              >
                Book a call with Kluvo experts
              </button>
            </div>
          </section>
        )}
      </main>

      {view !== 'admin' && <Footer setView={setView} />}

      {showAssistant && (
        <div className="fixed inset-0 z-[60] flex items-center justify-end">
          <div className="absolute inset-0 bg-[#0d2b23]/40 backdrop-blur-sm" onClick={() => setShowAssistant(false)} />
          <div className="relative h-full w-full max-w-lg bg-white shadow-2xl animate-in slide-in-from-right duration-300">
            <LeadAssistant onClose={() => setShowAssistant(false)} />
          </div>
        </div>
      )}
      <SpeedInsights />
      <Analytics />
    </div>
  );
};

export default App;
