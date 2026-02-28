import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://autoad-broker.com'

  return {
    rules: {
      userAgent: '*',
      allow: ['/en', '/uk', '/ru'],
      disallow: ['/api/', '/_next/', '/admin/', '/private/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
