'use client';

export default function Card({
  children,
  className = '',
  hover = true,
  ...props
}) {
  return (
    <div
      className={`rounded-2xl overflow-hidden transition-all duration-300 ${
        hover ? 'hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3),0_8px_10px_-6px_rgba(0,0,0,0.2)]' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
