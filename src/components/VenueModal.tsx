import { useEffect } from 'react';
import { X, MapPin, Calendar } from 'lucide-react';
import type { Venue } from '../data/venues';

interface VenueModalProps {
  venue: Venue | null;
  onClose: () => void;
}

export default function VenueModal({ venue, onClose }: VenueModalProps) {
  useEffect(() => {
    if (!venue) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEsc);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = previousOverflow;
    };
  }, [venue, onClose]);

  if (!venue) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${venue.venueName} details`}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close venue details"
        className="absolute inset-0 bg-[#11B0BD]/80 backdrop-blur-sm cursor-default"
      />

      <div className="relative w-full max-w-5xl max-h-[94vh] overflow-hidden flex flex-col bg-white rounded-2xl shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close venue details"
          className="absolute top-3 right-3 z-20 w-9 h-9 bg-white/95 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-gray-900 hover:scale-105 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto">
          <div className="bg-gradient-to-r from-teal-600 to-teal-500 px-5 py-4 md:px-6 md:py-5 flex items-center gap-2 md:gap-3">
            <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0" />
            <h3 className="text-white font-bold text-lg md:text-xl lg:text-2xl uppercase tracking-wide">
              {venue.city}
            </h3>
          </div>

          <div className="aspect-[4/3] sm:aspect-[16/9] w-full bg-gray-100 overflow-hidden">
            <img
              src={venue.image}
              alt={venue.venueName}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-5 md:p-7 space-y-4">
            <div>
              <h4 className="font-bold text-gray-900 text-lg md:text-xl lg:text-2xl leading-tight">
                {venue.venueName}
              </h4>
              <p className="text-gray-600 text-sm md:text-base mt-1.5">{venue.address}</p>
            </div>

            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full">
              <Calendar className="w-4 h-4" />
              <span className="font-semibold text-sm md:text-base">
                {venue.dateRange}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
