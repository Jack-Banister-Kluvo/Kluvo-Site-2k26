// Single source of truth for the case studies hub and routing.
// To add a photo: put a WebP in /public/case-studies/ and set `image` (plus
// `imageAlt`) on the matching entry below. It is used on both the hub card and
// the detail page hero. Leave it unset to show the brand placeholder.
// Optional: `imageSmall` (an ~800px-wide copy used on the hub cards) and
// `imagePosition` (CSS object-position, to keep faces in frame when cropped).

/**
 * Client names. While false, client stories use generic descriptions
 * (e.g. "AI insurtech platform") and hide identifying details. Set to true
 * once the clients approve being named: names, slugs, titles and page copy
 * all switch back, and the other slug keeps redirecting to the active one.
 */
export const SHOW_CLIENT_NAMES = false;
// Use it as an inline `SHOW_CLIENT_NAMES ? real : generic` check: the build then
// drops whichever side is unused, so hidden names never ship to the browser.

export type CaseStudyKind = 'client' | 'industry';

export interface CaseStat {
  value: string;
  label: string;
}

export interface CaseStudyMeta {
  /** Stable internal key (not shown in URLs). Defaults to `slug`. */
  id?: string;
  /** Active URL slug. */
  slug: string;
  /**
   * Slugs that redirect to `slug` (the named and generic versions), stored as
   * slugKey() hashes so hidden client names don't appear in the built site.
   */
  aliasKeys?: string[];
  /** The client's real name. Kept here in the source; left out of the build while names are hidden. */
  realName?: string;
  kind: CaseStudyKind;
  /** Client name, or industry name for industry pages. Shown in the white badge on the image. */
  badge: string;
  /** Page H1. */
  name: string;
  /** Industry pills on the hub card. */
  tags: string[];
  /** Hub filter group. */
  filter: string;
  /** Bold headline on the hub card (the page tagline). */
  headline: string;
  /** Two highlighted stats on the hub card. */
  stats: [CaseStat, CaseStat];
  /** Browser tab title. */
  title: string;
  metaDescription: string;
  /** Optional image path. If unset, the brand placeholder is shown. */
  image?: string;
  /** Short, plain description of the image for screen readers. */
  imageAlt?: string;
  /** Optional smaller copy (~800px wide) for the hub card. Falls back to `image`. */
  imageSmall?: string;
  /** CSS object-position for cropping, e.g. 'center 30%'. Defaults to 'center'. */
  imagePosition?: string;
}

export const FILTERS = [
  'Software & SaaS',
  'IT & technology services',
  'Marketing agencies',
  'Energy & renewables',
  'Public sector',
] as const;

