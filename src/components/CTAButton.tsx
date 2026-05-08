import { ButtonHTMLAttributes, ReactNode } from 'react';

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fullWidth?: boolean;
}

export default function CTAButton({
  children,
  className = '',
  fullWidth = false,
  ...props
}: CTAButtonProps) {
  const widthClasses = fullWidth
    ? 'w-full justify-center'
    : 'w-full sm:w-auto justify-center sm:justify-start';

  return (
    <button
      {...props}
      className={`inline-flex ${widthClasses} items-center gap-3 group bg-oange-700 text-white font-semibold px-6 py-4 rounded-xl sm:rounded-full shadow-lg hover:bg-oange-800 active:scale-[0.98] sm:hover:scale-105 transition-all duration-300 min-h-[52px] ${className}`.trim()}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="w-8 h-8 bg-white text-gray-900 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </button>
  );
}
