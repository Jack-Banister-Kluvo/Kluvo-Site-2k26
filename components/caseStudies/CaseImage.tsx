import React from 'react';

interface CaseImageProps {
  image?: string;
  alt: string;
  /** CSS object-position for the image crop. */
  position?: string;
  /** Load straight away (above-the-fold hero) rather than lazily. */
  eager?: boolean;
  /** White rounded badge in the top-left corner (client or industry name). */
  badge?: string;
  /** Varies the placeholder composition so neighbouring cards don't look identical. */
  seed?: string;
  className?: string;
}

const RING_POSITIONS = [
  '-right-[12%] top-1/2 -translate-y-1/2',
  '-left-[15%] -bottom-[35%]',
  'right-[8%] -top-[45%]',
  'left-1/2 -translate-x-1/2 top-[20%]',
];

const hash = (s: string) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);

// Shows the case study image if one is set in data.ts, otherwise a
// brand-styled placeholder so the layout never looks empty.
const CaseImage: React.FC<CaseImageProps> = ({ image, alt, position = 'center', eager = false, badge, seed = '', className = '' }) => (
  <div className={`relative overflow-hidden rounded-[28px] bg-[#0d2b23] ${className}`}>
    {image ? (
      <>
        <img src={image} alt={alt} className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: position }} loading={eager ? 'eager' : 'lazy'} decoding="async" />
        {badge && <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/25 to-transparent pointer-events-none" aria-hidden="true" />}
      </>
    ) : (
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d2b23] via-[#163a30] to-[#2e4841]" />
        <div className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 rounded-full bg-[#9daaa6]/15 blur-[80px]" />
        <div className="absolute -bottom-1/3 right-0 w-2/3 h-2/3 rounded-full bg-[#61756f]/25 blur-[90px]" />
        <svg
          className={`absolute ${RING_POSITIONS[hash(seed) % RING_POSITIONS.length]} h-[150%] aspect-square text-[#9daaa6]`}
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
        >
          {[96, 78, 60, 42, 24].map((r, i) => (
            <circle key={r} cx="100" cy="100" r={r} strokeOpacity={0.1 + i * 0.05} strokeWidth="0.75" />
          ))}
          <circle cx="100" cy="100" r="7" fill="currentColor" fillOpacity="0.35" stroke="none" />
        </svg>
        <div className="grain-overlay" style={{ opacity: 0.08 }} />
      </div>
    )}
    {badge && (
      <span className="absolute top-4 left-4 md:top-5 md:left-5 bg-white text-[#0d2b23] text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-md ring-1 ring-black/5 max-w-[calc(100%-2rem)] truncate">
        {badge}
      </span>
    )}
  </div>
);

export default CaseImage;
