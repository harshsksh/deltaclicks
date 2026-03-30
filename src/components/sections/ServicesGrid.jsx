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
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {displayServices.map((service, index) => {
        const IconComponent = Icons[service.icon] || Icons.Star;

        return (
          <FadeIn key={service.slug} delay={index * 0.1}>
            <Card className="p-6 h-full">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <IconComponent className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {service.shortDescription}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group"
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
