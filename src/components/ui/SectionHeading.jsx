export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignmentClasses = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
  };

  return (
    <div className={`mb-12 ${alignmentClasses[align]}`}>
      {label && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
          light
            ? 'bg-white/20 text-white'
            : 'bg-primary/20 text-primary-light'
        }`}>
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
        light ? 'text-text-primary' : 'text-text-primary'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${
          light ? 'text-text-secondary' : 'text-text-muted'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
