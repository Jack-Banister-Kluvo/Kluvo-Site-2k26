import React from 'react';
import CaseImage from './CaseImage';
import { CaseStudyMeta, CaseStat } from './data';
import { navigate } from './navigation';

// Shared building blocks for the case study detail pages. Each page composes
// these in its own order; nothing here forces a single template.

export const Eyebrow: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <span className={`block text-[11px] font-bold uppercase tracking-[0.2em] text-[#61756f] ${className}`}>{children}</span>
);

export const BookCallButton: React.FC<{ variant?: 'dark' | 'light'; className?: string }> = ({ variant = 'dark', className = '' }) => (
  <button
    data-cal-link="sales-team/sales-discovery"
    data-cal-namespace="sales-discovery"
    data-cal-config='{"layout":"month_view","theme":"light"}'
    className={`inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold transition-all hover:scale-[1.03] active:scale-95 ${variant === 'dark'
      ? 'bg-[#0d2b23] text-white shadow-lg shadow-[#0d2b23]/20'
      : 'bg-[#fcfcfc] text-[#0d2b23]'
      } ${className}`}
  >
    Book a call
  </button>
);

export const Chips: React.FC<{ items: string[]; className?: string }> = ({ items, className = '' }) => (
  <div className={`flex flex-wrap gap-2 ${className}`}>
    {items.map((c) => (
      <span key={c} className="border border-slate-200 bg-white text-[#2e4841] text-xs font-medium px-3 py-1.5 rounded-full">
        {c}
      </span>
    ))}
  </div>
);

const Rings: React.FC = () => (
  <svg className="absolute -top-16 -right-16 w-64 h-64 text-[#9daaa6] pointer-events-none" viewBox="0 0 200 200" fill="none" stroke="currentColor" aria-hidden="true">
    {[90, 70, 50, 30].map((r, i) => (
      <circle key={r} cx="100" cy="100" r={r} strokeOpacity={0.12 + i * 0.06} />
    ))}
    <circle cx="100" cy="100" r="8" fill="currentColor" fillOpacity="0.4" stroke="none" />
  </svg>
);

interface HeroProps {
  study: CaseStudyMeta;
  eyebrow: string;
  callout: { label: string; text: string; dark?: boolean };
  chips: string[];
  statsLabel: string;
  stats?: CaseStat[];
  breadcrumb?: string;
}

export const Hero: React.FC<HeroProps> = ({ study, eyebrow, callout, chips, statsLabel, stats = study.stats, breadcrumb = 'Case studies' }) => (
  <header className="pt-10 md:pt-14">
    <nav aria-label="Breadcrumb" className="text-xs text-[#61756f] mb-8">
      <a
        href="/case-studies"
        onClick={(e) => { e.preventDefault(); navigate('/case-studies'); }}
        className="hover:text-[#0d2b23] hover:underline underline-offset-4"
      >
        {breadcrumb}
      </a>
      <span className="mx-1.5">/</span>
      <span className="text-[#0d2b23]">{study.name}</span>
    </nav>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
      <div className="lg:col-span-7">
        <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0d2b23] tracking-tight leading-[1.05] mb-5 break-words">{study.name}</h1>
        <p className="text-xl md:text-2xl font-bold text-[#2e4841] leading-snug mb-8">{study.headline}</p>
        <div className={`rounded-2xl p-5 md:p-6 mb-6 ${callout.dark ? 'bg-[#0d2b23]' : 'bg-[#eef2f0]'}`}>
          <Eyebrow className={`mb-2 ${callout.dark ? '!text-[#9daaa6]' : ''}`}>{callout.label}</Eyebrow>
          <p className={`font-semibold leading-relaxed ${callout.dark ? 'text-white' : 'text-[#0d2b23]'}`}>{callout.text}</p>
        </div>
        <Chips items={chips} />
      </div>
      <aside className="lg:col-span-5 relative overflow-hidden bg-[#0d2b23] text-white rounded-[28px] p-7 md:p-9">
        <Rings />
        <Eyebrow className="!text-[#9daaa6] mb-2 relative">{statsLabel}</Eyebrow>
        <div className="relative divide-y divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="py-6 last:pb-0">
              <p className="text-5xl md:text-6xl font-black tracking-tight mb-2">{s.value}</p>
              <p className="text-sm text-[#9daaa6] leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </aside>
    </div>
    <CaseImage image={study.image} alt={study.imageAlt ?? study.name} position={study.imagePosition} eager seed={study.slug} className="mt-12 md:mt-16 aspect-[16/9] md:aspect-[21/8]" />
  </header>
);

