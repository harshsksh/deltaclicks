'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSProvider() {
  useEffect(() => {
    // Initialize AOS after page load to ensure CSS is ready
    const initAOS = () => {
      try {
        AOS.init({
          duration: 800,
          once: true,
          offset: 80,
          easing: 'ease-out-cubic',
          // Disable on mobile if needed for performance
          // disable: 'mobile',
        });
      } catch (error) {
        // Gracefully handle AOS initialization errors
        console.warn('AOS initialization failed:', error);
        // Animations won't work, but page will still function
      }
    };

    // Wait for page load to ensure CSS is fully loaded
    if (document.readyState === 'complete') {
      initAOS();
    } else {
      window.addEventListener('load', initAOS);
      return () => window.removeEventListener('load', initAOS);
    }

    // Refresh AOS on route change (Next.js)
    const handleRouteChange = () => {
      try {
        AOS.refresh();
      } catch (error) {
        console.warn('AOS refresh failed:', error);
      }
    };

    // Listen for Next.js route changes
    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('pushstate', handleRouteChange);
    window.addEventListener('replacestate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('pushstate', handleRouteChange);
      window.removeEventListener('replacestate', handleRouteChange);
    };
  }, []);

  return null;
}
