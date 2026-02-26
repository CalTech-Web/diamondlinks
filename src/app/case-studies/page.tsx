import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import PageHero from '@/components/sections/PageHero'
import SectionHeader from '@/components/sections/SectionHeader'
import CtaBanner from '@/components/sections/CtaBanner'
import { testimonials } from '@/data/company'

export const metadata: Metadata = {
  title: 'Case Studies | DiamondLinks',
  description:
    'Explore real client results from DiamondLinks. See how our ORM and SEO campaigns delivered measurable outcomes — from 312% traffic growth to page 1 reputation turnarounds.',
  alternates: { canonical: 'https://diamondlinks.com/case-studies/' },
  openGraph: {
    title: 'Case Studies | DiamondLinks',
    description:
      'Explore real client results from DiamondLinks. See how our ORM and SEO campaigns delivered measurable outcomes — from 312% traffic growth to page 1 reputation turnarounds.',
    url: 'https://diamondlinks.com/case-studies/',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://diamondlinks.com/' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://diamondlinks.com/case-studies/' },
  ],
}

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ScrollReveal>
        <PageHero
          eyebrow="Case Studies"
          headline="Real Clients."
          gradientText="Real Results."
          description="A proven track record of measurable outcomes. See how DiamondLinks has helped businesses and individuals transform their online presence with data-driven ORM and SEO campaigns."
          primaryCta={{ label: 'Get Free Analysis', href: '/free-orm-scan/' }}
          secondaryCta={{ label: 'View Our Services', href: '/solutions/online-reputation-management/' }}
          dark={true}
        />

        {/* Testimonial Cards */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              eyebrow="Client Results"
              title="Proven Outcomes Across Industries"
              subtitle="Every engagement is unique, but the results speak for themselves. Here are real outcomes from real clients."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-2xl border border-gray-100 p-8 flex flex-col hover:shadow-md hover:border-blue-100 transition-all"
                >
                  {/* Star rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-600 italic leading-relaxed mb-6 flex-grow">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Result metric */}
                  <p
                    className="text-lg font-bold mb-4"
                    style={{
                      background: 'linear-gradient(135deg, #2563eb 0%, #818cf8 50%, #a78bfa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {t.result}
                  </p>

                  {/* Client info */}
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-900 font-bold">{t.name}</p>
                    <p className="text-gray-500 text-sm">{t.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Full Case Studies */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              eyebrow="Go Deeper"
              title="Download Full Case Studies"
              subtitle="Get detailed breakdowns including full metrics, methodology, and timelines for each campaign."
            />
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
              <form className="space-y-5">
                <div>
                  <label htmlFor="cs-name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="cs-name"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="cs-email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="cs-email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="cs-company" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    id="cs-company"
                    name="company"
                    placeholder="Your company name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/35 text-base"
                >
                  Get Case Studies
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </form>
              <p className="text-gray-400 text-sm text-center mt-4">
                We&apos;ll send detailed case studies with full metrics and methodology.
              </p>
            </div>
          </div>
        </section>

        <CtaBanner />
      </ScrollReveal>
    </>
  )
}
