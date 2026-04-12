import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle } from 'lucide-react';
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
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

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

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

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

      {/* Description Section */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                {service.whatIs && (
                  <>
                    <SectionHeading
                      label="What is content marketing??"
                      title="What is content marketing??"
                      align="left"
                    />
                    <div className="space-y-4 text-foreground-muted text-lg leading-relaxed">
                      <p>{service.whatIs}</p>
                    </div>
                  </>
                )}
                {!service.whatIs && (
                  <>
                    <SectionHeading
                      label={service.title}
                      title={service.title}
                      align="left"
                    />
                    <div className="space-y-4 text-foreground-muted text-lg leading-relaxed">
                      <p>{service.description}</p>
                    </div>
                  </>
                )}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden gradient-bg p-1">
                  <div className="w-full h-full bg-background-card rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-32 h-32 text-primary/50" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why does your website need content marketing? */}
      {service.whyNeed && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <SectionHeading
                  label="Why You Need It"
                  title="Why does your website need content marketing?"
                  subtitle="Your website needs content marketing"
                  align="left"
                />
                <div className="space-y-3 mt-6">
                  {service.whyNeed.map((item, index) => (
                    <FadeIn key={index} delay={index * 0.05}>
                      <div className="flex items-start space-x-3 p-3 rounded-lg bg-background-card border border-white/5">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* What we require from you (Video Production) */}
      {service.whatWeRequire && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <SectionHeading
                  label="Requirements"
                  title="What we require from you?"
                  subtitle="We want"
                  align="left"
                />
                <div className="space-y-3 mt-6">
                  {service.whatWeRequire.map((item, index) => (
                    <FadeIn key={index} delay={index * 0.05}>
                      <div className="flex items-start space-x-3 p-3 rounded-lg bg-background-card border border-white/5">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* What do we do / Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {service.title === "Photography" ? (
            <SectionHeading
              label="What We Do"
              title="What do we do in Photography?"
              align="left"
            />
          ) : (
            <SectionHeading
              label="What We Do"
              title="What do we do?"
              align="left"
            />
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {service.features.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <Card className="p-6 h-full bg-background-card border border-white/5 hover:border-primary/30 transition-colors">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">{feature}</h3>
                      {service.featureDescriptions && service.featureDescriptions[feature] && (
                        <p className="text-foreground-muted text-sm">{service.featureDescriptions[feature]}</p>
                      )}
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How we process / work Section */}
      <section className="py-20 bg-focus/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {service.title === "Photography" || service.title === "Multimedia Production" ? (
            <SectionHeading
              label="Our Process"
              title={`How ${service.title === "Photography" ? "DeltaClicks" : "DeltaClicks"} works?`}
              align="left"
            />
          ) : service.title === "Video Production" ? (
            <SectionHeading
              label="Our Process"
              title="How we process?"
              align="left"
            />
          ) : service.title === "Event Management" ? (
            <SectionHeading
              label="Our Process"
              title="How do we work?"
              align="left"
            />
          ) : service.title === "Podcast" ? (
            <SectionHeading
              label="Our Process"
              title="How do we work?"
              align="left"
            />
          ) : service.title === "Social Media Content" ? (
            <SectionHeading
              label="Our Process"
              title="How do DeltaClicks work?"
              align="left"
            />
          ) : service.title === "Documentary" ? (
            <SectionHeading
              label="Our Process"
              title="How does DeltaClicks work?"
              align="left"
            />
          ) : service.title === "Website Design" ? (
            <SectionHeading
              label="Our Process"
              title="How do we work?"
              align="left"
            />
          ) : (
            <SectionHeading
              label="Our Process"
              title="How do we process?"
              subtitle="We follow this process"
              align="left"
            />
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {service.process.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card className="p-6 h-full bg-background-card border border-white/5">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-xl font-bold text-white mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why should you choose us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {service.title === "Photography" || service.title === "Multimedia Production" || service.title === "Social Media Content" ? (
            <SectionHeading
              label="Why Choose Us"
              title="Why Brands Choose DeltaClicks?"
              align="left"
            />
          ) : service.title === "Video Production" ? (
            <SectionHeading
              label="Why Choose Us"
              title="Why should you choose DeltaClicks?"
              align="left"
            />
          ) : service.title === "Event Management" ? (
            <SectionHeading
              label="Why Choose Us"
              title="Why should you choose DeltaClicks?"
              align="left"
            />
          ) : service.title === "Podcast" ? (
            <SectionHeading
              label="Why Choose Us"
              title="Why should you choose DeltaClicks?"
              align="left"
            />
          ) : service.title === "Documentary" ? (
            <SectionHeading
              label="Why Choose Us"
              title="Why should you choose DeltaClicks?"
              align="left"
            />
          ) : service.title === "Website Design" ? (
            <SectionHeading
              label="Why Choose Us"
              title="Why should you choose DeltaClicks?"
              align="left"
            />
          ) : (
            <SectionHeading
              label="Why Choose Us"
              title="Why should you choose us?"
              align="left"
            />
          )}
          {service.whyChooseUs && service.whyChooseUs.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              {service.whyChooseUs.map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <Card className="p-6 h-full bg-background-card border border-white/5">
                    <h3 className="text-lg font-bold text-foreground mb-2">{item}</h3>
                  </Card>
                </FadeIn>
              ))}
            </div>
          )}
          {service.features && !service.whyChooseUs && (
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {service.features.map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <Card className="p-6 h-full bg-background-card border border-white/5">
                    <h3 className="text-lg font-bold text-foreground mb-2">{item}</h3>
                  </Card>
                </FadeIn>
              ))}
            </StaggerContainer>
          )}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              {service.cta}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Contact Us
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                All Services
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
