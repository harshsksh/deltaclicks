import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';

export const metadata = {
  title: 'DeltaClicks: Crafting Stories, Creating Impact',
  description: 'DeltaClicks stands at the forefront of digital transformation, offering creative and marketing solutions designed to help businesses thrive.',
};

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="DeltaClicks: Crafting Stories, Creating Impact"
        subtitle="Blending storytelling with strategy to empower brands in the digital world"
        primaryCTA={{ href: '/contact', text: 'Work With Us' }}
        secondaryCTA={{ href: '/services', text: 'Explore Services' }}
        background="gradient"
        align="center"
      />

      {/* Introduction */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="space-y-4 text-foreground-muted text-lg leading-relaxed">
                <p>
                  In today&apos;s fast-evolving digital landscape, brands need more than just visibility—they need meaningful engagement. DeltaClicks stands at the forefront of this transformation, offering a comprehensive suite of creative and marketing solutions designed to help businesses thrive.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Video & Podcast Production */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div>
                <SectionHeading
                  label="Our Expertise"
                  title="Video & Podcast Production"
                  align="left"
                />
                <div className="space-y-4 text-foreground-muted text-lg leading-relaxed">
                  <p>
                    At its core, DeltaClicks specializes in high-quality video production that captures attention and communicates stories with clarity and emotion. Whether it&apos;s promotional content, brand films, or social media videos, the team ensures every frame reflects creativity and purpose. Complementing this is their expertise in podcast production, enabling brands and individuals to share their voice, build authority, and connect deeply with their audience in an increasingly audio-driven world.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Event Management */}
      <section className="py-20 bg-focus/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div>
                <SectionHeading
                  label="Event Management"
                  title="Turning Ideas Into Memorable Experiences"
                  align="left"
                />
                <div className="space-y-4 text-foreground-muted text-lg leading-relaxed">
                  <p>
                    Beyond content creation, DeltaClicks excels in event management, turning ideas into memorable experiences. From corporate events to brand activations, the company handles every detail with precision, ensuring seamless execution and lasting impressions.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Digital Marketing */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div>
                <SectionHeading
                  label="Digital Marketing"
                  title="Strategic Approach to Growth"
                  align="left"
                />
                <div className="space-y-4 text-foreground-muted text-lg leading-relaxed">
                  <p>
                    What truly sets DeltaClicks apart is its strategic approach to digital marketing. By combining data-driven insights with innovative campaigns, the company helps clients enhance their online presence, reach the right audience, and achieve measurable growth. From social media management to performance marketing, DeltaClicks delivers solutions that are both creative and results-oriented.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20 bg-focus/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="space-y-4 text-foreground-muted text-lg leading-relaxed">
                <p>
                  Driven by passion, innovation, and a commitment to excellence, DeltaClicks is more than just a service provider—it is a partner in growth. By blending storytelling with strategy, the company empowers brands to stand out, engage effectively, and leave a lasting impact in the digital world.
                </p>
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
              Ready to Create Something Impactful?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how DeltaClicks can help your brand tell its story and make a lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Get in Touch
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
