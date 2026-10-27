import React from 'react';
import { CaseStudyMeta } from '../data';
import {
  Hero, Section, Lead, Statement, Prose, ProseWithFacts, FactList, StepCards, CtaPanel,
  ArrowColumns, ResultCards, FieldGrid, DiagramFrame, Eyebrow,
} from '../primitives';

const NOTICES: [string, string][] = [
  ['Award notice', "gives the end date of today's contract"],
  ['Pipeline notice', "the buyer's plans for the year ahead"],
  ['Market engagement', 'a chance to shape the spec'],
  ['Prior information', 'the tender is on its way'],
];

const SeeItComing: React.FC = () => (
  <DiagramFrame>
    {/* Desktop timeline */}
    <div className="hidden md:block">
      <div className="grid grid-cols-[4fr_1.25fr] gap-6 mb-4">
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0d2b23] mb-1.5">12–24 month forward view: where we work</p>
          <div className="h-1.5 rounded-full bg-[#0d2b23]" />
        </div>
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#61756f] mb-1.5">Little time left</p>
          <div className="h-1.5 rounded-full bg-slate-200" />
        </div>
      </div>
      <div className="relative grid grid-cols-[1fr_1fr_1fr_1fr_1.25fr] gap-2">
        <div className="absolute left-[10%] right-[2%] top-[2.05rem] h-px bg-[#61756f]" aria-hidden="true" />
        {NOTICES.map(([t, d]) => (
          <div key={t} className="flex flex-col items-center text-center">
            <p className="text-xs font-bold text-[#0d2b23] h-6">{t}</p>
            <span className="relative w-3.5 h-3.5 rounded-full bg-[#0d2b23] my-1" aria-hidden="true" />
            <p className="text-[11px] text-[#61756f] leading-snug mt-1">{d}</p>
          </div>
        ))}
        <div className="flex flex-col items-center text-center">
          <p className="text-xs font-bold text-[#0d2b23] h-6">Tender published</p>
          <span className="relative w-3.5 h-3.5 rounded-full bg-white border-2 border-[#0d2b23] my-1" aria-hidden="true" />
          <p className="text-[11px] text-[#61756f] leading-snug mt-1">where most bidders start <span className="mx-1">→</span> deadline</p>
        </div>
      </div>
      <div className="flex justify-between text-[11px] text-[#61756f] mt-6 px-2">
        <span>Earlier</span>
        <span>Later</span>
      </div>
    </div>

    {/* Mobile timeline */}
    <ol className="md:hidden relative border-l-2 border-[#0d2b23] ml-2 space-y-5">
      <li className="pl-5 -mt-1"><Eyebrow className="!text-[#0d2b23]">12–24 month forward view: where we work</Eyebrow></li>
      {NOTICES.map(([t, d]) => (
        <li key={t} className="pl-5 relative">
          <span className="absolute -left-[0.47rem] top-1 w-3 h-3 rounded-full bg-[#0d2b23]" aria-hidden="true" />
          <p className="text-sm font-bold text-[#0d2b23]">{t}</p>
          <p className="text-xs text-[#61756f]">{d}</p>
        </li>
      ))}
      <li className="pl-5 relative">
        <span className="absolute -left-[0.47rem] top-1 w-3 h-3 rounded-full bg-white border-2 border-[#0d2b23]" aria-hidden="true" />
        <Eyebrow className="mb-1">Little time left</Eyebrow>
        <p className="text-sm font-bold text-[#0d2b23]">Tender published</p>
        <p className="text-xs text-[#61756f]">where most bidders start → deadline</p>
      </li>
    </ol>
  </DiagramFrame>
);

