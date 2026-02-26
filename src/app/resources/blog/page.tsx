import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import PageHero from '@/components/sections/PageHero'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Blog | DiamondLinks',
  description:
    'Expert insights on online reputation management, SEO strategy, and digital marketing from the DiamondLinks team.',
  alternates: { canonical: 'https://diamondlinks.com/resources/blog/' },
  openGraph: {
    title: 'Blog | DiamondLinks',
    description:
      'Expert insights on online reputation management, SEO strategy, and digital marketing from the DiamondLinks team.',
    url: 'https://diamondlinks.com/resources/blog/',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://diamondlinks.com/' },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://diamondlinks.com/resources/' },
    { '@type': 'ListItem', position: 3, name: 'Blog', item: 'https://diamondlinks.com/resources/blog/' },
  ],
}

const posts = [
  {
    slug: 'cutting-through-internet-red-tape',
    title: 'Cutting Through the Internet Red Tape',
    date: 'Jan 15, 2026',
    excerpt:
      'Navigating online reputation challenges in 2026 means dealing with platform policies, legal gray areas, and bureaucratic removal processes. Here is how professionals cut through the noise.',
  },
  {
    slug: 'white-label-seo-partnerships',
    title: 'White Label SEO Partnerships: A Guide for Agencies',
    date: 'Feb 1, 2026',
    excerpt:
      'Scaling an agency with white-label SEO lets you offer enterprise-grade search optimization without building an in-house team. Learn what to look for in a partner.',
  },
  {
    slug: 'human-insight-ai-content',
    title: 'Human Insight Meets AI: The Future of Content',
    date: 'Feb 20, 2026',
    excerpt:
      'Pure AI content fails the quality bar search engines demand. Discover how blending human editorial expertise with AI tools produces content that actually ranks.',
  },
]

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ScrollReveal>
        <PageHero
          eyebrow="Blog"
          headline="Insights &"
          gradientText="Resources"
          description="Expert perspectives on online reputation management, SEO strategy, and the evolving digital landscape from the DiamondLinks team."
          primaryCta={{ label: 'Get Free Analysis', href: '/free-orm-scan/' }}
          secondaryCta={{ label: 'Back to Resources', href: '/resources/' }}
          dark={true}
        />

        {/* Blog Post Grid */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/resources/blog/${post.slug}/`}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all p-7 flex flex-col"
                >
                  <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">
                    {post.date}
                  </p>
                  <h2 className="text-gray-900 font-bold text-lg mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="text-blue-600 text-sm font-semibold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Read more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </ScrollReveal>
    </>
  )
}
