import { useEffect, ComponentType } from 'react';
import { X } from 'lucide-react';

export interface LightboxCard {
  image: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  variant?: 'overlay' | 'side';
}

interface ImageLightboxProps {
  card: LightboxCard | null;
  onClose: () => void;
}

export default function ImageLightbox({ card, onClose }: ImageLightboxProps) {
  useEffect(() => {
    if (!card) return;

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
  }, [card, onClose]);

  if (!card) return null;

  const { image, icon: Icon, title, description, variant = 'overlay' } = card;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} preview`}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close preview"
        className="absolute inset-0 bg-[#11B0BD]/80 backdrop-blur-sm cursor-default"
      />

      <button
        type="button"
        onClick={onClose}
        aria-label="Close preview"
        className="absolute top-4 right-4 z-20 w-11 h-11 bg-white/95 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-gray-900 hover:scale-105 transition-all"
      >
        <X className="w-5 h-5" />
      </button>

      {variant === 'overlay' ? (
        <div className="relative w-full max-w-md md:max-w-lg lg:max-w-2xl aspect-[4/5] md:aspect-[3/4] max-h-[88vh] rounded-2xl md:rounded-3xl shadow-2xl text-white flex flex-col justify-between overflow-hidden">
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 p-6 md:p-8 lg:p-10 bg-gradient-to-b from-black/30 via-transparent to-transparent">
            <Icon className="w-14 h-14 md:w-16 md:h-16 text-white drop-shadow-lg" />
          </div>
          <div className="relative z-10 p-6 md:p-8 lg:p-10 pt-12 bg-gradient-to-t from-black/85 via-black/55 to-transparent">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">
              {title}
            </h3>
            <p className="text-white text-base md:text-lg leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>
        </div>
      ) : (
        <div className="relative w-full max-w-md md:max-w-lg lg:max-w-2xl aspect-[4/5] md:aspect-[3/4] max-h-[88vh] rounded-2xl md:rounded-3xl shadow-2xl border border-blue-100 flex items-center overflow-hidden">
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 w-full px-6 md:px-10 py-6 md:py-10 bg-gradient-to-r from-white/95 via-white/85 to-white/65">
            <Icon className="w-14 h-14 md:w-16 md:h-16 text-teal-600 flex-shrink-0 drop-shadow-sm" />
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
                {title}
              </h3>
              <p className="text-gray-900 text-base md:text-lg leading-relaxed font-medium max-w-3xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