export const CASE_STUDIES: CaseStudyMeta[] = [
  // Client stories
  {
    id: 'ai-insurtech',
    realName: SHOW_CLIENT_NAMES ? 'Intelligent AI' : undefined,
    slug: (SHOW_CLIENT_NAMES ? 'intelligent-ai' : 'ai-insurtech-platform'),
    aliasKeys: ['38oulj', '163mz7'], // named and generic slugs; generic: /case-studies/ai-insurtech-platform
    kind: 'client',
    badge: (SHOW_CLIENT_NAMES ? 'Intelligent AI' : 'AI insurtech platform'),
    name: (SHOW_CLIENT_NAMES ? 'Intelligent AI' : 'AI insurtech platform'),
    tags: ['Insurtech'],
    filter: 'Software & SaaS',
    headline: (SHOW_CLIENT_NAMES ? 'Intelligent AI wanted meetings. The calls told them which market to build in.' : 'The AI insurtech platform wanted meetings. The calls told them which market to build in.'),
    stats: [
      { value: '10+', label: 'Qualified, sat meetings in month one' },
      { value: '3', label: 'Broker segments tested side by side' },
    ],
    title: (SHOW_CLIENT_NAMES ? 'Intelligent AI case study | Kluvo' : 'AI insurtech platform case study | Kluvo'),
    metaDescription: (SHOW_CLIENT_NAMES ? "Intelligent AI wanted meetings. The calls told them which market to build in. The brokers who felt the pain most weren't the ones with the budget." : "The AI insurtech platform wanted meetings. The calls told them which market to build in. The brokers who felt the pain most weren't the ones with the budget."),
    image: '/case-studies/ai-insurtech-platform.webp',
    imageSmall: '/case-studies/ai-insurtech-platform-800.webp',
    imageAlt: 'Three colleagues talking around a meeting table with charts and a laptop',
    imagePosition: 'center 40%',
  },
  {
    id: 'event-tech',
    realName: SHOW_CLIENT_NAMES ? 'eventr' : undefined,
    slug: (SHOW_CLIENT_NAMES ? 'eventr' : 'event-tech-platform'),
    aliasKeys: ['5i8y6v', 'bxz0oa'], // named and generic slugs; generic: /case-studies/event-tech-platform
    kind: 'client',
    badge: (SHOW_CLIENT_NAMES ? 'eventr' : 'Event tech platform'),
    name: (SHOW_CLIENT_NAMES ? 'eventr' : 'Event tech platform'),
    tags: ['Travel & events software'],
    filter: 'Software & SaaS',
    headline: (SHOW_CLIENT_NAMES ? "Trade-show contacts go cold fast. We make sure eventr's don't." : "Trade-show contacts go cold fast. We make sure the event tech platform's don't."),
    stats: [
      { value: '3', label: 'Outreach lanes running in parallel' },
      { value: 'Days', label: 'From show floor to follow-up call' },
    ],
    title: (SHOW_CLIENT_NAMES ? 'eventr case study | Kluvo' : 'Event tech platform case study | Kluvo'),
    metaDescription: (SHOW_CLIENT_NAMES ? "We run eventr's outbound on three lanes at once: cold prospects, warm contacts from trade shows, and existing customers ready to grow." : "We run the event tech platform's outbound on three lanes at once: cold prospects, warm contacts from trade shows, and existing customers ready to grow."),
    image: '/case-studies/event-tech-platform.webp',
    imageSmall: '/case-studies/event-tech-platform-800.webp',
    imageAlt: 'Three people with name badges chatting over coffee at a business event',
    imagePosition: 'center 30%',
  },
  {
    slug: 'servicenow-itsm-specialist',
    kind: 'client',
    badge: 'ServiceNow & ITSM specialist',
    name: 'ServiceNow & ITSM specialist',
    tags: ['IT services'],
    filter: 'IT & technology services',
    headline: 'Most prospects already had a platform. So we stopped selling them a new one.',
    stats: [
      { value: 'RFP', label: 'Live project already at RFP stage after a month of working together' },
      { value: '370+', label: 'Public sector contract awards mapped for the client' },
    ],
    title: 'ServiceNow & ITSM specialist case study | Kluvo',
    metaDescription:
      'Most prospects already had a platform. So we stopped selling them a new one. Once the pitch moved from “replace it” to “get more from what you already pay for”, conversations went further.',
    image: '/case-studies/servicenow-itsm-specialist.webp',
    imageAlt: 'Laptop on a desk showing the ServiceNow logo',
    imagePosition: '35% center',
  },
  {
    id: 'growth-agency',
    realName: SHOW_CLIENT_NAMES ? 'Auxo Digital' : undefined,
    slug: (SHOW_CLIENT_NAMES ? 'auxo-digital' : 'digital-growth-agency'),
    aliasKeys: ['1xx2843', '85kj63'], // named and generic slugs; generic: /case-studies/digital-growth-agency
    kind: 'client',
    badge: (SHOW_CLIENT_NAMES ? 'Auxo Digital' : 'Digital growth agency'),
    name: (SHOW_CLIENT_NAMES ? 'Auxo Digital' : 'Digital growth agency'),
    tags: ['Marketing agency'],
    filter: 'Marketing agencies',
    headline: "The founder was the sales team. Now they're not.",
    stats: [
      { value: '2', label: 'Clients signed from opportunities Kluvo created' },
      { value: '£40k', label: 'Average lifetime value per client' },
    ],
    title: (SHOW_CLIENT_NAMES ? 'Auxo Digital case study | Kluvo' : 'Digital growth agency case study | Kluvo'),
    metaDescription: (SHOW_CLIENT_NAMES ? 'Kluvo took over the whole top of the funnel for Auxo Digital, from hiring the callers to booking audits. The founder only steps in when there\'s a decision-maker ready to talk.' : 'Kluvo took over the whole top of the funnel for the digital growth agency, from hiring the callers to booking audits. The founder only steps in when there\'s a decision-maker ready to talk.'),
    image: '/case-studies/digital-growth-agency.webp',
    imageAlt: 'Smiling man in a hard hat and hi-vis vest checking his phone outside a building site',
    imagePosition: '40% 30%',
  },

  // Industry pages
  {
    slug: 'hr-tech-recruitment-software',
    kind: 'industry',
    badge: 'HR tech & recruitment software',
    name: 'HR tech & recruitment software',
    tags: ['HR tech & recruitment software'],
    filter: 'Software & SaaS',
    headline: 'Selling hiring software means earning trust before anyone looks at features.',
    stats: [
      { value: 'UK', label: 'Where we call HR and talent buyers' },
      { value: '10 days', label: 'From kickoff to SDRs on the phones' },
    ],
    title: 'HR tech & recruitment software | Kluvo',
    metaDescription:
      'Selling hiring software means earning trust before anyone looks at features. We open on the problems UK HR and talent leaders actually talk about, and deal with trust and auditability early.',
    image: '/case-studies/hr-tech-recruitment-software.webp',
    imageAlt: 'Candidate handing over her CV in a job interview',
    imagePosition: 'center 35%',
  },
  {
    slug: 'managed-it-cyber-security',
    kind: 'industry',
    badge: 'Managed IT & cyber security',
    name: 'Managed IT & cyber security',
    tags: ['Managed IT & cyber security (MSPs)'],
    filter: 'IT & technology services',
    headline: 'Managed IT is sold on a contract clock. We find out when it runs out.',
    stats: [
      { value: '4–6', label: 'Qualified meetings a month, on average, in this sector' },
      { value: '8 months', label: 'Of live outbound for UK managed IT' },
    ],
    title: 'Managed IT & cyber security (MSPs) | Kluvo',
    metaDescription:
      'Managed IT is sold on a contract clock. We research each prospect before the call, find out when their contract ends, and book the meeting for when they can actually switch.',
    image: '/case-studies/managed-it-cyber-security.webp',
    imageAlt: 'Two colleagues reviewing a tablet in an IT operations room full of screens',
    imagePosition: 'center 30%',
  },
  {
    slug: 'managed-print-office-technology',
    kind: 'industry',
    badge: 'Managed print & office technology',
    name: 'Managed print & office technology',
    tags: ['Managed print & office technology'],
    filter: 'IT & technology services',
    headline: 'Every call either books a meeting or dates a renewal. Nothing is wasted.',
    stats: [
      { value: '200+', label: 'Renewal dates captured in this sector' },
      { value: '6–12', label: 'Month renewal window we prioritise' },
    ],
    title: 'Managed print & office technology | Kluvo',
    metaDescription:
      'Managed print is bought on renewal cycles. We run discovery calling that captures the renewal date, incumbent, device estate and decision-maker on every call.',
    image: '/case-studies/managed-print-office-technology.webp',
    imageSmall: '/case-studies/managed-print-office-technology-800.webp',
    imageAlt: 'Two colleagues chatting at an office photocopier',
    imagePosition: 'center 30%',
  },
  {
    slug: 'crm-hubspot-consultancy',
    kind: 'industry',
    badge: 'CRM & HubSpot consultancy',
    name: 'CRM & HubSpot consultancy',
    tags: ['CRM & HubSpot consultancy'],
    filter: 'IT & technology services',
    headline: "Nobody wakes up wanting a new CRM. They want one pipeline number they can trust.",
    stats: [
      { value: '3', label: 'Buying triggers we listen for' },
      { value: '1 map', label: 'Of stakeholders with every meeting handed over' },
    ],
    title: 'CRM & HubSpot consultancy | Kluvo',
    metaDescription:
      'CRM projects start with a trigger: a migration, an acquisition, a new region. We look for those triggers and hand every meeting over with a map of who\'s involved.',
    image: '/case-studies/crm-hubspot-consultancy.webp',
    imageAlt: 'Two colleagues discussing work over a laptop in a bright office',
    imagePosition: 'center 30%',
  },
  {
    slug: 'commercial-solar-renewables',
    kind: 'industry',
    badge: 'Commercial solar & renewables',
    name: 'Commercial solar & renewables',
    tags: ['Commercial solar & renewables'],
    filter: 'Energy & renewables',
    headline: 'Fewer meetings, properly qualified. Because every one costs a director a day.',
    stats: [
      { value: '4', label: 'Checks before any meeting is booked' },
      { value: '12 mo', label: 'Buying window a prospect must be in' },
    ],
    title: 'Commercial solar & renewables | Kluvo',
    metaDescription:
      "Solar projects are big, slow decisions. We don't book a meeting unless timing, authority, need and site fit all line up, and every meeting comes with a brief.",
    image: '/case-studies/commercial-solar-renewables.webp',
    imageSmall: '/case-studies/commercial-solar-renewables-800.webp',
    imageAlt: 'Installers in hard hats carrying a solar panel across a solar farm',
    imagePosition: 'center 40%',
  },
  {
    slug: 'public-sector-bid-intelligence',
    kind: 'industry',
    badge: 'Public sector bid intelligence',
    name: 'Public sector bid intelligence',
    tags: ['Public sector bids & tenders'],
    filter: 'Public sector',
    headline: 'Most bids are won or lost before the tender is published. We make sure you see them coming.',
    stats: [
      { value: '12–24 mo', label: 'Forward view of re-tenders, from notices most bidders ignore' },
      { value: 'Weekly', label: 'Opportunities report, colour-coded and checked' },
    ],
    title: 'Public sector bid intelligence | Kluvo',
    metaDescription:
      'For public sector suppliers, we run the research and reporting function behind the bid team: finding opportunities early, checking every date against the public record.',
    image: '/case-studies/public-sector-bid-intelligence.webp',
    imageSmall: '/case-studies/public-sector-bid-intelligence-800.webp',
    imageAlt: 'Empty railway station platform at sunset',
    imagePosition: 'center 60%',
  },
];

export const caseStudyPath = (slug: string) => `/case-studies/${slug}`;

/** Short, stable hash of a slug (FNV-1a, base 36), used for `aliasKeys`. */
export const slugKey = (slug: string) => {
  let h = 0x811c9dc5;
  for (const ch of slug) h = Math.imul(h ^ ch.charCodeAt(0), 0x01000193) >>> 0;
  return h.toString(36);
};

/** Finds a study by its active slug or any alias (old or alternate slugs). */
export const findCaseStudy = (slug: string | null) =>
  slug ? CASE_STUDIES.find((c) => c.slug === slug || c.aliasKeys?.includes(slugKey(slug))) : undefined;
