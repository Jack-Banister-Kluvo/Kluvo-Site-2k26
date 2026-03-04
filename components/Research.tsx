
import React, { useState, useEffect } from 'react';

interface ResearchItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  pdfUrl: string;
  heroImage?: string;
  blogContent?: string;
}

interface ResearchProps {
  onCtaClick: () => void;
}

const RESEARCH_DATA: ResearchItem[] = [
  {
    id: '11',
    slug: 'self-educated-buyer',
    title: 'The New B2B Growth Equation: Navigating the Non-Linear Buyer Journey',
    description: 'The traditional B2B sales funnel is no longer a functional model — it is a systemic liability. Buyer self-education has replaced linear progression with a complex, non-linear "looping" journey. This report deconstructs buyer archetypes, the six critical buying jobs, and the omnichannel standard required to win in 2025.',
    date: 'Mar 2026',
    readTime: '10 min read',
    pdfUrl: '',
    heroImage: `${import.meta.env.BASE_URL}research/self-educated-buyer.png`,
    blogContent: `The traditional B2B sales funnel—the long-standing architecture of go-to-market strategy—is no longer a functional model; it is a systemic liability. The shift toward buyer self-education has replaced linear progression with a complex, non-linear "looping" journey. Organizations clinging to the "Lead/Contact" logic fail to recognize that the modern buyer does not move predictably from top to bottom. Instead, they oscillate between discovery, validation, and internal socialization, often bypassing traditional sales intervention entirely until the final stages of a decision.

This autonomy is driven by the "debt of obligation." In the modern psychological landscape, the internet serves as a shield. Buyers use digital signals to research in anonymity because engaging a sales representative prematurely incurs an implicit pressure to buy—a debt they are unwilling to pay while still defining their point of view. This has radically inverted the power dynamic: the researcher, not the seller, now controls the narrative and the pace of the engagement.

> **Between 75% and 80% of the B2B buyer journey now occurs before a sales representative is ever contacted. Buyers are navigating nearly the entire process independently, prioritizing digital self-service to avoid becoming "just another line in the CRM" until they have reached a high level of certainty.**

To survive this shift, the competitive mandate requires a total abandonment of the funnel. Success in 2025 demands an architecture aligned with the specific psychological stages and "buying jobs" that customers must complete long before a commercial conversation is even permissible.

## The Buyer Identity: Skeptical, Self-Informed, and Overwhelmed

Strategically defining the modern buyer profile is mandatory in a market where 59% of decision-makers are now Millennials. This demographic is digitally native, but their behavior contains a critical nuance: while 64% prefer a digital-only experience for familiar products, they increasingly seek human expertise when product familiarity or category complexity is low.

A "Buyer Paradox" has emerged. Buyers demand "rep-free" experiences to maintain control, yet the sheer volume of digital noise often results in "purchase regret" and decision paralysis when they navigate alone. This confusion is a revenue-killer. Furthermore, 68% of customers are lost not to competitive superiority, but to "perceived indifference." A lack of proactive, high-value engagement during the self-education phase is interpreted by the buyer as a lack of organizational competence.

### The 2025 Buyer Reality

| Dimension | Data Point | Strategic Mandate |
| :---- | :---- | :---- |
| **Research Independence** | 71% of prospects prefer independent research. | Deliver "shield-friendly" content that educates without immediate gating. |
| **Content Fatigue** | 69% report AI/Spam and content fatigue. | Pivot from generic automation to high-fidelity, human-verified insights. |
| **Consensus Complexity** | 9–14 stakeholders in a typical buying committee. | Equip internal advocates with the materials to sell to their own diverse boards. |

The transition from "who" the buyer is to "how" they move requires a breakdown of the specific objectives they are trying to solve in a non-linear framework.

## Deconstructing the Journey: Archetypes and Buying Jobs

Moving from "leads" to a "Jobs-to-be-Done" framework is a strategic necessity. Revenue Architects must align their resources with Antonia Wade's five buyer archetypes and Gartner's six critical buying "jobs."

### The Five Archetypes

1. **Horizon Scanner:** Looking for long-term threats and opportunities.
2. **Explorer:** Socializing ideas and creating business cases internally.
3. **Hunter:** Actively in the market looking for solutions.
4. **Active Buyer:** Shortlisting and evaluating specific vendors.
5. **Client:** Focused on loyalty, advocacy, or expanding share of wallet.

### The Six Buying Jobs

- **Problem Identification:** "We need to do something."
- **Solution Exploration:** "What is out there to solve this?"
- **Requirements Building:** "What exactly do we need the purchase to do?"
- **Supplier Selection:** "Does this specific vendor meet our criteria?"
- **Validation:** "We think we have the answer, but we need to be sure."
- **Consensus Creation:** "We need to get all 9–14 stakeholders on board."

### The "Horizon Scanner" Strategic Focus

Marketing must focus 100% on the buyer's pain points, threats, and opportunities at this stage. The Horizon Scanner is not looking for a brand; they are looking for expertise to help them architect a future strategy. Brand-centric content here is a failure of logic; if you talk about your capabilities before their problem is defined, you lose the opportunity to shape their requirements.

### Hunter vs. Active Buyer

- **The Hunter:** Competition is the status quo. The goal is "Solution Exploration."
- **The Active Buyer:** Competition is the shortlist. The goal is "Differentiation."

As a buyer moves into shortlisting, the vendor's role shifts from educator to differentiator. Because buyers "loop" through these jobs—often returning to Requirements Building even after Supplier Selection has begun—your delivery mechanism must be omnipresent across every channel.

## The Omnichannel Standard: The "Rule of Thirds" and Beyond

B2B organizations must offer ten or more channels to capture market share. This is no longer optional; it is the baseline for relevance.

### The McKinsey "Rule of Thirds" Equilibrium

The modern go-to-market model has reached an equilibrium where buyers demand an equal split between three interaction modes:

1. **Traditional:** In-person interactions for high-stakes relationship building and assessing intangibles.
2. **Remote:** Video and phone for speed, agility, and personalized guidance.
3. **Digital Self-Service:** Portals and e-commerce for convenience and independent research.

### Personalization Prowess

A massive competitive gap exists in personalization. While 51% of organizations rely on lazy, segment-based templates, only 5% of senders personalize at the individual level. Those who master "Personalization Prowess"—using data to respond to specific emotional and organizational cues—achieve 2-3x higher reply rates.

### The Five New Must-Dos for Brand Loyalty

To prevent customer churn to "omni-ready" competitors, leaders must implement:

- **Performance Guarantees:** Full refunds or credits if agreed-upon results are not met.
- **Online Product Availability:** Real-time visibility into stock or service capacity.
- **Omnichannel Purchasing:** The ability to start a transaction on one channel and finish on another.
- **Real-Time Service:** Immediate, 24/7 access to support or experts.
- **Consistent Experience:** Seamless data and narrative transitions as buyers toggle between channels.

## Strategic Execution: Human-Led, Digital-First Tactics

The salesperson's role has been redefined from "closer" to "Guide." In a world of information overload, the human guide reduces confusion and provides orientation.

### The "Video Guide" Competitive Differentiator

Generic video outreach is failing. The "Video Guide" approach involves a personalized screen record of a custom resource page or portal created specifically for the buyer. The rep walks the buyer through the specific documents, narrating the journey, pointing out the exact minute-marker in a demo relevant to their pain point, and introducing themselves to the stakeholders they may never meet in person. This "orientation" mindset builds the internal advocate necessary to win the 130% higher win rates associated with multi-threading.

### AI-Driven Revenue Optimization

- **Administrative Efficiency:** 81% of leaders use AI to reduce manual tasks, freeing reps to act as guides.
- **Sentiment Analysis:** Deploying tools to respond to emotional buyer cues (skepticism, urgency, confusion) allows for real-time recalibration of the sales approach.

### Marketing as the Revenue Experience Setter

The traditional silo between sales and marketing is a revenue-killer. The most successful organizations adopt a radical rebalancing: **Marketing sets the client experience and defines the narrative, while Sales services that experience.** The ultimate goal is turning the customer into a "Promoter" to fuel the 54% of B2B leads generated by referrals.

## Strategic Summary: The 2025 Growth Checklist

The transition from a linear funnel to an omnichannel flywheel requires an authoritative shift in leadership mindset. Meeting the buyer in their non-linear reality is the only path to sustainable growth.

### Actionable Checklist for Leaders

- **Dismantle the Funnel:** Transition to a flywheel model that prioritizes the "attract, engage, delight" loop to maximize the 54% referral rate.
- **Deploy 10+ Integrated Channels:** Ensure equilibrium across Traditional, Remote, and Self-Service modes.
- **Audit Content against Gartner's 6 "Buying Jobs":** Verify that marketing materials support Problem ID and Consensus Creation, not just product features.
- **Mandate 1:1 Personalization:** Pivot away from segment templates; verify 2-3x reply rates through individualized outreach.
- **Implement Hybrid Sales Models:** Hybrid roles are 28% more likely to outperform; prioritize these to bridge the gap between digital and human.
- **Leverage Sentiment Analysis:** Use AI to identify emotional cues in "Hunter" and "Active Buyer" stages to reduce purchase regret.

**The Commercial Conversation:** Leaders must engage in a sophisticated conversation regarding ROI timeframes. Marketing activities focused on "Horizon Scanning" (top-of-funnel expertise) are long-term plays for future demand and cannot be judged by the same quarterly ROI metrics as bottom-funnel sales enablement. By acknowledging these different time horizons and aligning them with the buyer's "debt of obligation," B2B organizations evolve from pushy vendors into indispensable strategic partners.`,
  },
  {
    id: '10',
    slug: 'controlled-outbound-buyer-market',
    title: 'Controlled Outbound in an Uncontrolled Buyer Market',
    description: 'The year 2025 marks a definitive tipping point in B2B procurement. Millennials and Gen Z now command 71–73% of buying influence, and the traditional sales playbook is an obsolete liability. This report decodes the generational shift, the self-guided buyer journey, and the strategic roadmap for winning the 2025 B2B buyer.',
    date: 'Feb 2026',
    readTime: '12 min read',
    pdfUrl: '',
    heroImage: `${import.meta.env.BASE_URL}research/controlled-outbound-buyer-market.png`,
    blogContent: `The year 2025 marks a definitive tipping point in B2B procurement. We are witnessing a demographic coup as the "generational guard" shifts, rendering traditional sales playbooks **obsolete liabilities**. These frameworks were built for an analog-first workforce that no longer holds the keys to the budget. Today's decision-makers are digital natives who have imported high-speed, high-transparency consumer expectations into the enterprise. For the modern CMO or VP of Sales, the disconnect isn't merely a marketing gap; it is a fundamental failure to align with the new architects of organizational spend.

### Generational Breakdown of the 2025 B2B Workforce

| Generation | Approximate % of Buying Influence | Core Buying Identity |
| :---- | :---- | :---- |
| **Millennials** | 73% | Trust-Anchored & Experience-Driven |
| **Gen Z** | 9% - 27% (Rising) | Hyper-Connected & Authenticity-Seeking |
| **Gen X** | 30% | Outcome-Focused & Skeptical |
| **Baby Boomers** | 6% | Relationship & Reputation-Driven |

*Note: Millennials and Gen Z combined now command 71–73% of B2B buying influence.*

This demographic dominance has birthed the **"Rebel Buyer."** This cohort is strategically **allergic to being sold to**. They do not view themselves as "leads" in a CRM; they are independent researchers on a mission to solve problems without vendor interference. The Rebel Buyer is defined by three disruptive traits:

- **Radical Self-Education:** They utilize "Dark Social"—private Slack communities, Reddit, and peer networks—as their primary validation engine to bypass early-stage sales intervention.
- **Value-Alignment:** Procurement is no longer just about features; they prioritize a vendor's purpose, sustainability, and DEI initiatives as core selection criteria.
- **Transparency-Demand:** They have zero tolerance for "gatekeeping." If pricing, ROI evidence, or product specs are hidden behind a "Contact Us" form, they will strike the vendor from the shortlist instantly.

As power consolidates within this group, the purchase journey has moved entirely into the digital landscape, long before a salesperson is ever granted an audience.

## Anatomy of the Modern Purchase Journey: 70% Done Before Hello

The modern B2B journey is defined by a fierce preference for a "Rep-Free" experience. When 75% of buyers state they would prefer to navigate the entire cycle without a sales representative, the strategic danger of premature sales intervention cannot be overstated. Engaging a digital-native buyer too early is viewed as an intrusion, often leading to immediate disqualification.

### The Self-Guided Purchase Journey: Prescriptive Directives

1. **Independent Research:** Buyers identify problems and vet solutions via search and social media.
   - **Directive:** Repurpose 40% of your SDR budget into high-intent content assets. Your website must now qualify the buyer; it is no longer a brochure, but your primary automated SDR.
2. **Social Validation & "Dark Social":** Buyers consult peer networks (Slack, LinkedIn) to verify vendor claims.
   - **Directive:** Invest in community marketing and brand evangelism. If your solution isn't being discussed positively in non-indexed social circles, you are effectively invisible.
3. **Self-Guided Evaluation:** Buyers consume exactly **13 pieces of content** (8 vendor-created, 5 third-party) before engagement.
   - **Directive:** Your content architecture must provide enough technical depth to satisfy a 200+ day research cycle. If you lack third-party validation (expert opinions, independent reviews), you will fail the 5-piece external trust requirement.

> **The average B2B customer journey has expanded to 211 days. Buyers are now 70% to 80% through this journey before they ever engage with a seller.**

As the journey becomes more self-led, the internal path to a signature becomes significantly more crowded.

## The Complexity Crisis: Multi-Stakeholder Committees and Stall Cycles

Individual decision-makers have been replaced by "Consensus-Building" committees designed to mitigate economic risk. This expansion creates a "Friction of Consensus," where a Gen Z researcher's demand for speed and vertical video clashes with a Boomer's demand for a 50-page ROI analysis.

### Stakeholder Profile Matrix

| Stakeholder | Influence | Primary "Gatekeeper" Role / Deal Breakers |
| :---- | :---- | :---- |
| **Managers** | 47% | **The Evaluator:** Blocks deals if the solution creates high friction or steep learning curves for the team. |
| **VPs / Executives** | 52% | **The Strategist:** Focuses on long-term impact and strategic alignment. Blocks deals lacking vision. |
| **CFO** | 79% (IT Deals) | **The Economic Gatekeeper:** 93% of buyers require a formal business case. Blocks if ROI is not demonstrated within 6 months. |
| **Legal** | 61% (Block Rate) | **The Compliance Officer:** Blocks or slows 61% of cases due to security, compliance, or contract terms. |

With committees often exceeding 10 stakeholders (and 21% of deals involving 10+), **86% of B2B purchases stall**. To counter this, sales teams must move from "the pitch" to "stakeholder enablement."

**Stall Mitigation Checklist:**

- **Business Case Frameworks:** Arm your champion with data-driven templates to satisfy the 93% CFO requirement.
- **Executive Briefs:** Distill 50-page decks into high-signal one-pagers for VPs.
- **Proof-of-Concept (PoC) Trials:** Use pilots to de-risk the decision for skeptical technical stakeholders.

In a 12-month average buying cycle, patience is a strategic asset. Success requires providing hyper-personalized trust signals to every unique persona on the committee.

## The Generational Playbook: Tailoring Engagement by Cohort

Segmenting by job title is insufficient. Organizations must account for "Moments of Honesty"—the generational triggers that either build or destroy trust.

### Engagement Preferences by Generation

| Generation | Preferred Channel | Content Depth | Key Trust Signal | Cadence Tolerance |
| :---- | :---- | :---- | :---- | :---- |
| **Gen Z** | Social / Video | Skimmable (90s) | Digital Speed | High / Interactive |
| **Millennials** | Email / Social | Deep / Educational | Peer Verification | Moderate / Value-led |
| **Gen X** | Email | Concrete / Metric-led | Case Studies / ROI | Low / High Signal |
| **Boomers** | Phone / Email | Professional / Full | Reputation / Stability | Monthly (Very Low) |

#### Millennials: Fluff-Free Substance

Millennials are the most influential buying group today and are "allergic to fluff." They reward expertise over slogans. To win, you must provide the "internal case" ammunition they need to look smart. If your marketing lacks technical substance, they will tune out immediately.

#### Gen Z: The "Tik-Tokification" of B2B

Gen Z expects B2C-level digital responsiveness. They favor 60–90 second vertical videos that deliver value instantly. For this cohort, technology is the doorway; a clunky mobile experience or a 24-hour response delay is a disqualifying event.

The universal constant across these cohorts is a non-negotiable demand for transparency and peer-verified proof.

## The New Currency of B2B: Trust, Transparency, and Social Proof

We are in a "Brand Crisis" where **81% of buyers** are dissatisfied with their providers. Trust is now the ultimate competitive differentiator.

### The Hierarchy of Trust

1. **Peer Reviews & Social Proof:** 2.5x more trusted than vendor content.
2. **Case Studies:** Essential for the 93% business case requirement.
3. **Analyst Reports:** Trust has declined by 60% since 2022; buyers prefer "unfiltered" data.
4. **Vendor Claims:** The least influential factor in the final decision.

### AI's Impact on Research: Authority Search Optimization (ASO)

AI is shortening the shortlist faster than ever. As buyers utilize AI Overviews for deep research, **90% of buyers click on the sources cited** in those overviews. To survive, your brand must have an established footprint of authority and trust across the web, or AI-driven tools will exclude you before the manual search even begins.

## Strategic Roadmap: Winning the 2025 Buyer

The winners of 2025 will be those who facilitate a frictionless, consultative, and omnichannel experience.

### 2025 Growth Checklist for B2B Leaders

- **Audit for Velocity:** Optimize website and mobile speed; 97% of buyers cite speed as a key evaluation factor.
- **Ungate High-Value Assets:** Replace lead-gen forms with value-first resources to reduce friction during the 70% self-guided phase.
- **Deploy Intent-Driven Outreach:** Use signals to engage buyers when they are "warming up" on third-party sites, rather than relying on blind cold outreach.

### Evolution: From Pitchman to Transparent Advisor

Sales teams must evolve their tactical approach based on cohort-specific needs:

1. **Proof-First Orchestration (Gen X):** Lead with your clearest metric-driven case study to earn Gen X's limited attention.
2. **Tik-Tokified Technical Overviews (Gen Z):** Deliver 90-second vertical video summaries of technical specs to meet Gen Z's demand for rapid, digital-first value.
3. **Establish Trust Portals (Universal):** Provide frictionless access to pricing, security certifications, and ROI calculators.

In the 2025 market, **Clarity beats Chaos.** Understanding the "whole human" behind the job title—their generational fears and digital habits—is the only way to unlock the new B2B code.`,
  },
  {
    id: '1',
    slug: 'outbound-paradox',
    title: 'The Outbound Paradox: Why More Activity Is Yielding Less Pipeline',
    description: 'Revenue leaders are investing more than ever in tools and expanding sales teams, yet returns are diminishing. SDRs spend just 28% of their time selling, cold email reply rates have fallen to 1–5%, and cold calling success rates sit at 2.3%. This paper dissects why brute-force volume is failing and how to fix the system.',
    date: 'Jan 2026',
    readTime: 'White Paper',
    pdfUrl: `${import.meta.env.BASE_URL}research/outbound-paradox.pdf`,
  },
  {
    id: '2',
    slug: 'hidden-cost-of-hiring',
    title: 'The Hidden Cost of In-House SDR Teams That Never Shows Up on a P&L',
    description: 'Standard P&L statements capture salaries and commissions but conceal a vast ecosystem of indirect expenses, operational friction, and crippling opportunity costs. This white paper deconstructs the Total Cost of Ownership of an in-house SDR team with a framework for strategic investment.',
    date: 'Jan 2026',
    readTime: 'White Paper',
    pdfUrl: `${import.meta.env.BASE_URL}research/hidden-cost-of-hiring.pdf`,
  },
  {
    id: '3',
    slug: 'pipeline-illusion',
    title: "The Pipeline Illusion: Why 'More Leads' Is the Wrong Fix for a Broken Sales Process",
    description: "When revenue stalls, the default reaction is 'we need more leads.' This knee-jerk response masks deeper problems. True growth comes from optimizing the conversion engine, not pouring more volume into the funnel. We dissect the financial, operational, and cultural costs of a bloated pipeline.",
    date: 'Jan 2026',
    readTime: 'White Paper',
    pdfUrl: `${import.meta.env.BASE_URL}research/pipeline-illusion.pdf`,
  },
  {
    id: '4',
    slug: 'execution-imperative',
    title: 'The Execution Imperative: Why Revenue Leaders Are Prioritizing Action Over Architecture',
    description: 'Despite aggressive investment in specialized tools, growth stalls between $10M and $20M ARR. Fragmented stacks introduce friction, disconnected data, and misaligned incentives. This paper explores why RevOps is the connective tissue that replaces reactive management with disciplined execution.',
    date: 'Jan 2026',
    readTime: 'White Paper',
    pdfUrl: `${import.meta.env.BASE_URL}research/execution-imperative.pdf`,
  },
  {
    id: '5',
    slug: 'speed-to-lead',
    title: 'Speed to Lead 2.0: Driving Competitive Advantage Through Instant Engagement',
    description: 'The B2B revenue landscape has shifted from a race of persistence to a race of near-zero latency. Consumer conditioning has compressed acceptable responsiveness from hours to seconds. This paper makes the case for AI-orchestrated, 24/7 engagement engines that treat responsiveness as a core product feature.',
    date: 'Jan 2026',
    readTime: 'White Paper',
    pdfUrl: `${import.meta.env.BASE_URL}research/speed-to-lead.pdf`,
  },
  {
    id: '6',
    slug: 'follow-up-problem',
    title: "Why Sales Teams Don't Have a Lead Problem — They Have a Follow-Up Problem",
    description: 'Organizations exhaust capital to generate inquiries, only to treat those hard-won leads as disposable. 48% of salespeople never attempt a single follow-up, and only 25% contact a lead more than once. This paper provides a strategic framework for maximizing lead utilization over lead volume.',
    date: 'Jan 2026',
    readTime: 'White Paper',
    pdfUrl: `${import.meta.env.BASE_URL}research/follow-up-problem.pdf`,
  },
  {
    id: '7',
    slug: 'high-performing-outbound-teams',
    title: 'What High-Performing Outbound Teams Do Differently (That No One Talks About)',
    description: 'Sales cycles have extended 40%+ while deal sizes have declined. Automation-driven volume has become a commodity. High-performing teams optimize for value-based velocity: fewer, better conversations that convert faster. This paper reveals the data revolution eliminating the research bottleneck.',
    date: 'Jan 2026',
    readTime: 'White Paper',
    pdfUrl: `${import.meta.env.BASE_URL}research/high-performing-outbound-teams.pdf`,
  },
  {
    id: '8',
    slug: 'invisible-tax-sales-pipelines',
    title: 'The Invisible Tax: The Multi-Dimensional Cost of Late and Inaccurate Sales Pipelines',
    description: 'A late pipeline is not bad luck — it is a clinical breakdown in Revenue Operations governance. When the forecast fails, it compromises fiscal stability. This paper provides a RevOps framework for pipeline predictability and yield, dismantling the 3x pipeline myth.',
    date: 'Jan 2026',
    readTime: 'White Paper',
    pdfUrl: `${import.meta.env.BASE_URL}research/invisible-tax-sales-pipelines.pdf`,
  },
  {
    id: '9',
    slug: 'architecture-of-stillness',
    title: 'The Architecture of Stillness: Leveraging Strategic Silence for Sales Mastery',
    description: 'In a business environment dominated by relentless noise, silence has emerged as a high-value professional asset. Behavioral science reveals that intentional stillness creates cognitive margin, authority, and space for authentic disclosure. This paper transforms professional interactions through mastery of strategic pause.',
    date: 'Jan 2026',
    readTime: 'White Paper',
    pdfUrl: `${import.meta.env.BASE_URL}research/architecture-of-stillness.pdf`,
  },
];

