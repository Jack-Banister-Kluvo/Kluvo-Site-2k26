import React, { useState } from 'react';
import CaseImage from './CaseImage';
import { CASE_STUDIES, CaseStudyMeta, FILTERS, caseStudyPath } from './data';
import { navigate, usePageMeta } from './navigation';
import { BookCallButton, Eyebrow } from './primitives';

// Header testimonial: existing site wording, used as-is.
const HEADER_TESTIMONIAL = {
  quote: 'Absolute pleasure working with the lads. It was refreshing to chat to others on the same page as me, and there’s definitely potential for exciting projects together.',
  author: 'Ben Guttridge',
  role: 'Managing director',
  company: 'Auxo Digital',
  image: `${import.meta.env.BASE_URL}ben-guttridge.png`,
};

const CaseCard: React.FC<{ study: CaseStudyMeta }> = ({ study }) => {
  const href = caseStudyPath(study.slug);
  const go = (e: React.MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    navigate(href);
  };
  return (
    <article className="group bg-white rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-shadow p-4 md:p-5 flex flex-col">
      <a href={href} onClick={go} tabIndex={-1} aria-hidden="true">
        <CaseImage image={study.image} alt={study.badge} badge={study.badge} seed={study.slug} className="aspect-[16/9]" />
      </a>
      <div className="px-2 md:px-4 pt-6 pb-3 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-5">
          {study.tags.map((t) => (
            <span key={t} className="bg-[#eef2f0] text-[#2e4841] text-xs font-semibold px-3.5 py-1.5 rounded-full">{t}</span>
          ))}
        </div>
        <h2 className="text-xl md:text-2xl font-black text-[#0d2b23] leading-snug tracking-tight mb-8">
          <a href={href} onClick={go} className="hover:underline decoration-2 underline-offset-4">
            {study.headline}
          </a>
        </h2>
        <div className="mt-auto grid grid-cols-2 divide-x divide-slate-200">
          {study.stats.map((s, i) => (
            <div key={s.label} className={i === 0 ? 'pr-4 md:pr-6' : 'pl-4 md:pl-6'}>
              <p className="text-3xl md:text-4xl font-black text-[#2e4841] tracking-tight mb-1.5">{s.value}</p>
              <p className="text-sm text-[#61756f] leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

const Hub: React.FC = () => {
  usePageMeta(
    'Case studies | Kluvo',
    "Real campaigns we've run for UK B2B teams, what worked, and what the conversations taught us."
  );
  const [filter, setFilter] = useState<string>('All');
  const filters = ['All', ...FILTERS.filter((f) => CASE_STUDIES.some((c) => c.filter === f))];
  const visible = CASE_STUDIES.filter((c) => filter === 'All' || c.filter === filter);
  // Data is ordered client stories first, then industry pages; filtering keeps that order.

  return (
    <div className="bg-[#fcfcfc]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 md:pt-24 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="block text-xs font-black uppercase tracking-[0.3em] text-[#2e4841] mb-5">Case studies</span>
            <h1 className="text-5xl md:text-7xl font-black text-[#0d2b23] tracking-tighter leading-[0.95] mb-6">
              The calls behind the results
            </h1>
            <p className="text-lg md:text-xl text-[#61756f] font-medium leading-relaxed max-w-xl mb-9">
              Real campaigns we've run for UK B2B teams, what worked, and what the conversations taught us.
            </p>
            <BookCallButton className="!px-9 !py-4 !text-base" />
          </div>
          <figure className="lg:col-span-5 bg-white border border-slate-100 rounded-[32px] p-8 md:p-10 shadow-sm">
            <div className="flex text-[#2e4841] gap-1 mb-6" aria-label="5 out of 5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <blockquote className="text-xl font-medium text-[#0d2b23] leading-relaxed mb-8">“{HEADER_TESTIMONIAL.quote}”</blockquote>
            <figcaption className="flex items-center gap-4">
              <img src={HEADER_TESTIMONIAL.image} alt={HEADER_TESTIMONIAL.author} className="w-12 h-12 rounded-full object-cover border border-slate-200" />
              <div>
                <p className="font-black text-[#0d2b23] text-sm">{HEADER_TESTIMONIAL.author}</p>
                <p className="text-[#61756f] text-[10px] font-black uppercase tracking-widest">{HEADER_TESTIMONIAL.role} · {HEADER_TESTIMONIAL.company}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="flex flex-wrap items-center gap-2 mb-10" role="group" aria-label="Filter by industry">
          <Eyebrow className="mr-2 w-full sm:w-auto mb-1 sm:mb-0">Industry</Eyebrow>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${filter === f
                ? 'bg-[#0d2b23] border-[#0d2b23] text-white'
                : 'bg-white border-slate-200 text-[#2e4841] hover:border-[#2e4841]'
                }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {visible.map((s) => <CaseCard key={s.slug} study={s} />)}
        </div>
      </section>
    </div>
  );
};

export default Hub;
