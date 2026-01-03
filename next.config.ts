import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "i.etsystatic.com",
      "cdn.shopify.com",
      "images.unsplash.com",
      "https://files.cdn.printful.com"
    ]
  }
}

export default nextConfig
