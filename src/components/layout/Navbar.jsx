'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/data/services';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openServiceDropdown, setOpenServiceDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-white/10'
          : 'bg-transparent'
          }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="DeltaClicks Logo"
                  width={48}
                  height={48}
                  className="transition-transform group-hover:scale-110"
                />
              </div>
              <span className={`text-xl font-bold ${isScrolled ? 'text-foreground' : 'text-white'}`}>
                Delta<span className="gradient-text">Clicks</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <div
                      className={`flex items-center space-x-1 cursor-pointer transition-colors ${pathname === link.href
                        ? 'gradient-text font-semibold'
                        : isScrolled
                          ? 'text-foreground-muted hover:text-foreground'
                          : 'text-white/90 hover:text-white'
                        }`}
                      onMouseEnter={() => setOpenServiceDropdown('services')}
                      onMouseLeave={() => setOpenServiceDropdown(null)}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`transition-colors ${pathname === link.href
                        ? 'gradient-text font-semibold'
                        : isScrolled
                          ? 'text-foreground-muted hover:text-foreground'
                          : 'text-white/90 hover:text-white'
                        }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="gradient-bg hover:opacity-90 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 glow"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
              )}
            </button>
          </div>
        </nav>

        {/* Services Mega Dropdown */}
        <AnimatePresence>
          {openServiceDropdown === 'services' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="hidden lg:block absolute top-full left-0 right-0 bg-background shadow-xl border-t border-white/10"
              onMouseEnter={() => setOpenServiceDropdown('services')}
              onMouseLeave={() => setOpenServiceDropdown(null)}
            >
              <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-4 gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center group-hover:opacity-90 transition-opacity">
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground group-hover:text-primary-light transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-sm text-foreground-muted mt-1 line-clamp-2">
                          {service.shortDescription}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-20 left-0 right-0 bg-background shadow-xl z-40 overflow-hidden border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() =>
                          setOpenServiceDropdown(
                            openServiceDropdown === 'mobile-services' ? null : 'mobile-services'
                          )
                        }
                        className="flex items-center justify-between w-full py-2 text-foreground font-medium"
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${openServiceDropdown === 'mobile-services' ? 'rotate-180' : ''
                            }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openServiceDropdown === 'mobile-services' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="py-4 space-y-3">
                              {services.map((service) => (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="flex items-center space-x-3 text-foreground-muted hover:text-primary-light"
                                >
                                  <service.icon className="w-4 h-4" />
                                  <span>{service.title}</span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-2 font-medium ${pathname === link.href
                        ? 'gradient-text'
                        : 'text-foreground-muted hover:text-foreground'
                        }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full gradient-bg hover:opacity-90 text-white text-center px-6 py-3 rounded-full font-medium transition-colors glow"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