export const Section: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <section className="border-t border-slate-200 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
    <div className="md:col-span-3">
      <Eyebrow className="md:sticky md:top-28 max-w-[14rem] leading-relaxed">{label}</Eyebrow>
    </div>
    <div className="md:col-span-9 min-w-0 space-y-6">{children}</div>
  </section>
);

export const Lead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-lg text-[#0d2b23] leading-relaxed max-w-3xl">{children}</p>
);

export const Prose: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="space-y-4 text-[#2e4841] leading-relaxed max-w-3xl">{children}</div>
);

/** Bold statement with a muted second half, as used under "The problem" style sections. */
export const Statement: React.FC<{ strong: string; muted?: string }> = ({ strong, muted }) => (
  <p className="text-2xl md:text-3xl font-black text-[#0d2b23] leading-tight tracking-tight max-w-2xl">
    {strong}{muted && <span className="text-[#61756f]"> {muted}</span>}
  </p>
);

/** Side-ruled aside note. */
export const Aside: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="border-l-2 border-[#2e4841] pl-4 text-sm text-[#2e4841] leading-relaxed max-w-2xl">{children}</p>
);

export const Caption: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-xs text-[#61756f] leading-relaxed">{children}</p>
);

export const FactList: React.FC<{ title: string; rows: [string, string][] }> = ({ title, rows }) => (
  <div>
    <Eyebrow className="mb-3">{title}</Eyebrow>
    <dl className="border-t border-slate-200">
      {rows.map(([k, v]) => (
        <div key={k} className="grid grid-cols-[7rem_1fr] sm:grid-cols-[9rem_1fr] gap-4 py-3.5 border-b border-slate-200">
          <dt className="text-sm font-bold text-[#0d2b23]">{k}</dt>
          <dd className="text-sm text-[#2e4841] leading-relaxed">{v}</dd>
        </div>
      ))}
    </dl>
  </div>
);

/** Two-column block: prose on the left, a fact list on the right. */
export const ProseWithFacts: React.FC<{ children: React.ReactNode; facts: React.ReactNode }> = ({ children, facts }) => (
  <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
    <div className="space-y-4 text-[#0d2b23] text-[17px] leading-relaxed">{children}</div>
    <div>{facts}</div>
  </div>
);

export interface Step { when: string; title: string; text: string }

export const StepCards: React.FC<{ steps: Step[] }> = ({ steps }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {steps.map((s) => (
      <div key={s.title} className="bg-[#eef2f0] rounded-2xl p-6">
        <Eyebrow className="mb-2">{s.when}</Eyebrow>
        <h3 className="text-lg font-bold text-[#0d2b23] mb-2">{s.title}</h3>
        <p className="text-sm text-[#2e4841] leading-relaxed">{s.text}</p>
      </div>
    ))}
  </div>
);

export const ChannelChips: React.FC<{ items: string[] }> = ({ items }) => (
  <div className="flex flex-wrap items-center gap-2">
    <Eyebrow className="mr-1">Channels</Eyebrow>
    {items.map((c) => (
      <span key={c} className="border border-slate-200 bg-white text-[#0d2b23] text-xs font-bold px-3 py-1.5 rounded-full">{c}</span>
    ))}
  </div>
);

interface CallScriptProps {
  /** Bold title in the header row. */
  frameworkTitle?: string;
  framework?: string;
  opener?: string;
  lanes: { title: string; text: string }[];
  disarm?: string;
  diagnose?: string;
  question?: string;
}

const ScriptRow: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-2 sm:gap-4 px-5 md:px-6 py-4 border-t border-slate-100">
    <Eyebrow className="pt-0.5">{label}</Eyebrow>
    <div className="text-[#0d2b23] leading-relaxed">{children}</div>
  </div>
);

