import { Phone } from 'lucide-react';

const marqueeContent =
  "We're Coming to You Live in Augusta, GA  \u00B7  May 19\u201321  \u00B7  10:30am / 1pm / 3:30pm / 6pm" +
  '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0|\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' +
  'And in Columbia, SC  \u00B7  May 28\u201331';

function MarqueeTrack() {
  return (
    <span className="inline-block pr-24 text-[13px] font-medium tracking-[0.02em] text-white/90 whitespace-nowrap">
      {marqueeContent}
    </span>
  );
}

export default function HelloBar() {
  return (
    <div className="relative z-50 w-full overflow-hidden bg-gradient-to-r from-teal-600 via-blue-600 to-teal-600 border-b border-white/10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-full h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(17,176,189,0.4) 30%, rgba(17,176,189,0.6) 50%, rgba(17,176,189,0.4) 70%, transparent 100%)',
        }}
      />

      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-6 px-4 sm:px-6 h-11">
        <div
          className="flex-1 min-w-0 overflow-hidden"
          aria-live="polite"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
          }}
        >
          <div className="inline-flex animate-[marquee-scroll_28s_linear_infinite] [will-change:transform]">
            <MarqueeTrack />
            <MarqueeTrack />
          </div>
        </div>

        <a
          href="tel:7546540078"
          className="flex items-center gap-2 flex-shrink-0 px-3.5 py-1.5 rounded-md bg-oange-700 hover:bg-oange-800 shadow-md hover:shadow-lg transition-all"
        >
          <Phone className="w-[13px] h-[13px] text-white flex-shrink-0" strokeWidth={2.5} />
          <span className="hidden sm:inline text-[11px] font-bold tracking-[0.08em] uppercase text-white leading-none">
            Questions?
          </span>
          <span className="text-[13px] font-semibold text-white tracking-[0.03em] tabular-nums">
            754-654-0078
          </span>
        </a>
      </div>
    </div>
  );
}
