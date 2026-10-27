import React from 'react';
import { CaseStudyMeta } from '../data';
import {
  Hero, Section, Lead, Statement, Prose, ProseWithFacts, FactList, StepCards, CtaPanel,
  Conversations, DiagramFrame, Node, Flow, Eyebrow,
} from '../primitives';

const FourChecks: React.FC = () => (
  <DiagramFrame>
    <Flow
      nodes={[
        <Node title="Prospect" />,
        <Node title="Timing" sub="first, always" />,
        <Node title="Authority" />,
        <Node title="Need" />,
        <Node title="Site fit" />,
        <Node title="Meeting" sub="booked" dark />,
      ]}
    />
    <div className="mt-4 md:ml-[17%] md:w-[60%] border-l-2 md:border-l-0 md:border-t-2 border-dashed border-[#9daaa6] pl-3 md:pl-0 md:pt-3">
      <p className="text-xs text-[#61756f] leading-relaxed">
        <span className="font-bold text-[#0d2b23]">Not yet? No meeting.</span> Site not occupied yet, no consumption data, or no board mandate. They stay in touch until the timing is right.
      </p>
    </div>
  </DiagramFrame>
);

const BRIEF: [string, string][] = [
  ['Site context', 'Where the site is and what it does'],
  ['Current setup', 'How the site is powered today'],
  ['Energy pain', "What's driving the conversation: cost, a net zero target, or both"],
  ['Urgency signals', 'Renewals, board mandates, customer pressure'],
  ['Stakeholder map', 'Who else needs to be in the room'],
];

const CommercialSolar: React.FC<{ study: CaseStudyMeta }> = ({ study }) => (
  <>
    <Hero
      study={study}
      eyebrow="Industry · Commercial solar & renewables"
      callout={{
        label: 'The short version',
        text: "Solar projects are big, slow decisions, and directors travel hours to site meetings. So we don't book a meeting unless timing, authority, need and site fit all line up, and every meeting comes with a brief.",
      }}
      chips={['High-consumption sites, England & Wales', 'Phone-first']}
      statsLabel="At a glance"
    />

    <div className="mt-16">
      <Section label="Who we call">
        <ProseWithFacts
          facts={
            <FactList
              title="Who we call"
              rows={[
                ['Sites', 'High-consumption B2B sites across England and Wales'],
                ['Sectors', 'Food distribution and cold storage, pharma, engineering, waste management and manufacturing'],
                ['Titles', 'MDs, CFOs, Operations and Facilities leads, Heads of Sustainability'],
                ['Timing', 'Able to enter a buying window within 12 months'],
              ]}
            />
          }
        >
          <p>We work sector by sector, in waves, so the SDRs get sharper on each one before moving on. Existing customers are suppressed from every list.</p>
        </ProseWithFacts>
      </Section>

      <Section label="Four checks, timing first">
        <Lead>Plenty of leads look interested and can't buy yet. Timing goes first, so nobody drives to a site that isn't ready.</Lead>
        <FourChecks />
      </Section>

      <Section label="What a director gets before the drive">
        <Lead>Every meeting is handed over with a written brief, so the first conversation on site starts in the right place.</Lead>
        <dl className="bg-white border border-slate-200 rounded-2xl px-5 md:px-6">
          {BRIEF.map(([k, v], i) => (
            <div key={k} className={`grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-1 sm:gap-4 py-4 ${i > 0 ? 'border-t border-slate-100' : ''}`}>
              <dt><Eyebrow>{k}</Eyebrow></dt>
              <dd className="text-[#0d2b23]">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section label="The two conversations we have">
        <Conversations
          items={[
            ['Energy is a line on the P&L that keeps moving', '“A lot of finance directors I speak to have seen electricity become one of their biggest controllable costs, and every renewal feels like a gamble.”'],
            ['A net zero target without a plan', "“Others have a sustainability target from the board or a big customer, but no clear plan for getting there that doesn't need a large upfront spend.”"],
          ]}
          footLabel="The question"
          foot="“Roughly what is the site spending on electricity a year, and who would sign off a project to bring that down?”"
        />
      </Section>

      <Section label="Between the events">
        <Statement strong="Trade shows bring the best leads." muted="But they come in bursts." />
        <Prose>
          <p>Solar businesses often lean on events for pipeline. A steady phone-first channel keeps conversations going in the gaps between them, so the pipeline doesn't rise and fall with the events calendar.</p>
        </Prose>
        <StepCards
          steps={[
            { when: 'Days 1–10', title: 'Set-up', text: 'Sectors and personas agreed across MD, CFO, operations and sustainability, a qualification rubric, and test calls reviewed with you before going live.' },
            { when: 'Month 1 onwards', title: 'Live outreach', text: 'Two SDRs calling in sector waves, with sector-level insight fed back to you every month.' },
          ]}
        />
      </Section>
    </div>

    <CtaPanel
      title="Selling commercial solar?"
      bullets={[
        "Past leads looked keen but couldn't buy yet",
        "Your directors' time on site is expensive",
        'You want a steady pipeline between events',
      ]}
    />
  </>
);

export default CommercialSolar;
