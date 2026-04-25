import Link from 'next/link';
import { ArrowRight, Target, Lightbulb, Trophy, Users, Heart, Zap } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';

export const metadata = {
  title: 'About Us',
  description: 'Learn about DeltaClicks - our story, mission, vision, and digital marketing expertise.',
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
        subtitle="At DeltaClicks, Jaipur, we believe that every click has the potential to become a customer."
        primaryCTA={{ href: '/contact', text: 'Work With Us' }}
        secondaryCTA={{ href: '/portfolio', text: 'View Our Work' }}
        background="gradient"
        image="/images/main-page/happy mascot GIF.gif"
        align="left"
      />

      {/* Our Story Section */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div>
                <SectionHeading
                  label="About Us"
                  title="Your Full-Service Digital Marketing Agency"
                />
                <div className="space-y-4 text-foreground-muted text-lg leading-relaxed">
                  <p>
                    We are a full-service digital marketing agency that is dedicated to helping brands grow, connect, and stand out in the digital world. From small businesses to established enterprises, we partner with our clients to build powerful identities and deliver measurable results.
                  </p>
                  <p>
                    Our expertise lies in combining creativity with strategy. Whether it&apos;s designing websites, making a podcast, shooting a documentary, editing videos, providing SEO, boosting your social media page, or anything, our team focuses on creativity with the unique values and in-depth research. We focus on content that connects the audience and leaves a long-term impact.
                  </p>
                  <p>
                    We don&apos;t just provide services, but we build trust. Our team closely works with the clients to understand their needs and provide them with the best solution. We stand with you from start to end.
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
            title="Vision & Mission"
            subtitle="Guiding principles that drive everything we do"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
            <FadeIn delay={0.1}>
              <Card className="p-8 h-full gradient-bg">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  At DeltaClicks, our goal is to change how digital marketing works. We create plans that really help businesses grow in a trackable way. We think each business is different and its growth should come from solutions, not generic methods. We want to create an online environment where content, tech, and data-driven plans work together to get real results. We focus on campaigns that convert well and solutions that can grow. Our main priorities are performance, openness, and long-term success at DeltaClicks.
                </p>
                <p className="text-white/90 text-lg leading-relaxed mt-4">
                  DeltaClicks helps brands build an online presence. We make sure businesses get the most out of our investments. We want businesses to achieve results that are more than just numbers. We want to help businesses make an impact.
                </p>
                <p className="text-white/90 text-lg leading-relaxed mt-4">
                  Through innovation and hard work, DeltaClicks envisions a future where businesses grow with clarity and confidence. We want businesses to succeed in a way that they can measure.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="p-8 h-full bg-background-card border border-white/10">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-foreground-muted text-lg leading-relaxed">
                  DeltaClicks helps brands build an online presence. We make sure businesses get the most out of our investments. We want businesses to achieve results that are more than just numbers. We want to help businesses make an impact.
                </p>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-focus/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why Choose Us"
            title="Why should you choose us?"
          />
          <FadeIn delay={0.1}>
            <Card className="p-8 h-full bg-background-card border border-white/5 max-w-4xl mx-auto">
              <p className="text-foreground-muted text-lg leading-relaxed">
                At DeltaClicks we use creativity and data to make marketing plans that really work. Our team tries to understand what you want to achieve with your business. Then makes a plan that is just for you. This plan helps your business grow makes your brand known to people and gets you good leads. We do lots of things, like SEO services, content marketing, managing media and making websites. You can get all these services from us. What makes us different is that we are honest we try things and we work hard to get good results. We make sure you get the most out of your money. If you are just starting out or if you are a brand DeltaClicks is here to help you make a strong digital presence that will last.
              </p>
            </Card>
          </FadeIn>
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
