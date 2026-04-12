import Script from 'next/script';

export default function LocalBusinessSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "KUFLON COMMUNICATIONS LLP",
    "image": "https://deltaclicks.com/og-image.jpg",
    "url": "https://deltaclicks.com",
    "telephone": "+91-73554-53408",
    "email": "Connect@deltclicks.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A 501, Shree Ram South Court, Jagatpura",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302017",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.8353,
      "longitude": 75.8193
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
