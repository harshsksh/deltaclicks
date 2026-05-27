'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Image from 'next/image';

// Static class maps - Tailwind can detect these strings at build time
const ALIGNMENT_CLASSES = {
  center: 'text-center items-center',
  left: 'text-left items-start',
};

// Default hero images (from public/images/hero) - update names if you add/remove files
const DEFAULT_ROTATING_IMAGES = [
  '/images/hero/Gemini_Generated_Image_3mzypm3mzypm3mzy-removebg-preview.png',
  '/images/hero/Gemini_Generated_Image_nyth5nyth5nyth5n-removebg-preview.png',
  '/images/hero/Gemini_Generated_Image_to6b1qto6b1qto6b-removebg-preview.png',
  '/images/hero/Gemini_Generated_Image_vmbvgxvmbvgxvmbv-removebg-preview.png',
];

export default function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  background = 'gradient',
  align = 'center',
  // keep `image` prop for backward compatibility but hero will primarily use the hero folder
  image = null,
  imageSequence = null,
  autoRotate = true,
  // default interval is 2000ms (2s)
  autoRotateInterval = 2500,
  imageAlt = 'Hero visual',
  imageFit = 'cover',
  imagePosition = 'center',
}) {
  const alignmentClass = ALIGNMENT_CLASSES[align] || ALIGNMENT_CLASSES.center;
  const imageFitClass = imageFit === 'contain' ? 'object-contain' : 'object-cover';
  const resolvedImageSequence = useMemo(() => {
    // If an explicit imageSequence is provided use it (keeps unique, truthy values)
    if (Array.isArray(imageSequence) && imageSequence.length > 0) {
      return [...new Set(imageSequence.filter(Boolean))];
    }

    // If a single image is provided, use it directly.
    if (image) {
      return [image];
    }

    // Always use the hero folder images by default for every page.
    return DEFAULT_ROTATING_IMAGES;
  }, [imageSequence, image]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setActiveIndex(0);
  }, [resolvedImageSequence]);

  useEffect(() => {
    if (!autoRotate || isPaused || resolvedImageSequence.length < 2) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % resolvedImageSequence.length);
    }, autoRotateInterval);

    return () => clearInterval(timer);
  }, [autoRotate, autoRotateInterval, isPaused, resolvedImageSequence.length]);

  const activeImage = resolvedImageSequence[activeIndex];
  const effectiveImageFitClass = image === null ? 'object-contain' : imageFitClass;
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Circular black blend in top-left corner */}
      <div className="corner-blend-top-left" />
      {/* Circular black blend in top-right corner */}
      <div className="corner-blend-top-right" />

      {/* Radial gradient for subtle focus is intentionally removed so the global scrolling-bg remains visible. */}

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
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
          
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

          {/* Auto-rotating Image Section - same layout for every page */}
          {activeImage && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`relative w-full max-w-70 sm:max-w-sm md:max-w-md lg:max-w-2xl mx-auto lg:ml-auto h-60 sm:h-80 md:h-100 lg:h-150 bg-transparent order-2`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0.15, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.15, scale: 0.99 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeImage}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 639px) 280px, (max-width: 767px) 384px, (max-width: 1023px) 448px, 512px"
                    className={effectiveImageFitClass}
                    style={{ objectPosition: imagePosition }}
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
