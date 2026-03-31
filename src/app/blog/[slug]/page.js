import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Link as LinkIcon, MessageCircle, User } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { blog, getPostBySlug, getRelatedPosts, getBlogCategories } from '@/data/blog';

// Generate static params for all blog slugs
export function generateStaticParams() {
  return blog.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.category, post.slug);

  return (
    <>
      {/* Hero Section with Cover Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-boundary-dark via-boundary to-focus" />
        <div className="corner-blend-top-left" />
        <div className="corner-blend-top-right" />
        
        {/* Cover Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center gap-3 mb-6">
                <Badge text={post.category} variant="primary" />
                <Badge text={post.readTime} variant="secondary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 drop-shadow-lg">
                {post.title}
              </h1>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                {post.excerpt}
              </p>
              
              {/* Author & Date */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold">
                    {post.author.charAt(0)}
                  </div>
                  <div className="text-left">
                    <div className="text-white font-medium">{post.author}</div>
                    <div className="text-white/70 text-sm">{post.authorRole}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white/70">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-8 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-foreground-muted hover:text-primary-light transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div 
                className="prose prose-lg prose-invert max-w-none
                  prose-headings:text-foreground prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-foreground-muted prose-p:leading-relaxed
                  prose-ul:text-foreground-muted prose-ul:leading-relaxed
                  prose-li:text-foreground-muted
                  prose-strong:text-foreground
                  prose-a:text-primary-light prose-a:no-underline hover:prose-a:text-primary
                  prose-blockquote:border-primary prose-blockquote:bg-background-card prose-blockquote:p-6 prose-blockquote:rounded-lg
                  prose-blockquote:text-foreground-muted"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </FadeIn>
          </div>
        </div>
      </article>

      {/* Share Buttons */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                <span className="text-foreground-muted font-medium flex items-center">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share:
                </span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background-card border border-white/10 flex items-center justify-center text-foreground-muted hover:text-primary-light hover:border-primary/30 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background-card border border-white/10 flex items-center justify-center text-foreground-muted hover:text-primary-light hover:border-primary/30 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <User className="w-5 h-5" />
                </a>
                <button
                  onClick={() => navigator.clipboard.writeText(`${window.location.origin}/blog/${post.slug}`)}
                  className="w-10 h-10 rounded-full bg-background-card border border-white/10 flex items-center justify-center text-foreground-muted hover:text-primary-light hover:border-primary/30 transition-colors"
                  aria-label="Copy link"
                >
                  <LinkIcon className="w-5 h-5" />
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <Card className="p-8 bg-background-card border border-white/10">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    {post.author.charAt(0)}
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold text-foreground mb-1">About {post.author}</h3>
                    <p className="text-primary-light font-medium mb-3">{post.authorRole}</p>
                    <p className="text-foreground-muted">
                      {post.author} is a member of the DeltaClicks team, specializing in {post.category.toLowerCase()}. 
                      With years of experience in the digital marketing industry, they bring practical insights 
                      and proven strategies to help businesses succeed online.
                    </p>
                  </div>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Related Articles"
              title="More From This Category"
              subtitle={`Explore more {post.category} content`}
            />
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {relatedPosts.map((relatedPost, index) => (
                <FadeIn key={relatedPost.slug} delay={index * 0.1}>
                  <Card className="group overflow-hidden bg-background-card border border-white/5 hover:border-primary/30 transition-colors h-full flex flex-col">
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge text={relatedPost.category} variant="primary" size="sm" />
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary-light transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-foreground-muted text-sm mb-4 line-clamp-2 flex-1">
                        {relatedPost.excerpt}
                      </p>
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="inline-flex items-center text-primary-light font-semibold hover:text-primary transition-colors group text-sm"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="gradient-bg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Implement These Strategies?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let our experts help you apply these insights to achieve real results for your 
              business.
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
