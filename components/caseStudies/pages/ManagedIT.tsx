import React from 'react';
import { CaseStudyMeta } from '../data';
import {
  Hero, Section, Statement, ProseWithFacts, FactList, CtaPanel, Caption, ArrowColumns,
  ResultCards, DiagramFrame, Eyebrow, Conversations,
} from '../primitives';

const ContractClock: React.FC = () => (
  <DiagramFrame>
    <div className="hidden md:block">
      <div className="grid grid-cols-[5fr_2.4fr_1fr] gap-2 items-end">
        <div />
        <div className="flex flex-col items-center text-[#61756f]" aria-hidden="true">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] mb-1">We call here</span>
          <span className="w-px h-5 bg-[#61756f]" />
          <span className="text-[10px] leading-none">▼</span>
        </div>
        <div />
      </div>
      <div className="grid grid-cols-[5fr_2.4fr_1fr] gap-2 mt-1">
        <div className="border border-slate-300 rounded-lg py-2.5 text-center text-sm font-bold text-[#0d2b23]">Locked into a contract</div>
        <div className="bg-[#0d2b23] rounded-lg py-2.5 text-center text-sm font-bold text-white">Renewal window</div>
        <div className="border border-slate-300 rounded-lg py-2.5 text-center text-xs text-[#61756f]">New term</div>
      </div>
      <div className="grid grid-cols-[5fr_2.4fr_1fr] gap-2 mt-3 text-xs text-[#61756f] text-center leading-relaxed">
        <p>Happy or not, they can't move yet.<br />We find the end date and stay in touch.</p>
        <p>Renewal on the table.<br />The meeting gets booked here.</p>
        <div />
      </div>
    </div>
    <ol className="md:hidden space-y-3">
      <li className="border border-slate-300 rounded-xl p-4">
        <p className="text-sm font-bold text-[#0d2b23]">Locked into a contract</p>
        <p className="text-xs text-[#61756f] mt-1">Happy or not, they can't move yet. We find the end date and stay in touch.</p>
      </li>
      <li className="bg-[#0d2b23] rounded-xl p-4 text-white">
        <Eyebrow className="!text-[#9daaa6] mb-1">We call here</Eyebrow>
        <p className="text-sm font-bold">Renewal window</p>
        <p className="text-xs text-[#9daaa6] mt-1">Renewal on the table. The meeting gets booked here.</p>
      </li>
      <li className="border border-slate-300 rounded-xl p-4">
        <p className="text-sm text-[#61756f]">New term</p>
      </li>
    </ol>
  </DiagramFrame>
);

const ManagedIT: React.FC<{ study: CaseStudyMeta }> = ({ study }) => (
  <>
    <Hero
      study={study}
      eyebrow="Industry · Managed IT & cyber security (MSPs)"
      callout={{
        label: 'In short',
        text: 'Most SMEs are locked into an IT support contract, so a great pitch on the wrong day goes nowhere. We research each prospect before the call, find out when their contract ends, and book the meeting for when they can actually switch.',
      }}
      chips={['UK SMEs and charities', 'Cold calling · Email · LinkedIn']}
      statsLabel="At a glance"
    />

    <div className="mt-16">
      <Section label="The one question that matters">
        <Statement strong="“When does your current IT agreement come up for renewal?”" muted="Everything else follows from the answer." />
        <ContractClock />
        <Caption>We use pre-call research and a non-confrontational way of asking, so prospects share their renewal date without feeling sold to.</Caption>
      </Section>

      <Section label="The two conversations we have">
        <Conversations
          items={[
            ['Tied into a contract that isn\'t working', '“Some MDs I speak to are locked into an IT contract where tickets sit for days, and they\'re counting down to the renewal.”'],
            ['Nobody owns cyber security', '“Others are happy with day-to-day support, but if insurance or a customer asked about their security, nobody internally could answer with confidence.”'],
          ]}
          footLabel="How we open"
          foot="“We haven't spoken before. Can I fly through? I decided to call you, and you let me know if it's relevant. Is that fair?”"
        />
      </Section>

      <Section label="Who we call">
        <ProseWithFacts
          facts={
            <FactList
              title="Who we call"
              rows={[
                ['Company size', 'SMEs with roughly 5–250 staff'],
                ['Sectors', 'Private and third sector organisations across the UK'],
                ['Titles', 'MDs and CEOs, Operations and Finance Directors, IT managers'],
                ['Timing', 'Approaching an IT contract renewal, or with no contract in place'],
              ]}
            />
          }
        >
          <p>Owner-managed businesses and charities, where the person who signs the IT contract is often the MD or the finance director, not an IT manager. Our messaging leans on business risk, compliance exposure and the cost of reactive IT, not on features.</p>
        </ProseWithFacts>
      </Section>

      <Section label="What's different about selling managed IT">
        <ArrowColumns
          items={[
            { title: "It's contract-locked.", text: 'We qualify on renewal timing, so meetings land when a switch is possible.' },
            { title: "Generic agencies don't get MSP sales.", text: 'SDRs learn your services and the words buyers use about IT support before a single call goes out.' },
            { title: 'Nobody knows which personas convert.', text: 'Call and meeting data comes back to you every month, so the ICP gets sharper over time.' },
          ]}
        />
      </Section>

      <Section label="What we've seen in this sector">
        <ResultCards
          items={[
            { eyebrow: 'Pipeline', title: '4–6 a month', text: 'Qualified meetings on average, across eight months of live outbound.', dark: true },
            { eyebrow: 'A playbook', title: 'Ready to hand over', text: 'Which personas and verticals convert, written down and usable from week one.' },
            { eyebrow: 'A hiring decision', title: 'First sales hire', text: 'The data to make an in-house sales hire with a clear brief, when the time is right.' },
          ]}
        />
      </Section>
    </div>

    <CtaPanel
      title="Running an MSP that grows on referrals?"
      bullets={[
        "Your best prospects are locked into someone else's contract",
        'You want meetings timed to renewals, not just more meetings',
        'You want to know which buyers convert before you hire a salesperson',
      ]}
    />
  </>
);

export default ManagedIT;
