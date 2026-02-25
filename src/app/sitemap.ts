import type { MetadataRoute } from "next";
import { industries } from '@/data/industries'
import { ormSubPages, seoSubPages } from '@/data/services'

const baseUrl = 'https://diamondlinks.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: '/', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/about/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contact/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/request-a-quote/', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/who-we-serve/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/ask/', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/resources/', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy/', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms-of-service/', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/industries/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/solutions/online-reputation-management/', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/solutions/seo/', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/solutions/white-label-reputation-management/', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/solutions/white-label-seo/', priority: 0.9, changeFrequency: 'monthly' as const },
  ]

  const industryRoutes = industries.map((i) => ({
    path: `/industries/${i.slug}/`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  const ormRoutes = ormSubPages.map((p) => ({
    path: `/${p.slug}/`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  const seoRoutes = seoSubPages.map((p) => ({
    path: `/${p.slug}/`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  const allRoutes = [...staticRoutes, ...industryRoutes, ...ormRoutes, ...seoRoutes]

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
