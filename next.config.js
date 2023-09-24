/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['files.stripe.com'],
  },
  env: {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || '',
  },
}

module.exports = nextConfig