// Helper to find a paper by slug
export const getResearchBySlug = (slug: string): ResearchItem | undefined => {
  return RESEARCH_DATA.find(item => item.slug === slug);
};

export const getAllResearchSlugs = (): string[] => {
  return RESEARCH_DATA.map(item => item.slug);
};

// Simple markdown-to-JSX renderer for blog content
const BlogContent: React.FC<{ content: string }> = ({ content }) => {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  const parseInline = (text: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let partKey = 0;

    while (remaining.length > 0) {
      // Bold
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
      if (boldMatch && boldMatch.index !== undefined) {
        if (boldMatch.index > 0) {
          parts.push(remaining.slice(0, boldMatch.index));
        }
        parts.push(<strong key={partKey++} className="text-[#0d2b23] font-bold">{boldMatch[1]}</strong>);
        remaining = remaining.slice(boldMatch.index + boldMatch[0].length);
        continue;
      }
      // Italic
      const italicMatch = remaining.match(/\*(.+?)\*/);
      if (italicMatch && italicMatch.index !== undefined) {
        if (italicMatch.index > 0) {
          parts.push(remaining.slice(0, italicMatch.index));
        }
        parts.push(<em key={partKey++} className="text-[#61756f]">{italicMatch[1]}</em>);
        remaining = remaining.slice(italicMatch.index + italicMatch[0].length);
        continue;
      }
      parts.push(remaining);
      break;
    }
    return parts;
  };

  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines
    if (line.trim() === '') {
      i++;
      continue;
    }

    // H2
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-3xl font-black text-[#0d2b23] tracking-tight mt-16 mb-6 pt-8 border-t border-slate-100">
          {parseInline(line.slice(3))}
        </h2>
      );
      i++;
      continue;
    }

    // H4
    if (line.startsWith('#### ')) {
      elements.push(
        <h4 key={key++} className="text-xl font-black text-[#0d2b23] tracking-tight mt-8 mb-3">
          {parseInline(line.slice(5))}
        </h4>
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={key++} className="text-2xl font-black text-[#0d2b23] tracking-tight mt-10 mb-4">
          {parseInline(line.slice(4))}
        </h3>
      );
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith('> ')) {
        quoteLines.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <blockquote key={key++} className="border-l-4 border-[#2e4841] bg-[#f0f4f2] rounded-r-2xl px-8 py-6 my-8 text-[#0d2b23] font-bold text-lg leading-relaxed">
          <p>{parseInline(quoteLines.join(' '))}</p>
        </blockquote>
      );
      continue;
    }

    // Table
    if (line.includes('|') && line.trim().startsWith('|')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].includes('|') && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      const parseRow = (row: string) =>
        row.split('|').slice(1, -1).map(cell => cell.trim());

      const headers = parseRow(tableLines[0]);
      const bodyRows = tableLines.slice(2).map(parseRow);

      elements.push(
        <div key={key++} className="overflow-x-auto rounded-2xl border border-slate-200 my-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                {headers.map((h, hi) => (
                  <th key={hi} className="bg-[#0d2b23] text-white font-bold px-5 py-3.5 text-left text-xs uppercase tracking-wider">
                    {parseInline(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 1 ? 'bg-[#f8faf9]' : 'bg-white'}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="border-b border-slate-100 px-5 py-3.5 text-[#3d4f4a] font-medium">
                      {parseInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const items: React.ReactNode[] = [];
      while (i < lines.length && (/^\d+\.\s/.test(lines[i]) || lines[i].startsWith('   '))) {
        if (/^\d+\.\s/.test(lines[i])) {
          items.push(
            <li key={items.length} className="text-[#3d4f4a] font-medium leading-[1.8] mb-2">
              {parseInline(lines[i].replace(/^\d+\.\s/, ''))}
            </li>
          );
        } else if (lines[i].trim().startsWith('- ')) {
          items.push(
            <li key={items.length} className="ml-6 list-disc text-[#3d4f4a] font-medium leading-[1.8] mb-1">
              {parseInline(lines[i].trim().slice(2))}
            </li>
          );
        }
        i++;
      }
      elements.push(
        <ol key={key++} className="list-decimal pl-6 my-6 space-y-1">
          {items}
        </ol>
      );
      continue;
    }

    // Unordered list
    if (line.startsWith('- ')) {
      const items: React.ReactNode[] = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(
          <li key={items.length} className="text-[#3d4f4a] font-medium leading-[1.8] mb-2">
            {parseInline(lines[i].slice(2))}
          </li>
        );
        i++;
      }
      elements.push(
        <ul key={key++} className="list-disc pl-6 my-6 space-y-1">
          {items}
        </ul>
      );
      continue;
    }

    // Regular paragraph
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !lines[i].startsWith('#') &&
      !lines[i].startsWith('- ') &&
      !lines[i].startsWith('> ') &&
      !/^\d+\.\s/.test(lines[i]) &&
      !(lines[i].includes('|') && lines[i].trim().startsWith('|'))
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      elements.push(
        <p key={key++} className="text-[#3d4f4a] text-lg leading-[1.8] font-medium my-6">
          {parseInline(paraLines.join(' '))}
        </p>
      );
    }
  }

  return <>{elements}</>;
};