export const CallScript: React.FC<CallScriptProps> = ({ frameworkTitle = 'Kluvo framework', framework, opener, lanes, disarm, diagnose, question }) => (
  <div className="space-y-3">
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      {framework && (
        <div className="flex items-center justify-between gap-4 px-5 md:px-6 py-3.5 text-xs text-[#61756f]">
          <span><span className="font-bold text-[#0d2b23]">{frameworkTitle}</span> · {framework}</span>
          <span>Excerpt</span>
        </div>
      )}
      {opener && <ScriptRow label="Opener">"{opener}"</ScriptRow>}
      <ScriptRow label="Two-lane pitch">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {lanes.map((l) => (
            <div key={l.title} className="bg-[#eef2f0] rounded-xl p-4">
              <p className="text-sm font-bold mb-1.5">{l.title}</p>
              <p className="text-sm text-[#2e4841] leading-relaxed">"{l.text}"</p>
            </div>
          ))}
        </div>
      </ScriptRow>
      {disarm && <ScriptRow label="Disarm">"{disarm}"</ScriptRow>}
      {diagnose && <ScriptRow label="Diagnose">"{diagnose}"</ScriptRow>}
      {question && <ScriptRow label="The question">{question}</ScriptRow>}
    </div>
    <Caption>SDRs adapt these lines to each prospect. They're a starting point, not a read-out.</Caption>
  </div>
);

/** Two side-ruled conversation openers plus a highlighted line (how we open / the question). */
export const Conversations: React.FC<{ items: [string, string][]; footLabel: string; foot: string }> = ({ items, footLabel, foot }) => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {items.map(([t, q]) => (
        <div key={t} className="border-l-2 border-[#0d2b23] pl-4">
          <h3 className="font-bold text-[#0d2b23] mb-2">{t}</h3>
          <p className="text-sm text-[#2e4841] leading-relaxed">{q}</p>
        </div>
      ))}
    </div>
    <div className="bg-[#eef2f0] rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-2 sm:gap-4">
      <Eyebrow className="pt-0.5">{footLabel}</Eyebrow>
      <p className="text-[#0d2b23] leading-relaxed">{foot}</p>
    </div>
  </>
);

/** Dark-headed card of labelled fields, two per row. Each field: [label, what, why]. */
export const FieldGrid: React.FC<{ title: string; subtitle: string; right: string; fields: [string, string, string][] }> = ({ title, subtitle, right, fields }) => (
  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
    <div className="bg-[#0d2b23] text-white flex flex-wrap items-center justify-between gap-2 px-5 py-3.5 text-xs">
      <span><span className="font-bold">{title}</span> · {subtitle}</span>
      <span className="text-[#9daaa6]">{right}</span>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2">
      {fields.map(([label, what, why], i) => (
        <div key={label} className={`p-5 border-slate-200 ${i > 0 ? 'border-t' : ''} ${i === 1 ? 'sm:border-t-0' : ''} ${i % 2 === 1 ? 'sm:border-l' : ''}`}>
          <Eyebrow className="mb-1.5">{label}</Eyebrow>
          <p className="font-bold text-[#0d2b23]">{what}</p>
          <p className="text-xs text-[#61756f] mt-1.5">{why}</p>
        </div>
      ))}
    </div>
  </div>
);

export interface ResultItem { eyebrow: string; title: string; text: string; dark?: boolean }

export const ResultCards: React.FC<{ items: ResultItem[] }> = ({ items }) => (
  <div className={`grid grid-cols-1 gap-4 ${items.length % 3 === 0 ? 'md:grid-cols-3' : 'sm:grid-cols-2'}`}>
    {items.map((r) => (
      <div key={r.title} className={`rounded-2xl p-6 ${r.dark ? 'bg-[#0d2b23] text-white' : 'bg-[#eef2f0] text-[#0d2b23]'}`}>
        <Eyebrow className={`mb-3 ${r.dark ? '!text-[#9daaa6]' : ''}`}>{r.eyebrow}</Eyebrow>
        <h3 className="text-xl md:text-2xl font-black tracking-tight mb-2">{r.title}</h3>
        <p className={`text-sm leading-relaxed ${r.dark ? 'text-[#9daaa6]' : 'text-[#2e4841]'}`}>{r.text}</p>
      </div>
    ))}
  </div>
);

