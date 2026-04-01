'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import Card from '@/components/ui/Card';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';

export default function ServicesGrid({ services, limit }) {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <StaggerContainer className="flex flex-wrap gap-6 justify-center">
      {displayServices.map((service, index) => {
        const IconComponent = Icons[service.icon] || Icons.Star;

        return (
          <FadeIn key={service.slug} delay={index * 0.1}>
            <Card className="w-72 p-6 h-full bg-background-card border border-white/5 hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-4">
                <IconComponent className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-foreground-muted mb-4 line-clamp-2">
                {service.shortDescription}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center text-primary-light font-semibold hover:text-primary transition-colors group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Card>
          </FadeIn>
        );
      })}
    </StaggerContainer>
  );
}
