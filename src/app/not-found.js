'use client';

import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-boundary-dark via-boundary to-focus relative overflow-hidden">
      {/* Background decorations */}
      <div className="corner-blend-top-left" />
      <div className="corner-blend-top-right" />
      
      {/* Animated shapes */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute -top-1/2 -right-1/4 w-full h-full bg-accent/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-primary/15 rounded-full blur-3xl"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-9xl md:text-[12rem] font-bold gradient-text drop-shadow-lg">
              404
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center gradient-bg hover:opacity-90 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 glow"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium transition-all duration-300"
            >
              <Search className="w-5 h-5 mr-2" />
              Explore Services
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-foreground-muted mb-4">You might be looking for:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services" className="text-primary-light hover:text-primary transition-colors">
                Our Services
              </Link>
              <span className="text-foreground-muted">•</span>
              <Link href="/portfolio" className="text-primary-light hover:text-primary transition-colors">
                Portfolio
              </Link>
              <span className="text-foreground-muted">•</span>
              <Link href="/blog" className="text-primary-light hover:text-primary transition-colors">
                Blog
              </Link>
              <span className="text-foreground-muted">•</span>
              <Link href="/contact" className="text-primary-light hover:text-primary transition-colors">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
