import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://autoad-broker.com'

  return [
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          uk: `${baseUrl}/uk`,
          ru: `${baseUrl}/ru`,
        }
      }
    },
    {
      url: `${baseUrl}/uk`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          uk: `${baseUrl}/uk`,
          ru: `${baseUrl}/ru`,
        }
      }
    },
    {
      url: `${baseUrl}/ru`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          uk: `${baseUrl}/uk`,
          ru: `${baseUrl}/ru`,
        }
      }
    }
  ]
}
