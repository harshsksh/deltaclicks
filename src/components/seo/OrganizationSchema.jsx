import Script from 'next/script';

export default function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DeltaClicks",
    "url": "https://deltaclicks.com",
    "logo": "https://deltaclicks.com/logo.svg",
    "description": "Full-service digital marketing agency offering SEO, SMM, SEM, Content Marketing, Web Development, and Branding services.",
    "foundingDate": "2019",
    "founders": [
      {
        "@type": "Person",
        "name": "DeltaClicks Founders"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Digital Avenue",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "Customer Service",
      "email": "hello@deltaclicks.com",
      "areaServed": "US",
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
