import Script from 'next/script';

export default function WebSiteSchema() {
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "KUFLON COMMUNICATIONS LLP",
    "url": "https://deltaclicks.com",
    "description": "Full-service digital marketing agency offering SEO, SMM, SEM, Content Marketing, Web Development, and Branding services.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://deltaclicks.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "KUFLON COMMUNICATIONS LLP",
      "url": "https://deltaclicks.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://deltaclicks.com/logo.svg"
      }
    },
    "inLanguage": "en-IN",
    "isPartOf": {
      "@type": "CreativeWork",
      "name": "KUFLON COMMUNICATIONS LLP Digital Marketing Platform"
    }
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
    />
  );
}
