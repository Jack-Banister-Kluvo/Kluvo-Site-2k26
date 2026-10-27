import React from 'react';
import { CaseStudyMeta } from '../data';
import {
  Hero, Section, Lead, Statement, Prose, ProseWithFacts, FactList, CtaPanel, Caption,
  DiagramFrame, Node, FlowArrow, ArrowColumns, ResultCards, Eyebrow,
} from '../primitives';

const LANES = [
  { lane: 'Lane 1', name: 'Cold', who: 'Motorsport teams, travel and event management companies', goal: 'New business from accounts that have never heard of eventr' },
  { lane: 'Lane 2', name: 'Warm', who: 'Contacts met at trade shows such as IMEX', goal: 'Turn stand conversations into demos, called within days of the show', dark: true },
  { lane: 'Lane 3', name: 'Expansion', who: 'Existing customers on smaller plans', goal: 'Open the conversation about moving up to Enterprise' },
];

const VLine: React.FC<{ label?: string; grow?: boolean }> = ({ label, grow }) => (
  <div className={`flex flex-col items-center text-[#61756f] ${grow ? 'flex-1' : ''}`} aria-hidden="true">
    {label && <span className="text-[10px] font-semibold mb-0.5">{label}</span>}
    <div className={`w-px bg-[#61756f] ${grow ? 'flex-1 min-h-[1.5rem]' : 'h-4'}`} />
    <span className="text-[10px] leading-none">▼</span>
  </div>
);

const ShowContactFlow: React.FC = () => (
  <DiagramFrame>
    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
      <div className="md:flex-1"><Node title="Met at the show" sub="IMEX and other trade shows" /></div>
      <FlowArrow />
      <div className="md:flex-1"><Node title="Called back" sub="within days, while it's fresh" /></div>
      <FlowArrow />
      <div className="md:flex-1"><Node title="Demo booked" sub="rated on use case, authority and intent" /></div>
      <FlowArrow />
      <div className="md:flex-1"><Node title="At risk?" dashed /></div>
    </div>
    <div className="md:ml-auto md:w-1/2 mt-1">
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col items-center gap-1">
          <VLine label="no" grow />
        </div>
        <div className="flex flex-col items-center gap-1">
          <VLine label="yes" />
          <Node title="Confirmation call" sub="the day before" className="w-full" />
          <VLine />
        </div>
      </div>
      <Node title="Demo happens" sub="logged in eventr's CRM" dark className="mt-1" />
    </div>
  </DiagramFrame>
);

