import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AOSProvider from '@/components/providers/AOSProvider';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import WebSiteSchema from '@/components/seo/WebSiteSchema';

// Initialize Google Fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://deltaclicks.com'),
  title: {
    default: 'DeltaClicks - Digital Marketing Agency',
    template: '%s | DeltaClicks',
  },
  description: 'Full-service digital marketing agency offering SEO, SMM, SEM, Content Marketing, Web Development, and Branding services to help your business grow online.',
  keywords: ['digital marketing', 'SEO', 'social media marketing', 'PPC', 'web development', 'branding', 'content marketing'],
  authors: [{ name: 'DeltaClicks' }],
  creator: 'DeltaClicks',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://deltaclicks.com',
    siteName: 'DeltaClicks',
    title: 'DeltaClicks - Digital Marketing Agency',
    description: 'Full-service digital marketing agency offering SEO, SMM, SEM, Content Marketing, Web Development, and Branding services.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DeltaClicks - Digital Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeltaClicks - Digital Marketing Agency',
    description: 'Full-service digital marketing agency offering SEO, SMM, SEM, Content Marketing, Web Development, and Branding services.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <AOSProvider />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* JSON-LD Structured Data */}
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebSiteSchema />
      </body>
    </html>
  );
}
