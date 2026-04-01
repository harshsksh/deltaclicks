/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Safelist classes that are built dynamically to prevent purging in production
  safelist: [
    // ===== BUTTON VARIANTS =====
    'gradient-bg',
    'hover:opacity-90',
    'text-white',
    'focus:ring-primary',
    'glow',
    'bg-focus',
    'hover:bg-focus-light',
    'text-foreground',
    'focus:ring-focus',
    'border-2',
    'border-primary/50',
    'text-primary',
    'hover:bg-primary/10',
    'text-primary-light',
    'border-white',
    'hover:bg-white/10',
    'bg-white',
    'hover:bg-white/90',
    
    // ===== BUTTON SIZES =====
    'px-4',
    'py-2',
    'text-sm',
    'px-6',
    'py-3',
    'text-base',
    'px-8',
    'py-4',
    'text-lg',
    
    // ===== BUTTON STATES =====
    'opacity-50',
    'cursor-not-allowed',
    'cursor-pointer',
    
    // ===== BADGE COLORS =====
    'bg-primary/20',
    'text-primary-light',
    'border-primary/30',
    'bg-focus',
    'text-foreground-muted',
    'border-white/10',
    'bg-accent/20',
    'text-accent',
    'border-accent/30',
    'bg-green-500/20',
    'text-green-400',
    'border-green-500/30',
    'bg-blue-500/20',
    'text-blue-400',
    'border-blue-500/30',
    'bg-purple-500/20',
    'text-purple-400',
    'border-purple-500/30',
    
    // ===== BADGE SIZES =====
    'px-2.5',
    'py-0.5',
    'text-xs',
    'px-3',
    'py-1',
    'text-sm',
    'px-4',
    'py-1.5',
    'text-base',
    
    // ===== ALIGNMENT CLASSES =====
    'text-center',
    'items-center',
    'text-left',
    'items-start',
    
    // ===== BACKGROUND VARIANTS =====
    'bg-gradient-to-br',
    'from-boundary-dark',
    'via-boundary',
    'to-focus',
    'from-transparent',
    'via-focus/20',
    'bg-accent/15',
    'bg-primary/20',
    'bg-accent-light/10',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        boundary: 'var(--color-boundary)',
        'boundary-dark': 'var(--color-boundary-dark)',
        focus: 'var(--color-focus)',
        'focus-dark': 'var(--color-focus-dark)',
        'focus-light': 'var(--color-focus-light)',
        primary: 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        accent: 'var(--color-accent)',
        'accent-light': 'var(--color-accent-light)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        'background-card': 'var(--color-background-card)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
