import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark' | 'terracotta';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  const isLight = variant === 'light';

  const textPrimaryClass = isLight
    ? 'text-cream-100'
    : 'text-brown-950';

  const taglineClass = isLight
    ? 'text-cream-300/80 font-serif italic'
    : 'text-brown-700/85 font-serif italic';

  const sizeClasses = {
    sm: {
      emblem: 'w-8 h-8',
      text: 'text-lg',
      tagline: 'text-[10px]',
    },
    md: {
      emblem: 'w-10 h-10 md:w-11 md:h-11',
      text: 'text-xl md:text-2xl',
      tagline: 'text-xs',
    },
    lg: {
      emblem: 'w-14 h-14 md:w-16 md:h-16',
      text: 'text-2xl md:text-3xl',
      tagline: 'text-sm',
    },
  }[size];

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Exact Circular Dotted Sofa Emblem */}
      <div className={`relative shrink-0 rounded-full overflow-hidden shadow-soft transition-transform duration-300 group-hover:scale-105 ${sizeClasses.emblem}`}>
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          {/* Background circle */}
          <circle cx="100" cy="100" r="95" fill="#F4EAE0" stroke="#D35F36" strokeWidth="3"/>
          
          {/* 12 Perimeter Dial Dots */}
          <circle cx="100" cy="15" r="3.5" fill="#D35F36"/>
          <circle cx="100" cy="185" r="3.5" fill="#D35F36"/>
          <circle cx="15" cy="100" r="3.5" fill="#D35F36"/>
          <circle cx="185" cy="100" r="3.5" fill="#D35F36"/>
          <circle cx="142" cy="26" r="3.5" fill="#D35F36"/>
          <circle cx="174" cy="58" r="3.5" fill="#D35F36"/>
          <circle cx="174" cy="142" r="3.5" fill="#D35F36"/>
          <circle cx="142" cy="174" r="3.5" fill="#D35F36"/>
          <circle cx="58" cy="174" r="3.5" fill="#D35F36"/>
          <circle cx="26" cy="142" r="3.5" fill="#D35F36"/>
          <circle cx="26" cy="58" r="3.5" fill="#D35F36"/>
          <circle cx="58" cy="26" r="3.5" fill="#D35F36"/>

          {/* Wooden Legs */}
          <rect x="52" y="125" width="10" height="15" rx="3" fill="#582415"/>
          <rect x="138" y="125" width="10" height="15" rx="3" fill="#582415"/>

          {/* Sofa Backrest Cushion */}
          <rect x="48" y="65" width="104" height="65" rx="20" fill="#D35F36"/>

          {/* Side Armrests */}
          <rect x="36" y="80" width="22" height="50" rx="10" fill="#B74B26"/>
          <rect x="142" y="80" width="22" height="50" rx="10" fill="#B74B26"/>

          {/* Front Cushions Layer */}
          <rect x="50" y="82" width="100" height="48" rx="12" fill="#D35F36"/>

          {/* Center Seam */}
          <line x1="100" y1="83" x2="100" y2="130" stroke="#FAF4EE" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-tight">
        <span className={`font-serif font-medium tracking-tight ${textPrimaryClass} ${sizeClasses.text}`}>
          Gaddi &amp; Co.
        </span>
        {showTagline && (
          <span className={`tracking-normal font-normal ${taglineClass} ${sizeClasses.tagline}`}>
            Custom sofas, made to fit
          </span>
        )}
      </div>
    </Link>
  );
};
