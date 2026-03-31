'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background';

  const variants = {
    primary: 'gradient-bg hover:opacity-90 text-white focus:ring-primary glow',
    secondary: 'bg-focus hover:bg-focus-light text-foreground focus:ring-focus',
    outline: 'border-2 border-primary/50 text-primary hover:bg-primary/10 focus:ring-primary',
    ghost: 'text-primary-light hover:bg-primary/10 focus:ring-primary',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const Component = href ? Link : 'button';

  return (
    <motion.div whileHover={{ scale: disabled ? 1 : 1.02 }} whileTap={{ scale: disabled ? 1 : 0.98 }}>
      <Component
        type={href ? undefined : type}
        href={href}
        onClick={onClick}
        disabled={disabled}
        className={`
          ${baseStyles}
          ${variants[variant]}
          ${sizes[size]}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          ${className}
        `}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  );
}
