// Portfolio Data
export const portfolio = [];

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
