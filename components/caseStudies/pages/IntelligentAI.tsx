import React from 'react';
import { CaseStudyMeta } from '../data';
import {
  Hero, Section, Lead, ProseWithFacts, FactList, StepCards, ChannelChips, CallScript,
  Quote, CtaPanel, Caption, DiagramFrame, Node, FlowArrow, Eyebrow,
} from '../primitives';

const EXPECTATIONS = [
  {
    going: 'Saving time on submissions is the hook',
    showed: 'Larger brokers already have the process down. What worries them is whether the data holds up when an underwriter pushes back.',
    changed: 'Added a second pitch lane on confidence in the data',
  },
  {
    going: 'Pain and budget sit in the same place',
    showed: "They didn't. The brokers who felt the pain most weren't always the ones who could pay to fix it.",
    changed: 'Tested small, mid-market and larger brokers side by side to find the overlap',
  },
  {
    going: 'The mid-market is the sweet spot',
    showed: 'It was thinner than expected, with fewer firms that had both the need and the budget.',
    changed: 'Recommended a short go-to-market review before more spend',
  },
  {
    going: '“Not now” means the lead is dead',
    showed: 'Plenty of brokers wanted to stay close without committing to a meeting.',
    changed: "Offered a softer next step: an invite to the Lloyd's market event",
  },
];

const SEGMENTS = [
  { name: 'Small brokers', size: '3–10 staff', result: 'Tested in parallel', note: 'Not taken forward' },
  { name: 'Mid-market brokers', size: '10–100 staff', result: 'Thinner than expected', note: 'Go-to-market review recommended' },
  { name: 'Larger brokers', size: '60–250 staff', result: 'Data-confidence pitch lands', note: 'Next lane, with insurers', dark: true },
];

