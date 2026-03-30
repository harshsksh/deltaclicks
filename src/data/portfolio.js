// Portfolio Data
export const portfolio = [
  {
    title: "E-Commerce SEO Overhaul",
    slug: "ecommerce-seo-overhaul",
    client: "Fashion Retailer Co.",
    category: "SEO",
    image: "/images/portfolio/ecommerce-seo.jpg",
    description: "Complete SEO transformation for a fashion e-commerce store",
    challenge: "The client was struggling with low organic visibility despite having quality products. Their website had technical SEO issues, thin content, and poor site structure.",
    solution: "We conducted a comprehensive SEO audit, fixed technical issues, optimized product pages, created category content, and built high-quality backlinks.",
    results: [
      { metric: "+240%", label: "Organic Traffic" },
      { metric: "+180%", label: "Revenue from SEO" },
      { metric: "#3", label: "Avg. Keyword Position" }
    ],
    featured: true,
    testimonial: "The results exceeded our expectations. Our organic sales have tripled in just 6 months."
  },
  {
    title: "SaaS Company PPC Campaign",
    slug: "saas-ppc-campaign",
    client: "TechStart Solutions",
    category: "SEM",
    image: "/images/portfolio/saas-ppc.jpg",
    description: "High-converting Google Ads campaign for B2B SaaS",
    challenge: "The client needed to generate qualified leads for their enterprise software while maintaining a reasonable cost per acquisition.",
    solution: "We created targeted Google Ads campaigns with compelling ad copy, optimized landing pages, and implemented conversion tracking.",
    results: [
      { metric: "3x", label: "ROI" },
      { metric: "-45%", label: "Cost Per Lead" },
      { metric: "500+", label: "Qualified Leads" }
    ],
    featured: true,
    testimonial: "DeltaClicks transformed our paid advertising. The quality of leads has improved dramatically."
  },
  {
    title: "Restaurant Social Media Growth",
    slug: "restaurant-social-media",
    client: "Gourmet Bistro",
    category: "Social Media",
    image: "/images/portfolio/restaurant-social.jpg",
    description: "Social media strategy that filled seats daily",
    challenge: "A new restaurant needed to build brand awareness and drive foot traffic in a competitive market.",
    solution: "We created engaging visual content, ran targeted local ads, partnered with food influencers, and managed daily community engagement.",
    results: [
      { metric: "+300%", label: "Social Followers" },
      { metric: "+85%", label: "Weekend Reservations" },
      { metric: "50K+", label: "Monthly Reach" }
    ],
    featured: false,
    testimonial: "Our social media went from zero to our biggest marketing channel. Customers mention our posts daily."
  },
  {
    title: "Tech Startup Brand Identity",
    slug: "tech-startup-branding",
    client: "InnovateTech",
    category: "Branding",
    image: "/images/portfolio/tech-branding.jpg",
    description: "Complete brand identity for a fintech startup",
    challenge: "A fintech startup needed a professional brand identity that conveyed trust, innovation, and approachability.",
    solution: "We developed a complete brand system including logo, color palette, typography, and brand guidelines across all touchpoints.",
    results: [
      { metric: "100%", label: "Client Satisfaction" },
      { metric: "2 weeks", label: "Project Timeline" },
      { metric: "50+", label: "Brand Assets Created" }
    ],
    featured: false,
    testimonial: "The brand identity perfectly captures who we are. It's been instrumental in our investor pitches."
  },
  {
    title: "Healthcare Provider Website",
    slug: "healthcare-website",
    client: "MedCare Clinic",
    category: "Web Development",
    image: "/images/portfolio/healthcare-web.jpg",
    description: "HIPAA-compliant website with online booking",
    challenge: "A healthcare provider needed a modern, accessible website with online appointment scheduling and patient portal integration.",
    solution: "We built a custom WordPress website with HIPAA-compliant forms, online booking system, and seamless EHR integration.",
    results: [
      { metric: "+150%", label: "Online Bookings" },
      { metric: "99.9%", label: "Uptime" },
      { metric: "#1", label: "Local Search Ranking" }
    ],
    featured: true,
    testimonial: "Patients love the new website. Booking appointments is now effortless."
  },
  {
    title: "B2B Content Marketing Program",
    slug: "b2b-content-marketing",
    client: "Enterprise Solutions Inc.",
    category: "Content Marketing",
    image: "/images/portfolio/b2b-content.jpg",
    description: "Content strategy that generated 1000+ leads",
    challenge: "A B2B company struggled to generate inbound leads and establish thought leadership in their industry.",
    solution: "We created a comprehensive content strategy including blog posts, whitepapers, case studies, and video content optimized for SEO.",
    results: [
      { metric: "1000+", label: "Leads Generated" },
      { metric: "+400%", label: "Organic Traffic" },
      { metric: "#1", label: "Industry Rankings" }
    ],
    featured: false,
    testimonial: "Content marketing with DeltaClicks has been our best investment. The leads are high quality."
  }
];

export function getProjectBySlug(slug) {
  return portfolio.find(project => project.slug === slug);
}

export function getFeaturedProjects() {
  return portfolio.filter(project => project.featured);
}

export function getProjectsByCategory(category) {
  if (category === "All") return portfolio;
  return portfolio.filter(project => project.category === category);
}

export function getCategories() {
  const categories = portfolio.map(project => project.category);
  return ["All", ...new Set(categories)];
}
