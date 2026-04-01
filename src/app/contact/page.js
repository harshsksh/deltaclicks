import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import ContactForm from '@/components/forms/ContactForm';
import FadeIn from '@/components/animations/FadeIn';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with DeltaClicks. Let us help you achieve your digital marketing goals with our expert services.',
};

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: ['hello@deltaclicks.com', 'support@deltaclicks.com'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['123 Digital Avenue', 'New York, NY 10001'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat - Sun: By Appointment'],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Get In Touch"
        subtitle="Ready to start your digital marketing journey? We're here to help you achieve your goals."
        primaryCTA={{ href: '#contact-form', text: 'Send Message' }}
        secondaryCTA={{ href: '#contact-info', text: 'Contact Info' }}
        background="gradient"
        align="center"
      />

      {/* Contact Section */}
      <section id="contact-form" className="py-20 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Contact Us"
            title="Let's Start Something Great"
            subtitle="Fill out the form below and our team will get back to you within 24 hours"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <FadeIn>
                <Card className="p-8 bg-background-card border border-white/10">
                  <ContactForm />
                </Card>
              </FadeIn>
            </div>

            {/* Contact Info */}
            <div id="contact-info" className="space-y-6">
              {contactInfo.map((info, index) => {
                const InfoIcon = info.icon;
                return (
                  <FadeIn key={info.title} delay={index * 0.1}>
                    <Card className="p-6 bg-background-card border border-white/5">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0">
                          <InfoIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground mb-2">
                            {info.title}
                          </h3>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-foreground-muted">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </FadeIn>
                );
              })}

              {/* Social Media */}
              <FadeIn delay={0.4}>
                <Card className="p-6 bg-background-card border border-white/5">
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    Follow Us
                  </h3>
                  <p className="text-foreground-muted mb-4">
                    Stay connected on social media for the latest updates and insights.
                  </p>
                  <div className="flex gap-3">
                    {['LinkedIn', 'Twitter', 'Facebook', 'Instagram', 'YouTube'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary-light hover:bg-primary hover:text-white transition-colors"
                        aria-label={social}
                      >
                        <span className="text-xs font-bold">{social.charAt(0)}</span>
                      </a>
                    ))}
                  </div>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Card className="overflow-hidden bg-background-card border border-white/10">
              <div className="aspect-video bg-gradient-to-br from-focus to-boundary flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                  <p className="text-foreground-muted text-lg">
                    Office Location Map
                  </p>
                  <p className="text-foreground-muted text-sm mt-2">
                    123 Digital Avenue, New York, NY 10001
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              {
                question: 'How quickly can you start working on my project?',
                answer: 'We typically begin new projects within 1-2 weeks of initial contact, depending on our current workload and project complexity.',
              },
              {
                question: 'Do you offer custom packages?',
                answer: 'Yes! Every business is unique. We create customized packages tailored to your specific needs and budget.',
              },
              {
                question: 'What industries do you specialize in?',
                answer: 'We work with businesses across various industries including e-commerce, SaaS, healthcare, finance, and more.',
              },
              {
                question: 'How do you measure success?',
                answer: 'We define clear KPIs at the start of each project and provide regular reports showing progress toward your goals.',
              },
            ].map((faq, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card className="p-6 bg-background-card border border-white/5">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-foreground-muted">{faq.answer}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="gradient-bg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Our team is here to answer any questions you may have about our 
              services and how we can help your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@deltaclicks.com"
                className="inline-flex items-center justify-center bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-full font-medium transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
