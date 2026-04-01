import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import * as Icons from 'lucide-react';
import Hero from '@/components/sections/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import ServiceSchema from '@/components/seo/ServiceSchema';
import { services, getServiceBySlug } from '@/data/services';

// Generate static params for all service slugs
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for each service page
export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default function ServicePage({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const IconComponent = Icons[service.icon] || Icons.Star;

  // Get 3 related services (excluding current)
  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      {/* JSON-LD Structured Data for Service */}
      <ServiceSchema service={service} />

      {/* Hero Section */}
      <Hero
        title={service.title}
        subtitle={service.shortDescription}
        primaryCTA={{ href: '/contact', text: 'Get a Quote' }}
        secondaryCTA={{ href: '/services', text: 'All Services' }}
        background="gradient"
        align="center"
      />

      {/* What Is Section */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <SectionHeading
                  label={`What Is ${service.title}?`}
                  title={service.title}
                  align="left"
                />
                <div className="space-y-4 text-foreground-muted text-lg leading-relaxed">
                  <p>{service.description}</p>
                  <p>
                    Our {service.title.toLowerCase()} solutions are designed to deliver measurable 
                    results. We combine industry best practices with innovative strategies to help 
                    your business stand out in the competitive digital landscape.
                  </p>
                  <p>
                    Whether you&apos;re just getting started or looking to optimize existing campaigns,
                    our team of experts will work closely with you to achieve your goals.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden gradient-bg p-1">
                  <div className="w-full h-full bg-background-card rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-32 h-32 text-primary/50" />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What's Included"
            title={`Our ${service.title} Package`}
            subtitle="Everything you need to succeed with our comprehensive service"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {service.features.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-background-card border border-white/5">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-lg">{feature}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-focus/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Process"
            title={`How We Deliver ${service.title}`}
            subtitle="A proven methodology tailored to your needs"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {service.process.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card className="p-6 h-full bg-background-card border border-white/5">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-xl font-bold text-white mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-foreground-muted">{step.description}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Benefits"
            title={`Why Invest in ${service.title}?`}
            subtitle="The tangible advantages our clients experience"
          />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {service.benefits.map((benefit, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card className="p-6 h-full bg-background-card border border-white/5">
                  <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-foreground-muted">{benefit.description}</p>
                </Card>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Explore More"
            title="Related Services"
            subtitle="Other services that might interest you"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {relatedServices.map((relatedService, index) => {
              const RelatedIcon = Icons[relatedService.icon] || Icons.Star;
              return (
                <FadeIn key={relatedService.slug} delay={index * 0.1}>
                  <Card className="p-6 h-full bg-background-card border border-white/5 hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <RelatedIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {relatedService.title}
                    </h3>
                    <p className="text-foreground-muted mb-4 line-clamp-2">
                      {relatedService.shortDescription}
                    </p>
                    <Link
                      href={`/services/${relatedService.slug}`}
                      className="inline-flex items-center text-primary-light font-semibold hover:text-primary transition-colors group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="gradient-bg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our {service.title.toLowerCase()} services can help your
              business achieve its goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Contact Us Today
              </Button>
              <Button
                href="/portfolio"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                View Our Work
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
