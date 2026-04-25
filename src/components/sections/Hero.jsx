'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Image from 'next/image';

// Static class maps - Tailwind can detect these strings at build time
const ALIGNMENT_CLASSES = {
  center: 'text-center items-center',
  left: 'text-left items-start',
};

export default function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  background = 'gradient',
  align = 'center',
  image = null,
  imageAlt = 'Hero visual',
}) {
  const alignmentClass = ALIGNMENT_CLASSES[align] || ALIGNMENT_CLASSES.center;
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 ${image ? 'lg:grid-cols-2' : ''} gap-12 items-center`}>
          
          {/* Text Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col gap-6 ${alignmentClass} ${image ? 'order-1' : 'max-w-4xl mx-auto'}`}
          >
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-2 drop-shadow-lg leading-tight"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg sm:text-xl text-text-secondary mb-4 drop-shadow leading-relaxed"
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
                  variant="white"
                  size="lg"
                >
                  {primaryCTA.text}
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  href={secondaryCTA.href}
                  variant="whiteOutline"
                  size="lg"
                >
                  {secondaryCTA.text}
                </Button>
              )}
            </motion.div>
          </motion.div>

          {/* Image Section - Placed on the right as requested */}
          {image && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl order-2"
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
