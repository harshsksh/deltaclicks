import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import FadeIn from '@/components/animations/FadeIn';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for DeltaClicks - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
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
              label="Privacy Policy"
              title="Your Privacy Matters to Us"
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
                    At DeltaClicks ("we," "our," or "us"), we are committed to protecting your privacy 
                    and ensuring the security of your personal information. This Privacy Policy explains 
                    how we collect, use, disclose, and safeguard your information when you visit our 
                    website or use our services.
                  </p>

                  <h2>1. Information We Collect</h2>
                  <p>We may collect information about you in a variety of ways, including:</p>
                  <h3>Personal Information</h3>
                  <p>When you fill out a contact form, subscribe to our newsletter, or communicate with us, we may collect:</p>
                  <ul>
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Company name and business information</li>
                    <li>Project details and requirements</li>
                    <li>Any other information you choose to provide</li>
                  </ul>

                  <h3>Usage Data</h3>
                  <p>We automatically collect certain information when you visit our website:</p>
                  <ul>
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                  </ul>

                  <h3>Cookies and Similar Technologies</h3>
                  <p>
                    We use cookies and similar tracking technologies to enhance your browsing experience, 
                    analyze website traffic, and personalize content. You can control cookie settings 
                    through your browser preferences.
                  </p>

                  <h2>2. How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                    <li>Improve our website and services</li>
                    <li>Analyze usage patterns and trends</li>
                    <li>Protect against fraud and unauthorized access</li>
                    <li>Comply with legal obligations</li>
                  </ul>

                  <h2>3. Disclosure of Your Information</h2>
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may 
                    share your information in the following circumstances:
                  </p>
                  <ul>
                    <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our website and conducting our business (e.g., hosting providers, email services, analytics tools)</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</li>
                  </ul>

                  <h2>4. Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational measures to protect your 
                    personal information against unauthorized access, alteration, disclosure, or 
                    destruction. However, no method of transmission over the internet or electronic 
                    storage is 100% secure, and we cannot guarantee absolute security.
                  </p>

                  <h2>5. Your Privacy Rights</h2>
                  <p>Depending on your location, you may have the following rights:</p>
                  <ul>
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate or incomplete information</li>
                    <li>Deletion of your personal information</li>
                    <li>Restriction or objection to processing</li>
                    <li>Data portability</li>
                    <li>Withdrawal of consent at any time</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us at{' '}
                    <a href="mailto:privacy@deltaclicks.com" className="text-primary-light">privacy@deltaclicks.com</a>
                  </p>

                  <h2>6. Third-Party Links</h2>
                  <p>
                    Our website may contain links to third-party websites. We are not responsible for 
                    the privacy practices or content of these external sites. We encourage you to 
                    review their privacy policies.
                  </p>

                  <h2>7. Children's Privacy</h2>
                  <p>
                    Our services are not directed to individuals under the age of 18. We do not 
                    knowingly collect personal information from children. If we become aware that 
                    we have collected information from a child, we will take steps to delete it.
                  </p>

                  <h2>8. International Data Transfers</h2>
                  <p>
                    Your information may be transferred to and processed in countries other than your 
                    country of residence. We ensure appropriate safeguards are in place to protect 
                    your information in accordance with this Privacy Policy.
                  </p>

                  <h2>9. Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. The updated version will be 
                    indicated by the "Last updated" date at the top of this page. We encourage you 
                    to review this Privacy Policy periodically for any changes.
                  </p>

                  <h2>10. Contact Us</h2>
                  <p>
                    If you have any questions or concerns about this Privacy Policy or our data 
                    practices, please contact us:
                  </p>
                  <ul>
                    <li><strong>Email:</strong> privacy@deltaclicks.com</li>
                    <li><strong>Address:</strong> 123 Digital Avenue, New York, NY 10001</li>
                  </ul>
                  <p>
                    By using our website and services, you acknowledge that you have read and 
                    understood this Privacy Policy.
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
