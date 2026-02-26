import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import PageHero from '@/components/sections/PageHero'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Request a Quote | DiamondLinks',
  description:
    'Start your growth strategy with DiamondLinks. Tell us about your goals and receive a custom SEO or ORM quote within 24 hours.',
  alternates: { canonical: 'https://diamondlinks.com/request-a-quote/' },
  openGraph: {
    title: 'Request a Quote | DiamondLinks',
    description:
      'Start your growth strategy with DiamondLinks. Tell us about your goals and receive a custom SEO or ORM quote within 24 hours.',
    url: 'https://diamondlinks.com/request-a-quote/',
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://diamondlinks.com/" },
    { "@type": "ListItem", "position": 2, "name": "Request a Quote", "item": "https://diamondlinks.com/request-a-quote/" },
  ],
}

export default function RequestAQuotePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <ScrollReveal>
      <PageHero
        eyebrow="Get Started"
        headline="Start Your Growth"
        gradientText="Strategy"
        description="17+ years of proven SEO and ORM expertise. Tell us about your situation and we&apos;ll put together a custom strategy."
        dark={false}
      />

      {/* Quote Form + Side Info */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell Us About Your Project</h2>
                <p className="text-gray-500 text-sm mb-8">
                  Fill out the details below and we&apos;ll prepare a custom strategy tailored to your goals.
                </p>

                <form action="#" method="POST" className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="quote-name" className="block text-gray-900 text-sm font-semibold mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="quote-name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-email" className="block text-gray-900 text-sm font-semibold mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="quote-email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="quote-phone" className="block text-gray-900 text-sm font-semibold mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="quote-phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-company" className="block text-gray-900 text-sm font-semibold mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="quote-company"
                        name="company"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors"
                        placeholder="Acme Inc."
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="quote-website" className="block text-gray-900 text-sm font-semibold mb-1.5">
                        Website URL
                      </label>
                      <input
                        type="url"
                        id="quote-website"
                        name="website"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors"
                        placeholder="https://example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-industry" className="block text-gray-900 text-sm font-semibold mb-1.5">
                        Industry / Niche
                      </label>
                      <input
                        type="text"
                        id="quote-industry"
                        name="industry"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors"
                        placeholder="Healthcare, Legal, SaaS, etc."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="quote-keywords" className="block text-gray-900 text-sm font-semibold mb-1.5">
                      Target Keywords
                    </label>
                    <textarea
                      id="quote-keywords"
                      name="keywords"
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors resize-y"
                      placeholder="List 3-5 keywords you'd like to rank for"
                    />
                  </div>

                  <div>
                    <label htmlFor="quote-details" className="block text-gray-900 text-sm font-semibold mb-1.5">
                      Project Details
                    </label>
                    <textarea
                      id="quote-details"
                      name="details"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors resize-y"
                      placeholder="Tell us about your goals, challenges, and timeline"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20 text-base"
                  >
                    Request Your Custom Quote
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>

            {/* Side Info Card */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 sticky top-28">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">What happens next?</h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">1</span>
                    <p className="text-gray-600 text-sm leading-relaxed">We review your submission within 24 hours</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">2</span>
                    <p className="text-gray-600 text-sm leading-relaxed">A strategist reaches out to discuss your goals</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">3</span>
                    <p className="text-gray-600 text-sm leading-relaxed">You receive a custom strategy and quote</p>
                  </li>
                </ol>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray-500 text-xs mb-1">Prefer to talk now?</p>
                  <a href="tel:504-233-4365" className="text-blue-600 font-semibold text-sm hover:text-blue-500 transition-colors">
                    504.233.4365
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        headline="Not sure what you need?"
        subtext="Run a free analysis first. Our ORM scan and SEO audit tools give you a clear picture before committing."
        ctaLabel="Free ORM Scan"
        ctaHref="/free-orm-scan/"
      />
    </ScrollReveal>
    </>
  )
}
