import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { services } from '@/data/services';

export const metadata = {
  title: 'Our Services',
  description: 'Explore our full range of digital marketing services including SEO, SMM, SEM, Content Marketing, Web Development, and Branding.',
};

export default function ServicesPage() {
  const serviceFeatures = [
    {
      title: 'Customized Strategies',
      description: 'Every business is unique. We create tailored strategies that align with your specific goals and audience.',
      icon: CheckCircle,
    },
    {
      title: 'Data-Driven Approach',
      description: 'All our decisions are backed by data and analytics to ensure maximum ROI for your campaigns.',
      icon: CheckCircle,
    },
    {
      title: 'Transparent Reporting',
      description: 'Regular detailed reports keep you informed about performance and progress toward your goals.',
      icon: CheckCircle,
    },
    {
      title: 'Dedicated Support',
      description: 'A dedicated account manager ensures smooth communication and quick resolution of any queries.',
      icon: CheckCircle,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Services"
        subtitle="Everything you need to grow your business online - all under one roof."
        primaryCTA={{ href: '/contact', text: 'Get Started' }}
        secondaryCTA={{ href: '/portfolio', text: 'View Our Work' }}
        background="gradient"
        align="center"
      />

      {/* Intro Section */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Comprehensive Digital Marketing Solutions
              </h2>
              <p className="text-foreground-muted text-lg leading-relaxed mb-6">
                At DeltaClicks, we offer a full suite of digital marketing services designed to help 
                your business thrive in the online world. Whether you're looking to improve your search 
                rankings, engage customers on social media, or build a stunning website, our team of 
                experts has you covered.
              </p>
              <p className="text-foreground-muted text-lg leading-relaxed">
                Our integrated approach ensures that all your digital marketing efforts work together 
                seamlessly, amplifying results and maximizing your return on investment. Let us help 
                you navigate the complex digital landscape with confidence.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Offer"
            title="All Our Services"
            subtitle="Click on any service to learn more about how we can help you"
          />
          <div className="mt-12">
            <ServicesGrid services={services} />
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-focus/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why DeltaClicks"
            title="What You Get With Every Service"
            subtitle="Our commitment to excellence across all offerings"
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {serviceFeatures.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <FadeIn key={index} delay={index * 0.1}>
                  <Card className="p-6 h-full bg-background-card border border-white/5 text-center">
                    <div className="w-14 h-14 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                      <FeatureIcon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-foreground-muted">{feature.description}</p>
                  </Card>
                </FadeIn>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="How It Works"
            title="Our Service Delivery Process"
            subtitle="A proven framework that ensures consistent results"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { number: 1, title: 'Consultation', description: 'We start by understanding your business, goals, and challenges.' },
              { number: 2, title: 'Strategy', description: 'Our experts develop a customized strategy tailored to your needs.' },
              { number: 3, title: 'Execution', description: 'We implement the strategy with precision and attention to detail.' },
              { number: 4, title: 'Optimization', description: 'Continuous monitoring and optimization for better results.' },
            ].map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center relative">
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-foreground-muted">{step.description}</p>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="gradient-bg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Our experts can help you identify the right services for your business goals. 
              Let's have a conversation about your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Schedule a Consultation
              </Button>
              <Button
                href="/portfolio"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                View Case Studies
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
