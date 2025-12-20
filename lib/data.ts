export interface Product {
  id: string
  name: string
  price: string
  description: string
  image: string
  category: "Apparel" | "Accessories" | "Hats"
  specs: Record<string, string>
}

export const blogPosts = [
  {
    id: "1",
    title: "Why Representation Matters in Tech",
    excerpt:
      "Exploring the impact of diversity in engineering teams and how we can do better.",
    date: "Dec 10, 2025",
    category: "Culture",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "2",
    title: "My Minimalist Desk Setup Tour",
    excerpt:
      "A look at the tools and hardware that power my daily workflow as a frontend dev.",
    date: "Dec 05, 2025",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "3",
    title: "CSS Grid vs Flexbox: When to Use Which?",
    excerpt:
      "A practical guide to modern CSS layout techniques with real-world examples.",
    date: "Nov 28, 2025",
    category: "Tutorial",
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=1000"
  }
]
