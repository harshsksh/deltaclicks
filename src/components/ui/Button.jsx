'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// Static class maps - Tailwind can detect these strings at build time
const VARIANT_CLASSES = {
  primary: 'bg-gradient-to-br from-primary to-primary-light hover:opacity-90 text-white focus:ring-primary glow',
  secondary: 'bg-focus hover:bg-focus-light text-foreground focus:ring-focus',
  outline: 'border-2 border-primary/50 text-primary hover:bg-primary/10 focus:ring-primary',
  ghost: 'text-primary-light hover:bg-primary/10 focus:ring-primary',
  white: 'bg-white text-primary hover:bg-white/90',
  whiteOutline: 'border-white text-white hover:bg-white/10',
};

const SIZE_CLASSES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const BASE_CLASSES = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background';

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
  const Component = href ? Link : 'button';
  
  // Build className using only static strings that Tailwind can detect
  const variantClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary;
  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.md;
  const stateClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  const fullClassName = [
    BASE_CLASSES,
    variantClass,
    sizeClass,
    stateClass,
    className,
  ].filter(Boolean).join(' ');

  return (
    <motion.div whileHover={{ scale: disabled ? 1 : 1.02 }} whileTap={{ scale: disabled ? 1 : 0.98 }}>
      <Component
        type={href ? undefined : type}
        href={href}
        onClick={onClick}
        disabled={disabled}
        className={fullClassName}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  );
}
