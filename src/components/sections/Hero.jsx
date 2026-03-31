'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  background = 'gradient',
  align = 'center',
}) {
  const alignmentClasses = {
    center: 'text-center items-center',
    left: 'text-left items-start',
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Boundary to Focus gradient */}
      {background === 'gradient' && (
        <div className="absolute inset-0 bg-gradient-to-br from-boundary-dark via-boundary to-focus" />
      )}

      {/* Circular black blend in top-left corner */}
      <div className="corner-blend-top-left" />

      {/* Circular black blend in top-right corner */}
      <div className="corner-blend-top-right" />

      {/* Radial gradient for focus effect - lighter in center */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-focus/20 to-transparent pointer-events-none" />

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-1/2 -right-1/4 w-full h-full bg-accent/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-primary/20 rounded-full blur-3xl"
        />
        {/* Yellow sparkle accents */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-accent-light/10 rounded-full blur-2xl"
        />
      </div>

      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 ${alignmentClasses[align]} flex flex-col`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-2 max-w-5xl drop-shadow-lg"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg sm:text-xl text-text-secondary mb-4 max-w-2xl drop-shadow"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {primaryCTA && (
              <Button
                href={primaryCTA.href}
                variant="primary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                {primaryCTA.text}
              </Button>
            )}
            {secondaryCTA && (
              <Button
                href={secondaryCTA.href}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                {secondaryCTA.text}
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
