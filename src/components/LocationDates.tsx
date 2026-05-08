import { useState } from 'react';
import { MapPin, Calendar, Eye } from 'lucide-react';
import CTAButton from './CTAButton';
import VenueModal from './VenueModal';
import { venues } from '../data/venues';

interface LocationDatesProps {
  onReserve: () => void;
}

export default function LocationDates({ onReserve }: LocationDatesProps) {
  const [openVenueIdx, setOpenVenueIdx] = useState<number | null>(null);

  return (
    <section id="locations" className="relative z-20 -mt-12 md:-mt-20 lg:-mt-28 mb-8 md:mb-12 lg:mb-16 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            We're Coming to You Live
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Both partners must attend the full 60-minute preview at the venue. Pick the city that works best for you and reserve your spot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {venues.map((venue, venueIdx) => (
            <div
              key={venue.city}
              className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
            >
              <div className="bg-gradient-to-r from-teal-600 to-teal-500 px-5 py-4 md:px-6 md:py-5 flex items-center justify-between">
                <div className="flex items-center gap-2 md:gap-3">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0" />
                  <h3 className="text-white font-bold text-lg md:text-xl lg:text-2xl uppercase tracking-wide">
                    {venue.city}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 bg-white/15 backdrop-blur-sm px-2.5 py-1 md:px-3 md:py-1.5 rounded-full border border-white/20">
                  <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                  <span className="text-white text-xs md:text-sm font-bold whitespace-nowrap">
                    {venue.dateRange}
                  </span>
                </div>
              </div>

              <div className="aspect-[16/9] w-full bg-gray-100 overflow-hidden relative">
                <img
                  src={venue.image}
                  alt={venue.venueName}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setOpenVenueIdx(venueIdx)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-2 bg-white/95 hover:bg-white text-gray-900 hover:text-oange-700 px-5 py-2.5 rounded-full font-bold text-sm md:text-base shadow-xl hover:scale-105 transition-all"
                >
                  <Eye className="w-4 h-4" />
                  DETAILS
                </button>
              </div>

              <div className="px-5 py-4 md:px-6 md:py-5 flex-1">
                <p className="font-bold text-gray-900 text-base md:text-lg leading-tight">
                  {venue.venueName}
                </p>
                <p className="text-gray-500 text-sm md:text-base mt-1">
                  {venue.address}
                </p>
              </div>

              <div className="px-5 py-4 md:px-6 md:py-5 mt-auto border-t border-gray-100 bg-gray-50/50">
                <CTAButton onClick={onReserve} fullWidth>
                  RESERVE MY SPOT
                </CTAButton>
              </div>
            </div>
          ))}
        </div>
      </div>

      <VenueModal
        venue={openVenueIdx !== null ? venues[openVenueIdx] : null}
        onClose={() => setOpenVenueIdx(null)}
      />
    </section>
  );
}