const LoopDiagram: React.FC = () => (
  <DiagramFrame>
    {/* Desktop: two rows with a feedback loop over the top */}
    <div className="hidden md:grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-y-3">
      <div />
      <div />
      <div className="col-span-3 relative h-10 mx-[12%]">
        <div className="absolute inset-x-0 bottom-0 h-6 border-t border-x border-[#61756f] rounded-t-md" />
        <span className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1 text-[#61756f]" aria-hidden="true">▾</span>
        <span className="absolute left-1/2 -translate-x-1/2 -top-1 text-[10px] font-semibold text-[#61756f] bg-white px-2">adjust pitch and targeting</span>
      </div>

      <Node title="Set-up · days 1–10" sub="ICP, data in stages, script" />
      <FlowArrow />
      <Node title="Live calling" sub="Two SDRs, month 1 onwards" />
      <FlowArrow />
      <Node title="Weekly feedback" sub="Client call + Monday report" />

      <div />
      <div />
      <div />
      <div />
      <div className="flex items-center justify-center gap-2 text-[#61756f]">
        <span className="text-sm" aria-hidden="true">↓</span>
        <span className="text-[10px] font-semibold">when the data says so</span>
      </div>

      <div />
      <div />
      <Node title="Relaunch on one lane" sub="Larger brokers and insurers" dark />
      <div className="text-[#61756f] px-1" aria-hidden="true">
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 8H2M6 4 2 8l4 4" /></svg>
      </div>
      <Node title="The pivot" sub="Go-to-market review" />
    </div>

    {/* Mobile: one column */}
    <div className="md:hidden flex flex-col gap-1">
      <Node title="Set-up · days 1–10" sub="ICP, data in stages, script" />
      <FlowArrow />
      <Node title="Live calling" sub="Two SDRs, month 1 onwards" />
      <FlowArrow />
      <Node title="Weekly feedback" sub="Client call + Monday report" />
      <p className="text-center text-[11px] font-semibold text-[#61756f] py-1">↺ adjust pitch and targeting</p>
      <FlowArrow label="when the data says so" />
      <Node title="The pivot" sub="Go-to-market review" />
      <FlowArrow />
      <Node title="Relaunch on one lane" sub="Larger brokers and insurers" dark />
    </div>
  </DiagramFrame>
);

const IntelligentAI: React.FC<{ study: CaseStudyMeta }> = ({ study }) => (
  <>
    <Hero
      study={study}
      eyebrow="Case study · Insurtech · Phone-first outbound"
      callout={{
        label: 'The one thing we learned for them',
        text: "The brokers who felt the pain most weren't the ones with the budget. Larger brokers were, once the pitch moved from saving time to trusting the data.",
      }}
      chips={['Exeter, UK', '11–50 employees', 'Property-risk data platform']}
      statsLabel="Results so far"
    />

    <div className="mt-16">
      <Section label="The brief">
        <ProseWithFacts
          facts={
            <FactList
              title="Who we called"
              rows={[
                ['Sector', 'UK insurance brokers'],
                ['Titles', 'Heads of Property, P&C and Commercial Property, plus MDs and broking directors'],
                ['Company size', 'Small (3–10 staff), mid-market (10–100) and larger (60–250)'],
                ['Channels', 'Cold calling, email, event follow-up'],
              ]}
            />
          }
        >
          <p>Intelligent AI is a property-risk and rebuild-cost data platform, built with Lloyd's Lab, insurers, brokers and chartered surveyors. It gives brokers accurate pre-fill data for commercial property submissions, cross-referenced across Land Registry, Ordnance Survey and its own data science models.</p>
          <p>They came to us with a product that worked and a question they couldn't answer from a spreadsheet. New business had come from a mix of inbound and founder connections, but nothing they could rely on. The brief was simple: get in front of UK insurance brokers, and find out which ones will actually buy.</p>
          <p>They chose Kluvo for a predictable pipeline, without the hassle of hiring and managing SDRs themselves.</p>
        </ProseWithFacts>
      </Section>

      <Section label="What we expected vs what the calls showed">
        <Lead>Every campaign starts with assumptions. Ours get tested on live calls in the first weeks, and the answers go straight back to the client.</Lead>
        <div className="border-t border-slate-200">
          <div className="hidden md:grid grid-cols-[1fr_1.4fr_1fr] gap-6 py-3 border-b border-slate-200">
            <Eyebrow>Going in</Eyebrow>
            <Eyebrow>What the calls showed</Eyebrow>
            <Eyebrow>What we changed</Eyebrow>
          </div>
          {EXPECTATIONS.map((row) => (
            <div key={row.going} className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr_1fr] gap-2 md:gap-6 py-5 border-b border-slate-200">
              <p className="text-sm text-[#61756f]"><span className="md:hidden font-bold">Going in: </span><span className="line-through decoration-[#9daaa6]">{row.going}</span></p>
              <p className="text-sm font-bold text-[#0d2b23] leading-relaxed">{row.showed}</p>
              <p className="text-sm text-[#2e4841] leading-relaxed flex gap-2"><span aria-hidden="true">→</span><span>{row.changed}</span></p>
            </div>
          ))}
        </div>

        <div className="pt-6 space-y-4">
          <h3 className="font-bold text-[#0d2b23]">Three broker sizes tested side by side. Larger brokers became the next lane.</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {SEGMENTS.map((s) => (
              <div key={s.name} className={`rounded-2xl p-5 border ${s.dark ? 'bg-[#0d2b23] border-[#0d2b23] text-white' : 'bg-white border-slate-200 text-[#0d2b23]'}`}>
                <p className="font-bold">{s.name}</p>
                <p className={`text-xs mt-1 pb-4 border-b ${s.dark ? 'text-[#9daaa6] border-white/15' : 'text-[#61756f] border-slate-200'}`}>{s.size}</p>
                <p className="font-bold mt-4">{s.result}</p>
                <p className={`text-xs mt-1 ${s.dark ? 'text-white font-bold' : 'text-[#61756f]'}`}>{s.note}</p>
              </div>
            ))}
          </div>
          <Caption>We called all three sizes in parallel, so the next lane was picked from call data, not a hunch.</Caption>
        </div>
      </Section>

      <Section label="How we ran it">
        <StepCards
          steps={[
            { when: 'Days 1–10', title: 'Set-up', text: "ICP and personas agreed, then data built in approval stages: industries, then companies, then people. We started with a few smaller lists to test before adding volume, and agreed an answer on data sources and accuracy, because that's the first thing brokers ask." },
            { when: 'Month 1 onwards', title: 'Live calling', text: "Two dedicated SDRs, already proven on Kluvo's own campaigns, called across three broker sizes. That came to 650+ prospects across two list builds." },
            { when: 'Every week', title: 'The feedback loop', text: 'A call with the client and a written report every Monday, with call-level notes on objections and what the market was saying.' },
            { when: 'When the data said so', title: 'The pivot', text: 'The mid-market was thinner than expected, and we said so. Rather than keep dialling a small, muddy market, we recommended a short go-to-market review.' },
          ]}
        />
        <LoopDiagram />
        <Caption>The loop is the point: what SDRs hear each week changes who they call and what they say the next.</Caption>
        <ChannelChips items={['Cold calling', 'Email', 'Event follow-up']} />
      </Section>

      <Section label="How the calls sound">
        <CallScript
          framework="two-lane pitch, disarm, diagnostic question"
          lanes={[
            { title: 'Incomplete submissions', text: 'Some broking directors tell me the pre-fill is the slow part. Rebuild costs, construction, occupancy, all chased by hand before it goes to market.' },
            { title: 'Confidence in the data', text: "Others have the process down, but they're not fully confident the property data stands up when an underwriter pushes back on it." },
          ]}
          disarm="I'm assuming this is where you tell me neither of those sounds familiar?"
          diagnose="When a submission comes back with questions on the property data, where does that usually start?"
        />
      </Section>

      <Section label="What came back">
        <Lead>With Kluvo, you're buying learnings, not just meetings. Here's both.</Lead>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#0d2b23] text-white rounded-2xl p-6">
            <Eyebrow className="!text-[#9daaa6] mb-3">In meetings</Eyebrow>
            <p className="text-5xl font-black tracking-tight mb-2">10+</p>
            <p className="text-sm text-[#9daaa6]">Qualified, sat meetings in month one</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <Eyebrow className="mb-3">In learnings</Eyebrow>
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#0d2b23] leading-relaxed">
              <li>A broker ICP tested on live calls, not assumptions</li>
              <li>A persona map of who holds budget at mid-market brokers</li>
              <li>A pitch that lands with larger brokers</li>
              <li>An early, honest read on the mid-market, before more budget went into it</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section label="In their words">
        <Quote
          text="Outstanding experience with the Kluvo team. I've worked with a number of outbound agencies in the past and Kluvo has excelled. They got up to speed quickly, were on the phones inside 2 weeks and generated meetings and gathered market feedback. Reporting and account management is also excellent. Highly recommended."
          by="Intelligent AI"
        />
      </Section>

      <Section label="What's next">
        <Lead>We'll relaunch on one agreed lane, most likely larger brokers and insurers, with the pitch and targeting already proven on live calls.</Lead>
      </Section>
    </div>

    <CtaPanel
      title="Would this work for you?"
      bullets={[
        "You have a product that works, but you're not sure which segment buys first",
        'Your buyers are senior and easier to reach by phone than by inbox',
        'You want real market feedback in weeks, not quarters',
      ]}
    />
  </>
);

export default IntelligentAI;
