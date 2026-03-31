import Script from 'next/script';

export default function LocalBusinessSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DeltaClicks",
    "image": "https://deltaclicks.com/og-image.jpg",
    "url": "https://deltaclicks.com",
    "telephone": "+1-555-123-4567",
    "email": "hello@deltaclicks.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Digital Avenue",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7128,
      "longitude": -74.0060
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "17:00",
        "description": "By Appointment"
      }
    ],
    "priceRange": "$$",
    "servesCuisine": "Digital Marketing Services",
    "acceptsReservations": "True",
    "sameAs": [
      "https://www.linkedin.com/company/deltaclicks",
      "https://twitter.com/deltaclicks",
      "https://www.facebook.com/deltaclicks",
      "https://www.instagram.com/deltaclicks"
    ]
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
