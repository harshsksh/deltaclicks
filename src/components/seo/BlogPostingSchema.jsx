import Script from 'next/script';

export default function BlogPostingSchema({ post }) {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://deltaclicks.com${post.image}`,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": post.authorRole
    },
    "publisher": {
      "@type": "Organization",
      "name": "DeltaClicks",
      "logo": {
        "@type": "ImageObject",
        "url": "https://deltaclicks.com/logo.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://deltaclicks.com/blog/${post.slug}`
    },
    "articleBody": post.excerpt,
    "wordCount": post.readTime,
    "keywords": [post.category, "digital marketing", "DeltaClicks"],
    "articleSection": post.category
  };

  return (
    <Script
      id={`blog-posting-schema-${post.slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
    />
  );
}
