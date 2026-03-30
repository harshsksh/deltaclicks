'use client';

import CounterAnimation from '@/components/animations/CounterAnimation';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';

export default function StatsCounter({ stats }) {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
                  <CounterAnimation value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/80 text-lg">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
