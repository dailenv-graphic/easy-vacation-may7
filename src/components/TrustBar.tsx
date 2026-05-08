interface TrustItem {
  label: string;
  value: string;
}

const trustItems: TrustItem[] = [
  { label: 'WHEN YOU ATTEND', value: '8-Day Cruise' },
  { label: 'DURATION', value: '60 Minutes Flat' },
  { label: 'INCLUDES', value: 'Airfare for 2' },
  { label: 'VALUE', value: '$2,000+' }
];

export default function TrustBar() {
  return (
    <section className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white">
      <div className="container mx-auto px-4 pt-6 md:pt-8 lg:pt-10 pb-4 md:pb-5">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {trustItems.map((item, idx) => (
            <div
              key={item.label}
              className={`text-center px-3 py-3 md:px-4 md:py-4 ${
                idx > 0 ? 'sm:border-l sm:border-white/25' : ''
              }`}
            >
              <p className="text-[10px] md:text-xs font-bold tracking-widest text-white/80 uppercase">
                {item.label}
              </p>
              <p className="mt-1 md:mt-2 text-base md:text-xl lg:text-2xl font-bold text-white leading-tight drop-shadow-sm">
                {item.value}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 md:mt-5 text-center text-[11px] md:text-xs font-medium text-white/85 leading-relaxed px-2 max-w-3xl mx-auto">
          Port fees and taxes are not included in this deal. This offer is valued at over $2,000!
        </p>
      </div>
    </section>
  );
}
