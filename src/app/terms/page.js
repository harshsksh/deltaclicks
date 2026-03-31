import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import FadeIn from '@/components/animations/FadeIn';

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for DeltaClicks - Read our terms and conditions for using our website and services.',
};

export default function TermsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/"
              className="inline-flex items-center text-foreground-muted hover:text-primary-light transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <SectionHeading
              label="Terms of Service"
              title="Terms and Conditions"
              subtitle="Last updated: March 31, 2025"
              align="left"
            />
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <article className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <FadeIn>
              <Card className="p-8 md:p-12 bg-background-card border border-white/10">
                <div className="prose prose-lg prose-invert max-w-none
                  prose-headings:text-foreground prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-foreground-muted prose-p:leading-relaxed
                  prose-ul:text-foreground-muted prose-ul:leading-relaxed
                  prose-li:text-foreground-muted
                  prose-strong:text-foreground
                  prose-a:text-primary-light hover:prose-a:text-primary">
                  
                  <p className="text-lg">
                    Welcome to DeltaClicks. These Terms of Service ("Terms") govern your access to 
                    and use of our website, services, and content. By accessing or using our website 
                    and services, you agree to be bound by these Terms. If you do not agree to these 
                    Terms, please do not use our website or services.
                  </p>

                  <h2>1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using this website, you accept and agree to be bound by the 
                    terms and provision of this agreement. If you do not agree to abide by these 
                    terms, please do not use this service.
                  </p>

                  <h2>2. Description of Service</h2>
                  <p>
                    DeltaClicks provides digital marketing services including but not limited to:
                  </p>
                  <ul>
                    <li>Search Engine Optimization (SEO)</li>
                    <li>Social Media Marketing (SMM)</li>
                    <li>Search Engine Marketing (SEM/PPC)</li>
                    <li>Content Marketing</li>
                    <li>Email Marketing</li>
                    <li>Branding and Design</li>
                    <li>Web Development</li>
                    <li>Analytics and Reporting</li>
                  </ul>
                  <p>
                    Specific service terms, deliverables, and pricing will be outlined in separate 
                    service agreements or proposals.
                  </p>

                  <h2>3. User Accounts</h2>
                  <p>
                    To access certain features of our website, you may be required to create an 
                    account. You are responsible for:
                  </p>
                  <ul>
                    <li>Maintaining the confidentiality of your account credentials</li>
                    <li>All activities that occur under your account</li>
                    <li>Notifying us immediately of any unauthorized access</li>
                  </ul>
                  <p>
                    We reserve the right to terminate accounts, remove content, or cancel services 
                    at our sole discretion.
                  </p>

                  <h2>4. Intellectual Property Rights</h2>
                  <p>
                    All content, features, and functionality of this website, including but not 
                    limited to text, graphics, logos, icons, images, audio clips, and software, 
                    are the exclusive property of DeltaClicks and are protected by copyright, 
                    trademark, and other intellectual property laws.
                  </p>
                  <p>
                    You are granted a limited, non-exclusive, non-transferable license to access 
                    and use our website for personal or internal business purposes only.
                  </p>

                  <h2>5. Client Content and Materials</h2>
                  <p>
                    For clients receiving our services:
                  </p>
                  <ul>
                    <li>You retain ownership of all content you provide to us</li>
                    <li>You grant us a license to use your content solely for providing our services</li>
                    <li>You warrant that you have the rights to all materials you provide</li>
                    <li>You indemnify us against any claims arising from your content</li>
                  </ul>

                  <h2>6. Payment Terms</h2>
                  <p>
                    Payment terms will be specified in individual service agreements. General terms include:
                  </p>
                  <ul>
                    <li>Fees are due as specified in your service agreement</li>
                    <li>Late payments may incur additional fees</li>
                    <li>We reserve the right to suspend services for non-payment</li>
                    <li>Refund policies are outlined in specific service agreements</li>
                  </ul>

                  <h2>7. Disclaimer of Warranties</h2>
                  <p>
                    THIS WEBSITE AND OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT 
                    WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT 
                    PERMISSIBLE UNDER APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR 
                    IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, 
                    FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                  <p>
                    WE DO NOT WARRANT THAT:
                  </p>
                  <ul>
                    <li>Our website will be uninterrupted, secure, or error-free</li>
                    <li>Defects will be corrected</li>
                    <li>The results of using our services will meet your expectations</li>
                    <li>Specific rankings, traffic, or conversion results will be achieved</li>
                  </ul>

                  <h2>8. Limitation of Liability</h2>
                  <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, DELTACLICKS SHALL NOT BE LIABLE FOR 
                    ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, 
                    INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER 
                    INTANGIBLE LOSSES.
                  </p>
                  <p>
                    OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS 
                    OR OUR SERVICES SHALL NOT EXCEED THE AMOUNT PAID BY YOU TO US IN THE TWELVE 
                    (12) MONTHS PRECEDING THE CLAIM.
                  </p>

                  <h2>9. Indemnification</h2>
                  <p>
                    You agree to indemnify, defend, and hold harmless DeltaClicks and its officers, 
                    directors, employees, and agents from and against any claims, liabilities, 
                    damages, judgments, awards, losses, costs, expenses, or fees arising out of 
                    or relating to your use of our services, violation of these Terms, or 
                    infringement of any third-party rights.
                  </p>

                  <h2>10. Termination</h2>
                  <p>
                    We may terminate or suspend your access to our website and services immediately, 
                    without prior notice or liability, for any reason, including breach of these Terms.
                  </p>
                  <p>
                    Upon termination, your right to use our website and services will immediately 
                    cease. All provisions of these Terms that by their nature should survive 
                    termination shall survive.
                  </p>

                  <h2>11. Governing Law</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of 
                    the State of New York, United States, without regard to its conflict of law 
                    provisions. Any disputes arising under these Terms shall be subject to the 
                    exclusive jurisdiction of the courts located in New York.
                  </p>

                  <h2>12. Changes to Terms</h2>
                  <p>
                    We reserve the right to modify or replace these Terms at any time at our sole 
                    discretion. If a revision is material, we will provide at least 30 days' notice 
                    prior to any new terms taking effect. What constitutes a material change will 
                    be determined at our sole discretion.
                  </p>

                  <h2>13. Contact Information</h2>
                  <p>
                    If you have any questions about these Terms, please contact us:
                  </p>
                  <ul>
                    <li><strong>Email:</strong> legal@deltaclicks.com</li>
                    <li><strong>Address:</strong> 123 Digital Avenue, New York, NY 10001</li>
                  </ul>

                  <h2>14. Entire Agreement</h2>
                  <p>
                    These Terms, together with our Privacy Policy and any separate service 
                    agreements, constitute the entire agreement between you and DeltaClicks 
                    regarding our services and supersede any prior agreements.
                  </p>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </article>
    </>
  );
}
