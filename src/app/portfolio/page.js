'use client';

import Hero from '@/components/sections/Hero';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Work"
        subtitle="Turning clicks into customers — our portfolio will showcase real results and success stories."
        primaryCTA={{ href: '/contact', text: 'Start Your Project' }}
        secondaryCTA={{ href: '/services', text: 'Our Services' }}
        background="gradient"
        image="/images/main-page/gif (1).gif"
        align="left"
      />

      {/* Coming Soon Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Portfolio Coming Soon
              </h2>
              <p className="text-foreground-muted text-xl leading-relaxed mb-8">
                We're just getting started! Our portfolio will be available soon with real case studies and results from our clients.
              </p>
              <p className="text-foreground-muted text-lg mb-12">
                In the meantime, let's discuss how we can help your business grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="gradient-bg text-white hover:opacity-90"
                >
                  Get in Touch
                </Button>
                <Button
                  href="/services"
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Explore Services
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="gradient-bg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Be Our First Success Story?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Be part of our inaugural portfolio. Let&apos;s create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Get a Free Quote
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Explore Services
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
