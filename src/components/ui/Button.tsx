import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  icon?: React.ReactNode;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      showArrow = false,
      icon,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center whitespace-nowrap font-sans font-medium transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-terracotta-500/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none';

    const variants = {
      primary:
        'bg-terracotta-500 text-white hover:bg-terracotta-600 shadow-soft hover:shadow-glow hover:-translate-y-0.5',
      secondary:
        'bg-brown-900 text-cream-100 hover:bg-brown-950 shadow-soft hover:-translate-y-0.5',
      outline:
        'border border-brown-800/20 text-brown-900 bg-transparent hover:border-terracotta-500 hover:text-terracotta-600 hover:bg-terracotta-50/50',
      whatsapp:
        'bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-soft hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:-translate-y-0.5',
      ghost:
        'text-brown-900 hover:bg-brown-900/5 hover:text-terracotta-600',
    };

    const sizes = {
      sm: 'text-xs px-4 py-2 gap-1.5',
      md: 'text-sm px-6 py-3 gap-2',
      lg: 'text-base px-8 py-4 gap-2.5 font-semibold',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {variant === 'whatsapp' && !icon && <MessageCircle className="w-4 h-4" />}
        {icon && icon}
        <span>{children}</span>
        {showArrow && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
