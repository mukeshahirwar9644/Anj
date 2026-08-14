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
    : 'text-brown-900';

  const textSecondaryClass = isLight
    ? 'text-cream-300/80'
    : 'text-terracotta-600';

  const iconBg = isLight
    ? 'bg-terracotta-500 text-cream-100'
    : 'bg-brown-900 text-terracotta-500';

  const sizeClasses = {
    sm: { icon: 'w-7 h-7', text: 'text-lg', tagline: 'text-[9px]' },
    md: { icon: 'w-9 h-9', text: 'text-xl md:text-2xl', tagline: 'text-[10px]' },
    lg: { icon: 'w-12 h-12', text: 'text-2xl md:text-3xl', tagline: 'text-[11px]' },
  }[size];

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group ${className}`}>
      {/* Brand Icon Badge */}
      <div className={`relative flex items-center justify-center rounded-xl shadow-soft transition-transform duration-300 group-hover:scale-105 ${iconBg} ${sizeClasses.icon}`}>
        <svg viewBox="0 0 100 100" fill="none" className="w-4/5 h-4/5">
          {/* Handcrafted Sofa Arch */}
          <path
            d="M 20 62 C 20 40, 32 30, 50 30 C 68 30, 80 40, 80 62 C 80 65, 78 68, 74 68 L 26 68 C 22 68, 20 65, 20 62 Z"
            fill="currentColor"
          />
          {/* Cushion stitching curve */}
          <path d="M 28 54 C 38 58, 62 58, 72 54" stroke="#FAF6F0" strokeWidth="3" strokeLinecap="round"/>
          {/* Wooden Base Frame */}
          <rect x="22" y="70" width="56" height="5" rx="2.5" fill="#EADCC9"/>
          {/* Tapered Legs */}
          <rect x="25" y="75" width="4" height="6" fill="#C85A32"/>
          <rect x="71" y="75" width="4" height="6" fill="#C85A32"/>
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-none">
        <span className={`font-serif font-bold tracking-tight ${textPrimaryClass} ${sizeClasses.text}`}>
          Gaddi <span className="text-terracotta-500 font-sans font-normal">&amp;</span> Co.
        </span>
        {showTagline && (
          <span className={`font-sans tracking-widest uppercase font-medium mt-1 ${textSecondaryClass} ${sizeClasses.tagline}`}>
            Custom Sofas &amp; Comfort
          </span>
        )}
      </div>
    </Link>
  );
};
