// Static class maps - Tailwind can detect these strings at build time
const ALIGNMENT_CLASSES = {
  center: 'text-center',
  left: 'text-left',
  right: 'text-right',
};

const LABEL_VARIANTS = {
  light: 'bg-white/20 text-white',
  dark: 'bg-primary/20 text-primary-light',
};

const TEXT_VARIANTS = {
  light: 'text-text-primary',
  dark: 'text-text-muted',
};

const SUBTITLE_VARIANTS = {
  light: 'text-text-secondary',
  dark: 'text-text-muted',
};

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignmentClass = ALIGNMENT_CLASSES[align] || ALIGNMENT_CLASSES.center;
  const labelVariant = LABEL_VARIANTS[light ? 'light' : 'dark'];
  const textVariant = TEXT_VARIANTS[light ? 'light' : 'dark'];
  const subtitleVariant = SUBTITLE_VARIANTS[light ? 'light' : 'dark'];
  
  return (
    <div className={['mb-12', alignmentClass].filter(Boolean).join(' ')}>
      {label && (
        <span className={['inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4', labelVariant].join(' ')}>
          {label}
        </span>
      )}
      <h2 className={['text-3xl md:text-4xl lg:text-5xl font-bold mb-4', textVariant].join(' ')}>
        {title}
      </h2>
      {subtitle && (
        <p className={['text-lg max-w-2xl mx-auto', subtitleVariant].join(' ')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
