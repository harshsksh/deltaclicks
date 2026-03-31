'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { portfolio, getCategories } from '@/data/portfolio';

export default function PortfolioPage() {
  const categories = getCategories();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? portfolio
    : portfolio.filter(project => project.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Work"
        subtitle="Results that speak for themselves - see how we've helped businesses achieve remarkable growth."
        primaryCTA={{ href: '/contact', text: 'Start Your Project' }}
        secondaryCTA={{ href: '/services', text: 'Our Services' }}
        background="gradient"
        align="center"
      />

      {/* Filter Section */}
      <section className="py-12 bg-background-light sticky top-24 z-30 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'gradient-bg text-white glow'
                    : 'bg-background-card text-foreground-muted hover:text-foreground border border-white/10 hover:border-primary/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Featured Projects"
            title={`Showing ${activeCategory === 'All' ? 'All Projects' : activeCategory}`}
            subtitle={`${filteredProjects.length} project${filteredProjects.length !== 1 ? 's' : ''} ${activeCategory === 'All' ? 'in our portfolio' : `in ${activeCategory}`}`}
          />
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-foreground-muted text-xl">No projects found in this category.</p>
            </div>
          ) : (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {filteredProjects.map((project, index) => (
                <FadeIn key={project.slug} delay={index * 0.1}>
                  <Card className="group overflow-hidden bg-background-card border border-white/5 hover:border-primary/30 transition-colors">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <Link
                          href={`/portfolio/${project.slug}`}
                          className="text-white font-semibold flex items-center hover:text-accent transition-colors"
                        >
                          View Case Study
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge 
                          text={project.category} 
                          variant="primary"
                          className="backdrop-blur-sm"
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary-light transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-foreground-muted mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      
                      {/* Results Preview */}
                      <div className="flex flex-wrap gap-4 mb-4">
                        {project.results.slice(0, 2).map((result, i) => (
                          <div key={i}>
                            <div className="text-lg font-bold text-primary">{result.metric}</div>
                            <div className="text-sm text-foreground-muted">{result.label}</div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Client */}
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-sm text-foreground-muted">
                          <span className="font-medium text-foreground">Client:</span> {project.client}
                        </p>
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="gradient-bg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want Results Like These?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve similar success with our 
              digital marketing services.
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
