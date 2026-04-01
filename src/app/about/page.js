import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Target, Lightbulb, Trophy, Users, Heart, Zap } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { team } from '@/data/team';

export const metadata = {
  title: 'About Us',
  description: 'Learn about DeltaClicks - our story, mission, vision, and the team behind our digital marketing excellence.',
};

export default function AboutPage() {
  const coreValues = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes that directly impact your bottom line.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly evolving with the latest digital trends and technologies.',
    },
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'Delivering premium quality work on every project, every time.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working as an extension of your team for shared success.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Transparent communication and honest recommendations always.',
    },
    {
      icon: Zap,
      title: 'Agility',
      description: 'Quick to adapt and respond to changing market conditions.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="About DeltaClicks"
        subtitle="We're a team of digital marketing experts passionate about helping businesses grow online."
        primaryCTA={{ href: '/contact', text: 'Work With Us' }}
        secondaryCTA={{ href: '/portfolio', text: 'View Our Work' }}
        background="gradient"
        align="center"
      />

      {/* Our Story Section */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden gradient-bg p-1">
                  <div className="w-full h-full bg-background-card rounded-2xl flex items-center justify-center">
                    <Image
                      src="/images/team/office.jpg"
                      alt="DeltaClicks Office"
                      width={500}
                      height={500}
                      className="object-cover rounded-2xl"
                    />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <SectionHeading
                  label="Our Story"
                  title="From Humble Beginnings to Digital Excellence"
                  align="left"
                />
                <div className="space-y-4 text-foreground-muted text-lg leading-relaxed">
                  <p>
                    DeltaClicks was founded in 2019 with a simple yet powerful mission: to help businesses of all sizes
                    harness the power of digital marketing to achieve sustainable growth. What started as a small team
                    of three digital enthusiasts has grown into a full-service agency serving clients across industries.
                  </p>
                  <p>
                    Our founders recognized early on that the digital landscape was becoming increasingly complex.
                    Businesses needed a partner who could navigate this complexity while delivering clear, measurable results.
                    That&apos;s exactly what we set out to become.
                  </p>
                  <p>
                    Today, DeltaClicks stands as a trusted partner for over 50 businesses worldwide. We&apos;ve managed
                    multi-million dollar ad budgets, generated millions in organic traffic, and helped countless brands
                    establish their digital presence. But what we&apos;re most proud of is the long-term relationships we&apos;ve
                    built with our clients – many of whom have been with us since the beginning.
                  </p>
                  <p>
                    Our approach combines data-driven strategies with creative excellence. We believe that great digital
                    marketing isn&apos;t just about numbers – it&apos;s about telling compelling stories, building genuine connections,
                    and creating experiences that resonate with your audience.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Purpose"
            title="Mission & Vision"
            subtitle="Guiding principles that drive everything we do"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
            <FadeIn delay={0.1}>
              <Card className="p-8 h-full gradient-bg">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  To empower businesses with data-driven digital marketing strategies that deliver 
                  measurable results, sustainable growth, and lasting competitive advantage in an 
                  ever-evolving digital landscape.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="p-8 h-full bg-background-card border border-white/10">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-foreground-muted text-lg leading-relaxed">
                  To be the most trusted and results-driven digital marketing agency, known for 
                  transforming businesses through innovative strategies, exceptional service, and 
                  unwavering commitment to client success.
                </p>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-focus/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Values"
            title="Core Values That Define Us"
            subtitle="The principles that guide our work and relationships"
          />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {coreValues.map((value, index) => {
              const ValueIcon = value.icon;
              return (
                <FadeIn key={index} delay={index * 0.1}>
                  <Card className="p-6 h-full bg-background-card border border-white/5 hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                      <ValueIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-foreground-muted">{value.description}</p>
                  </Card>
                </FadeIn>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Team"
            title="Meet the Experts"
            subtitle="The talented people behind DeltaClicks success"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {team.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.1}>
                <Card className="group overflow-hidden bg-background-card border border-white/5">
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary/20 to-focus">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Social overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <div className="flex gap-4">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                        >
                          <span className="sr-only">Twitter</span>
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-foreground-muted text-sm">{member.bio}</p>
                  </div>
                </Card>
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
              Let&apos;s Work Together
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Ready to take your digital marketing to the next level? Our team is here to help 
              you achieve your goals.
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