const Research: React.FC<ResearchProps & { selectedSlug?: string | null }> = ({ onCtaClick, selectedSlug }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const selectedArticle = selectedSlug ? getResearchBySlug(selectedSlug) : null;

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    if (selectedArticle) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedArticle]);

  // Individual article view
  if (selectedArticle) {
    return (
      <div className="bg-white min-h-screen">
        <div
          className="fixed top-20 left-0 h-1 bg-[#2e4841] z-[60] transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-32">
          <button
            onClick={() => {
              window.history.pushState({}, '', '/research');
              window.dispatchEvent(new PopStateEvent('popstate'));
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-2 text-[#9daaa6] hover:text-[#0d2b23] font-bold text-xs uppercase tracking-widest mb-12 transition-colors group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Back to Research
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <span className="bg-[#fcfcfc] border border-slate-100 text-[#2e4841] text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full">
                    {selectedArticle.blogContent ? 'Research Article' : 'White Paper'}
                  </span>
                  <span className="text-[#9daaa6] text-[10px] font-black uppercase tracking-[0.2em]">
                    {selectedArticle.date} • Kluvo Research
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-[#0d2b23] leading-tight tracking-tighter mb-10">
                  {selectedArticle.title}
                </h1>

                <p className="text-[#61756f] text-xl leading-relaxed mb-10 font-medium">
                  {selectedArticle.description}
                </p>

                {selectedArticle.blogContent ? (
                  <>
                    {selectedArticle.heroImage && (
                      <div className="rounded-[32px] overflow-hidden border border-slate-100 mb-12">
                        <img
                          src={selectedArticle.heroImage}
                          alt={selectedArticle.title}
                          className="w-full h-auto"
                        />
                      </div>
                    )}
                    <div className="max-w-none">
                      <BlogContent content={selectedArticle.blogContent} />
                    </div>
                  </>
                ) : (
                  <>
                    {/* PDF Embed */}
                    <div className="rounded-[32px] overflow-hidden border border-slate-100 bg-[#fcfcfc]">
                      <iframe
                        src={selectedArticle.pdfUrl}
                        className="w-full border-0"
                        style={{ height: '80vh' }}
                        title={selectedArticle.title}
                      />
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <a
                        href={selectedArticle.pdfUrl}
                        download
                        className="inline-flex items-center gap-3 bg-[#0d2b23] text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-[#2e4841] active:scale-95 shadow-xl shadow-[#0d2b23]/20"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download PDF
                      </a>
                      <a
                        href={selectedArticle.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white text-[#0d2b23] border border-slate-200 px-8 py-4 rounded-xl font-bold transition-all hover:border-[#2e4841] active:scale-95"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Open in New Tab
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-[#0d2b23] rounded-[32px] p-8 text-white shadow-2xl">
                  <h3 className="text-2xl font-black mb-4">Ready to scale?</h3>
                  <p className="text-[#9daaa6] mb-8 font-medium">Get a custom strategy audit for your outbound sales engine.</p>
                  <button
                    data-cal-link="sales-team/sales-discovery"
                    data-cal-namespace="sales-discovery"
                    data-cal-config='{"layout":"month_view","theme":"light"}'
                    className="w-full bg-white text-[#0d2b23] py-4 rounded-xl font-black transition-all hover:scale-105 active:scale-95"
                  >
                    Book Discovery Call
                  </button>
                </div>

                <div className="bg-white border border-slate-100 rounded-[32px] p-8">
                  <h4 className="font-black text-[#0d2b23] mb-6 uppercase text-[10px] tracking-[0.2em]">More Research</h4>
                  <div className="space-y-6">
                    {RESEARCH_DATA.filter(a => a.slug !== selectedSlug).slice(0, 3).map(item => (
                      <button
                        key={item.id}
                        onClick={() => {
                          window.history.pushState({}, '', `/research/${item.slug}`);
                          window.dispatchEvent(new PopStateEvent('popstate'));
                          window.scrollTo(0, 0);
                        }}
                        className="text-left group block"
                      >
                        <span className="text-[10px] font-black uppercase text-[#2e4841] block mb-2">White Paper</span>
                        <h5 className="font-bold text-[#0d2b23] group-hover:text-[#2e4841] transition-colors leading-tight">{item.title}</h5>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Listing view
  const highlightedItem = RESEARCH_DATA[0];
  const remainingItems = RESEARCH_DATA.slice(1);

  const navigateToArticle = (slug: string) => {
    window.history.pushState({}, '', `/research/${slug}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-[#61756f] font-bold tracking-[0.4em] text-[10px] uppercase block mb-4">
            Kluvo Insights & Research
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-[#0d2b23] mb-8 tracking-tighter">
            Research <span className="text-[#2e4841] italic">&</span> White Papers
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-32 relative z-10 space-y-12">
        {/* Highlighted Featured Item */}
        {highlightedItem && (
          <div
            onClick={() => navigateToArticle(highlightedItem.slug)}
            className="group cursor-pointer bg-white border border-slate-100 rounded-[48px] overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#2e4841]/20 transition-all duration-700"
          >
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[#2e4841] text-[10px] font-black uppercase tracking-widest bg-[#fcfcfc] px-4 py-2 rounded-full border border-slate-100">White Paper</span>
                <span className="text-[#9daaa6] text-[10px] font-black uppercase tracking-widest">{highlightedItem.date}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[#0d2b23] mb-6 leading-[1.1] tracking-tighter group-hover:text-[#2e4841] transition-colors">
                {highlightedItem.title}
              </h2>
              <p className="text-[#61756f] text-lg font-medium leading-relaxed mb-10 line-clamp-4">
                {highlightedItem.description}
              </p>
              <div className="flex items-center justify-between mt-auto pt-8 border-t border-slate-50">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-[#9daaa6] uppercase tracking-widest">{highlightedItem.readTime}</span>
                </div>
                <div className="text-[#0d2b23] font-black text-xs uppercase tracking-widest flex items-center gap-3 group/btn">
                  Read paper
                  <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center transition-all group-hover/btn:bg-[#0d2b23] group-hover/btn:text-white group-hover/btn:translate-x-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid for remaining items */}
        {remainingItems.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
            {remainingItems.map((item) => (
              <div
                key={item.id}
                onClick={() => navigateToArticle(item.slug)}
                className="group cursor-pointer bg-white border border-slate-100 rounded-[32px] overflow-hidden flex flex-col hover:shadow-xl hover:border-[#2e4841]/20 transition-all duration-500"
              >
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[#2e4841] text-[10px] font-black uppercase tracking-widest">White Paper</span>
                    <span className="text-[#9daaa6] text-[10px] font-black uppercase tracking-widest">{item.date}</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#0d2b23] mb-4 leading-tight group-hover:text-[#2e4841] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#61756f] text-sm font-medium leading-relaxed mb-8 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                    <span className="text-[#9daaa6] text-xs font-bold uppercase tracking-widest">{item.readTime}</span>
                    <div className="text-[#0d2b23] font-black text-xs uppercase tracking-widest flex items-center gap-2 group/btn">
                      Read paper
                      <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Research;
