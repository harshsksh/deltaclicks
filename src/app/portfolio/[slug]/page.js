import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Quote, Share2 } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';
import { portfolio, getProjectBySlug } from '@/data/portfolio';

// Generate static params for all portfolio slugs
export function generateStaticParams() {
  return portfolio.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project page
export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Case Study`,
    description: project.description,
  };
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Get prev/next projects for navigation
  const currentIndex = portfolio.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? portfolio[currentIndex - 1] : null;
  const nextProject = currentIndex < portfolio.length - 1 ? portfolio[currentIndex + 1] : null;

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={project.title}
        subtitle={`${project.client} - ${project.category}`}
        primaryCTA={{ href: '/contact', text: 'Start Your Project' }}
        secondaryCTA={{ href: '/portfolio', text: 'Back to Portfolio' }}
        background="gradient"
        align="center"
      />

      {/* Project Overview */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge text={project.category} variant="primary" />
                <Badge text={project.client} variant="secondary" />
              </div>
              
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 gradient-bg p-1">
                <div className="w-full h-full bg-background-card rounded-2xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground-muted mb-2">Client</h3>
                  <p className="text-xl font-bold text-foreground">{project.client}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground-muted mb-2">Category</h3>
                  <p className="text-xl font-bold text-foreground">{project.category}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground-muted mb-2">Services Used</h3>
                  <p className="text-xl font-bold text-foreground">{project.category}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <SectionHeading
                label="The Challenge"
                title={project.challenge.split('.')[0]}
                align="left"
              />
              <p className="text-foreground-muted text-lg leading-relaxed mt-6">
                {project.challenge}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 bg-focus/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <SectionHeading
                label="Our Solution"
                title="How We Solved It"
                align="left"
              />
              <p className="text-foreground-muted text-lg leading-relaxed mt-6">
                {project.solution}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              label="The Results"
              title="Measurable Impact"
              subtitle="Key performance indicators that demonstrate success"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {project.results.map((result, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <Card className="p-8 text-center gradient-bg">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {result.metric}
                    </div>
                    <div className="text-white/80 text-lg">{result.label}</div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      {project.testimonial && (
        <section className="py-20 bg-background-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <Card className="p-8 md:p-12 bg-background-card border border-white/10">
                  <Quote className="w-12 h-12 text-primary mb-6" />
                  <blockquote className="text-2xl md:text-3xl text-foreground font-medium leading-relaxed mb-8">
                    "{project.testimonial}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold">
                      {project.client.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <div className="text-foreground font-semibold">{project.client}</div>
                      <div className="text-foreground-muted">Valued Client</div>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prevProject ? (
                <FadeIn>
                  <Link
                    href={`/portfolio/${prevProject.slug}`}
                    className="group block p-6 rounded-2xl bg-background-card border border-white/5 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center text-foreground-muted mb-2">
                      <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                      Previous Project
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary-light transition-colors">
                      {prevProject.title}
                    </h3>
                    <p className="text-foreground-muted mt-1">{prevProject.category}</p>
                  </Link>
                </FadeIn>
              ) : (
                <div />
              )}
              
              {nextProject ? (
                <FadeIn>
                  <Link
                    href={`/portfolio/${nextProject.slug}`}
                    className="group block p-6 rounded-2xl bg-background-card border border-white/5 hover:border-primary/30 transition-colors text-right"
                  >
                    <div className="flex items-center justify-end text-foreground-muted mb-2">
                      Next Project
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary-light transition-colors">
                      {nextProject.title}
                    </h3>
                    <p className="text-foreground-muted mt-1">{nextProject.category}</p>
                  </Link>
                </FadeIn>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="gradient-bg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want Results Like This?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve similar success with our 
              digital marketing expertise.
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
                href="/portfolio"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                View All Projects
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
