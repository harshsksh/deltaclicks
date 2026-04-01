// Static class maps - Tailwind can detect these strings at build time
const COLOR_CLASSES = {
  primary: 'bg-primary/20 text-primary-light border border-primary/30',
  secondary: 'bg-focus text-foreground-muted border border-white/10',
  accent: 'bg-accent/20 text-accent border border-accent/30',
  green: 'bg-green-500/20 text-green-400 border border-green-500/30',
  blue: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
  purple: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
};

const SIZE_CLASSES = {
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

export default function Badge({ text, color = 'primary', size = 'md', className = '' }) {
  // Use static class strings that Tailwind can detect
  const colorClass = COLOR_CLASSES[color] || COLOR_CLASSES.primary;
  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.md;
  
  const fullClassName = [
    'inline-flex',
    'items-center',
    'font-medium',
    'rounded-full',
    colorClass,
    sizeClass,
    className,
  ].filter(Boolean).join(' ');
  
  return (
    <span className={fullClassName}>
      {text}
    </span>
  );
}
