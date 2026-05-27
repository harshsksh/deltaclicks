import Script from 'next/script';

export default function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DeltaClicks - Digital Marketing Agency",
    "url": "https://deltaclicks.com",
    "logo": "https://deltaclicks.com/logo.svg",
    "description": "Full-service digital marketing agency offering SEO, SMM, SEM, Content Marketing, Web Development, and Branding services.",
    "foundingDate": "2019",
    "founders": [
      {
        "@type": "Person",
        "name": "DeltaClicks Team",
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A 501, Shree Ram South Court, Jagatpura",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302017",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-73554-53408",
      "contactType": "Customer Service",
      "email": "Connect@deltclicks.com",
      "areaServed": "IN",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/deltaclicks",
      "https://twitter.com/deltaclicks",
      "https://www.facebook.com/deltaclicks",
      "https://www.instagram.com/deltaclicks",
      "https://www.youtube.com/@deltaclicks"
    ],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 10,
      "maxValue": 50
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    }
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