const Eventr: React.FC<{ study: CaseStudyMeta }> = ({ study }) => (
  <>
    <Hero
      study={study}
      eyebrow="Case study · Travel & events software · Trade-show follow-up"
      callout={{
        label: 'In short',
        text: "We run eventr's outbound on three lanes at once: cold prospects, warm contacts from trade shows, and existing customers ready to grow. The warm lane is timed around eventr's event calendar, so nobody they met at a show waits weeks for a call.",
      }}
      chips={['eventr by Soft Pauer', 'Oxfordshire, UK', 'Cold calling · Warm follow-up · Account expansion']}
      statsLabel="At a glance"
    />

    <div className="mt-16">
      <Section label="The problem">
        <Statement strong="A great show, then silence." muted="Interest from the stand fades within weeks if nobody calls back." />
        <Prose>
          <p>Trade shows like IMEX are where eventr meets its buyers. Heads of travel, event coordinators and motorsport team managers stop at the stand, have a good conversation and take a card.</p>
          <p>Then everyone flies home. Inboxes fill up, the next event starts, and the conversation that felt promising on the stand is forgotten. Without someone calling back quickly, most of that interest disappears.</p>
          <p>There was a second problem hiding in plain sight. eventr already had customers on smaller plans who could grow into Enterprise, and that pipeline was sitting untouched.</p>
        </Prose>
      </Section>

      <Section label="Who eventr is">
        <ProseWithFacts
          facts={
            <FactList
              title="Who we call"
              rows={[
                ['Sectors', 'Motorsport series and teams, corporate travel management companies, event management companies'],
                ['Titles', 'Heads of travel and logistics, team and event coordinators'],
                ['Warm contacts', 'People met at trade shows such as IMEX'],
                ['Existing customers', 'Accounts on smaller plans, with room to grow into Enterprise'],
              ]}
            />
          }
        >
          <p>eventr is a digital itinerary and coordination app for events, motorsport teams and business travel, built by the Soft Pauer team. Team members see what they need to do, when and where. Coordinators push changes in real time, and finance keeps costs in check. It's sold on tiered plans, up to Enterprise.</p>
        </ProseWithFacts>
      </Section>

      <Section label="Three lanes, one team">
        <Lead>Instead of one list, we set eventr up with three lanes from day one, each with its own audience and its own reason to talk, all worked by the same two SDRs.</Lead>
        <div className="space-y-3">
          {LANES.map((l) => (
            <div key={l.name} className={`grid grid-cols-1 sm:grid-cols-[8rem_1fr_1fr] gap-3 sm:gap-6 rounded-2xl p-5 border ${l.dark ? 'bg-[#0d2b23] border-[#0d2b23] text-white' : 'bg-white border-slate-200 text-[#0d2b23]'}`}>
              <div>
                <Eyebrow className={l.dark ? '!text-[#9daaa6]' : ''}>{l.lane}</Eyebrow>
                <p className="text-lg font-black mt-1">{l.name}</p>
              </div>
              <div>
                <Eyebrow className={`mb-1 ${l.dark ? '!text-[#9daaa6]' : ''}`}>Who</Eyebrow>
                <p className="text-sm leading-relaxed">{l.who}</p>
              </div>
              <div>
                <Eyebrow className={`mb-1 ${l.dark ? '!text-[#9daaa6]' : ''}`}>Goal</Eyebrow>
                <p className="text-sm leading-relaxed">{l.goal}</p>
              </div>
            </div>
          ))}
          <div className="rounded-2xl p-5 border border-dashed border-[#9daaa6]">
            <p className="font-bold text-[#0d2b23]">Every booking lands in eventr's CRM</p>
            <p className="text-sm text-[#61756f] mt-1">with notes, a fit rating and a no-show risk flag, whichever lane it came from</p>
          </div>
        </div>
      </Section>

      <Section label="The life of a show contact">
        <Lead>Onboarding took 10 working days: the three lanes set up, scripts written, and bookings connected straight into eventr's CRM. From then on, calling capacity follows eventr's event calendar.</Lead>
        <ShowContactFlow />
        <Caption>The confirmation call is small, but it's what turns a booked demo into a demo that actually happens.</Caption>
      </Section>

      <Section label="What we fixed along the way">
        <ArrowColumns
          items={[
            { title: 'Show contacts went cold fast.', text: "We plan calling capacity around eventr's event calendar, so warm contacts are called within days of each show." },
            { title: 'Not every booking was equal.', text: 'Each demo is rated on use case, authority and intent. Bookings that look at risk get a confirmation call the day before.' },
            { title: 'Existing customers were an untapped pipeline.', text: 'A dedicated expansion lane works through accounts on smaller plans and opens the conversation about Enterprise.' },
          ]}
        />
      </Section>

      <Section label="What came back">
        <ResultCards
          items={[
            { eyebrow: 'Demos', title: 'Booked from IMEX follow-up', text: "Each one logged in eventr's CRM with notes, a fit rating and a no-show risk flag.", dark: true },
            { eyebrow: 'A new door', title: 'A referral', text: 'To a destination management company, on top of the demos.' },
            { eyebrow: 'Growth', title: 'An expansion lane', text: 'Running alongside new business, so existing customers get a proper conversation about upgrading.' },
          ]}
        />
      </Section>

      <Section label="Next on the calendar">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            ['Oct', 'IMEX', 'IMEX America, Las Vegas', 'Post-show follow-up for every contact from the stand.'],
            ['Nov', 'ETL', 'Event Tech Live, London', 'The same warm-lane playbook, timed to the show.'],
          ].map(([month, short, name, text]) => (
            <div key={name} className="flex gap-4 items-start bg-white border border-slate-200 rounded-2xl p-4">
              <div className="flex-shrink-0 w-16 h-14 rounded-xl bg-[#0d2b23] text-white flex flex-col items-center justify-center">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#9daaa6]">{month}</span>
                <span className="text-sm font-black">{short}</span>
              </div>
              <div>
                <p className="font-bold text-[#0d2b23]">{name}</p>
                <p className="text-sm text-[#2e4841] leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>

    <CtaPanel
      title="Got a show coming up?"
      bullets={[
        'Trade shows are where you meet buyers, but follow-up is patchy',
        'You have existing customers who could be on a bigger plan',
        'You want new business and account growth running at the same time',
      ]}
    />
  </>
);

export default Eventr;
