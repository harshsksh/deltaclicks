'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { blog, getFeaturedPost, getBlogCategories } from '@/data/blog';

export default function BlogPage() {
  const featuredPost = getFeaturedPost();
  const categories = getBlogCategories();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? blog
    : blog.filter(post => post.category === activeCategory);

  // Exclude featured post from grid
  const gridPosts = featuredPost && activeCategory === 'All'
    ? filteredPosts.filter(post => post.slug !== featuredPost.slug)
    : filteredPosts;

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Insights & Resources"
        subtitle="Stay ahead in digital marketing with expert tips, industry trends, and actionable strategies."
        primaryCTA={{ href: '/contact', text: 'Work With Us' }}
        secondaryCTA={{ href: '/services', text: 'Our Services' }}
        background="gradient"
        align="center"
      />

      {/* Featured Post */}
      {featuredPost && activeCategory === 'All' && (
        <section className="py-20 bg-background-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mb-8">
                <Badge text="Featured Post" variant="accent" />
              </div>
              <Card className="overflow-hidden bg-background-card border border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-foreground-muted text-sm mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-foreground-muted text-lg mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold">
                        {featuredPost.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-foreground font-medium">{featuredPost.author}</div>
                        <div className="text-foreground-muted text-sm">{featuredPost.authorRole}</div>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center text-primary-light font-semibold hover:text-primary transition-colors group w-fit"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Card>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-12 sticky top-24 z-30 border-b border-white/10 bg-background/95 backdrop-blur-md">
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

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Latest Articles"
            title={activeCategory === 'All' ? 'All Blog Posts' : activeCategory}
            subtitle={`${gridPosts.length} article${gridPosts.length !== 1 ? 's' : ''} ${activeCategory === 'All' ? 'in our blog' : `in ${activeCategory}`}`}
          />
          
          {gridPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-foreground-muted text-xl">No posts found in this category.</p>
            </div>
          ) : (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {gridPosts.map((post, index) => (
                <FadeIn key={post.slug} delay={index * 0.1}>
                  <Card className="group overflow-hidden bg-background-card border border-white/5 hover:border-primary/30 transition-colors h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge text={post.category} variant="primary" />
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-foreground-muted text-sm mb-3">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary-light transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-foreground-muted mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                        <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white text-sm font-bold">
                          {post.author.charAt(0)}
                        </div>
                        <div className="text-sm">
                          <div className="text-foreground font-medium">{post.author}</div>
                        </div>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-primary-light font-semibold hover:text-primary transition-colors group mt-4"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
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
              Need Help With Your Digital Marketing?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Our experts are here to help you implement these strategies and achieve real results 
              for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Get a Free Consultation
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