const PublicSector: React.FC<{ study: CaseStudyMeta }> = ({ study }) => (
  <>
    <Hero
      study={study}
      eyebrow="Industry · Public sector bids & tenders"
      callout={{
        label: 'How this is different',
        text: "For public sector suppliers, we don't make cold calls. We run the research and reporting function behind the bid team: finding opportunities early, checking every date against the public record, and turning portal data into reports a bid director can act on.",
      }}
      chips={['UK public sector', 'Research · Reporting · Bid readiness']}
      statsLabel="At a glance"
    />

    <div className="mt-16">
      <Section label="What lands every week">
        <Lead>One report, the same shape every week, so the bid team knows exactly where to look.</Lead>
        <FieldGrid
          title="The weekly report"
          subtitle="what every opportunity comes with"
          right="Colour-coded, checked, every week"
          fields={[
            ['Value and contract length', "What it's worth, and for how long", 'So you can size the effort before you bid'],
            ['Deadline and countdown', 'Days to go, updated live', 'So nothing sneaks up on the bid team'],
            ['Buyer and contacts', "Who's buying, and who to speak to", 'So you can engage before the tender lands'],
            ['Incumbent', 'Who holds it today', "So you know who you're up against"],
            ['Live tender or market intel', 'Kept in separate lists', 'So urgent work never gets buried'],
            ['Our recommendation', 'Bid, watch or pass, with the reason', 'So the decision takes minutes, not a meeting'],
          ]}
        />
      </Section>

      <Section label="See it coming">
        <Lead>By the time a tender is published, the clock is already running and the spec is already written. The earlier notices give a 12–24 month view, and that's where we spend our time.</Lead>
        <SeeItComing />
      </Section>

      <Section label="The reports we build">
        <ResultCards
          items={[
            { eyebrow: 'Every week', title: 'Opportunities report', text: 'New tenders and notices, filed with value, deadline and contract length, split into live tenders and market intel.' },
            { eyebrow: 'Rolling', title: '12-month pipeline', text: 'Sorted by sector, then by date, with countdowns: window open now, under 3 months, 3–6, 6–12.' },
            { eyebrow: 'Per live bid', title: 'Bid timelines', text: 'A Gantt for each live bid, so every deadline on the way to submission is visible at a glance.' },
            { eyebrow: 'On request', title: 'Competitor spend reports', text: 'Who the public sector is paying, how much and when, matched against published notices.' },
            { eyebrow: 'On request', title: 'Market reports', text: 'Year-on-year views of a market, built from contract data and FOI requests to 100+ councils.' },
            { eyebrow: 'Every opportunity', title: 'Fit scoring', text: 'Each contract scored 0–100 against your spec, so the bid team only reads what fits.' },
          ]}
        />
      </Section>

      <Section label="Follow the money">
        <Statement strong="“The money trail is always there." muted="The paperwork trail sometimes isn't.”" />
        <Prose>
          <p>Public bodies publish their spending every month. A lot of buying never gets its own tender notice: framework call-offs, direct renewals, purchases under the threshold. Watching tenders alone misses all of it.</p>
          <p>So we read the spend data too. It shows who is actually being paid, by whom and how often, including deals a tender search would never find.</p>
        </Prose>
      </Section>

      <Section label="Checked against the record">
        <Statement strong="A pipeline is only as good as its dates." muted="So we check every one." />
        <Prose>
          <p>Estimated dates drift. Contracts close early, values get understated, and re-procurements move by years. When we review a pipeline, each date is checked against award notices and the public record, with the source linked so you can check it yourself.</p>
          <p>We don't quietly change your numbers. Anything that doesn't match is flagged, with the evidence, for you to decide.</p>
        </Prose>
      </Section>

      <Section label="Getting the search right">
        <ArrowColumns
          items={[
            { title: 'Category codes alone miss too much.', text: 'We pair CPV codes with tight keyword sets and exclusion terms, built in tiers and rated for noise.' },
            { title: "Titles hide what's inside.", text: "Many contracts are called something like “Lot 3”. Spec-language keywords catch what a title search can't." },
            { title: 'Live tenders are the last place to look.', text: 'We search pipeline notices, market engagement, prior information and award notices first.' },
          ]}
        />
      </Section>

      <Section label="Who it's for">
        <ProseWithFacts
          facts={
            <FactList
              title="At a glance"
              rows={[
                ['Buyers we track', 'UK public sector contracting authorities: councils, NHS, police, prisons and more'],
                ['Sources', 'Tender portals, spend data, award notices and FOI responses'],
                ['Who uses it', 'Bid directors, bid managers and business development leads'],
              ]}
            />
          }
        >
          <p>Suppliers and bid consultancies that win work through UK public sector procurement, and need someone to run the research every week so the bid team can focus on writing.</p>
        </ProseWithFacts>
      </Section>

      <Section label="How it runs">
        <StepCards
          steps={[
            { when: 'Set-up', title: 'Search built around you', text: 'Historical searches to set the parameters, keyword sets tuned to your services, and alerts on the specialist procurement tools.' },
            { when: 'Every week', title: 'Report and review', text: 'New opportunities filed and summarised, incumbents researched, FOI data cross-referenced, and the pipeline kept up to date.' },
          ]}
        />
        <ResultCards
          items={[
            { eyebrow: 'Longest-running', title: 'Approaching 2 years', text: 'Our longest public sector research partnership, with the scope expanded at renewal.', dark: true },
            { eyebrow: 'Next', title: 'Ahead of the re-tender', text: 'Tracking end dates on existing awards, to surface re-tenders before any notice goes out.' },
          ]}
        />
      </Section>
    </div>

    <CtaPanel
      title="Bidding for public sector contracts?"
      bullets={[
        "You find out about tenders when they're published, not before",
        'Your bid team spends hours on portals instead of writing',
        'You want weekly reports you can act on, with every date checked',
      ]}
      blurb="A research and reporting function that runs every week, without hiring an analyst."
    />
  </>
);

export default PublicSector;
