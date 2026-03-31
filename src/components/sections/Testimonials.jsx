'use client';

import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';
import FadeIn from '@/components/animations/FadeIn';
import Card from '@/components/ui/Card';

export default function Testimonials({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-background-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-700 ${index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
              >
                {index === currentIndex && (
                  <FadeIn>
                    <Card className="p-8 md:p-12 bg-background-card border border-white/10">
                      <div className="text-center">
                        {/* Stars */}
                        <div className="flex justify-center gap-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>

                        {/* Author */}
                        <div className="flex items-center justify-center gap-4">
                          <div className="w-16 h-16 rounded-full gradient-bg overflow-hidden">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.author}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="text-left">
                            <div className="font-bold text-foreground">{testimonial.author}</div>
                            <div className="text-foreground-muted">
                              {testimonial.role}, {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </FadeIn>
                )}
              </div>
            ))}
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-white/20 hover:bg-white/40'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
