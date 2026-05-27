import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import StatsCounter from '@/components/sections/StatsCounter';
import Testimonials from '@/components/sections/Testimonials';
import TeamSection from '@/components/sections/TeamSection';
import CTABanner from '@/components/sections/CTABanner';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { services } from '@/data/services';
import { getFeaturedProjects } from '@/data/portfolio';
import { testimonials } from '@/data/testimonials';
import { stats } from '@/data/stats';

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  const whyChooseUs = [
    {
      icon: CheckCircle2,
      title: 'Result-Oriented Strategy',
      description: 'We use creativity and data to make marketing plans that really work for your business growth.',
    },
    {
      icon: CheckCircle2,
      title: 'SEO Expertise',
      description: 'From SEO services to content marketing, we handle all aspects of your digital presence.',
    },
    {
      icon: CheckCircle2,
      title: 'Creative Storytelling',
      description: 'We are honest, we try things, and we work hard to get good results for your brand.',
    },
    {
      icon: CheckCircle2,
      title: 'Customized Solutions',
      description: 'A plan that is just for you — helps your business grow and makes your brand known to people.',
    },
  ];

  const processSteps = [
    { number: 1, title: 'Understand', description: 'We understand your brand, goals, and target audience.' },
    { number: 2, title: 'Plan', description: 'We plan a strategy tailored to your unique needs.' },
    { number: 3, title: 'Create', description: 'We create meaningful content that resonates.' },
    { number: 4, title: 'Execute', description: 'Execute with precision and attention to detail.' },
    { number: 5, title: 'Optimize', description: 'Optimize the data for continuous improvement.' },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Turning clicks into customers"
        subtitle="We help businesses scale through strategic SEO, PPC, social media, and web development services that deliver measurable results."
        primaryCTA={{ href: '/contact', text: 'Get Started' }}
        secondaryCTA={{ href: '/portfolio', text: 'View Our Work' }}
        align="left"
      />

      {/* Services Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Do"
            title="Our Core Services"
            subtitle="Comprehensive digital marketing solutions to help your business grow online"
          />
          <ServicesGrid services={services} />
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group text-lg"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why Choose Us"
            title="Why Should You Choose DeltaClicks?"
            subtitle="We don't just write content and make promises, but we create impact."
            light
          />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <FadeIn key={index} delay={index * 0.1}>
                  <Card className="p-6 h-full text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ItemIcon className="w-7 h-7 text-primary-light" />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-text-secondary">{item.description}</p>
                  </Card>
                </FadeIn>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Process"
            title="How We Work"
            subtitle="Our approach is simple"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">{step.title}</h3>
                  <p className="text-text-secondary">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-10" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />

      {/* CTA Banner Section */}
      <CTABanner
        title="Ready to Grow Your Business?"
        subtitle="Let's discuss how we can help you achieve your digital marketing goals."
        primaryCTA={{ href: '/contact', text: 'Book an Appointment' }}
        secondaryCTA={{ href: '/portfolio', text: 'View Our Work' }}
      />
    </>
  );
}
