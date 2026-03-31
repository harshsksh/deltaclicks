import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import StatsCounter from '@/components/sections/StatsCounter';
import Testimonials from '@/components/sections/Testimonials';
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
      title: 'Data-Driven Results',
      description: 'Every strategy is backed by data and analytics for maximum ROI.',
    },
    {
      icon: CheckCircle2,
      title: 'Transparent Reporting',
      description: 'Real-time dashboards and regular reports keep you informed.',
    },
    {
      icon: CheckCircle2,
      title: 'Dedicated Account Manager',
      description: 'A single point of contact who knows your business inside out.',
    },
    {
      icon: CheckCircle2,
      title: 'Proven ROI',
      description: 'Our clients see an average of 3x return within the first 6 months.',
    },
  ];

  const processSteps = [
    { number: 1, title: 'Discovery', description: 'We learn about your business, goals, and target audience.' },
    { number: 2, title: 'Strategy', description: 'Custom marketing strategy tailored to your unique needs.' },
    { number: 3, title: 'Execution', description: 'Our experts implement campaigns with precision.' },
    { number: 4, title: 'Optimize', description: 'Continuous testing and optimization for better results.' },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Grow Your Business with Data-Driven Digital Marketing"
        subtitle="We help businesses scale through strategic SEO, PPC, social media, and web development services that deliver measurable results."
        primaryCTA={{ href: '/contact', text: 'Get Started' }}
        secondaryCTA={{ href: '/portfolio', text: 'View Our Work' }}
      />

      {/* Trust Strip */}
      <section className="py-12 bg-boundary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-text-muted mb-8">Trusted by 50+ brands worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-32 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Client Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <section className="py-20 bg-focus">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why Choose Us"
            title="What Sets Us Apart"
            subtitle="We're not just another agency. Here's why businesses trust us with their growth."
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <FadeIn key={index} delay={index * 0.1}>
                  <Card className="p-6 h-full text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ItemIcon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </Card>
                </FadeIn>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats Counter Section */}
      <StatsCounter stats={stats} />

      {/* How We Work Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Process"
            title="How We Work"
            subtitle="A proven methodology that delivers consistent results"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-10" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights Section */}
      <section className="py-20 bg-boundary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Work"
            title="Featured Projects"
            subtitle="See how we've helped businesses achieve remarkable results"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <FadeIn key={project.slug} delay={index * 0.1}>
                <Card className="group overflow-hidden">
                  <div className="relative h-64 bg-gray-200 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="text-white font-semibold flex items-center"
                      >
                        View Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-4">
                      {project.results.slice(0, 2).map((result, i) => (
                        <div key={i}>
                          <div className="text-lg font-bold text-primary">{result.metric}</div>
                          <div className="text-sm text-gray-500">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              View All Work
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} />

      {/* CTA Banner Section */}
      <CTABanner
        title="Ready to Grow Your Business?"
        subtitle="Let's discuss how we can help you achieve your digital marketing goals."
        primaryCTA={{ href: '/contact', text: 'Get a Free Quote' }}
        secondaryCTA={{ href: '/portfolio', text: 'View Our Work' }}
      />
    </>
  );
}
