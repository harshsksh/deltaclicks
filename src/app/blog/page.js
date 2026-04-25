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
        image="/images/main-page/Webdesign Videoproduction GIF by Conik Studio.gif"
        align="left"
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

      {/* Blog 1 */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div>
                <SectionHeading
                  label="Blog 01"
                  title="Digital Presence Always Enhances Brand Value"
                  align="left"
                />
                <div className="space-y-4 text-foreground-muted text-lg leading-relaxed">
                  <p>
                    In today&apos;s hyper-connected world, a strong digital presence is no longer optional; it is a cornerstone of brand value. Whether a business is a startup or an established enterprise, its visibility and engagement across digital platforms directly influence how it is perceived by its audience.
                  </p>
                  <p>
                    A well-crafted digital presence builds credibility. When potential customers search for a brand online, they expect to find a professional website, active social media profiles, and consistent content. The absence of these elements often raises doubts about legitimacy, while a polished digital footprint signals trustworthiness and reliability. First impressions are increasingly digital, and brands that invest in this space gain an immediate advantage.
                  </p>
                  <p>
                    Beyond credibility, digital presence amplifies reach. Traditional marketing methods are limited by geography and cost, but digital platforms allow brands to connect with a global audience instantly. Through search engines, social media, and content marketing, businesses can target specific demographics and tailor their messaging to resonate with different audience segments. This precision not only increases visibility but also improves conversion rates.
                  </p>
                  <p>
                    Engagement is another critical factor. Digital platforms enable two-way communication, allowing brands to interact directly with customers. Responding to queries, addressing concerns, and participating in conversations humanizes a brand and fosters loyalty. Over time, this engagement builds a community that advocates for the brand, further enhancing its value.
                  </p>
                  <p>
                    Moreover, consistent digital activity strengthens brand identity. Through visual elements, tone of voice, and storytelling, businesses can create a cohesive narrative that differentiates them from competitors. This consistency helps customers recognize and remember the brand, reinforcing its position in the market.
                  </p>
                  <p>
                    In essence, digital presence is a powerful driver of brand value. It shapes perception, expands reach, encourages engagement, and solidifies identity. Brands that strategically invest in their digital footprint are not just keeping up with the times; they are positioning themselves for sustained growth and relevance in an increasingly digital-first world.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Blog 2 */}
      <section className="py-20 bg-focus/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div>
                <SectionHeading
                  label="Blog 02"
                  title="SEO Is Very Helpful in Boosting Your Brand Visibility"
                  align="left"
                />
                <div className="space-y-4 text-foreground-muted text-lg leading-relaxed">
                  <p>
                    Search Engine Optimization (SEO) has become one of the most powerful tools for boosting brand visibility in the digital age. As consumers increasingly rely on search engines to discover products, services, and information, businesses that invest in SEO gain a clear competitive advantage.
                  </p>
                  <p>
                    At its core, SEO is about improving a website&apos;s ranking on search engine results pages. When your brand appears on the first page of platforms like Google, it significantly increases the chances of being noticed by potential customers. Most users rarely scroll beyond the top results, making high rankings crucial for visibility and traffic.
                  </p>
                  <p>
                    One of the key strengths of SEO is its ability to attract organic traffic. Unlike paid advertisements, SEO-driven traffic is cost-effective and sustainable over time. By optimizing keywords, creating high-quality content, and improving website structure, brands can consistently draw in users who are actively searching for what they offer. This not only increases website visits but also enhances the likelihood of conversions.
                  </p>
                  <p>
                    SEO also builds credibility and trust. Users tend to associate higher search rankings with authority and reliability. When a brand consistently appears in top search results, it reinforces its reputation as a credible source within its industry. Additionally, practices like optimizing page speed, mobile responsiveness, and user experience further contribute to a positive brand image.
                  </p>
                  <p>
                    Another advantage of SEO is its ability to target the right audience. Through keyword research and analytics, businesses can understand user intent and tailor their content accordingly. This ensures that the brand reaches people who are genuinely interested, leading to better engagement and stronger customer relationships.
                  </p>
                  <p>
                    In conclusion, SEO is more than just a marketing strategy; it is a long-term investment in brand visibility and growth. By enhancing online presence, driving organic traffic, and building trust, SEO helps businesses stand out in a crowded digital landscape and connect effectively with their audience.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="space-y-4 text-foreground-muted text-lg leading-relaxed">
                <p>
                  These insights reflect a simple reality: brands that build a meaningful digital presence and invest in strong SEO are better positioned to grow, compete, and stay relevant.
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
