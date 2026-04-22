'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

export default function GalleryGrid({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const isOpen = activeIndex !== null;

  const openLightbox = (index) => {
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  const showPrev = () => {
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  const showNext = () => {
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') showPrev();
      if (event.key === 'ArrowRight') showNext();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, images.length]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((fileName, index) => {
          const imageSrc = `/images/gallery/${encodeURIComponent(fileName)}`;

          return (
            <FadeIn key={fileName}>
              <button
                type="button"
                onClick={() => openLightbox(index)}
                className="group w-full rounded-2xl overflow-hidden border border-white/10 bg-background-card/70 hover:border-primary/60 transition-colors text-left"
                aria-label={`Open image ${index + 1} in lightbox`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={`DeltaClicks gallery item ${fileName}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </button>
            </FadeIn>
          );
        })}
      </div>

      <AnimatePresence>
        {isOpen && activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 md:left-8 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.div
              key={images[activeIndex]}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-6xl h-[70vh] md:h-[80vh]"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={`/images/gallery/${encodeURIComponent(images[activeIndex])}`}
                alt={`DeltaClicks gallery preview ${activeIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-4 md:right-8 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/85 bg-black/50 px-3 py-1.5 rounded-full">
              {activeIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