/** Columns with a top rule, bold title and an arrowed line of text. */
export const ArrowColumns: React.FC<{ items: { title: string; text: string }[]; cols?: 2 | 3 }> = ({ items, cols = 3 }) => (
  <div className={`grid grid-cols-1 gap-6 ${cols === 3 ? 'md:grid-cols-3' : 'sm:grid-cols-2'}`}>
    {items.map((i) => (
      <div key={i.title} className="border-t-2 border-[#0d2b23] pt-4">
        <h3 className="font-bold text-[#0d2b23] mb-2 leading-snug">{i.title}</h3>
        <p className="text-sm text-[#2e4841] leading-relaxed flex gap-2"><span aria-hidden="true" className="text-[#61756f]">→</span><span>{i.text}</span></p>
      </div>
    ))}
  </div>
);

export const Quote: React.FC<{ text: string; by: string }> = ({ text, by }) => (
  <figure>
    <blockquote className="text-xl md:text-2xl font-bold text-[#0d2b23] leading-snug tracking-tight max-w-3xl">
      <span className="text-[#9daaa6]">“</span>{text}<span className="text-[#9daaa6]">”</span>
    </blockquote>
    <figcaption className="mt-4 text-sm text-[#61756f]">{by}</figcaption>
  </figure>
);

export const CtaPanel: React.FC<{ title: string; bullets: string[]; blurb?: string }> = ({
  title,
  bullets,
  blurb = 'Two dedicated SDRs, proven on our own campaigns first, live within 10 working days.',
}) => (
  <section className="my-12 md:my-16 bg-[#0d2b23] text-white rounded-[28px] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
    <div className="lg:col-span-8">
      <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">{title}</h2>
      <ul className="space-y-3">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3 text-[15px] leading-relaxed">
            <svg className="w-4 h-4 mt-1 flex-shrink-0 text-[#9daaa6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="lg:col-span-4 flex flex-col justify-center gap-5">
      <p className="text-[#9daaa6] leading-relaxed">{blurb}</p>
      <div><BookCallButton variant="light" /></div>
    </div>
  </section>
);

// ---- Diagram pieces -------------------------------------------------------

export const DiagramFrame: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white border border-slate-200 rounded-2xl p-5 md:p-8 overflow-hidden ${className}`}>{children}</div>
);

export const Node: React.FC<{ title: string; sub?: string; dark?: boolean; dashed?: boolean; className?: string }> = ({ title, sub, dark, dashed, className = '' }) => (
  <div
    className={`rounded-xl px-4 py-3 text-center ${dark
      ? 'bg-[#0d2b23] text-white'
      : `bg-white text-[#0d2b23] border ${dashed ? 'border-dashed border-[#9daaa6]' : 'border-slate-300'}`
      } ${className}`}
  >
    <p className="text-sm font-bold leading-snug">{title}</p>
    {sub && <p className={`text-xs mt-1 leading-snug ${dark ? 'text-[#9daaa6]' : 'text-[#61756f]'}`}>{sub}</p>}
  </div>
);

/** Arrow that points down on mobile and right from `md` up. */
export const FlowArrow: React.FC<{ label?: string }> = ({ label }) => (
  <div className="flex md:flex-col items-center justify-center gap-2 text-[#61756f] py-1 md:py-0 md:px-1 flex-shrink-0" aria-hidden="true">
    <svg className="w-4 h-4 rotate-90 md:rotate-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 8h13M10 4l4 4-4 4" /></svg>
    {label && <span className="text-[10px] font-semibold whitespace-nowrap">{label}</span>}
  </div>
);

/** A linear flow of nodes: vertical on mobile, horizontal from `md`. */
export const Flow: React.FC<{ nodes: React.ReactNode[]; arrowLabels?: (string | undefined)[] }> = ({ nodes, arrowLabels = [] }) => (
  <div className="flex flex-col md:flex-row md:items-stretch gap-1 md:gap-2">
    {nodes.map((n, i) => (
      <React.Fragment key={i}>
        {i > 0 && <FlowArrow label={arrowLabels[i - 1]} />}
        <div className="md:flex-1 min-w-0 [&>*]:h-full">{n}</div>
      </React.Fragment>
    ))}
  </div>
);
